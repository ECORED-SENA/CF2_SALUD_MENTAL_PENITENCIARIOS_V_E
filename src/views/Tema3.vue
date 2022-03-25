<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Atención social y tratamiento penitenciario
    .row.my-5
      .col-lg-4.col-12-sm.col-md-10
        p La atención social se orienta a ofrecer acciones protectoras mediante los servicios de salud, alimentación, habitabilidad, comunicación familiar, desarrollo espiritual, asesoría jurídica y uso adecuado del tiempo libre, que prevengan o minimicen, hasta donde sean posibles los efectos del proceso de prisionalización.
        .row
          .col-lg-3.col-md-4.col-sm-6
            img(src="@/assets/curso/tema3/puntos.svg")
      .col-lg-3.col-12-sm.col-md-10
        img(src="@/assets/curso/tema3/reo.png")
      .col-lg-5.col-12-sm.col-md-10.fondo5
        .row
          .col-lg-3.col-md-4.col-sm-6
            img.mt-3.ms-3(src="@/assets/curso/tema3/lineas.svg")
        .row
          .col-12.p-4
            span El  
            span.color-texto.text-bold tratamiento penitenciario 
            span tiene la finalidad de alcanzar la resocialización del infractor de la ley penal, mediante el examen de su personalidad y a través de la disciplina, el trabajo, el estudio, la formación espiritual, la cultura, el deporte y la recreación, bajo un espíritu humano y solidario.
    .row
      .col-12.fondo10
        .row
          .col-lg-5.col-md-10.col-sm-12
            img(src="@/assets/curso/tema3/sicologa.png")
          .col-lg-7.col-md-10.col-sm-12
            .row.align-items-center.mt-2
              .col-lg-4.col-md-5.fondo2.py-2.col-sm-5
                p.mb-0.text-center.text-white.text-bold Características

            AcordionA.my-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .row(titulo="Atención social")
                .col-md-12.mb-4.mb-md-0.ms-5
                  p Inicia en el momento en que el PPL ingresa en un establecimiento de reclusión del Sistema Nacional Penitenciario y Carcelario y termina en el momento en que la autoridad competente emita y notifique al director del establecimiento la boleta de libertad del interno(a), sindicado(a) o condenado(a). Comprende la recepción y la atención del PPL facilitando su proceso de adaptación.

              div(titulo="Tratamiento penitenciario")
                p.ms-5 El proceso de tratamiento penitenciario inicia desde el momento en que el PPL es condenado(a) en única, primera y segunda instancia, o cuyo recurso de casación se encuentre pendiente, e ingresa a la fase de observación, diagnóstico y clasificación y finaliza una vez obtenga la libertad. El responsable del área jurídica del establecimiento remitirá semanalmente las copias de los fallos condenatorios de los que tenga conocimiento al CET, para iniciar el proceso de tratamiento penitenciario
          .row
            .col-lg-7.col-md-10.col-sm-12
              .row.align-items-center.my-4
                .col-lg-6.col-md-10.fondo2.py-2
                  p.mb-0.text-center.text-white.text-bold Programas de atención social
              p.mb-4 Los programas sociales son un conjunto de instrumentos que tienen por objetivo contribuir a la mejora de las condiciones de vida de la población penitenciaria, entre ellos están:
              .titulo-sexto.color-secundario
                h5.color-texto.text-bold Programa de atención psicología penitenciaria:
              p.mb-4 Implementa acciones pertinentes a la atención e intervención psicológica de la población privada de la libertad, orientados al fortalecimiento y desarrollo de habilidades, destrezas, actitudes, y potencialidades en los internos(as), con el fin de minimizar los efectos adversos de la prisionalización, y fortalecer procesos psicológicos en busca de su integración social positiva, y en cumplimiento de los procesos de atención social y tratamiento penitenciario.

              .titulo-sexto.color-secundario
                h5.color-texto.text-bold Componentes
              LineaTiempoD.color-primario
                .row(numero="1" titulo="Asistencia psicológica")
                  .col-lg-9.mb-4.mb-md-0.col-sm-9
                    p.text-small Busca ofrecer apoyo profesional mediante una acción preventiva y orientativa a las personas privadas de la libertad que necesitan ayuda para tomar decisiones o resolver problemas que alteran su ritmo de vida normal debido a los efectos emocionales, somáticos, culturales y psicosociales generados por la prisionalización, además de ofrecer orientación, implica también, apoyó, discusión de temas en función de objetivos, desarrollo de una planificación, establecimiento de metas, etc.
                
                  .col-lg-3.col-sm-3
                    figure
                      img(src='@/assets/template/tema3/ideas.svg')

                .row(numero="2" titulo="Orientación psicojurídica")
                  .col-lg-9.mb-4.mb-md-0.col-sm-9
                    p.text-small Su objetivo es prestar asesoría respecto a los procedimientos del establecimiento desde el marco legal y jurisprudencial, así como en los componentes de índole psicológica. Además, mejorar la comprensión de su situación jurídica, sus implicaciones en su proyecto de vida intramural y la proyección en libertad, para que adquiera un rol activo en su proceso.
                  .col-lg-3.col-sm-3
                    figure
                      img(src='@/assets/template/tema3/balanza.svg')
                
                .row(numero="3" titulo="Atención en crisis emocional")
                  .col-lg-9.mb-4.mb-md-0.col-sm-9
                    p.text-small Busca determinar las actividades a seguir para realizar contención emocional, remisión y seguimiento de las PPL que acudan al servicio de psicología en estado de crisis emocional y requieran de primeros auxilios psicológicos y/o atención en crisis.
                
                  .col-lg-3.col-sm-3
                    figure
                      img(src='@/assets/template/tema3/crisis.svg')

            .col-lg-5.col-md-10.col-sm-12
              img(src="@/assets/curso/tema3/profesional.png")

          .titulo-sexto.color-secundario
            h5.color-texto.text-bold Programa de atención a menores de tres (3) años en establecimientos de reclusión:
          span Para asegurar a los niños menores de tres años que viven con sus madres en los Establecimientos de Reclusión del Orden Nacional la protección y el ejercicio de sus derechos, a través de la atención integral, tomando las medidas necesarias para su bienestar 
            span.color-texto.text-bold (Ley 65 de 1993, Art. 153, modificado por Ley 1709 de 2014, art. 88).

          .tarjeta--container.row.my-5.mx-2
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/componentes/tema3/embarazo.svg')
              h5.text-center.text-white El objetivo general de la modalidad 
              p.text-center.text-white Apoyar la atención integral desde su gestación hasta los tres (3) años de los niños que se encuentran en los establecimientos de reclusión de mujeres, mediante acciones que apoyen su desarrollo integral y fortalezcan los vínculos afectivos con sus familias y cuidadores. 

            .col-md.tarjeta.fondo7.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/componentes/tema3/bebe.svg')
              h5.text-center.text-white A quién beneficia el programa
              p.text-white.text-center  Niños y niñas hasta los tres (3) años de edad, mujeres gestantes y madres en periodo de lactancia que se encuentran internas en los establecimientos de reclusión de mujeres a cargo del Inpec.
        .row
          .col-lg-4.col-md-10.col-sm-12
            img.mb-2(src='@/assets/curso/tema3/Grupo.png')
          .col-lg-8.col-md-10.col-sm-12
            .titulo-sexto.color-secundario.mb-1.mt-2
              h5.color-texto.text-bold Programa de atención a familia:
            p busca fortalecer los vínculos familiares y desarrollar procesos de acompañamiento e intervención individual, grupal y/o familiar que permita al privado de libertad y su sistema familiar afrontar los efectos negativos del proceso de prisionalización e identificar actitudes resilientes frente al mismo.
            .titulo-sexto.color-secundario.mt-5.mb-1
              h5.color-texto.text-bold Población objeto:
            p.mb-4 personas sindicadas y condenadas privadas de la libertad por orden judicial mediante un abordaje individual, grupal y/o familiar, a través de las diferentes actividades que tengan incidencia en la familia. Este programa se ejecuta desde el proceso de Atención Social (Ley 65 de 1993) y está dirigido a sindicados y condenados para facilitar y fortalecer las relaciones con la familia, y hace parte del tratamiento penitenciario para preparar a la población interna con miras a la vida familiar en libertad a través de dos modalidades:            
      .row.justify-content-center.mt-5
        .col-10
          .row.fondo4.bordes50.p-1
            .col-1
              img.correr-izq30(src='@/assets/curso/tema3/dialogo.svg')
            .col-11
              span.color-texto.text-bold.mb-0 Orientado al Interno(a): 
              span.text-white.mb-0.text-center es el acompañamiento directo realizado al interno(a) donde se identifican las situaciones que generan temor frente al proceso que inicia la persona privada de la libertad y su interacción familiar. 

      .row.justify-content-center.my-5
        .col-10
          .row.fondo4.bordes50.p-1
            .col-1
              img.correr-izq30(src='@/assets/curso/tema3/familia.svg')
            .col-11
              span.color-texto.text-bold.mb-0 Orientado al Interno(a): 
              span.text-white.mb-0.text-center Orientado a la familia del interno(a) las acciones que se realizan en el programa para beneficio directo de la familia del interno(a) se relacionan a continuación: a) Acercamiento familiar, b) Visita familiar, c) Celebración Día de la Familia y d) Celebración del Día de la Niñez.
    .titulo-sexto.color-secundario.mt-5.mb-1
      h5.color-texto.text-bold Programa de atención a grupos de condiciones excepcionales:
    .row
      .col-lg-8.col-md-10.col-sm-12.my-4
        span para diseñar, implementar y promover estrategias con un modelo de acompañamiento que permitan la inclusión social de las personas privadas de la libertad, población interna que pertenece a grupos con condición excepcional dentro de los establecimientos de reclusión, desde un enfoque diferencial, 
        span.color-texto.text-bold por medio de la construcción de espacios de participación que respondan a cada una de las necesidades culturales y de integración social.
        .row.mt-3.fondo1.p-4.justify-content-center
          .col-lg-2.col-md-4.col-sm-6
            img.my-4(src='@/assets/curso/tema3/figura1.svg')
          .col-lg-10.col-sm-12
            h5.mb-3.mt-3 Población objeto
            p Personas privadas de la libertad que pertenecen a grupos de condiciones excepcionales: adulto mayor, extranjeros, NARP (negros, afrodescendientes, raizales o palenqueros), indígenas, en condición de discapacidad y madres gestantes y lactantes. 
      .col-lg-4.col-md-10.col-sm-12
        img(src='@/assets/curso/tema3/reo2.png')

    .row
      .col-lg-4.col-md-10.col-sm-12
        img(src='@/assets/curso/tema3/imagen1.png')
      .col-lg-8.col-md-10.col-sm-12
        .titulo-sexto.color-secundario.mb-1
          h5.color-texto.text-bold Programa de asistencia espiritual y religiosa:
        p.mb-3 su objetivo es facilitar y garantizar la libertad de culto y la asistencia espiritual y religiosa de la población privada de la libertad a través de los cultos, iglesias o confesiones a las cuales pertenecen los PPL, buscando la orientación, animación y crecimiento en su dimensión espiritual.
        .titulo-sexto.color-secundario.mt-5.mb-1
          h5.color-texto.text-bold Programa de prevención y atención integral al consumo de sustancias psicoactivas:
        p.mb-3 busca promover estilos de vida saludable, prevenir el uso de sustancias psicoactivas y atender a la población privada de la libertad para apoyar la mitigación o la superación del consumo.
        .titulo-sexto.color-secundario.mt-5.mb-1
          h5.color-texto.text-bold Programas de tratamiento penitenciario:
        p.mb-3 la finalidad de estos programas es la reinserción y reeducación del privado de la libertad.
    .row.my-5
      .col-lg-7.col-md-10.col-sm-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Inducción al tratamiento penitenciario")
            .col-md-12.mb-4.mb-md-0.ms-5
              p.ms-5 Orientar al privado de la libertad que ingresa al sistema penitenciario y facilitar su proceso de adaptación al medio, de cara a incidir de manera positiva en lo que será su tiempo de permanencia en el centro de reclusión y su reintegración social. 
              h5.ms-5 Población objeto
              p.ms-5 PPL  condenados con condena ejecutoriada y  clasificados en fase de observación, diagnóstico y clasificación.

          div(titulo="Programa de Intervención Penitenciaria para la Adaptación Social - PIPAS")
            p.ms-5 Su objetivo es reducir la presencia de factores de riesgo asociados a la reincidencia del comportamiento sexual delictivo en hombres condenados por delitos sexuales, en cumplimiento de penas privativas de libertad en establecimientos de orden nacional bajo jurisdicción del Inpec.
            h5.ms-5 Población objeto
            p.ms-5 Internos condenados por algún delito sexual con condenas ejecutoriadas, que sea remitido por el CET, con el fin de cumplir dentro de su plan de tratamiento un objetivo terapéutico relacionado con la identificación de causas o factores relacionados con el delito sexual y como requisito para ser clasificado en fase de tratamiento de mediana seguridad y que se encuentre en fase de tratamiento de alta seguridad.

          div(titulo="Programa Cadena de Vida")
            p.ms-5 Su objetivo es generar fortalezas en los PPL de acuerdo con el marco del sentido de coherencia, en relación con la vida (existencia) y la calidad de vida relacionada con salud (aspecto de la esencia humana).
            h5.ms-5 Población objeto
            p.ms-5 PPL condenados preferiblemente por delitos contra la vida, con condena ejecutoriada, y que se encuentren en fase de tratamiento de alta seguridad.
          div(titulo="Programa de Responsabilidad Integral con la Vida - RIV")
            p.ms-5 Su objetivo es reducir los niveles de autoengaño en la población penitenciaria y fortalecer el comportamiento prosocial y competencias sociales.
            h5.ms-5 Población objeto
            p.ms-5 PPL condenados, con condena ejecutoriada, que se encuentren clasificados en fase de alta o mediana seguridad, y que obtengan un puntaje entre elevado y moderado en el Inventario de Autoengaño IAM 40.
          div(titulo="Programa para la Educación Integral - PEC")
            p.ms-5 Su objetivo es fomentar una cultura carcelaria basada en el reconocimiento del otro, la adherencia a la norma formal que implica el respeto hacia los demás y el cuestionamiento de los símbolos de subcultura delincuencial con el fin de fomentar una cultura de responsabilidad y respeto.
            h5.ms-5 Población objeto
            p.ms-5 PPL condenados, con condena ejecutoriada. 
          div(titulo="Programa de preparación para la libertad")
            p.ms-5 Su objetivo es la disminución de la afectación de prisionalización en el retorno a la vida en libertad del PPL, por medio de la optimización de habilidades de ajuste en las áreas individual, familiar, educativo, laboral, social y comunitario.
            ul.lista-ul--color.my-4.ms-5
              li 
                i.fas.fa-check-circle
                | PPL condenados con condenas ejecutoriadas.
              li
                i.fas.fa-check-circle
                | Que les falten mínimo cinco meses y máximo siete para solicitar la libertad por pena cumplida, condicional o domiciliaria.
              li 
                i.fas.fa-check-circle
                | Que no tengan ningún otro requerimiento judicial.
              li 
                i.fas.fa-check-circle
                | Que se encuentre en fase de tratamiento de mediana o mínima seguridad. 
              li 
                i.fas.fa-check-circle
                | Que sea remitido por el CET.
              li 
                i.fas.fa-check-circle
                | Se deben excluir del programa los internos con diagnóstico de Trastorno Mental Grave.
      .col-lg-5.col-md-10.col-sm-12
        img(src='@/assets/curso/tema3/reo3.png')
    .row.align-items-center.my-4
      .col-lg-3.col-md-4.fondo2.py-2.col-sm-6
        p.mb-0.text-center.text-white.text-bold Efectos de prisionalización
    .row.mb-5
      .col-lg-1.col-md-3.col-sm-4
        img(src='@/assets/curso/tema3/puntos.svg')
      .col-lg-11.col-sm-12
        p Es el proceso por el que una persona, por consecuencia directa de su estancia en la cárcel, asume, sin ser consciente de ello, el código de conducta y de valores que dan contenido a la subcultura carcelaria. La prisionalización es una variable interviniente en la conducta del recluso perfectamente graduable, no existe una relación lineal y progresiva única en esta. La cárcel tiene un código de conducta, una normas formales e informales sobre las que se organiza la convivencia al igual que las tiene cualquier organización humana.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
