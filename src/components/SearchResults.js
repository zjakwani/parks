import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"


// Component for displaying parks that match the according search filters
const SearchResults = props => {

    // Maps park list to buttons with links to the corresponding park specific page
    return ( 
        <Grid container spacing={2}>
            {props.parkList.map((park) => {

                return <Grid item>
                            <Button 
                                key={park.parkCode}
                                to={"/park/" + park.parkCode}
                                component={RouterLink}
                                variant="contained"
                            >
                                {park.fullName}
                            </Button>
                        </Grid>
            })}
        </Grid>
    );
};
  
  export default SearchResults;