import React, { useEffect, useState } from "react";
import {ComposableMap, Geographies, Geography, Annotation, ZoomableGroup, Sphere, Graticule} from "react-simple-maps"
import { scaleLinear } from "d3-scale";
// import { findRenderedComponentWithType } from "react-dom/test-utils";



function Map() {

    const [position, setPosition] = useState({coordinates:[0, 0], zoom: 1})
    const [countries, setCountries] = useState([])
    const [continent, setContinent] = useState([])


    function handleMoveEnd(position) {
        setPosition(position)
    }


    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";



    const colorScale = scaleLinear().domain([0, 6300000]).range(["#A72BB5", "#0376DB"])


    useEffect(() => {
        fetch("http://localhost:3001/countries")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]) 

    useEffect(() => {
        fetch("http://localhost:3001/continent")
        .then(res => res.json())
        .then(data => setContinent(data))
    },[]) 

    // const mappedCountries = countries.map((country, index) => {
    return (
        <div className="Map-Page">
        <div style={{width: "50vw", height: "50vh"}}>
        <ComposableMap width={900} height={400} projectionConfig={{rotate:[-10, 0, 0], scale: 147}}>
        { countries.length > 0 
        ?
            <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}> 
                <Sphere stroke="#000" strokeWidth={0.3}/>
                <Graticule stroke="#000" strokeWidth={0.3}/>
                <Geographies geography={geoUrl}>
                    {({geographies}) => geographies.map((geo, index) => {
                        const isos = countries.find((s) => s.ISO3 === geo.properties.ISO_A3)
                        return (
                            <>
                            <Geography key={index} geography={geo} fill={isos ? colorScale(isos["population_density"]) : "#333"}/>
                            <Annotation subject={[-100.4173, 38.9071]} dx={70} dy={-40} connectorProps={{
                                stroke:"#999",
                                strokeWidth: 1,
                            }}>
                                <rect 
                                width="65"
                                height="30"
                                style={{
                                    x: 2,
                                    y: -17,
                                    fill:"rgb(0, 0, 0)",
                                    fillOpacity:0.01,
                                    stroke: "rgb(0, 0, 0)",
                                    strokeWidth: 1,
                                    strokeOpacity: 0.03
                                }}/>
                                <text
                                x="8"
                                textAnchor="start"
                                alignmentBaseline="middle"
                                style={{
                                    fontSize: 15,
                                    fill: "#C1C0CB",
                                    fontFamily: "barlow",
                                    fontWeight: 100,
                                    backgroundColor: "#000",
                                    width: 200,
                                    height: 40
                                }} />
                                {continent[0].continent}, {`${(continent[0].average)}%`}
                            </Annotation>
                            </>
                        )
                    })
                    }
                </Geographies>
            </ZoomableGroup>
            
            : <p>loading...</p>
        
        }
        </ComposableMap>

        </div>
        </div>
        
)};

export default Map;