import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Intro.css';
import { Button, Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function Intro(props) {

    return (
        <div className="intro">
            <Grid container>
                <Grid item xs={12} lg={false}>
                    <Hidden lgUp>
                        <div style={{ marginTop: '6em' }}></div>
                    </Hidden>
                </Grid>
                <Grid item md={2} xs={12}></Grid>

                <Grid item md={8} xs={12}>
                    <Grid container>
                        <Grid item className="picBox" style={{ margin: "auto" }} xs={12} lg={5}>
                            <div className="par">
                                <Hidden smDown>
                                    <div class="frame chl">
                                        <div class="clr"></div>
                                    </div>
                                </Hidden>

                                <img className="profilePic chl" src={process.env.PUBLIC_URL+"/profilepic.jpg"} alt="Profile Pic" />

                            </div>
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <p className="introText">Hi
                            <span class="wave" role="img" aria-label="wave"> 👋🏼 </span>
                            I'm Sukhveer, a tech-enthusiast and self-driven individual with a passion for building things.
                            <br></br>
                                <br></br>
                            I'm interested in anything tech — especially <span className="textDec color1">web development</span> and <span className="textDec color4">machine learning</span>. I graduated from Kwantlen Polytechnic University in May 2020.
                            My major was Computer Science and Information Systems.

                            <br></br>
                                <br></br>
                            In my free time, I love networking with people, listen to music, do some reading and sometimes enjoys cooking.
                            I have a knack for bringing technology, business, science and philosophy in every discussion.

                            <br></br>
                                <br></br>

                            Browse the <a className="textDec color2" href="./projects">projects</a> tab to see some of my work or feel free to <a className="textDec color3" href="https://www.linkedin.com/in/sukhveersohi/">reach out!</a>
                            </p>
                            <Grid item xs={12}>


                                <p className="introText">
                                <Button className="resumeBtn" style={{color:'white', fontWeight:'bold', fontSize:'1.7em'}} href={process.env.PUBLIC_URL+'/SukhveerResume.pdf'}>Resume</Button>

                                    <FontAwesomeIcon onClick={() => { window.open('https://www.linkedin.com/in/sukhveersohi/') }} icon={faLinkedinIn} size="3x" pull="left" />
                                    <FontAwesomeIcon onClick={() => { window.open('https://github.com/IamSohi') }} icon={faGithubAlt} size="3x" pull="right" />
                                </p>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item md={2} sm={false}></Grid>

                </Grid>
            </Grid>
        </div>

    );
}

export default Intro;