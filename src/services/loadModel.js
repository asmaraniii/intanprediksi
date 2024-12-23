const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/lotso1/submissions-model/model.json');
}
module.exports = loadModel;