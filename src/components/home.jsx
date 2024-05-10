import SwipeDrawer from "./SwipeDrawer";
import {Box}  from '@mui/material'
import Notes from "./notes/Notes";

const Home = () => {
    return (
        <Box style={{display :'flex', widht:'100%'}}>
            <SwipeDrawer/>
            <Notes/>
        </Box>
        
    );
}
export default Home;