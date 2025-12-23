import { useState } from 'react'
import { BookOpen, Clock, Users, ChefHat, ArrowLeft, Check, Heart, Flame, WheatOff, Camera, Youtube, ExternalLink } from 'lucide-react'
import { recipes } from './data/recipes'

// Textura de papel SVG (Mantenida)
const paperTexture = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4c5b0' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`

// Componente para tarjetas individuales en el inicio
const RecipeCard = ({ recipe, onClick }: { recipe: any; onClick: (recipe: any) => void }) => (
  <div 
    onClick={() => onClick(recipe)}
    className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-stone-200 flex flex-col h-full relative"
  >
    <div className={`h-3 w-full bg-${recipe.color}-500`}></div>
    
    {/* Badge Celíaco */}
    {recipe.celiacFriendly && (
      <div className="absolute top-4 right-4 bg-teal-100 text-teal-700 p-1.5 rounded-full z-10 shadow-sm" title="Apto Celíacos">
        <WheatOff size={16} />
      </div>
    )}

    {/* Imagen de Previsualización (Opcional en Tarjeta) */}
    <div className="h-40 w-full overflow-hidden bg-gray-100 relative">
        <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className={`absolute bottom-0 left-0 p-2 bg-white/90 rounded-tr-lg text-${recipe.color}-600`}>
             {recipe.icon}
        </div>
    </div>

    <div className="p-5 flex-1 flex flex-col">
      <div className="mb-2">
        <span className="text-xs font-bold tracking-wider text-stone-400 uppercase">{recipe.category}</span>
      </div>
      
      <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 group-hover:text-${recipe.color}-600 transition-colors">
        {recipe.title}
      </h3>
      
      <p className="text-stone-500 text-sm line-clamp-2 mb-4 flex-1 italic">
        "{recipe.story.substring(0, 80)}..."
      </p>

      <div className="flex items-center justify-between text-xs text-stone-500 font-medium pt-4 border-t border-stone-100">
        <div className="flex items-center gap-1" title="Tiempo de Preparación">
          <Clock size={14} className="text-stone-400" />
          <span>{recipe.prepTime}</span>
        </div>
        <div className="flex items-center gap-1" title="Tiempo de Cocción">
            <Flame size={14} className="text-orange-400" />
            <span>{recipe.cookTime}</span>
        </div>
      </div>
    </div>
  </div>
)

