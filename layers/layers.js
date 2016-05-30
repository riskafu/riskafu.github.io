var format_ACEH = new ol.format.GeoJSON();
var features_ACEH = format_ACEH.readFeatures(geojson_ACEH, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ACEH = new ol.source.Vector();
jsonSource_ACEH.addFeatures(features_ACEH);var lyr_ACEH = new ol.layer.Vector({
                source:jsonSource_ACEH, 
                style: style_ACEH,
                title: "ACEH"
            });

lyr_ACEH.setVisible(true);
var layersList = [lyr_ACEH];
