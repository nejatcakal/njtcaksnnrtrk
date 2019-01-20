import { DELETE_TOUR, ADD_TOUR, ADD_PRICE } from '../actions/types';

const initState = {
    tour:{
        tourName:'',
        tourStartAt:'',
        tourMaxPeople:'',
        tourCode:'',
        tourPrice:[{
            startDate:'',
            endDate:'',
            price:'',
            priceCode:''
        }],
        tourVideoLink:'',
        tourAddSuccess:false
    },

    theTours:[
        {
            tourName:'Marmaris-Dalaman',
            tourStartAt: '12.30',
            tourMaxPeople:'250',
            tourCode:'Marmaris-Dalaman-2019-1-1420-23-07',
            tourPrice:[
                {
                startDate:'5 Mayıs',
                endDate:'5 Haziran',
                price:'150',
                priceCode:'MD-P1'
                },
                {
                    startDate:'6 Hairan',
                    endDate:'6 Temmuz',
                    price:'250',
                    priceCode:'MD-P2'
                }
            ],
            tourVideoLink:'',
            tourFinishesAt: '14.30',
            tourRoute: 'marmaris-içmeler-kıyıboyu-dalaman',
            tourAddSuccess:true

        },
        {
            tourName:'Bodrum-Akyaka',
            tourStartAt: '13.00',
            tourMaxPeople:'50',
            tourCode:'Bodrum-Akyaka-2019-1-1420-23-08',
            tourPrice:[
                {
                    startDate:'5 Mayıs',
                    endDate:'5 Haziran',
                    price:'350',
                    priceCode:'BA-P1'
                }
            ],
            tourVideoLink:'',
            tourFinishesAt: '17.30',
            tourRoute: 'Bodrum-yatağan-akyaka',
            tourAddSuccess:true

        },
        {
            tourName:'Marmaris-Knidos',
            tourStartAt: '10.30',
            tourMaxPeople:'200',
            tourCode:'Marmaris-Knidos-2019-1-1420-23-09',
            tourPrice:[
                {
                startDate:'5 Mayıs',
                endDate:'5 Haziran',
                price:'550',
                priceCode:'MK-P1'}
            ],
            tourVideoLink:'',
            tourFinishesAt: '14.30',
            tourRoute: 'marmaris-içmeler-dalaman-datça-knidos',
            tourAddSuccess:true

        },
        {
            tourName:'Van-Mugla',
            tourStartAt: '08.30',
            tourMaxPeople:'300',
            tourCode:'Van-Mugla-2019-1-1420-23-10',
            tourPrice:[
                {
                startDate:'5 Mayıs',
                endDate:'5 Haziran',
                price:'750',
                priceCode:'VM-P1'}
            ],
            tourVideoLink:'',
            tourFinishesAt: '18.30',
            tourRoute: 'Van-Tatvan-bitlis-Muğla',
            tourAddSuccess:true

        },
        {
            tourName:'Van-Bitlis',
            tourStartAt: '11.30',
            tourMaxPeople:'300',
            tourCode:'Van-Bitlis-2019-1-1420-23-11',
            tourPrice:[
                {
                startDate:'5 Mayıs',
                endDate:'5 Haziran',
                price:'650',
                priceCode:'VB-P1'}
            ],
            tourVideoLink:'',
            tourFinishesAt: '20.30',
            tourRoute: 'Van-gevaş-tatvan-bitlis',
            tourAddSuccess:true

        }
    ]
    
  
}

const tour = ( state = initState, action ) => {
    switch( action.type ){
        case ADD_TOUR:
            return {
                ...state,
                tour:action.tour,
                theTours:[...state.theTours, action.tour]
             
            };
        case DELETE_TOUR:
            return {
                ...state,
                tourCode: action.tour.tourCode
            };
        case ADD_PRICE:
            return {
                ...state,
               theTours:action.tours
            };
        default:
            return state;
    }
}

export default tour;