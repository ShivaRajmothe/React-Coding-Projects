import { useEffect, useState } from "react";

const ProgressCard =({Progress}) =>{



const[animation, setAnimation] = useState(0);


useEffect (() => {
  setTimeout(() => {
    setAnimation(Progress);
  }, 100);
}, [Progress]);

    return(
        <div className="outer-card"> 
                <div className="inner-card" style={{
                    transform: `translateX(${animation -100}%)`,
                    color:animation > 5 ? 'white' : 'black'}} 
                    role="progressbar"
                     aria-valuenow={animation} 
                     aria-valuemin="0" 
                     aria-valuemax="100"
                    >
                    {animation}%
                </div>
        </div>
    )
}

const ProgressBar = () =>
{

    const bars = [3,10,20,30,40,50,60,70,80,90,100];
    return(
        <div className="progress-bar">
            {bars.map((progress) => (
                <ProgressCard key={progress} Progress={progress} />
            ))}
        </div>
    )
}


export default ProgressBar;