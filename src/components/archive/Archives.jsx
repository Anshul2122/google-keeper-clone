import { useContext } from 'react';
 
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


import { DataContext } from '../../context/DataProvider';


//components
import Archive from './Archive';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {
                    <Grid container style={{ marginTop: 16 }}>
                    {
                        archiveNotes.map(archive => (
                            <Grid item>
                                <Archive archive={archive} />
                            </Grid>
                        ))
                    }
                    </Grid>
                      
                } 
            </Box>
        </Box>
    );
}

export default Archives;