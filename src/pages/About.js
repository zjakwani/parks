import Header from "../components/Header"

const About = props => {
    return (
        <div>
            <Header title="About"/>
            <p>
            For the last 100 years, the National Park Service
            has contributed greatly to the preservation and management
            of America's national parks, as well as many of its national monuments.
            More than 330 million people visit the 61 national parks they oversee each year,
            with 40 million overnight campers. 
            </p>
            <p>
                This app was created to inform and encourage viewers to visit National Parks.
            </p>
            <a href="https://github.com/zjakwani/parks">Github</a>
        </div>
    )
}

export default About