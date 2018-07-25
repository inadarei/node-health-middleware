# Node Health Middleware

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

healthcheck.addCheck('cassandra', 'timeout', async() => {
    // Faking data here, for brevity
    return {
        status : 'pass',
        metricValue: 250,
        metricUnit: "ms"
    };
});

app.use(healthcheck());
```

## License

[MIT](LICENSE)

