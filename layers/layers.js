var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_airbnb_par_iris_1 = new ol.format.GeoJSON();
var features_airbnb_par_iris_1 = format_airbnb_par_iris_1.readFeatures(json_airbnb_par_iris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airbnb_par_iris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airbnb_par_iris_1.addFeatures(features_airbnb_par_iris_1);
var lyr_airbnb_par_iris_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airbnb_par_iris_1, 
                style: style_airbnb_par_iris_1,
                popuplayertitle: 'airbnb_par_iris',
                interactive: true,
    title: 'airbnb_par_iris<br />\
    <img src="styles/legend/airbnb_par_iris_1_0.png" /> 28 - 46<br />\
    <img src="styles/legend/airbnb_par_iris_1_1.png" /> 46 - 71<br />\
    <img src="styles/legend/airbnb_par_iris_1_2.png" /> 71 - 109<br />\
    <img src="styles/legend/airbnb_par_iris_1_3.png" /> 109 - 142<br />\
    <img src="styles/legend/airbnb_par_iris_1_4.png" /> 142 - 245<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_airbnb_par_iris_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_airbnb_par_iris_1];
lyr_airbnb_par_iris_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'NB_AIRBNB': 'NB_AIRBNB', });
lyr_airbnb_par_iris_1.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'NB_AIRBNB': 'TextEdit', });
lyr_airbnb_par_iris_1.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'nom_commune': 'inline label - visible with data', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'inline label - visible with data', 'type_iris': 'no label', 'NB_AIRBNB': 'inline label - visible with data', });
lyr_airbnb_par_iris_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});