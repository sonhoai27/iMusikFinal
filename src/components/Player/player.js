import React, { Component } from 'react'
import $ from "jquery"
import ReactAudioPlayer from 'react-audio-player';

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playpause: true,
        }

        $(document).ready(() => {
            $('#playOrPause').removeClass('.fa fa-play').addClass('.fa fa-pause')
        })
    }

    playOrPause() {
        if (this.state.playpause === true) {
            $('#playOrPause').removeClass('.fa fa-pause').addClass('.fa fa-play')
            this.setState({
                    playpause: false
                }, () => {
               this.rap.audioEl.pause();
            })
            console.log("pause")
        } else {
            if (this.state.playpause === false) {
                $('#playOrPause').removeClass('.fa fa-play').addClass('.fa fa-pause')
                this.setState({
                    playpause: true
                }, () => {
                    this.rap.audioEl.play();
                })

                console.log("play")

            }
        }
    }

    showNotification(){
        
    }
    render() {
        return (
            <header className="player">
                <nav className="navbar navbar-default navbar-fixed-bottom player-bar" role="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="navbar-header col-sm-12 navbar-flex">
                                     <div className="control-player">
                                        <i className="fa fa-play " id="playOrPause" aria-hidden="true" onClick={this.playOrPause.bind(this)}></i>
                                    </div>
                                    <a className="navbar-brand navbar-player" href="#">
                                        <img src={this.props.ImagePlayer} alt="" className="avatar-player" />
                                    </a>
                                    <div className="title-flex" style={{color: '#0366d6', fontWeight: 600, fontSize: 18, paddingTop: 10}}>
                                        <p>{this.props.Name}<br />{this.props.NameSinger}</p>
                                    </div>
                                </div>
                                <div className="playy">
                                    <ReactAudioPlayer
                                        src={this.props.LinkMP3}
                                        autoPlay={true}
                                        ref={(element) => { this.rap = element; }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
const styles = {
    bg: {
        backgroundColor: '#0366d6'
    },
}
export default Player
