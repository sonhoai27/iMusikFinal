import React, { Component } from 'react'
import getHotSinger from "../../api/getHotSinger"
import OneSinger from "./oneSinger"

export default class SingerRandom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mang: []
        }
    }

    componentDidMount() {
        getHotSinger()
            .then(arr => {
                this.setState({
                    mang: arr
                })
            })
    }
    render() {
        const link = "/singer/"
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-popular-artists text-center">
                            <h2>Popular Artists You May Like</h2>
                            <p>Based On Artists Everyone Listened</p>
                        </div>
                        <hr />
                    </div>
                    {this.state.mang.map((e) => (
                        <div className="col-sm-4 col-md-3 col-xs-6" key={e.IdS}>
                            <OneSinger
                                NameS = {e.NameS}
                                ImageS = {e.ImageS}
                                IdS = {e.IdS}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}