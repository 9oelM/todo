import React from 'react'

const Buttonize = ({ handleClick, children }) => (
    <div onClick={handleClick}>{children}</div>
)

const Add = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
)
const Calendar = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
)
const ArrowBack = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
)

const Priority = ({ level }) => {
    const combinations = [
        {
            level: 1,
            color: '#ff7070', // red
        },
        {
            level: 2,
            color: '#353535', // black
        },
        {
            level: 3,
            color: '#ffffff', // white
        },
    ]

    const Icon = ({ color }) => (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="19" r="2" />
            <path d="M10 3h4v12h-4z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    )

    const combi = combinations.find(combi => combi.level == level)
    if (!combi) {
        return <Icon color="#353535" /> // black
    }
    return <Icon color={combi.color} />
}
export { Add, Calendar, Priority, ArrowBack }
