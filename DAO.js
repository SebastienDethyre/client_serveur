export class DAO {
    #database
    constructor(database){
        this.#database = database
    }
    
    read(table, value = "*", id = undefined){
        return new Promise((resolve, reject)=>{
            const sql_request = id === undefined ? `SELECT ${value} FROM ${table}` : `SELECT ${value} FROM ${table} WHERE id= ${id}`
            this.#database.all(sql_request, (error,rows) => {
                if (error) {
                    console.log(error)
                } 
                else {
                    if (rows.length === 0) {
                        reject('Empty database')
                    } 
                    else {
                        resolve(rows)
                    }
                }
            })
        }) 
    }

    getDbCount(table){
        return new Promise((resolve, reject)=>{
            this.#database.all(`SELECT COUNT(*) AS count FROM ${table}`, (error,rows) => {
                if (error) {
                    console.log(error)
                } 
                else {
                    if (rows.length === 0) {
                        reject('Empty database')
                    } 
                    else {
                        resolve(rows)
                    }
                }
            })
        })
    }

    getColumnList(table){
        return new Promise((resolve, reject)=> {
            this.#database.all(`SELECT name FROM pragma_table_info('${table}') ORDER BY cid`, (error,rows) => {
                if (error) {
                    console.log(error)
                } 
                else {
                    if (rows.length === 0) {
                        reject('Empty database')
                    }
                    else {
                        let list =[]
                        rows.forEach(element => {
                            list.push(element.name)
                        });
                        resolve(list)
                    }
                }
            })
        })
    }
    
    create(database, table, request){
        return new Promise((resolve, reject)=> {
            let column_list 
            const {body} = request
            
            this.getColumnList(table).then((result)=>{
                column_list = result
                this.getDbCount(table).then((result)=>{
                    const new_entry = {
                        id : result[0].count + 1,
                        ...body
                    }
                    
                    let sql_request = `INSERT INTO ${table} (${column_list}) VALUES ` + "(?" ;
                    for (let i = 0 ; i < column_list.length -1 ; ++i) sql_request = sql_request + ',?';
                    sql_request = sql_request + ")";
                    database.run(sql_request, Object.values(new_entry), function (error) {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(`Rows inserted ${this.changes}`);
                    });
                })
            })  
        })
    }

    update(database, table, id, request, put = false){
        return new Promise((resolve, reject)=> { 
            const {body} = request;
            const columns = Object.keys(body)
            let set= `${columns[0]} = ?, `
            for (let i = 1 ; i < columns.length  ; ++i) set += `${columns[i]} = ?, `
            set = set.slice(0, -2)
            
            const where = `WHERE id= ${id}`

            let sql_request = `UPDATE ${table} SET ${set} ${where}`     

            if (put === true) {
                this.getColumnList(table).then((result)=>{
                    if(result.length - 1 !== columns.length) reject("Not enough arguments");
                    else {
                        database.run(sql_request, Object.values(body), function(error) {
                            if (error) {
                                reject(error.message);
                            }
                            resolve(`Rows changed ${this.changes}`);
                        });
                    }
                }, reason => console.log(reason))
            }
            else {              
                database.run(sql_request, Object.values(body), function(error) {
                    if (error) {
                        reject(error.message);
                    }
                    resolve(`Rows changed ${this.changes}`);
                });
            }
        })
    }

    delete(database, table, id){
        return new Promise((resolve, reject)=> { 
            let sql = `DELETE FROM ${table} WHERE id= ` + id;               
            console.log(sql)
            database.run(sql,function(error) {
                if (error) {
                    reject(error.message);
                }
                resolve(`Rows deleted ${this.changes}`); 
            });
        })
    }
}
