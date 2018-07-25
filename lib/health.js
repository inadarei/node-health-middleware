module.exports = function(opts) {

  const healthURI = require('config').uri;

  return async (req, res, next) => {

    const requestPath = req.originalUrl;

    if (requestPath === healthURI) {
      const response = await healthResponse(opts);
      // console.dir(response);
      res.set('Content-Type', 'application/health+json');
      return res.status(200).send(response);
    } else {
      return next();
    }
  };
};

async function healthResponse(opts) {
  return {
    status: "pass"
  };
}