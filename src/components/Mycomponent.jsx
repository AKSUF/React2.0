import { useEffect, useState } from "react"

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        setInterval(tick, 1000);
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type='button' onClick={addClick}>Click</button>
            </p>
        </div>
    );
}
