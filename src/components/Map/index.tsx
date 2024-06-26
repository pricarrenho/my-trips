import { useRouter } from "next/router";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Leaflet, { LatLngExpression } from "leaflet";
import { MapProps } from "./types";
import * as S from "./styles";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

const mapPinIcon = Leaflet.icon({
  iconUrl: "/img/location.svg",
  iconSize: [41, 65],
});

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

const Map = ({ places }: MapProps) => {
  const router = useRouter();
  const brazilCoordinates: LatLngExpression = [-26, -55];

  return (
    <S.MapWrapper>
      <MapContainer
        center={brazilCoordinates}
        zoom={4}
        style={{ height: "100%", width: "100%" }}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180],
        ]}
      >
        <CustomTileLayer />

        {places?.map(({ id, name, slug, location }) => {
          const { latitude, longitude } = location;

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              icon={mapPinIcon}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`);
                },
              }}
            />
          );
        })}
      </MapContainer>
    </S.MapWrapper>
  );
};

export default Map;
