import { Children } from "react";

function ProfileCard({children}){
    return(
        <div className="pcard">
            {children}
        </div>
    );
}
export default ProfileCard;