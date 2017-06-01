import React, { Component } from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

export default class OneSinger extends Component {
    render() {
        const link = "/singer/" + this.props.IdS
        return (
            <a href={link}>
                <div className="area">
                    <div className="mask">
                        <div className="vertical-align">
                            <i className="fa fa-search"></i>
                            <p>{this.props.NameS}</p>
                        </div>
                    </div>
                    <img src={this.props.ImageS} alt="" className="img-responsive" />
                    <h4>{this.props.NameS}</h4>
                </div>
            </a>
        )
    }
}