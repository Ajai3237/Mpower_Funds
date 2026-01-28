import React, { useEffect } from "react";
import { llcData } from "../constants/llc";
import { incData } from "../constants/inc";
import { useLocation, useParams } from "react-router-dom";
import { metaConfig } from "../constants/metaConfig";

const countryMap = {
  us: llcData,
  ca: incData,
};

function MetaUpdater() {
  const location = useLocation();
  const { countryCode } = useParams();
  const country = (countryCode || "us").toLowerCase();

  useEffect(() => {
    const normalize = (str) => str.trim().toLowerCase();

    let path = location.pathname;
    if (countryCode) {
      path = path.replace(`/${countryCode}`, "") || "/";
    }
    path = normalize(path);

    // normalize keys
    const countryMeta = metaConfig[countryCode] || metaConfig["us"];
    const normalizedMeta = Object.fromEntries(
      Object.entries(countryMeta).map(([key, val]) => [normalize(key), val])
    );

    const meta = normalizedMeta[path] || normalizedMeta["*"];

    // Set <title>
    document.title = meta.title;

    // Set <meta name="description">
    let descTag = document.querySelector("meta[name='description']");
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = meta.desc;

    // Set <meta name="keywords">
    let keywordTag = document.querySelector("meta[name='keywords']");
    if (!keywordTag) {
      keywordTag = document.createElement("meta");
      keywordTag.name = "keywords";
      document.head.appendChild(keywordTag);
    }
    keywordTag.content = meta.keywords;

    // Optional: set robots
    let robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.name = "robots";
      document.head.appendChild(robotsTag);
    }
    robotsTag.content = "index, follow";
  }, [location, country, countryCode]);

  return null;
}

export default MetaUpdater;
