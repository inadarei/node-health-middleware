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

