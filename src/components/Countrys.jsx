import React from 'react';
import { NavLink } from 'react-router-dom';

const Countrys = (props) => {
    return (
        <div className='country'>
            {
                props.country.map(item => {
                    return (
                        <NavLink to={`/info/${item.alpha3Code}`}>
                            <div className='country__item' key={item.name} >
                                <img src={item.flag} alt={item.name} />
                                <h4>Name: {item.name}</h4>
                                <h4>Capital: {item.capital}</h4>
                                <h4>Population: {item.population} Ppl</h4>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Countrys;
