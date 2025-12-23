import React, { useState } from 'react';
import { BookOpen, Clock, Users, ChefHat, ArrowLeft, Check, Heart, Flame, Coffee, Utensils, MapPin, Fish, WheatOff, Camera, Youtube, ExternalLink } from 'lucide-react';

// Textura de papel SVG (Mantenida)
const paperTexture = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4c5b0' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const recipes = [
  {
    id: 'ratatouille',
    title: 'Ratatouille a la Olla',
    category: 'Plato Principal',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: '4-6',
    icon: <Utensils className="w-6 h-6" />,
    color: 'red',
    image: 'https://placehold.co/600x400/fee2e2/991b1b?text=Ratatouille+Casero',
    story: `La primera vez que probé este plato fue en la universidad y me di cuenta de que era posible comer delicioso sin carne. 
    
    La verdadera adaptación ocurrió durante mi intercambio. Allá no tenía horno y el microondas estaba lejos, así que todo se hacía frito o en olla. Ahí aprendí a hacerlo en la cocina (estufa) y me encantó el resultado. Es una receta salvadora: una olla grande rinde para varios días.`,
    ingredients: [
      { name: '1 Berenjena mediana', needed: true },
      { name: '1 Zapallo Italiano (Calabacín)', needed: true },
      { name: '5 Tomates (aprox, ratio 5:1:1)', needed: true },
      { name: '½ Cebolla (cubos o pluma)', needed: true },
      { name: '2 Zanahorias ralladas (El secreto)', needed: true },
      { name: 'Salsa de tomate (para el fondo)', needed: true },
      { name: 'Especias: Albahaca, Perejil, Cúrcuma', needed: true },
      { name: 'Sal, Pimienta y Aceite', needed: true }
    ],
    steps: [
      { title: 'El Sofrito Base', desc: 'En una olla amplia, sofríe la cebolla. Agrega la zanahoria rallada (clave para el dulzor) y cocina hasta ablandar. Cubre con salsa de tomate. Baja el fuego.' },
      { title: 'Laminar Verduras', desc: 'Corta la berenjena, el zapallo y los tomates en rodajas finas de grosor similar.' },
      { title: 'Armado en Espiral', desc: 'Sobre la "cama" de salsa, acomoda las rodajas intercaladas (Berenjena - Tomate - Zapallo) llenando la olla.' },
      { title: 'Sazón y Vapor', desc: 'Espolvorea sal, pimienta, hierbas y cúrcuma. Tapa herméticamente (usa papel aluminio si la tapa no ajusta bien).' },
      { title: 'Cocción', desc: 'Cocina a fuego medio-bajo por 30 min. Servir idealmente con arroz con cúrcuma.' }
    ],
    tips: "El arroz de acompañamiento queda increíble si le echas cúrcuma o curry."
  },
  {
    id: 'cola-de-mono',
    title: 'Cola de Mono "Mamá Carmen"',
    category: 'Bebida / Postre',
    prepTime: '15 min',
    cookTime: 'Enfriar',
    servings: '1.5 Litros',
    icon: <Coffee className="w-6 h-6" />,
    color: 'amber',
    image: 'https://placehold.co/600x400/fef3c7/92400e?text=Cola+de+Mono+Cremoso',
    story: `Esta receta nace de mi abuela, Mamá Carmen. Ella nunca mide nada, así que fue un desafío adaptarlo a receta fija por teléfono. 
    
    La recreé en Países Bajos. Tuve que buscar leche condensada en Albert Heijn porque en el supermercado Jumbo de allá (que es una cadena holandesa y NO el mismo Jumbo de Chile) no tenían idea qué era.
    
    Al no haber aguardiente, usamos Whisky y fue un éxito internacional con amigos de Perú, Corea, Hungría y EE.UU.`,
    ingredients: [
      { name: '1 y ½ latas de Leche Condensada', needed: true },
      { name: 'Agua (para la infusión)', needed: true },
      { name: '1 cdta Café Instantáneo (o al gusto)', needed: true },
      { name: 'Canela: 1 cdta en Polvo (o 1 Rama entera)', needed: true },
      { name: '4-5 Clavos de olor (pequeños)', needed: true },
      { name: 'Extracto de Vainilla (gotitas)', needed: true },
      { name: 'Aguardiente o Whisky (al gusto)', needed: true }
    ],
    steps: [
      { title: 'La Infusión', desc: 'Hierve agua con la canela (polvo o rama), la cucharadita de café y los clavos de olor. Debe quedar bien aromático.' },
      { title: 'La Mezcla', desc: 'Agrega la leche condensada a la infusión caliente. Revuelve bien hasta integrar.' },
      { title: 'El Perfume', desc: 'Apaga el fuego. Inmediatamente añade las gotas de vainilla (para que no se evapore el aroma).' },
      { title: 'La Malicia', desc: 'Deja enfriar bien. Puedes mezclar el alcohol en la botella o servirlo "virgen" y que cada uno agregue Whisky o Aguardiente en su vaso.' }
    ],
    tips: "Si usas café instantáneo es más fácil controlar la intensidad. Para la canela: polvo es más rápido, si usas rama déjala hervir un poco más."
  },
  {
    id: 'chaufa',
    title: 'Arroz Chaufa "Fabri"',
    category: 'Plato Principal',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: '3-4',
    icon: <Flame className="w-6 h-6" />,
    color: 'orange',
    image: 'https://placehold.co/600x400/ffedd5/9a3412?text=Chaufa+Casero',
    story: `Esta receta me la enseñó mi amigo Fabri (de Perú) en Maastricht, el mismo lugar donde nacieron las otras recetas de este libro.

    La magia es que NO necesitas un wok; se hace perfectamente en una olla normal o pirolo. Es un plato muy noble y adaptable: en el intercambio cultivaba cebollines en agua, tal como mi mamá hace ahora con las cebollas en casa para tener siempre tallos verdes frescos.
    
    Lo he replicado en casita quitando el jengibre o la cebolla para quienes no pueden comerlos, y sigue siendo delicioso.`,
    ingredients: [
      { name: 'Arroz blanco cocido (frío/ayer)', needed: true },
      { name: 'Pechuga de pollo en dados', needed: true },
      { name: 'Huevos (2 o 3)', needed: true },
      { name: 'Mix Chapsui / Verduras', needed: true },
      { name: 'Cebollín (parte blanca y verde)', needed: true },
      { name: 'Opcional: Tallos de cebolla cultivada en agua', needed: false },
      { name: 'Opcional: Arrollados Primavera', needed: false },
      { name: 'Opcional: Hojas de Betarraga (sabor acelga)', needed: false },
      { name: 'Jengibre rallado (Opcional)', needed: true },
      { name: 'Salsa de Soya y Aceite', needed: true },
    ],
    steps: [
      { title: 'El Utensilio Mágico', desc: 'No necesitas wok. Usa una olla común o pirolo en la cocina (estufa). Lo importante es que esté caliente.' },
      { title: 'Preparación del Arroz', desc: 'Asegúrate de que el arroz esté bien frío. Si tiene grumos, sepáralos antes.' },
      { title: 'El Huevo y Proteína', desc: 'Haz una tortilla de huevo rápida, retírala y pícala. Luego, dora el pollo (con jengibre si te gusta) en la misma olla.' },
      { title: 'Verduras', desc: 'Agrega las verduras y saltea. Si tienes hojas de betarraga, agrégalas picadas finas ahora.' },
      { title: 'El Matrimonio', desc: 'Incorpora el arroz frío y el huevo. Saltea todo junto. Si usas Arrollados Primavera, agrégalos ahora para que se calienten y acompañen.' },
      { title: 'Toque Final', desc: 'Agrega la soya al final. Termina decorando con la parte verde del cebollín o los tallos de cebolla de agua.' }
    ],
    tips: "Si cultivas cebollas en agua, esos tallos verdes frescos son el mejor toque final."
  },
  {
    id: 'tacos-atun',
    title: 'Tacos Jugosos de Atún',
    category: 'Cena Rápida / Saludable',
    prepTime: '10 min',
    cookTime: '10 min',
    servings: '12 Tacos',
    icon: <Fish className="w-6 h-6" />,
    color: 'teal',
    image: 'https://placehold.co/600x400/ccfbf1/115e59?text=Tacos+de+At%C3%BAn',
    story: `Versión optimizada, saludable y económica. La genialidad de esta receta está en la química: al juntar el aceite del atún con el agua que sueltan los zapallos italianos, se crea una emulsión natural (una "salsita") que reemplaza a la crema o mayonesa.

    Es un plato de aprovechamiento total: usamos hasta el aceite de la lata y las hojas de la betarraga. Además, al usar tortillas de maíz, son perfectos para celíacos.`,
    ingredients: [
      { name: '2 latas de Atún en aceite (No escurrir todo)', needed: true },
      { name: '3 Zapallos Italianos (Clave para la jugosidad)', needed: true },
      { name: '2 Zanahorias y ½ Pimentón', needed: true },
      { name: '1 puñado Hojas de Betarraga (lavadas)', needed: true },
      { name: '12 Tortillas de Maíz', needed: true },
      { name: 'Guacamole: 1 Palta + 1 Tomate', needed: true },
      { name: '½ Lechuga Escarola (frescura crujiente)', needed: true }
    ],
    steps: [
      { title: 'Mise en Place', desc: 'Pica zanahoria, pimentón y zapallo en cubos o tiras. Pica la lechuga y resérvala. Lava y corta las hojas de betarraga.' },
      { title: 'El Salteado Base', desc: 'En sartén caliente, sofrie zanahoria y pimentón (usa un poco del aceite del atún) hasta que ablanden.' },
      { title: 'La Jugosidad', desc: 'Agrega los 3 zapallos italianos. Cocina hasta que suelten su líquido; esto es fundamental para el guiso.' },
      { title: 'La Emulsión', desc: 'Incorpora el atún (con el resto de su aceite) y las hojas de betarraga. Al mezclarse con el jugo del zapallo, se creará la salsa natural. Cocina 2 min.' },
      { title: 'El Armado', desc: 'Calienta las tortillas. Sirve el salteado caliente, pon lechuga fresca encima para lo crujiente y remata con el guacamole (palta+tomate).' }
    ],
    celiacFriendly: true,
    tips: "No escurras todo el aceite del atún, ¡ahí está el sabor y la base de la salsa!"
  },
  {
    id: 'lasagna-sarten',
    title: 'Lasagna de Sartén (Adaptada)',
    category: 'Plato Principal',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '4',
    icon: <Utensils className="w-6 h-6" />,
    color: 'red',
    image: 'https://placehold.co/600x400/fee2e2/991b1b?text=Lasagna+de+Sart%C3%A9n',
    link: 'https://youtube.com/shorts/GFjPxgCXjH0?si=EPByBuYkoCshEy4A',
    story: `Inspirada en un video viral ("Las Recetas de Simón"), pero adaptada con lo que tenía en casa y mis propias reglas de no desperdicio. 
    
    Reemplacé la carne por Carne de Soya y adapté la salsa usando un tomate molido extra para simular pasta de tomate. Además, usé Queso Ranco en láminas (bien chileno) y picar el ajo en cubitos en vez de rallarlo para "no perder ni un gramo".`,
    ingredients: [
      { name: 'Carne de Soya (hidratada previamente)', needed: true },
      { name: 'Láminas de Lasagna (pre-cocida o normal)', needed: true },
      { name: '1 Salsa de Tomate (cajita/tarro)', needed: true },
      { name: '1 Tomate molido (simula pasta tomate)', needed: true },
      { name: '1 Tomate en cubitos (para textura)', needed: true },
      { name: 'Queso Ranco en láminas', needed: true },
      { name: 'Tallo de cebolla picado (reemplaza cebolla)', needed: true },
      { name: 'Ajo en cubitos pequeños (NO rallado)', needed: true },
    ],
    steps: [
      { title: 'Base de Sabor', desc: 'En un sartén amplio, sofríe el ajo en cubitos (para aprovecharlo todo) y los tallos de cebolla.' },
      { title: 'La Proteína', desc: 'Agrega la carne de soya hidratada y saltéala con los aliños para que tome sabor.' },
      { title: 'La Salsa Triple', desc: 'Incorpora la salsa de tomate, el tomate molido (que hace de pasta concentrada) y el tomate en cubitos. Cocina unos minutos.' },
      { title: 'El Armado Express', desc: 'Rompe las láminas de lasagna en trozos irregulares e insértalos directamente en la salsa caliente, asegurándote de que queden cubiertos.' },
      { title: 'Gratinado', desc: 'Cuando la pasta esté casi lista, cubre la superficie con láminas de Queso Ranco. Tapa el sartén para que se derrita con el vapor.' }
    ],
    tips: "Al picar el ajo en cubitos en vez de rallarlo, aprovechas el 100% del diente y evitas que se quede pegado en el rallador."
  },
  {
    id: 'currywurst',
    title: 'Currywurst Viena-Jumbo',
    category: 'Cena Rápida / Snack',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: '2',
    icon: <MapPin className="w-6 h-6" />,
    color: 'yellow',
    image: 'https://placehold.co/600x400/fef08a/854d0e?text=Currywurst+Chileno',
    story: `Este plato es una fusión de recuerdos. Mis Currywurst favoritas fueron en la plaza detrás de la Ópera en Viena y en los mercados de Alemania. 

    Allá te las sirven cortadas para comer con tenedor de madera o dentro de un pan (tipo baguette). En Chile lo adapté a nuestra cultura: ¡en Marraqueta! (como un choripán) o simplemente cortadas con mondadientes ("pinchos").

    Como no hay salchichas vienesas originales, las Käsewurst del Jumbo chileno son el mejor reemplazo. Las papas fritas son buena opción, pero no superan a una marraqueta crujiente.`,
    ingredients: [
      { name: 'Salchichas Alemanas Jumbo (Käsewurst)', needed: true },
      { name: 'Ketchup (cantidad generosa)', needed: true },
      { name: 'Curry en Polvo (Amarillo)', needed: true },
      { name: 'Marraqueta (estilo choripán) o Pan Baguette', needed: true },
      { name: 'Opcional: Cebolla picada fina', needed: true },
      { name: 'Opcional: Papas Fritas', needed: false }
    ],
    steps: [
      { title: 'Las Salchichas', desc: 'Dora las salchichas en un sartén o plancha hasta que estén bien cocidas y la piel crujiente. Cuidado al morderlas que el queso explota.' },
      { title: 'La Salsa Express', desc: 'En una olla pequeña, sofríe un poco de cebolla (opcional). Agrega abundante Ketchup y una cucharada generosa de Curry en polvo. Caliéntalo para activar las especias.' },
      { title: 'El Estilo', desc: 'Elige tu aventura: Pon la salchicha entera dentro de la marraqueta crujiente (estilo chileno) o córtala en rodajas para comer con pinchos (estilo europeo).' },
      { title: 'Baño de Gloria', desc: 'Baña las rodajas o el interior del pan con la salsa caliente. Para terminar, espolvorea más polvo de curry crudo encima. ¡Ahí está el secreto!' }
    ],
    tips: "Las Käsewurst del Jumbo son saladas por el queso, tenlo en cuenta si agregas sal a las papas."
  }
];

// Componente para tarjetas individuales en el inicio
const RecipeCard = ({ recipe, onClick }) => (
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
);

// Componente de Vista Detallada
const RecipeDetail = ({ recipe, onBack }) => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

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
                {recipe.ingredients.map((ing, idx) => (
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
                {recipe.steps.map((step, idx) => {
                  const isDone = completedSteps.includes(idx);
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
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Principal
export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
  );
}
