import React from "react";
import "./TeamsStyles.css";
import { SMList } from "./Data/HeadsData";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const TeamsSM = () => {
  return (
    <div className="responsive-container-block container" id="team">
      <div className="responsive-container-block">
        {SMList.map((SMs)=>(
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container" key={SMs.id}>
            <div className="card">
                <div className="team-image-wrapper">
                    <img src={SMs.pfp} className="team-member-image"/>
                </div>
                <p className="text-blk name">{SMs.name}</p>
                <p className="text-blk designation">{SMs.designation}</p>
                <div className="social-icons">
              
              <a href={SMs.linkedin} className="linkedin">
                <LinkedInIcon/>
              </a>
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

export default TeamsSM;
