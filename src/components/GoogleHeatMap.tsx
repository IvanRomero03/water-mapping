import type { NextPage } from "next";
import { Button, Container, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  HeatmapLayer,
  LoadScriptNext,
  LoadScript,
} from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "60vw",
  height: "60vh",
};

const center = {
  lat: 25.65191,
  lng: -100.290989,
};

const GoogleHeatMap = () => {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAzi35daIg5ZAWe20hthfmTqMiEak3l2pk" as any,
    libraries: ["visualization"],
  });

  const [map, setMap] = useState<google.maps.Map>();

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(undefined);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <HeatmapLayer
          data={[
            new google.maps.LatLng(-3.745, -38.523),
            new google.maps.LatLng(25.65191, -100.290989),
          ]}
        />
      </GoogleMap>
    </>
  ) : (
    <>asd</>
  );
  return isLoaded ? (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyAzi35daIg5ZAWe20hthfmTqMiEak3l2pk"
      libraries={["visualization"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <HeatmapLayer
          data={[
            new google.maps.LatLng(-3.745, -38.523),
            new google.maps.LatLng(25.65191, -100.290989),
          ]}
        />
      </GoogleMap>
    </LoadScriptNext>
  ) : (
    <>asd</>
  );
};
export default GoogleHeatMap;
