// External
import { combineReducers } from 'redux'

// Internal
import C from '../actions/constants'

const getTime = (date = '') => new Date(date).getTime()

const initialState = {
    todos: [
        {
            id: 1,
            lastUpdated: getTime(),
            title: '제대',
            content: '제대하는 기분은 이루 말할 수 없을 것 같다.',
            due: getTime('Aug 15 2019 09:30:00 GMT+0900'),
            priority: 2,
            completed: false,
        },
        {
            id: 2,
            lastUpdated: getTime(),
            title: 'Eat a fried chicken',
            content: 'Fried chicken is a gift from the heaven.',
            due: getTime('May 30 2019 10:00:00 GMT+0900'),
            priority: 1,
            completed: true,
        },
        {
            id: 3,
            lastUpdated: getTime(),
            title: '훈련',
            content: '총 쏘고 닦고',
            due: getTime('May 23 2019 10:00:00 GMT+0900'),
            priority: 1,
            completed: true,
        },
    ],
}

// TODO: Add actions (types) and corresponding state changes
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.CHANGE_TODO:
            return {
                ...state,
                completed: !state.isDrawerOpen,
            }
        default:
            return state
    }
}

export default combineReducers({
    todoReducer,
})
