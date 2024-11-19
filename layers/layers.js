ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([381022.776923, 755984.532952, 382059.375783, 756468.583520]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HappenstanceEstatekml_1 = new ol.format.GeoJSON();
var features_HappenstanceEstatekml_1 = format_HappenstanceEstatekml_1.readFeatures(json_HappenstanceEstatekml_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HappenstanceEstatekml_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HappenstanceEstatekml_1.addFeatures(features_HappenstanceEstatekml_1);
var lyr_HappenstanceEstatekml_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HappenstanceEstatekml_1, 
                style: style_HappenstanceEstatekml_1,
                popuplayertitle: "Happenstance Estate.kml",
                interactive: true,
                title: 'Happenstance Estate.kml'
            });
var format_Estatebuildings_2 = new ol.format.GeoJSON();
var features_Estatebuildings_2 = format_Estatebuildings_2.readFeatures(json_Estatebuildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estatebuildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estatebuildings_2.addFeatures(features_Estatebuildings_2);
var lyr_Estatebuildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estatebuildings_2, 
                style: style_Estatebuildings_2,
                popuplayertitle: "Estate buildings",
                interactive: true,
                title: '<img src="styles/legend/Estatebuildings_2.png" /> Estate buildings'
            });
var format_Adminblocks_3 = new ol.format.GeoJSON();
var features_Adminblocks_3 = format_Adminblocks_3.readFeatures(json_Adminblocks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adminblocks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adminblocks_3.addFeatures(features_Adminblocks_3);
var lyr_Adminblocks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adminblocks_3, 
                style: style_Adminblocks_3,
                popuplayertitle: "Admin blocks",
                interactive: true,
                title: '<img src="styles/legend/Adminblocks_3.png" /> Admin blocks'
            });
var format_fivebedroommansions_4 = new ol.format.GeoJSON();
var features_fivebedroommansions_4 = format_fivebedroommansions_4.readFeatures(json_fivebedroommansions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fivebedroommansions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fivebedroommansions_4.addFeatures(features_fivebedroommansions_4);
var lyr_fivebedroommansions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fivebedroommansions_4, 
                style: style_fivebedroommansions_4,
                popuplayertitle: "five bedroom mansions",
                interactive: true,
                title: '<img src="styles/legend/fivebedroommansions_4.png" /> five bedroom mansions'
            });
var format_FourBedroomduplex_5 = new ol.format.GeoJSON();
var features_FourBedroomduplex_5 = format_FourBedroomduplex_5.readFeatures(json_FourBedroomduplex_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FourBedroomduplex_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FourBedroomduplex_5.addFeatures(features_FourBedroomduplex_5);
var lyr_FourBedroomduplex_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FourBedroomduplex_5, 
                style: style_FourBedroomduplex_5,
                popuplayertitle: "Four Bedroom duplex",
                interactive: true,
                title: '<img src="styles/legend/FourBedroomduplex_5.png" /> Four Bedroom duplex'
            });
var format_Threebedcrmjoin_6 = new ol.format.GeoJSON();
var features_Threebedcrmjoin_6 = format_Threebedcrmjoin_6.readFeatures(json_Threebedcrmjoin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Threebedcrmjoin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Threebedcrmjoin_6.addFeatures(features_Threebedcrmjoin_6);
var lyr_Threebedcrmjoin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Threebedcrmjoin_6, 
                style: style_Threebedcrmjoin_6,
                popuplayertitle: "Three bed crm join",
                interactive: true,
                title: '<img src="styles/legend/Threebedcrmjoin_6.png" /> Three bed crm join'
            });
var format_Twobedcrmjoin_7 = new ol.format.GeoJSON();
var features_Twobedcrmjoin_7 = format_Twobedcrmjoin_7.readFeatures(json_Twobedcrmjoin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Twobedcrmjoin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Twobedcrmjoin_7.addFeatures(features_Twobedcrmjoin_7);
var lyr_Twobedcrmjoin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Twobedcrmjoin_7, 
                style: style_Twobedcrmjoin_7,
                popuplayertitle: "Two bed crm join",
                interactive: true,
                title: '<img src="styles/legend/Twobedcrmjoin_7.png" /> Two bed crm join'
            });
