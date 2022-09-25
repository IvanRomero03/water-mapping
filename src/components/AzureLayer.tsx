import React, { useMemo } from "react";
import {
  AzureMapsProvider,
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapLayerProvider,
  AzureMapFeature,
  AzureMapHtmlMarker,
  IAzureMapOptions,
  IAzureMapHtmlMarkerEvent,
} from "react-azure-maps";
import { AuthenticationType, data } from "azure-maps-control";
// import { key } from "../key";
import { Text } from "@mantine/core";

export const wrapperStyles = {
  map: {
    height: "200vh",
    width: "200vw",
  },
  wrapper: {
    padding: "15px",
    marginTop: "15px",
  },
  buttonContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "10px",
    gridAutoColumns: "max-content",
    padding: "10px 0",
  },
  buttons: {
    padding: "15px",
    flex: 1,
  },
  popupStyles: {
    padding: "20px",
    color: "black",
  },
};

function getCoordinates(e: any) {
  console.log("Clicked on:", e.position);
}

const onClick = () => {
  console.log("ASD");
};

const azureHtmlMapMarkerOptions = {
  position: [-110, 45],
};

const eventToMarker: Array<IAzureMapHtmlMarkerEvent> = [
  { eventName: "click", callback: onClick },
];
const option: IAzureMapOptions = {
  authOptions: {
    authType: "subscriptionKey" as any,
    subscriptionKey: "WwfO6BKjULP5qQn1LbqzBb84wB9cXN7XnOMiK5MKlkc",
  },
  center: [-100.290987, 25.6515911],
  zoom: 6,
  view: "Auto",
};
const AzureLayer: React.FC = () => {
  const point = new data.Position(-80.01, 35.01, 1);
  const point1 = new data.Position(-100.01, 45.01);
  const point2 = new data.Position(-100.01, 45.01);

  return (
    <>
      <div style={wrapperStyles.map}>
        <Text>
          This sample shows how to add layers and global map events. Open dev
          tools console and click on map.
        </Text>
        <AzureMapsProvider>
          <div style={styles.map}>
            <AzureMap options={option}>
              <AzureMapDataSourceProvider id={"LayerExample2 DataSource"}>
                <AzureMapLayerProvider
                  id={"LayerExample2 HeatMap"}
                  options={{}}
                  type={"HeatLayer"}
                />
                <AzureMapFeature
                  id={"LayerExample2 MapFeature2"}
                  key={"dddd"}
                  type="MultiPoint"
                  coordinates={[point, point1, point2]}
                />
              </AzureMapDataSourceProvider>
            </AzureMap>
          </div>
        </AzureMapsProvider>
      </div>
    </>
  );
};

const styles = {
  map: {
    height: 300,
    marginBottom: 50,
  },
};

export default AzureLayer;
