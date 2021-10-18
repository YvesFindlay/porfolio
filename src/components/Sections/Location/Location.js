import React, { useEffect } from "react";

import ProfileIcon from "../../SVG/ProfileIcon/ProfileIcon";
import MapIcon from "../../SVG/MapIcon/MapIcon";
import EmailIcon from "../../SVG/EmailIcon/EmailIcon";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  createSplitText,
  splitText,
} from "../../../HelperFunctions/textRevealAnimation";

import "./Location.scss";

const Location = () => {
  useEffect(() => {
    const locationH2Split = createSplitText({
      el: ".location__text-title",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".location__text-title",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      el: locationH2Split.lines,
      trigger: ".location__text",
      endTrigger: ".location__text",
      start: "top center",
      end: "bottom center",
    });

    const locationPSplit = createSplitText({
      el: ".location__text-paragraph",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".location__text-paragraph",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      el: locationPSplit.lines,
      // delay: 0.1,
      // stagger: 0.1,
      trigger: ".location__text",
      endTrigger: ".location__text",
      start: "top center",
      end: "bottom center",
    });
  }, []);

  return (
    <section className="location">
      <div className="location__content">
        <div className="location__text">
          <h2 className="location__text-title">Location</h2>
          <p className="location__text-paragraph">
            <span>
              <ProfileIcon />
            </span>
            Yves Findlay, Web Developer
          </p>
          <p className="location__text-paragraph">
            <span>
              <MapIcon />
            </span>
            Kent, United Kingdom
          </p>
          <a className="email-link" href="mailto:yves.findlay@gmail.com">
            <p className="location__text-paragraph">
              <span>
                <EmailIcon />
              </span>
              yves.findlay@gmail.com
            </p>
          </a>
        </div>
        <div className="location__map-container">
          <div id="map" className="location__map">
            <MapContainer
              style={{ height: "100%" }}
              center={[51.3887, 0.0745]}
              zoom={10}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}@2x.png?key=aJhzAxwXLADyKaiFKori"
              />
              <Marker position={[51.3887, 0.0745]}>
                <Popup>
                  Yves Findlay <br /> Web Dev in Kent.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
