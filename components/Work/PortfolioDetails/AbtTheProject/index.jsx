import Image from 'next/image'
import React from 'react'
import { AbtProjectDescription, AbtProjectList, AbtProjectListItem, AbtProjectSection, AbtProjectTitle, HowWeDoDescription, HowWeDoTitle, HowWeDoWrapper, ProjectKeyImgWrapper } from './style'

const AbtTheProject = () => {
    return (
        <AbtProjectSection>
            <AbtProjectTitle>About the project</AbtProjectTitle>
            <AbtProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</AbtProjectDescription>
            <AbtProjectList>
                <AbtProjectListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</AbtProjectListItem>
                <AbtProjectListItem>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</AbtProjectListItem>
                <AbtProjectListItem>Duis aute irure dolor in reprehenderit in voluptate velit esse</AbtProjectListItem>
                <AbtProjectListItem>Excepteur sint occaecat cupidatat non proident, sunt in culpa</AbtProjectListItem>
            </AbtProjectList>
            <Image src='/caseStudies/img1.png' height={508} width={842} />
            <HowWeDoWrapper>
                <HowWeDoTitle>How we do it</HowWeDoTitle>
                <HowWeDoDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</HowWeDoDescription>
                <AbtProjectList>
                    <AbtProjectListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</AbtProjectListItem>
                    <AbtProjectListItem>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</AbtProjectListItem>
                    <AbtProjectListItem>Duis aute irure dolor in reprehenderit in voluptate velit esse</AbtProjectListItem>
                    <AbtProjectListItem>Excepteur sint occaecat cupidatat non proident, sunt in culpa</AbtProjectListItem>
                </AbtProjectList>
            </HowWeDoWrapper>
            <hr />
            <ProjectKeyImgWrapper>
                <Image src='/caseStudies/keyword.png' height={36} width={945} />
            </ProjectKeyImgWrapper>
            <hr />
        </AbtProjectSection>
    )
}

export default AbtTheProject