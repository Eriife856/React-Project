import GreetingCard from "./GreetingCard";
import './App.css';
function App(){
   return(
      <div>
        <GreetingCard name="Tunde" message="Have a great day!" color="blue" />
        <GreetingCard name="Foyinsola" message="Do have a blissful day!" color="white" />
        <GreetingCard name="Chinedu" message="Wishing you success!" color="pink" />
      </div>
   );
}
export default App;