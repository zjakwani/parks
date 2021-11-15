import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Zoom from '@mui/material/Zoom';

// Component for displaying park articles info in cards
const Articles = props => {
    return (

            <Zoom in={true} timeout={props.index % 2 === 0 ? 5000 : 10000}>
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
            </Zoom>
    )
}

export default Articles;