import Carousel from '@/app/ui/Carousel';
import Image from 'next/image';
import Statistics from '@/app/ui/Statistics';
import Services from '@/app/ui/Services';
import Applications from '@/app/ui/Applications';
import Products from '@/app/ui/Products';
import Footer from '@/app/ui/Footer';
import BannerMedio from '@/app/ui/BannerMedio';
import BannerFinal from '@/app/ui/BannerFinal';

export default function Home() {
  return (
    <main className="">
      <Carousel />
      <section className="p-8">
        <p className="text-lg leading-relaxed">
          En RIGARE nos dedicamos a ofrecer soluciones de bombeo y
          riego personalizadas para satisfacer las necesidades
          individuales de cada cliente. Nuestra experiencia y
          dedicación a la excelencia nos permiten proporcionar equipos
          y servicios confiables que mejoran tanto la eficiencia en el
          uso del agua y la energía como el rendimiento general de los
          sistemas.
        </p>
      </section>
      <Statistics />
      <Services />
      <BannerMedio />
      <Applications />
      <BannerFinal />
      <Products />
      <Footer />
    </main>
  );
}
