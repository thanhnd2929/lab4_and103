const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const upload = multer({dest: 'uploads/'})


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/gallery', (req, res) => {
    fs.readdir(path.join(__dirname, 'uploads'), (err, files) => {
        if(err) {
            console.log('loi doc file',err);
            return;
        } else {
            res.render('gallery', {images: files})
        }
    })
})


app.post('/upload', upload.single('image'), (req, res) => {
    res.redirect('/gallery')
})

app.listen( 3001, () => {
    console.log('server dang chay o cong 3001');
})

