import axios from "axios"
import { useEffect, useState } from "react"
import Select from 'react-select'
import SearchResults from "../components/SearchResults"
import API_URLS from "../urls"

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
            let uniqueParks = response.data.data[0].parks
            if (selected.length > 1) {
                for (let i = 1; i < response.data.data.length; i++) {
                    const parkFilter = new Map()
                    for (let j = 0; j < response.data.data[i].parks.length; j++) {
                        parkFilter.set(response.data.data[i].parks[j].parkCode, true)
                    }
                    uniqueParks = uniqueParks.filter((park) => parkFilter.get(park.parkCode) != null)
                }
            }

            setParkResults(uniqueParks)
        })
        // logs any errors to console
        .catch((error) => {
            console.log("Error: " + error)
        })
    }

    // Util function to concatenate Current Activities for display
    const getSelectedString = () => {
        let selectedString = "Parks with " + selected[0].label
        for (let index = 1; index < selected.length; index++) {
            selectedString += (" AND " + selected[index].label)
        }
        return <h2>{selectedString}</h2>
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
            {/* {displayActivities()} */}
            { activities.length ? 
                <Select isMulti options={activities} onChange={setSelected}/> 
                : 
                <h2>Loading Activities</h2>
            }
            { selected.length ?
                <h2>{getSelectedString()}</h2> 
                :
                <h2>Nothing selected</h2>
            }

            <div>{displayParkResults()}</div>
        </div>
    );
  };
  
export default Activities;