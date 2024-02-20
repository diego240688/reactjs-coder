const products = [
    {
      id: 1,
      titulo: "El nombre del viento",
      img:'https://http2.mlstatic.com/D_NQ_NP_897898-MLA41780377374_052020-O.webp',
      precio: 20.99,
      descripcion: "Una novela épica de fantasía escrita por Patrick Rothfuss.",
      genero: "Fantasía",
      stock: 10,
    },
    {
      id: 2,
      titulo: "Cien años de soledad",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0Uc9IMl6y6UZ5xO_mTK-mrv1DLOi_PBUon6VGRazg6AsTBlI',
      precio: 18.50,
      descripcion: "Obra maestra del realismo mágico escrita por Gabriel García Márquez.",
      genero: "Novela",
      stock: 5,
    },
    {
      id: 3,
      titulo: "1984",
      img:' https://http2.mlstatic.com/D_NQ_NP_717384-MLU72521938748_102023-O.webp',
      precio: 15.75,
      descripcion: "Una novela distópica escrita por George Orwell.",
      genero: "Ciencia Ficción",
      stock: 15,
    },
    {
      id: 4,
      titulo: "Orgullo y prejuicio",
      img:'https://http2.mlstatic.com/D_NQ_NP_776959-MLU71254687890_082023-O.webp',
      precio: 12.99,
      descripcion: "Clásico de la literatura inglesa escrito por Jane Austen.",
      genero: "Novela",
      stock: 7,
    },
    {
      id: 5,
      titulo: "El hobbit",
      img:'https://http2.mlstatic.com/D_NQ_NP_760249-MLU72893041492_112023-O.webp',
      precio: 22.00,
      descripcion: "Una novela de fantasía escrita por J.R.R. Tolkien.",
      genero: "Fantasía",
      stock: 12,
    },
    {
      id: 6,
      titulo: "Don Quijote de la Mancha",
      img:'https://http2.mlstatic.com/D_NQ_NP_676930-MLA49809063614_042022-O.webp',
      precio: 17.80,
      descripcion: "Obra cumbre de la literatura española escrita por Miguel de Cervantes.",
      genero: "Novela",
      stock: 9,
    },
    {
      id: 7,
      titulo: "Harry Potter y la piedra filosofal",
      img:'https://http2.mlstatic.com/D_NQ_NP_647952-MLU72520023188_102023-O.webp',
      precio: 19.95,
      descripcion: "El primer libro de la famosa saga escrita por J.K. Rowling.",
      genero: "Fantasía",
      stock: 14,
    },
    {
      id: 8,
      titulo: "Matar a un ruiseñor",
      img:'https://http2.mlstatic.com/D_NQ_NP_801213-MLU72892504686_112023-O.webp',
      precio: 16.25,
      descripcion: "Una novela clásica de Harper Lee que aborda temas de justicia y racismo.",
      genero: "Novela",
      stock: 6,
    },
    {
      id: 9,
      titulo: "Las aventuras de Tom Sawyer",
      img:'https://http2.mlstatic.com/D_NQ_NP_839740-MLA45512034066_042021-O.webp',
      precio: 14.50,
      descripcion: "Novela de aventuras escrita por Mark Twain.",
      genero: "Novela",
      stock: 11,
    },
    {
      id: 10,
      titulo: "Los pilares de la Tierra",
      img:' https://http2.mlstatic.com/D_NQ_NP_717805-MLU71629459212_092023-O.webp',
      precio: 21.75,
      descripcion: "Épica historia escrita por Ken Follett que se desarrolla en la Edad Media.",
      genero: "Novela",
      stock: 8,
    },
    {
      id: 11,
      titulo: "Ciencias Naturales 1",
      img:'https://http2.mlstatic.com/D_NQ_NP_774258-MLA54246048308_032023-O.webp',
      precio: 60.00,
      descripcion: "Principales contenidos del libro Capítulo 1. La materia y sus propiedades ,Capítulo 2. Las mezclas,Capítulo 3. El agua,Capítulo 4. La energía.",
      genero: "Educacion",
      stock: 15,
    },
    {
      id: 12,
      titulo: "Dinámica Biología 2",
      img:'https://http2.mlstatic.com/D_NQ_NP_790214-MLA48872394707_012022-O.webp',
      precio: 60.00,
      descripcion: "Principales contenidos del libro Capítulo 1. Diversidad de los seres vivos ,Capítulo 2. Evolución por selección natural ,Capítulo 3. El origen de las primeras células ,Capítulo 4. La célula: estructura y funcionamiento",
      genero: "Educacion",
      stock: 15,
    },
    {
      id: 13,
      titulo: "Dinámica Biología 3",
      img:'https://http2.mlstatic.com/D_NQ_NP_889968-MLA48872325986_012022-O.webp',
      precio: 60.00,
      descripcion: "Principales contenidos del libro Capítulo 1. Diversidad de los seres vivos ,Capítulo 2. Evolución por selección natural ,Capítulo 3. El origen de las primeras células ,Capítulo 4. La célula: estructura y funcionamiento",
      genero: "Educacion",
      stock: 15,
    },
    {
      id: 14,
      titulo: "Hacer Matemática 7/1",
      img:'https://http2.mlstatic.com/D_NQ_NP_888779-MLA74290546467_012024-O.webp',
      precio: 70.00,
      descripcion: "Principales contenidos del libro Capítulo 1. Circunferencias, círculos y triángulos ,Capítulo 2. Números naturales,Capítulo 3. Operaciones con números naturales,Capítulo 4. Números racionales",
      genero: "Educacion",
      stock: 4,
    },
    {
      id: 15,
      titulo: "Hacer Matemática 2",
      img:'https://http2.mlstatic.com/D_NQ_NP_652745-MLA71143640483_082023-O.webp',
      precio: 70.00,
      descripcion: "Principales contenidos del libro Capítulo 1. Múltiplos y divisores Capítulo 2. Circunferencia y triángulos,Capítulo 3. Fórmulas para contar y medir, Capítulo 4. Números enteros",
      genero: "Educacion",
      stock: 3,
    },
    {
      id: 16,
      titulo: "Hacer Matemática 2/3",
      img:'https://http2.mlstatic.com/D_NQ_NP_783697-MLU69210628559_052023-O.webp',
      precio: 85.00,
      descripcion: "Principales contenidos del libro Capítulo 1. Combinatoria y Probabilidad,Capítulo 2. Números enteros y divisibilidad,Capítulo 3. Área y perímetro,Capítulo 4. Análisis de funciones",
      genero: "Educacion",
      stock: 3,
    },
    {
      id: 17,
      titulo: "Fahrenheit 451",
      img:'https://http2.mlstatic.com/D_NQ_NP_942056-MLA40811016890_022020-O.webp',
      precio: 150.00,
      descripcion: "La novela ha sido objeto de interpretaciones que se enfocan en el papel histórico que ha tenido la quema de libros para reprimir ideas disidentes. ",
      genero: "Ciencia Ficción",
      stock: 15,
    },
    {
      id: 18,
      titulo: "Dune",
      img:'https://http2.mlstatic.com/D_NQ_NP_951620-MLA43677613114_102020-O.webp',
      precio: 180.00,
      descripcion: "Dune es una novela épica de ciencia ficción escrita por Frank Herbert en 1965. ",
      genero: "Ciencia Ficción",
      stock: 4,
    },
    
    
  
  
  ];
export  const getProducts =(genreid) =>{
        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve (products)
            },1500 )
        })
  } 
export const getProductsByGenre = (genreid) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.genero === genreid);
        resolve(filteredProducts);
      }, 1500);
    });
  };
  export const getProductsByid = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id));
        }, 1500);
    });
};


