import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';


function App() {
  const [showCart, setShowCart] = useState(false)
  const dummyItems = [
    {
        dishName:'Sushi',
        description:'Finest Fish and Vegies',
        amount:'$29.99',
        id: Math.random().toString()
    },
    {
        dishName:'Dosa',
        description:'Dharwad Speciality',
        amount:'$10.99',
        id: Math.random().toString()
    },
    {
        dishName:'Idli',
        description:'Begluru Speciality',
        amount:'$9.99',
        id: Math.random().toString()
    },
    {
        dishName:'Biriyani',
        description:'BVB Speciality',
        amount:'$15.99',
        id: Math.random().toString()
    }
   
]
const doThis = ()=>{
  
    setShowCart(true)

}
const closeTheModal = ()=>{
  setShowCart(false)

}
  return (
    <Fragment>
      {showCart && <Cart CloseCart = {closeTheModal}></Cart>}
      <Header onCartClick={doThis} />
      <MealsSummary/>
      <AvailableMeals Items = {dummyItems}/>
      
    </Fragment>
  );
}

export default App;