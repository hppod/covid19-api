const db = require('./db_log')
const { OR, OP, MESSAGE } = require('./log.consts')

async function log(origin, operation, affectedRecords = 0) {
    const log = {
        date: Date.now(),
        message: await messageLog(operation, affectedRecords),
        origin: OR[origin],
        operation: OP[operation]
    }

    await db.insertLogInDb(log)
}

const messageLog = async (operation, affectedRecords) => {
    switch (operation) {
        case 'G': return MESSAGE[operation]
        case 'C': {
            if (affectedRecords > 0) {
                return MESSAGE[operation].replace('%s', affectedRecords)
            } else {
                return MESSAGE['NC']
            }
        }
        default: return MESSAGE[operation].replace('%s', affectedRecords)
    }
}

module.exports = { log }