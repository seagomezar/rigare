import Carousel from "@/app/ui/Carousel";
import Image from "next/image";
import Statistics from "@/app/ui/Statistics";
import Services from "@/app/ui/Services";
import Applications from "@/app/ui/Applications";
import Products from "@/app/ui/Products";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main className="">
      <Carousel />
      <section className="p-8">
        <h1 className="text-green-600 text-2xl mb-4">Rigare es...</h1>
        <p className="text-lg leading-relaxed">
          En RIGARE nos dedicamos a ofrecer soluciones de bombeo y riego personalizadas para satisfacer
          las necesidades individuales de cada cliente. Nuestra experiencia y dedicación a la excelencia nos
          permiten proporcionar equipos y servicios confiables que mejoran tanto la eficiencia en el uso
          del agua y la energía como el rendimiento general de los sistemas. Desde la optimización de
          procesos industriales hasta el aumento de la productividad en la agricultura, así como la mejora
          en la calidad del suministro de agua en entornos comerciales y residenciales, nuestros sistemas
          están diseñados para brindar resultados sobresalientes en cuatro unidades estratégicas de
          negocios.
        </p>
      </section>
      <Statistics />
      <Services />
      <Statistics />
      <Applications />
      <Statistics />
      <Products />
      <Footer />
    </main >
  );
}
