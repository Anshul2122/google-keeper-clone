import { useContext } from 'react';
 
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';

//components
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

    const { deleteNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                    <Grid container style={{ marginTop: 16 }}>
                    {
                        deleteNotes.map(deleteNote => (
                            <Grid item>
                                <DeleteNote deleteNote={deleteNote} />
                            </Grid>
                        ))
                    }
                    </Grid>    
            </Box>
        </Box>
    );
}

export default DeleteNotes;