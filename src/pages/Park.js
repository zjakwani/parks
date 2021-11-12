import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

const Park = props => {

    // Gets park code from the Router parameters to display corresponding data
    const { code } = useParams();
    const baseUrl = "https://developer.nps.gov/api/v1/"
    const key = process.env.REACT_APP_API_KEY
    const keyUrl = "api_key=" + key

    const [parkData, setParkData] = useState(null)

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
        if (parkData == null) {
            return <h2>Loading</h2>
        }
        else {
            return <div>
                <h3>Description: {parkData.description}</h3>
                <h3>latitude and longitude: {parkData.latLong}</h3>
            </div>
        }
    }

    return (
        <div>{displayParkData()}</div>
    );
  };
  
export default Park;