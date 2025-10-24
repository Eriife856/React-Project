import ProfileHeader from "./Components/ProfileHeader";
import ProfileStats from "./Components/ProfileStats";
import SkillBadge from "./Components/SkillBadge";
import ProfileCard from "./Components/ProfileCard";
import './App.css';

function App(){
   return(
    <div className="container">
        <ProfileCard>
             <ProfileHeader
        name = "Adebisi Kehinde"
        title= "Senior Dev"
        avatar= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft0PL47JPe62lN8WYJ6Pcdbpw-8YuHG3D4w&s"
        />

        <ProfileStats
        project = {45}
        followers = "1.5k"
        following = {300}
        />

        <SkillBadge
        skill = "React"
        level="expert"
        />
        </ProfileCard>

    </div>
   );
}

export default App;