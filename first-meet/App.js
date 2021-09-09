// 1. hmtl - js (normal DOM) -> Membuat elemennya satu2 dengan code JS

//membuat variabel name
// const namaku = 'Tania';

// //membuat elemen
// const containerdb = document.createElement('div');
// const headingdb = document.createElement('h1');
// const paragrapdb = document.createElement('p')

// //memncetak elemen heading
// headingdb.textContent = 'Hello, ' + namaku;

// // mencetak object paragraph
// paragraphdb.textContent = 'ini adalah content yang ditampilkan dengan menggunakan javascript (normal DOM)';

// //memasukkan elemen heading dan paragraf kedalam elemen container(div)
// containerdb.append(headingdb);
// containerdb.append(paragraphdb);

// //membuat object untuk memanggil id='root' pada file html
// const rootElementDB = document.getElementById('root-db');

// memasukkan elemen container ke dalam elemen root
// agar konten tampil didalam browser (menggunakan kata append) atau disebut dengan proses rendering
//rootElementDB.append(containerdb);

// 2. hmtl - JS (Virtual DOM)

//membuat variabel name
// const nama = 'Tania';

// membuat object untuk memanggil id='root' pada file html
// const rootElementVD = document.getElementById('root-vd');

//Membuat elemen (perbedaannya DOM dengan virtual DOM react yaitu dalam pembuatan elemennya), jika DOM biasa menggunakan kata document sedangankan di virtual DOM menggunakan kata React
// const headingvd = React.createElement('h1', null, 'Hello, '+ nama);
// const paragraphvd = React.createElement('p', null, 'ini adalah content yang ditampilkan dengan menggunakan javascript (VIRTUAL DOM)');
// const containervd = React.createElement(
//     'div', 
//     {id: 'this-is-id', className: 'container'}, 
//     [headingvd, paragraphvd]
//     );

//agar konten tampil didalam browser (menggunakan kata append) atau disebut dengan proses rendering
// ReactDOM.render(containervd, rootElementVD);


// 3. hmtl - JS - JSX

//membuat variabel name
const nama = 'Tania';

// membuat object untuk memanggil id='root' pada file html
const rootElementJSX = document.getElementById('root-jsx');

// Membuat element menggunakan JSX

const element = (
    <div id='this-is-id' className='container'>
        <h1>Hello, {nama}</h1>
        <p>ini paragraf menggunakan JSX</p>

    </div>
)

ReactDOM.render(element, rootElementJSX);