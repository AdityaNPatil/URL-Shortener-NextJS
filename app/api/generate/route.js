// use MongoDB client from mongodb.js
import clientPromise from "@/lib/mongodb"

// form will send a POST request -- hence handle post req here
export async function POST(request) {

    // get data from frontend
    const body = await request.json();
    console.log(body);

    // create client
    const client = await clientPromise;

    // choose database name
    const db = await client.db("BlinkLinksDB");
    // choose collection name
    const collection = db.collection("urlcol");

    // check if shortUrl already exists in the db
    const doc = await collection.findOne({shortUrl:body.shortUrl})
    if(doc){
        // if yes -- then dont add to db
        return Response.json({sucess:false , error:true , message:"Short URL already exists"}) 
    }
    
    //  insert the data into db
    await collection.insertOne({
        url: body.url,
        shortUrl : body.shortUrl
    })
    // send response for successful generation
    return Response.json({ sucess:true ,error:false , message: 'URL generated successfully' })
}