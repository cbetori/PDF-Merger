import React, {useState} from 'react';
import { Button } from 'antd';
const { ipcRenderer } = window.require('electron');

function Run(props) { 

    const [iconLoading, iconLoadingSet] = useState(false)
      
    let enterIconLoading = (value) => {
      iconLoadingSet(value)
    };

    function mergeTrigger(){
        enterIconLoading(true)
        ipcRenderer.send('merge', props.folderPath)
        enterIconLoading(false)
    }

    return (
      <Button
      className="buttons"
      style={{marginTop: "auto", marginBottom:"30px"}}
      type="primary"
      loading={iconLoading}
      onClick={mergeTrigger}
      >
        Run
      </Button>
    );
}

export default Run;
