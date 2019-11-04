window.ipcRenderer = require('electron').ipcRenderer;
window.shell = require('electron').shell
let dialog = require('electron').remote

export {dialog}

// export function openDirectory(){ 
//     window.shell.showItemInFolder(window.app.getPath('home'))
// } 