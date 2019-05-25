import keyMirror from 'keymirror'

/* global fetch */

const METHODS = keyMirror({
    GET: null,
    PUT: null,
    POST: null,
    DELETE: null,
})

const generateHTTPMethod = async (baseUrl, subUrl, sendOption) =>
    await fetch(`${baseUrl}/${subUrl}`, {
        ...sendOption,
    }).then(response => response.json())

class SimpleFetch {
    constructor(baseUrl) {
        // NOTE: remove / at the end to avoid confusion
        if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1)
        this.baseUrl = baseUrl
    }

    getMethod = async subUrl =>
        await generateHTTPMethod(this.baseUrl, subUrl, {
            method: METHODS.GET,
        })

    putMethod = async (subUrl, body) =>
        await generateHTTPMethod(this.baseUrl, subUrl, {
            method: METHODS.PUT,
            body,
        })

    postMethod = async (subUrl, body) =>
        await generateHTTPMethod(this.baseUrl, subUrl, {
            method: METHODS.POST,
            body,
        })

    deleteMethod = async subUrl =>
        await generateHTTPMethod(this.baseUrl, subUrl, {
            method: METHODS.DELETE,
        })
}

export { SimpleFetch }
