import React from 'react'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { Button } from '@welcome-ui/button'

const theme = createTheme()

const App = () => {
    return (
        <WuiProvider theme={theme}>
            <Button variant="secondary">Welcome!</Button>
        </WuiProvider>
    )
}

export default App
