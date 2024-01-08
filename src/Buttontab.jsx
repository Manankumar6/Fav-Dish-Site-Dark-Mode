import {React,useState} from 'react'
import Menu from './Menu'

const Buttontab = ({filterItem,mode}) => {

    
    const btnValue = [...new Set(Menu.map((val) => { return val.category })), "All"];
    const [btnItem, setBtnItem] = useState(btnValue);

  

  return (
    <div>
    
      <div className='btn_tab'>
        {
          btnItem.map((val, ind) => {
            return (

              <button className={`btn ${mode}`} key={ind} onClick={() => filterItem(val)}>{val}</button>
            )
          })
        }

      </div>
    </div>
  )
}

export default Buttontab
