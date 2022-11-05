<!--Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-photos-view.html.

Purpose:
s3_PhotoViewer.html demonstrates how to allow viewing of photos in albums stored in an Amazon S3 bucket.

Inputs (replace in code):
- REGION
- TABLE_NAME

Running the code:
node s3_PhotoViewer.js

NOTES:
 - For the JavaScript code, see s3_PhotoViewer.js.
 - For IAM role policy and CORS setup, see the AWS SDK for JavaScript Developer Guide topic at
   https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photos-view.html.
-->


  <script type="text/javascript" type="module" src="/s3/dist/main.js">

    window.onload = function() {

    };
  </script>
  <link rel="stylesheet" type="text/css" href="/s3/styles.css" />

  <h1>Legal Resource Library</h1>
  <p style="font-style:italic;">Viewer v0.1</p>
  

  
  <a href="#" data-prefix="" id="up">&lt;-- back</a>
  <div id="viewer">&nbsp;</div>

  <script>
      const bucket = "web-governance";
      const folder = null;//"Dictionaries/";
      let previous = "";
      let current = "";
      let stack = [];

      document.getElementById("up").addEventListener("click",function(e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let dataset = target.dataset;
        let prefix = dataset.prefix;
        ls("web-governance",prefix).then(fn);
        if(stack.length) {
          setBack(stack.pop());
        }
        return false;
      });
      document.addEventListener("click", callback);



    ls("web-governance", folder).then(fn);

      function callback(e) {

        previous = current;

        let prefix = (e && e.target && e.target.dataset && e.target.dataset.prefix) || "";
        prefix = e.s3 && e.s3.prefix;
        console.log(e);

        console.log(prefix);

        if(prefix) {
          e.preventDefault();
          e.stopPropagation();
          setBack(prefix);
          
          ls("web-governance", prefix).then(fn);
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

        document.getElementById("up").setAttribute("data-prefix",previous);
      }
      



    function fn() {
      let containers = document.querySelectorAll("li.directory-item");

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
      // let foo = document.getElementById("foobar");
      // foo.addEventListener("click",listFolders);
    }
  </script>
