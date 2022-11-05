function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @jsx vNode */
var _require = require('@ocdladefense/view/view.js'),
    vNode = _require.vNode,
    View = _require.View; // Load the required clients and packages


var _require2 = require("@aws-sdk/client-cognito-identity"),
    CognitoIdentityClient = _require2.CognitoIdentityClient;

var _require3 = require("@aws-sdk/credential-provider-cognito-identity"),
    fromCognitoIdentityPool = _require3.fromCognitoIdentityPool;

var _require4 = require("@aws-sdk/client-s3"),
    S3Client = _require4.S3Client,
    ListObjectsCommand = _require4.ListObjectsCommand;

var REGION = "us-west-2";
var IDENTITY_POOL_ID = "us-west-2:a6fa4161-c0bc-41c6-bed8-beef92418624";
var albumBucketName = "web-governance"; // Initialize the Amazon Cognito credentials provider

var s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({
      region: REGION
    }),
    identityPoolId: IDENTITY_POOL_ID
  })
}); // A utility function to create HTML.

function getHtml(template) {
  return template.join("\n");
}
/**
 * S3 folders and object key names:
 *  https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html
 * 
 * Webpack:
 *  https://webpack.js.org/configuration/mode/
 * 
 */


var ls = /*#__PURE__*/function () {
  var _ls = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bucket, prefix) {
    var config, data, files, folders, message, root;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = {
              Delimiter: "/",
              Bucket: bucket
            };

            if (prefix) {
              config.Prefix = prefix;
            }

            _context.next = 4;
            return s3.send(new ListObjectsCommand(config));

          case 4:
            data = _context.sent;
            console.log(data);
            files = data.Contents || [];
            files = files.filter(function (file) {
              return file.Key.indexOf("Thumbs.db") === -1;
            });
            files = files.map(function (obj) {
              obj.Name = decodeURIComponent(obj.Key.replace(prefix, ""));
              return obj;
            });
            console.log(files);
            folders = data.CommonPrefixes || [];
            folders = folders.map(function (folder) {
              folder.Name = decodeURIComponent(folder.Prefix.replace(prefix, ""));
              return folder;
            });
            console.log(folders);
            message = folders.length ? "Click a folder to view its contents." : "No folders found.";
            root = View.createRoot("#viewer");
            root.render(vNode(Directory, {
              folders: folders,
              files: files,
              messaage: message
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function ls(_x, _x2) {
    return _ls.apply(this, arguments);
  }

  return ls;
}();

var Directory = function Directory(props) {
  console.log(props);
  var folders = props.folders.map(function (folder) {
    return vNode(Folder, {
      folder: folder
    });
  });
  var files = props.files.map(function (file) {
    return vNode(File, {
      file: file
    });
  }); // const folders = [<Folder name="Hello" />,<Folder name="foobar" />];

  return vNode("div", {
    "class": "component"
  }, vNode("p", {
    "class": "message"
  }, props.message), vNode("div", {
    "class": "folders"
  }, vNode("ul", null, folders)), vNode("div", {
    "class": "files"
  }, vNode("p", null, props.message), vNode("ul", null, files)));
};

var Folder = function Folder(props) {
  var folder = props.folder;
  return vNode("li", {
    "class": "directory-item",
    "data-prefix": folder.Prefix
  }, vNode("a", {
    href: "#",
    "data-type": "folder",
    "data-prefix": folder.Prefix
  }, vNode("img", {
    "class": "folder-icon",
    src: "data:image/png;base64,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",
    alt: ""
  }), vNode("span", {
    "class": "folder folder-name"
  }, folder.Name)));
};

var File = function File(props) {
  var file = props.file;
  var href = "https://s3." + REGION + ".amazonaws.com/";
  var bucketUrl = href + "web-governance/";
  var fileKey = file.Key;
  var fileUrl = bucketUrl + encodeURIComponent(fileKey);
  return vNode("li", {
    "class": "directory-item",
    "data-prefix": "",
    "data-key": file.Key
  }, vNode("a", {
    target: "_new",
    href: fileUrl,
    "data-type": "folder"
  }, vNode("img", {
    "class": "file-icon",
    src: "/content/uploads/file-icon.png"
  }), vNode("span", {
    "class": "file file-name"
  }, file.Name)));
}; // Show the photos that exist in an album


var listFiles = /*#__PURE__*/function () {
  var _listFiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(albumName) {
    var albumPhotosKey, data, href, bucketUrl, photos, message, htmlTemplate;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // try {
            albumPhotosKey = encodeURIComponent(albumName) + "/";
            _context2.next = 3;
            return s3.send(new ListObjectsCommand({
              Prefix: albumPhotosKey,
              Bucket: albumBucketName
            }));

          case 3:
            data = _context2.sent;
            console.log(data);
            href = "https://s3." + REGION + ".amazonaws.com/";
            bucketUrl = href + albumBucketName + "/";
            photos = data.Contents.map(function (photo) {
              var photoKey = photo.Key;
              var photoUrl = bucketUrl + encodeURIComponent(photoKey);
              return getHtml(["<span>", "<div>", "<br/>", '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>', "</div>", "<div>", "<span>", photoKey.replace(albumPhotosKey, ""), "</span>", "</div>", "</span>"]);
            });
            message = photos.length ? "<p>The following photos are present.</p>" : "<p>There are no photos in this album.</p>";
            htmlTemplate = ["<div>", '<button onclick="listAlbums()">', "Back To albums", "</button>", "</div>", "<h2>", "Album: " + albumName, "</h2>", message, "<div>", getHtml(photos), "</div>", "<h2>", "End of album: " + albumName, "</h2>", "<div>", '<button onclick="listAlbums()">', "Back To albums", "</button>", "</div>"];
            document.getElementById("viewer").innerHTML = getHtml(htmlTemplate);
            document.getElementsByTagName("img")[0].setAttribute("style", "display:none;");

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  function listFiles(_x3) {
    return _listFiles.apply(this, arguments);
  }

  return listFiles;
}(); // Make the getHTML function available to the browser


window.getHTML = getHtml; // List the photo albums that exist in the bucket
// Make the viewAlbum function available to the browser

window.ls = ls; // Make the viewAlbum function available to the browser

window.listFiles = listFiles; //for unit tests only

export { ls, listFiles };