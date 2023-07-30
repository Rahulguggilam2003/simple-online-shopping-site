const{MongoClient}=require('mongodb')
const url="mongodb://localhost:27017"
const database_name="iekart"
const client=new MongoClient(url);
async function dbConnect()
{
	let result=await client.connect();
	db=result.db('iekart')
	return db.collection('products')
}
module.connect=dbConnect;
/*
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='e-comm'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();
*/
