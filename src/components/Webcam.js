import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"

const Webcam = props => {
    return ( 
        <AwesomeSlider>
            {props.images.map((image) => {
                return <div><img src={image.url} alt="Link invalid"/></div>
            })}
        </AwesomeSlider>
    );
};
  
export default Webcam;