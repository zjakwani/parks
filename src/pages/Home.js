import Header from "../components/Header";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import picture from '../images/hill.jpg'
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';

// Homepage with embed component to NPS twitter
const Home = props => {
    return (
        <div>
            <Header title={"Home"}/>
            <Stack direction="row">
                <Fade in={true} timeout={7000}>
                    <div style={{height:'83vh',  position:'relative', marginRight:'3vw'}}>
                        <img src={picture} alt="Image of canyon" style={{height: '100%', width:"100%", opacity:0.5}}/>
                        <h2 style={{position: 'absolute', top: '45%', left:'25%', marginTop:'0'}}>Visit our National Parks!</h2>
                    </div>
                </Fade>
                <div style={{width:'30vw'}}>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        userId={36771809}
                        options={{height: '83vh'}}
                        />
                </div>
            </Stack>
        </div>
    );
};
  
export default Home;