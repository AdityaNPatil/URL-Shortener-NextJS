// URL SHORTENING HAPPENS HERE

// client component - because form used here
'use client'

import React from 'react'

// import hooks
import { useState } from 'react'

const Shorten = () => {

    // state for url
    const [url, setUrl] = useState("")
    // state for short url
    const [shortUrl, setShortUrl] = useState("")
    // state to store generated short url
    const [generated, setGenerated] = useState("");

    const generateURL = () => {
        // API call to shorten url -- from postman
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        })

        const reqOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        // this api stores or checks the db
        fetch("/api/generate", reqOptions)
            .then((response) => response.json())
            .then((result) => {
                // empty out url and shortUrl
                setUrl("")
                setShortUrl("")

                // set generated string -- Generated Short Url
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);

                // message sent by api as response stored in response.json() which is then stored in result
                console.log(result);
                alert(result.message);
            })
            .catch((error) => {
                console.log("Error:" + error)
            });
    }

    return (
        <div className='mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-blue-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }}
                    required
                />

                <input type="text"
                    value={shortUrl}
                    className='px-4 py-2 focus:outline-blue-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setShortUrl(e.target.value) }}
                    required
                />

                {/* clicking this button generates the short url by sending post request to api*/}
                <button onClick={generateURL} className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>

                {/* display generated url -- done in generateURL function */}
                {generated &&
                    <code>{generated}</code>
                }
            </div>
        </div>
    )
}

export default Shorten
