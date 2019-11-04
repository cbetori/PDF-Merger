import React, {useState} from 'react';
import { Input, Icon } from 'antd';

const { dialog } = window.require('electron').remote;


function Files(props) { 

    function folderPath(){ 
        dialog.showOpenDialog({ title:"Select a folder",
        properties: ["openDirectory"]}).then(files=>{
            if (files != undefined){
                props.folderPathSet(files.filePaths[0].toString())
            }
        })
    }

    return (
        <div>
            <Input 
                style={{width: '400px'}}
                addonAfter={<Icon type="folder" onClick={()=>folderPath('SAVE')}/>} 
                value={props.folderPath}
            />
        </div>
    );
}

export default Files;
