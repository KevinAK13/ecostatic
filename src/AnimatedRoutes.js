import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "containers/pages/Home";
import Error404 from "containers/errors/Error404";
import Catalogo from "containers/pages/Catalogo";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import CVenta from "containers/pages/CVenta";
import Piedecria from "containers/pages/Piedecria";
import Razacuartoventa from "containers/razas/rcuartoventa";
import PotroVenta from "containers/razas/potroventa";
import Category from 'containers/pages/Category';
import Search from 'containers/pages/Search';
import PostDetail from 'containers/pages/PostDetail';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

    const location = useLocation()

    return (
<AnimatePresence>
<Routes location={location}> key={location.pathname}
    {/* Error display*/}
      <Route path="*" element={<Error404/>} /> 
     {/* Home display*/}
     <Route path="/" element={<Home/>} /> 
     <Route path="/catalogo" element={<Catalogo/>} /> 
     <Route path="/servicios" element={<Services/>} /> 
     <Route path="/nosotros" element={<About/>} /> 
     <Route path="/carreras" element={<Careers/>} /> 
     <Route path="/blog" element={<Blog/>} /> 
     <Route path="/blog/:slug" element={<PostDetail />} />
    <Route path="/s=:term" element={<Search />} />
    <Route path="/category/:slug" element={<Category />} />
     <Route path="/contacto" element={<Contact/>} /> 

     {/* Catalogo display*/}
     <Route path="/catalogo/ventas" element={<CVenta/>} /> 
     <Route path="/catalogo/piedecria" element={<Piedecria/>} /> 

     {/* Catalogo venta razas*/}
     <Route path="/catalogo/ventas/cuartodemilla" element={<Razacuartoventa/>} /> 

     {/* Catalogo venta id*/}
     <Route path="/catalogo/ventas/cuartodemilla/potro" element={<PotroVenta/>} /> 



  </Routes>

</AnimatePresence>


    );
}

export default AnimatedRoutes;
