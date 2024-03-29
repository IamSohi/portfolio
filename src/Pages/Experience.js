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
    },
    subTitle: {
        color: 'white',
        fontSize: '4em',
        fontWeight: 'bold',
    }
})

function ExperienceTile({ title, company, companyType, description, startDate, endDate, id }) {
    const classes = useStyles();

    return (
        <Card className={classes.cardTile} key={id}>
            <CardHeader className={classes.textColor} classes={{ subheader: classes.subheader }}
                title={title}
                subheader={`${company} [${companyType}]`}
            />

            <CardContent>
                <Typography className={classes.textColor} variant="body2" color="textSecondary" component="p">
                    {description.map(item => {
                        return (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: item }}></div>
                                <br></br>
                            </>
                        )
                    })}
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
        window.scrollTo(0, 0);
    });

    return (
        <div className={classes.experience}>
            <Grid container>
                <Grid className={classes.subTitle} item sm={12}>Experiences Everyday</Grid>
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