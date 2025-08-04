// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Caustic = () => {
//   return (
//     <div className="container py-5">
//       <div className="card shadow-lg border-0">
//         <div className="card-body p-5">
//           <h2 className="mb-4 text-primary border-bottom pb-2">Caustic Soda Flakes</h2>

//           <section className="mb-4">
//             <h5 className="text-secondary">📌 Description</h5>
//             <p className="text-muted">
//               Caustic Soda Flakes (Sodium Hydroxide) are widely used in industries like textiles, paper, detergents, and chemical processing.
//             </p>
//           </section>

//           <section className="mb-4">
//             <h5 className="text-secondary">📄 Specifications / MSDS</h5>
//             <ul className="list-group list-group-flush mb-2">
//               <li className="list-group-item">Purity: ≥ 99%</li>
//               <li className="list-group-item">Appearance: White flakes</li>
//               <li className="list-group-item">CAS No: 1310-73-2</li>
//               <li className="list-group-item">HS Code: 2815.11</li>
//             </ul>
//           </section>

//           <section className="mb-4">
//             <h5 className="text-secondary">🛠️ Applications</h5>
//             <ul className="list-group list-group-flush mb-2">
//               <li className="list-group-item">Textile processing</li>
//               <li className="list-group-item">Soap and detergent manufacturing</li>
//               <li className="list-group-item">Water treatment</li>
//               <li className="list-group-item">Paper and pulp industry</li>
//             </ul>
//           </section>

//           <section className="mb-4">
//             <h5 className="text-secondary">📦 Packaging & Delivery</h5>
//             <p className="text-muted">
//               25 kg PE-lined PP bags / 50 kg drums. Prompt delivery within 1–2 weeks.
//             </p>
//           </section>

//           <section className="mb-4">
//             <h5 className="text-secondary">✅ Quality & Compliance</h5>
//             <p className="text-muted">
//               Manufactured under ISO-certified plants. Complies with REACH and SGS standards.
//             </p>
//           </section>

//           <div className="text-center">
//             <a href="/contact" className="btn btn-lg btn-primary px-5">
//               Request a Quote
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Caustic;

import React from 'react';
import Seo from "../../components/seo";
import SolutionsTemplate from "../../components/solutionTemplate";
import { CausticSodaFlakesMeta } from "../../data/metaData";

// ✅ Placeholder image URLs (no need to import local images)
const placeholderBanner = "https://via.placeholder.com/1200x400?text=Caustic+Soda+Flakes+Banner";
const placeholderMain = "https://via.placeholder.com/590x450?text=Main+Image";
const placeholderVertical1 = "https://via.placeholder.com/400x300?text=Image+1";
const placeholderVertical2 = "https://via.placeholder.com/400x300?text=Image+2";
const placeholderVertical3 = "https://via.placeholder.com/400x300?text=Image+3";
const placeholderService = "https://via.placeholder.com/100x100?text=Icon";

const Caustic = () => {
  return (
    <>
      <Seo meta={CausticSodaFlakesMeta} />
      <SolutionsTemplate
        productName="Caustic Soda Flakes"
        bannerSection={{
          title: "Caustic Soda Flakes",
          subtitle: "High-purity Sodium Hydroxide used in detergent, textile, and chemical industries.",
          img: placeholderBanner,
        }}
        aboutSection={{
          img: placeholderMain,
          desc: "Caustic Soda Flakes (NaOH) are essential in chemical, textile, detergent, and pulp industries due to their strong alkalinity and reactivity.",
          title: "Caustic Soda Applications",
          bullets: [
            "Used in soap & detergent manufacturing",
            "Water purification and treatment",
            "Textile dyeing and scouring",
            "Pulp and paper processing",
          ],
        }}
        verticalImages={[placeholderVertical1, placeholderVertical2, placeholderVertical3]}
        specification={[
          { label: "Purity", value: "≥ 99%" },
          { label: "Appearance", value: "White Flakes" },
          { label: "CAS No.", value: "1310-73-2" },
          { label: "HS Code", value: "2815.11" },
        ]}
        application={[
          "Textile Processing",
          "Soap and Detergent Manufacturing",
          "Water Treatment Plants",
          "Pulp and Paper Industry",
        ]}
        packaging="25 kg PE-lined PP bags / 50 kg drums. Prompt global delivery in 1–2 weeks."
        quality="Produced in ISO-certified facilities. Compliant with REACH and SGS standards."
        otherServices={[
          {
            img: placeholderService,
            title: "Custom Formulations",
            desc: "Tailored chemical concentrations based on industry needs.",
          },
          {
            img: placeholderService,
            title: "Technical Support",
            desc: "Expert advice for optimal chemical use and handling.",
          },
          {
            img: placeholderService,
            title: "Bulk Logistics",
            desc: "Secure and timely delivery across global ports.",
          },
        ]}
      />
    </>
  );
};

export default Caustic;
