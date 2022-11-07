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

<link rel="stylesheet" type="text/css" href="/modules/s3/assets/css/styles.css" />

<h1>Legal Resource Library</h1>
<p style="font-style:italic;">Viewer v0.1</p>



<a href="#" data-prefix="" id="up">&lt;-- back</a>
<div id="viewer">&nbsp;</div>



<script src="/modules/s3/node_modules/@ocdladefense/s3/dist/main.js">
</script>
<script src="/modules/s3/src/index.js">
</script>
