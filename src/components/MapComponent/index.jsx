import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";
import OSM from "ol/source/OSM";
import { Fill, Stroke, Style } from "ol/style";

const MapComponent = () => {
  const mapElement = useRef(null);
  const [provinceLayer, setProvinceLayer] = useState(null);
  const [districtLayer, setDistrictLayer] = useState(null);
  const [municipalityLayer, setMunicipalityLayer] = useState(null);
  const [showProvinces, setShowProvinces] = useState(true);
  const [showDistricts, setShowDistricts] = useState(false);
  const [showMunicipalities, setShowMunicipalities] = useState(false);

  //   to define the styles for each vector layer
  const layerStyle = (strokeColor, fillColor) => {
    return new Style({
      stroke: new Stroke({
        color: strokeColor,
        width: 1,
      }),
      fill: new Fill({
        color: fillColor,
      }),
    });
  };

  useEffect(() => {
    const provinceVectorTile = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
      }),
      style: layerStyle("#0000FF", "rgba(0, 0, 255, 0.1)"),
    });

    const districtVectorTile = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: "https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}",
      }),
      style: layerStyle("#FF0000", "rgba(255, 0, 0, 0.1)"),
    });

    const municipalityVectorTile = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
      }),
      style: layerStyle("#00FF00", "rgba(0, 255, 0, 0.1)"),
    });

    const map = new Map({
      target: mapElement.current, // targets the div that has that ref
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        provinceVectorTile,
        districtVectorTile,
        municipalityVectorTile,
      ],
      view: new View({
        center: fromLonLat([84.124, 28.3949]), // so that Nepal is on the center of the map
        zoom: 7,
      }),
    });

    setProvinceLayer(provinceVectorTile);
    setDistrictLayer(districtVectorTile);
    setMunicipalityLayer(municipalityVectorTile);

    // cleaning up on component unmount
    return () => map.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (provinceLayer) {
      provinceLayer.setVisible(showProvinces);
    }
  }, [showProvinces, provinceLayer]);

  useEffect(() => {
    if (districtLayer) {
      districtLayer.setVisible(showDistricts);
    }
  }, [showDistricts, districtLayer]);

  useEffect(() => {
    if (municipalityLayer) {
      municipalityLayer.setVisible(showMunicipalities);
    }
  }, [showMunicipalities, municipalityLayer]);

  return (
    <div className="bg-white w-4/5">
      <div className="flex items-center gap-2 px-5 py-3 text-sm">
        <label>
          <input
            type="checkbox"
            checked={showProvinces}
            onChange={() => setShowProvinces(!showProvinces)}
            className=""
          />
          Provinces
        </label>
        <label>
          <input
            type="checkbox"
            checked={showDistricts}
            onChange={() => setShowDistricts(!showDistricts)}
          />
          Districts
        </label>
        <label>
          <input
            type="checkbox"
            checked={showMunicipalities}
            onChange={() => setShowMunicipalities(!showMunicipalities)}
          />
          Municipalities
        </label>
      </div>
      <div ref={mapElement} className="w-full p-5 pt-0 h-[80vh]" />
    </div>
  );
};

export default MapComponent;
