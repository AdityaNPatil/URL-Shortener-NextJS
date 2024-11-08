# How to integrate MongoDB in NextJS app
[See Here](https://www.codewithharry.com/blogpost/%60how-to-integrate-mongodb-into-your-nextjs-apps%60/)

- create a lib folder 
- create mongodb.js in it
- It imports MongoClient , and fetches URI from .env
- Checks if MongoDB URI is defined as environment variable
- NODE_ENV variable determines if the app is running in development or production.
- module exports clientPromise, which is either the global client connection or a newly created one, based on the environment

This is extremely necessary so that each new request does not create a new connection to mongodb which can lead to connection saturation

## /api/generate/route.js -- creating API Endpoint
- This handles any HTTP Requests
- This is where MongoDB operations are done based on request 

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
