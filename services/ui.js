module.exports = function ({ env }) {
  function handlerUI(req, res) {
    const auth = env['mikrocms@swagger']?.auth || false;

    if (auth) {
      if (req.body.username && req.body.password) {
        if (typeof auth[req.body.username] === 'undefined' ||
          auth[req.body.username] != req.body.password) {
          res.locals.message = 'username or password incorrect';
          res.locals.username = req.body.username
          res.locals.password = req.body.password

          res.render('mikrocms@swagger/login');

          return;
        }
      } else {
        res.render('mikrocms@swagger/login');

        return;
      }
    }

    res.locals.swaggerServers = env['mikrocms@swagger']?.servers || [];
    res.locals.swaggerURLS = env['mikrocms@swagger']?.urls || [];

    res.render('mikrocms@swagger/ui.jade');
  }

  return [
    handlerUI
  ];
};
