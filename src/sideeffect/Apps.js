import React, {useState} from 'react'
import MyClass from './MyClass';
import MyFunc from './MyFunc';

export default function Apps() {
    // membuat state
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(currentState => !currentState)
    return (
        <div className="App">
            {/* membuat button toggl untuk mengupdate this.state. */}
            <button className="Button" style={{marginTop: 8}} onClick={handleToggle}>toggle</button>
            {toggle && <MyFunc /> }
        </div>
    )
}
