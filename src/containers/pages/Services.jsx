import React, { useEffect } from "react";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/services/header";
import ServicesList from "components/services/ServicesList";
import vender from "assets/img/vender.png";
import comprar from "assets/img/comprar.png";

const posts_maquila = [
  {
    title: "Maquila de yeguas",
    img: vender,
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Ofrecemos servicios de maquila de yeguas con sementales de alta calidad. Nuestros sementales son cuidadosamente seleccionados por su conformación, temperamento y genética excepcionales.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Servicios de sementales",
    img: comprar,
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Proporcionamos servicios de sementales para mejorar la calidad y la genética de su ganado. Nuestros sementales son de razas reconocidas y cuentan con un historial comprobado de producir crías excepcionales.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <ServicesList posts={posts_maquila} section_title={"Servicios de Maquila de Caballos"} />
      </div>
      <Footer />
    </Layout>
  );
}

export default Services;
