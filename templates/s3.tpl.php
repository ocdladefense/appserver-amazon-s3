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
<style type="text/css">
 #back {
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 6px;
 }

 #back:hover {
  border: 1px solid #aaa;
 }
</style>
<link rel="stylesheet" type="text/css" href="/modules/s3/assets/css/styles.css" />

<h1>Legal Resource Library</h1>
<p>
  <span style="font-style:italic;">Viewer v0.1</span>
  <a href="#" data-prefix="" id="back">&larr; back</a>
</p>


<div id="viewer">&nbsp;</div>



<script src="/modules/s3/dist/main.js">
</script>
