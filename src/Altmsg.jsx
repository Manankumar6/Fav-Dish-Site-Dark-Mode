import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Altmsg = (props) => {
const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

    return (
      
       props.alert && 
       
       <Alert severity={`${props.alert.type}`} className='alert'>
        <AlertTitle>{capitalize(props.alert.type)} <span className='alt_msg'> {props.alert.msg} <strong>check it out!</strong></span></AlertTitle>
      </Alert>
       
 
    )
}

export default Altmsg
