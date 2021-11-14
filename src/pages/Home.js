import Header from "../components/Header";
import { TwitterTimelineEmbed } from 'react-twitter-embed';



// Home page
const Home = props => {
    return (
        <div>
            <Header title={"Home"}/>
            <h2>Explore our beautiful national parks!</h2>
            <TwitterTimelineEmbed
                sourceType="profile"
                userId={36771809}
                options={{height: '80vh', width: '70vw'}}
                />
        </div>
    );
};
  
export default Home;