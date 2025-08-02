// // src/components/ProductsPreview.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Productpreview.css';
// import { FaFlask, FaLeaf, FaFilter, FaLemon } from 'react-icons/fa';

// const ProductsPreview = () => {
//   const products = [
//     {
//       title: 'Caustic Soda Flakes',
//       description: 'Used in paper, textiles, detergents.',
//       icon: <FaFlask className="product-icon" />,
//       slug: 'caustic-soda-flakes',
//     },
//     {
//       title: 'Bleaching Earth',
//       description: 'Ideal for purifying oils and fats.',
//       icon: <FaLeaf className="product-icon" />,
//       slug: 'bleaching-earth',
//     },
//     {
//       title: 'Filter Flow Aid',
//       description: 'Helps improve filtration systems.',
//       icon: <FaFilter className="product-icon" />,
//       slug: 'filter-flow-aid',
//     },
//     {
//       title: 'Citric Acid',
//       description: 'Common in food & pharmaceuticals.',
//       icon: <FaLemon className="product-icon" />,
//       slug: 'citric-acid',
//     },
//   ];

//   return (
//     <section id="products" className="py-5 bg-light">
//       <div className="container">
//         <h2 className="text-center text-primary fw-bold mb-5">Our Products</h2>
//         <div className="row row-cols-1 row-cols-md-2 g-4">
//           {products.map((product, idx) => (
//             <div key={idx} className="col">
//               <div className="custom-card p-4 h-100">
//                 <div className="d-flex align-items-start">
//                   <div className="me-3">{product.icon}</div>
//                   <div>
//                     <h5 className="fw-bold">{product.title}</h5>
//                     <p className="text-muted mb-3">{product.description}</p>
//                     <a
//                       href={`/ourproducts/${product.slug}`}
//                       className="text-primary fw-medium text-decoration-none d-inline-flex align-items-center"
//                     >
//                       Know More <span className="ms-1">&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsPreview;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productpreview.css';
import { FaFlask, FaLeaf, FaFilter, FaLemon } from 'react-icons/fa';

const ProductsPreview = () => {
  const products = [
    {
      title: 'Caustic Soda Flakes',
      description:
        'Caustic Soda Flakes are widely used in the manufacturing of paper, textiles, soaps, and detergents. They are also essential for water treatment, petroleum refining, and alumina production.',
      icon: <FaFlask className="product-icon" />,
      slug: 'caustic-soda-flakes',
    },
    {
      title: 'Bleaching Earth',
      description:
        'Bleaching Earth is a highly adsorptive clay used for decolorizing oils and removing impurities. It is extensively used in edible oil refineries and in the purification of mineral oils and lubricants.',
      icon: <FaLeaf className="product-icon" />,
      slug: 'bleaching-earth',
    },
    {
      title: 'Filter Flow Aid',
      description:
        'Filter Flow Aid is used in industrial filtration systems to enhance the clarity and flow rate of liquids. It helps improve the efficiency and performance of filter presses and rotary vacuum filters.',
      icon: <FaFilter className="product-icon" />,
      slug: 'filter-flow-aid',
    },
    {
      title: 'Citric Acid',
      description:
        'Citric Acid is a natural preservative and flavoring agent widely used in food and beverage production. It also finds application in pharmaceuticals, cosmetics, and cleaning agents due to its acidic and chelating properties.',
      icon: <FaLemon className="product-icon" />,
      slug: 'citric-acid',
    },
  ];

  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">Our Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
          {products.map((product, idx) => (
            <div key={idx} className="col">
              <div className="custom-card p-4 h-100 text-center">
                <div className="d-flex flex-column align-items-center">
                  <div className="mb-3">{product.icon}</div>
                  <h5 className="fw-bold mb-2">{product.title}</h5>
                  <p className="text-muted mb-3">{product.description}</p>
                  <a
                    href={`/ourproducts/${product.slug}`}
                    className="text-primary fw-medium text-decoration-none d-inline-flex align-items-center"
                  >
                    Know More <span className="ms-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
