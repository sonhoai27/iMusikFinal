import React, { Component } from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';


export default class OneDiscover extends Component {
    render() {
        const linkSinger = "/singer/" + this.props.IdS;
        const linkDiscover = "/discover/" + this.props.IdD
        return (
            <div style={styles.marinBottomOneDiscover} style={{marginBottom: 20}}>
                <a href={linkDiscover} >
                <div className="area">
                    <div className="mask">
                        <div className="vertical-align">
                            <i className="fa fa-play-circle"></i>
                            <p>{this.props.playOrInfo}</p>
                        </div>
                    </div>
                    <img src={this.props.Image} alt={this.props.NameDiscover} className="img-responsive" />
                </div>
                    <h4 style={{marginTop: '16px', fontSize: 16, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{this.props.NameDiscover}</h4></a>
                    <span><a href={linkSinger}>{this.props.NameSinger}</a></span>
            </div>
        )
    }
}

const styles = {
    marinBottomOneDiscover: {
        marginBottom: 18,
    }
}