import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      whos: 'Quienes Somos',
      año: 'en el año',
      el:'El',
      es:'es',
      y: 'y',
      texto_home:' que se basa en un proyecto educativo dirigido a infancia, adolescencia y juventud con el objetivo de promover su educación y su implicación social.',
      texto_home2: "del grupo se basa en los 3 pilares más importantes del movimiento scout",
      t_pilar_1:'',
      t_pilar_2_1:'La vida en',
      t_pilar_2_2:'pequeños grupos:',
      t_pilar_3:'La formación',
      texto_pilar_1:'El joven establece libremente un compromiso personal ante sus compañeros, asumiendo una responsabilidad: social, personal, ética… resumidos en la promesa y la Ley Scout.',
      texto_pilar_2:'El pequeño grupo socializa, identifica a sus miembros con los objetivos de las actividades y permite profundizar en el conocimiento mutuo.',
      texto_pilar_3:'Cada joven participa en su propio proceso de desarrollo, formando parte activa de las diferentes etapas en las que se determina el Programa Educativo',
      lucro: 'sin ánimo de lucro',
      miembro:'miembro',
      es_una: 'es una',
      sin: 'sin',
      portanto:' y por tanto de la ',
      whos_text:'orientado por adultos voluntarios comprometidos en el servicio educativo, que ofrece los medios y ocasiones necesarios a fin de contribuir a la educación integral de las personas,  potenciando principalmente su sentido de la responsabilidad, libertad y servicio, según el Método Scout iniciado por ',
      patron_t:'San Jorge, Patrón de los Scouts',
      sections: 'Secciones',
      join: 'Apúntate',
      w_scout: 'Mundo Scout',
      store:"tienda",
      where:"¿Dónde estamos?",
      where_t:'DÓNDE ESTAMOS',
      where2:"Nos situamos en la calle Camino de la Iglesia, en los bajos 33-35, CP: 15009 A Coruña (A Coruña).",
      patrontext1:'Los ciudadanos tenían la obligación de entregar al dragón a varias personas de la ciudad con cierta regularidad. Una de esas veces, le tocó a la hija del rey ser devorada por el dragón. La dejaron junto a la fuente, sola. En aquel momento pasó San Jorge por allí, mató al monstruo y rescató a la princesa, liberando a la ciudad de su castigo. Se dice que en el lugar donde se derramó la sangre de la bestia creció una rosa roja.',
      patrontext2:'Es una de las leyendas más extendidas del mundo, y la creencia en San Jorge y su historia existe en muchos países y culturas, adaptada a la religión correspondiente.',
      patrontext4:'San Jorge tiene también mucha importancia como patrón y símbolo en muchas zonas y ciudades.',
      patrontext5:'Fue patrón de Inglaterra durante muchos años, es el ideal del caballero medieval y la llamada “cruz de San Jorge” (roja sobre fondo blanco, a veces con los extremos rematados por flores de Lis) está presente en muchas banderas, entre ellas la de Reino Unido y la de Cataluña.',
      patrontext6:'Baden Powell eligió a San Jorge como patrón de los scouts de todo el mundo. En ',
      patrontext7:'Tenían por patrón (los Caballeros de la Mesa Redonda) a San Jorge, porque éste era el único santo a caballo. Es el santo patrón de la Caballería y de Inglaterra.',
      /*textos pestaña World_Scout*/
      mov_scout:'MOVIMIENTO SCOUT',
      mov_scout_txt_1:' El movimiento Scout, fundado en el año 1907 por Baden Powell en Inglaterra, es una organización que se basa en un proyecto educativo dirigido a infancia, adolescencia y juventud con el objetivo de promover su educación integral y su implicación social. El escultismo trabaja con y para la infancia y la juventud con la ilusión de construir un mundo mejor a través del liderazgo entre iguales.',
      tittle_mision: 'Nuestra misión:',
      text_mision:'Contribuir a la educación y desarrollo de las personas, especialmente durante la niñez, la adolescencia y la juventud, a través de un sistema de valores basado en la Promesa y la Ley Scout, para ayudar a construir un mundo mejor. También queremos que las personas crezcan con capacidades que les permitan desarrollarse  como adultos con un amplio nivel de autonomía y liderazgo, para contribuir a crear un mundo más justo, equitativo y feliz.',
      li_mision_1: 'involucrándolos a lo largo de sus años formativos, en un proceso de educación no formal.',
      li_mision_2: 'utilizando un método específico que haga de cada Scout, el principal agente de su desarrollo como persona autosuficiente, solidaria, responsable y comprometida.',
      li_mision_3: 'ayudándoles a establecer un sistema de valores basado en los principios espirituales, sociales y personales expresados ​​en la Promesa y la Ley Scout.',
      li_mision_4: 'fomentar la participación social, la implicación y la cooperación en las acciones de voluntariado.',
      /*textos pestaña World_Scout ===>>> donde estamos*/
      txt_DE_1:' El movimiento scout existe en 162 países lo que suponen más de 460 millones de personas, de diferentes culturas, lenguas y religiones trabajando por construir un mundo mejor. Todo ello gracias a cerca de 7 millones de adultos voluntarios que apoyan las actividades que desarrollan los grupos scouts.',
      txt_DE_2:' La Organización Mundial del Movimiento Scout (OMMS) es una organización independiente, mundial, sin fines de lucro y no partidista, la cual sirve al Movimiento Scout. Su finalidad es promover la unidad y el entendimiento de los principios y propósitos del Movimiento Scout, facilitando al mismo tiempo la expansión y el desarrollo del mismo. Los órganos de la Organización Mundial son la Conferencia Scout Mundial, el Comité Scout Mundial y la Oficina Scout Mundial.',
      /*textos pestaña World_Scout ===>>> qué hacen*/  
      tittle_do:'QUE FACEMOS',
      txt_hacen_1_1:'Trabajamos por una educación en valores',
      txt_hacen_1_2:'en el tiempo libre y lo hacemos desarrollando un método propio de actuación, el método scout, que ha demostrado fusionar en sus más de 100 años de historia la tradición y la innovación. Tradición en los principios que impulsan a cada scout a trascender la realidad de cada día y a comprometerse personal y libremente con los ideales y valores sobre los que construir un mundo más justo. Innovación en la propuesta de acción adaptada a las realidades culturales, sociales y económicas de los entornos más cercanos.',
      txt_hacen_2_1:'Actuamos localmente',
      txt_hacen_2_2:'conociendo la fuerza del impacto global y la necesidad de abordar en niños, niñas y jóvenes de 6 a 21 años la educación en valores, la educación para la paz y el desarrollo, la educación para la salud, la educación para la igualdad de oportunidades y la igualdad de género, la integración y la inserción laboral de los y las jóvenes, la educación ambiental, la educación en el consumo responsable y en el uso adecuado de las nuevas tecnologías, en la educación vial.',
      txt_hacen_3_1:'Aprendemos a través de la participación',
      txt_hacen_3_2:'y de la acción, del trabajo en red, de la implicación y el compromiso de más de 8.000 voluntarios y voluntarias, de la vida en la naturaleza y en pequeños grupos y de programas progresivos y atractivos que te presentamos a continuación en forma de principales áreas de trabajo.',
    },
  },
  gl: {
    translation: {
        whos: 'Quenes somos',
        lucro: 'sen ánimo de lucro',
        el:'O',
        es:'é',
        y:'e',
        texto_home:"que se basea nun proxecto educativo dirixido á infancia, adolescencia e mocidade co obxectivo de promover a súa educación e a súa implicación social.",
        texto_home2:"do grupo baséase nos 3 piares máis importantes do movemento scout",
        t_pilar_1:'',
        t_pilar_2_1:'La vida en',
        t_pilar_2_2:'pequeños grupos:',
        t_pilar_3:'A formación',
        texto_pilar_1:'O mozo establece libremente un compromiso persoal #ante os seus compañeiros, asumindo unha responsabilidade: social, persoal, ética… resumidos na promesa e a Lei Scout.',
        texto_pilar_2:'O pequeno grupo  socializa, identifica os seus membros cos obxectivos das actividades e permite profundar no coñecemento mutuo.',
        texto_pilar_3:'Cada mozo participa no seu propio proceso de desenvolvemento, formando parte activa das diferentes etapas nas que se determina o Programa Educativo',
        año: 'no ano',
        es_una: 'é unha',
        sin: 'sen',
        miembro:'membro',
        patron_t:'San Jorge, Patrón dos Scouts',
        portanto:' e por tanto da ',
        whos_text:'orientada por voluntarios adultos comprometidos co servizo educativo, que ofrece os medios e oportunidades necesarios para contribuír á educación integral das persoas, potenciando fundamentalmente o seu sentido de responsabilidade, liberdade e servizo, segundo o Método Scout iniciado por',
        sections: 'Secciones',
        join: 'Apúntate',
        w_scout: 'Mundo Scout',
        store:"Tienda",
        where:"¿Onde estamos?",
        where2:'Situamonos na rúa Camino de la Iglesia, nos baixos 33-35, CP: 15009 A Coruña (A Coruña).',
        patrontext1:'Os cidadáns debían entregar o dragón a varias persoas da cidade de forma regular. Unha desas veces, foi a quenda da filla do rei de ser devorada polo dragón. Deixárona á beira da fonte, soa. Nese momento pasou San Jorge, matou o monstro e rescatou á princesa, liberando a cidade do seu castigo. Cóntase que no lugar onde se derramou o sangue da besta creceu unha rosa vermella.',
        patrontext2:'É unha das lendas máis difundidas no mundo, e a crenza en San Jorge e na súa historia existe en moitos países e culturas, adaptada á relixión correspondente.',
        patrontext3:'Tamén é moi importante como patrón e símbolo en moitas zonas e cidades.',
        patrontext4:'San Jorge é tamén moi importante como patrón e símbolo en moitas zonas e cidades.',
        patrontext5:'Foi o patrón de Inglaterra durante moitos anos, é o ideal do cabaleiro medieval e a chamada "cruz de San Jorge" (vermello sobre fondo branco, ás veces cos extremos rematados por flores de lis) é presente en moitas bandeiras, entre elas a de Reino Unido e Cataluña.',
        patrontext6:'Baden Powell escolleu a San Jorge como patrón dos exploradores de todo o mundo. En',
        patrontext7:'O seu patrón (os Cabaleiros da Mesa Redonda) era San Jorge, porque era o único santo a cabalo. É o patrón da cabalería e de Inglaterra.',
        /*textos pestaña World_Scout ===>>> quienes somos*/
        mov_scout:'MOVIMIENTO SCOUT',
        mov_scout_txt_1:' O movemento Scout, fundado no ano 1907 por  Baden  Powell en Inglaterra, é unha organización que se basea nun proxecto educativo dirixido a infancia, adolescencia e mocidade co obxectivo de promover a súa educación integral e a súa implicación social. O  escultismo traballa con e para a infancia e a mocidade coa ilusión de construír un mundo mellor a través do liderado entre iguais.',
        tittle_mision: 'A nosa misión',
        text_mision:'Contribuír á educación e desenvolvemento das persoas, especialmente durante a nenez, a adolescencia e a mocidade, a través dun sistema de valores baseado na Promesa e a Lei Scout, para axudar a construír un mundo mellor. Tamén queremos que as persoas crezan con capacidades que lles permitan desenvolverse  como adultos cun amplo nivel de autonomía e liderado, para contribuír a crear un mundo máis xusto, equitativo e feliz.',
        li_mision_1: 'involucrándoos ao longo dos seus anos formativos, nun proceso de educación non formal.',
        li_mision_2: 'utilizando un método específico que faga de cada Scout, o principal axente do seu desenvolvemento como persoa autosuficiente, solidaria, responsable e comprometida.',
        li_mision_3: 'axudándolles a establecer un sistema de valores baseado nos principios espirituais, sociais e persoais expresados ​​na Promesa e a Lei Scout.',
        li_mision_4: 'fomentar a participación social, a implicación e a cooperación nas accións de voluntariado.',
        /*textos pestaña World_Scout ===>>> donde estamos*/    
        txt_DE_1: ' O movemento scout existe en 162 países o que supoñen máis de 460 millóns de persoas, de diferentes culturas, linguas e relixións traballando por construír un mundo mellor. Todo iso grazas a preto de 7 millóns de adultos voluntarios que apoian as actividades que desenvolven os grupos scouts.',
        txt_DE_2:' A Organización Mundial do Movemento Scout ( OMMS) é unha organización independente, mundial, sen fins de lucro e non partidista, a cal serve ao Movemento Scout. A súa finalidade é promover a unidade e o entendemento dos principios e propósitos do Movemento Scout, facilitando ao mesmo tempo a expansión e o desenvolvemento do mesmo. Os órganos da Organización Mundial son a Conferencia Scout Mundial, o Comité Scout Mundial e a Oficina Scout Mundial.',
        /*textos pestaña World_Scout ===>>> donde estamos*/  
        tittle_do:'QUE FACEMOS',
        txt_hacen_1_1:'Traballamos por unha educación en valores',
        txt_hacen_1_2:'no tempo libre e facémolo desenvolvendo un método propio de actuación, o método scout, que demostrou fusionar nos seus máis de 100 anos de historia a tradición e a innovación. Tradición nos principios que impulsan a cada scout para transcender a realidade de cada día e a comprometerse persoal e libremente cos ideais e valores sobre os que construír un mundo máis xusto. Innovación na proposta de acción adaptada ás realidades culturais, sociais e económicas das contornas máis próximas.',
        txt_hacen_2_1:'Actuamos localmente',
        txt_hacen_2_2:'coñecendo a forza do impacto global e a necesidade de abordar en nenos, nenas e mozas de 6 a 21 anos a educación en valores, a educación para a paz e o desenvolvemento, a educación para a saúde, a educación para a igualdade de oportunidades e a igualdade de xénero, a integración e a inserción laboral dos e as novas, a educación ambiental, a educación no consumo responsable e no uso adecuado das novas tecnoloxías, na educación viaria.',
        txt_hacen_3_1:'Aprendemos a través da participación',
        txt_hacen_3_2:'e da acción, do traballo en rede, da implicación e o compromiso de máis de 8.000 voluntarios e voluntarias, da vida na natureza e en pequenos grupos e de programas progresivos e atractivos que che presentamos a continuación en forma de principais áreas de traballo.',
      },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;