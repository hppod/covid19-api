const got = require('got')

let resReturn

const fetchDataAPI = async (URL, limited, nextUrl, pageSize = 3000) => {
    let body
    console.log(`Requisitando dados: ${URL}`)

    try {

        if (!nextUrl) {
            const searchParams = new URLSearchParams([['is_last', true], ['page_size', pageSize]])
            body = await got(URL, { searchParams, responseType: 'json', resolveBodyOnly: true })
        } else {
            body = { body } = await got(URL, { responseType: 'json', resolveBodyOnly: true })
        }

        if (body['results'] == undefined) {
            const seconds = body['available_in'].charAt(0) * 1000
            helpers.setMyTimeout(seconds)
            await fetchDataAPI(URL)
        }

        if (!limited) {
            resReturn = {
                nextUrl: body['next'],
                data: body['results'],
                count: Math.ceil(body['count'] / pageSize)
            }
            return resReturn
        }

        return body['results'][0]['date']
    } catch (e) {
        console.log(e)
    }

}

module.exports = { fetchDataAPI }