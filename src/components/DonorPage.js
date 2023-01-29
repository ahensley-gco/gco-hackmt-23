import { Flex, Loader } from "@aws-amplify/ui-react";
import { useCallback, useEffect, useState } from "react"
import { listNotes, listSpees } from "../graphql/queries";
import { API } from "aws-amplify";



const DonorPage = () => {
    const [donorName, setDonorName] = useState('');
    const [sponsorees, setSponsorees] = useState([]);

    const fetchSponsorees = useCallback(async () => {
        const apiData = await API.graphql({ query: listSpees });
        return apiData.data.listSpees.items;
        // const speesFromAPI = apiData.data.listSpees.items.filter((spee) => spee.update_user === user);
    } , []) 


    useEffect(() => {
        fetchSponsorees().then((data) =>  {setSponsorees(data)});
        // console.log(list);
        // setSponsorees(list);
    }, [setSponsorees, fetchSponsorees])

    return (
        (sponsorees) ?
        <>
        <div>Hi, {'donorName'}</div>
        <div>Wanna know how your sponsorees are doing? Here they are; click on their name to learn more.</div>
        {sponsorees.map(({name}) => <div>{name}</div>)}
        </> 
        : <Flex width='100vw' height="100vh" alignItems="center" justifyContent="center">
            <Loader width="100px" size="large" variation="linear"/>
        </Flex>
    );
    
}
export default DonorPage;