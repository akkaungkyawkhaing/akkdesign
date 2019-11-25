import React, { Component } from 'react'

export default class About extends Component {
    static defaultProps = {
        title: 'About Us',
        titleh2: 'Who Am I?',
        Name: 'Hi Im Aung Kyaw Khaing',

        About1: 'Web Development',
        About2: 'Mobile Development',
        About3: 'Software',
        About4: 'Application'
    }
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">

                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-metalod">{this.props.title}</span>
                                            <h2 className="colorlib-heading">{this.props.titleh2}</h2>
                                            <p>
                                                <strong>{this.props.Name}</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2"><i className="icon-bulb"></i></span>
                                            <h3>{this.props.About1}</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                        <div className="services color-2">
                                            <span className="icon2"><i className="icon-globe-outline"></i></span>
                                            <h3>{this.props.About2}</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                                        <div className="services color-3">
                                            <span className="icon2"><i className="icon-data"></i></span>
                                            <h3>{this.props.About3}</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                        <div className="services color-4">
                                            <span className="icon2"><i className="icon-phone3"></i></span>
                                            <h3>{this.props.About4}</h3>
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
