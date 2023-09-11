import Footer from '../Footer/Footer'
import ScrollToTop from "../ScrollToTop";
import React from "react";
import Teamtabs from "./Teamtabs";

const TeamPage = () => {
  return (
    <>
      <p className="text-blk team-head-text" id="team">
        Our Team
      </p>
      <Teamtabs />

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
