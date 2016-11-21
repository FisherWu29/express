module.exports=function (req,res,next) {
    console.log('middleware:log do');
    next();
};