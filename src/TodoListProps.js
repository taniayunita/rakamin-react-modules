import React from 'react';

// BELAJAR PROPS
function TodoList(props){

    console.log('>>', (props));
    if (props.items && props.items.length < 1) {
        return <span>No Name to Display</span>
    }
    return (
        <div>
            <h2>{props.judul}</h2>
            <ol>
                {props.items.map((todo) => {
                    return <li>{todo}</li>
                
                })}
            </ol>
        </div>
    );
}

function TodoListPage(){
    const items = ['Tania', 'Raisa', 'Ayu Trivita','Amalia', 'Arina Anggraini'];
    return(
        <div>
            <h1>Ini adalah Props</h1>
            <TodoList items={items} judul='Daftar orang sukses, bahagia, soleha : '/>
        
        </div>
    );
}

export default TodoListPage;