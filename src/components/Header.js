import React from 'react';

const { remote } = window.require('electron');

function Header(props) { 

    let minimize =()=>{
        remote.getCurrentWindow().minimize()
    }

    let close=()=>{
        remote.getCurrentWindow().close()
    }

    return (
        <div id='header'>
            <div className='header' onClick={()=>minimize()}>-</div>
            <div className='header' onClick={()=>close()}>x</div>
        </div>
    );
}

export default Header;
