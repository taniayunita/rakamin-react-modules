import React from 'react';
//STATE MANAGEMENT

//Langkah 1 membuat context disini yaituaddname
export const AddNameContext = React.createContext({
    //isi state/data
    namas: [],
    
    //membuat function
    addNama: () => {},

});

//Langkah 2 yaitu membuat profider
export class AddNamaProvider extends React.Component {
    state = {namas: []};

    //membuat arrow function
    addNama = (nama) => {
        if (!nama || (typeof nama === 'string' && nama.length < 1 )) return;
        const temp = [...this.state.items, nama];
        this.setState({namas: temp});
    };

    render() {
        return(
            <AddNameContext.Provider
            value={{
                namas: this.state.namas,
                addNama: this.addNama,
            }}>
                {/* agar state dapat diakses secara global */}
                {this.props.children}

            </AddNameContext.Provider>

        );
    }
}