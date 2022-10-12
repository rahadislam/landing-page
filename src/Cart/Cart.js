import React from 'react';

const Cart = () => {
    return (
        <div className='container mx-auto py-5 grid grid-cols-1 lg:grid-cols-3'>
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.reshot.com/preview-assets/illustrations/PNK85EMCWA/couple-working-on-data-analysis-PNK85EMCWA-w600.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Analysis
        
                    </h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                    
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.pinimg.com/736x/92/f9/74/92f9743b66bcf825fd1e9ccdd87cf665.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                   Problem  Analysis
        
                    </h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                    
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://assets.materialup.com/uploads/99e039b8-6819-459c-868f-3c114cfa3bd2/preview.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Data Analysis
        
                    </h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;