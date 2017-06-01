import React, {Component} from 'react'

class Banner extends Component {
    render() {
        const checkLink = (this.props.checkLink != "login") ? "/hot/2" : "/login"
        const showName = (this.props.checkLink != "login") ? this.props.ButtonEvent : "Đăng Nhập"
        return (
            <div className="container-fluid" style={styles.fixPadding}>
                <div className="row">
                    <div className="banner col-xs-12">
                        <div className="container" style={styles.fixPadding}>
                            <div className="title-banner col-xs-12 text-center">
                                <h1>{this.props.Name}</h1>
                                <p style={{color: "white"}}>{this.props.NameCap}</p>
                                 <a href={checkLink}><button className="button" style={{marginTop: 50}}>{showName}</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    fixPadding: {
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}
export default Banner