import express from 'express'
// import { employee, principal } from './data.js'

//שעורי בית שעור 1  
const app = express()

app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('HELLO SARI!!!❤️❤️❤️❤️❤️❤️❤️❤️❤️')
})

//שעורי בית שעור 2
// app.get('/all', (req, res) => {
//     res.send({
//         employee,
//         principal
//     })
// })

// app.get('/employee/id/:id', (req, res) => {
//     const { id } = req.params

//     let i = employee.find(e => e.id == id)
//     if (!i) {
//         return res.send(`employee ${id} is not found`)
//     }
//     return res.send(i)
// })

// //שעורי בית שעור 3
// app.post('/add', (req, res) => {
//     const { id, newId } = req.query;
//     let a = employee.find(x => x.id == id)
    
//     if (!a) {
//         return res.status(400).send({ error: `Employee with id ${id} not found!` })
//     }

//     a.id = newId;
//     return res.status(200).send(employee)
// })

// app.get('/add/:id/:newId', (req, res) => {
//     const { id, newId } = req.params;
//     let a = employee.find(x => x.id == id)
    
//     if (!a) {
//         return res.status(400).send({ error: `Employee with id ${id} not found!` })
//     }

//     a.id = newId;
//     return res.status(200).send(employee)
// })

// app.get('/ep/:eId/:pId', (req, res) => {
//     const { eId, pId } = req.params;
//     let e = employee.find(x => x.id ==eId )
    
//     if (!e) {
//         return res.status(400).send({ error: `Employee with id ${eId} not found!` })
//     }

//     let p = principal.find(x => x.id == pId)
//     if (!p) {
//         return res.status(400).send({ error: `Principal with id ${pId} not found!` })
//     }

//     return res.send("very good")
// })

// app.delete('/delete/:eId/:pId', (req, res) => {
//     const { eId, pId } = req.params;
//     let e = employee.findIndex(x => x.id ==eId )    
//     if (e==-1) {
//         return res.status(400).send({ error: `Employee with id ${eId} not found!` })
//     }

//     let p = principal.find(x => x.id == pId)
//     if (!p) {
//         return res.status(400).send({ error: `Principal with id ${pId} not found!` })
//     }
//     employee.splice(e,1)
//     return res.status(200).send(employee)
// })


const port = 4321
app.listen(port, () => {
    console.log(`my app is running on http://localhost:${port}`)
})
