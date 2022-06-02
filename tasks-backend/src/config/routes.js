
module.exports = app => {
    app.post('/signup', app.src.api.user.save);
    app.post('/signin', app.src.api.auth.signin)
}