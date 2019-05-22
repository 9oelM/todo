import keyMirror from 'keymirror'

/* global fetch */

var METHODS = keyMirror({
    GET: null,
    PUT: null,
    DELETE: null,
})

class SimpleFetch {
    constructor(baseUrl) {
        // NOTE: remove / at the end to avoid confusion
        if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1)
        this.baseUrl = baseUrl
    }

    getMethod = subUrl =>
        fetch(`{this.baseUrl}/{subUrl}`, {
            method: METHODS.GET,
        })

    postMethod = (subUrl, body) =>
        fetch(`{this.baseUrl}/{subUrl}`, {
            method: METHODS.POST,
            body,
        })

    removeMethod = subUrl =>
        fetch(`{this.baseUrl}/{subUrl}`, {
            method: METHODS.DELETE,
        })
}

export { SimpleFetch }
