import axios from "axios"
import { useEffect, useState } from "react"
import Select from 'react-select'
import SearchResults from "../components/SearchResults"
import API_URLS from "../urls"
import Header from "../components/Header"
import { stateList } from "../util"

// Page for state based searching
const States = props => {

    // State hooks for activity list, currently selected activities, and results from API call
    const [selected, setSelected] = useState(null)
    const [parkResults, setParkResults] = useState([])

    // Fetches park results corresponding with selected states
    const fetchParkResults = () => {
        if (selected == null) {
            return
        }

        // Filters parks by state
        axios.get(API_URLS.PARKS_BY_STATE(selected.value))
        .then((response) => {
            setParkResults(response.data.data)
        })
        // logs any errors to console
        .catch((error) => {
            console.log("Error: " + error)
        })
    }

    // Util function to handle rendering of park results
    const displayParkResults = () => {
        if (selected == null) {
            return
        }
        else if (parkResults.length === 0) {
            return <h3>Oops! No parks match the criteria</h3> 
        }
        else {
            return <SearchResults parkList={parkResults} />
        }
    }

    // Calls the park fetch every time the selected state changes
    useEffect(() => {
        fetchParkResults()
    }, [selected])

    return (
        <div>
            <Header title={"Search by State"}/>
            <Select options={stateList} onChange={setSelected}/> 

            { (selected != null) ?
                <h2>{"Parks in " + selected.label}</h2> 
                :
                <h2>See all national parks within a US state!</h2>
            }

            <div>{displayParkResults()}</div>
        </div>
    );
  };

export default States;