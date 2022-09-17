import React from "react";
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { WorkHeaderContainer,WorkHeaderDescription,WorkHeaderSection,WorkHeaderTitle,WorkSocialIcon,WorkSubTitle} from "./style";

const WorkHeader = () => {
  return (
    <WorkHeaderSection>
      <div className="container">
        <WorkHeaderContainer>
          <WorkSubTitle>What we created</WorkSubTitle>
          <WorkHeaderTitle>Our Work Portfolio</WorkHeaderTitle>
          <WorkHeaderDescription>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </WorkHeaderDescription>
          <WorkSocialIcon>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsLinkedin />
          </WorkSocialIcon>
        </WorkHeaderContainer>
      </div>
    </WorkHeaderSection>
  );
};

export default WorkHeader;
