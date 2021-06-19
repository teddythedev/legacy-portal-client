import RosterService from '../services/roster';

export const mountPoint = 'roster';

// Actions
export const actions = {
    LOADING_ROSTER: 'roster/LOADING_ROSTER',
    SET_ROSTER: 'roster/SET_ROSTER'
}

const initialState = {
    officerList: {
        officers: [],
        isLoading: true
    }
};

// Creators
export const getRosterOfficers = () => {
    return async dispatch => {
        try {
            dispatch({
                type: actions.LOADING_ROSTER
            });

            const officers = (await RosterService.getUsers()).data;

            console.log('officers', officers);

            dispatch({
                type: actions.SET_ROSTER,
                officers
            });
        } catch (error) {
            console.log('error', error);
            dispatch({
                type: actions.SET_ROSTER,
                officers: []
            })
        }
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_ROSTER:
            return {
                ...state,
                officerList: initialState.officerList
            }
        case actions.SET_ROSTER:
            return {
                ...state,
                officerList: {
                    officers: action.officers,
                    isLoading: false
                }
            }
        default:
            return state;
    }
}