var format_onebedcrmjoin_8 = new ol.format.GeoJSON();
var features_onebedcrmjoin_8 = format_onebedcrmjoin_8.readFeatures(json_onebedcrmjoin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onebedcrmjoin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onebedcrmjoin_8.addFeatures(features_onebedcrmjoin_8);
var lyr_onebedcrmjoin_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_onebedcrmjoin_8, 
                style: style_onebedcrmjoin_8,
                popuplayertitle: "onebed crm join",
                interactive: true,
                title: '<img src="styles/legend/onebedcrmjoin_8.png" /> onebed crm join'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HappenstanceEstatekml_1.setVisible(true);lyr_Estatebuildings_2.setVisible(true);lyr_Adminblocks_3.setVisible(true);lyr_fivebedroommansions_4.setVisible(true);lyr_FourBedroomduplex_5.setVisible(true);lyr_Threebedcrmjoin_6.setVisible(true);lyr_Twobedcrmjoin_7.setVisible(true);lyr_onebedcrmjoin_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HappenstanceEstatekml_1,lyr_Estatebuildings_2,lyr_Adminblocks_3,lyr_fivebedroommansions_4,lyr_FourBedroomduplex_5,lyr_Threebedcrmjoin_6,lyr_Twobedcrmjoin_7,lyr_onebedcrmjoin_8];
lyr_HappenstanceEstatekml_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Estatebuildings_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'Building T': 'Building T', 'Occupancy': 'Occupancy', });
lyr_Adminblocks_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'Building T': 'Building T', 'Occupancy': 'Occupancy', });
lyr_fivebedroommansions_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'Building T': 'Building T', 'Occupancy': 'Occupancy', });
lyr_FourBedroomduplex_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'Building T': 'Building T', 'Occupancy': 'Occupancy', });
lyr_Threebedcrmjoin_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'Crm for Th': 'Crm for Th', 'Crm for _1': 'Crm for _1', 'Crm for _2': 'Crm for _2', 'Crm for _3': 'Crm for _3', 'Crm for _4': 'Crm for _4', });
lyr_Twobedcrmjoin_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'Crm for Tw': 'Crm for Tw', 'Crm for _1': 'Crm for _1', 'Crm for _2': 'Crm for _2', 'Crm for _3': 'Crm for _3', 'Crm for _4': 'Crm for _4', });
lyr_onebedcrmjoin_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'Crm for on': 'Crm for on', 'Crm for _1': 'Crm for _1', 'Crm for _2': 'Crm for _2', 'Crm for _3': 'Crm for _3', 'Crm for _4': 'Crm for _4', });
lyr_HappenstanceEstatekml_1.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Estatebuildings_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'Building T': '', 'Occupancy': '', });
lyr_Adminblocks_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'Building T': '', 'Occupancy': '', });
lyr_fivebedroommansions_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'Building T': '', 'Occupancy': '', });
lyr_FourBedroomduplex_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'Building T': '', 'Occupancy': '', });
lyr_Threebedcrmjoin_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'Crm for Th': '', 'Crm for _1': '', 'Crm for _2': '', 'Crm for _3': '', 'Crm for _4': '', });
lyr_Twobedcrmjoin_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'Crm for Tw': '', 'Crm for _1': '', 'Crm for _2': '', 'Crm for _3': '', 'Crm for _4': '', });
lyr_onebedcrmjoin_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'Crm for on': '', 'Crm for _1': '', 'Crm for _2': '', 'Crm for _3': '', 'Crm for _4': '', });
lyr_HappenstanceEstatekml_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Estatebuildings_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'Building T': 'no label', 'Occupancy': 'no label', });
lyr_Adminblocks_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'Building T': 'no label', 'Occupancy': 'no label', });
lyr_fivebedroommansions_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'Building T': 'no label', 'Occupancy': 'no label', });
lyr_FourBedroomduplex_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'Building T': 'no label', 'Occupancy': 'no label', });
lyr_Threebedcrmjoin_6.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'building': 'inline label - always visible', 'Crm for Th': 'inline label - always visible', 'Crm for _1': 'inline label - always visible', 'Crm for _2': 'inline label - always visible', 'Crm for _3': 'inline label - always visible', 'Crm for _4': 'inline label - always visible', });
lyr_Twobedcrmjoin_7.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'building': 'inline label - always visible', 'Crm for Tw': 'inline label - always visible', 'Crm for _1': 'inline label - visible with data', 'Crm for _2': 'inline label - always visible', 'Crm for _3': 'inline label - always visible', 'Crm for _4': 'inline label - always visible', });
lyr_onebedcrmjoin_8.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'building': 'inline label - always visible', 'Crm for on': 'inline label - always visible', 'Crm for _1': 'inline label - always visible', 'Crm for _2': 'inline label - always visible', 'Crm for _3': 'inline label - always visible', 'Crm for _4': 'inline label - always visible', });
lyr_onebedcrmjoin_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});