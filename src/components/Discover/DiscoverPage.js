import React, { Component } from 'react'
import MenuBar from "../header/nav-menu"
import Banner from "../header/banner"
import Player from "../Player/player"
import getOneDiscover from "../../api/getOneDiscover"
import OneDiscover from "./OneDiscover"
import GetAllSongOfDiscover from "../../api/getAllSongOfDiscover"
import updateLikeSong from '../../api/updateLikeOfSong'

export default class DiscoverPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: [],
            arrSong: [],
            Hinh: "",
            ImagePlayer: "",
            LinkMP3: "",
            IDMP3: 0,
            TenMP3: "",
            TenCaSi: "",
            isCheck: false,
            ClickTrack: true,
            Like: 0,
        }
    }
    componentDidMount() {
        getOneDiscover(this.props.idDis)
            .then(arr => {
                this.setState({
                    mang: arr,
                })
                arr.map((e, i) => (
                    this.setState({
                        Like: e.LikeD
                    })
                ))
            })
            .catch(err => console.log(err))

        GetAllSongOfDiscover(this.props.idDis)
            .then(array => {
                this.setState({
                    arrSong: array,
                })
                console.log(array)
            })
            .catch(err => console.log(err))
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
        $.get('/api/updateLikeSong/' + id, data => {
            var a = data - 1
            $('#like-song' + id).html(data)
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
        return (
            <div>
                <div className="container-fluid" style={styles.colorBg}>
                    <div className="row">
                        <div className="container" style={{marginTop: 80}}>
                            <div className="row">
                                <div className="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3" style={styles.shadow}>
                                    {this.state.mang.map(e =>
                                        (
                                            <OneDiscover NameDiscover=""
                                                NameSinger=""
                                                Image={e.ImageD}
                                                IdS={e.IdS}
                                                key={e.IdD}
                                                IdD=""
                                                playOrInfo={e.NameD}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="col-sm-9 col-xs-12 color-header">
                                    {this.state.mang.map(e => (
                                        <div key={e.IdD} style={styles.infoDiscover}>
                                            <div className="InfoDiscover">
                                                <h1 style={styles.h2}>{e.NameD}</h1>
                                                <h4>{e.NameS}</h4>
                                            </div>
                                            <h5 className="thong-tin">
                                                The most Albums in iMusik.
                                        </h5>
                                            <div className="buttonPlay">
                                                <i className="fa fa-thumbs-up" aria-hidden="true">{this.state.Like}</i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginBottom: 100 }}>
                    <div className="row">
                        <div className="col-sm-7">
                            <ul>
                                {this.state.arrSong.map((e, i) => (
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
                                            <p>{e.NameS}</p>
                                        </div>
                                        <div className="luot-nghe">
                                            <h4 className="fa fa-thumbs-up" id={'like-song' + e.Id} aria-hidden="true" onClick={() =>( this.updateLikeSong(e.Id))}> {e.Like}</h4>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <div className="about-Discover">
                                <div className="title-iMusik-Charts">
                                    <p>About Album</p>
                                </div>
                                <div className="info-discover">
                                    <p>
                                        The Fame Monster là một loại đĩa
                                        mở rộng thứ hai của nữ ca sĩ-nhạc
                                        sĩ người Mỹ Lady Gaga phát hành vào ngày
                                        18 tháng 11 năm 2009.

                                        "Bad Romance" (tạm dịch: "Ái tình nhơ nhuốc")
                                        là một bài hát của nữ ca sĩ-nhạc sĩ người Mỹ Lady Gaga. 
                                        Ca khúc được phát hành dưới dạng đĩa đơn đầu tiên trích từ đĩa
                                        mở rộng thứ ba của cô, The Fame Monster (2009). Được viết bởi Lady Gaga 
                                        và sản xuất bởi RedOne, bài hát được lấy cảm hứng từ nỗi sợ hãi của cô về...
                                    </p>
                                </div>
                            </div>
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
                                                    <h4 style={styles.h4}>Top 10 New Songs</h4>
                                                </div>
                                            </div>
                                            <img src="images/banner/songs.jpg" alt="" className="img-responsive" width="100%"/>
                                            <span className="new-song">Top 10 New Songs</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12" style={{marginTop: 20}}>
                                        <div className="area">
                                            <a href="/hot/2">
                                            <div className="mask">
                                                <div className="vertical-align">
                                                    <i className="fa fa-play-circle"></i>
                                                    <h4 style={styles.h4}>Top 10 Albums</h4>
                                                </div>
                                            </div>
                                            <img src="images/banner/discover.jpg" alt="" className="img-responsive" height="50%"/>
                                            <span className="new-song">Top 10 Albums</span>
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