import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';


function Cards() {
    return (
        <div className="cards">
<<<<<<< HEAD
            <a href="https://django-server-production-5811.up.railway.app/rates/" className="card-link">
=======
            <Link to="/rates" className="card-link">
>>>>>>> master
                <div className="card">
                    <h2>Rates</h2>
                    <p>Get realtime construction rates</p>

                </div>
<<<<<<< HEAD
            </a>
=======
            </Link>
>>>>>>> master
            <a href="https://django-server-production-5811.up.railway.app/shops/" className="card-link">
                <div className="card">
                    <h2>Shop with Us</h2>
                    <p>Buy from hardwares near you</p>
                    <button>Shop Now</button>
                </div>
            </a>
        </div>
    );
}

export default Cards;
