import {Sequelize} from 'sequelize'

const db = new Sequelize("crud_app","root",'',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;