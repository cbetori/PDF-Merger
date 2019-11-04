import React, {useState} from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

function Options() { 
    const [lable, lableSet] = useState("Merge")

    const menu = (
        <Menu>
          <Menu.Item key="1" onClick={()=>lableSet("Merge")}>Merge</Menu.Item>
          <Menu.Item key="2" onClick={()=>lableSet("Rename")}>Rename</Menu.Item>
        </Menu>
      );
    return (
        <h1 style={{color:'whitesmoke', marginBottom:'auto', marginTop: '0px'}}>PDF Merger</h1>
        // <Dropdown overlay={menu} className="buttons">
        //     {/* <Button>
        //         {lable} <Icon type="down" />
        //     </Button> */}
        // </Dropdown>   
    );
}

export default Options;
