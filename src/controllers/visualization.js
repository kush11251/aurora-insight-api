const visualizationData = () => ({ series: [{ name: 'Series 1', data: [10, 20, 30] }] });
module.exports.getVisualizationData = (req, res) => {
    res.json(visualizationData());
}