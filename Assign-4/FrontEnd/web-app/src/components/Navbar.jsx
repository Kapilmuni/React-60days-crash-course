import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink,Flex } from "@chakra-ui/react";
const links=[
    {
        to:"/",
        label:"HOME",
    },
    {
        to:"/about",
        label:"ABOUT",
    },
    {
        to:"/contact",
        label:"CONTACT",
    },
    {
        to:"/login",
        label:"LOGIN",
    },
    {
        to:"/tickets",
        label:" TICKETS"
    }
]

export default function Navbar(){
    return (
    <Flex id="navbar">
        {
            links?.map((link)=>(
                <ChakraLink className="component" as={ReactRouterLink} key={link.to} to={link.to}>
                    {link.label}
                </ChakraLink>
            ))
        }
    </Flex>)
}