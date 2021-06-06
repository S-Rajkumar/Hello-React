import React, {useContext} from 'react';

const themes = {
    dark : {
        background : "#000000",
        foreground : "#eeeeee"
    },
    light : {
        background : "#ffffff",
        foreground : "#222222"
    }
}

const ThemeContext = React.createContext();

const UseContextDemo = () => {
    return (
        <div>
            <h1>useContext</h1>
            <ThemeContext.Provider value={themes.dark}>
                <UseContextDemoButton />
            </ThemeContext.Provider>
        </div>
    )
}

const UseContextDemoButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={{background: theme.background, color:theme.foreground}}>Hello React</button>
        </div>
    )
}

export {UseContextDemo};