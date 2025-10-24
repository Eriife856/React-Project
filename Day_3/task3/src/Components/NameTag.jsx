import {useState} from "react"
function NameTag(){
const [name, setName]= useState('') 
const [title , setTitle] = useState('')
const [company, setCompany]=useState('')


return (
    <div className="tag">
        <input
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />

        <input
        name="title"
        placeholder="Enter your title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />

        <input
        name="company"
        placeholder="Enter your company"
        value={company}
        onChange={(e)=> setCompany(e.target.value)}
        />

        <div>
            <h2>Name Tag:</h2>
            <p>Name: {name}</p>
            <p>Title: {title}</p>
            <p>Company: {company}</p>
        </div>
    </div>
)

}

export default NameTag;