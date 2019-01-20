import {  ADD_AGENCY } from '../actions/types';

const initState = {
    agencies:[
        { 
            agencyName:'Agency-1',
            agencyCode:'AGN-1',
            agencySituation:'Aktif',
            agencyTours:[
                {
                    tourCode:'Marmaris-Dalaman-2019-1-1420-23-07',
                    tourSold:[
                        {
                            numOfTicket:'20',
                            soldDate:'',
                            priceCode:'MD-P1',
                            price:'150'
                        },
                        {
                            numOfTicket:'15',
                            soldDate:'',
                            priceCode:'MD-P2',
                            price:'250'
                        }
                    ]
                },
                {
                    tourCode:'Bodrum-Akyaka-2019-1-1420-23-08',
                    tourSold:[
                        {
                            numOfTicket:'22',
                            soldDate:'',
                            priceCode:'BA-P1',
                            price:'350'
                        }
                    ]
                }
            ]

        },
        
        {
            agencyName:'Agency-2',
            agencyCode:'AGN-2',
            agencySituation:'Pasif',
            agencyTours:[
                {
                    tourCode:'Marmaris-Dalaman-2019-1-1420-23-07',
                    tourSold:[
                        {
                            numOfTicket:'30',
                            soldDate:'',
                            priceCode:'MD-P1',
                            price:'150'
                        }
                    ]
                },
                {
                    tourCode:'Van-Mugla-2019-1-1420-23-10',
                    tourSold:[
                        {
                            numOfTicket:'50',
                            soldDate:'',
                            priceCode:'VM-P1',
                            price:'750'
                        }
                    ]
                }
            ]
        }
    ]
}


const agency = ( state = initState, action ) => {
    switch( action.type ){
        case ADD_AGENCY:
            return {
                ...state,
               agencies:[...state.agencies, action.agencyToAdd]
            };
        default:
            return state;
    }
}

export default agency;