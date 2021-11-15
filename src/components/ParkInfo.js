import Slide from '@mui/material/Slide'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'


const ParkInfo = props => {
    return ( 
        <Slide in={true} direction="up" timeout={10000}>
        <Grid container spacing={5}>
            <Grid item>
                <Card variant="outlined">
                    <Box padding={2}>
                        <h3>{props.data.description}</h3>
                    </Box>
                </Card>
            </Grid>

            <Grid item sx={{width: '32vw'}}>
                <Card variant="outlined">
                    <Box padding={2}>
                        <h3>General Information</h3>
                        <Divider/>
                        {props.data.contacts.emailAddresses.map((address) => {
                            return <p>{address.emailAddress}</p>
                        })}
                        <Divider/>
                        <p>{"Phone: " + props.data.contacts.phoneNumbers[0].phoneNumber}</p>
                        <Divider/>
                        <p>
                            { props.data.addresses[0].line1 + ", "
                            + props.data.addresses[0].city + ", "
                            + props.data.addresses[0].stateCode + ", " 
                            + props.data.addresses[0].postalCode}
                        </p>
                        <Divider/>
                        <p>{props.data.operatingHours[0].description}</p>
                        <Button variant="contained" target="_blank" href={props.data.directionsUrl}>Directions</Button>
                    </Box>
                </Card>
            </Grid>

            <Grid item sx={{width: '45vw'}}>
                <Card variant="outlined">
                    <Box padding={2}>
                        <h3>Activities</h3>
                        <Divider/>
                        <p>{props.data.activities.map(activity => activity.name).join(", ")}</p>
                    </Box>
                </Card>
            </Grid>

            <Grid item sx={{width: '45vw'}}>
                <Card variant="outlined">
                    <Box padding={2}>
                        <h3>Topics</h3>
                        <Divider/>
                        <p>{props.data.topics.map(topic => topic.name).join(", ")}</p>
                    </Box>
                </Card>
            </Grid>

            <Grid item sx={{maxWidth: '32vw'}}>
                <Card variant="outlined">
                    <Box padding={2}>
                        <h3>Fees</h3>
                        <Divider/>
                        {props.data.entranceFees.map((fee) => {
                            return <p>{fee.title + "- $" + fee.cost + " (" + fee.description + ")"}</p>
                        })}
                        {props.data.entrancePasses.map((fee) => {
                            return <p>{fee.title + "- $" + fee.cost + " (" + fee.description + ")"}</p>
                        })}
                    </Box>
                </Card>
            </Grid>

            <Grid item>
                <Button variant="contained" target="_blank" href={props.data.url}>Visit Park Website</Button>
            </Grid>
        </Grid>
        </Slide>
    );
};
  
export default ParkInfo;