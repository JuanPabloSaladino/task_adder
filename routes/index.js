module.exports = (app) => {
    let entries = [];
    app.locals.entries = entries;

    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Home'
        });
    });

    app.get('/new-entry', (req, res) => {
        res.render('new-entry.ejs', {
            title: 'New entry'
        });
    });

    app.post('/new-entry', (req, res) => {
        if (!req.body.title || !req.body.body) {
            res.send(400).send('Entries must have a title and a body.');
        }
        let newEntry = {
            title: req.body.title,
            description: req.body.body,
            published: new Date()
        };

        entries.push(newEntry);

        res.redirect('/');
    });

};