import { useEffect, useState } from "react";

function Counter(){
    // const [count, setCount] = useState(0) //adalah nilai awal

    // //componenDidMount
    // useEffect(() =>{
    //     document.title = `click ${count} times`
    //     //componenwillunmount
    //     return () => {
    //         document.title = "react App"; //reset judul saat komponent di unmount
    //     }
    // })

    // return(
    //     <>
    //         <p>
    //             Click {count} times
    //         </p>
    //         <button onClick={() => setCount(count + 1)}>
    //             Click
    //         </button>
    //     </>
    // )

    const [size, setSize] = useState({
        width: window.innerWidth,
                height: window.innerHeight
    })
        
    useEffect(() => {
    function updateSize(){
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
        
    }
    
    //menambahkan event listener
    window.addEventListener('resize', updateSize)

    //fungsi pembersih yang akan dijalankan ketika component di unmount
    return ()=>{
        window.removeEventListener('resize', updateSize)
    }
    }, [])

    return(
        <>
            <h1> Ukuran Windows</h1>
            <p>Lebar {size.width}</p>
            <p>Tinggi {size.height}</p>
        </>
    )
    }

export default Counter;