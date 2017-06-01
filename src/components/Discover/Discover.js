import React, { Component } from 'react'
import GetDiscover from "../../api/GetDiscover"
import OneDiscover from "./OneDiscover"
import GetMoreDiscover from "../../api/GetMoreDiscover"

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            trang: 2,
        };
    }

    layThemDiscover(e) {
        e.preventDefault();
        this.setState({
            trang: this.state.trang + 1,
        })
        var soTrang = this.state.trang
        console.log(soTrang)
        GetMoreDiscover(soTrang)
            .then(kq => {
                this.setState({
                    mang: this.state.mang.concat(kq)
                })
                console.log(this.state.mang)
            })
    }

    componentDidMount() {
        GetDiscover()
            .then(arrNote => this.setState({ mang: arrNote }));
    }

    render() {
        return (
            <div className="container" style={styles.paddingBottomDiscover}>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-popular-artists text-center">
                            <h2>Discovers</h2>
                            <p>Based On Artists Everyone Listened</p>
                        </div>
                        <hr />
                    </div>
                    {this.state.mang.map(e =>
                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 video" style={styles.marinBottomOneDiscover} key={e.IdD}>
                            <OneDiscover NameDiscover={e.NameD}
                                NameSinger={e.NameS}
                                Image={e.ImageD}
                                IdS={e.IdS}
                                IdD={e.IdD}
                                key={e.IdD}
                                playOrInfo="Play Now"
                            />
                        </div>
                    )}

                    <div className="col-xs-12 text-center" style={styles.paddingTopBtn}>
                        <button onClick={this.layThemDiscover.bind(this)} className="button">Load More...</button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    paddingBottomDiscover: {
        paddingBottom: 80,
    },
    paddingTopBtn: {
        marginTop: 50,
    },
}