import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "Little Lemon", 
   description: 
     "This project is a responsive web application developed as part of a front-end development course. It showcases a fictional Mediterranean restaurant called Little Lemon and includes features like a booking form, menu display, and navigation using React and React Router.", 
   getImageSrc: () => require("../images/littlelemon_pic.png"), 
 }, 
 { 
   title: "Meta Front-End Developer", 
   description: 
     "This professional certificate program, developed by Meta, is designed to prepare learners for entry-level front-end development roles. The course covers essential web technologies including HTML, CSS, JavaScript, React, Git, and UI/UX design principles.", 
   getImageSrc: () => require("../images/certificate.jpeg"), 
 }, 
 { 
   title: "Hackathon ElecTech 2024B", 
   description: 
     "I participated in a team-based hackathon, where we designed a biometric voting app focused on enhancing security and accessibility during Mexico’s elections. Our app was prototyped in Figma and featured facial recognition technology to verify any voter identity.", 
   getImageSrc: () => require("../images/hackathon.jpeg"), 
 }, 
 { 
   title: "Photography Gallery", 
   description: 
     "Photography is one of my favorite creative outlets. I enjoy capturing moments, landscapes, and everyday life through my lens, focusing on composition, lighting, and storytelling.", 
   getImageSrc: () => require("../images/spain1.jpeg"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects & Certificates
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;
