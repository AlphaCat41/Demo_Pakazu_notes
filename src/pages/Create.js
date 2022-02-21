import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, 
    TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
   field: {
        "&&": {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        }
   }
})

const Create = () => {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if(title === ''){
            setTitleError(true)
        }
        if(details === ''){
            setDetailsError(true)
        }
        if(title && details){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({ title, details, category })
            })
                .then(() =>{
                    history.push('/')
                })
        }
    }

    return (  
        <Container>
            <Typography 
                className={ classes.title }
                variant='h4'
                color='secondary'
                align='center'
                gutterBottom
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={ handleSubmit }>
                <TextField
                    onChange={ (e) => setTitle(e.target.value) }
                    className={ classes.field}
                    label="Note Title"
                    variant="outlined"
                    color='secondary'
                    fullWidth
                    required
                    error={ titleError }
                />
                <TextField
                    onChange={ (e) => setDetails(e.target.value) }
                    className={ classes.field}
                    label="Note Title"
                    variant="outlined"
                    color='secondary'
                    multiline
                    rows={ 4 }
                    fullWidth
                    required
                    error={ detailsError }
                />

                <FormControl className={ classes.field }>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={ category } onChange={ (e) => setCategory(e.target.value)}>
                        <FormControlLabel value='todos' control={ <Radio /> } label='Todos'/>
                        <FormControlLabel value='reminder' control={ <Radio /> } label='Reminder'/>
                        <FormControlLabel value='work' control={ <Radio /> } label='Work'/>
                    </RadioGroup>
                </FormControl>

                <Button 
                    className={ classes.btn }
                    type='submit' 
                    color='secondary'
                    variant='contained'
                    startIcon={ <SendIcon /> }
            
                >
                    Submit
                </Button>
               
            </form>
           
        </Container>
    );
}
 
export default Create;