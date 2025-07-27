import React from 'react';
import '../styles/RestCard.css'; // Assuming you have a CSS file for styles

export const RestCard=(props)=>{
    const {resdata}=props;
    const{name, id, email}=resdata;  //destructuring of an object and now we can directly use name, poster_path, and category
    console.log(name);
        return(
            <>
            <div className='restCardWrapper'>
                <div className="restCardBox">
                    
                    <div className="restCardDetails">
                        <h4>{name}</h4>
                        <div className='emailDiv'>
                            <p>{email}</p>
                        </div>
                        <div className='restCardButton'>
                            <button className="view-btn">View</button>
                            <button className="contact-btn">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        
            </>
        )
}