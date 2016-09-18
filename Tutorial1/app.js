var app = require('koa')()
var router = require('koa-router')()
var routerParam = require('koa-router-param');

router.get('/test', function getColor(color) {
    this.body = "Geeting you all" + color
});

router.get('/color',colorHandler)
router.get('/car',carHandler)
router.get('/car/:carName/:vid',carHandler1)

function carHandler1(){
    this.body = this.params.vid
}

function colorHandler(){
    this.body = 'Color selected is ' + this.request.query.name
}

function carHandler(){
    this.body = 'Car selected is ' + this.request.query.name + ' & the brand is ' +  this.request.query.brand
}

app.use(router.routes())
app.listen(3000)