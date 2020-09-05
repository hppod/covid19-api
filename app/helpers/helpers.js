function setMyTimeout(timeout) {
    console.log(`Aguardando ${timeout / 1000} segundos`)
    const f = Date.now() + timeout
    while (Date.now() < f) { 
    }
}

module.exports = { setMyTimeout }