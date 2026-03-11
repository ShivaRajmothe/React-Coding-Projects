import { useEffect, useState } from "react";

const ProductCard = ({title,image}  ) =>
{
  
  return(
    <div className="product-card">
      <img src={image} alt={title} className="product-image"/>
      <span> {title}</span>
    </div>)
}

const PAGE_SIZE = 10;

const Pagination =() =>
{

const[products,setProducts] = useState([]);
const [currentPage,setCurrentPage] = useState(0);


const fetchData =async()=>
{
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
    console.log(json.products);
}

const totalPage = Math.ceil(products.length/PAGE_SIZE);
const noOfPage = totalPage /PAGE_SIZE;
const start = currentPage * PAGE_SIZE;
const end = start + PAGE_SIZE;


const handleChangeClick = (n) =>
{
    setCurrentPage(n);
}

const goToNextPage = () =>{
    setCurrentPage((prev) =>prev + 1);
}
const goToPreviousPage = () =>{
    setCurrentPage((prev) =>prev - 1);
}
useEffect(()=>
{
    fetchData();
},[])

    return !products.length ? <h1>Loading...</h1> : (
        <div>
            <h1>Pagination</h1>

            <div className="pagination-container">
                <button onClick={goToPreviousPage} disabled={currentPage ===0}>Previous</button>
                {
                    ([...Array(totalPage).keys()]).map((n) =>
                        <span className="pagination-item" onClick={()=>handleChangeClick(n)}> {n}</span>
                    )
                }
                <button onClick={goToNextPage} disabled={currentPage === totalPage - 1}>Next</button>
            </div>
            <div className="product-container">
              {
                products.slice(start,end) .map((r) =>  (
                   <ProductCard key={r.id} title={r.title} image={r.thumbnail}/>
                ))
              }
            </div>  
        </div>
    )
}

export default Pagination;