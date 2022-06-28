import React from 'react';
import { useEffect } from 'react';
import { items } from "../data";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./Projects.css";
import { makeStyles } from '@material-ui/core/styles';

const color = ['#0099ff', '#ff0055', '#22cc88', '#ffaa00'];
const useStyles = makeStyles({
    imgbox: {
        width: '90%',

    },
    cardTile: {
        margin: '3em',
        backgroundColor: 'black',
        color: 'white',
    },
    projectTile: {
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
        fontWeight: 'bold'
    }
})

function TechItems({ technology }) {
    return (
        <div>
            <ul className="techItems">
                {
                    technology.map((items, index) => (


                        <li key={items} style={{ color: (index < 4) ? color[index] : color[index - 4], borderColor: (index < 4) ? color[index] : color[index - 4] }}>{items}</li>
                    ))
                }
            </ul></div>)
}

function CardItem({ id, title, category, technology, description, link, img }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.projectTile}>
            <Grid item sm={12} md={5} style={{ margin: "auto" }}>
                <div>
                    <img className={classes.imgbox} src={process.env.PUBLIC_URL + img} alt={title} />
                </div>

            </Grid>
            <Grid item sm={12} md={7}>
                <Card className={classes.cardTile} key={id}>
                    <CardHeader className={classes.textColor} classes={{ subheader: classes.subheader }}
                        title={title}
                        subheader={category}
                    />

                    <CardContent>
                        <Typography className={classes.textColor} variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <TechItems technology={technology}
                        />
                    </CardContent>
                    <CardActions style={{ display: "block" }}>
                        {link && <Button className={classes.textColor} aria-label="settings" href={link}>
                            View Project
                        </Button>}
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}


function Projects(props) {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    });


    return (
        <div className="projects">
            <Grid container>
                <Grid className={classes.subTitle} item sm={12}>I love to build!</Grid>
                <Grid item sm={false} md={2}></Grid>
                <Grid item sm={12} md={8}>
                    {items.map(card => (

                        <CardItem key={card.id} {...card} />
                    ))}
                </Grid>
                <Grid item sm={false} md={2}></Grid>
            </Grid>

        </div>
    );

}

export default Projects;