const db = require('./db_log')
const { OR, OP, MESSAGE } = require('./log.consts')

async function log(origin, operation, affectedRecords = 0) {

    let messageString = null

    if (affectedRecords > 0) {
        messageString = MESSAGE[operation].replace('%s', affectedRecords)
    } else {
        messageString = MESSAGE[operation]
    }

    const log = {
        date: Date.now(),
        message: messageString,
        origin: OR[origin],
        operation: OP[operation]
    }

    await db.insertLogInDb(log)

    return true

}

module.exports = { log }