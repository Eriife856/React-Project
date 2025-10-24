import StateCard from "./components/StateCard"
import './App.css';
  function App(){
    return(
    <div className="state-container">
        <StateCard  
        state ="oyo"
      capital ="ibadan"
       region = "North"
       population ={39538223}/>
     
       <StateCard  
        state ="Lagos"
      capital ="ikeja"
       region = "South"
       population ={395383}/>
       <StateCard 
        state ="Osun"
      capital ="osogbo"
       region = "West"
       population ={39533} 
      />

       <StateCard  
       state ="Ondo"
      capital ="Akure"
       region = "South"
       population ={39523}
       />
     
    </div>
    );
     
  }
  export default App;
  
  
  