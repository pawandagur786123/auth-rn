import credentials from '../credentials.json';
import DashBoardData from '../dashboard.json';

const initialState = {
    dashboard: DashBoardData,
    isFetching: false,
    fetch_completed: true,
    error: false,
    login:credentials,

}

export default function reducer(state = initialState, action) {
            return {...state}  
}

