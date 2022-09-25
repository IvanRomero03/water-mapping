import React from "react";
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
import { idText } from "typescript";

export const wrapperStyles = {
  map: {
    height: "100vh",
    width: "100vw",
  },
  wrapper: {
    padding: "15px",
    marginTop: "15px",
  },
  buttonContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "7px",
    gridAutoColumns: "max-content",
    padding: "7px 0",
  },
  buttons: {
    padding: "10px",
    flex: 1,
  },
  popupStyles: {
    padding: "15px",
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
  zoom: 7,
  view: "Auto",
};
const AzureLayer: React.FC = () => {
  const point1 = new data.Position(100.2909867, 25.6515911);
  const point2 = new data.Position(100.270123, 25.667457);
  const point3 = new data.Position(100.28967, 25.621341);
  const point4 = new data.Position(100.512357, 25.56342134);
  const point5 = new data.Position(-100.23569,	25.215239);
  const point6 = new data.Position(-100.242347,	25.735235);
  const point7 = new data.Position(-100.4523123,	25.5945565);
  const point15 = new data.Position(-100.4523123,	25.5945565);
  const point8 = new data.Position(-100.301231,	25.663747);
  const point9 = new data.Position(100.32164, 25.65134);
  const point16 = new data.Position(100.512357, 25.846532);
  const point17 = new data.Position(100.512357, 25.846532);
  const point18 = new data.Position(100.512357, 25.846532);
  const point11 = new data.Position(-100.30165,	25.65132);
  const point12 = new data.Position(-100.423165,	25.53265);
  const point13 = new data.Position(-100.531143,	25.756173);
  const point19 = new data.Position(-100.215641,	25.723165);
  const point20 = new data.Position(-100.215641,	25.723165);
  const point10 = new data.Position(-100.215641,	25.723165);

  return (
    <>
      <div style={ wrapperStyles.map}>
          <AzureMapsProvider>
            <div style={styles.map}>
            <div style={{ height: '300px'}}>
              <AzureMap options={option} >
                <AzureMapDataSourceProvider id={"LayerExample2 DataSource"}>
                  <AzureMapLayerProvider
                    id={"LayerExample2 HeatMap"}
                    options={{}}
                    type={"HeatLayer"}
                    
                  />
                  <div style = {{width: '100%'}}>
                  <AzureMapFeature
                    id={"LayerExample2 MapFeature2"}
                    key={"dddd"}
                    type="MultiPoint"
                    coordinates={[point1, point2, point3, point4, point5, point6, point7, point8, point9, point10, point11, point12, point13, point15, point16, point17, point18, point19, point20]}
                  />
                  </div>
                </AzureMapDataSourceProvider>
              </AzureMap>
            </div>
            </div>
          </AzureMapsProvider>
        
      </div>
    </>
  );
};

const styles = {
  map: {
    height: 300,
    width: "100%",
    size: "100%",
    innerHeight : "100%",
    innerWidth : "100%",
    outerHeight : "100%",
    outerWidth : "100%",
    
  },
};



export default AzureLayer;
