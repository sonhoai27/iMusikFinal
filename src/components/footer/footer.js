import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container" style={{ marginBottom: 0 }}>
                    <div className="row" style={{ paddingTop: 100 }}>
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="col-sm-6 col-xs-6">
                                <h1 style={{ paddingBottom: 25 }}>
                                    <img src="images/Icon/iMusik.ico" alt="" width="10%"/>
                                     iMusik
                                </h1>
                                <p>Music's everywhere.</p>
                                <p><a href="/help/future">Version: 2.8</a></p>
                                <p><a href="/help/future">App For Android - iOS - Windows 10.</a></p>
                                <p><a href="/help/future">Terms</a></p>
                            </div>
                            <div className="col-xs-6 col-sm-6">
                                <h3 style={{ paddingBottom: 25 }}>iMusik for developers</h3>
                                <p><a href="/help/future">Blog</a></p>
                                <a href="/Dashboard"><p>Admin Page</p></a>
                                <p><a href="/help/future">API</a></p>
                                <p><a href="/help/future">Get link mp3</a></p>
                            </div>
                        </div>
                        <div className="col-sm-8 col-sm-offset-2" style={{ marginTop: 100 }}>
                            <p>
                                Mpi Store is the precursor of iMusik 2012 - 2017.<br />
                                © Copyright sonH Team Limited 2011-2017.<br/>All rights reserved.<br />Design by sonH.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}