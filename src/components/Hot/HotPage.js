import React, { Component } from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
import Banner from "../header/banner"
import getHotDiscover from "../../api/getHotDiscover"
import OneDiscover from "../../components/Discover/OneDiscover"
import getHotSong from "../../api/getHotSong"
import Player from "../Player/player"
import updateLikeSong from '../../api/updateLikeOfSong'

export default class HotPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            Hinh: "",
            ImagePlayer: "",
            LinkMP3: "",
            IDMP3: 0,
            TenMP3: "",
            TenCaSi: "",
            isCheck: false,
            ClickTrack: true,
        }

    }
    componentWillMount() {
        if (this.props.idHotPage == 2) {
            getHotDiscover()
                .then(arr => {
                    this.setState({
                        mang: arr,
                    })
                })
            console.log("2")
        } else {
            getHotSong()
                .then(arr => {
                    this.setState({
                        mang: arr,
                    })
                    arr.map((e, i) => (
                        this.setState({
                            Hinh: e.Image,
                        })
                    ))
                    console.log(this.state.Hinh)
                })
        }
    }

    onClickTrack(Id, Name, Link, Hinh) {
        this.setState({
            LinkMP3: Link,
            ImagePlayer: Hinh,
            IDMP3: Id,
            TenMP3: Name,
            isCheck: true,
        })
    }
    updateLikeSong(id) {
        $.get('/getDiscover/updateLikeSong/' + id, data => {
            var a = data - 1
            $('#like-song' + a).html(data)
        })

    }
    render() {
        const showPlayer = this.state.isCheck ? <Player
            Name={this.state.TenMP3}
            NameSinger={this.state.TenCaSi}
            LinkMP3={this.state.LinkMP3}
            ImagePlayer={this.state.ImagePlayer}
            ClickTrack={this.state.ClickTrack}

        /> : ""
        const showNameHotPage = this.props.idHotPage == 1 ? "Top 10 Songs" : "Top 10 Discovers"
        const showBanner = this.props.idHotPage == 1 ? <Banner
            Name="Top 10 Songs"
            ButtonEvent="Share"
        /> : <Banner
                Name="Top 10 Discover"
                ButtonEvent="Share"
            />

        const showContent = this.props.idHotPage == 1 ?

            <ul>
                {this.state.mang.map((e, i) => (
                    <li className="list-songs" key={e.Id}
                        onClick={() => this.onClickTrack(
                            e.Id, e.Name, e.Link, e.Image
                        )}>
                        <div className="so-thu-tu">
                            <h4 className="play-button">{i + 1}</h4>
                        </div>
                        <div className="hinh-bai-hat">
                            <img src={e.Image} className="img hinh-bh"></img>
                        </div>
                        <div className="ten-bai-hat">
                            <h4><b>{e.Name}</b></h4>
                        </div>
                        <div className="luot-nghe">
                            <h4 className="fa fa-thumbs-up" id={'like-song' + e.Like} aria-hidden="true" onClick={() => this.updateLikeSong(e.Id)}> {e.Like}</h4>
                        </div>
                    </li>
                ))}
            </ul>
            :
            <div>
                {this.state.mang.map((e) => (
                    <div className="col-sm-4">
                        <OneDiscover
                            NameDiscover={e.NameD}
                            IdD={e.IdD}
                            key={e.IdD}
                            playOrInfo="Play Now"
                            Image={e.ImageD}
                        />
                    </div>
                ))}
            </div>

        return (
            <div>
                {showBanner}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-popular-artists text-center">
                                <h2>{showNameHotPage}</h2>
                                <p>Based On Artists Everyone Listened</p>
                            </div>
                            <hr />
                        </div>
                        <div className="col-sm-8">
                            {showContent}
                        </div>
                        <div className="col-sm-4">
                            <div className="show-random-Discover">
                                <div className="title-iMusik-Charts">
                                    <p>iMusik Charts</p>
                                </div>
                                <div className="show-Charts col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="area">
                                            <a href="/hot/1">
                                                <div className="mask">
                                                    <div className="vertical-align">
                                                        <i className="fa fa-play-circle"></i>
                                                        <h4 style={styles.h4}>Top 10 Songs</h4>
                                                    </div>
                                                </div>
                                                <img src="images/banner/songs.jpg" alt="" className="img-responsive" width="100%" />
                                                <span className="new-song">Top 10 Songs</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12" style={{marginTop: 20}}>
                                        <div className="area">
                                            <a href="/hot/2">
                                                <div className="mask">
                                                    <div className="vertical-align">
                                                        <i className="fa fa-play-circle"></i>
                                                        <h4 style={styles.h4}>Top 10 Discovers</h4>
                                                    </div>
                                                </div>
                                                <img src="images/banner/discover.jpg" alt="" className="img-responsive" height="50%" />
                                                <span className="new-song">Top 10 Discovers</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showPlayer}
            </div>
        )
    }
}
const styles = {
    h2: {
        marginTop: 0,
    },
    infoDiscover: {
        color: '#ffffff',
    },
    colorBg: {
        background: "#0366d6",
        position: "relative",
        paddingTop: 50,
        marginBottom: 20,
        paddingBottom: 30,
        backgroundImage: 'url(https://goo.gl/xbvqOA)',
    },
}