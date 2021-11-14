import Paper from "@mui/material/Paper"


const Webcam = props => {
    return (
        <div>
            <Paper elevation={3}>
                <h2>{"Webcam " + props.index + ": " + props.data.title}</h2>
                <h4>{"Description: " + props.data.description}</h4>
                <h4>{"Status: " + props.data.status}</h4>
                <h4>{props.data.isStreaming ? "Webcam is currently streaming" : "Webcam is not streaming"}</h4>
                <h4>{"Learn more at: " + props.data.url}</h4>
                {   
                    props.data.images.length < 1 ?
                    <h4>Sorry, no images available for this webcam.</h4>
                    :
                    (props.data.images.map((image) => {
                        <img src={image.url} alt="Link invalid"/>
                    }))
                }
            </Paper>
        </div>
    )
}

export default Webcam;