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
import Header from "../components/Header"
import Webcam from "../components/Webcam"
import Articles from "../components/Articles"
import Grid from "@mui/material/Grid"

// General component for park details, renders info based on Park Code
const Park = props => {

    // Enum for names of the components being displayed one at a time
    const ComponentList = {
        INFO: "Park Information",
        MAP: "Map",
        IMAGES: "Gallery",
        WEBCAM: "Webcams",
        ARTICLES: "Related Articles"
    }

    // State hooks for park information and current component being displayed, and webcams if any
    const [parkData, setParkData] = useState(null)
    const [component, setComponent] = useState(ComponentList.INFO)
    const [webcams, setWebcams] = useState([])
    const [articles, setArticles] = useState([])

    // Gets park code from the Router parameters to display corresponding data
    const { code } = useParams();

    // Sets current park data in the state to results from API get request
    const fetchParkData = () => {
        axios.get(API_URLS.PARK_DATA(code))
        .then((response) => {
            setParkData(response.data.data[0])
        })
    }

    // Sets current webcams in the state to results from API get request
    const fetchWebcams = () => {
        axios.get(API_URLS.WEBCAM(code))
        .then((response) => {
            setWebcams(response.data.data)
        })
    }

    // Sets current articles in the state to results from API get request
    const fetchArticles = () => {
        axios.get(API_URLS.ARTICLES(code))
        .then((response) => {
            setArticles(response.data.data)
        })
    }

    // Fetches park data once on page load
    useEffect(() => {
        fetchParkData()
        fetchWebcams()
        fetchArticles()
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
        else if (current === ComponentList.WEBCAM) {
            if (webcams.length === 0) {
                return <h2>Sorry, no webcams were found. Check out the Gallery instead!</h2>
            }
            else {
                return (webcams.map((webcam, index) => {
                    return <Webcam data={webcam} index={index + 1}/>
                }))
            }
        }
        else if (current === ComponentList.ARTICLES) {
            if (articles.length === 0) {
                return <h2>Sorry, no articles were found. Try a Google search!</h2>
            }
            else {
                return <Grid container spacing={5}>
                            {(articles.map((article, index) => {
                                return <Articles data={article} index={index + 1}/>
                            }))}
                        </Grid>
            }
        }
    }

    return (
        <div>
            <Header title={parkData == null ? "" : parkData.fullName}/>
            <FormControl component="fieldset" style={{marginBottom:'2vh'}}>
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