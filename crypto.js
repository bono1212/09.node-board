require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

let pass = '1234' + process.env.BCRYPT_SALT;
// let sha512 = crypto.createHash('sha512').update(pass).digest('base64');
// let sha5122 = crypto.createHash('sha512').update(pass).digest('base64');
// console.log(sha512);
// console.log(sha5122);

const passMaker = async () => {
	const hash = await bcrypt.hash(pass, Number(process.env.BCRYPT_ROUND)); //암호하는법
	console.log(hash);
	const compare = await bcrypt.compare(pass, hash); //비교하는 법
	console.log(compare);
}
passMaker();

