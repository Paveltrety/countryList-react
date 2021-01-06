import React from 'react';
import { useDispatch } from 'react-redux';


import { loadCountry } from '../redux/dataAction';

const RegionList = (props) => {
    const dispatch = useDispatch();
    let onLoadCountry = (region) => {
        dispatch(loadCountry(region))
    }

    return (
        <div className='regionList'>

            {
                props.regionList.map((item) => {
                    return (
                        <div className={item.region === props.activeCategory ? 'regionList__item__active' : 'regionList__item'} key={item.id} onClick={() => onLoadCountry(item.region)} >{item.region}</div>
                    )
                })
            }

        </div>
    )
}

export default RegionList;
