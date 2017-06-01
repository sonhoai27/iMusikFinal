const $ = require('jquery');

const dangNhap = (username, password, cb) => {
    const data = { username, password };
    $.post('https://imusik.herokuapp.com/login', data, text => {
        if (text == 'THANHCONG') return cb('THANHCONG');
        cb('THATBAI');
    });
};

export default dangNhap;