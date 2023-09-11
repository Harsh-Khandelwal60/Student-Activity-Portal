import React from "react";
import "./TeamsStyles.css";
import { HeadsList } from "./Data/AdvisorsData";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Teams = () => {
  return (
    <div className="responsive-container-block TScontainer" id="team">
      <div className="responsive-container-block">
        {HeadsList.map((head)=>(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container" key={head.id}>
            <div className="card">
                <div className="team-image-wrapper">
                    <img src={head.pfp} className="team-member-image"/>
                </div>
                <p className="text-blk name">{head.name}</p>
                <div className="social-icons">

              
              <a href={head.linkedin} className="linkedin"><LinkedInIcon/></a>

            </div>
            </div>
            
        </div>
        )
        )}
      </div>
      <br/>
      
    </div>
  );
};

export default Teams;
