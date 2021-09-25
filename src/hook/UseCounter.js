//untuk customisasi Hook

import React, {useState} from 'react'

function UseCounter() {
    const [state, setState] = useState(0)
    const handlestate =  () => {
        setState(currentState => state + 1)
    }

    return [
        state,
        handlestate

    ]
        
    
}

export default UseCounter
