import axios from "axios"
import { useEffect, useState } from "react"
import SearchResults from "../components/SearchResults"
import API_URLS from "../urls"
import Header from "../components/Header"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"


// Page for keyword based searching
const Keyword = props => {

    // State hooks for dynamically changing user input, submitted user input, and api call results
    const [input, setInput] = useState("")
    const [searched, setSearched] = useState("")
    const [parkResults, setParkResults] = useState([])

    // Fetches park results corresponding with searched term
    const fetchParkResults = () => {
        if (searched == "") {
            return
        }

        // Filters parks by keyword
        axios.get(API_URLS.PARKS_BY_KEYWORD(searched))
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
        if (searched == "") {
            return
        }
        else if (parkResults.length === 0) {
            return <h3>Oops! No parks match the criteria</h3> 
        }
        else {
            return <SearchResults parkList={parkResults} />
        }
    }

    // Calls the park fetch every time the search term changes
    useEffect(() => {
        fetchParkResults()
    }, [searched])

    return (
        <div>
            <Header title={"Search by Keyword"}/>
            <TextField
                label="Keyword"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style = {{width: '75vw'}}
            />
            <Button
                variant="contained"
                onClick={() => setSearched(input)}
            >
                Submit
            </Button>

            { (searched !== "") ?
                <h2>{'Parks related to "' + searched + '"'}</h2> 
                :
                <h2>Enter a search term!</h2>
            }

            <div>{displayParkResults()}</div>
        </div>
    );
  };

export default Keyword;