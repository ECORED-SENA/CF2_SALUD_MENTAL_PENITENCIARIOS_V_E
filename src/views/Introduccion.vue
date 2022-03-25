<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.fondo1.align-items-center.py-5.my-5.bordes
      .col-lg-1.col-md-12
        img(src="@/assets/curso/tema1/lineas.png")
      .col-lg-10.col-md-12
        span Este módulo permitirá a los participantes 
        span.color-texto.text-bold generar conocimiento del concepto de entornos penitenciarios, normativa en la prestación de servicios de salud mental, programas y lineamientos del área psicosocial 
        span que se realizan al interior de los establecimientos de reclusión, en pro de la salud mental de los privados de la libertad; se invita a conocer un poco más en el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
