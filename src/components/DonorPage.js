import { Flex, Link, Loader, Text } from "@aws-amplify/ui-react";
import { useCallback, useEffect, useState, React } from "react"
import { listNotes, listSpees } from "../graphql/queries";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { getDonor, getMedia } from "./fakedata";
import MediaPost from "./MediaPost";



const DonorPage = () => {
    const navigate = useNavigate();

    const [donorName, setDonorName] = useState('');
    const [sponsorees, setSponsorees] = useState([]);
    const [media, setMedia] = useState([]);

    const fetchSponsorees = useCallback(async () => {
        const apiData = await API.graphql({ query: listSpees });
        return apiData.data.listSpees.items;
        // const speesFromAPI = apiData.data.listSpees.items.filter((spee) => spee.update_user === user);
    } , []) 


    useEffect(() => {
        fetchSponsorees().then((data) =>  {setSponsorees(data)});
        getMedia().then((data) => setMedia(data));
        getDonor().then(({name}) => setDonorName(name));
    }, [setSponsorees, fetchSponsorees])

    return (
        (sponsorees && media) ?
        <>
        <Flex direction="column" padding="relative.large" paddingBottom="xs">
        <h1>Hi, Jack</h1>
        <h3>Wanna know how your sponsorees are doing? Here they are!</h3>
        <ul>
        {sponsorees.map(({name}) => <li key={name}><Text>{name}</Text></li>)}
        </ul>
        </Flex> 
        <Flex direction="column" alignItems="center" justifyContent="center" padding="large" paddingTop="none">
        <h2>Media Page</h2>
        
        {media.map((data, index) => 
        <div key={data.description}>
        <MediaPost  props={{...data, index}} />
        <br/>
        </div>)}
        </Flex>
        </>        
        : <Flex width='100vw' height="100vh" alignItems="center" justifyContent="center">
            <Loader width="100px" size="large" variation="linear"/>
        </Flex>
    );
    
}
export default DonorPage;