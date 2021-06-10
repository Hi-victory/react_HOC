import React, { useEffect, useState } from "react"
function Home() {
    const [value, setValue] = useState(1)
    useEffect(() => {
        console.log('useEffect will be learning')
    },[])
    console.log('useEffect render')
    return (
        <div>
            {value}
            <button onClick={() => { setValue(x=>x+1) } }>Click Me</button>
        </div>
    
    )
}
export default Home






