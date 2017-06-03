import React  from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
const MenuBar = () => (
    <header>
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-fixed-top ct-navbar" role="navigation">
                    <div className="navbar-header col-xs-8 col-xs-offset-2 text-center" style={styles.header}>
                         <a href="/" className="navbar-brand custom-title"><p style={styles.titleWeb}>iMusik</p></a>
                    </div>
                    {/*<div className="form-group navbar-btn col-sm-4 col-xs-6">
                        <form action="/go" method="post">
                            <input type="text" className="form-control ct-search" placeholder="Type to Search..."></input>
                        </form>
                    </div>*/}
                    <div className="navbar-header col-xs-1 pull-right" style={styles.headerIconUser}>
                        <a className="pull-right text-right">
                            <img src="https://maxcdn.icons8.com/iOS7/PNG/32/Very_Basic/search-32.png" alt="avatar" className="img img-resposive" style={styles.iconUser}/>
                        </a>
                    </div>                        
                </nav>
            </div>
        </div>
    </header>
)

const styles = {
    header: {
        paddingLeft: 0,
    },
    titleWeb: {
        fontStyle: 'bold',
        color: "#0366d6",
        fontSize: 30,
        textAlign: 'center'
    },
    inputSearch: {
        position: 'relative', 
    },
    headerIconUser: {
        paddingRight: 20,
        paddingTop: 20,
        display: 'none'
    },
    iconUser: {
        width: 32,
        height: 32
    }
}
export default MenuBar