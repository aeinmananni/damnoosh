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

const locations: { name: string; coords: LatLngTuple }[] = [
  { name: "Germany", coords: [51.1657, 10.4515] },
  { name: "United Kingdom", coords: [55.3781, -3.436] },
  { name: "Dubai, UAE", coords: [25.276987, 55.296249] },
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
    <div className="w-full h-full rounded-l-lg  overflow-hidden border-2 border-slate-700 ">
      <MapContainer
        center={[0, 0] as LatLngTuple}
        zoom={1}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
        <FitBounds bounds={bounds} />

        {/* مارکرها */}
        {locations.map((loc) => (
          <Marker key={loc.name} position={loc.coords} icon={customIcon}>
            <Popup className="text-slate-100 bg-slate-800">{loc.name}</Popup>
          </Marker>
        ))}

        {/* خط نقطه‌چین بین مارکرها */}
        <Polyline
          positions={bounds}
          pathOptions={{
            color: "#3b82f6", // رنگ پرایمری
            weight: 2,
            dashArray: "5, 10", // نقطه‌چین
          }}
        />
      </MapContainer>
    </div>
  );
}
