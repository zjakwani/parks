import axios from "axios"
import { useEffect, useState } from "react"
import Select from 'react-select'
import SearchResults from "../components/SearchResults"
import API_URLS from "../urls"
import Header from "../components/Header"
import { mergeParks } from "../util"
import { getMultipleSelectedString } from "../util"
import picture from '../images/mountains.jpg'

// Page for activity based searching
const Activities = props => {

    // State hooks for activity list, currently selected activities, and results from API call
    const [activities, setActivities] = useState([])
    const [selected, setSelected] = useState([])
    const [parkResults, setParkResults] = useState([])

    // Fetches list of activities from API
    const fetchActivities = () => {
        axios.get(API_URLS.ACTIVITIES)
        .then((response) => {
            setActivities(response.data.data.map(item => {
                return ({
                    value: item.id,
                    label: item.name,
                })
            }))
        })
        // logs any errors to console
        .catch((error) => {
            console.log("Error: " + error)
        })
    }

    // Fetches park results corresponding with selected activities
    const fetchParkResults = () => {
        if (selected.length === 0) {
            return
        }

        // Filters parks with AND logic
        // Only returns parks that have every selected activity 
        axios.get(API_URLS.PARKS_BY_ACTIVITIES(selected))
        .then((response) => {
            const isSelectedMultiple = selected.length > 1
            setParkResults(mergeParks(response.data.data, isSelectedMultiple))
        })
        // logs any errors to console
        .catch((error) => {
            console.log("Error: " + error)
        })
    }

    // Util function to handle rendering of park results
    const displayParkResults = () => {
        if (selected.length === 0) {
            return
        }
        else if (parkResults.length === 0) {
            return <h3>Oops! No parks match the criteria</h3> 
        }
        else {
            return <SearchResults parkList={parkResults} />
        }
    }

    // triggers once on page load
    useEffect(() => {
        fetchActivities()
    }, [])

    // Calls the park fetch every time the selected activities change
    useEffect(() => {
        fetchParkResults()
    }, [selected])

    return (
        <div>
            <Header title={"Search by Activities"}/>
            <img src={picture} alt="Image of beautiful lake" style={{height: '25vh', width:"76vw", marginBottom:"2vh"}}/>
            { activities.length ? 
                <Select isMulti options={activities} onChange={setSelected}/> 
                : 
                <h2>Loading Activities</h2>
            }
            { selected.length ?
                <h2>{getMultipleSelectedString(selected)}</h2>
                :
                <h2>See parks that have the selected activities!</h2>
            }

            <div>{displayParkResults()}</div>
        </div>
    );
  };
  
export default Activities;