import React, { Component } from 'react'

export default class Notfound extends Component {
    render() {
        return (
            <div>
                <div className="mars404"></div>
                <img src="https://mars-404.templateku.co/img/404.svg" className="logo-404" />
                <img src="https://mars-404.templateku.co/img/meteor.svg" className="meteor" />
                <p className="title404">Oh no!!</p>
                <p className="subtitle404">
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
                </p>
                <div align="center">
                    <a className="btn-back404" href="#position">Back to previous page</a>
                </div>
                <img src="https://mars-404.templateku.co/img/astronaut.svg" className="astronaut" />
                <img src="https://mars-404.templateku.co/img/spaceship.svg" className="spaceship" />
            </div>
        )
    }
}