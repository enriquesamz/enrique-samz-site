import Image from "next/image";
import { siteConfig } from "@/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.jobTitle,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.image}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trivandrum",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Digital Marketing",
        "SEO",
        "Content Creation",
        "Social Media Marketing",
        "Personal Branding",
        "Video Editing",
      ],
      sameAs: siteConfig.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Image
        src={siteConfig.image}
        alt="Enrique Samz, digital marketing specialist and content creator from Trivandrum, Kerala, India"
        width={400}
        height={400}
        priority
        className="mb-8 h-40 w-40 rounded-full object-cover"
      />
      <h1 className="text-5xl font-bold">Enrique Samz</h1>
      <p className="mt-4 text-xl text-gray-400">
        Digital Marketing Specialist &amp; Content Creator
      </p>
    </main>
  );
}