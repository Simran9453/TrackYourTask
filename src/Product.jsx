import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}) {
    let oldPrices = ["12000","11000","29000","5900"];
    let newPrices = ["1900","2300","6700","5000"];
    let descriptions = [
  "Wireless ergonomic mouse.",
  "Stylus for drawing and notes.",
  "RGB gaming keyboard.",
  "Wireless noise-canceling headphones."
];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{descriptions[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;