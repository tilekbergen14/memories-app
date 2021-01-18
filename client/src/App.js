import React, { useEffect } from 'react'
import {Container , AppBar, Grow, Grid, Typography} from "@material-ui/core"
import Form from "./components/form/Form"
import Posts from "./components/posts/Posts"
import useStyles from "./styles"
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/posts"

export default function App() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
       <Container>
           <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
           </AppBar>
           <Grow in>
               <Grid container justify="space-between" alignitem="stretch" spacing={3}>
                    <Grid item sm={7} xs={12}>
                        <Posts />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Form />
                    </Grid>
               </Grid>
           </Grow>
       </Container>
    )
}
