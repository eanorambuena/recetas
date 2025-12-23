import { Utensils, Coffee, Flame, Fish, MapPin } from 'lucide-react'

export const recipes = [
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
]
