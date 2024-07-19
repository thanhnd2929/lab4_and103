const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser'); // sửa từ bodyPareser thành bodyParser

const app44 = express();

app44.use(bodyParser.urlencoded({ extended: true }));
app44.use(bodyParser.json());

const accessTokenSecret = '123456';
const refreshTokenSecret = '123456';

const users = [
    { id: 1, username: 'user123', password: 'password' }
];

function generateAccessToken(user) { // sửa tên hàm
    return jwt.sign(user, accessTokenSecret, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
    return jwt.sign(user, refreshTokenSecret, { expiresIn: '7d' });
}

app44.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    const user = users.find((u) => {
        return u.username === username && u.password === password; // sửa điều kiện tìm kiếm
    });

    if (!user) {
        console.log('user, pass khong dung');
        return res.status(401).json({ message: 'Username or password incorrect' }); // thêm response khi không tìm thấy user
    }

    const accessToken = generateAccessToken({ id: user.id, username: user.username });
    const refreshToken = generateRefreshToken({ id: user.id, username: user.username });

    res.json({ accessToken, refreshToken });
    console.log('AccessToken', accessToken); // sửa từ AcceessToken thành AccessToken
    console.log('RefreshToken', refreshToken);
});

app44.listen(3004, () => {
    console.log('server chay cong 3004');
});
