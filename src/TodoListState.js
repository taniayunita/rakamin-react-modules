import React from 'react';

//Belajar STATE namun disini masih menyertakan props


function TodoListState(props) {
    if (props.items && props.items.length < 1) {
        return <span>No Name to Display</span>
    }

    return (
        <div>
            <h2>{props.judul}</h2>
            <ol>
                {props.items.map((nama) =>{
                    return <li>{nama}</li> 
                })}
            </ol>
        </div>

    );

}

// pembuatan state

export const environment = 'development';


class TodoListPageState extends React.Component {
    state = {
        items: [],
        // membuat state baru dengan string kosong
        nama: '',
    };

    //membuat arrow function
    addName = () => {
        
        const newName = this.state.nama;

        // melihat apakah value newName terdefined atau tidak maka baris baru tidak akan ditampilkan
        if(!newName || (typeof newName === 'string' && newName.length < 1)) return;
        const temp = [...this.state.items, newName];

        //merubah nilai state
        this.setState({items: temp, nama: ''});
    };
    onChange = (event) => {
        // set state / membuat kata yang ditulis dalam form ditampilkan ketika klik button add
        this.setState({nama: event.target.value});
    }

    render() {

            return (
                <div>
                    <h2>Ini adalah State</h2>
                    {/* membuat inputan baru dan ditampilkan datanya */}
                    <input value={this.state.nama} onChange={this.onChange}/>
                    {/* membuat button yg jika diklik maka muncul data baru */}
                    <button onClick={this.addName}> Add Name </button>
                    <br/>
                    <TodoListState items={this.state.items} judul= 'Daftar Orang sukses, bahagia, soleha : ' />
                </div>
            );

        }

}

export default TodoListPageState;