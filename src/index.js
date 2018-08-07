// console.log('If you can read this, I am running correctly!');
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiaXJlbmVoYWtlcyIsImEiOiJjamtrNGN1eTYwOHAyM3BwYm55YWs5ZzZhIn0.lp0z6cXRyyDXwu0KBd9z8w';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], //FullStack NY coordinates
  zoom: 12, //starting zoom
  style: "mapbox://styles/irenehakes/cjkk4zd8o54qh2rplqvkgh64t" //mapbox has lots of different map styles available
})

const marker1 = buildMarker('activities', [-74.009, 40.705]);
const marker2 = buildMarker('hotels', [-75, 40.705]);
const marker3 = buildMarker('restaurants', [-73, 40.705]);
marker1.addTo(map)
marker2.addTo(map)
marker3.addTo(map)



