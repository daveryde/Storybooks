module.exports = {
    ensureAuthenticated: function(req, res, next){
        if(req.isAuthenticated()){
            //console.log('Authenticated');
            return next();
        }
        //console.log('Not Authenticated');
        req.flash('error_msg', 'Please Log Back In');
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