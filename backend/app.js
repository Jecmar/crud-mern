import express from 'express'
import cors from 'cors'
//Conexion a la base de datos
import db from './database/db.js'
import blogRoutes from './routes/routes.js'

const app  = express()

app.use(cors())
app.use(express.json())

app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log("Conexion exitosa")
} catch (error) {
    console.log("Error en la conexion es:"+error)
}

app.get('/', (req, res) => {

})

app.listen(8000,() =>{
    console.log('Server is running in http://localhost:8000')
})