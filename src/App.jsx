import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; // Change this to reference 'style.css'

const App = () => {
  const categories = [
    { title: "Clothes", image: "box1_image.jpg" },
    { title: "Health & Personal Care", image: "box2_image.jpg" },
    { title: "Furniture", image: "box3_image.jpg" },
    { title: "Electronics", image: "box4_image.jpg" },
    { title: "Beauty Picks", image: "box5_image.jpg" },
    { title: "Pet Care", image: "box6_image.jpg" },
    { title: "Arrival & Toys", image: "box7_image.jpg" },
    { title: "Fashion", image: "box8_image.jpg" },
  ];

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver To</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">Nepal</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input placeholder="Search Cloud Bazzar" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-signin border">
            <p>
              <span>Hello, sign in</span>
            </p>
            <p className="nav-sec">Account & List</p>
          </div>
          <div className="nav-returns border">
            <p>
              <span>Returns</span>
            </p>
            <p className="nav-sec">& Orders</p>
          </div>
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </div>
        </div>
        <div className="panel">
          <div className="panel-all">
            <i className="fa-solid fa-bars"></i> <option>All</option>
          </div>
          <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
          </div>
          <div className="panel-deals">Shop Deals & Electronics</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-msg">
          <p>
            You are On CloudBazzar.com. You can also shop on Cloud Bazzar for millions of
            products with fast local delivery.{" "}
          </p>
        </div>
      </div>

      {/* Shop Section */}
      <div className="shop-section">
        {categories.map((category, index) => (
          <div key={index} className={`box box${index + 1}`}>
            <div className="box-content">
              <h2>{category.title}</h2>
              <div
                className="box-img"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <p>See more</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <div className="foot-panel1">Back To Top</div>
        <div className="foot-panel2">
          {[1, 2, 3, 4].map((_, index) => (
            <ul key={index}>
              <p>Get to Know Us</p>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">About Cloud Bazzar</a>
              <a href="#">Investor Relations</a>
              <a href="#">Cloud Bazzar Devices</a>
              <a href="#">Cloud Bazzar Science</a>
            </ul>
          ))}
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;