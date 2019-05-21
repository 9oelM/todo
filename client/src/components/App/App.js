// External
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

// Internal
import TodoList from '../TodoList/TodoList'
import './App.scss'

const App = () => {
    return (
        <>
            <CssBaseline />
            <div className="App">
                <Grid
                    container
                    spacing={24}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <TodoList />
                </Grid>
            </div>
        </>
    )
}
export default App
