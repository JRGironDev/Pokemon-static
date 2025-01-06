import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
    initValue: number;
    childen?: JSX.Element;
}

export const Counter: Component<Props> = (props)=> {

    const [counter, setCounter] = createSignal(props.initValue)

    return (
        <>
        {props.childen}
        
        <h3 class="mb-3">Value: {counter()}</h3>

        <button
            onClick={() => setCounter(prev => ++prev)}
            class="bg-blue-500 p-2 mr-2 rounded-full">+1</button>
        <button
            onClick={() => setCounter(prev => --prev)}
            class="bg-blue-500 p-2 mr-2 rounded-full">-1</button>
        </>
    )
}