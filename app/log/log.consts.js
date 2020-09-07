const OR = {
    CS: 'Caso',
    CSF: 'CasoFull'
}

const OP = {
    C: 'Create',
    U: 'Update',
    D: 'Delete',
    G: 'Get API'
}

const MESSAGE = {
    C: '%s registros foram criados.',
    CT: '%s registros foram criados ao total.',
    U: '%s registros foram atualizados.',
    D: '%s registros foram apagados.',
    G: 'Buscando dados na API.',
    NC: 'O banco de dados está atualizado. Não foi necessário criar nenhum novo registro.'
}

module.exports = {
    OR,
    OP,
    MESSAGE
}