import React from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

const Hot = () => (
    <div className="hot-trending">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-hot-trending text-center">
                            <h2>Charts</h2>
                            <p>Based On Artists Everyone Listened</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="area">
                            <a href to="/hot/1">
                            <div className="mask">
                                <div className="vertical-align">
                                    <i className="fa fa-play-circle"></i>
                                    <p>Play Now</p>
                                    <h4 style={styles.h4}>Top 10 Songs</h4>
                                </div>
                            </div>
                            <img src="images/banner/songs.jpg" alt="" className="img-responsive" width="100%"/>
                            <span className="new-song">Top 10 Songs</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{marginTop: 20}}>
                        <div className="area">
                            <a href="/hot/2">
                            <div className="mask">
                                <div className="vertical-align">
                                    <i className="fa fa-play-circle"></i>
                                    <p>Play Now</p>
                                    <h4 style={styles.h4}>Top 10 Discovers</h4>
                                </div>
                            </div>
                            <img src="images/banner/discover.jpg" alt="" className="img-responsive" height="50%"/>
                            <span className="new-song">Top 10 Discovers</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)

const styles = {
    h4: {
        color: 'white',
    },
}

export default Hot