// Componente de Vista Detallada
const RecipeDetail = ({ recipe, onBack }: { recipe: any; onBack: () => void }) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index))
    } else {
      setCompletedSteps([...completedSteps, index])
    }
  }

  return (
    <div className="animate-fade-in min-h-screen" style={{ backgroundImage: paperTexture, backgroundColor: '#fdfbf7' }}>
      {/* Navbar Navegación */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-50 px-4 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
                onClick={onBack}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-600"
            >
                <ArrowLeft size={24} />
            </button>
            <h2 className="font-serif font-bold text-lg text-stone-800 truncate hidden md:block">{recipe.title}</h2>
          </div>
          
          {/* Botón de Link Externo en Navbar (si existe) */}
          {recipe.link && (
            <a 
                href={recipe.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold hover:bg-red-100 transition-colors"
            >
                <Youtube size={16} />
                <span className="hidden sm:inline">Ver Video Original</span>
            </a>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Sección de Foto Principal (Galería) */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-stone-200 relative group h-64 md:h-96 w-full">
            <img 
                src={recipe.image} 
                alt={`Foto de ${recipe.title}`} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Título sobre la imagen */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full text-white">
                <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 bg-${recipe.color}-500/90 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm`}>
                        {recipe.category}
                    </span>
                    {recipe.celiacFriendly && (
                        <span className="px-3 py-1 bg-teal-500/90 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                            <WheatOff size={12} /> Celiacos OK
                        </span>
                    )}
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 drop-shadow-md">{recipe.title}</h1>
            </div>

            {/* Icono de Cámara (Decorativo para indicar galería) */}
            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white/80">
                <Camera size={20} />
            </div>
        </div>

        {/* Datos Rápidos */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 text-sm text-stone-600 font-medium">
            <div className="flex items-center gap-3 bg-white/80 px-5 py-3 rounded-xl border border-stone-100 shadow-sm">
                <Clock size={20} className="text-stone-400" /> 
                <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Prep</span>
                    <span className="font-bold text-stone-700">{recipe.prepTime}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 px-5 py-3 rounded-xl border border-stone-100 shadow-sm">
                <Flame size={20} className="text-orange-500" /> 
                <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Cocción</span>
                    <span className="font-bold text-stone-700">{recipe.cookTime}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 px-5 py-3 rounded-xl border border-stone-100 shadow-sm">
                <Users size={20} className="text-blue-400" /> 
                <div className="flex flex-col leading-none">
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Rinde</span>
                    <span className="font-bold text-stone-700">{recipe.servings}</span>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Historia */}
          <div className="lg:col-span-1 space-y-6">
            <div className={`bg-${recipe.color}-50 p-6 rounded-2xl border border-${recipe.color}-200 shadow-sm`}>
              <h3 className={`font-bold text-${recipe.color}-800 mb-4 flex items-center gap-2`}>
                <BookOpen size={20} /> Historia
              </h3>
              <p className={`text-${recipe.color}-900/80 text-sm leading-relaxed whitespace-pre-line`}>
                {recipe.story}
              </p>
              
              {/* Link en la historia si existe */}
              {recipe.link && (
                  <div className="mt-4 pt-4 border-t border-${recipe.color}-200">
                      <a href={recipe.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-red-600 hover:underline">
                          <Youtube size={16} />
                          Ver Video de Inspiración
                          <ExternalLink size={12} />
                      </a>
                  </div>
              )}
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-700 mb-4 flex items-center gap-2">
                <ChefHat size={20} /> Tips del Chef
              </h3>
              <p className="text-stone-600 text-sm italic">
                {recipe.tips}
              </p>
            </div>
          </div>

          {/* Columna Derecha: Receta */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Ingredientes */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/60">
              <h3 className="text-2xl font-serif font-bold mb-6 pb-2 border-b border-stone-100 text-stone-800">Ingredientes</h3>
              <ul className="grid md:grid-cols-2 gap-y-3 gap-x-8">
                {recipe.ingredients.map((ing: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <input 
                      type="checkbox" 
                      className={`mt-1.5 w-4 h-4 rounded border-stone-300 text-${recipe.color}-600 focus:ring-${recipe.color}-500 cursor-pointer`}
                    />
                    <span className="text-stone-700 group-hover:text-stone-900 transition-colors">{ing.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instrucciones */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/60">
              <h3 className="text-2xl font-serif font-bold mb-6 pb-2 border-b border-stone-100 text-stone-800">Instrucciones</h3>
              <div className="space-y-6">
                {recipe.steps.map((step: any, idx: number) => {
                  const isDone = completedSteps.includes(idx)
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleStep(idx)}
                      className={`flex gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border ${isDone ? 'bg-stone-50 border-stone-200' : 'bg-white border-transparent hover:border-stone-200 hover:shadow-sm hover:bg-stone-50'}`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isDone ? 'bg-green-500 text-white' : `bg-${recipe.color}-100 text-${recipe.color}-700`}`}>
                        {isDone ? <Check size={16} /> : idx + 1}
                      </div>
                      <div className={isDone ? 'opacity-50' : ''}>
                        <h4 className={`font-bold ${isDone ? 'text-stone-500 line-through' : 'text-stone-800'}`}>{step.title}</h4>
                        <p className={`text-sm mt-1 ${isDone ? 'text-stone-400' : 'text-stone-600'}`}>{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// Componente Principal
export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  return (
    <div className="min-h-screen text-stone-800 font-sans selection:bg-amber-100" style={{ backgroundImage: paperTexture, backgroundColor: '#fdfbf7' }}>
      
      {selectedRecipe ? (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onBack={() => setSelectedRecipe(null)} 
        />
      ) : (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-stone-900 text-white p-4 rounded-2xl shadow-lg transform -rotate-3 border-2 border-stone-800">
                <BookOpen size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-4 tracking-tight drop-shadow-sm">
              Recetario Familiar
            </h1>
            <p className="text-xl text-stone-600 italic max-w-2xl mx-auto font-serif">
              Preservando los sabores, las historias y los secretos de nuestra cocina.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={setSelectedRecipe} 
              />
            ))}
          </div>

          <footer className="mt-20 text-center text-stone-500 text-sm font-medium">
            <p className="flex items-center justify-center gap-2">
              Hecho con <Heart size={14} className="text-red-500 fill-current" /> para la familia
            </p>
          </footer>
        </div>
      )}
    </div>
  )
}