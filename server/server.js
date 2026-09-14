

import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './configs/db.js';

import dns from 'dns'
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogroutes.js';


// dns.setServers([
//     '1.1.1.1',
//     '8.8.8.8'
// ])

const app=express();

 connectDb()

//middleware
app.use(cors({
    credentials: true
}))
app.use(express.json())



//routes
app.get('/',(req,res)=>res.send("Api is not working"))
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)


const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('run ' + PORT)
})

export default app;

