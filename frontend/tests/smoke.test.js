import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

let server
let baseUrl

before(async () => {
  server = await createServer({
    root: fileURLToPath(new URL('../', import.meta.url)),
    logLevel: 'error',
    server: {
      host: '127.0.0.1',
      port: 0,
    },
  })
  await server.listen()

  const address = server.httpServer.address()
  baseUrl = `http://127.0.0.1:${address.port}`
})

after(async () => {
  await server?.close()
})

test('frontend application is up and responds', async () => {
  const response = await fetch(`${baseUrl}/`)

  assert.equal(response.status, 200)
  assert.match(await response.text(), /<div id="root"><\/div>/)
})
