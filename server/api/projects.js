import { defineEventHandler } from 'h3'
// import custombuyzImage from '@/assets/images/homeimage.jpg'


export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'CustomBuyz',
      category: {
        id: 1, 
        date: {
          en: 'June 2023',
          id_ID: 'Januari 2023',
        },
        title: {
          en: 'e-commerce',
          id_ID: 'Lagu',
        },
      },

      content: {
        en: 'A comprehensive e-commerce application designed for clients(customers)) to request for custom products such as sneakers, clothing, etc from signed up vendors(customizers)',
        id_ID: 'Lagu ini dibuat hanya untuk menguji peralatan musik kami dan untuk menghormati karya sebuah band hebat, Bring Me The Horizon.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
      },
      
      image: null,
      url: 'https://custombuyz.com',
    },

    {
      id: 2,
      title: 'Licensing System',
      category: {
        id: 1, 
        date: {
          en: 'May 2023',
          id_ID: 'Januari 2023',
        },
        title: {
          en: 'licensing/monitoring',
          id_ID: 'Lagu',
        },
      },

      content: {
        en: ' Built on the Laravel framework, it provides a secure and flexible platform for licensing applications, ensuring compliance and preventing unauthorized usage',
        id_ID: 'Lagu ini dibuat hanya untuk menguji peralatan musik kami dan untuk menghormati karya sebuah band hebat, Bring Me The Horizon.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
      },
      
      image: null,
      url: 'https://dashboard.beincome.net/public/',
    },

    {
      id: 1,
      title: 'CustomBuyz Complete Design',
      category: {
        id: 2, 
        date: {
          en: 'June 2023',
          id_ID: 'Januari 2023',
        },
        title: {
          en: 'e-commerce',
          id_ID: 'Lagu',
        },
      },

      content: {
        en: 'A comprehensive e-commerce application designed for clients(customers)) to request for custom products such as sneakers, clothing, etc from signed up vendors(customizers)',
        id_ID: 'Lagu ini dibuat hanya untuk menguji peralatan musik kami dan untuk menghormati karya sebuah band hebat, Bring Me The Horizon.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
      },
      
      image: null,
      url: 'https://custombuyz.com',
    },

    {
      id: 2,
      title: 'Balme-SSH',
      category: {
        id: 2, 
        date: {
          en: 'May 2023',
          id_ID: 'Januari 2023',
        },
        title: {
          en: 'monitoring/theft control',
          id_ID: 'Lagu',
        },
      },

      content: {
        en: 'A computer-vision based application to prevent unauthorized access to the balme library at the university of Ghana',
        id_ID: 'Lagu ini dibuat hanya untuk menguji peralatan musik kami dan untuk menghormati karya sebuah band hebat, Bring Me The Horizon.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
      },
      
      image: null,
      url: 'https://dashboard.beincome.net/public/',
    },

  ]
})
