import Appaloosa from "components/cria/appaloosa"
import Azteca from "components/cria/azteca"
import Cuartodemilla from "components/cria/cuartodemilla.js"
import Españoles from "components/cria/españoles"
import Header from "components/cria/header"
import Purasangre from "components/cria/purasangre"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Piedecria()
{


    useEffect(()=>{
        window.scrollTo(0,0)
    },  [])
    

    return(
        <Layout>
                    <Navbar/>
                    <div className="pt-28 ">
                        <Header/>              
                     </div>
                     <Cuartodemilla/>
                     <Españoles/>
                     <Appaloosa/>
                     <Azteca/>
                     <Purasangre/>

                            <Footer/>   
        </Layout>
        
    )
}

export default Piedecria