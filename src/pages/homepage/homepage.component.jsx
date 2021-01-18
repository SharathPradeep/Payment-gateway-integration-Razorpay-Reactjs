import React from 'react';
import './homepage.styles.css';
import {Link} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


const HomePage=()=>(
    <div className='home p-4'>
        <h1 className='heading mt-4'>Feed Every Child</h1>
        <div className='row'>
            <div className='col-md-6'>
                <p className='lead mt-4'>
                A third of the world's malnourished children live in India. 1 in 4 children in India are<br/> malnourished. Donate now and let no child go hungry. 
                </p>
                <Link to='/donate' className='btn btn-danger p-3 mt-4'>DONATE NOW</Link>
            </div>
            <div className='col-md-6'>
                <h1 className='heading mt-4'>About Us</h1>
                <p className='lead mt-4'>
                    The CharitAble Foundation is an NGO in India. We aim to provide nutritious food and clean drinking water to children of India. Presently, the Foundation is serving meals to more than 1 million children and it operates in 65 locations across 15 states. 
                </p>
            </div>
        </div>
    </div>
)

export default HomePage;