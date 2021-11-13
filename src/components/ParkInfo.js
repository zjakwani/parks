const ParkInfo = props => {
    return ( 
        <div>
            <h3>Description: {props.data.description}</h3>
            <h3>latitude and longitude: {props.data.latLong}</h3>
        </div> 
    );
};
  
  export default ParkInfo;