import React, {Component} from 'react'

export default class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="container  text-center" style={{marginBottom: 0}}>
                    <div className="row" style={{paddingTop: 100}}>
                        <div className="col-sm-4 col-xs-12">
                            <h1>iMusik</h1>
                            <p>Music's everywhere.</p>
                            <p>Version: 2.5</p>
                        </div>
                        <div className="col-sm-4 col-xs-6">
                            <h3>About</h3>
                            <a href= "/Dashboard"><p>Admin Page</p></a>
                            <p>API</p>
                            <p>Help</p>
                        </div>
                        <div className="col-sm-4 col-xs-6">
                            <h3>Contact</h3>
                            <p>Website: sonhteam.com</p>
                            <p>Email: info@sonhteam.com</p>
                            <p>Number: +84985806646</p>
                        </div>
                        <div className="col-xs-12 text-center" style={{marginTop: 100}}>
                            <p>
            Mpi Store is the precursor of iMusik 2012-2017.<br/>
            © Copyright sonH Team Limited 2011-2017. All rights reserved.<br/>Design by sonH.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}