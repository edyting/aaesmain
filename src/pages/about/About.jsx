import { useEffect } from "react";
import Herosection from "./Herosection";
import Secondabout from "./Secondabout";
import Service from "./Service";
import Topsection from "./Topsection";

const About = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    return ( 
        <div className="">
            <Herosection/>
            <Topsection/>
            {/* <Secondabout/> */}
            <Service/>
        </div>
     );
}
 
export default About;