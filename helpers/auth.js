module.exports = {
    ensureAuthenticated: function(req, res, next){
        if(req.isAuthenticated()){
            //console.log('Authenticated');
            return next();
        }
        //console.log('Not Authenticated');
        res.redirect('/');
    },
    ensureGuest: function(req, res, next){
        if(req.isAuthenticated()){
            //console.log('Authenticated');
            res.redirect('/dashboard');
        } else {
            //console.log('Not Authenticated');
            return next();
        }
    }
}