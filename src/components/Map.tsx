"use client";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type AddressTypes = { street: string; city: string };

const Map = ({ addresses }: { addresses: AddressTypes[] }) => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY as string;
    const map = new mapboxgl.Map({
      container: "map",
      center: [21.0122, 52.2297],
      zoom: 12,
    });
    const bounds = new mapboxgl.LngLatBounds();

    if (!addresses || addresses.length <= 0) return;

    map.on("load", () => {
      let validCoordinatesFound = false;
      addresses.forEach((addressObj, index) => {
        const address = `${addressObj.street}, ${addressObj.city}`;
        fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.features && data.features.length > 0) {
              const [lng, lat] = data.features[0].center;
              new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${address}</h3>`))
                .addTo(map);

              bounds.extend([lng, lat]);
              validCoordinatesFound = true;
              if (index === addresses.length - 1) {
                if (!validCoordinatesFound) return;
                if (addresses.length > 1) {
                  map.fitBounds(bounds, {
                    padding: 50,
                    maxZoom: 15,
                    duration: 2000,
                  });
                } else {
                  const center = bounds.getCenter();
                  map.setCenter(center);
                  map.setZoom(12);
                }
              }
            } else {
              console.error("No coordinates found for the address:", address);
            }
          })
          .catch((error) => {
            console.error("Error fetching coordinates:", error);
          });
      });
    });
    return () => map.remove();
  }, [addresses]);

  return <div id="map" className="rounded-lg h-[400px]"></div>;
};

export default Map;
