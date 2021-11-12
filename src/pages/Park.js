import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Webcam from "../components/Webcam"
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Map from "../components/Map"

const Park = props => {

    // Gets park code from the Router parameters to display corresponding data
    const { code } = useParams();
    const baseUrl = "https://developer.nps.gov/api/v1/"
    const key = process.env.REACT_APP_API_KEY
    const keyUrl = "api_key=" + key

    const [parkData, setParkData] = useState(null)
    const [component, setComponent] = useState("data")

    const fetchParkData = () => {
        axios.get(baseUrl + "parks?parkCode=" + code + "&" + keyUrl)
        .then((response) => {
            setParkData(response.data.data[0])
        })
    }

    useEffect(() => {
        fetchParkData()
    }, [])

    const displayParkData = () => {
        return <div>
            <h3>Description: {parkData.description}</h3>
            <h3>latitude and longitude: {parkData.latLong}</h3>
        </div>
    }

    const handleComponentChange = (event) => {
        setComponent(event.target.value)
    }

    const componentReducer = (current) => {
        if (parkData == null) {
            return <h2>Loading</h2>
        }
        // extract strings
        else if (current === "data") {
            return displayParkData()
        }
        else if (current === "webcam") {
            return <Webcam images={parkData.images}/>
        }
        else if (current === "map") {
            return <Map latitude={parkData.latitude} longitude={parkData.longitude}/>
        }
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Display</FormLabel>
                <RadioGroup
                    aria-label="display"
                    name="controlled-radio-buttons-group"
                    value={component}
                    onChange={handleComponentChange}
                >
                    <FormControlLabel value="data" control={<Radio />} label="Park Info" />
                    <FormControlLabel value="webcam" control={<Radio />} label="Images" />
                    <FormControlLabel value="map" control={<Radio />} label="Map" />
                </RadioGroup>
            </FormControl>

            {componentReducer(component)}
        </div>
    );
  };
  
export default Park;