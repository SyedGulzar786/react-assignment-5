import { useEffect, useLayoutEffect } from "react"

const Counter = ({ count }) => {
    useEffect(() => {
        console.log("case 5", count)

        return () => {
            console.log("Counter Unmounted")
        }
    }, [])

    useEffect(()=>{ // works after ui rendering

    },[])

    useLayoutEffect(()=>{ // works before ui rendering

    },[])

    return (
        <h1>{count}</h1>
    )
}

export default Counter