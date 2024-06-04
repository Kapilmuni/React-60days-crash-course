import {Button,
    Container,
    StackDivider,
    Text,
    Flex,
    CardHeader,
    CardBody,
    Heading,
    Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

function TicketCard() {
    return(
        <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    )
}

export default function Tickets() {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [tickets, setTickets] = useState([]);
    const [err,setErr]=useState(false);

    async function fetchAndUpadateData(){
        setLoading(true);
        try {
           let res = await axios({
            method:"get",
            url:`http://localhost:3000/tickets`
           });
           let data=res?.data;
           setLoading(false);
           setTickets(data); 
        } catch (error) {
            setLoading(false);
            setErr(true)
        }
    }

    useEffect(()=>{
        fetchAndUpadateData()
    },[]);

    if(loading){
        return <LoadingIndicator/>
    }

    if(err){
        return <ErrorIndicator/>
    }

    console.log(`loading,${loading} -err,${err}`)
    console.log(`tickets`,tickets);
    return (<Container maxW="container.xl">
        <Flex direction="row-reverse">
            <Button variant="outline" colorScheme="red" onClick={()=>{
                navigate(`/ticket/create`)
            }}
            marginY={8} >Create Ticket </Button>
        </Flex>
         {tickets?.map((ticket)=>{
          <TicketCard key={ticket.id}/>
         })}                                    
        </Container>)
}