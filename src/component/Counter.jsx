import { Button } from "@mui/material"
import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count => count + 1)
    }

    const handleDecrease = () => {
        setCount(count => count - 1)
    }
    return (
        <>
            <div>
                <div className="flex items-center justify-center mx-auto mt-28">
                    <Button onClick={() => handleDecrease()} variant="contained" color="primary" sx={{ margin: 1 }}>-</Button>
                    <h1 className='text-3xl text-red-500'>{count}</h1>
                    <Button onClick={() => handleIncrease()} variant="contained" color="primary" sx={{ margin: 1 }}>+</Button>
                </div>
            </div>
        </>
    )
}

export default Counter