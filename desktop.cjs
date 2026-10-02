const {app,BrowserWindow,Menu}=require('electron');
const path=require('node:path');
function createWindow(){const win=new BrowserWindow({width:1440,height:960,minWidth:980,minHeight:720,title:'Un ratito en CANELA & COFFEE',backgroundColor:'#f8f4eb',autoHideMenuBar:true,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});win.loadFile(path.join(__dirname,'index.html'));win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',event=>event.preventDefault());}
app.whenReady().then(()=>{Menu.setApplicationMenu(null);createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
