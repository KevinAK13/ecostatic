import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import VentasCdm from "components/ventas/ventascomp/ventascdm"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

function Razacuartoventa()
{

useEffect(()=>{
        window.scrollTo(0,0)
    },  [])
    

    return(
        <Layout>
                  <Helmet>
        <title>Rancho Tepic | Cuarto de Milla</title>
        <meta name="description" content="Compra, venta y consigación de caballos en todo México."/>
        <meta name="keywords" content='caballos, mexico, comprar, yeguas, vender caballos, comprar caballos, consigación' />
        <meta name="robots" content='all'/>
        <link rel="canonical" href="https://www.ranchotepic.com/" />
        <meta name="author" content='Servicios Web XU'/>
        <meta name="publisher" content='Servicios Web XU'/>

        { /* Facebook tags */ }
<meta property="og:title" content={'Rancho Tepic'} />
<meta property="og:description" content={"Compra, venta y consigación de caballos en todo México."} />
<meta property="og:url" content={'https://www.ranchotepic.com/'} />
<meta property="og:image" content={'Rancho Tepic'} />
{ /* End Facebook tags */ }

      </Helmet>
                    <Navbar/>
                    <div className="pt-28 ">
<VentasCdm/>
                     </div>                            <Footer/>   
        </Layout>
        
    )
}

export default Razacuartoventa