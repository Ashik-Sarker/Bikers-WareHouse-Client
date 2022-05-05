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
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
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
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
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
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
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