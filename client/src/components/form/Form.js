import React, { useState } from 'react'
import useStyles from "./styles"
import { Paper, Button, TextField, Typography } from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux"
import { createPost } from "../../actions/posts"

export default function Form() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [data, setData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(data))
    }

    const clear = () => {
            console.log("Clear")
    }

    return (
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} className={`${classes.form} ${classes.root}`} autoComplete="off" noValidate>
                <Typography variant="h6">Memories</Typography>
                <TextField name="creator" label="creator" variant="outlined" fullWidth value={data.creator} onChange={(e) => setData({...data, creator: e.target.value})}/>
                <TextField name="title" label="title" variant="outlined" fullWidth value={data.title} onChange={(e) => setData({...data, title: e.target.value})}/>
                <TextField name="message" label="message" variant="outlined" fullWidth value={data.message} onChange={(e) => setData({...data, message: e.target.value})}/>
                <TextField name="tags" label="tags" variant="outlined" fullWidth value={data.tags} onChange={(e) => setData({...data, tags: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setData({...data, selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth type="submit">Submit</Button>
                <Button variant="contained" color="secondary" size="large" fullWidth onClick={clear}>Clear</Button>
            </form> 
        </Paper>
    )
}
