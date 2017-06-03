import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, Switch, hashHistory } from 'react-router-dom';
import DangNhap from "../../api/Login"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daDB: false
        }
    }
    onsubmit(e) {
        e.preventDefault()
        const { txtEmail, txtPass } = this.refs
        DangNhap(txtEmail.value, txtPass.value, text => {
            if (text === 'THANHCONG') {
                this.setState({
                    daDB: true
                })
                console.log(this.state.daDB)
            } else {
                this.setState({
                    daDB: false
                })
                console.log(this.state.daDB)
            }
        })
    }
    signup(e){
        e.preventDefault()
        alert('Error: E10')
    }
    render() {
        const showHelloUser = !this.state.daDB ?
            <div className="container  ct-login" style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-center" style={styles.login}>Login</h1>
                    </div>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form method="post" onSubmit={this.onsubmit.bind(this)}>
                            <input type="email" ref="txtEmail" placeholder="email: sonhoai272@gmail.com" style={styles.input} />
                            <br />
                            <br />
                            <input type="text" ref="txtPass" placeholder="pass: 123" style={styles.input} />
                            <br />
                            <br />
                            <button type="submit" style={styles.button}>Login</button>
                        </form >
                    </div>
                    <div className="col-sm-12 text-center" style={styles.account}>
                        <p>No account? <a href ="" onClick={this.signup.bind(this)}>Create Account!</a></p>
                    </div>
                    <div className="col-sm-2 col-sm-offset-5 col-xs-6 col-xs-offset-3">
                        <span className="pull-left"><a href="">Terms of Use</a></span>
                        <span className="pull-right"><a href="">Privacy</a></span>
                    </div>
                    <div className="col-sm-12 text-center" style={styles.imusik}>
                        <p>iMusik</p>
                    </div>
                </div>
            </div>
            :
            <div className="container-fluid say-hello" style={{marginTop: 100}}>
                <div className="row">
                    <div className="col-sm-12 text-center" style={styles.welcome}>
                        <h1 style={{ fontSize: 100, paddingTop: 100 }}>Hello!</h1>
                        <h3 style={{ paddingTop: 20 }}>Welcome to <b>iMusik</b></h3>
                    </div>
                    <div className="col-sm-12 text-center" style={{ paddingTop: 50 }}>
                        <h5>Goto <a href="/" style={{ color: '#FFDB4C' }}>iMusik's Home Page</a></h5>
                    </div>
                </div>
            </div>
            ;
        return (

            <div>
                {showHelloUser}
            </div>

        )
    }
}
const styles = {
    input: {
        border: '1px solid #eee',
        height: '30px',
        width: '100%',
        padding: '5px',
        textAlign: 'center'
    },
    button: {
        border: '1px solid #eee',
        padding: '4px',
        width: '100%',
        backgroundColor: '#08f',
        color: 'white',
    },
    login: {
        margin: 50,
    },
    account: {
        marginTop: 50,
        marginBottom: 20,
    },
    imusik: {
        marginTop: 50,
        marginBottom: 50,
        color: '#898C90',
        fontSize: 12,
    }
}