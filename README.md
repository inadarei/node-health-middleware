# Node Health Middleware

Node health middleware is a unobtrusive module that you can easily integrate
into your API code written in Node. This module is targeting multiple frameworks, 
while currently supporting: Express.js.

While the module is extremely configurable, you can also use it out of the box,
with zero configuration. If you use default configuration, health check endpoint
will be mounted at `/health` URI path and will respond with HTTP 202 as long 
as your Node server is up. In more involved setups you can add all kinds of
custom health checks (e.g. database) and expose wide variety of metrics as
defined in the [healthcheck draft RFC](https://tools.ietf.org/html/draft-inadarei-api-health-check.html). 

## Implementation Status

- [x] Express/Connect
- [ ] Sails.js
- [ ] Restify


## Installation

```bash
> npm i -S health-middleware
```

## Usage

```javascript
const healthcheck = require('health-middleware');

// If you need/want to add custom health checker functions:
healthcheck.addCheck('cassandra', 'timeout', async() => {
    // Faking data here, for brevity
    return {
        status : 'pass',
        metricValue: 250,
        metricUnit: "ms"
    };
});

// Add middleware to your Express app:
app.use(healthcheck());
```

## License

[MIT](LICENSE)

