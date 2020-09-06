const got = require('got')

let resReturn

const fetchDataAPI = async (URL, limited, isLast, pageSize = 6000) => {
    console.log(`Requisitando dados: ${URL}`)

    try {

        const searchParams = new URLSearchParams([['is_last', isLast], ['page_size', pageSize]])

        let { body } = await got(URL, { searchParams, responseType: 'json' })

        if (body['results'] == undefined) {
            const seconds = body['available_in'].charAt(0) * 1000
            helpers.setMyTimeout(seconds)
            await fetchDataAPI(URL)
        }

        if (!limited) {
            resReturn = {
                nextUrl: body['next'],
                data: body['results'],
                count: Math.ceil(body['count'] / 1000)
            }
            return resReturn
        }

        return body['results'][0]['date']
    } catch (e) {
        console.log(e)
    }

}

module.exports = { fetchDataAPI }