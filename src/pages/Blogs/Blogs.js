import React from 'react';

const Blogs = () => {
    return (
        
        <div style={{width:"90%"}} className='mx-auto'>
            <h1 className='text-center my-5'>Here is our popular blogs</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Q1. Difference between javascript and nodejs</h5>
                        <p class="card-text">JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Just Now</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Q2. When should you use nodejs and when should you use mongodb</h5>
                        <p class="card-text">Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 10 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Q3. Differences between sql and nosql databases.</h5>
                        <p class = "card-text" > The five critical differences between SQL vs NoSQL are: SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema.NoSQL databases have dynamic schemas
                        for unstructured data.SQL databases are vertically scalable,while NoSQL databases are horizontally scalable.SQL databases are table-based,
                        while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 20 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Q4. What is the purpose of jwt and how does it work</h5>
                        <p class = "card-text" > JWT, or JSON Web Token, is an open standard used to share security information between two parties— a client and a server.Each JWT contains encoded JSON objects, including a set of claims.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.You will get two JSON strings: <br />
                        1.The header and the payload.
                        2.The signature. </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 30 mins ago</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;