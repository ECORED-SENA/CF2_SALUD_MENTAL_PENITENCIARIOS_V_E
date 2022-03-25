export default {
  global: {
    componenteFormativo: 'Factores psicosociales',
    descripcionCurso:
      'El presente componente formativo tiene como objetivo, ofrecer al aprendiz conocimientos generales de la salud mental penitenciaria y programas psicosociales que se brindan a la población privada de la libertad desde los procesos de atención social y tratamiento penitenciario. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.jpg'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-interno.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Entornos penitenciarioss',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Enfermedad mental ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Atención social y tratamiento penitenciario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Comité Internacional de la Cruz Roja - CICR (2021). El CICR y la academia por las cárceles saludables: compendio de experiencias exitosas. CICR',
    },
    {
      referencia:
        'Escuela Internacional de Mediación. (2020). La realidad del entorno penitenciario. Escuela Internacional de Mediación',
      link:
        'https://eimediacion.edu.es/ser-mediador/noticias-de-mediacion/mediacion-penal-y-penitenciaria/realidad-entorno-penitenciario/',
    },
    {
      referencia:
        'Ruiz, R., D., Jara, R., M., Tuberquia, G., A. y Laverde, R., L. (2019). Factores de riesgo que influyen en la calidad de vida de las personas privadas de la libertad. Una mirada desde las dimensiones física y social. Corporación Universitaria Adventista de Colombia',
    },
    {
      referencia:
        'Congreso de Colombia. (2014). Ley 1709 de 2014. Por medio de la cual se reforman algunos artículos de la Ley 65 de 1993, de la Ley 599 de 2000, de la Ley 55 de 1985 y se dictan otras disposiciones. Diario Oficial No. 49.039',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1709_2014.html',
    },
    {
      referencia:
        'Lopera, M., M., y Hernández, P., J. (2020). Situación de salud de la población privada de la libertad en Colombia. Una revisión sistemática de la literatura. Gerencia y Políticas de Salud, 19, 1-26.',
      link: 'https://doi.org/10.11144/Javeriana.rgps19.sspp',
    },
  ],
  glosario: [
    {
      termino: 'Efectos somáticos',
      significado: 'son los que sufre la persona expuesta en su cuerpo.',
    },
    {
      termino: 'ERON',
      significado: 'Establecimiento de Reclusión del Orden Nacional.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'algo que aumenta la posibilidad de desarrollar una enfermedad.',
    },
    {
      termino: 'Hacinamiento',
      significado:
        'condición en la que hay más personas ubicadas dentro de un espacio que se considera tolerable desde una perspectiva de seguridad y salud.',
    },
    {
      termino: 'Trastorno mental',
      significado:
        'se refiere a una amplia gama de afecciones de la salud mental, es decir, trastornos que afectan el estado de ánimo, el pensamiento y el comportamiento.',
    },
  ],
  complementario: [
    {
      texto:
        'Henao, O., López, C., Moreno, G., Tabima, D., y Marín, J. (2020). El CICR y la academia por las cárceles saludables: compendio de experiencias exitosas. ',
      tipo: 'Documento resumen',
      link: 'https://hdl.handle.net/10901/19659 ',
    },
    {
      texto:
        'Congreso de Colombia (2014). Ley 1709 de 2014. Por medio de la cual se reforman algunos artículos de la Ley 65 de 1993, de la Ley 599 de 2000, de la Ley 55 de 1985 y se dictan otras disposiciones.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1709_2014.html',
    },
    {
      texto:
        'Uspec. (2020). Manual técnico administrativo para la implementación del modelo de atención en salud de la población privada de la libertad a cargo del Inpec.',
      tipo: 'Página web',
      link:
        'https://www.uspec.gov.co/wp-content/uploads/2021/10/Manual-Tcnico-Administrativo-para-la-Implementacin-del-Modelo-de-Atencin-en-Salud-de-la-Poblacin-Privada-de-la-Libertad-a-Cargo-del-INPEC.pdf',
    },
    {
      texto:
        'Congreso de Colombia. (1993). Ley 63 de 1993. Por la cual se expide el Código Penitenciario y Carcelario. 26 de julio de 2006. D.O. No. 40.999.',
      tipo: 'Ley de la República de Colombia',
      descarga: [
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0065_1993.html#:~:text=Diario%20Oficial%20No.,el%20C%C3%B3digo%20Penitenciario%20y%20Carcelario.&text=Nadie%20puede%20ser%20sometido%20a,previamente%20definido%20en%20la%20ley',
      ],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Carmen Tulia Bermúdez',
        cargo: 'Profesional Especializado',
        centro: 'INPEC',
      },
      {
        nombre: 'Franky Alexy Ortiz Peña',
        cargo: 'Profesional Especializado',
        centro: 'INPEC',
      },
      {
        nombre: 'Sandra Vargas',
        cargo: 'Profesional Especializado',
        centro: 'INPEC',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Tinoco Torres'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
