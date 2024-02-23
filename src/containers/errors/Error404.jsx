
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

import { Helmet } from "react-helmet-async"
import { Button } from "@material-tailwind/react"

function Error404()
{
    useEffect(()=>{
        window.scrollTo(0,0)
    },  [])

    return(

    <Layout>
    <Helmet>
<title>Rancho Tepic | Catálogo</title>
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
      <div className="flex h-screen flex-col bg-white">


  <div className="flex flex-1 items-center justify-center">
    <div className="mx-auto max-w-xl px-4 py-8 text-center">
      <h1 className=" font-bold tracking-tight text-gray-900 text-8xl">
    Error
          </h1>

      <p className="text-4xl mt-4 pb-10 text-gray-500">
        Esta pagina no existe en el sitio, intente con otra dirección o vuelva a la pagína principal.
      </p>

      <a className="pt-2"href="/">
            <Button size="sm" variant="gradient" className=" rounded-sm text-sm">     Regresar a  la pagina principal.</Button>
  </a>        
  
    </div>
  </div>
</div>

</Layout>


    )
}

export default Error404