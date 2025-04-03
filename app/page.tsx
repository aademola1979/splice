import Header from "@/app/partial/landing/Header";
import HeroNavBar from "./partial/landing/HeroNavBar";
import siteMetadata from "@/lib/utility/siteMetadata";
import WhatWeDo from "./partial/landing/WhatWeDo";
import HowItWorks from "./partial/landing/HowItWorks";
import Services from "./partial/landing/Services";
import ToLet from "./partial/landing/ToLet";
import Testimonials from "./partial/landing/Testimonials";
import CallToAction from "@/app/partial/landing/CallToAction";
import FrequentlyAskedQuestions from "./partial/landing/FrequentlyAskedQuestions";
import HeroOne from "./partial/landing/HeroOne";
import HeroTwo from "./partial/landing/HeroTwo";
import CopyRight from "@/app/partial/CopyRight";






export default function Home() {

  

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": siteMetadata.title,
    "description": siteMetadata.description,
    "image": siteMetadata.siteUrl + siteMetadata.socialBanner,
    "author": [{
      "@type": "Person",
      "name": siteMetadata.author,
      "url": siteMetadata.siteUrl
    }]

  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="landing-page w-full grid min-h-screen font-[family-name:var(--font-geist-sans)]">
        <div className="w-full h-full grid px-4 md:px-20 bg-[rgba(0,0,180,0.4)]">
          <Header />
          <div className="bg-slate-300 rounded-[1.5rem] p-2  flex flex-col w-full h-full">
            <HeroOne />
            <HeroNavBar />
            <HeroTwo />
            <WhatWeDo />
            <Services />
            <HowItWorks />
            <ToLet />
            <Testimonials />
            <FrequentlyAskedQuestions />
            <CallToAction />
          </div>
          <CopyRight className="text-gray-300"/>
        </div>
      </main>
    </>
  );
}
