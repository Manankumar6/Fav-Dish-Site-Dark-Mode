import React from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
const Header = ({mode, darkmode,text}) => {
  return (
    <div>
      <div className={` heading ${mode}  `}>
                <h3 >Order Your Favourite Dish</h3>
                <div className='switch'>

                    <FormControlLabel control={<Switch onChange={darkmode} />} label={text} />
                </div>
            </div>
           
            <hr />
    </div>
  )
}

export default Header
