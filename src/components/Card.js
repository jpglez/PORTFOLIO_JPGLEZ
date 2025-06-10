import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
 
const Card = ({ title, description, imageSrc }) => { 
   return ( 
     <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl" 
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} /> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center">
  {title === "Little Lemon" ? (
    <>
      <a
        href="https://jpglez.github.io/LITTLE-LEMON/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <p>See more</p>
      </a>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </>
  ) : title === "Meta Front-End Developer" ? (
    <>
      <a
        href="https://www.coursera.org/account/accomplishments/specialization/FT80GW1CL7XJ"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <p>See more</p>
      </a>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </>
  ) : title === "Photography Gallery" ? (
    <>
      <a
        href="https://www.flickr.com/photos/jp_glez_/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <p>See more</p>
      </a>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </>
  ) : (
    <>
      <p>See more</p>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </>
  )}
</HStack>

       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 

