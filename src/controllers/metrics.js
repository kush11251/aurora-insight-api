const metrics = () => ({ cpu: 50, memory: 30 });
module.exports.getMetrics = (req, res) => {
    res.json(metrics());
}