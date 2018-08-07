// console.log('If you can read this, I am running correctly!');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiaXJlbmVoYWtlcyIsImEiOiJjamtrNGN1eTYwOHAyM3BwYm55YWs5ZzZhIn0.lp0z6cXRyyDXwu0KBd9z8w';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], //FullStack NY coordinates
  zoom: 12, //starting zoom
  style: "mapbox://styles/irenehakes/cjkk4zd8o54qh2rplqvkgh64t" //mapbox has lots of different map styles available
})
