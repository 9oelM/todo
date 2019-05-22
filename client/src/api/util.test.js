import { SimpleFetch } from './util'

describe('SimpleFetch', () => {
    const confusingUrl = 'https://test.url/'
    const simpleFetch = new SimpleFetch(confusingUrl)

    it('removes a dangling / of URL at the end', () =>
        expect(simpleFetch.baseUrl.substr(-1)).not.toBe('/'))
})
