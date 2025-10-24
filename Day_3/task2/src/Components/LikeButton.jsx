import {useState} from "react"

function LikeButton(){
//    const [liked, setLiked] = useState(False)
//    const [count, setCount] = useState(0)
//    const [disabled, setDisabled]= useState(False)
const [liked, setLiked] = useState(false)
const [count, setCount] = useState(0)
const [disabled, setDisabled] = useState(false)


   const handleClick = () => {
     setDisabled(true)

     if (liked){
        setLiked(false);
        setCount(count -1);
     }
    else{
        setLiked (true);
        setCount(count +1);
    } 
    setTimeout  (()=> setDisabled (false), 1000);
   }
   
return (
  <div>
    <button onClick={handleClick} disabled={disabled}>
      {liked ? "❤️ liked" : "🤍 like"}
    </button>

    <p>
      {count} {count === 1 ? "like" : "likes"}
    </p>
  </div>
)
   
}
export default LikeButton;



