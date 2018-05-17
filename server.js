const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000

const app = next({ port })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.get('/podcast/:id', (req, res) => {
      const actualPage = '/podcast'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
