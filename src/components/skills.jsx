import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Specialty</span>
                                <h2 className="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <p>When you start out coding, it can feel completely overwhelming. Should you focus on front end or back end? What programming languages should you use? Where to begin? Keeping in mind that the only way to eat an elephant is a bite at a time, pick something and start.</p>
                            </div>
                            <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>React</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: '65%'}}>
                                            <span>65%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Express</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
                                            <span>55%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>HTML5</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>C#</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>Nodejs</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-5" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Dart</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}