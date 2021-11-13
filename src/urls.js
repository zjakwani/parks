// Hard coded endpoints for API calls

// Loads my API key from .env file 
const key = process.env.REACT_APP_API_KEY
const keyUrl = "api_key=" + key

// Current NPS api base for v1
const baseUrl = "https://developer.nps.gov/api/v1/"

export default {
    // Endpoint for specific info on One park
    PARK_DATA: (code) => baseUrl + "parks?parkCode=" + code + "&" + keyUrl,

    // Endpoint gets all parks from a list of associated activities
    PARKS_BY_ACTIVITIES: (activities) => {
        let parkIds = activities[0].value
        for (let index = 1; index < activities.length; index++) {
            parkIds += ("," + activities[index].value)
        }
        return baseUrl + "activities/parks?id=" + parkIds + "&" + keyUrl
    },

    // Endpoint to list all activities
    ACTIVITIES: baseUrl + "activities" + "?" + keyUrl,
}