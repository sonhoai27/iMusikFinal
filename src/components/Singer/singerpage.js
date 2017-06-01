import React, { Component } from "react"
import Banner from "../header/banner"
import OneDiscover from "../Discover/OneDiscover"
import getOneSinger from "../../api/getOneSinger"
import getSongOfSinger from "../../api/getSongOfSinger"
import Player from "../Player/player"
import LayDiscoverOfSinger from "../../api/LayDiscoverOfSinger"
import updateLikeSong from "../../api/updateLikeOfSong"

export default class SingerPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: [],
            mangBH: [],
            Like: 0,
            ImagePlayer: "",
            LinkMP3: "",
            IDMP3: 0,
            TenMP3: "",
            TenCaSi: "",
            isCheck: false,
            ClickTrack: true,
            mangDiscover: []
        }
    }

    componentDidMount() {
        getOneSinger(this.props.idSinger)
            .then(arr => {
                this.setState({
                    mang: arr,
                })

                arr.map((e, i) => (
                    this.setState({
                        Like: e.LikeS,
                        TenCaSi: e.NameS
                    })
                ))
            })
        getSongOfSinger(this.props.idSinger)
            .then(kq => {
                this.setState({
                    mangBH: kq,
                })
            })
        LayDiscoverOfSinger(this.props.idSinger)
            .then(result => {
                this.setState({
                    mangDiscover: result
                })
                console.log(result)
            })
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
            $('#like-song' + data - 1).html(data)
        })

    }

    render() {
        const renderSong = this.state.mangBH != "" ?
            <ul>
                {this.state.mangBH.map((e, i) => (
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
            : <h3 className="text-center">Nothing</h3>
        const showPlayer = this.state.isCheck ? <Player
            Name={this.state.TenMP3}
            NameSinger={this.state.TenCaSi}
            LinkMP3={this.state.LinkMP3}
            ImagePlayer={this.state.ImagePlayer}
            ClickTrack={this.state.ClickTrack}

        /> : ""
        return (
            <div>
                <div className="container-fluid" style={styles.colorBg}>
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                {this.state.mang.map(e => (
                                    <div>
                                        <div className="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3" style={styles.shadow}>
                                            <OneDiscover
                                                NameDiscover=""
                                                NameSinger=""
                                                Image={e.ImageS}
                                                IdS={e.IdS}
                                                IdD=""
                                                key=""
                                                playOrInfo=""
                                            />
                                        </div>
                                        <div className="col-sm-9 col-xs-12 color-header">
                                            <div style={styles.infoDiscover}>
                                                <div className="InfoDiscover">
                                                    <h1 style={styles.h2}>{e.NameS}</h1>
                                                </div>
                                                <span className="thong-tin" style={{ color: 'white' }}>
                                                    {e.DescS}
                                                </span>
                                                <div className="buttonPlay">
                                                    <i className="fa fa-thumbs-up" aria-hidden="true">{this.state.Like}</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 ccol-xs-12">
                            <div>
                                <div className="title-song-singer text-center">
                                    <h2>Top Songs By {this.state.TenCaSi}</h2>
                                    <hr />
                                </div>
                                <div className="content-song">
                                    {renderSong}
                                </div>
                            </div>
                            <div className="Discover">
                                <h2 className=" text-center">Top Discovers By {this.state.TenCaSi}</h2>
                                {this.state.mangDiscover.map(e => (
                                    <div className="col-xs-6 col-sm-4" key={e.IdD} style={{marginTop: 26}}>
                                        <OneDiscover
                                            NameDiscover={e.NameD}
                                            NameSinger=""
                                            Image={e.ImageD}
                                            IdS={e.idSingerD}
                                            IdD={e.IdD}
                                            key=""
                                            playOrInfo="Play"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <h2 className="text-center">Recent Posts</h2>
                            <div className="recent-post">
                                <h5 className="title-recent-post">By {this.state.TenCaSi}</h5>
                                <hr />
                                <div className="info-last-post">
                                    <div className="image-post">
                                        <img src="https://goo.gl/K4FxBm" alt="" className="img img-responsive" />
                                    </div>
                                    <div className="info-post">
                                        <p style={{ fontSize: 16, marginBottom: 0 }}>Love You More</p>
                                        <p>Lorde - Taylor Swift</p>
                                    </div>
                                </div>
                                <hr />
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