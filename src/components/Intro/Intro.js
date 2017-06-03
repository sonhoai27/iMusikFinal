import React, {Component} from "react"

export default class Intro extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="content-post">
                        <div className="col-xs-12 content-title text-center">
                            <h1>Now On iMusik</h1>
                        </div>
                        <a href="/hot/1">
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1 content-poster">
                            <img src ="images/banner/best song 2016.jpg" className="img img-responsive" width="100%"/>
                            
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}