import axios from "axios";

export const AddTextSearch = (newText) => ({
    type: 'ADD_TEXT_SEARCH', payload: newText
})

export const addCountry = (data) => ({
    type: 'ADD_COUNTRY', payload: data
})

export const addInfoCountry = (data) => ({
    type: 'ADD_INFO_COUNTRY', payload: data
})

export const addActiveCategory = (category) => ({
    type: 'ADD_ACTIVE_CATEGORY', payload: category
})

export const loadCountry = (nameCategory) => (dispatch) => {
    dispatch(addActiveCategory(nameCategory))
    axios.get(`https://restcountries.eu/rest/v2/region/${nameCategory}`)
        .then(({ data }) => {
            dispatch(addCountry(data))
        })
}

export const loadInfoCountry = (codeCountry) => (dispatch) => {
    axios.get(`https://restcountries.eu/rest/v2/alpha/${codeCountry}`)
        .then(({ data }) => {
            dispatch(addInfoCountry(data))
        })
}