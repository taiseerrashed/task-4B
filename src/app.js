const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "proj-2"

mongoClient.connect(connectionUrl , (error , response) => {
    if(error){
        return console.log("Error has occured")
    }
    console.log("All perfect")

    const db = response.db(dbname)

    db.collection('users').insertOne({
        name : "taiseer",
        age : 26
    }, (error , data)=>{
        if(error){
            console.log("unable to insert data")
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertOne({
        name : "Esraa",
        age : 23
    }, (error , data)=>{
        if(error){
            console.log("unable to insert data")
        }
        console.log(data.insertedId)
    })
    // // ///////////////////////////////////////////////////////////////////////

    db.collection('users').insertMany(
        [{
            name : "Abdullah",
            age: 27
        },
        {
            name : "Ahmed",
            age : 27
        },
        {
            name : "Omar",
            age : 27
        },
        {
            name : "Sara",
            age : 27
        },
        {
            name : "Mohammed",
            age : 27
        },
        {
            name : "Aya",
            age : 24
        },
        {
            name : "Mariam",
            age : 22
        },
        {
            name : "Alaa",
            age : 25
        },
        {
            name : "Reem",
            age : 30
        },
        {
            name : "Tasneem",
            age : 22
        }] , (error , data)=>{
            if(error){
                console.log("Unable to insert data")
            }
            console.log(data.insertedCount)
        }
    )
    // ///////////////////////////////////////////////////////////////////////
    db.collection('users').find({age: 27}).toArray((error , users)=>{
        if(error){
            return console.log("Error has occured")
        }
        console.log(users)
    })

    db.collection('users').find({age: 27}).limit(3).toArray((error , users)=>{
        if(error){
            return console.log("Error has occured")
        }
        console.log(users)
    })
    // // ///////////////////////////////////////////////////////////////////////

    db.collection('users').updateOne({_id:mongodb.ObjectId("657fa3f9e08e924df7dfd6c1")},{
        $set: {name: "Hossam"},
        $inc: {age: 4}
    })
    .then((data1) => {console.log(data1.modifiedCount)})
    .catch((error) => console.log(error))

    db.collection('users').updateOne({_id:mongodb.ObjectId("657fa3f9e08e924df7dfd6c2")},{
        $set: {name: "Ali"},
        $inc: {age: 4}
    })
    .then((data1) => {console.log(data1.modifiedCount)})
    .catch((error) => console.log(error))

    db.collection('users').updateOne({_id:mongodb.ObjectId("657fa3f9e08e924df7dfd6c3")},{
        $set: {name: "Eyad"},
        $inc: {age: 4}
    })
    .then((data1) => {console.log(data1.modifiedCount)})
    .catch((error) => console.log(error))
    
    db.collection('users').updateOne({_id:mongodb.ObjectId("657fa3f9e08e924df7dfd6c4")},{
        $set: {name: "Raghed"},
        $inc: {age: 4}
    })
    .then((data1) => {console.log(data1.modifiedCount)})
    .catch((error) => console.log(error))
    // // ////////////////////////////////////////////////////////////////////////////////

    db.collection('users').updateMany({},{
        $inc:{age: 10}
    })
    .then((data1) => {console.log(data1.modifiedCount)})
    .catch((error) => console.log(error))
    // //////////////////////////////////////////////////////////////////////////////////

    db.collection('users').deleteMany({age: 41})
    .then((data1) => {console.log(data1.deletedCount)})
    .catch((error) => console.log(error))
})