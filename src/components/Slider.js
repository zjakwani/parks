import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"

// Shows images in a gallery format using React Awesome Slider component 
const Slider = props => {

    // Maps image array from props to individual images
    return ( 
        <AwesomeSlider>
            {props.images.map((image) => {
                return <div><img src={image.url} alt="Link invalid"/></div>
            })}
        </AwesomeSlider>
    );
};
  
export default Slider;