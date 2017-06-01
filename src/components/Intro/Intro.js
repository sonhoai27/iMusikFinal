import React, {Component} from "react"

export default class Intro extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 content-post text-center">
                        <div className="content-title">
                            <h1>Now On iMusik</h1>
                        </div>
                        <a href="/hot/1">
                        <div className="content-poster">
                            <img src ="images/banner/best song 2016.jpg" className="img img-responsive" width="100%"/>
                            
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}