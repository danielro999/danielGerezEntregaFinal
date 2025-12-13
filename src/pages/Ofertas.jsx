import ProductList from "../components/ProductList";



export default function Ofertas(){
    return(
        <div className="container" > 
            <h1>Ofertas locas</h1>
            <ProductList category="men's clothing" />
        </div>
    )
}