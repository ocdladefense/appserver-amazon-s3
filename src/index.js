/** @jsx vNode */



const { File, Folder } = require('./components.js');
const { vNode, View } = require('@ocdladefense/view');
const { S3Desktop } = require('@ocdladefense/s3');

const REGION            = "us-west-2";
const IDENTITY_POOL_ID  = "us-west-2:a6fa4161-c0bc-41c6-bed8-beef92418624";
const BUCKET            = "web-governance";
const START_FOLDER      = null;//"Dictionaries/";



let previous = "";
let current = "";
let stack = [];
let app;
let s3;

window.onload = init;


    

async function init() {

  let folders, files, message;


  console.log("Beginning init script...");
  let config = {
    region: REGION,
    identityPoolId: IDENTITY_POOL_ID,
    bucket: BUCKET
  };

  s3 = new S3Desktop(config);

  let data = await s3.ls(START_FOLDER);
  
  ({folders,files,message} = data);

  document.getElementById("back").addEventListener("click", goUpOneDiretory);
  
  app = View.createRoot("#viewer");
  app.render(<Directory folders={folders} files={files} messaage={message} />);
  // root.update() // add to the HISTORY for this instance of the view object.
    
  setupFolderNavigation();

  document.addEventListener("click", onFolderSelect);
};





    


    

async function goUpOneDiretory(e) {
  e.preventDefault();
  e.stopPropagation();

  let target = e.target;
  let dataset = target.dataset;
  let prefix = dataset.prefix;
  
  let folders, files, message;
  let data = await s3.ls(prefix);
  
  ({folders,files,message} = data);

  app.render(<Directory folders={folders} files={files} messaage={message} />);

  setupFolderNavigation();

  if(stack.length) {
    setBack(stack.pop());
  }

  return false;
}



  
// onFolderSelect 
async function onFolderSelect(e) {

  previous = current;

  let prefix = (e && e.target && e.target.dataset && e.target.dataset.prefix) || "";
  prefix = e.s3 && e.s3.prefix;
  console.log(e);

  console.log(prefix);

  if(prefix) {
    e.preventDefault();
    e.stopPropagation();
    setBack(prefix);
    
    let folders, files, message;
    let data = await s3.ls(prefix);
  
    ({folders,files,message} = data);
  
    // app = View.createRoot("#viewer");
    app.render(<Directory folders={folders} files={files} messaage={message} />);

    setupFolderNavigation();
  }

  return false;
}





function setBack(prefix) {

  let parts = prefix.split("/");
  console.log(parts);
  parts.pop();
  parts.pop();

  previous = !parts.length ? "" : (parts.join("/") + "/");
  stack.push(previous);

  document.getElementById("back").setAttribute("data-prefix",previous);
}
    



function setupFolderNavigation() {
  let containers = document.querySelectorAll("li.directory-item");

  console.log(containers);

  for(var i = 0; i< containers.length; i++) {
    let container = containers[i];
    container.addEventListener("click",function(e) {
      let detail = {};
      let currentTarget = e.currentTarget;
      if(!currentTarget.dataset || !currentTarget.dataset.prefix) {
        return; 
      }
      detail.prefix = currentTarget.dataset.prefix;
      e.s3 = detail;
      console.log(e.s3);
    });
  }

}




const Directory = function(props) {

  console.log(props);
  
  const folders = props.folders.map((folder) => { return <Folder folder={folder} />; });
  const files = props.files.map((file) => { return <File file={file} />; });
  
  console.log(folders);
  console.log(files);

  return (
    <div class="component">
      <p class="message">{props.message}</p>
      <div class="folders">
        <ul>
          {folders}
        </ul>
      </div>
      <div class="files">
      <p>{props.message}</p>
      <ul>
        {files}
      </ul>
    </div>
  </div>
  )
};

