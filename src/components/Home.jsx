import ProductList from "./ProductList";

export default function Home(){
    return(
        <div className="container" > 
            <h1>Todos los productos</h1>
            <ProductList/>
        </div>
    )
}