
import classes from './Header.module.css'


import MealsImage from '../../assets/meals.jpg'
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return ( 
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="A Table full of crap" />
            </div>
        </Fragment>
    );
}
 
export default Header;