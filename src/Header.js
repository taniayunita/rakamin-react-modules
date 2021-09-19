//untuk toggle butoon mode dark light

import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';

//membuat function

function Header(){
    return(
        <ThemeContext.Consumer>
            {value => {
                //mereturn button
                return <div id='header' style={{backgroundColor: value.theme === 'light' ? 'red' : 'blue'}}>
                        <button onClick={value.onToggleDarkMode}>Change Mode</button>
                        </div>
            }}
        </ThemeContext.Consumer>
    );
}

export default Header;