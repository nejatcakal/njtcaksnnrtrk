import { DELETE_TOUR, ADD_TOUR, ADD_PRICE ,ADD_AGENCY} from './types';

export const addTour = ( tour ) => {
    return {
        type:ADD_TOUR,
        tour:tour
    }
}

export const deleteTour = () => {
    return {
        type:DELETE_TOUR
    }
}

export const addPrice = ( tours ) => {
    return {
        type:ADD_PRICE,
        tours:tours
    }
}

/* 
    Agency actions
*/

export const addAgency = ( agencyObj ) => {
    return {
        type:ADD_AGENCY,
        agencyToAdd: agencyObj
    }
}