
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';


const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 1, name: 'Archive', icon: <Archive/>, route: '/archive' },
        {id:1, name:'trash', icon:<Delete/>, route:'/delete'},
    ]
    return (
        <List>
            {
            navList.map(list => (
                <ListItem button key={list.id}>
                    <ListItemIcon>
                        {list.icon}
                    </ListItemIcon>
                    <ListItemText primary={list.name}/>
                </ListItem>
            ))
            }
        </List>
    );
}

export default NavList;