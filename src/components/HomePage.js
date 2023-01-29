import { Button, Flex } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useCallback, useState } from "react";
import DonorPage from "./DonorPage";
import { listNotes, listSpees } from "../graphql/queries";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    const navigate = useNavigate()

    const [showDonorPage, setShowDonorPage] = useState(false);
    const [showSponsoreePage, setShowSponsoreePage] = useState(false);

    const fetchSponsorees = useCallback(async () => {
        const apiData = await API.graphql({ query: listSpees });
        return apiData.data.listSpees.items;
        // const speesFromAPI = apiData.data.listSpees.items.filter((spee) => spee.update_user === user);
    } , []);


    return (
        <>
        {
        <Flex width='100vw' height="100vh" alignItems="center" justifyContent="center">
            <Button variation="" height="50px" back onClick={() => navigate('donor')}>Donor</Button>
            <Button height="50px">Sponsoree</Button>
        </Flex>}
        {/* {showDonorPage && <DonorPage/>} */}
        </>
    );
}

export default HomePage;