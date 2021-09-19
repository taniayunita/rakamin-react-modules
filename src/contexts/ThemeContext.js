//file ini merupakan hands on state management menggunakan react context yaitu membuat aplikasi dapat di set menjadi darkmode
import React from 'react';

//membuat react context
export const ThemeContext = React.createContext({theme: 'light', 
//membuat function
onToggleDarkMode: () => {},
});

export class ThemeProvider extends React.Component{
    state = {theme: 'light'};

    // membuat function
    onToggleDarkMode = () => {
        //membuat kondisi awal
        const isLightMode = this.state.theme === 'light';
        // mengubah kondisi mode
        this.setState({theme: isLightMode ? 'dark' : 'light'});
    };

    render() {
        return(
            // memanggil react context didalam file jsx yaitu dengan .provider
            <ThemeContext.Provider value={{theme: this.state.theme,
            onToggleDarkMode: this.onToggleDarkMode,}}>
                {/* ini akan membuat dapat diakses oleh children */}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}