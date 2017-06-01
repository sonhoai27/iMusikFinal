import React  from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
const MenuBar = () => (
    <header>
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-default ct-navbar" role="navigation" style={{borderBottom: '1px solid #eee'}}>
                    <div className="navbar-header col-sm-4 col-xs-3" style={styles.header}>
                         <a href="/" ><a className="navbar-brand" style={styles.titleWeb}>iMusik</a></a>
                    </div>
                    <div className="form-group navbar-btn col-sm-4 col-xs-6">
                        <form action="/go" method="post">
                            <input type="text" className="form-control ct-search" placeholder="Type to Search..."></input>
                        </form>
                    </div>
                    <div className="navbar-header col-sm-4 col-xs-3 pull-right" style={styles.headerIconUser}>
                        <a className="pull-right text-right">
                            <img src="https://maxcdn.icons8.com/iOS7/PNG/50/User_Interface/user-50.png" alt="avatar" className="img img-resposive" style={styles.iconUser}/>
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
        fontSize: 26,
    },
    inputSearch: {
        position: 'relative', 
    },
    headerIconUser: {
        paddingRight: 8,
        paddingTop: 8
    },
    iconUser: {
        width: 40,
        height: 40
    }
}
export default MenuBar