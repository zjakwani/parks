import axios from "axios"
import { useEffect, useState } from "react"
import Select from 'react-select'
import SearchResults from "../components/SearchResults"
import API_URLS from "../urls"
import Header from "../components/Header"
import { mergeParks } from "../util"
import { getMultipleSelectedString } from "../util"


// Page for topic based searching
const Topics = props => {

    // State hooks for topic list, currently selected topics, and results from API call
    const [topics, setTopics] = useState([])
    const [selected, setSelected] = useState([])
    const [parkResults, setParkResults] = useState([])

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

    // Fetches list of topics from API
    const fetchTopics = () => {
        axios.get(API_URLS.TOPICS)
        .then((response) => {
            setTopics(response.data.data.map(item => {
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

    // Fetches park results corresponding with selected topics
    const fetchParkResults = () => {
        if (selected.length === 0) {
            return
        }

        // Filters parks with AND logic
        // Only returns parks that have every selected topic 
        axios.get(API_URLS.PARKS_BY_TOPICS(selected))
        .then((response) => {
            const isSelectedMultiple = selected.length > 1
            setParkResults(mergeParks(response.data.data, isSelectedMultiple))
        })
        // logs any errors to console
        .catch((error) => {
            console.log("Error: " + error)
        })
    }

    // triggers once on page load
    useEffect(() => {
        fetchTopics()
    }, [])

    // Calls the park fetch every time the selected topics change
    useEffect(() => {
        fetchParkResults()
    }, [selected])

    return (
        <div>
            <Header title={"Search by Topic"}/>
            { topics.length ? 
                <Select isMulti options={topics} onChange={setSelected}/> 
                : 
                <h2>Loading Topics</h2>
            }
            { selected.length ?
                <h2>{getMultipleSelectedString(selected)}</h2>
                :
                <h2>See parks related to the selected topics!</h2>
            }

            <div>{displayParkResults()}</div>
        </div>
    );
  };
  
export default Topics;