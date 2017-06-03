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
                    <h5
                        style={{fontSize: this.props.FontSizeTitle, paddingTop: this.props.paddingTopTitle}}>
                        {this.props.NameS}
                        <br/>
                        <p className="fa fa-thumbs-up" style={{display: this.props.ShowLike}}> </p>{this.props.LikeS}
                    </h5>
                </div>
            </a>
        )
    }
}