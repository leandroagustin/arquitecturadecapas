const { msjDAO } = require('../containers/index')
let instanceMsjDaos = []

class MensajeDaos {
    constructor() {
        this.value = Math.random()
    }

    //SINGLETON
    static getInstance() {
        if (!instanceMsjDaos) {
            instanceMsjDaos = new MensajeDaos()
        }
        return instanceMsjDaos
    }


    async getData() {
        let data = await msjDAO.getMensajes()
        console.log(data)
    }
    async saveData(dataObj) {
        let data = await msjDAO.save(dataObj)
        console.log(data)
    }
}

module.exports = MensajeDaos;