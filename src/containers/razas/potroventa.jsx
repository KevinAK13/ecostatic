import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Potro from "components/ventas/ventascomp/potro"
import VentasCdm from "components/ventas/ventascomp/ventascdm"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function PotroVenta()
{

useEffect(()=>{
        window.scrollTo(0,0)
    },  [])
    

    return(
        <Layout>
                    <Navbar/>
                    <div className="pt-28 ">
                        <Potro/>
                     </div>                            <Footer/>   
        </Layout>
        
    )
}

export default PotroVenta