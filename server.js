const express = require('express');

const app = express();

const router = express.Router();

const get_ip=require('./get_ip')();

router.get('/', (req, res, next) => {
  req.url='/index.html';
  next()
});

app.use(router);

app.use(express.static('./dist'));

const open=require('opn'); // 启动成功打开网页
const port=3550; // 端口号
module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return
  }
  open(`http://${get_ip}:${port}`);
  console.log(`Listening at http://${get_ip}:${port}\n`)
});
