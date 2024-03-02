import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import credential from "./credential";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credential.mapsKey}`; 

class Maps extends Component {
    render() {
        const defaultCenter = { lat: 28.625310300832567, lng: -106.0200208914614 };

        const WrappedMap = withScriptjs(withGoogleMap((props) => {
          return React.createElement(
            GoogleMap,
            {                                                                        
              defaultZoom: 18,
              defaultCenter: defaultCenter,
              center: defaultCenter,
            },
          );
        }));

        return (
            <div style={{ height: "15%px", width: "1000px", margin: "auto" }}>
                <WrappedMap
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        );
    }
}

export default Maps;