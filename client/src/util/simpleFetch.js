import keyMirror from 'keymirror'
import { toast } from 'react-toastify'

/* global fetch */

const METHODS = keyMirror({
    GET: null,
    PUT: null,
    POST: null,
    DELETE: null,
})

const generateHTTPMethod = async (baseUrl, subUrl, sendOption, onError) => {
    if (sendOption.body) {
        // NOTE: not yet stringified with JSON
        if (typeof body !== 'string') {
            sendOption.body = JSON.stringify(sendOption.body)
        }
    }
    return await fetch(`${baseUrl}/${subUrl}`, {
        ...sendOption,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
            onError()
        })
}

class SimpleFetch {
    constructor(baseUrl) {
        // NOTE: remove / at the end to avoid confusion
        if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1)
        this.baseUrl = baseUrl
    }

    getMethod = async (subUrl, onError) =>
        await generateHTTPMethod(
            this.baseUrl,
            subUrl,
            {
                method: METHODS.GET,
            },
            onError
        )

    putMethod = async (subUrl, body, onError) =>
        await generateHTTPMethod(
            this.baseUrl,
            subUrl,
            {
                method: METHODS.PUT,
                body,
            },
            onError
        )

    postMethod = async (subUrl, body, onError) =>
        await generateHTTPMethod(
            this.baseUrl,
            subUrl,
            {
                method: METHODS.POST,
                body,
            },
            onError
        )

    deleteMethod = async (subUrl, onError) =>
        await generateHTTPMethod(
            this.baseUrl,
            subUrl,
            {
                method: METHODS.DELETE,
            },
            onError
        )
}

export { SimpleFetch }
