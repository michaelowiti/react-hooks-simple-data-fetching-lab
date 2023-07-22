import  { useEffect, useState } from "react";


const App =()=>{
    const [dogpic, setDogPic]= useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setDogPic(data.message));
    }, []);

    if(!dogpic) {
    return <p>Loading</p>
    }

    return(
        <>
        <img src={dogpic} alt ="A Random Dog"></img>
        </>

    )

    
 

}

export default App;