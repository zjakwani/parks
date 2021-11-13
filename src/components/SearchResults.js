import Button from "@mui/material/Button"

// Component for displaying parks that match the according search filters
const SearchResults = props => {

    // Maps park list to buttons with links to the corresponding park specific page
    return ( 
        <div>
            {props.parkList.map((park) => {

                return <Button 
                            variant="outlined" 
                            key={park.parkCode}
                            href={"/" + park.parkCode}
                        >
                            {park.fullName}
                        </Button>
            })}
        </div>
    );
};
  
  export default SearchResults;