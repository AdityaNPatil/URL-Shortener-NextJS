// import redirect (next/navigation) to redirect to requested url of corresponding shortUrl
import { redirect } from "next/navigation";

// import mongo client
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    // get parameter as part of the route
    const slug = (await params).shorturl; // shorturl is the folder name of slug

    // mongodb
    const client = await clientPromise;
    const db = client.db("BlinkLinksDB");
    const collection = db.collection("urlcol");

    // find document in db for url corresponding to the parameter shortUrl
    const doc = await collection.findOne({ shortUrl: slug });
    // if found -- redirect to url
    if (doc) {
        redirect(doc.url);
    }
    // else redirect to -- NEXT_PUBLIC_HOST
    else {
        redirect(`${NEXT_PUBLIC_HOST}`)
    }

    return (
        <div>
            {slug}
        </div>
    )
} 