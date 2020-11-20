const middleWare = (req, res, next) => {
	next();
}; 

const middleWare2 = (req, res, next) => {
	next();
}; 

app.get('/multer', middleWare, middleWare2, (req, res, next) => {
	res.render('multer/write.pug');
})