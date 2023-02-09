import { Tuple } from "./Tuple.js"
export class DAO {
    #id
    #database
    constructor(database){
        this.#database = database
        this.rowz = []
    }
    
    read(value, table){
        return new Promise( (resolve, reject)=>{
            this.#database.all(`SELECT ${value} FROM ${table}`,function (err, rows) {
                let output = []
                if (err) {
                console.log(err)
                } 
                else {
                if (rows.length === 0) {
                    // response.send('Empty database')
                    reject('Empty database')
                } 
                else {
                    // response.send(rows)
                //  console.log(rows) 
                    resolve(rows)
                // this.rowz.push(rows )
                }
            
                }
            })
        })
    }

    
    // read2(request, response){
    //     var IdValue = request.body.id
    //     if (IdValue !== '' && IdValue !== undefined) {
    //         db.each('SELECT id FROM MOCK_DATA WHERE id=? UNION ALL SELECT NULL LIMIT 1', IdValue, (err, rows) => {
    //             if (err) {
    //                 console.log(err)
    //             }
    //             if (row.id === null) {
    //                 res.send('You should specify an ID')
    //             }
    //             else {
    //                 rows.forEach(function (row) {
    //                     output.push({ id: row.id, first_name: row.first_name, last_name: row.last_name })
    //                 })
    //                 response.send(output)
    //             }
    //         })
    //     }
    // }




    create(columns){
     
          return new Promise( (resolve, reject)=>{
        //     // let id = req.body.id
        //     // let first_name = req.body.first_name
        //     // let last_name = req.body.last_name
        //     // let email = req.body.email
        //     // let gender = req.body.gender
        //     // let ip_adress = req.body.ip_adress
            let request = 'INSERT INTO MOCK_DATA VALUES (?';
        //     ​
    
             for (const column of columns) {
               request = request + ',?';
     }
    
            request = request + ")";
    
          resolve(request)
        })
            // if ((id !== '' && id !== undefined)) {
            //     this.#database.each('SELECT id FROM MOCK_DATA WHERE id=? UNION ALL SELECT NULL LIMIT 1', id, function (err, row) {
            //         if (err) {
            //             console.log(err)
            //         }
            //         if (row.id === null) {
            //             this.#database.run('INSERT INTO MOCK_DATA VALUES (?, ?, ?, ?, ?, ?) ', id, first_name, last_name, email, gender, ip_adress,function (err, row) {
            //                 if (err) {
            //                     console.log(err) 
            //                 } 
            //                 else {
            //                     res.send('Success')
            //                 }
            //             })
            //         } 
            //         else {
            //             res.send('ID already exists')
            //         }
            //     })
            // } 
            // else {
            //     res.send('Unable to add data. Check syntax.')
            // }
        }
    
    





    // create(req, res){
    //     var id = req.body.id
    //     var first_name = req.body.first_name
    //     var last_name = req.body.last_name
    //     var email = req.body.email
    //     var gender = req.body.gender
    //     var ip_adress = req.body.ip_adress
    //     if ((id !== '' && id !== undefined)) {
    //         this.#database.each('SELECT id FROM MOCK_DATA WHERE id=? UNION ALL SELECT NULL LIMIT 1', id, function (err, row) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         if (row.id === null) {
    //             this.#database.run('INSERT INTO MOCK_DATA VALUES (?, ?, ?, ?, ?, ?) ', id, first_name, last_name, email, gender, ip_adress,function (err, row) {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 res.send('Success')
    //             }
    //             })
    //         } else {
    //             res.send('ID already exists')
    //         }
    //         })
    //     } else {
    //         res.send('Unable to add data. Check syntax.')
    //     }
    // }

// app.post('/add', function (req, res) {
//     var IdValue = req.body.id
//     var FirstNameValue = req.body.first_name
//     var LastNameValue = req.body.last_name
//     var email = req.body.email
//     var gender = req.body.gender
//     var ip_adress = req.body.ip_adress
//     if ((IdValue !== '' && IdValue!== undefined)) {
//       db.each('SELECT id FROM MOCK_DATA WHERE id=? UNION ALL SELECT NULL LIMIT 1', IdValue, function (err, row) {
//         if (err) {
//           console.log(err)
//         }
//         if (row.id === null) {
//           db.run('INSERT INTO MOCK_DATA VALUES (?, ?, ?, ?, ?, ?) ', IdValue, FirstNameValue, LastNameValue, function (err, row) {
//             if (err) {
//               console.log(err)
//             } else {
//               res.send('Success')
//             }
//           })
//         } else {
//           res.send('ID already exists')
//         }
//       })
//     } else {
//       res.send('Unable to add data. Check syntax.')
//     }
//   })
  
//   app.post('/delete', function (req, res) {
//     var IdValue = req.body.id
//     if (IdValue !== '' && IdValue !== undefined) {
//       db.each('SELECT ID FROM MOCK_DATA WHERE id=? UNION ALL SELECT NULL LIMIT 1', IdValue, function (err, row) {
//         if (err) {
//           console.log(err)
//         }
//         if (row.id === null) {
//           res.send('You should specify an ID')
//         } else {
//           db.run('DELETE FROM MOCK_DATA WHERE id=?', IdValue, function (err) {
//             if (err) {
//               console.log(err)
//             } else {
//               res.send('Success')
//             }
//           })
//         }
//       })
//     } else {
//       res.send('Unable to delete data. Check syntax')
//     }
//   })
}