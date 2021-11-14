import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

// Component for displaying metadata about park webcams, and mapping images if any
const Webcam = props => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3}>
                <Box sx={{ p: 3 }}>
                    <h2>{"Webcam " + props.index + ": " + props.data.title}</h2>
                    <h4>{"Description: " + props.data.description}</h4>
                    <h4>{"Status: " + props.data.status}</h4>
                    <h4>{props.data.isStreaming ? "Webcam is currently streaming" : "Webcam is not streaming"}</h4>
                    <Button variant="contained" target="_blank" href={props.data.url}>Learn More - Visit Webcam Website</Button>
                    {   
                        props.data.images.length < 1 ?
                        <h4>Sorry, no images available for this webcam.</h4>
                        :
                        (props.data.images.map((image) => {
                            return <img style={{width: '70vw'}} src={image.url} alt="Link invalid"/>
                        }))
                    }
                </Box>
            </Paper>
        </Box>
    )
}

export default Webcam;