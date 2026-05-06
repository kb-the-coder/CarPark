import mongoose from 'mongoose'

const db_conn = async()=>{
    try {
        const db_url = process.env.MONGO_URL;
        const conn = await mongoose.connect(db_url)
        conn && console.log(`Database Connected Running http://${conn.connection.host}:${conn.connection.port}`)
    } catch (error) {
        console.log(error.message)
    }
}

export default db_conn;