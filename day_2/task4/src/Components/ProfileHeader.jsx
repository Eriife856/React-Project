function ProfileHeader({name, title, avatar}){
    return(
        <header className="header-container">
            <img src={avatar}alt="image" />
            <h3>Name : {name}</h3>
            <p>Title:{title}</p>
            
        </header>
    );
}
export default ProfileHeader;