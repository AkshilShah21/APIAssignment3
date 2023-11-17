const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login?info=' + info);
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    })(req, res, next);
};

const getUser = (req, res) => {
    res.send({ user: req.user });
};

module.exports = {
    login,
    getUser
};
