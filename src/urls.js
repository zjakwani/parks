// Hard coded endpoints for API calls

// Loads my API key from .env file 
const key = process.env.REACT_APP_API_KEY
const keyUrl = "api_key=" + key

// Current NPS api base for v1
const baseUrl = "https://developer.nps.gov/api/v1/"

export default {

    // Endpoint for parks API call with keyword filter set
    PARKS_BY_KEYWORD: (keyword) => baseUrl + "parks?q=" + keyword + "&" + keyUrl,

    // Endpoint for specific info on One park
    PARK_DATA: (code) => baseUrl + "parks?parkCode=" + code + "&" + keyUrl,

    // Endpoint gets all parks from a list of associated activities
    PARKS_BY_ACTIVITIES: (activities) => {
        let activityIds = activities[0].value
        for (let index = 1; index < activities.length; index++) {
            activityIds += ("," + activities[index].value)
        }
        return baseUrl + "activities/parks?id=" + activityIds + "&" + keyUrl
    },

    // Endpoint to list all activities
    ACTIVITIES: baseUrl + "activities" + "?" + keyUrl,

    // Endpoint gets all parks from a list of associated topics
    PARKS_BY_TOPICS: (topics) => {
        let topicIds = topics[0].value
        for (let index = 1; index < topics.length; index++) {
            topicIds += ("," + topics[index].value)
        }
        return baseUrl + "topics/parks?id=" + topicIds + "&" + keyUrl
    },

    // Endpoint to list all topics
    TOPICS: baseUrl + "topics" + "?" + keyUrl,

    // Endpoint to return parks in a state, by 2 letter state abbreviation
    PARKS_BY_STATE: (stateCode) => baseUrl + "parks?stateCode=" + stateCode + "&" + keyUrl,

    // Endpoint to get webcams for a given park
    WEBCAM: (parkCode) => baseUrl + "webcams?parkCode=" + parkCode + "&" + keyUrl,

    // Endpoint to get related articles for a park
    ARTICLES: (parkCode) => baseUrl + "articles?parkCode=" + parkCode + "&limit=10&" + keyUrl,
}