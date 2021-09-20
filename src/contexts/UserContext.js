// membuat data user secara global agar dapat dibaca semua halaman yang membutuhkan
import React from 'react';

//Langkah 1 membuat context
export const UserContext = React.createContext({
    //membuat state/data context
    currentUser: null,
    login: () => {},
    register: () => {},
    logout: () => {},
});

//Langkah 2 membuat provide untuk membuat state2 menjadi global

export function UserProvider(props) {
    //menseting bahwa pada saat halaman pertama kali di run belum ada yang login
    const [currentUser, setCurrentUser] = React.useState(null);
    //untuk melist atau menyimpan data2 user yang melakukan login
    const [users, setUsers] = React.useState([]);

    //membuat function untuk aktifitas login, register, logout
    const login = (username, password) => {
        //untuk memastikan apakah user tersedia
        const user = users.find(value => value.username === username)

        if(user){
            if(user.password !== password){
                alert('Password salah');
                return;
            } else {
                //state untuk jika user sudah login
                setCurrentUser(user);
                alert('login berhasil!')
            }
        }else {
            alert('User belum terdaftar');
        }
    };
    const register = (username, password) => {
        //membuat logic untuk melihat apakah user yang akan register sudah ada atau belum
        const user = users.find(value => value.username === username);

        if(user){
            //jika user udah ada maka akan menampilkan alert berikut
            alert('User ini sudah terdaftar');
            return;
        }
        //jika user belum tersedia
        const newUser = {username, password};
        setUsers([...users, newUser]);
        alert('Pendaftaran berhasil!!');

    };

    const logout = () => {setCurrentUser(null);
    };

    return (
        <UserContext.Provider value={{currentUser, login, register, logout}}>
            {/* kata props diambil dari userProvider */}
            {props.children}
        </UserContext.Provider>
    );
}