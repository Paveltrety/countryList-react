let initialState = {
    country: [],
    infoCountry: [],
    regionList: [
        { id: 1, region: 'Africa', },
        { id: 2, region: 'Americas', },
        { id: 3, region: 'Asia', },
        { id: 4, region: 'Europe', },
        { id: 5, region: 'Oceania', },
    ],
    textSearch: '',
    activeCategory: 'Africa'
}

const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TEXT_SEARCH':
            return {
                ...state,
                textSearch: action.payload,
            }
        case 'ADD_COUNTRY':
            return {
                ...state,
                textSearch: '',
                country: action.payload,
                infoCountry: []
            }
        case 'ADD_ACTIVE_CATEGORY':
            return {
                ...state,
                activeCategory: action.payload
            }
        case 'ADD_INFO_COUNTRY':

            return {
                ...state,
                infoCountry: action.payload
            }
        default:
            return state
    }

}

export default dataReducer;
