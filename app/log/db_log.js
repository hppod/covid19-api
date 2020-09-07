const { Log } = require('./../models')

const insertLogInDb = async data => {
    const result = await Log.create(data)
    return await result
}

module.exports = { insertLogInDb }