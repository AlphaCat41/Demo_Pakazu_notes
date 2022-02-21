import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    test: {
        border: (note) =>{
            if(note.category === 'reminders'){
                return '1px solid red'
            }
        }
    }
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note)

    return (  
        <div>
            <Card elevation={3} className={ classes.test }>
                <CardHeader 
                    avatar={
                        <Avatar 
                        sx={{
                            backgroundColor: note.category == "work" ? 'yellow' : 
                            note.category == "money" ? 'green' : 
                            note.category == "todos" ? 'pink' : 'blue'
                        }}  
                        >
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={ note.title }
                    subheader={ note.category }
                />

                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        { note.details }
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    );
}
 
export default NoteCard;