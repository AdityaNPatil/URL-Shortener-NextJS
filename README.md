
## setup environment variables in .env.local before downloading project
`MONGODB_URI = mongodbconnectionString`
`NEXT_PUBLIC_HOST = host url`

## How to integrate MongoDB in NextJS app -- lib/mongodb.js
[See Here](https://www.codewithharry.com/blogpost/%60how-to-integrate-mongodb-into-your-nextjs-apps%60/)

- create a lib folder 
- create mongodb.js in it
- It imports MongoClient , and fetches URI from .env
- Checks if MongoDB URI is defined as environment variable
- NODE_ENV variable determines if the app is running in development or production.
- module exports clientPromise, which is either the global client connection or a newly created one, based on the environment

This is extremely necessary so that each new request does not create a new connection to mongodb which can lead to connection saturation in development

## /shorten/page.js -- handle form requests and generate url with api communication
- generates the short url and displays it
- fetches all previously generated short urls

## /api/generate/route.js -- creating API Endpoint
- This handles any HTTP Requests
- This is where MongoDB operations are done based on request 

## [shortUrl]/page.js -- used for redirection to corresponding shortUrl
- creates dynamic route with parameter changing and getting set as the shortUrl
- redirect to url if found else back to host home page     

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Steps
- Open Vercel
- Deploy project from GitHub
- Environment Variables (Initially)
    - MONGODB_URI = mongodbLocalhostConnString
    - NEXT_PUBLIC_HOST = localhost
- Create MongoDB DB on Atlas and copy connection string
- Environment Variable Update
    - MONGODB_URI = `<dbUsername><dbPassword>/connectonString`
    - NEXT_PUBLIC_HOST = `https://<yourdomain>.vercel.app`