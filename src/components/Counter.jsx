import { useEffect } from "react"

const Counter = ({ count }) => {
    useEffect(() => {

        console.log("case 5", count)

        return () => {
            console.log("Counter Unmounted")
        }

    }, [])

    return (
        <h1>{count}</h1>
    )
}

export default Counter