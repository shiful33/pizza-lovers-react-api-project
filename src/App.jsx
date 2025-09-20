
import { Suspense, useEffect, useState } from 'react';
import './App.css'
import Products from './Components/Products/Products'


/* const productsPromise = fetch("https://world.openfoodfacts.org/facets/categories/pizzas.json")
.then(res => res.json()); */

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "../public/pizzas.json")
    .then((res) => res.json())
    .then((data) => setPizzas(data));
  }, []);


  return (
    <>
      <div>
        <h1 className='text-center text-4xl font-bold text-[#00a308] my-[80px] font-[Merriweather]'>🍕 Pizza Menu</h1>

        <div className='m-[20px] md:m-0 md:grid grid-cols-3 gap-5'>
           {
            pizzas.map((pizza) => (
              <div key={pizza.id} className='border border-1-[#FFFF00] rounded-[10px] p-[10px] mb-4 md:mb-0'>
                <img src={pizza.image} alt={pizzas.name} className='w-[100%] rounded'/>
                <h3 className='text-2xl font-semibold font-[Merriweather] mt-2'>{pizza.name}</h3>
                <p className='text-xl font-medium font-[Merriweather] mb-2'>Category: {pizza.category}</p>
                <p className='text-lg font-medium'>Country: {pizza.country}</p>
                <p className='text-lg font-medium'>Price: ${pizza.price}</p>
              </div>
            ))}
        </div>
      </div>
      

      <Suspense fallback={<p>Pizza Lovers Loading...</p>}>
      {/* <Products productsPromise={productsPromise}></Products> */}
      </Suspense>
      
    </>
  );
}

export default App
