
const map = L.map('map').setView([51.505, -0.09], 13); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})/*.addTo(map)*/;


L.tileLayer.provider('Stamen.Watercolor').addTo(map);

const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
    iconSize: [38, 38]
});

const myClusterLayer = L.markerClusterGroup({
    iconCreateFunction: cluster => {
        return L.divIcon({
            html: '<div class="cluster-div">'+ cluster.getChildCount() +'</div>'
        })
    }
});

const marker1 = L.marker([51.5, -0.08], { icon: customIcon });
marker1.bindPopup("<h3>I am a popup for Maker 1!</h3>")

marker1.on('click', e => console.log('CLICK 1: ', {...e, id: 123456}));


const marker2 = L.marker([51.51, -0.09], { icon: customIcon });
marker2.bindPopup("<h3>I am a popup for Maker 2!</h3>")

const marker3 = L.marker([51.5, -0.1], { icon: customIcon });
marker3.bindPopup("<h3>I am a popup for Maker 3!</h3>")

myClusterLayer.addLayer(marker1);
myClusterLayer.addLayer(marker2);
myClusterLayer.addLayer(marker3);

map.addLayer(myClusterLayer);
