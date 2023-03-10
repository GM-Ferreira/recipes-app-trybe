import React, { useContext } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import Categories from '../components/Categories';

function Drinks() {
  const { cocktailIngredients,
    error,
    searchInput } = useContext(AppContext);
  const twelve = 12;

  const alertWarning = () => {
    if (cocktailIngredients.length === 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  return (
    <div className="content-container">
      <Header />
      <Categories />
      <main className="main-content">
        {searchInput && cocktailIngredients.length !== 0 ? null : <Recipes />}
        {error && alertWarning()}
        {cocktailIngredients ? cocktailIngredients
          .slice(0, twelve)
          .map((drink, index) => (
            <Card
              link={ `/drinks/${drink.isDrink}` }
              key={ drink.idDrink }
              name={ drink.strDrink }
              src={ drink.strDrinkThumb }
              index={ index }
            />
          )) : null}
      </main>
      <Footer />
    </div>
  );
}

export default Drinks;
