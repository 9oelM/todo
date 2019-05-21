import { combineReducers } from 'redux'

const initialState = {
    todos: [
        {
            date: new Date(),
            title: '제대',
            content: '제대하는 기분은 이루 말할 수 없을 것 같다.',
            due: new Date('Aug 15 2019 09:30:00 GMT+0900'),
            priority: 2,
            done: false,
        },
        {
            date: new Date(),
            title: 'Eat a fried chicken',
            content: 'Fried chicken is a gift from the heaven.',
            due: new Date('May 30 2019 10:00:00 GMT+0900'),
            priority: 1,
            done: false,
        },
        {
            date: new Date(),
            title: '훈련',
            content: '총 쏘고 닦고',
            due: new Date('May 23 2019 10:00:00 GMT+0900'),
            priority: 1,
            done: true,
        },
    ],
}

const todoReducer = (state = initialState, action) => {
    return state
}

export default combineReducers({
    todoReducer,
})
