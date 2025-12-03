import express from 'express'
const app = express()

const PORT = 3000

//define a simple route
app.get('/',(req,res)=>{
  res.send('hello,express')
  })

  app.get('/twitter', (req, res) => {
    res.send('birendradotcom')
  })

  app.get('/login',(req,res) => {
    res.send('<h1>please login at bihar and nawada<h1>')
  })

  app.get('/youtube',(req,res) => {
    res.send("<h2> bihar and nawada<h2>")
  })
  app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
  })