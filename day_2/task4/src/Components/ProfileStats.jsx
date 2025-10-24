function ProfileStats({project, followers,following}){
    return(
        <div className="stats-container">
            <button onClick={()=>handleclick("project", project)}>Project:{project}</button>
           <button  onClick={()=>handleclick("followers", followers)}> Followers:{followers}</button>
            <button  onClick={()=>handleclick("following", following)}>Followers:{following}</button>
        </div>
    );
}
export default ProfileStats;