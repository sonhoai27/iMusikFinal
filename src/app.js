import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MenuBar from "./components/header/nav-menu"
import $ from 'jquery'
import Banner from "./components/header/banner"
import SingerRandom from "./components/Singer/SingerRan"
import Hot from "./components/Hot/hot"
import Discover from "./components/Discover/Discover"
import Player from "./components/Player/player"
import { BrowserRouter, Route, Link, Redirect, Switch, hashHistory } from 'react-router-dom';
import DiscoverPage from "./components/Discover/DiscoverPage"
import Footer from "../src/components/footer/footer"
import HotPage from "./components/Hot/HotPage"
import SingerPage from "./components/Singer/singerpage"
import Intro from "./components/Intro/Intro"
import Login from "./components/Login/Login"
import CheckLogin from "./api/CheckLogin"

class Home extends Component {
    render() {
        return (
            <div style={{marginRight: 15}}>
                <Banner
                        Name="What is hot now?"
                        ButtonEvent="Play Top 10 Discovers"
                    />
                    <Intro />
                    <SingerRandom />
                    <Hot />
                    <Discover />
            </div>
        )
    }
}

const DefaultComponent = ({ location }) => (
    <div className="container">
        <div className="row">
            <h1 className="col-xs-12 text-center">
                KHONG TON TAI<br />TRANG: "<code>{location.pathname}</code>"
            </h1>
        </div>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
        }
    }
    componentWillMount() {
        CheckLogin(result => {
            this.setState({
                isLogin: result
            })
        })
    }
    render() {
        return (
            <BrowserRouter history={hashHistory}>
                <div>
                    <MenuBar />
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => (this.state.isLogin ? <Home /> : <Redirect to="/dangnhap" />)} />
                        <Route
                            path="/discover/:id"
                            component={childDiscoverPage}
                        />
                        <Route
                            path="/hot/:id"
                            component={childHotPage}
                        />
                        <Route
                            path="/song/:id"

                            component={childDiscoverPage}
                        />
                        <Route
                            path="/singer/:id"
                            component={childSingerPage} />
                        <Route
                            path="/timkiem/" component={childDiscoverPage} />
                        <Route
                            path="/dangnhap"
                            render={() => (this.state.isLogin ? <Redirect to="/" /> : <Login />)}
                        />
                        <Route
                            component={DefaultComponent} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const childDiscoverPage = ({ match }) => (
    <div>
        <DiscoverPage idDis={match.params.id} />
    </div>
)

const childHotPage = ({ match }) => (
    <div>
        <HotPage idHotPage={match.params.id} />
    </div>
)

const childSingerPage = ({ match }) => (
    <div>
        <SingerPage idSinger={match.params.id} />
    </div>
)
ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

//cong viec can lam, xu ly dang nhap, dang ky, them chuyen muc release new discover, sua css, sua cac api