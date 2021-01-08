import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { experiences } from "../data";
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const color = ['#0099ff', '#ff0055', '#22cc88', '#ffaa00'];
const useStyles = makeStyles({
    experience: {
        marginTop: '7em'
    },

    cardTile: {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid rgb(100, 100, 100)',
        borderRadius: '12px',
        marginBottom: '3em'
    },
    textColor: {
        color: 'white'
    },
    subheader: {
        color: 'white'
    }
})

function ExperienceTile({ title, company, description, startDate, endDate, id }) {
    const classes = useStyles();

    return (
        <Card className={classes.cardTile} key={id}>
            <CardHeader className={classes.textColor} classes={{ subheader: classes.subheader }}
                title={title}
                subheader={company}
            />

            <CardContent>
                <Typography className={classes.textColor} variant="body2" color="textSecondary" component="p">
                    {description[0]}
                    <br></br>
                    <br></br>
                    {description[1]}
                    <br></br>
                    <br></br>
                    {description[2]}
                </Typography>
                <br></br>
                <time>{startDate} — {endDate}</time>

            </CardContent>

        </Card>
    )
}


function Experience() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0,0);
      });

    return (
        <div className={classes.experience}>
            <Grid container>
                <Grid item sm={false} md={2}></Grid>
                <Grid item sm={12} md={8}>
                    {experiences.map(item => (
                        <ExperienceTile key={item.id} {...item} />
                    ))}
                </Grid>
                <Grid item sm={false} md={2}></Grid>
            </Grid>
        </div>
    )
}

export default Experience;