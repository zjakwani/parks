import axios from "axios"
import { useEffect, useState } from "react"
import Select from 'react-select'
import Button from '@mui/material/Button'

const Activities = props => {

    const key = process.env.REACT_APP_API_KEY
    const baseUrl = "https://developer.nps.gov/api/v1/"
    const keyUrl = "api_key=" + key

    const [activities, setActivities] = useState([])
    const [selected, setSelected] = useState([])
    const [parkResults, setParkResults] = useState([])

    const fetchActivities = () => {
        axios.get(baseUrl + "activities" + "?" + keyUrl)
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

    // const onSelectedChange = (newSelected) => {
    //     setSelected(newSelected)
    //     fetchParkResults()
    // }

    const displayActivities = () => {
        if (activities.length === 0) {
            return <h2>loading</h2>
        }
        else {
            return <Select
                isMulti
                options={activities}
                //onChange={(newSelected) => onSelectedChange(newSelected)}
                onChange={setSelected}
            />
        }
    }

    const displaySelected = () => {
        if (selected.length === 0) {
            return <h2>Nothing selected</h2>
        }
        else {
            let selectedString = "Parks with " + selected[0].label
            for (let i = 1; i < selected.length; i++) {
                selectedString += (" AND " + selected[i].label)
            }
            return <h2>{selectedString}</h2>
        }
    }

    const makeParkQuery = (selected) => {
        let parkIds = selected[0].value
        for (let i = 1; i < selected.length; i++) {
            parkIds += ("," + selected[i].value)
        }
        return baseUrl + "activities/parks?id=" + parkIds + "&" + keyUrl
    }

    const fetchParkResults = () => {
        if (selected.length === 0) {
            return
        }

        const parkQuery = makeParkQuery(selected)

        axios.get(parkQuery)
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

    const displayParkResults = () => {
        if (selected.length === 0) {
            return
        }
        else if (parkResults.length === 0) {
            return <h3>Oops! No parks match the criteria</h3> 
        }
        else {
            return parkResults.map(park => {
                    return <Button variant="outlined" key={park.parkCode} href={"/" + park.parkCode}>{park.fullName}</Button>
            })
        }
    }

    // triggers once on page load
    useEffect(() => {
        fetchActivities()
    }, [])

    useEffect(() => {
        fetchParkResults()
    }, [selected])

    return (
        <div>
            {displayActivities()}
            {displaySelected()}
            <div>{displayParkResults()}</div>
        </div>
    );
  };
  
export default Activities;