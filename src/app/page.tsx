import Gallery from "@/components/landing/Gallery";
import Generate from "@/components/landing/Generate";
import { HomeCarousel } from "@/components/landing/HomeCarousel";


export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HomeCarousel/>
      <Generate />
      <Gallery />
    </div>
  );
}
