const key = "9Vb4cNpbdi7mQUSoQMPB";
const oeHq = [12.970886, 45.966033];
const map = new maplibregl.Map({
  container: "display-map",
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`,
  center: oeHq,
  zoom: 15,
});

map.addControl(new maplibregl.NavigationControl(), "top-right");

map.on("load", () => {
  map.loadImage(
    "../assets/marker-small.png",
    (error, image) => {
      if (error) throw error;

      map.addImage("custom-marker", image);
      map.addSource("oe", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: oeHq,
              },
            },
          ],
        },
      });
      map.addLayer({
        id: "oe",
        type: "symbol",
        source: "oe",
        layout: {
          "icon-image": "custom-marker",
          "icon-overlap": "always",
        },
      });
    }
  );

  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  popup
    .setLngLat(oeHq)
    .setHTML("<strong>Omniaevo s.r.l.</strong><p>Viale Veneto, 33/15, 33033 Codroipo, UD</p><p><a class='oe-link' target='_blank' href='https://www.google.com/maps/place/Omniaevo+s.r.l./@45.966033,12.970886,16z/data=!4m5!3m4!1s0x0:0x4ab984ad8542c785!8m2!3d45.966033!4d12.9708863?hl=it-IT'>Visualizza su Google Maps</a></p>")
    .addTo(map);
});
