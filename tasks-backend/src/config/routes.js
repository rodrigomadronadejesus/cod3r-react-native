
module.exports = app => {
    app.post('/signup', app.src.api.user.save);
    app.post('/signin', app.src.api.auth.signin)

    app.route('/tasks')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.tasks.getTasks)
        .post(app.src.api.tasks.save);


    app.route('/tasks/:id')
        .all(app.src.config.passport.authenticate())
        .delete(app.src.api.tasks.remove);

    app.route('/tasksToggle/:id')
        .all(app.src.config.passport.authenticate())
        .put(app.src.api.tasks.toggleTask);
}