const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('file');
//cria a tabela
db.serialize(() => {
    //db.run("CREATE TABLE COMPANY(ID INT PRIMARY KEY     NOT NULL,NAME           TEXT    NOT NULL,AGE            INT     NOT NULL,ADDRESS        CHAR(50),SALARY         REAL);");

    

//insere dados na tabela   
db.run("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES ('3','TESTE2','1','1','1');");

//vasculha dado na tabela
    db.each("SELECT * FROM COMPANY", (err, row) => {
        console.log(row.NAME);
    });

});
