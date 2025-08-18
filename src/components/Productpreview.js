import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPreview = () => {
  const products = [
    {
      title: 'Caustic Soda Flakes',
      description:
        'Caustic Soda Flakes are widely used in the manufacturing of paper, textiles, soaps and detergents. They are also essential for water treatment, petroleum refining and alumina production.',
      image: '/images/caustic-soda.png', // 🖼️ Replace with your actual image path
     // slug: 'caustic-soda-flakes',
     slug: 'caustic-soda',

    },
    {
      title: 'Bleaching Earth',
      description:
        'Bleaching Earth is a highly adsorptive clay used for decolorizing oils and removing impurities. It is extensively used in edible oil refineries and in the purification of mineral oils and lubricants.',
      image: '/images/bleaching-earth.png',
      slug: 'bleaching-earth',
    },
    {
      title: 'Filter Flow Aid',
      description:
        'Filter Flow Aid is used in industrial filtration systems to enhance the clarity and flow rate of liquids. It helps improve the efficiency and performance of filter presses and rotary vacuum filters.',
      image: '/images/filter-flow.png',
      slug: 'filter-flow-aid',
    },
    {
      title: 'Citric Acid',
      description:
        'Citric Acid is a natural preservative and flavoring agent widely used in food and beverage production. It also finds application in pharmaceuticals, cosmetics and cleaning agents due to its acidic and chelating properties.',
      image: '/images/citric-acid.png',
      slug: 'citric-acid',
    },
  ];

  return (
    <>
      {/* ✅ Embedded CSS */}
      <style>{`
        .custom-card {
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          transition: all 0.3s ease;
          background-color: #fff;
        }

        .custom-card:hover {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .product-image {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
      `}</style>

      <section id="products" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#3366cc' }}>
            Our Products
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {products.map((product, idx) => (
              <div key={idx} className="col">
                <div className="custom-card p-4 h-100 text-center">
                  <div className="d-flex flex-column align-items-center">
                    {/* 🖼️ Product Image */}
                    <div className="mb-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                      />
                    </div>
                    <h5 className="fw-bold mb-2">{product.title}</h5>
                    <p className="text-muted mb-3">{product.description}</p>
                    <a
                      href={`/our-products/${product.slug}`}
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
    </>
  );
};

export default ProductsPreview;

