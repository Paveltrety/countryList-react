import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountry } from '../../redux/dataAction';

import Search from '../Search';
import RegionList from '../RegionList';
import Countrys from '../Countrys'


const ListCountryPage = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => ({
      textSearch: state.data.textSearch,
      regionList: state.data.regionList,
      country: state.data.country.filter(item => (
        item.name.toLowerCase().includes(state.data.textSearch.toLowerCase())
      )),
      activeCategory: state.data.activeCategory
  
    }))
  
    useEffect(() => {
      dispatch(loadCountry('Africa'))
    }, [dispatch]);

    return ( <>
        <Search textSearch={state.textSearch} />
        <RegionList regionList={state.regionList} activeCategory={state.activeCategory}/>
        <Countrys country={state.country} />
        </>
    )
}

export default ListCountryPage;
