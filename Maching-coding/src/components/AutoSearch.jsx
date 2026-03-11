import { useEffect, useState } from "react";

const AutoSearch = () =>
{

    const[input,setInput] = useState("");
    const[results,setResults] = useState([]);
    const[showResults,setShowResults] = useState(false);
    const[cache,setCache] = useState({})

    const fetchData = async () =>
    {
        if(cache[input])
        {
            console.log("Cache Result " + input)
            setResults(cache[input])
            return;
        }
        console.log("API "+input)
        const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
        const json = await data.json();
        setResults(json?.recipes);
        setCache((prev) => ({...prev, [input]: json?.recipes}));
    }


    useEffect(()=>
    {
fetchData()
    },[input])

    return(
        <div>
<h1> AutoSearchBox</h1>
<input type="text" 
className="search-input"  
value={input} 
onChange={(e)=>setInput(e.target.value)}
onFocus={()=>setShowResults(true)}
onBlur={()=>setShowResults(false)}/>

{
    showResults &&
    <div className="results-container">
       
    { results.map((r) => (
             <div key={r.id} className="results">
               <span>{r.name}</span>
             </div>
           ))
           }
    
       </div>
}
</div>
    )
}

export default AutoSearch;