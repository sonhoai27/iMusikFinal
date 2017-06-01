const $ = require('jquery');

const CheckLogin = (cb) => {
    $.get('https://imusik.herokuapp.com/login/check', text => {
        // if (text.ROI === 'ROI') return cb(text);
        if (text === 'ROI') return cb(true);
        return cb(false);
    });
};

export default CheckLogin;