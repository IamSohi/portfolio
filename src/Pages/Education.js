import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {education} from '../data';
import './Education.css';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';


const color=['#0099ff','#ff0055','#22cc88','#ffaa00'];
const useStyles = makeStyles({
    
    cardTile:{
        backgroundColor: 'black',
        color: 'white',
        border:'1px solid rgb(100, 100, 100)',
        borderRadius:'12px',
        marginBottom:'3em'
    },
    textColor:{
        color:'white'
    },
    subheader:{
        color:'white'
    },
    subTitle:{
        color:'white',
        fontSize:'4em',
        fontWeight:'bold'
    }
})
function Courses({courses}){
    return(
    <div>
    <ul className="courses">
        {
            courses.map((items,index)=>(
            <li key={items} style={{color:(index<4)?color[index]:color[index-(4*parseInt(index/4))],borderColor:(index<4)?color[index]:color[index-(4*parseInt(index/4))]}}>{items}</li>
            ))
        }
    </ul></div>)
}

function EducationCard({id, program,institution,startDate, endDate, courses, description,link}) {
    const classes = useStyles();

    return(
            <Card className={classes.cardTile} key={id}>
            <CardHeader className={classes.textColor} classes={{subheader:classes.subheader}}
                    title={program}
                    subheader={institution}
                />
                <CardContent>
                    
                    <Typography className={classes.textColor} variant="body2" color="textSecondary" component="p">
                    {description}
                    </Typography>
                    <Courses courses={courses}/>
                    <br></br>
                    <time>{startDate} — {endDate}</time>
                </CardContent>
                <CardActions style={{display:"block"}}>
            <Button className={classes.textColor} aria-label="settings" href={id===1?process.env.PUBLIC_URL+link:link}>
            View Certification
          </Button>
            </CardActions>
            </Card>
    )
    
}
// {}
function Education(){
    const classes = useStyles();

    return(
        <div className="education">
        <Grid container>
        <Grid className={classes.subTitle} item sm={12}>Can't Give Up Learning!</Grid>
            <Grid item sm={false} md={2}></Grid>
            <Grid item sm={12} md={8}>
                {education.map(card=>(
            <EducationCard key={card.id} {...card}/>
        ))}

                {/* <div style={{backgroundColor:"white"}}>
                    <h2>Computer Science and Information Systems</h2>
                    <h3>Kwantlen Polytechnic University</h3>
                    <p>This course is designed to provide graduates with a solid foundation in computer systems and user support, network administration, systems design, and foundational programming.</p>
                </div> */}
            </Grid>
            <Grid item sm={false} md={2}></Grid>
        </Grid>
        </div>
        
    )


}


export default Education;