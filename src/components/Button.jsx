import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "./Button.css";

const Button = ({children, onClick}) => { 
    return (  
        <button onClick={onClick} className='button'>
            {children}
        </button>
    );
}

<Button>Adicionar</Button>
 
export default Button;