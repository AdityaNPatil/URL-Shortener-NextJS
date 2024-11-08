// use MongoDB client from mongodb.js
import clientPromise from "@/lib/mongodb"

// form will send a POST request -- hence handle post req here -- add data to mongodb
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
    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
        // if yes -- then dont add to db
        return Response.json({ sucess: false, error: true, message: "Short URL already exists" })
    }

    //  insert the data into db
    await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })
    // send response for successful generation
    return Response.json({ sucess: true, error: false, message: 'URL generated successfully' })
}

// get request -- give all urls and short urls back to page.js in /shorten
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("BlinkLinksDB");
        const collection = db.collection("urlcol");

        // Fetch all documents as an array
        const alldocs = await collection.find().toArray();

        // Return the response as an array of objects containing `url` and `shortUrl`
        return Response.json(alldocs);
        
    } catch (error) {
        console.error("Error fetching documents:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch documents" }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}