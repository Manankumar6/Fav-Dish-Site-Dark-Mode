import { React, useState } from 'react'
import Menu from './Menu';
import Buttontab from './Buttontab';
const Common = ({ mode }) => {
    const [items, setItems] = useState(Menu);
   

    const filterItem = (cateitem) => {
        console.log(cateitem)
        if (cateitem === "All") {
            return setItems(Menu);
        }


        const updataItem = Menu.filter((val) => {
            return val.category === cateitem
        })
        setItems(updataItem)
    }
    return (
        <div>
            
       

            <Buttontab filterItem={filterItem} mode={mode} />

            {/* Main_container */}
            <div className={`card_container ${mode} `}>
                {
                    items.map((val) => {
                        const { id, name, images, price, description } = val;
                        return (<>
                            <div className={`card ${mode}`} key={id}>
                                <div className='img_container'>
                                    <img src={images} alt='img' />
                                </div>

                                <div className='content'>
                                    <div className='content_details'>
                                        <h1>{name}</h1>
                                        <p>{description}</p>
                                    </div>
                                    <div className='price_tab'>
                                        <h2>Price : {price}</h2>
                                        <button className={`order_btn ${mode}`}>Order Now</button>
                                    </div>
                                    <p>*Price may vary on selected data.</p>
                                </div>
                            </div>

                        </>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Common;
