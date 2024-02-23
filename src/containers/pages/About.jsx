import Images from "components/about/Images"
import Test from "components/about/Test"
import Header from "components/about/header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import Team from "components/about/Team"

function About()
{

useEffect(()=>{
        window.scrollTo(0,0)
    },  [])
    

    return(
        <Layout>
                    <Navbar/>
                    <div className="pt-28 ">
                         <Header/>
                         <Images/>
                         <Test/>
                         <Team/>
                     </div>
                            <Footer/>   
        </Layout>
        
    )
}

export default About