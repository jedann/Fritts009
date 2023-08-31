import React from "react";
import "./Products.css";


function Products() {
  return (
    <div className="products-container">
      <div className="product-box">
        <img className="product-image" src="https://5.imimg.com/data5/NS/KV/MY-7693069/on-grid-solar-system-500x500.jpg" alt="Ongrid systems" />
        <h2 className="product-heading">ONGRID SYSTEMS</h2>
        <p className="product-description">
          Ongrid systems are connected to the utility grid and feed excess power
          back into the grid. They are ideal for homes and businesses with a
          reliable grid connection.
        </p>
        {/* <ul className="product-benefits">
          <li>Reduce your energy bills</li>
          <li>Get paid for excess power</li>
          <li>Low maintenance</li>
        </ul> */}
      </div>
      <div className="product-box">
        <img className="product-image" src="https://www.researchgate.net/publication/345187063/figure/fig2/AS:975046394793994@1609480584884/Standalone-off-grid-PV-system.png" alt="Offgrid systems" />
        <h2 className="product-heading">OFFGRID SYSTEMS</h2>
        <p className="product-description">
          Offgrid systems are not connected to the utility grid and store excess
          power in batteries for later use. They are ideal for homes and
          businesses in remote locations without a reliable grid connection.
        </p>
        {/* <ul className="product-benefits">
          <li>No more power outages</li>
          <li>Increased self-sufficiency</li>
          <li>Environmentally friendly</li>
        </ul> */}
      </div>
      <div className="product-box">
        <img className="product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LecgDTnAb_L-bdKidmw3HptlaQBUVI9qEQ&usqp=CAU" alt="Hybrid systems" />
        <h2 className="product-heading">HYBRID SYSTEMS</h2>
        <p className="product-description">
          Hybrid systems are a combination of ongrid and offgrid systems, and
          can switch between the two modes automatically. They are ideal for
          homes and businesses that require both grid-connected and offgrid power.
        </p>
        {/* <ul className="product-benefits">
          <li>Maximize your energy independence</li>
          <li>Flexibility and control</li>
          <li>Lower environmental impact</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Products;