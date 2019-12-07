import React, { Component } from 'react'

export default class Services extends Component {
    static defaultProps = {
        title: 'What I do?',
        titleh2: 'Here are some of my expertise',

        Web: 'Web Development',
        Webp: 'I have experience building websites and Node.js, Express.js, React, Csharp, Python, Dart, HTML, CSS',

        Mobile: 'Mobile Development',
        Mobilep: 'Responsive for developing software applications using Xamarin & Flutter. Hightly experience with Xamarin',

        Dev: 'Dev Ops',
        Devp: 'Deep experience with AWS, Kubernetes and Openstack. Helping organizations instill Devops for the modern age.'
        // Devp: 'I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s'
        //AWS Certified DevOps Engineer
        //Dedicated Linux and Open source professional seeking a Senior DevOps Engineer role. Brings industry certifications to your organization with an always learning attitude. Practical experience with AWS, Docker, and OpenStack.
    }
    render() {
        return (
            <div>
                <section className="colorlib-services" data-section="services">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">{this.props.title}</span>
                                <h2 className="colorlib-heading">{this.props.titleh2}</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>{this.props.Web}</h3>
                                        <p>{this.props.Webp}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>{this.props.Mobile}</h3>
                                        <p>{this.props.Mobilep}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>{this.props.Dev}</h3>
                                        <p>{this.props.Devp}</p>
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