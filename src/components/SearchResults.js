import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Grow from "@mui/material/Grow"
import { Link as RouterLink } from "react-router-dom"


// Component for displaying parks that match the according search filters
const SearchResults = props => {

    // Maps park list to buttons with links to the corresponding park specific page
    return ( 
        <Grid container spacing={2}>
            {props.parkList.map((park) => {

                return  <Grow in={true} timeout={2000}>
                            <Grid item>
                                <Button 
                                    key={park.parkCode}
                                    to={"/park/" + park.parkCode}
                                    component={RouterLink}
                                    variant="contained"
                                >
                                    {park.fullName}
                                </Button>
                            </Grid>
                        </Grow>
            })}
        </Grid>
    );
};
  
  export default SearchResults;