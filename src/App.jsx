import './App.css';
import MyComponent from './components/Mycomponent';
import { useState } from 'react';

function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="App bg-red-900">
            <div>{show && <MyComponent />}</div>
            <p>
                <button type='button' onClick={() => setShow(!show)}>
                    {show ? 'Hide post' : 'Show post'}
                </button>
            </p>
        </div>
    );
}

export default App;

