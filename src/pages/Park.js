import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Map from "../components/Map"
import Slider from "../components/Slider"
import ParkInfo from "../components/ParkInfo"
import API_URLS from "../urls"

// General component for park details, renders info based on Park Code
const Park = props => {

    // Enum for names of the components being displayed one at a time
    const ComponentList = {
        INFO: "Park Information",
        IMAGES: "Gallery",
        MAP: "Map",
    }

    // State hooks for park information and current component being displayed
    const [parkData, setParkData] = useState(null)
    const [component, setComponent] = useState(ComponentList.INFO)

    // Gets park code from the Router parameters to display corresponding data
    const { code } = useParams();

    // Sets current park data in the state to results from API get request
    const fetchParkData = () => {
        axios.get(API_URLS.PARK_DATA(code))
        .then((response) => {
            setParkData(response.data.data[0])
        })
    }

    // Fetches park data once on page load
    useEffect(() => {
        fetchParkData()
    }, [])

    // Decides what to display based on what button is currently selected
    const componentReducer = (current) => {
        if (parkData == null) {
            return <h2>Loading</h2>
        }

        // extract strings
        else if (current === ComponentList.INFO) {
            return <ParkInfo data={parkData} />
        }
        else if (current === ComponentList.IMAGES) {
            return <Slider images={parkData.images}/>
        }
        else if (current === ComponentList.MAP) {
            return <Map latitude={parkData.latitude} longitude={parkData.longitude}/>
        }
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Display</FormLabel>

                {/* onchange property of buttons sets the current component in state */}
                <RadioGroup
                    row
                    aria-label="display"
                    name="controlled-radio-buttons-group"
                    value={component}
                    onChange={(event) => setComponent(event.target.value)}
                >

                    {/* maps enums to controllable toggle buttons */}
                    {Object.values(ComponentList).map((component) => {
                        return <FormControlLabel 
                                    value={component} 
                                    control={<Radio />}
                                    label={component}
                                />
                    })}
                </RadioGroup>
            </FormControl>

            {componentReducer(component)}
        </div>
    );
  };
  
export default Park;