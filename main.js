const {app,BrowserWindow}=require('electron');
function crear(){const w=new BrowserWindow({width:1280,height:800,title:'Nixora Blox',autoHideMenuBar:true,icon:__dirname+'/icon-512.png',webPreferences:{contextIsolation:true}});w.loadFile('index.html')}
app.whenReady().then(crear);app.on('window-all-closed',()=>app.quit());
