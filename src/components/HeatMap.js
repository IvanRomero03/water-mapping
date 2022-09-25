import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class HeatMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  constructor(props) {
    super(props);
    this.state = {
      heatmapVisible: true,
      heatmapPoints: [
        { lat: 59.95, lng: 30.33 },
        { lat: 59.96, lng: 30.32 },
      ],
    };
  }

  onMapClick({ x, y, lat, lng, event }) {
    if (!this.state.heatmapVisible) {
      return;
    }

    this.setState({
      heatmapPoints: [...this.state.heatmapPoints, { lat, lng }],
    });
    if (this._googleMap !== undefined) {
      const point = new google.maps.LatLng(lat, lng);
      this._googleMap.heatmap.data.push(point);
    }
  }

  render() {
    const apiKey = { key: "AIzaSyDF0I8oHUH-k_onMU0npH4lX-6qzTcx79U" };
    const heatMapData = {
      positions: this.state.heatmapPoints,
      options: {
        radius: 20,
        opacity: 0.6,
      },
    };

    console.log(this.state);

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          ref={(el) => (this._googleMap = el)}
          bootstrapURLKeys={apiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
          onClick={this.onMapClick.bind(this)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default HeatMap;
