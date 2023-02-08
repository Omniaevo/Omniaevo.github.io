const key = "9Vb4cNpbdi7mQUSoQMPB";
const oeHq = ol.proj.fromLonLat([12.970886, 45.966033]);
const styleJson = `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`;

const attribution = new ol.control.Attribution({
  collapsible: true,
});

/* Map preparation */

const map = new ol.Map({
  target: "display-map",
  controls: ol.control.defaults.defaults({ attribution: false }).extend([attribution]),
  view: new ol.View({
    constrainResolution: true,
    center: oeHq,
    zoom: 16
  }),
});

olms.apply(map, styleJson);

const marker = new ol.Overlay({
  position: oeHq,
  positioning: "bottom-center",
  element: document.getElementById("oe-marker"),
  stopEvent: false,
});

map.addOverlay(marker);
