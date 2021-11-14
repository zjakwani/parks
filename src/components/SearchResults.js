import Button from "@mui/material/Button"

// Component for displaying parks that match the according search filters
const SearchResults = props => {

    // Maps park list to buttons with links to the corresponding park specific page
    return ( 
        <div>
            {props.parkList.map((park) => {

                return <Button 
                            key={park.parkCode}
                            href={"/" + park.parkCode}
                            variant="contained"
                        >
                            {park.fullName}
                        </Button>
            })}
        </div>
    );
};
  
  export default SearchResults;