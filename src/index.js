const express = require('express');
const app = express();
const metricsController = require('./controllers/metrics');
const visualizationController = require('./controllers/visualization');
app.use(express.json());
app.get('/metrics', metricsController.getMetrics);
app.get('/visualization', visualizationController.getVisualizationData);
app.listen(3000, () => console.log('Server listening on port 3000'))