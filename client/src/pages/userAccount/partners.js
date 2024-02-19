import React from "react";
import Navbar from "../../components/Dashboard/navbar";
import Sidebar from "../../components/Dashboard/sidebar";

// logos
import kidangaLogo from "../../assets/kidanga.png";
import bauxiteLogo from "../../assets/bauxite.png";
import ecoImpactLogo from "../../assets/ecoaimpact.png";
import metalBankLogo from "../../assets/metalbank.png";
import swiftMetalsLogo from "../../assets/swiftmetal.png";
import translogisticsLogo from "../../assets/Translogistics.png";
import aeroMetalsLogo from "../../assets/AeroMetals.png";
import techAlloyLogo from "../../assets/TechAlloy.png";
import ecoALULogo from "../../assets/Ecoalu.png";
import Footer from "../../components/footer";


const partners = [
  {
    name: "Kidanga",
    logo: kidangaLogo,
    description: "A collaborator in creating efficient distribution networks and executing strategic marketing initiatives.",
  },
  {
    name: "Bauxite LTD",
    logo: bauxiteLogo,
    description: "Specializing in high-quality bauxite extraction.",
  },
  {
    name: "EcoImpact",
    logo: ecoImpactLogo,
    description:
      "Partnering to integrate best environmental practices into our day-to-day operations.",
  },
  {
    name: "MetalBank",
    logo: metalBankLogo,
    description: "Partnering on initiatives that optimize product distribution and enhance our brand presence.",
  },
  {
    name: "Swift Metals",
    logo: swiftMetalsLogo,
    description: "A collaborator in creating efficient distribution networks and executing strategic marketing initiatives.",
  },
  {
    name: "Translogistics",
    logo: translogisticsLogo,
    description: "Expanding our market reach and visibility through strategic marketing and distribution.",
  },
  {
    name: "Aero Metals",
    logo: aeroMetalsLogo,
    description: "Collaborating on specialized Aluminium products for the aerospace industry.",
  },
  {
    name: "Tech Alloy",
    logo: techAlloyLogo,
    description: "Ensuring our commitment to quality standards and certification processes.",
  },
  {
    name: "Eco ALU",
    logo: ecoALULogo,
    description: "Providing quality Aluminium products for construction projects, contributing to infrastructure development.",
  },
];

const Partners = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Sidebar covering 1/5 of the width */}
        <Sidebar />

        {/* Main content covering 4/5 of the width */}
        <div className="md:flex md:flex-col md:w-4/5 p-2">
          <div className="bg-gray-200 min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              Our Trusted Partners
            </h1>
            <p className="font-light text-lg">
              Welcome to Alpha Trade's Partnerships Hub. Our journey
              towards excellence and sustainability is enriched by the
              collaborative spirit of our esteemed partners. Together, we're
              shaping the future of the Aluminium industry. Explore the
              companies and organizations that stand beside us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h2 className="text-xl font-bold mb-2 text-center">
                    {partner.name}
                  </h2>
                  <p className="text-gray-700 text-center text-sm">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-lg font-thin bg-blue-200 p-4 rounded-sm">
              <p>
                At Alpha Trade, our success is deeply intertwined with the
                collaborative efforts of our partners. Together, we're not just
                shaping the future of commodities; we're redefining what's
                possible. To explore partnership opportunities with us, reach
                out to our partnership team alphatrade@partners.com. Thank you
                for being an integral part of our journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Partners;
