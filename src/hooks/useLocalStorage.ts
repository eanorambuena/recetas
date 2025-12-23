import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para almacenar nuestro valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Obtener del localStorage
      const item = window.localStorage.getItem(key)
      // Parsear JSON almacenado o devolver initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Si hay error, devolver initialValue
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Función para actualizar el valor
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir que value sea una función para tener la misma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Guardar el estado
      setStoredValue(valueToStore)
      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // Un error más detallado en desarrollo
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  // Función para limpiar el valor del localStorage
  const removeValue = () => {
    try {
      setStoredValue(initialValue)
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }

  // Función para verificar si hay datos en localStorage
  const hasValue = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null
    } catch (error) {
      return false
    }
  }

  return {
    value: storedValue,
    setValue,
    removeValue,
    hasValue
  }
}

// Hook específico para datos bancarios con cache inteligente
export function useBankDataCache() {
  const CACHE_KEY = 'virgin-bank-data'
  const CACHE_TIMESTAMP_KEY = 'virgin-bank-data-timestamp'
  const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 horas en milisegundos

  const { value: cachedData, setValue: setCachedData, removeValue: clearCache, hasValue } = useLocalStorage<any>(CACHE_KEY, null)
  const { value: timestamp, setValue: setTimestamp } = useLocalStorage<number | null>(CACHE_TIMESTAMP_KEY, null)

  // Verificar si el cache es válido (no ha expirado)
  const isCacheValid = () => {
    if (!hasValue() || !timestamp) return false
    
    const now = Date.now()
    const cacheAge = now - timestamp
    return cacheAge < CACHE_DURATION
  }

  // Obtener datos del cache si son válidos
  const getCachedData = () => {
    if (isCacheValid() && cachedData) {
      return cachedData
    }
    return null
  }

  // Guardar datos en cache con timestamp
  const saveToCacheWithTimestamp = (data: any) => {
    setCachedData(data)
    setTimestamp(Date.now())
  }

  // Limpiar cache expirado
  const clearExpiredCache = () => {
    if (!isCacheValid()) {
      clearCache()
    }
  }

  return {
    getCachedData,
    saveToCacheWithTimestamp,
    isCacheValid,
    clearCache,
    clearExpiredCache,
    cacheAge: timestamp ? Date.now() - timestamp : 0
  }
}