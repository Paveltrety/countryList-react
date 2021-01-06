import React, { createRef } from 'react';
import { useDispatch } from 'react-redux';

import { AddTextSearch } from '../redux/dataAction';

const Search = (props) => {
    const dispatch = useDispatch();
    const linkText = createRef();

    let changeText = () => {
        let newText = linkText.current.value;
        dispatch(AddTextSearch(newText))
    }

    return (
        <div className='search'>
            <input className='search__input' type='search' placeholder='Enter the country name' ref={linkText} onChange={changeText} value={props.textSearch} />
        </div>
    )
}

export default Search;
