import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { loadInfoCountry } from '../../redux/dataAction'

const InfoCountryPage = () => {
    const { codeCountry } = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => ({
        name: state.data.infoCountry.name,
        flag: state.data.infoCountry.flag,
        capital: state.data.infoCountry.capital,
        region: state.data.infoCountry.region,
        population: state.data.infoCountry.population,
        area: state.data.infoCountry.area,
    }))
    useEffect(() => {
        dispatch(loadInfoCountry(codeCountry))
    }, [dispatch, codeCountry])

    return (
        <div className='infoCountry'>
            <img src={state.flag} alt={state.name}/>
            <div className='infoCountry__text'>
                <p>Name: {state.name}</p>
                <p>Capital: {state.capital} </p>
                <p>Region: {state.region} </p>
                <p>Population: {state.population} Ppl</p>
                <p>Area: {state.area} k/m <sup>2</sup></p>

            </div>
        </div>
    )
}

export default InfoCountryPage;
