import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { type LatLngTuple } from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// 📍 کشورها و شهرهای مختلف دنیا
const locations: { name: string; coords: LatLngTuple }[] = [
  { name: "Germany", coords: [51.1657, 10.4515] },
  { name: "United Kingdom", coords: [55.3781, -3.436] },
  { name: "Dubai, UAE", coords: [25.276987, 55.296249] },
  { name: "United States", coords: [37.0902, -95.7129] },
  { name: "Canada", coords: [56.1304, -106.3468] },
  { name: "Brazil", coords: [-14.235, -51.9253] },
  { name: "South Africa", coords: [-30.5595, 22.9375] },
  { name: "India", coords: [20.5937, 78.9629] },
  { name: "China", coords: [35.8617, 104.1954] },
  { name: "Japan", coords: [36.2048, 138.2529] },
  { name: "Australia", coords: [-25.2744, 133.7751] },
  { name: "France", coords: [46.6034, 1.8883] },
  { name: "Italy", coords: [41.8719, 12.5674] },
  { name: "Spain", coords: [40.4637, -3.7492] },
  { name: "Russia", coords: [61.524, 105.3188] },
  { name: "Iran", coords: [32.4279, 53.688] },
  { name: "Turkey", coords: [38.9637, 35.2433] },
  { name: "Egypt", coords: [26.8206, 30.8025] },
];

function FitBounds({ bounds }: { bounds: LatLngTuple[] }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds as LatLngTuple[], { padding: [50, 50] });
  }, [map, bounds]);
  return null;
}

export default function SAMap() {
  const bounds: LatLngTuple[] = locations.map((loc) => loc.coords);

  return (
    <div className="w-full h-full rounded-l-lg overflow-hidden border-2 border-slate-700">
      <MapContainer
        center={[20, 0] as LatLngTuple}
        zoom={2}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
        <FitBounds bounds={bounds} />
        {locations.map((loc) => (
          <Marker key={loc.name} position={loc.coords} icon={customIcon}>
            <Popup className="text-slate-100 bg-slate-800">{loc.name}</Popup>
          </Marker>
        ))}

        <Polyline
          positions={bounds}
          pathOptions={{
            color: "#3b82f6",
            weight: 2,
            dashArray: "5, 10",
          }}
        />
      </MapContainer>
    </div>
  );
}
