// const { getService, saveService } = require('../services/msjServices')
const MensajeService = require('../services/msjServices')

const msjController = new MensajeService()

// para el socket.io
const emitMsjController = async () => {
    let data = await msjController.getService();
    return data;
}

const saveMsjController = async (mensaje) => {
    let data = await msjController.saveService(mensaje);
    return data;
}

module.exports = {
    emitMsjController,
    saveMsjController
}