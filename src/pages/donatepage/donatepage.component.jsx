import React from 'react';
import './donatepage.styles.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import ScriptTag from 'react-script-tag';


const DonatePage=()=>(
    <div className='jumbotron text-white p-4 payment-div'>
        <h1 >Payment:</h1>
        <form className='mt-5'>
            <ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GQkoLlvzl4qAYP" async> </ScriptTag> 
        </form>
        <p className='mt-3'>
        *For testing: <br/> 
        Card Number: 4111 1111 1111 1111<br/>
        CVV: Random CVV <br/>
        Expiry Date : Any future date 
        </p>
        <br/><br/>
        <p className='lead'>Thank you for your kind donation!</p>       
    </div>
)

export default DonatePage;