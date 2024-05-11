
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Header = styled(AppBar)`
z-Index:1201;
background:#fff;
height:70px;
box-shadow: inset 0 -1 0 0 #dadce0;
`

const Heading = styled(Typography)`
    color:#5f6368;
    font-size:24px;
    margin-left:25px;
`


const Headerbar = ({ open, handleDrawerOpen }) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
    
    return (
        <Header open={open} onClose={handleDrawerOpen}>
        <Toolbar>
            <IconButton
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ marginRight: '20px',}}
            >
            <Menu/>
          </IconButton>
                <img src={logo} alt="logo" style={{ width: 30 }} />
                <Heading>keep</Heading>
        </Toolbar>
      </Header>
    );
}

export default Headerbar;