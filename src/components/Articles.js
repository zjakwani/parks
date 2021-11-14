import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Component for displaying metadata about park webcams, and mapping images if any
const Articles = props => {
    return (


            <Grid item>
                <Card sx={{ maxWidth: '17vw' }}>
                    <CardMedia
                        component="img"
                        alt="Link invalid"
                        height="140"
                        image={props.data.listingImage.url}
                    />
                    <CardContent>
                        <h4>{props.data.title}</h4>
                        <p>{"Overview: " + props.data.listingDescription.substring(0,300) + "..."}</p>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" target="_blank" href={props.data.url}>Go To Article Page</Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}

export default Articles;