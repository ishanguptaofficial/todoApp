import React , {useState} from 'react';

const UseRef = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value) }/>
            <p>Hello my name is : {name}</p>
        </div>
    );
}

export default UseRef;
