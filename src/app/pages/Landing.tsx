import Divider from "../components/common/Divider";
import CollabeSection from "../components/section/CollabeSection";
import FeatureSection from "../components/section/FeatureSection";
import Footer from "../components/section/Footer";
import LandingSection from "../components/section/LandingSection";
import NewsSection from "../components/section/NewsSection";
import ProductSection from "../components/section/ProductSection";
import StudioSection from "../components/section/StudioSection";
import TextContentSection from "../components/section/TextContentSection";

const Landing = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingSection />
      <Divider className="w-full my-24" />
      <StudioSection />
      <Divider className="w-full my-24" />
      <FeatureSection />
      <Divider className="w-full mb-24" />
      <ProductSection />
      <Divider className="w-full mb-24" />
      <NewsSection />
      <Divider className="w-full" />
      <TextContentSection />
      <Divider className="w-full" />
      <CollabeSection />
      <Divider className="w-full" />
      <Footer />
    </main>
  );
};

export default Landing;
