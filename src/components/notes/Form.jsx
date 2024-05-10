
import { useState, useRef, useContext} from "react";

import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';
import { v4 as uuid } from "uuid";


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

const note = {
    id:'',
    heading: '',
    text:'',

}

const Form = () => {
    const [showTextField, setShowTextFeild] = useState(false); 
    const [addNote, setAddNotes] = useState({...note, id:uuid()});

    const { setNotes } = useContext(DataContext);
    const ContainerRef = useRef();

    const onTextAreaClick = () => {
        setShowTextFeild(true);
        ContainerRef.current.style.minHeight = '70px';
    }

    const handleClickAway = () => {
        setShowTextFeild(false);
        ContainerRef.current.style.minHeight = '30px';

        setAddNotes({ ...note, id: uuid() });
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr]);
        }
    }

    const onTextChange = (e) => {
        let changeNote = { ...addNote, [e.target.name]: e.target.value } 
        setAddNotes(changeNote);
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref ={ContainerRef}>
                {showTextField &&
                    <TextField
                        placeholder='Title'
                        variant='standard'
                        InputProps={{ disableUnderline:true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                        value={addNote.heading}
                    />
                }
                <TextField
                    placeholder='Take a note ...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{ disableUnderline:true }}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='heading'
                    value={addNote.text}

                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form;