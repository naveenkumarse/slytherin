import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Typed from 'react-typed';
import '../../styles/About.css';

const History = ()=> {
    return (
        <div className='fadeintext' style={{marginTop:"100px"}}>
            <Zoom>
                <div className='flex flex-col justify-center item-center text-center m-auto w-full'>
                    <h1 className='heading font-bold text-6xl text-[#00df9a]'>HI
                        <Typed
                            strings={['STORY']}
                            typeSpeed={110}
                            backSpeed={120}
                            loop
                        /></h1>
                    </div>
            </Zoom>

        </div>


    )
}

export default History ;
