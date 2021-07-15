import React from 'react';
import classes from './Searchbar.module.css';

const Searchbar = () => {
    return <div className={classes.Searchbar}>
        <p>Search</p>
        <input type="text" placeholder="Currency name"/>
    </div>;
}


export default Searchbar;