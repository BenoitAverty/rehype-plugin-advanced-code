var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/bail/index.js
var require_bail = __commonJS({
  "node_modules/bail/index.js"(exports, module) {
    "use strict";
    module.exports = bail;
    function bail(err) {
      if (err) {
        throw err;
      }
    }
  }
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/is-buffer/index.js"(exports, module) {
    module.exports = function isBuffer(obj) {
      return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
  }
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, {name, newValue: extend(deep, clone, copy)});
              } else if (typeof copy !== "undefined") {
                setProperty(target, {name, newValue: copy});
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/is-plain-obj/index.js
var require_is_plain_obj = __commonJS({
  "node_modules/is-plain-obj/index.js"(exports, module) {
    "use strict";
    module.exports = (value) => {
      if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    };
  }
});

// node_modules/trough/wrap.js
var require_wrap = __commonJS({
  "node_modules/trough/wrap.js"(exports, module) {
    "use strict";
    var slice = [].slice;
    module.exports = wrap;
    function wrap(fn, callback) {
      var invoked;
      return wrapped;
      function wrapped() {
        var params = slice.call(arguments, 0);
        var callback2 = fn.length > params.length;
        var result;
        if (callback2) {
          params.push(done);
        }
        try {
          result = fn.apply(null, params);
        } catch (error) {
          if (callback2 && invoked) {
            throw error;
          }
          return done(error);
        }
        if (!callback2) {
          if (result && typeof result.then === "function") {
            result.then(then, done);
          } else if (result instanceof Error) {
            done(result);
          } else {
            then(result);
          }
        }
      }
      function done() {
        if (!invoked) {
          invoked = true;
          callback.apply(null, arguments);
        }
      }
      function then(value) {
        done(null, value);
      }
    }
  }
});

// node_modules/trough/index.js
var require_trough = __commonJS({
  "node_modules/trough/index.js"(exports, module) {
    "use strict";
    var wrap = require_wrap();
    module.exports = trough;
    trough.wrap = wrap;
    var slice = [].slice;
    function trough() {
      var fns = [];
      var middleware = {};
      middleware.run = run;
      middleware.use = use;
      return middleware;
      function run() {
        var index = -1;
        var input = slice.call(arguments, 0, -1);
        var done = arguments[arguments.length - 1];
        if (typeof done !== "function") {
          throw new Error("Expected function as last argument, not " + done);
        }
        next.apply(null, [null].concat(input));
        function next(err) {
          var fn = fns[++index];
          var params = slice.call(arguments, 0);
          var values = params.slice(1);
          var length = input.length;
          var pos = -1;
          if (err) {
            done(err);
            return;
          }
          while (++pos < length) {
            if (values[pos] === null || values[pos] === void 0) {
              values[pos] = input[pos];
            }
          }
          input = values;
          if (fn) {
            wrap(fn, next).apply(null, input);
          } else {
            done.apply(null, [null].concat(input));
          }
        }
      }
      function use(fn) {
        if (typeof fn !== "function") {
          throw new Error("Expected `fn` to be a function, not " + fn);
        }
        fns.push(fn);
        return middleware;
      }
    }
  }
});

// node_modules/unist-util-stringify-position/index.js
var require_unist_util_stringify_position = __commonJS({
  "node_modules/unist-util-stringify-position/index.js"(exports, module) {
    "use strict";
    var own3 = {}.hasOwnProperty;
    module.exports = stringify;
    function stringify(value) {
      if (!value || typeof value !== "object") {
        return "";
      }
      if (own3.call(value, "position") || own3.call(value, "type")) {
        return position(value.position);
      }
      if (own3.call(value, "start") || own3.call(value, "end")) {
        return position(value);
      }
      if (own3.call(value, "line") || own3.call(value, "column")) {
        return point(value);
      }
      return "";
    }
    function point(point2) {
      if (!point2 || typeof point2 !== "object") {
        point2 = {};
      }
      return index(point2.line) + ":" + index(point2.column);
    }
    function position(pos) {
      if (!pos || typeof pos !== "object") {
        pos = {};
      }
      return point(pos.start) + "-" + point(pos.end);
    }
    function index(value) {
      return value && typeof value === "number" ? value : 1;
    }
  }
});

// node_modules/vfile-message/index.js
var require_vfile_message = __commonJS({
  "node_modules/vfile-message/index.js"(exports, module) {
    "use strict";
    var stringify = require_unist_util_stringify_position();
    module.exports = VMessage;
    function VMessagePrototype() {
    }
    VMessagePrototype.prototype = Error.prototype;
    VMessage.prototype = new VMessagePrototype();
    var proto = VMessage.prototype;
    proto.file = "";
    proto.name = "";
    proto.reason = "";
    proto.message = "";
    proto.stack = "";
    proto.fatal = null;
    proto.column = null;
    proto.line = null;
    function VMessage(reason, position, origin) {
      var parts;
      var range;
      var location;
      if (typeof position === "string") {
        origin = position;
        position = null;
      }
      parts = parseOrigin(origin);
      range = stringify(position) || "1:1";
      location = {
        start: {line: null, column: null},
        end: {line: null, column: null}
      };
      if (position && position.position) {
        position = position.position;
      }
      if (position) {
        if (position.start) {
          location = position;
          position = position.start;
        } else {
          location.start = position;
        }
      }
      if (reason.stack) {
        this.stack = reason.stack;
        reason = reason.message;
      }
      this.message = reason;
      this.name = range;
      this.reason = reason;
      this.line = position ? position.line : null;
      this.column = position ? position.column : null;
      this.location = location;
      this.source = parts[0];
      this.ruleId = parts[1];
    }
    function parseOrigin(origin) {
      var result = [null, null];
      var index;
      if (typeof origin === "string") {
        index = origin.indexOf(":");
        if (index === -1) {
          result[1] = origin;
        } else {
          result[0] = origin.slice(0, index);
          result[1] = origin.slice(index + 1);
        }
      }
      return result;
    }
  }
});

// node_modules/vfile/lib/minpath.browser.js
var require_minpath_browser = __commonJS({
  "node_modules/vfile/lib/minpath.browser.js"(exports) {
    "use strict";
    exports.basename = basename;
    exports.dirname = dirname2;
    exports.extname = extname;
    exports.join = join2;
    exports.sep = "/";
    function basename(path, ext) {
      var start = 0;
      var end = -1;
      var index;
      var firstNonSlashEnd;
      var seenNonSlash;
      var extIndex;
      if (ext !== void 0 && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
      }
      assertPath(path);
      index = path.length;
      if (ext === void 0 || !ext.length || ext.length > path.length) {
        while (index--) {
          if (path.charCodeAt(index) === 47) {
            if (seenNonSlash) {
              start = index + 1;
              break;
            }
          } else if (end < 0) {
            seenNonSlash = true;
            end = index + 1;
          }
        }
        return end < 0 ? "" : path.slice(start, end);
      }
      if (ext === path) {
        return "";
      }
      firstNonSlashEnd = -1;
      extIndex = ext.length - 1;
      while (index--) {
        if (path.charCodeAt(index) === 47) {
          if (seenNonSlash) {
            start = index + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd < 0) {
            seenNonSlash = true;
            firstNonSlashEnd = index + 1;
          }
          if (extIndex > -1) {
            if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
              if (extIndex < 0) {
                end = index;
              }
            } else {
              extIndex = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end < 0) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    function dirname2(path) {
      var end;
      var unmatchedSlash;
      var index;
      assertPath(path);
      if (!path.length) {
        return ".";
      }
      end = -1;
      index = path.length;
      while (--index) {
        if (path.charCodeAt(index) === 47) {
          if (unmatchedSlash) {
            end = index;
            break;
          }
        } else if (!unmatchedSlash) {
          unmatchedSlash = true;
        }
      }
      return end < 0 ? path.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path.charCodeAt(0) === 47 ? "//" : path.slice(0, end);
    }
    function extname(path) {
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var preDotState = 0;
      var unmatchedSlash;
      var code;
      var index;
      assertPath(path);
      index = path.length;
      while (index--) {
        code = path.charCodeAt(index);
        if (code === 47) {
          if (unmatchedSlash) {
            startPart = index + 1;
            break;
          }
          continue;
        }
        if (end < 0) {
          unmatchedSlash = true;
          end = index + 1;
        }
        if (code === 46) {
          if (startDot < 0) {
            startDot = index;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot > -1) {
          preDotState = -1;
        }
      }
      if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    }
    function join2() {
      var index = -1;
      var joined;
      while (++index < arguments.length) {
        assertPath(arguments[index]);
        if (arguments[index]) {
          joined = joined === void 0 ? arguments[index] : joined + "/" + arguments[index];
        }
      }
      return joined === void 0 ? "." : normalize2(joined);
    }
    function normalize2(path) {
      var absolute;
      var value;
      assertPath(path);
      absolute = path.charCodeAt(0) === 47;
      value = normalizeString(path, !absolute);
      if (!value.length && !absolute) {
        value = ".";
      }
      if (value.length && path.charCodeAt(path.length - 1) === 47) {
        value += "/";
      }
      return absolute ? "/" + value : value;
    }
    function normalizeString(path, allowAboveRoot) {
      var result = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var index = -1;
      var code;
      var lastSlashIndex;
      while (++index <= path.length) {
        if (index < path.length) {
          code = path.charCodeAt(index);
        } else if (code === 47) {
          break;
        } else {
          code = 47;
        }
        if (code === 47) {
          if (lastSlash === index - 1 || dots === 1) {
          } else if (lastSlash !== index - 1 && dots === 2) {
            if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
              if (result.length > 2) {
                lastSlashIndex = result.lastIndexOf("/");
                if (lastSlashIndex !== result.length - 1) {
                  if (lastSlashIndex < 0) {
                    result = "";
                    lastSegmentLength = 0;
                  } else {
                    result = result.slice(0, lastSlashIndex);
                    lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
                  }
                  lastSlash = index;
                  dots = 0;
                  continue;
                }
              } else if (result.length) {
                result = "";
                lastSegmentLength = 0;
                lastSlash = index;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              result = result.length ? result + "/.." : "..";
              lastSegmentLength = 2;
            }
          } else {
            if (result.length) {
              result += "/" + path.slice(lastSlash + 1, index);
            } else {
              result = path.slice(lastSlash + 1, index);
            }
            lastSegmentLength = index - lastSlash - 1;
          }
          lastSlash = index;
          dots = 0;
        } else if (code === 46 && dots > -1) {
          dots++;
        } else {
          dots = -1;
        }
      }
      return result;
    }
    function assertPath(path) {
      if (typeof path !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
      }
    }
  }
});

// node_modules/vfile/lib/minproc.browser.js
var require_minproc_browser = __commonJS({
  "node_modules/vfile/lib/minproc.browser.js"(exports) {
    "use strict";
    exports.cwd = cwd;
    function cwd() {
      return "/";
    }
  }
});

// node_modules/vfile/lib/core.js
var require_core = __commonJS({
  "node_modules/vfile/lib/core.js"(exports, module) {
    "use strict";
    var p = require_minpath_browser();
    var proc = require_minproc_browser();
    var buffer = require_is_buffer();
    module.exports = VFile;
    var own3 = {}.hasOwnProperty;
    var order = ["history", "path", "basename", "stem", "extname", "dirname"];
    VFile.prototype.toString = toString;
    Object.defineProperty(VFile.prototype, "path", {get: getPath, set: setPath});
    Object.defineProperty(VFile.prototype, "dirname", {
      get: getDirname,
      set: setDirname
    });
    Object.defineProperty(VFile.prototype, "basename", {
      get: getBasename,
      set: setBasename
    });
    Object.defineProperty(VFile.prototype, "extname", {
      get: getExtname,
      set: setExtname
    });
    Object.defineProperty(VFile.prototype, "stem", {get: getStem, set: setStem});
    function VFile(options) {
      var prop;
      var index;
      if (!options) {
        options = {};
      } else if (typeof options === "string" || buffer(options)) {
        options = {contents: options};
      } else if ("message" in options && "messages" in options) {
        return options;
      }
      if (!(this instanceof VFile)) {
        return new VFile(options);
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = proc.cwd();
      index = -1;
      while (++index < order.length) {
        prop = order[index];
        if (own3.call(options, prop)) {
          this[prop] = options[prop];
        }
      }
      for (prop in options) {
        if (order.indexOf(prop) < 0) {
          this[prop] = options[prop];
        }
      }
    }
    function getPath() {
      return this.history[this.history.length - 1];
    }
    function setPath(path) {
      assertNonEmpty(path, "path");
      if (this.path !== path) {
        this.history.push(path);
      }
    }
    function getDirname() {
      return typeof this.path === "string" ? p.dirname(this.path) : void 0;
    }
    function setDirname(dirname2) {
      assertPath(this.path, "dirname");
      this.path = p.join(dirname2 || "", this.basename);
    }
    function getBasename() {
      return typeof this.path === "string" ? p.basename(this.path) : void 0;
    }
    function setBasename(basename) {
      assertNonEmpty(basename, "basename");
      assertPart(basename, "basename");
      this.path = p.join(this.dirname || "", basename);
    }
    function getExtname() {
      return typeof this.path === "string" ? p.extname(this.path) : void 0;
    }
    function setExtname(extname) {
      assertPart(extname, "extname");
      assertPath(this.path, "extname");
      if (extname) {
        if (extname.charCodeAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (extname.indexOf(".", 1) > -1) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = p.join(this.dirname, this.stem + (extname || ""));
    }
    function getStem() {
      return typeof this.path === "string" ? p.basename(this.path, this.extname) : void 0;
    }
    function setStem(stem) {
      assertNonEmpty(stem, "stem");
      assertPart(stem, "stem");
      this.path = p.join(this.dirname || "", stem + (this.extname || ""));
    }
    function toString(encoding) {
      return (this.contents || "").toString(encoding);
    }
    function assertPart(part, name) {
      if (part && part.indexOf(p.sep) > -1) {
        throw new Error("`" + name + "` cannot be a path: did not expect `" + p.sep + "`");
      }
    }
    function assertNonEmpty(part, name) {
      if (!part) {
        throw new Error("`" + name + "` cannot be empty");
      }
    }
    function assertPath(path, name) {
      if (!path) {
        throw new Error("Setting `" + name + "` requires `path` to be set too");
      }
    }
  }
});

// node_modules/vfile/lib/index.js
var require_lib = __commonJS({
  "node_modules/vfile/lib/index.js"(exports, module) {
    "use strict";
    var VMessage = require_vfile_message();
    var VFile = require_core();
    module.exports = VFile;
    VFile.prototype.message = message;
    VFile.prototype.info = info;
    VFile.prototype.fail = fail;
    function message(reason, position, origin) {
      var message2 = new VMessage(reason, position, origin);
      if (this.path) {
        message2.name = this.path + ":" + message2.name;
        message2.file = this.path;
      }
      message2.fatal = false;
      this.messages.push(message2);
      return message2;
    }
    function fail() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = true;
      throw message2;
    }
    function info() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = null;
      return message2;
    }
  }
});

// node_modules/vfile/index.js
var require_vfile = __commonJS({
  "node_modules/vfile/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib();
  }
});

// node_modules/unified/index.js
var require_unified = __commonJS({
  "node_modules/unified/index.js"(exports, module) {
    "use strict";
    var bail = require_bail();
    var buffer = require_is_buffer();
    var extend = require_extend();
    var plain = require_is_plain_obj();
    var trough = require_trough();
    var vfile = require_vfile();
    module.exports = unified2().freeze();
    var slice = [].slice;
    var own3 = {}.hasOwnProperty;
    var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
    function pipelineParse(p, ctx) {
      ctx.tree = p.parse(ctx.file);
    }
    function pipelineRun(p, ctx, next) {
      p.run(ctx.tree, ctx.file, done);
      function done(error, tree, file) {
        if (error) {
          next(error);
        } else {
          ctx.tree = tree;
          ctx.file = file;
          next();
        }
      }
    }
    function pipelineStringify(p, ctx) {
      var result = p.stringify(ctx.tree, ctx.file);
      if (result === void 0 || result === null) {
      } else if (typeof result === "string" || buffer(result)) {
        ctx.file.contents = result;
      } else {
        ctx.file.result = result;
      }
    }
    function unified2() {
      var attachers = [];
      var transformers = trough();
      var namespace = {};
      var freezeIndex = -1;
      var frozen;
      processor.data = data;
      processor.freeze = freeze;
      processor.attachers = attachers;
      processor.use = use;
      processor.parse = parse3;
      processor.stringify = stringify;
      processor.run = run;
      processor.runSync = runSync;
      processor.process = process2;
      processor.processSync = processSync;
      return processor;
      function processor() {
        var destination = unified2();
        var index = -1;
        while (++index < attachers.length) {
          destination.use.apply(null, attachers[index]);
        }
        destination.data(extend(true, {}, namespace));
        return destination;
      }
      function freeze() {
        var values;
        var transformer;
        if (frozen) {
          return processor;
        }
        while (++freezeIndex < attachers.length) {
          values = attachers[freezeIndex];
          if (values[1] === false) {
            continue;
          }
          if (values[1] === true) {
            values[1] = void 0;
          }
          transformer = values[0].apply(processor, values.slice(1));
          if (typeof transformer === "function") {
            transformers.use(transformer);
          }
        }
        frozen = true;
        freezeIndex = Infinity;
        return processor;
      }
      function data(key, value) {
        if (typeof key === "string") {
          if (arguments.length === 2) {
            assertUnfrozen("data", frozen);
            namespace[key] = value;
            return processor;
          }
          return own3.call(namespace, key) && namespace[key] || null;
        }
        if (key) {
          assertUnfrozen("data", frozen);
          namespace = key;
          return processor;
        }
        return namespace;
      }
      function use(value) {
        var settings;
        assertUnfrozen("use", frozen);
        if (value === null || value === void 0) {
        } else if (typeof value === "function") {
          addPlugin.apply(null, arguments);
        } else if (typeof value === "object") {
          if ("length" in value) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new Error("Expected usable value, not `" + value + "`");
        }
        if (settings) {
          namespace.settings = extend(namespace.settings || {}, settings);
        }
        return processor;
        function addPreset(result) {
          addList(result.plugins);
          if (result.settings) {
            settings = extend(settings || {}, result.settings);
          }
        }
        function add(value2) {
          if (typeof value2 === "function") {
            addPlugin(value2);
          } else if (typeof value2 === "object") {
            if ("length" in value2) {
              addPlugin.apply(null, value2);
            } else {
              addPreset(value2);
            }
          } else {
            throw new Error("Expected usable value, not `" + value2 + "`");
          }
        }
        function addList(plugins) {
          var index = -1;
          if (plugins === null || plugins === void 0) {
          } else if (typeof plugins === "object" && "length" in plugins) {
            while (++index < plugins.length) {
              add(plugins[index]);
            }
          } else {
            throw new Error("Expected a list of plugins, not `" + plugins + "`");
          }
        }
        function addPlugin(plugin, value2) {
          var entry = find2(plugin);
          if (entry) {
            if (plain(entry[1]) && plain(value2)) {
              value2 = extend(true, entry[1], value2);
            }
            entry[1] = value2;
          } else {
            attachers.push(slice.call(arguments));
          }
        }
      }
      function find2(plugin) {
        var index = -1;
        while (++index < attachers.length) {
          if (attachers[index][0] === plugin) {
            return attachers[index];
          }
        }
      }
      function parse3(doc) {
        var file = vfile(doc);
        var Parser;
        freeze();
        Parser = processor.Parser;
        assertParser("parse", Parser);
        if (newable(Parser, "parse")) {
          return new Parser(String(file), file).parse();
        }
        return Parser(String(file), file);
      }
      function run(node, file, cb) {
        assertNode(node);
        freeze();
        if (!cb && typeof file === "function") {
          cb = file;
          file = null;
        }
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          transformers.run(node, vfile(file), done);
          function done(error, tree, file2) {
            tree = tree || node;
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(tree);
            } else {
              cb(null, tree, file2);
            }
          }
        }
      }
      function runSync(node, file) {
        var result;
        var complete;
        run(node, file, done);
        assertDone("runSync", "run", complete);
        return result;
        function done(error, tree) {
          complete = true;
          result = tree;
          bail(error);
        }
      }
      function stringify(node, doc) {
        var file = vfile(doc);
        var Compiler;
        freeze();
        Compiler = processor.Compiler;
        assertCompiler("stringify", Compiler);
        assertNode(node);
        if (newable(Compiler, "compile")) {
          return new Compiler(node, file).compile();
        }
        return Compiler(node, file);
      }
      function process2(doc, cb) {
        freeze();
        assertParser("process", processor.Parser);
        assertCompiler("process", processor.Compiler);
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          var file = vfile(doc);
          pipeline.run(processor, {file}, done);
          function done(error) {
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(file);
            } else {
              cb(null, file);
            }
          }
        }
      }
      function processSync(doc) {
        var file;
        var complete;
        freeze();
        assertParser("processSync", processor.Parser);
        assertCompiler("processSync", processor.Compiler);
        file = vfile(doc);
        process2(file, done);
        assertDone("processSync", "process", complete);
        return file;
        function done(error) {
          complete = true;
          bail(error);
        }
      }
    }
    function newable(value, name) {
      return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
    }
    function keys(value) {
      var key;
      for (key in value) {
        return true;
      }
      return false;
    }
    function assertParser(name, Parser) {
      if (typeof Parser !== "function") {
        throw new Error("Cannot `" + name + "` without `Parser`");
      }
    }
    function assertCompiler(name, Compiler) {
      if (typeof Compiler !== "function") {
        throw new Error("Cannot `" + name + "` without `Compiler`");
      }
    }
    function assertUnfrozen(name, frozen) {
      if (frozen) {
        throw new Error("Cannot invoke `" + name + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
      }
    }
    function assertNode(node) {
      if (!node || typeof node.type !== "string") {
        throw new Error("Expected node, got `" + node + "`");
      }
    }
    function assertDone(name, asyncName, complete) {
      if (!complete) {
        throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
      }
    }
  }
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/schema.js
var require_schema = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/schema.js"(exports, module) {
    "use strict";
    module.exports = Schema2;
    var proto = Schema2.prototype;
    proto.space = null;
    proto.normal = {};
    proto.property = {};
    function Schema2(property, normal, space) {
      this.property = property;
      this.normal = normal;
      if (space) {
        this.space = space;
      }
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/merge.js
var require_merge = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/merge.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var Schema2 = require_schema();
    module.exports = merge2;
    function merge2(definitions) {
      var length = definitions.length;
      var property = [];
      var normal = [];
      var index = -1;
      var info;
      var space;
      while (++index < length) {
        info = definitions[index];
        property.push(info.property);
        normal.push(info.normal);
        space = info.space;
      }
      return new Schema2(xtend.apply(null, property), xtend.apply(null, normal), space);
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/normalize.js
var require_normalize = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/normalize.js"(exports, module) {
    "use strict";
    module.exports = normalize2;
    function normalize2(value) {
      return value.toLowerCase();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/info.js
var require_info = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/info.js"(exports, module) {
    "use strict";
    module.exports = Info2;
    var proto = Info2.prototype;
    proto.space = null;
    proto.attribute = null;
    proto.property = null;
    proto.boolean = false;
    proto.booleanish = false;
    proto.overloadedBoolean = false;
    proto.number = false;
    proto.commaSeparated = false;
    proto.spaceSeparated = false;
    proto.commaOrSpaceSeparated = false;
    proto.mustUseProperty = false;
    proto.defined = false;
    function Info2(property, attribute) {
      this.property = property;
      this.attribute = attribute;
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/types.js
var require_types = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/types.js"(exports) {
    "use strict";
    var powers2 = 0;
    exports.boolean = increment2();
    exports.booleanish = increment2();
    exports.overloadedBoolean = increment2();
    exports.number = increment2();
    exports.spaceSeparated = increment2();
    exports.commaSeparated = increment2();
    exports.commaOrSpaceSeparated = increment2();
    function increment2() {
      return Math.pow(2, ++powers2);
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/defined-info.js
var require_defined_info = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/defined-info.js"(exports, module) {
    "use strict";
    var Info2 = require_info();
    var types = require_types();
    module.exports = DefinedInfo2;
    DefinedInfo2.prototype = new Info2();
    DefinedInfo2.prototype.defined = true;
    var checks2 = [
      "boolean",
      "booleanish",
      "overloadedBoolean",
      "number",
      "commaSeparated",
      "spaceSeparated",
      "commaOrSpaceSeparated"
    ];
    var checksLength = checks2.length;
    function DefinedInfo2(property, attribute, mask, space) {
      var index = -1;
      var check;
      mark2(this, "space", space);
      Info2.call(this, property, attribute);
      while (++index < checksLength) {
        check = checks2[index];
        mark2(this, check, (mask & types[check]) === types[check]);
      }
    }
    function mark2(values, key, value) {
      if (value) {
        values[key] = value;
      }
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/create.js
var require_create = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/create.js"(exports, module) {
    "use strict";
    var normalize2 = require_normalize();
    var Schema2 = require_schema();
    var DefinedInfo2 = require_defined_info();
    module.exports = create2;
    function create2(definition) {
      var space = definition.space;
      var mustUseProperty = definition.mustUseProperty || [];
      var attributes = definition.attributes || {};
      var props = definition.properties;
      var transform = definition.transform;
      var property = {};
      var normal = {};
      var prop;
      var info;
      for (prop in props) {
        info = new DefinedInfo2(prop, transform(attributes, prop), props[prop], space);
        if (mustUseProperty.indexOf(prop) !== -1) {
          info.mustUseProperty = true;
        }
        property[prop] = info;
        normal[normalize2(prop)] = prop;
        normal[normalize2(info.attribute)] = prop;
      }
      return new Schema2(property, normal, space);
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/xlink.js
var require_xlink = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/xlink.js"(exports, module) {
    "use strict";
    var create2 = require_create();
    module.exports = create2({
      space: "xlink",
      transform: xlinkTransform2,
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
      }
    });
    function xlinkTransform2(_, prop) {
      return "xlink:" + prop.slice(5).toLowerCase();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/xml.js
var require_xml = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/xml.js"(exports, module) {
    "use strict";
    var create2 = require_create();
    module.exports = create2({
      space: "xml",
      transform: xmlTransform2,
      properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
      }
    });
    function xmlTransform2(_, prop) {
      return "xml:" + prop.slice(3).toLowerCase();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/case-sensitive-transform.js
var require_case_sensitive_transform = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
    "use strict";
    module.exports = caseSensitiveTransform2;
    function caseSensitiveTransform2(attributes, attribute) {
      return attribute in attributes ? attributes[attribute] : attribute;
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/case-insensitive-transform.js
var require_case_insensitive_transform = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
    "use strict";
    var caseSensitiveTransform2 = require_case_sensitive_transform();
    module.exports = caseInsensitiveTransform2;
    function caseInsensitiveTransform2(attributes, property) {
      return caseSensitiveTransform2(attributes, property.toLowerCase());
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/xmlns.js
var require_xmlns = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/xmlns.js"(exports, module) {
    "use strict";
    var create2 = require_create();
    var caseInsensitiveTransform2 = require_case_insensitive_transform();
    module.exports = create2({
      space: "xmlns",
      attributes: {
        xmlnsxlink: "xmlns:xlink"
      },
      transform: caseInsensitiveTransform2,
      properties: {
        xmlns: null,
        xmlnsXLink: null
      }
    });
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/aria.js
var require_aria = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/aria.js"(exports, module) {
    "use strict";
    var types = require_types();
    var create2 = require_create();
    var booleanish2 = types.booleanish;
    var number2 = types.number;
    var spaceSeparated2 = types.spaceSeparated;
    module.exports = create2({
      transform: ariaTransform2,
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: booleanish2,
        ariaAutoComplete: null,
        ariaBusy: booleanish2,
        ariaChecked: booleanish2,
        ariaColCount: number2,
        ariaColIndex: number2,
        ariaColSpan: number2,
        ariaControls: spaceSeparated2,
        ariaCurrent: null,
        ariaDescribedBy: spaceSeparated2,
        ariaDetails: null,
        ariaDisabled: booleanish2,
        ariaDropEffect: spaceSeparated2,
        ariaErrorMessage: null,
        ariaExpanded: booleanish2,
        ariaFlowTo: spaceSeparated2,
        ariaGrabbed: booleanish2,
        ariaHasPopup: null,
        ariaHidden: booleanish2,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: spaceSeparated2,
        ariaLevel: number2,
        ariaLive: null,
        ariaModal: booleanish2,
        ariaMultiLine: booleanish2,
        ariaMultiSelectable: booleanish2,
        ariaOrientation: null,
        ariaOwns: spaceSeparated2,
        ariaPlaceholder: null,
        ariaPosInSet: number2,
        ariaPressed: booleanish2,
        ariaReadOnly: booleanish2,
        ariaRelevant: null,
        ariaRequired: booleanish2,
        ariaRoleDescription: spaceSeparated2,
        ariaRowCount: number2,
        ariaRowIndex: number2,
        ariaRowSpan: number2,
        ariaSelected: booleanish2,
        ariaSetSize: number2,
        ariaSort: null,
        ariaValueMax: number2,
        ariaValueMin: number2,
        ariaValueNow: number2,
        ariaValueText: null,
        role: null
      }
    });
    function ariaTransform2(_, prop) {
      return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/svg.js
var require_svg = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/svg.js"(exports, module) {
    "use strict";
    var types = require_types();
    var create2 = require_create();
    var caseSensitiveTransform2 = require_case_sensitive_transform();
    var boolean2 = types.boolean;
    var number2 = types.number;
    var spaceSeparated2 = types.spaceSeparated;
    var commaSeparated2 = types.commaSeparated;
    var commaOrSpaceSeparated2 = types.commaOrSpaceSeparated;
    module.exports = create2({
      space: "svg",
      attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
      },
      transform: caseSensitiveTransform2,
      properties: {
        about: commaOrSpaceSeparated2,
        accentHeight: number2,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: number2,
        amplitude: number2,
        arabicForm: null,
        ascent: number2,
        attributeName: null,
        attributeType: null,
        azimuth: number2,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: number2,
        by: null,
        calcMode: null,
        capHeight: number2,
        className: spaceSeparated2,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: number2,
        diffuseConstant: number2,
        direction: null,
        display: null,
        dur: null,
        divisor: number2,
        dominantBaseline: null,
        download: boolean2,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: number2,
        enableBackground: null,
        end: null,
        event: null,
        exponent: number2,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: number2,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: commaSeparated2,
        g2: commaSeparated2,
        glyphName: commaSeparated2,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: number2,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: number2,
        horizOriginX: number2,
        horizOriginY: number2,
        id: null,
        ideographic: number2,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: number2,
        k: number2,
        k1: number2,
        k2: number2,
        k3: number2,
        k4: number2,
        kernelMatrix: commaOrSpaceSeparated2,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: number2,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: number2,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: number2,
        overlineThickness: number2,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: number2,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: spaceSeparated2,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: number2,
        pointsAtY: number2,
        pointsAtZ: number2,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: commaOrSpaceSeparated2,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: commaOrSpaceSeparated2,
        rev: commaOrSpaceSeparated2,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: commaOrSpaceSeparated2,
        requiredFeatures: commaOrSpaceSeparated2,
        requiredFonts: commaOrSpaceSeparated2,
        requiredFormats: commaOrSpaceSeparated2,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: number2,
        specularExponent: number2,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: number2,
        strikethroughThickness: number2,
        string: null,
        stroke: null,
        strokeDashArray: commaOrSpaceSeparated2,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: number2,
        strokeOpacity: number2,
        strokeWidth: null,
        style: null,
        surfaceScale: number2,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: commaOrSpaceSeparated2,
        tabIndex: number2,
        tableValues: null,
        target: null,
        targetX: number2,
        targetY: number2,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: commaOrSpaceSeparated2,
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: number2,
        underlineThickness: number2,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: number2,
        values: null,
        vAlphabetic: number2,
        vMathematical: number2,
        vectorEffect: null,
        vHanging: number2,
        vIdeographic: number2,
        version: null,
        vertAdvY: number2,
        vertOriginX: number2,
        vertOriginY: number2,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: number2,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
      }
    });
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/svg.js
var require_svg2 = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/svg.js"(exports, module) {
    "use strict";
    var merge2 = require_merge();
    var xlink2 = require_xlink();
    var xml2 = require_xml();
    var xmlns2 = require_xmlns();
    var aria2 = require_aria();
    var svg3 = require_svg();
    module.exports = merge2([xml2, xlink2, xmlns2, aria2, svg3]);
  }
});

// node_modules/hast-util-from-parse5/node_modules/hastscript/svg-case-sensitive-tag-names.json
var require_svg_case_sensitive_tag_names = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/hastscript/svg-case-sensitive-tag-names.json"(exports, module) {
    module.exports = [
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "solidColor",
      "textArea",
      "textPath"
    ];
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/find.js
var require_find = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/find.js"(exports, module) {
    "use strict";
    var normalize2 = require_normalize();
    var DefinedInfo2 = require_defined_info();
    var Info2 = require_info();
    var data = "data";
    module.exports = find2;
    var valid2 = /^data[-\w.:]+$/i;
    var dash2 = /-[a-z]/g;
    var cap2 = /[A-Z]/g;
    function find2(schema, value) {
      var normal = normalize2(value);
      var prop = value;
      var Type = Info2;
      if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
      }
      if (normal.length > 4 && normal.slice(0, 4) === data && valid2.test(value)) {
        if (value.charAt(4) === "-") {
          prop = datasetToProperty2(value);
        } else {
          value = datasetToAttribute2(value);
        }
        Type = DefinedInfo2;
      }
      return new Type(prop, value);
    }
    function datasetToProperty2(attribute) {
      var value = attribute.slice(5).replace(dash2, camelcase2);
      return data + value.charAt(0).toUpperCase() + value.slice(1);
    }
    function datasetToAttribute2(property) {
      var value = property.slice(4);
      if (dash2.test(value)) {
        return property;
      }
      value = value.replace(cap2, kebab2);
      if (value.charAt(0) !== "-") {
        value = "-" + value;
      }
      return data + value;
    }
    function kebab2($0) {
      return "-" + $0.toLowerCase();
    }
    function camelcase2($0) {
      return $0.charAt(1).toUpperCase();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/hast-util-parse-selector/index.js
var require_hast_util_parse_selector = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/hast-util-parse-selector/index.js"(exports, module) {
    "use strict";
    module.exports = parse3;
    var search2 = /[#.]/g;
    function parse3(selector, defaultTagName) {
      var value = selector || "";
      var name = defaultTagName || "div";
      var props = {};
      var start = 0;
      var subvalue;
      var previous;
      var match;
      while (start < value.length) {
        search2.lastIndex = start;
        match = search2.exec(value);
        subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
          if (!previous) {
            name = subvalue;
          } else if (previous === "#") {
            props.id = subvalue;
          } else if (props.className) {
            props.className.push(subvalue);
          } else {
            props.className = [subvalue];
          }
          start += subvalue.length;
        }
        if (match) {
          previous = match[0];
          start++;
        }
      }
      return {type: "element", tagName: name, properties: props, children: []};
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/space-separated-tokens/index.js
var require_space_separated_tokens = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/space-separated-tokens/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.stringify = stringify;
    var empty = "";
    var space = " ";
    var whiteSpace = /[ \t\n\r\f]+/g;
    function parse3(value) {
      var input = String(value || empty).trim();
      return input === empty ? [] : input.split(whiteSpace);
    }
    function stringify(values) {
      return values.join(space).trim();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/comma-separated-tokens/index.js
var require_comma_separated_tokens = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/comma-separated-tokens/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.stringify = stringify;
    var comma = ",";
    var space = " ";
    var empty = "";
    function parse3(value) {
      var values = [];
      var input = String(value || empty);
      var index = input.indexOf(comma);
      var lastIndex = 0;
      var end = false;
      var val;
      while (!end) {
        if (index === -1) {
          index = input.length;
          end = true;
        }
        val = input.slice(lastIndex, index).trim();
        if (val || !end) {
          values.push(val);
        }
        lastIndex = index + 1;
        index = input.indexOf(comma, lastIndex);
      }
      return values;
    }
    function stringify(values, options) {
      var settings = options || {};
      var left = settings.padLeft === false ? empty : space;
      var right = settings.padRight ? space : empty;
      if (values[values.length - 1] === empty) {
        values = values.concat(empty);
      }
      return values.join(right + comma + left).trim();
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/hastscript/factory.js
var require_factory = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/hastscript/factory.js"(exports, module) {
    "use strict";
    var find2 = require_find();
    var normalize2 = require_normalize();
    var parseSelector2 = require_hast_util_parse_selector();
    var spaces = require_space_separated_tokens().parse;
    var commas = require_comma_separated_tokens().parse;
    module.exports = factory;
    var own3 = {}.hasOwnProperty;
    function factory(schema, defaultTagName, caseSensitive) {
      var adjust = caseSensitive ? createAdjustMap2(caseSensitive) : null;
      return h2;
      function h2(selector, properties) {
        var node = parseSelector2(selector, defaultTagName);
        var children = Array.prototype.slice.call(arguments, 2);
        var name = node.tagName.toLowerCase();
        var property;
        node.tagName = adjust && own3.call(adjust, name) ? adjust[name] : name;
        if (properties && isChildren(properties, node)) {
          children.unshift(properties);
          properties = null;
        }
        if (properties) {
          for (property in properties) {
            addProperty2(node.properties, property, properties[property]);
          }
        }
        addChild2(node.children, children);
        if (node.tagName === "template") {
          node.content = {type: "root", children: node.children};
          node.children = [];
        }
        return node;
      }
      function addProperty2(properties, key, value) {
        var info;
        var property;
        var result;
        if (value === null || value === void 0 || value !== value) {
          return;
        }
        info = find2(schema, key);
        property = info.property;
        result = value;
        if (typeof result === "string") {
          if (info.spaceSeparated) {
            result = spaces(result);
          } else if (info.commaSeparated) {
            result = commas(result);
          } else if (info.commaOrSpaceSeparated) {
            result = spaces(commas(result).join(" "));
          }
        }
        if (property === "style" && typeof value !== "string") {
          result = style2(result);
        }
        if (property === "className" && properties.className) {
          result = properties.className.concat(result);
        }
        properties[property] = parsePrimitives(info, property, result);
      }
    }
    function isChildren(value, node) {
      return typeof value === "string" || "length" in value || isNode(node.tagName, value);
    }
    function isNode(tagName, value) {
      var type = value.type;
      if (tagName === "input" || !type || typeof type !== "string") {
        return false;
      }
      if (typeof value.children === "object" && "length" in value.children) {
        return true;
      }
      type = type.toLowerCase();
      if (tagName === "button") {
        return type !== "menu" && type !== "submit" && type !== "reset" && type !== "button";
      }
      return "value" in value;
    }
    function addChild2(nodes, value) {
      var index;
      var length;
      if (typeof value === "string" || typeof value === "number") {
        nodes.push({type: "text", value: String(value)});
        return;
      }
      if (typeof value === "object" && "length" in value) {
        index = -1;
        length = value.length;
        while (++index < length) {
          addChild2(nodes, value[index]);
        }
        return;
      }
      if (typeof value !== "object" || !("type" in value)) {
        throw new Error("Expected node, nodes, or string, got `" + value + "`");
      }
      nodes.push(value);
    }
    function parsePrimitives(info, name, value) {
      var index;
      var length;
      var result;
      if (typeof value !== "object" || !("length" in value)) {
        return parsePrimitive2(info, name, value);
      }
      length = value.length;
      index = -1;
      result = [];
      while (++index < length) {
        result[index] = parsePrimitive2(info, name, value[index]);
      }
      return result;
    }
    function parsePrimitive2(info, name, value) {
      var result = value;
      if (info.number || info.positiveNumber) {
        if (!isNaN(result) && result !== "") {
          result = Number(result);
        }
      } else if (info.boolean || info.overloadedBoolean) {
        if (typeof result === "string" && (result === "" || normalize2(value) === normalize2(name))) {
          result = true;
        }
      }
      return result;
    }
    function style2(value) {
      var result = [];
      var key;
      for (key in value) {
        result.push([key, value[key]].join(": "));
      }
      return result.join("; ");
    }
    function createAdjustMap2(values) {
      var length = values.length;
      var index = -1;
      var result = {};
      var value;
      while (++index < length) {
        value = values[index];
        result[value.toLowerCase()] = value;
      }
      return result;
    }
  }
});

// node_modules/hast-util-from-parse5/node_modules/hastscript/svg.js
var require_svg3 = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/hastscript/svg.js"(exports, module) {
    "use strict";
    var schema = require_svg2();
    var caseSensitive = require_svg_case_sensitive_tag_names();
    var factory = require_factory();
    var svg3 = factory(schema, "g", caseSensitive);
    svg3.displayName = "svg";
    module.exports = svg3;
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/lib/html.js
var require_html = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/lib/html.js"(exports, module) {
    "use strict";
    var types = require_types();
    var create2 = require_create();
    var caseInsensitiveTransform2 = require_case_insensitive_transform();
    var boolean2 = types.boolean;
    var overloadedBoolean2 = types.overloadedBoolean;
    var booleanish2 = types.booleanish;
    var number2 = types.number;
    var spaceSeparated2 = types.spaceSeparated;
    var commaSeparated2 = types.commaSeparated;
    module.exports = create2({
      space: "html",
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
      },
      transform: caseInsensitiveTransform2,
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        abbr: null,
        accept: commaSeparated2,
        acceptCharset: spaceSeparated2,
        accessKey: spaceSeparated2,
        action: null,
        allow: null,
        allowFullScreen: boolean2,
        allowPaymentRequest: boolean2,
        allowUserMedia: boolean2,
        alt: null,
        as: null,
        async: boolean2,
        autoCapitalize: null,
        autoComplete: spaceSeparated2,
        autoFocus: boolean2,
        autoPlay: boolean2,
        capture: boolean2,
        charSet: null,
        checked: boolean2,
        cite: null,
        className: spaceSeparated2,
        cols: number2,
        colSpan: null,
        content: null,
        contentEditable: booleanish2,
        controls: boolean2,
        controlsList: spaceSeparated2,
        coords: number2 | commaSeparated2,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: boolean2,
        defer: boolean2,
        dir: null,
        dirName: null,
        disabled: boolean2,
        download: overloadedBoolean2,
        draggable: booleanish2,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: boolean2,
        formTarget: null,
        headers: spaceSeparated2,
        height: number2,
        hidden: boolean2,
        high: number2,
        href: null,
        hrefLang: null,
        htmlFor: spaceSeparated2,
        httpEquiv: spaceSeparated2,
        id: null,
        imageSizes: null,
        imageSrcSet: commaSeparated2,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: boolean2,
        itemId: null,
        itemProp: spaceSeparated2,
        itemRef: spaceSeparated2,
        itemScope: boolean2,
        itemType: spaceSeparated2,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: boolean2,
        low: number2,
        manifest: null,
        max: null,
        maxLength: number2,
        media: null,
        method: null,
        min: null,
        minLength: number2,
        multiple: boolean2,
        muted: boolean2,
        name: null,
        nonce: null,
        noModule: boolean2,
        noValidate: boolean2,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: boolean2,
        optimum: number2,
        pattern: null,
        ping: spaceSeparated2,
        placeholder: null,
        playsInline: boolean2,
        poster: null,
        preload: null,
        readOnly: boolean2,
        referrerPolicy: null,
        rel: spaceSeparated2,
        required: boolean2,
        reversed: boolean2,
        rows: number2,
        rowSpan: number2,
        sandbox: spaceSeparated2,
        scope: null,
        scoped: boolean2,
        seamless: boolean2,
        selected: boolean2,
        shape: null,
        size: number2,
        sizes: null,
        slot: null,
        span: number2,
        spellCheck: booleanish2,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: commaSeparated2,
        start: number2,
        step: null,
        style: null,
        tabIndex: number2,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: boolean2,
        useMap: null,
        value: booleanish2,
        width: number2,
        wrap: null,
        align: null,
        aLink: null,
        archive: spaceSeparated2,
        axis: null,
        background: null,
        bgColor: null,
        border: number2,
        borderColor: null,
        bottomMargin: number2,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: boolean2,
        declare: boolean2,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: number2,
        leftMargin: number2,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: number2,
        marginWidth: number2,
        noResize: boolean2,
        noHref: boolean2,
        noShade: boolean2,
        noWrap: boolean2,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: number2,
        rules: null,
        scheme: null,
        scrolling: booleanish2,
        standby: null,
        summary: null,
        text: null,
        topMargin: number2,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: number2,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: boolean2,
        disableRemotePlayback: boolean2,
        prefix: null,
        property: null,
        results: number2,
        security: null,
        unselectable: null
      }
    });
  }
});

// node_modules/hast-util-from-parse5/node_modules/property-information/html.js
var require_html2 = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/property-information/html.js"(exports, module) {
    "use strict";
    var merge2 = require_merge();
    var xlink2 = require_xlink();
    var xml2 = require_xml();
    var xmlns2 = require_xmlns();
    var aria2 = require_aria();
    var html3 = require_html();
    module.exports = merge2([xml2, xlink2, xmlns2, aria2, html3]);
  }
});

// node_modules/hast-util-from-parse5/node_modules/hastscript/html.js
var require_html3 = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/hastscript/html.js"(exports, module) {
    "use strict";
    var schema = require_html2();
    var factory = require_factory();
    var html3 = factory(schema, "div");
    html3.displayName = "html";
    module.exports = html3;
  }
});

// node_modules/hast-util-from-parse5/node_modules/hastscript/index.js
var require_hastscript = __commonJS({
  "node_modules/hast-util-from-parse5/node_modules/hastscript/index.js"(exports, module) {
    "use strict";
    module.exports = require_html3();
  }
});

// node_modules/vfile-location/index.js
var require_vfile_location = __commonJS({
  "node_modules/vfile-location/index.js"(exports, module) {
    "use strict";
    module.exports = factory;
    function factory(file) {
      var value = String(file);
      var indices = [];
      var search2 = /\r?\n|\r/g;
      while (search2.exec(value)) {
        indices.push(search2.lastIndex);
      }
      indices.push(value.length + 1);
      return {
        toPoint: offsetToPoint,
        toPosition: offsetToPoint,
        toOffset: pointToOffset
      };
      function offsetToPoint(offset) {
        var index = -1;
        if (offset > -1 && offset < indices[indices.length - 1]) {
          while (++index < indices.length) {
            if (indices[index] > offset) {
              return {
                line: index + 1,
                column: offset - (indices[index - 1] || 0) + 1,
                offset
              };
            }
          }
        }
        return {};
      }
      function pointToOffset(point) {
        var line = point && point.line;
        var column = point && point.column;
        var offset;
        if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
          offset = (indices[line - 2] || 0) + column - 1 || 0;
        }
        return offset > -1 && offset < indices[indices.length - 1] ? offset : -1;
      }
    }
  }
});

// node_modules/web-namespaces/index.json
var require_web_namespaces = __commonJS({
  "node_modules/web-namespaces/index.json"(exports, module) {
    module.exports = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
  }
});

// node_modules/hast-util-from-parse5/index.js
var require_hast_util_from_parse5 = __commonJS({
  "node_modules/hast-util-from-parse5/index.js"(exports, module) {
    "use strict";
    var s3 = require_svg3();
    var h2 = require_hastscript();
    var find2 = require_find();
    var html3 = require_html2();
    var svg3 = require_svg2();
    var vfileLocation = require_vfile_location();
    var ns = require_web_namespaces();
    module.exports = wrapper;
    var own3 = {}.hasOwnProperty;
    var map = {
      "#document": root,
      "#document-fragment": root,
      "#text": text,
      "#comment": comment,
      "#documentType": doctype
    };
    function wrapper(ast, options) {
      var settings = options || {};
      var file;
      if (settings.messages) {
        file = settings;
        settings = {};
      } else {
        file = settings.file;
      }
      return transform(ast, {
        schema: settings.space === "svg" ? svg3 : html3,
        file,
        verbose: settings.verbose
      });
    }
    function transform(ast, config) {
      var schema = config.schema;
      var fn = own3.call(map, ast.nodeName) ? map[ast.nodeName] : element;
      var children;
      var result;
      var position2;
      if (fn === element) {
        config.schema = ast.namespaceURI === ns.svg ? svg3 : html3;
      }
      if (ast.childNodes) {
        children = nodes(ast.childNodes, config);
      }
      result = fn(ast, children, config);
      if (ast.sourceCodeLocation && config.file) {
        position2 = location(result, ast.sourceCodeLocation, config);
        if (position2) {
          config.location = true;
          result.position = position2;
        }
      }
      config.schema = schema;
      return result;
    }
    function nodes(children, config) {
      var index = -1;
      var result = [];
      while (++index < children.length) {
        result[index] = transform(children[index], config);
      }
      return result;
    }
    function root(ast, children, config) {
      var result = {
        type: "root",
        children,
        data: {quirksMode: ast.mode === "quirks" || ast.mode === "limited-quirks"}
      };
      var doc;
      var location2;
      if (config.file && config.location) {
        doc = String(config.file);
        location2 = vfileLocation(doc);
        result.position = {
          start: location2.toPoint(0),
          end: location2.toPoint(doc.length)
        };
      }
      return result;
    }
    function doctype(ast) {
      return {
        type: "doctype",
        name: ast.name || "",
        public: ast.publicId || null,
        system: ast.systemId || null
      };
    }
    function text(ast) {
      return {type: "text", value: ast.value};
    }
    function comment(ast) {
      return {type: "comment", value: ast.data};
    }
    function element(ast, children, config) {
      var fn = config.schema.space === "svg" ? s3 : h2;
      var props = {};
      var index = -1;
      var result;
      var attribute;
      var pos;
      var start;
      var end;
      while (++index < ast.attrs.length) {
        attribute = ast.attrs[index];
        props[(attribute.prefix ? attribute.prefix + ":" : "") + attribute.name] = attribute.value;
      }
      result = fn(ast.tagName, props, children);
      if (result.tagName === "template" && "content" in ast) {
        pos = ast.sourceCodeLocation;
        start = pos && pos.startTag && position(pos.startTag).end;
        end = pos && pos.endTag && position(pos.endTag).start;
        result.content = transform(ast.content, config);
        if ((start || end) && config.file) {
          result.content.position = {start, end};
        }
      }
      return result;
    }
    function location(node, location2, config) {
      var result = position(location2);
      var tail;
      var key;
      var props;
      if (node.type === "element") {
        tail = node.children[node.children.length - 1];
        if (!location2.endTag && tail && tail.position && tail.position.end) {
          result.end = Object.assign({}, tail.position.end);
        }
        if (config.verbose) {
          props = {};
          for (key in location2.attrs) {
            props[find2(config.schema, key).property] = position(location2.attrs[key]);
          }
          node.data = {
            position: {
              opening: position(location2.startTag),
              closing: location2.endTag ? position(location2.endTag) : null,
              properties: props
            }
          };
        }
      }
      return result;
    }
    function position(loc) {
      var start = point({
        line: loc.startLine,
        column: loc.startCol,
        offset: loc.startOffset
      });
      var end = point({
        line: loc.endLine,
        column: loc.endCol,
        offset: loc.endOffset
      });
      return start || end ? {start, end} : null;
    }
    function point(point2) {
      return point2.line && point2.column ? point2 : null;
    }
  }
});

// node_modules/parse5/lib/common/unicode.js
var require_unicode = __commonJS({
  "node_modules/parse5/lib/common/unicode.js"(exports) {
    "use strict";
    var UNDEFINED_CODE_POINTS = [
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ];
    exports.REPLACEMENT_CHARACTER = "\uFFFD";
    exports.CODE_POINTS = {
      EOF: -1,
      NULL: 0,
      TABULATION: 9,
      CARRIAGE_RETURN: 13,
      LINE_FEED: 10,
      FORM_FEED: 12,
      SPACE: 32,
      EXCLAMATION_MARK: 33,
      QUOTATION_MARK: 34,
      NUMBER_SIGN: 35,
      AMPERSAND: 38,
      APOSTROPHE: 39,
      HYPHEN_MINUS: 45,
      SOLIDUS: 47,
      DIGIT_0: 48,
      DIGIT_9: 57,
      SEMICOLON: 59,
      LESS_THAN_SIGN: 60,
      EQUALS_SIGN: 61,
      GREATER_THAN_SIGN: 62,
      QUESTION_MARK: 63,
      LATIN_CAPITAL_A: 65,
      LATIN_CAPITAL_F: 70,
      LATIN_CAPITAL_X: 88,
      LATIN_CAPITAL_Z: 90,
      RIGHT_SQUARE_BRACKET: 93,
      GRAVE_ACCENT: 96,
      LATIN_SMALL_A: 97,
      LATIN_SMALL_F: 102,
      LATIN_SMALL_X: 120,
      LATIN_SMALL_Z: 122,
      REPLACEMENT_CHARACTER: 65533
    };
    exports.CODE_POINT_SEQUENCES = {
      DASH_DASH_STRING: [45, 45],
      DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
      CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
      SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
      PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
      SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
    };
    exports.isSurrogate = function(cp) {
      return cp >= 55296 && cp <= 57343;
    };
    exports.isSurrogatePair = function(cp) {
      return cp >= 56320 && cp <= 57343;
    };
    exports.getSurrogatePairCodePoint = function(cp1, cp2) {
      return (cp1 - 55296) * 1024 + 9216 + cp2;
    };
    exports.isControlCodePoint = function(cp) {
      return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
    };
    exports.isUndefinedCodePoint = function(cp) {
      return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.indexOf(cp) > -1;
    };
  }
});

// node_modules/parse5/lib/common/error-codes.js
var require_error_codes = __commonJS({
  "node_modules/parse5/lib/common/error-codes.js"(exports, module) {
    "use strict";
    module.exports = {
      controlCharacterInInputStream: "control-character-in-input-stream",
      noncharacterInInputStream: "noncharacter-in-input-stream",
      surrogateInInputStream: "surrogate-in-input-stream",
      nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
      endTagWithAttributes: "end-tag-with-attributes",
      endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
      unexpectedSolidusInTag: "unexpected-solidus-in-tag",
      unexpectedNullCharacter: "unexpected-null-character",
      unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
      invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
      unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
      missingEndTagName: "missing-end-tag-name",
      unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
      unknownNamedCharacterReference: "unknown-named-character-reference",
      missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
      unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
      unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
      eofBeforeTagName: "eof-before-tag-name",
      eofInTag: "eof-in-tag",
      missingAttributeValue: "missing-attribute-value",
      missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
      missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
      missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
      missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
      missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
      missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
      missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
      missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
      abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
      abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
      cdataInHtmlContent: "cdata-in-html-content",
      incorrectlyOpenedComment: "incorrectly-opened-comment",
      eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
      eofInDoctype: "eof-in-doctype",
      nestedComment: "nested-comment",
      abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
      eofInComment: "eof-in-comment",
      incorrectlyClosedComment: "incorrectly-closed-comment",
      eofInCdata: "eof-in-cdata",
      absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
      nullCharacterReference: "null-character-reference",
      surrogateCharacterReference: "surrogate-character-reference",
      characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
      controlCharacterReference: "control-character-reference",
      noncharacterCharacterReference: "noncharacter-character-reference",
      missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
      missingDoctypeName: "missing-doctype-name",
      invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
      duplicateAttribute: "duplicate-attribute",
      nonConformingDoctype: "non-conforming-doctype",
      missingDoctype: "missing-doctype",
      misplacedDoctype: "misplaced-doctype",
      endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
      closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
      disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
      openElementsLeftAfterEof: "open-elements-left-after-eof",
      abandonedHeadElementChild: "abandoned-head-element-child",
      misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
      nestedNoscriptInHead: "nested-noscript-in-head",
      eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
    };
  }
});

// node_modules/parse5/lib/tokenizer/preprocessor.js
var require_preprocessor = __commonJS({
  "node_modules/parse5/lib/tokenizer/preprocessor.js"(exports, module) {
    "use strict";
    var unicode = require_unicode();
    var ERR = require_error_codes();
    var $ = unicode.CODE_POINTS;
    var DEFAULT_BUFFER_WATERLINE = 1 << 16;
    var Preprocessor = class {
      constructor() {
        this.html = null;
        this.pos = -1;
        this.lastGapPos = -1;
        this.lastCharPos = -1;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
      }
      _err() {
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.lastCharPos) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if (unicode.isSurrogatePair(nextCp)) {
            this.pos++;
            this._addGap();
            return unicode.getSurrogatePairCodePoint(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return $.EOF;
        }
        this._err(ERR.surrogateInInputStream);
        return cp;
      }
      dropParsedChunk() {
        if (this.pos > this.bufferWaterline) {
          this.lastCharPos -= this.pos;
          this.html = this.html.substring(this.pos);
          this.pos = 0;
          this.lastGapPos = -1;
          this.gapStack = [];
        }
      }
      write(chunk, isLastChunk) {
        if (this.html) {
          this.html += chunk;
        } else {
          this.html = chunk;
        }
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
      }
      advance() {
        this.pos++;
        if (this.pos > this.lastCharPos) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return $.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (this.skipNextNewLine && cp === $.LINE_FEED) {
          this.skipNextNewLine = false;
          this._addGap();
          return this.advance();
        }
        if (cp === $.CARRIAGE_RETURN) {
          this.skipNextNewLine = true;
          return $.LINE_FEED;
        }
        this.skipNextNewLine = false;
        if (unicode.isSurrogate(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange = cp > 31 && cp < 127 || cp === $.LINE_FEED || cp === $.CARRIAGE_RETURN || cp > 159 && cp < 64976;
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if (unicode.isControlCodePoint(cp)) {
          this._err(ERR.controlCharacterInInputStream);
        } else if (unicode.isUndefinedCodePoint(cp)) {
          this._err(ERR.noncharacterInInputStream);
        }
      }
      retreat() {
        if (this.pos === this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.pos--;
      }
    };
    module.exports = Preprocessor;
  }
});

// node_modules/parse5/lib/tokenizer/named-entity-data.js
var require_named_entity_data = __commonJS({
  "node_modules/parse5/lib/tokenizer/named-entity-data.js"(exports, module) {
    "use strict";
    module.exports = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);
  }
});

// node_modules/parse5/lib/tokenizer/index.js
var require_tokenizer = __commonJS({
  "node_modules/parse5/lib/tokenizer/index.js"(exports, module) {
    "use strict";
    var Preprocessor = require_preprocessor();
    var unicode = require_unicode();
    var neTree = require_named_entity_data();
    var ERR = require_error_codes();
    var $ = unicode.CODE_POINTS;
    var $$ = unicode.CODE_POINT_SEQUENCES;
    var C1_CONTROLS_REFERENCE_REPLACEMENTS = {
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
    var HAS_DATA_FLAG = 1 << 0;
    var DATA_DUPLET_FLAG = 1 << 1;
    var HAS_BRANCHES_FLAG = 1 << 2;
    var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;
    var DATA_STATE = "DATA_STATE";
    var RCDATA_STATE = "RCDATA_STATE";
    var RAWTEXT_STATE = "RAWTEXT_STATE";
    var SCRIPT_DATA_STATE = "SCRIPT_DATA_STATE";
    var PLAINTEXT_STATE = "PLAINTEXT_STATE";
    var TAG_OPEN_STATE = "TAG_OPEN_STATE";
    var END_TAG_OPEN_STATE = "END_TAG_OPEN_STATE";
    var TAG_NAME_STATE = "TAG_NAME_STATE";
    var RCDATA_LESS_THAN_SIGN_STATE = "RCDATA_LESS_THAN_SIGN_STATE";
    var RCDATA_END_TAG_OPEN_STATE = "RCDATA_END_TAG_OPEN_STATE";
    var RCDATA_END_TAG_NAME_STATE = "RCDATA_END_TAG_NAME_STATE";
    var RAWTEXT_LESS_THAN_SIGN_STATE = "RAWTEXT_LESS_THAN_SIGN_STATE";
    var RAWTEXT_END_TAG_OPEN_STATE = "RAWTEXT_END_TAG_OPEN_STATE";
    var RAWTEXT_END_TAG_NAME_STATE = "RAWTEXT_END_TAG_NAME_STATE";
    var SCRIPT_DATA_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_LESS_THAN_SIGN_STATE";
    var SCRIPT_DATA_END_TAG_OPEN_STATE = "SCRIPT_DATA_END_TAG_OPEN_STATE";
    var SCRIPT_DATA_END_TAG_NAME_STATE = "SCRIPT_DATA_END_TAG_NAME_STATE";
    var SCRIPT_DATA_ESCAPE_START_STATE = "SCRIPT_DATA_ESCAPE_START_STATE";
    var SCRIPT_DATA_ESCAPE_START_DASH_STATE = "SCRIPT_DATA_ESCAPE_START_DASH_STATE";
    var SCRIPT_DATA_ESCAPED_STATE = "SCRIPT_DATA_ESCAPED_STATE";
    var SCRIPT_DATA_ESCAPED_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_STATE";
    var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE";
    var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
    var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE";
    var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE";
    var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE";
    var BEFORE_ATTRIBUTE_NAME_STATE = "BEFORE_ATTRIBUTE_NAME_STATE";
    var ATTRIBUTE_NAME_STATE = "ATTRIBUTE_NAME_STATE";
    var AFTER_ATTRIBUTE_NAME_STATE = "AFTER_ATTRIBUTE_NAME_STATE";
    var BEFORE_ATTRIBUTE_VALUE_STATE = "BEFORE_ATTRIBUTE_VALUE_STATE";
    var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE";
    var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE";
    var ATTRIBUTE_VALUE_UNQUOTED_STATE = "ATTRIBUTE_VALUE_UNQUOTED_STATE";
    var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";
    var SELF_CLOSING_START_TAG_STATE = "SELF_CLOSING_START_TAG_STATE";
    var BOGUS_COMMENT_STATE = "BOGUS_COMMENT_STATE";
    var MARKUP_DECLARATION_OPEN_STATE = "MARKUP_DECLARATION_OPEN_STATE";
    var COMMENT_START_STATE = "COMMENT_START_STATE";
    var COMMENT_START_DASH_STATE = "COMMENT_START_DASH_STATE";
    var COMMENT_STATE = "COMMENT_STATE";
    var COMMENT_LESS_THAN_SIGN_STATE = "COMMENT_LESS_THAN_SIGN_STATE";
    var COMMENT_LESS_THAN_SIGN_BANG_STATE = "COMMENT_LESS_THAN_SIGN_BANG_STATE";
    var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE";
    var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE";
    var COMMENT_END_DASH_STATE = "COMMENT_END_DASH_STATE";
    var COMMENT_END_STATE = "COMMENT_END_STATE";
    var COMMENT_END_BANG_STATE = "COMMENT_END_BANG_STATE";
    var DOCTYPE_STATE = "DOCTYPE_STATE";
    var BEFORE_DOCTYPE_NAME_STATE = "BEFORE_DOCTYPE_NAME_STATE";
    var DOCTYPE_NAME_STATE = "DOCTYPE_NAME_STATE";
    var AFTER_DOCTYPE_NAME_STATE = "AFTER_DOCTYPE_NAME_STATE";
    var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE";
    var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
    var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";
    var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";
    var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
    var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE";
    var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE";
    var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
    var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
    var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
    var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
    var BOGUS_DOCTYPE_STATE = "BOGUS_DOCTYPE_STATE";
    var CDATA_SECTION_STATE = "CDATA_SECTION_STATE";
    var CDATA_SECTION_BRACKET_STATE = "CDATA_SECTION_BRACKET_STATE";
    var CDATA_SECTION_END_STATE = "CDATA_SECTION_END_STATE";
    var CHARACTER_REFERENCE_STATE = "CHARACTER_REFERENCE_STATE";
    var NAMED_CHARACTER_REFERENCE_STATE = "NAMED_CHARACTER_REFERENCE_STATE";
    var AMBIGUOUS_AMPERSAND_STATE = "AMBIGUOS_AMPERSAND_STATE";
    var NUMERIC_CHARACTER_REFERENCE_STATE = "NUMERIC_CHARACTER_REFERENCE_STATE";
    var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";
    var DECIMAL_CHARACTER_REFERENCE_START_STATE = "DECIMAL_CHARACTER_REFERENCE_START_STATE";
    var HEXADEMICAL_CHARACTER_REFERENCE_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_STATE";
    var DECIMAL_CHARACTER_REFERENCE_STATE = "DECIMAL_CHARACTER_REFERENCE_STATE";
    var NUMERIC_CHARACTER_REFERENCE_END_STATE = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
    function isWhitespace(cp) {
      return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
    }
    function isAsciiDigit(cp) {
      return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
    }
    function isAsciiUpper(cp) {
      return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(cp) {
      return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
    }
    function isAsciiLetter(cp) {
      return isAsciiLower(cp) || isAsciiUpper(cp);
    }
    function isAsciiAlphaNumeric(cp) {
      return isAsciiLetter(cp) || isAsciiDigit(cp);
    }
    function isAsciiUpperHexDigit(cp) {
      return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F;
    }
    function isAsciiLowerHexDigit(cp) {
      return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F;
    }
    function isAsciiHexDigit(cp) {
      return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
    }
    function toAsciiLowerCodePoint(cp) {
      return cp + 32;
    }
    function toChar(cp) {
      if (cp <= 65535) {
        return String.fromCharCode(cp);
      }
      cp -= 65536;
      return String.fromCharCode(cp >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | cp & 1023);
    }
    function toAsciiLowerChar(cp) {
      return String.fromCharCode(toAsciiLowerCodePoint(cp));
    }
    function findNamedEntityTreeBranch(nodeIx, cp) {
      const branchCount = neTree[++nodeIx];
      let lo = ++nodeIx;
      let hi = lo + branchCount - 1;
      while (lo <= hi) {
        const mid = lo + hi >>> 1;
        const midCp = neTree[mid];
        if (midCp < cp) {
          lo = mid + 1;
        } else if (midCp > cp) {
          hi = mid - 1;
        } else {
          return neTree[mid + branchCount];
        }
      }
      return -1;
    }
    var Tokenizer = class {
      constructor() {
        this.preprocessor = new Preprocessor();
        this.tokenQueue = [];
        this.allowCDATA = false;
        this.state = DATA_STATE;
        this.returnState = "";
        this.charRefCode = -1;
        this.tempBuff = [];
        this.lastStartTagName = "";
        this.consumedAfterSnapshot = -1;
        this.active = false;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = null;
      }
      _err() {
      }
      _errOnNextCodePoint(err) {
        this._consume();
        this._err(err);
        this._unconsume();
      }
      getNextToken() {
        while (!this.tokenQueue.length && this.active) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this[this.state](cp);
          }
        }
        return this.tokenQueue.shift();
      }
      write(chunk, isLastChunk) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
      }
      insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
      }
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
            this.preprocessor.retreat();
          }
          this.active = false;
          this.tokenQueue.push({type: Tokenizer.HIBERNATION_TOKEN});
          return true;
        }
        return false;
      }
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _unconsume() {
        this.consumedAfterSnapshot--;
        this.preprocessor.retreat();
      }
      _reconsumeInState(state) {
        this.state = state;
        this._unconsume();
      }
      _consumeSequenceIfMatch(pattern, startCp, caseSensitive) {
        let consumedCount = 0;
        let isMatch = true;
        const patternLength = pattern.length;
        let patternPos = 0;
        let cp = startCp;
        let patternCp = void 0;
        for (; patternPos < patternLength; patternPos++) {
          if (patternPos > 0) {
            cp = this._consume();
            consumedCount++;
          }
          if (cp === $.EOF) {
            isMatch = false;
            break;
          }
          patternCp = pattern[patternPos];
          if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
            isMatch = false;
            break;
          }
        }
        if (!isMatch) {
          while (consumedCount--) {
            this._unconsume();
          }
        }
        return isMatch;
      }
      _isTempBufferEqualToScriptString() {
        if (this.tempBuff.length !== $$.SCRIPT_STRING.length) {
          return false;
        }
        for (let i = 0; i < this.tempBuff.length; i++) {
          if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) {
            return false;
          }
        }
        return true;
      }
      _createStartTagToken() {
        this.currentToken = {
          type: Tokenizer.START_TAG_TOKEN,
          tagName: "",
          selfClosing: false,
          ackSelfClosing: false,
          attrs: []
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: Tokenizer.END_TAG_TOKEN,
          tagName: "",
          selfClosing: false,
          attrs: []
        };
      }
      _createCommentToken() {
        this.currentToken = {
          type: Tokenizer.COMMENT_TOKEN,
          data: ""
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: Tokenizer.DOCTYPE_TOKEN,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null
        };
      }
      _createCharacterToken(type, ch) {
        this.currentCharacterToken = {
          type,
          chars: ch
        };
      }
      _createEOFToken() {
        this.currentToken = {type: Tokenizer.EOF_TOKEN};
      }
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ""
        };
      }
      _leaveAttrName(toState) {
        if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
          this.currentToken.attrs.push(this.currentAttr);
        } else {
          this._err(ERR.duplicateAttribute);
        }
        this.state = toState;
      }
      _leaveAttrValue(toState) {
        this.state = toState;
      }
      _emitCurrentToken() {
        this._emitCurrentCharacterToken();
        const ct = this.currentToken;
        this.currentToken = null;
        if (ct.type === Tokenizer.START_TAG_TOKEN) {
          this.lastStartTagName = ct.tagName;
        } else if (ct.type === Tokenizer.END_TAG_TOKEN) {
          if (ct.attrs.length > 0) {
            this._err(ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(ERR.endTagWithTrailingSolidus);
          }
        }
        this.tokenQueue.push(ct);
      }
      _emitCurrentCharacterToken() {
        if (this.currentCharacterToken) {
          this.tokenQueue.push(this.currentCharacterToken);
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        this._createEOFToken();
        this._emitCurrentToken();
      }
      _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken && this.currentCharacterToken.type !== type) {
          this._emitCurrentCharacterToken();
        }
        if (this.currentCharacterToken) {
          this.currentCharacterToken.chars += ch;
        } else {
          this._createCharacterToken(type, ch);
        }
      }
      _emitCodePoint(cp) {
        let type = Tokenizer.CHARACTER_TOKEN;
        if (isWhitespace(cp)) {
          type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        } else if (cp === $.NULL) {
          type = Tokenizer.NULL_CHARACTER_TOKEN;
        }
        this._appendCharToCurrentCharacterToken(type, toChar(cp));
      }
      _emitSeveralCodePoints(codePoints) {
        for (let i = 0; i < codePoints.length; i++) {
          this._emitCodePoint(codePoints[i]);
        }
      }
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
      }
      _matchNamedCharacterReference(startCp) {
        let result = null;
        let excess = 1;
        let i = findNamedEntityTreeBranch(0, startCp);
        this.tempBuff.push(startCp);
        while (i > -1) {
          const current = neTree[i];
          const inNode = current < MAX_BRANCH_MARKER_VALUE;
          const nodeWithData = inNode && current & HAS_DATA_FLAG;
          if (nodeWithData) {
            result = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
            excess = 0;
          }
          const cp = this._consume();
          this.tempBuff.push(cp);
          excess++;
          if (cp === $.EOF) {
            break;
          }
          if (inNode) {
            i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;
          } else {
            i = cp === current ? ++i : -1;
          }
        }
        while (excess--) {
          this.tempBuff.pop();
          this._unconsume();
        }
        return result;
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_UNQUOTED_STATE;
      }
      _isCharacterReferenceAttributeQuirk(withSemicolon) {
        if (!withSemicolon && this._isCharacterReferenceInAttribute()) {
          const nextCp = this._consume();
          this._unconsume();
          return nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
        }
        return false;
      }
      _flushCodePointsConsumedAsCharacterReference() {
        if (this._isCharacterReferenceInAttribute()) {
          for (let i = 0; i < this.tempBuff.length; i++) {
            this.currentAttr.value += toChar(this.tempBuff[i]);
          }
        } else {
          this._emitSeveralCodePoints(this.tempBuff);
        }
        this.tempBuff = [];
      }
      [DATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = TAG_OPEN_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = DATA_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitCodePoint(cp);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [RCDATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.AMPERSAND) {
          this.returnState = RCDATA_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = RCDATA_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [RAWTEXT_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [PLAINTEXT_STATE](cp) {
        this.preprocessor.dropParsedChunk();
        if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [TAG_OPEN_STATE](cp) {
        if (cp === $.EXCLAMATION_MARK) {
          this.state = MARKUP_DECLARATION_OPEN_STATE;
        } else if (cp === $.SOLIDUS) {
          this.state = END_TAG_OPEN_STATE;
        } else if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this._reconsumeInState(TAG_NAME_STATE);
        } else if (cp === $.QUESTION_MARK) {
          this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        } else if (cp === $.EOF) {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("<");
          this._emitEOFToken();
        } else {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._emitChars("<");
          this._reconsumeInState(DATA_STATE);
        }
      }
      [END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(TAG_NAME_STATE);
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingEndTagName);
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofBeforeTagName);
          this._emitChars("</");
          this._emitEOFToken();
        } else {
          this._err(ERR.invalidFirstCharacterOfTagName);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
      }
      [TAG_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
        } else if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.tagName += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentToken.tagName += toChar(cp);
        }
      }
      [RCDATA_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = RCDATA_END_TAG_OPEN_STATE;
        } else {
          this._emitChars("<");
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      [RCDATA_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      [RCDATA_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this.state = DATA_STATE;
              this._emitCurrentToken();
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(RCDATA_STATE);
        }
      }
      [RAWTEXT_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = RAWTEXT_END_TAG_OPEN_STATE;
        } else {
          this._emitChars("<");
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      [RAWTEXT_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      [RAWTEXT_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(RAWTEXT_STATE);
        }
      }
      [SCRIPT_DATA_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
        } else if (cp === $.EXCLAMATION_MARK) {
          this.state = SCRIPT_DATA_ESCAPE_START_STATE;
          this._emitChars("<!");
        } else {
          this._emitChars("<");
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            } else if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            } else if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPE_START_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
          this._emitChars("-");
        } else {
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPE_START_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
          this._emitChars("-");
        } else {
          this._reconsumeInState(SCRIPT_DATA_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPED_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_ESCAPED_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_ESCAPED_DASH_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = SCRIPT_DATA_STATE;
          this._emitChars(">");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
        } else if (isAsciiLetter(cp)) {
          this.tempBuff = [];
          this._emitChars("<");
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
        } else {
          this._emitChars("<");
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE](cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
        } else {
          this._emitChars("</");
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE](cp) {
        if (isAsciiUpper(cp)) {
          this.currentToken.tagName += toAsciiLowerChar(cp);
          this.tempBuff.push(cp);
        } else if (isAsciiLower(cp)) {
          this.currentToken.tagName += toChar(cp);
          this.tempBuff.push(cp);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(cp)) {
              this.state = BEFORE_ATTRIBUTE_NAME_STATE;
              return;
            }
            if (cp === $.SOLIDUS) {
              this.state = SELF_CLOSING_START_TAG_STATE;
              return;
            }
            if (cp === $.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = DATA_STATE;
              return;
            }
          }
          this._emitChars("</");
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
          this._emitCodePoint(cp);
        } else if (isAsciiUpper(cp)) {
          this.tempBuff.push(toAsciiLowerCodePoint(cp));
          this._emitCodePoint(cp);
        } else if (isAsciiLower(cp)) {
          this.tempBuff.push(cp);
          this._emitCodePoint(cp);
        } else {
          this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars("<");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars("<");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this._emitChars("-");
        } else if (cp === $.LESS_THAN_SIGN) {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
          this._emitChars("<");
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = SCRIPT_DATA_STATE;
          this._emitChars(">");
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitChars(unicode.REPLACEMENT_CHARACTER);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.SOLIDUS) {
          this.tempBuff = [];
          this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
          this._emitChars("/");
        } else {
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
        }
      }
      [SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
          this._emitCodePoint(cp);
        } else if (isAsciiUpper(cp)) {
          this.tempBuff.push(toAsciiLowerCodePoint(cp));
          this._emitCodePoint(cp);
        } else if (isAsciiLower(cp)) {
          this.tempBuff.push(cp);
          this._emitCodePoint(cp);
        } else {
          this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
        }
      }
      [BEFORE_ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
          this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.EQUALS_SIGN) {
          this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
          this._createAttr("=");
          this.state = ATTRIBUTE_NAME_STATE;
        } else {
          this._createAttr("");
          this._reconsumeInState(ATTRIBUTE_NAME_STATE);
        }
      }
      [ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
          this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
          this._unconsume();
        } else if (cp === $.EQUALS_SIGN) {
          this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
        } else if (isAsciiUpper(cp)) {
          this.currentAttr.name += toAsciiLowerChar(cp);
        } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
          this._err(ERR.unexpectedCharacterInAttributeName);
          this.currentAttr.name += toChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.name += unicode.REPLACEMENT_CHARACTER;
        } else {
          this.currentAttr.name += toChar(cp);
        }
      }
      [AFTER_ATTRIBUTE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
        } else if (cp === $.EQUALS_SIGN) {
          this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._createAttr("");
          this._reconsumeInState(ATTRIBUTE_NAME_STATE);
        }
      }
      [BEFORE_ATTRIBUTE_VALUE_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingAttributeValue);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
        }
      }
      [ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      [ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      [ATTRIBUTE_VALUE_UNQUOTED_STATE](cp) {
        if (isWhitespace(cp)) {
          this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.AMPERSAND) {
          this.returnState = ATTRIBUTE_VALUE_UNQUOTED_STATE;
          this.state = CHARACTER_REFERENCE_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._leaveAttrValue(DATA_STATE);
          this._emitCurrentToken();
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
          this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
          this.currentAttr.value += toChar(cp);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(cp);
        }
      }
      [AFTER_ATTRIBUTE_VALUE_QUOTED_STATE](cp) {
        if (isWhitespace(cp)) {
          this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
        } else if (cp === $.SOLIDUS) {
          this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._leaveAttrValue(DATA_STATE);
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(ERR.missingWhitespaceBetweenAttributes);
          this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
        }
      }
      [SELF_CLOSING_START_TAG_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.currentToken.selfClosing = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(ERR.unexpectedSolidusInTag);
          this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
        }
      }
      [BOGUS_COMMENT_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
        } else {
          this.currentToken.data += toChar(cp);
        }
      }
      [MARKUP_DECLARATION_OPEN_STATE](cp) {
        if (this._consumeSequenceIfMatch($$.DASH_DASH_STRING, cp, true)) {
          this._createCommentToken();
          this.state = COMMENT_START_STATE;
        } else if (this._consumeSequenceIfMatch($$.DOCTYPE_STRING, cp, false)) {
          this.state = DOCTYPE_STATE;
        } else if (this._consumeSequenceIfMatch($$.CDATA_START_STRING, cp, true)) {
          if (this.allowCDATA) {
            this.state = CDATA_SECTION_STATE;
          } else {
            this._err(ERR.cdataInHtmlContent);
            this._createCommentToken();
            this.currentToken.data = "[CDATA[";
            this.state = BOGUS_COMMENT_STATE;
          }
        } else if (!this._ensureHibernation()) {
          this._err(ERR.incorrectlyOpenedComment);
          this._createCommentToken();
          this._reconsumeInState(BOGUS_COMMENT_STATE);
        }
      }
      [COMMENT_START_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_START_DASH_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptClosingOfEmptyComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_START_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptClosingOfEmptyComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "-";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_DASH_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.currentToken.data += "<";
          this.state = COMMENT_LESS_THAN_SIGN_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += toChar(cp);
        }
      }
      [COMMENT_LESS_THAN_SIGN_STATE](cp) {
        if (cp === $.EXCLAMATION_MARK) {
          this.currentToken.data += "!";
          this.state = COMMENT_LESS_THAN_SIGN_BANG_STATE;
        } else if (cp === $.LESS_THAN_SIGN) {
          this.currentToken.data += "!";
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_LESS_THAN_SIGN_BANG_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;
        } else {
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;
        } else {
          this._reconsumeInState(COMMENT_END_DASH_STATE);
        }
      }
      [COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE](cp) {
        if (cp !== $.GREATER_THAN_SIGN && cp !== $.EOF) {
          this._err(ERR.nestedComment);
        }
        this._reconsumeInState(COMMENT_END_STATE);
      }
      [COMMENT_END_DASH_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.state = COMMENT_END_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "-";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_END_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EXCLAMATION_MARK) {
          this.state = COMMENT_END_BANG_STATE;
        } else if (cp === $.HYPHEN_MINUS) {
          this.currentToken.data += "-";
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "--";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [COMMENT_END_BANG_STATE](cp) {
        if (cp === $.HYPHEN_MINUS) {
          this.currentToken.data += "--!";
          this.state = COMMENT_END_DASH_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.incorrectlyClosedComment);
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += "--!";
          this._reconsumeInState(COMMENT_STATE);
        }
      }
      [DOCTYPE_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingWhitespaceBeforeDoctypeName);
          this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
        }
      }
      [BEFORE_DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(toAsciiLowerChar(cp));
          this.state = DOCTYPE_NAME_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this._createDoctypeToken(unicode.REPLACEMENT_CHARACTER);
          this.state = DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeName);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._createDoctypeToken(toChar(cp));
          this.state = DOCTYPE_NAME_STATE;
        }
      }
      [DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = AFTER_DOCTYPE_NAME_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (isAsciiUpper(cp)) {
          this.currentToken.name += toAsciiLowerChar(cp);
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.name += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.name += toChar(cp);
        }
      }
      [AFTER_DOCTYPE_NAME_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (this._consumeSequenceIfMatch($$.PUBLIC_STRING, cp, false)) {
          this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;
        } else if (this._consumeSequenceIfMatch($$.SYSTEM_STRING, cp, false)) {
          this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;
        } else if (!this._ensureHibernation()) {
          this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.publicId = "";
          this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(cp);
        }
      }
      [DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(cp);
        }
      }
      [AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE](cp) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.QUOTATION_MARK) {
          this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.QUOTATION_MARK) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
        } else if (cp === $.APOSTROPHE) {
          this.currentToken.systemId = "";
          this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = DATA_STATE;
          this._emitCurrentToken();
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
        if (cp === $.QUOTATION_MARK) {
          this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(cp);
        }
      }
      [DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
        if (cp === $.APOSTROPHE) {
          this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
          this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._err(ERR.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(cp);
        }
      }
      [AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
        if (isWhitespace(cp)) {
          return;
        }
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
          this._reconsumeInState(BOGUS_DOCTYPE_STATE);
        }
      }
      [BOGUS_DOCTYPE_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = DATA_STATE;
        } else if (cp === $.NULL) {
          this._err(ERR.unexpectedNullCharacter);
        } else if (cp === $.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        }
      }
      [CDATA_SECTION_STATE](cp) {
        if (cp === $.RIGHT_SQUARE_BRACKET) {
          this.state = CDATA_SECTION_BRACKET_STATE;
        } else if (cp === $.EOF) {
          this._err(ERR.eofInCdata);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(cp);
        }
      }
      [CDATA_SECTION_BRACKET_STATE](cp) {
        if (cp === $.RIGHT_SQUARE_BRACKET) {
          this.state = CDATA_SECTION_END_STATE;
        } else {
          this._emitChars("]");
          this._reconsumeInState(CDATA_SECTION_STATE);
        }
      }
      [CDATA_SECTION_END_STATE](cp) {
        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;
        } else if (cp === $.RIGHT_SQUARE_BRACKET) {
          this._emitChars("]");
        } else {
          this._emitChars("]]");
          this._reconsumeInState(CDATA_SECTION_STATE);
        }
      }
      [CHARACTER_REFERENCE_STATE](cp) {
        this.tempBuff = [$.AMPERSAND];
        if (cp === $.NUMBER_SIGN) {
          this.tempBuff.push(cp);
          this.state = NUMERIC_CHARACTER_REFERENCE_STATE;
        } else if (isAsciiAlphaNumeric(cp)) {
          this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [NAMED_CHARACTER_REFERENCE_STATE](cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        if (this._ensureHibernation()) {
          this.tempBuff = [$.AMPERSAND];
        } else if (matchResult) {
          const withSemicolon = this.tempBuff[this.tempBuff.length - 1] === $.SEMICOLON;
          if (!this._isCharacterReferenceAttributeQuirk(withSemicolon)) {
            if (!withSemicolon) {
              this._errOnNextCodePoint(ERR.missingSemicolonAfterCharacterReference);
            }
            this.tempBuff = matchResult;
          }
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = this.returnState;
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = AMBIGUOUS_AMPERSAND_STATE;
        }
      }
      [AMBIGUOUS_AMPERSAND_STATE](cp) {
        if (isAsciiAlphaNumeric(cp)) {
          if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += toChar(cp);
          } else {
            this._emitCodePoint(cp);
          }
        } else {
          if (cp === $.SEMICOLON) {
            this._err(ERR.unknownNamedCharacterReference);
          }
          this._reconsumeInState(this.returnState);
        }
      }
      [NUMERIC_CHARACTER_REFERENCE_STATE](cp) {
        this.charRefCode = 0;
        if (cp === $.LATIN_SMALL_X || cp === $.LATIN_CAPITAL_X) {
          this.tempBuff.push(cp);
          this.state = HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;
        } else {
          this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);
        }
      }
      [HEXADEMICAL_CHARACTER_REFERENCE_START_STATE](cp) {
        if (isAsciiHexDigit(cp)) {
          this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);
        } else {
          this._err(ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [DECIMAL_CHARACTER_REFERENCE_START_STATE](cp) {
        if (isAsciiDigit(cp)) {
          this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);
        } else {
          this._err(ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [HEXADEMICAL_CHARACTER_REFERENCE_STATE](cp) {
        if (isAsciiUpperHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 55;
        } else if (isAsciiLowerHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 87;
        } else if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 48;
        } else if (cp === $.SEMICOLON) {
          this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
        } else {
          this._err(ERR.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
        }
      }
      [DECIMAL_CHARACTER_REFERENCE_STATE](cp) {
        if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 10 + cp - 48;
        } else if (cp === $.SEMICOLON) {
          this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
        } else {
          this._err(ERR.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
        }
      }
      [NUMERIC_CHARACTER_REFERENCE_END_STATE]() {
        if (this.charRefCode === $.NULL) {
          this._err(ERR.nullCharacterReference);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (this.charRefCode > 1114111) {
          this._err(ERR.characterReferenceOutsideUnicodeRange);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (unicode.isSurrogate(this.charRefCode)) {
          this._err(ERR.surrogateCharacterReference);
          this.charRefCode = $.REPLACEMENT_CHARACTER;
        } else if (unicode.isUndefinedCodePoint(this.charRefCode)) {
          this._err(ERR.noncharacterCharacterReference);
        } else if (unicode.isControlCodePoint(this.charRefCode) || this.charRefCode === $.CARRIAGE_RETURN) {
          this._err(ERR.controlCharacterReference);
          const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];
          if (replacement) {
            this.charRefCode = replacement;
          }
        }
        this.tempBuff = [this.charRefCode];
        this._flushCodePointsConsumedAsCharacterReference();
        this._reconsumeInState(this.returnState);
      }
    };
    Tokenizer.CHARACTER_TOKEN = "CHARACTER_TOKEN";
    Tokenizer.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
    Tokenizer.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
    Tokenizer.START_TAG_TOKEN = "START_TAG_TOKEN";
    Tokenizer.END_TAG_TOKEN = "END_TAG_TOKEN";
    Tokenizer.COMMENT_TOKEN = "COMMENT_TOKEN";
    Tokenizer.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
    Tokenizer.EOF_TOKEN = "EOF_TOKEN";
    Tokenizer.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
    Tokenizer.MODE = {
      DATA: DATA_STATE,
      RCDATA: RCDATA_STATE,
      RAWTEXT: RAWTEXT_STATE,
      SCRIPT_DATA: SCRIPT_DATA_STATE,
      PLAINTEXT: PLAINTEXT_STATE
    };
    Tokenizer.getTokenAttr = function(token2, attrName) {
      for (let i = token2.attrs.length - 1; i >= 0; i--) {
        if (token2.attrs[i].name === attrName) {
          return token2.attrs[i].value;
        }
      }
      return null;
    };
    module.exports = Tokenizer;
  }
});

// node_modules/parse5/lib/common/html.js
var require_html4 = __commonJS({
  "node_modules/parse5/lib/common/html.js"(exports) {
    "use strict";
    var NS = exports.NAMESPACES = {
      HTML: "http://www.w3.org/1999/xhtml",
      MATHML: "http://www.w3.org/1998/Math/MathML",
      SVG: "http://www.w3.org/2000/svg",
      XLINK: "http://www.w3.org/1999/xlink",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/"
    };
    exports.ATTRS = {
      TYPE: "type",
      ACTION: "action",
      ENCODING: "encoding",
      PROMPT: "prompt",
      NAME: "name",
      COLOR: "color",
      FACE: "face",
      SIZE: "size"
    };
    exports.DOCUMENT_MODE = {
      NO_QUIRKS: "no-quirks",
      QUIRKS: "quirks",
      LIMITED_QUIRKS: "limited-quirks"
    };
    var $ = exports.TAG_NAMES = {
      A: "a",
      ADDRESS: "address",
      ANNOTATION_XML: "annotation-xml",
      APPLET: "applet",
      AREA: "area",
      ARTICLE: "article",
      ASIDE: "aside",
      B: "b",
      BASE: "base",
      BASEFONT: "basefont",
      BGSOUND: "bgsound",
      BIG: "big",
      BLOCKQUOTE: "blockquote",
      BODY: "body",
      BR: "br",
      BUTTON: "button",
      CAPTION: "caption",
      CENTER: "center",
      CODE: "code",
      COL: "col",
      COLGROUP: "colgroup",
      DD: "dd",
      DESC: "desc",
      DETAILS: "details",
      DIALOG: "dialog",
      DIR: "dir",
      DIV: "div",
      DL: "dl",
      DT: "dt",
      EM: "em",
      EMBED: "embed",
      FIELDSET: "fieldset",
      FIGCAPTION: "figcaption",
      FIGURE: "figure",
      FONT: "font",
      FOOTER: "footer",
      FOREIGN_OBJECT: "foreignObject",
      FORM: "form",
      FRAME: "frame",
      FRAMESET: "frameset",
      H1: "h1",
      H2: "h2",
      H3: "h3",
      H4: "h4",
      H5: "h5",
      H6: "h6",
      HEAD: "head",
      HEADER: "header",
      HGROUP: "hgroup",
      HR: "hr",
      HTML: "html",
      I: "i",
      IMG: "img",
      IMAGE: "image",
      INPUT: "input",
      IFRAME: "iframe",
      KEYGEN: "keygen",
      LABEL: "label",
      LI: "li",
      LINK: "link",
      LISTING: "listing",
      MAIN: "main",
      MALIGNMARK: "malignmark",
      MARQUEE: "marquee",
      MATH: "math",
      MENU: "menu",
      META: "meta",
      MGLYPH: "mglyph",
      MI: "mi",
      MO: "mo",
      MN: "mn",
      MS: "ms",
      MTEXT: "mtext",
      NAV: "nav",
      NOBR: "nobr",
      NOFRAMES: "noframes",
      NOEMBED: "noembed",
      NOSCRIPT: "noscript",
      OBJECT: "object",
      OL: "ol",
      OPTGROUP: "optgroup",
      OPTION: "option",
      P: "p",
      PARAM: "param",
      PLAINTEXT: "plaintext",
      PRE: "pre",
      RB: "rb",
      RP: "rp",
      RT: "rt",
      RTC: "rtc",
      RUBY: "ruby",
      S: "s",
      SCRIPT: "script",
      SECTION: "section",
      SELECT: "select",
      SOURCE: "source",
      SMALL: "small",
      SPAN: "span",
      STRIKE: "strike",
      STRONG: "strong",
      STYLE: "style",
      SUB: "sub",
      SUMMARY: "summary",
      SUP: "sup",
      TABLE: "table",
      TBODY: "tbody",
      TEMPLATE: "template",
      TEXTAREA: "textarea",
      TFOOT: "tfoot",
      TD: "td",
      TH: "th",
      THEAD: "thead",
      TITLE: "title",
      TR: "tr",
      TRACK: "track",
      TT: "tt",
      U: "u",
      UL: "ul",
      SVG: "svg",
      VAR: "var",
      WBR: "wbr",
      XMP: "xmp"
    };
    exports.SPECIAL_ELEMENTS = {
      [NS.HTML]: {
        [$.ADDRESS]: true,
        [$.APPLET]: true,
        [$.AREA]: true,
        [$.ARTICLE]: true,
        [$.ASIDE]: true,
        [$.BASE]: true,
        [$.BASEFONT]: true,
        [$.BGSOUND]: true,
        [$.BLOCKQUOTE]: true,
        [$.BODY]: true,
        [$.BR]: true,
        [$.BUTTON]: true,
        [$.CAPTION]: true,
        [$.CENTER]: true,
        [$.COL]: true,
        [$.COLGROUP]: true,
        [$.DD]: true,
        [$.DETAILS]: true,
        [$.DIR]: true,
        [$.DIV]: true,
        [$.DL]: true,
        [$.DT]: true,
        [$.EMBED]: true,
        [$.FIELDSET]: true,
        [$.FIGCAPTION]: true,
        [$.FIGURE]: true,
        [$.FOOTER]: true,
        [$.FORM]: true,
        [$.FRAME]: true,
        [$.FRAMESET]: true,
        [$.H1]: true,
        [$.H2]: true,
        [$.H3]: true,
        [$.H4]: true,
        [$.H5]: true,
        [$.H6]: true,
        [$.HEAD]: true,
        [$.HEADER]: true,
        [$.HGROUP]: true,
        [$.HR]: true,
        [$.HTML]: true,
        [$.IFRAME]: true,
        [$.IMG]: true,
        [$.INPUT]: true,
        [$.LI]: true,
        [$.LINK]: true,
        [$.LISTING]: true,
        [$.MAIN]: true,
        [$.MARQUEE]: true,
        [$.MENU]: true,
        [$.META]: true,
        [$.NAV]: true,
        [$.NOEMBED]: true,
        [$.NOFRAMES]: true,
        [$.NOSCRIPT]: true,
        [$.OBJECT]: true,
        [$.OL]: true,
        [$.P]: true,
        [$.PARAM]: true,
        [$.PLAINTEXT]: true,
        [$.PRE]: true,
        [$.SCRIPT]: true,
        [$.SECTION]: true,
        [$.SELECT]: true,
        [$.SOURCE]: true,
        [$.STYLE]: true,
        [$.SUMMARY]: true,
        [$.TABLE]: true,
        [$.TBODY]: true,
        [$.TD]: true,
        [$.TEMPLATE]: true,
        [$.TEXTAREA]: true,
        [$.TFOOT]: true,
        [$.TH]: true,
        [$.THEAD]: true,
        [$.TITLE]: true,
        [$.TR]: true,
        [$.TRACK]: true,
        [$.UL]: true,
        [$.WBR]: true,
        [$.XMP]: true
      },
      [NS.MATHML]: {
        [$.MI]: true,
        [$.MO]: true,
        [$.MN]: true,
        [$.MS]: true,
        [$.MTEXT]: true,
        [$.ANNOTATION_XML]: true
      },
      [NS.SVG]: {
        [$.TITLE]: true,
        [$.FOREIGN_OBJECT]: true,
        [$.DESC]: true
      }
    };
  }
});

// node_modules/parse5/lib/parser/open-element-stack.js
var require_open_element_stack = __commonJS({
  "node_modules/parse5/lib/parser/open-element-stack.js"(exports, module) {
    "use strict";
    var HTML = require_html4();
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    function isImpliedEndTagRequired(tn) {
      switch (tn.length) {
        case 1:
          return tn === $.P;
        case 2:
          return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;
        case 3:
          return tn === $.RTC;
        case 6:
          return tn === $.OPTION;
        case 8:
          return tn === $.OPTGROUP;
      }
      return false;
    }
    function isImpliedEndTagRequiredThoroughly(tn) {
      switch (tn.length) {
        case 1:
          return tn === $.P;
        case 2:
          return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI || tn === $.TD || tn === $.TH || tn === $.TR;
        case 3:
          return tn === $.RTC;
        case 5:
          return tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD;
        case 6:
          return tn === $.OPTION;
        case 7:
          return tn === $.CAPTION;
        case 8:
          return tn === $.OPTGROUP || tn === $.COLGROUP;
      }
      return false;
    }
    function isScopingElement(tn, ns) {
      switch (tn.length) {
        case 2:
          if (tn === $.TD || tn === $.TH) {
            return ns === NS.HTML;
          } else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS) {
            return ns === NS.MATHML;
          }
          break;
        case 4:
          if (tn === $.HTML) {
            return ns === NS.HTML;
          } else if (tn === $.DESC) {
            return ns === NS.SVG;
          }
          break;
        case 5:
          if (tn === $.TABLE) {
            return ns === NS.HTML;
          } else if (tn === $.MTEXT) {
            return ns === NS.MATHML;
          } else if (tn === $.TITLE) {
            return ns === NS.SVG;
          }
          break;
        case 6:
          return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;
        case 7:
          return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;
        case 8:
          return tn === $.TEMPLATE && ns === NS.HTML;
        case 13:
          return tn === $.FOREIGN_OBJECT && ns === NS.SVG;
        case 14:
          return tn === $.ANNOTATION_XML && ns === NS.MATHML;
      }
      return false;
    }
    var OpenElementStack = class {
      constructor(document2, treeAdapter) {
        this.stackTop = -1;
        this.items = [];
        this.current = document2;
        this.currentTagName = null;
        this.currentTmplContent = null;
        this.tmplCount = 0;
        this.treeAdapter = treeAdapter;
      }
      _indexOf(element) {
        let idx = -1;
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.items[i] === element) {
            idx = i;
            break;
          }
        }
        return idx;
      }
      _isInTemplate() {
        return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
        this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
      }
      push(element) {
        this.items[++this.stackTop] = element;
        this._updateCurrentElement();
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
      }
      pop() {
        this.stackTop--;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this._updateCurrentElement();
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this._updateCurrentElement();
        }
      }
      insertAfter(referenceElement, newElement) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        if (insertionIdx === ++this.stackTop) {
          this._updateCurrentElement();
        }
      }
      popUntilTagNamePopped(tagName) {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === tagName && ns === NS.HTML) {
            break;
          }
        }
      }
      popUntilElementPopped(element) {
        while (this.stackTop > -1) {
          const poppedElement = this.current;
          this.pop();
          if (poppedElement === element) {
            break;
          }
        }
      }
      popUntilNumberedHeaderPopped() {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6 && ns === NS.HTML) {
            break;
          }
        }
      }
      popUntilTableCellPopped() {
        while (this.stackTop > -1) {
          const tn = this.currentTagName;
          const ns = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (tn === $.TD || tn === $.TH && ns === NS.HTML) {
            break;
          }
        }
      }
      popAllUpToHtmlElement() {
        this.stackTop = 0;
        this._updateCurrentElement();
      }
      clearBackToTableContext() {
        while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
          this.pop();
        }
      }
      clearBackToTableBodyContext() {
        while (this.currentTagName !== $.TBODY && this.currentTagName !== $.TFOOT && this.currentTagName !== $.THEAD && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
          this.pop();
        }
      }
      clearBackToTableRowContext() {
        while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
          this.pop();
        }
      }
      remove(element) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.items[i] === element) {
            this.items.splice(i, 1);
            this.stackTop--;
            this._updateCurrentElement();
            break;
          }
        }
      }
      tryPeekProperlyNestedBodyElement() {
        const element = this.items[1];
        return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
      }
      contains(element) {
        return this._indexOf(element) > -1;
      }
      getCommonAncestor(element) {
        let elementIdx = this._indexOf(element);
        return --elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.currentTagName === $.HTML;
      }
      hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if (isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if ((tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) && ns === NS.HTML) {
            return true;
          }
          if (isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === NS.HTML) {
            return true;
          }
          if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns)) {
            return false;
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) {
            return false;
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT) {
            return true;
          }
          if (tn === $.TABLE || tn === $.HTML) {
            return false;
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.treeAdapter.getTagName(this.items[i]);
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn !== $.OPTION && tn !== $.OPTGROUP) {
            return false;
          }
        }
        return true;
      }
      generateImpliedEndTags() {
        while (isImpliedEndTagRequired(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionTagName) {
        while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
          this.pop();
        }
      }
    };
    module.exports = OpenElementStack;
  }
});

// node_modules/parse5/lib/parser/formatting-element-list.js
var require_formatting_element_list = __commonJS({
  "node_modules/parse5/lib/parser/formatting-element-list.js"(exports, module) {
    "use strict";
    var NOAH_ARK_CAPACITY = 3;
    var FormattingElementList = class {
      constructor(treeAdapter) {
        this.length = 0;
        this.entries = [];
        this.treeAdapter = treeAdapter;
        this.bookmark = null;
      }
      _getNoahArkConditionCandidates(newElement) {
        const candidates = [];
        if (this.length >= NOAH_ARK_CAPACITY) {
          const neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
          const neTagName = this.treeAdapter.getTagName(newElement);
          const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              break;
            }
            const element = entry.element;
            const elementAttrs = this.treeAdapter.getAttrList(element);
            const isCandidate = this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI && elementAttrs.length === neAttrsLength;
            if (isCandidate) {
              candidates.push({idx: i, attrs: elementAttrs});
            }
          }
        }
        return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
      }
      _ensureNoahArkCondition(newElement) {
        const candidates = this._getNoahArkConditionCandidates(newElement);
        let cLength = candidates.length;
        if (cLength) {
          const neAttrs = this.treeAdapter.getAttrList(newElement);
          const neAttrsLength = neAttrs.length;
          const neAttrsMap = Object.create(null);
          for (let i = 0; i < neAttrsLength; i++) {
            const neAttr = neAttrs[i];
            neAttrsMap[neAttr.name] = neAttr.value;
          }
          for (let i = 0; i < neAttrsLength; i++) {
            for (let j = 0; j < cLength; j++) {
              const cAttr = candidates[j].attrs[i];
              if (neAttrsMap[cAttr.name] !== cAttr.value) {
                candidates.splice(j, 1);
                cLength--;
              }
              if (candidates.length < NOAH_ARK_CAPACITY) {
                return;
              }
            }
          }
          for (let i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
            this.entries.splice(candidates[i].idx, 1);
            this.length--;
          }
        }
      }
      insertMarker() {
        this.entries.push({type: FormattingElementList.MARKER_ENTRY});
        this.length++;
      }
      pushElement(element, token2) {
        this._ensureNoahArkCondition(element);
        this.entries.push({
          type: FormattingElementList.ELEMENT_ENTRY,
          element,
          token: token2
        });
        this.length++;
      }
      insertElementAfterBookmark(element, token2) {
        let bookmarkIdx = this.length - 1;
        for (; bookmarkIdx >= 0; bookmarkIdx--) {
          if (this.entries[bookmarkIdx] === this.bookmark) {
            break;
          }
        }
        this.entries.splice(bookmarkIdx + 1, 0, {
          type: FormattingElementList.ELEMENT_ENTRY,
          element,
          token: token2
        });
        this.length++;
      }
      removeEntry(entry) {
        for (let i = this.length - 1; i >= 0; i--) {
          if (this.entries[i] === entry) {
            this.entries.splice(i, 1);
            this.length--;
            break;
          }
        }
      }
      clearToLastMarker() {
        while (this.length) {
          const entry = this.entries.pop();
          this.length--;
          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            break;
          }
        }
      }
      getElementEntryInScopeWithTagName(tagName) {
        for (let i = this.length - 1; i >= 0; i--) {
          const entry = this.entries[i];
          if (entry.type === FormattingElementList.MARKER_ENTRY) {
            return null;
          }
          if (this.treeAdapter.getTagName(entry.element) === tagName) {
            return entry;
          }
        }
        return null;
      }
      getElementEntry(element) {
        for (let i = this.length - 1; i >= 0; i--) {
          const entry = this.entries[i];
          if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) {
            return entry;
          }
        }
        return null;
      }
    };
    FormattingElementList.MARKER_ENTRY = "MARKER_ENTRY";
    FormattingElementList.ELEMENT_ENTRY = "ELEMENT_ENTRY";
    module.exports = FormattingElementList;
  }
});

// node_modules/parse5/lib/utils/mixin.js
var require_mixin = __commonJS({
  "node_modules/parse5/lib/utils/mixin.js"(exports, module) {
    "use strict";
    var Mixin = class {
      constructor(host) {
        const originalMethods = {};
        const overriddenMethods = this._getOverriddenMethods(this, originalMethods);
        for (const key of Object.keys(overriddenMethods)) {
          if (typeof overriddenMethods[key] === "function") {
            originalMethods[key] = host[key];
            host[key] = overriddenMethods[key];
          }
        }
      }
      _getOverriddenMethods() {
        throw new Error("Not implemented");
      }
    };
    Mixin.install = function(host, Ctor, opts) {
      if (!host.__mixins) {
        host.__mixins = [];
      }
      for (let i = 0; i < host.__mixins.length; i++) {
        if (host.__mixins[i].constructor === Ctor) {
          return host.__mixins[i];
        }
      }
      const mixin = new Ctor(host, opts);
      host.__mixins.push(mixin);
      return mixin;
    };
    module.exports = Mixin;
  }
});

// node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js
var require_preprocessor_mixin = __commonJS({
  "node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var PositionTrackingPreprocessorMixin = class extends Mixin {
      constructor(preprocessor) {
        super(preprocessor);
        this.preprocessor = preprocessor;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.offset = 0;
        this.col = 0;
        this.line = 1;
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          advance() {
            const pos = this.pos + 1;
            const ch = this.html[pos];
            if (mxn.isEol) {
              mxn.isEol = false;
              mxn.line++;
              mxn.lineStartPos = pos;
            }
            if (ch === "\n" || ch === "\r" && this.html[pos + 1] !== "\n") {
              mxn.isEol = true;
            }
            mxn.col = pos - mxn.lineStartPos + 1;
            mxn.offset = mxn.droppedBufferSize + pos;
            return orig.advance.call(this);
          },
          retreat() {
            orig.retreat.call(this);
            mxn.isEol = false;
            mxn.col = this.pos - mxn.lineStartPos + 1;
          },
          dropParsedChunk() {
            const prevPos = this.pos;
            orig.dropParsedChunk.call(this);
            const reduction = prevPos - this.pos;
            mxn.lineStartPos -= reduction;
            mxn.droppedBufferSize += reduction;
            mxn.offset = mxn.droppedBufferSize + this.pos;
          }
        };
      }
    };
    module.exports = PositionTrackingPreprocessorMixin;
  }
});

// node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js
var require_tokenizer_mixin = __commonJS({
  "node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var Tokenizer = require_tokenizer();
    var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
    var LocationInfoTokenizerMixin = class extends Mixin {
      constructor(tokenizer) {
        super(tokenizer);
        this.tokenizer = tokenizer;
        this.posTracker = Mixin.install(tokenizer.preprocessor, PositionTrackingPreprocessorMixin);
        this.currentAttrLocation = null;
        this.ctLoc = null;
      }
      _getCurrentLocation() {
        return {
          startLine: this.posTracker.line,
          startCol: this.posTracker.col,
          startOffset: this.posTracker.offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _attachCurrentAttrLocationInfo() {
        this.currentAttrLocation.endLine = this.posTracker.line;
        this.currentAttrLocation.endCol = this.posTracker.col;
        this.currentAttrLocation.endOffset = this.posTracker.offset;
        const currentToken = this.tokenizer.currentToken;
        const currentAttr = this.tokenizer.currentAttr;
        if (!currentToken.location.attrs) {
          currentToken.location.attrs = Object.create(null);
        }
        currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
      }
      _getOverriddenMethods(mxn, orig) {
        const methods = {
          _createStartTagToken() {
            orig._createStartTagToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createEndTagToken() {
            orig._createEndTagToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createCommentToken() {
            orig._createCommentToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createDoctypeToken(initialName) {
            orig._createDoctypeToken.call(this, initialName);
            this.currentToken.location = mxn.ctLoc;
          },
          _createCharacterToken(type, ch) {
            orig._createCharacterToken.call(this, type, ch);
            this.currentCharacterToken.location = mxn.ctLoc;
          },
          _createEOFToken() {
            orig._createEOFToken.call(this);
            this.currentToken.location = mxn._getCurrentLocation();
          },
          _createAttr(attrNameFirstCh) {
            orig._createAttr.call(this, attrNameFirstCh);
            mxn.currentAttrLocation = mxn._getCurrentLocation();
          },
          _leaveAttrName(toState) {
            orig._leaveAttrName.call(this, toState);
            mxn._attachCurrentAttrLocationInfo();
          },
          _leaveAttrValue(toState) {
            orig._leaveAttrValue.call(this, toState);
            mxn._attachCurrentAttrLocationInfo();
          },
          _emitCurrentToken() {
            const ctLoc = this.currentToken.location;
            if (this.currentCharacterToken) {
              this.currentCharacterToken.location.endLine = ctLoc.startLine;
              this.currentCharacterToken.location.endCol = ctLoc.startCol;
              this.currentCharacterToken.location.endOffset = ctLoc.startOffset;
            }
            if (this.currentToken.type === Tokenizer.EOF_TOKEN) {
              ctLoc.endLine = ctLoc.startLine;
              ctLoc.endCol = ctLoc.startCol;
              ctLoc.endOffset = ctLoc.startOffset;
            } else {
              ctLoc.endLine = mxn.posTracker.line;
              ctLoc.endCol = mxn.posTracker.col + 1;
              ctLoc.endOffset = mxn.posTracker.offset + 1;
            }
            orig._emitCurrentToken.call(this);
          },
          _emitCurrentCharacterToken() {
            const ctLoc = this.currentCharacterToken && this.currentCharacterToken.location;
            if (ctLoc && ctLoc.endOffset === -1) {
              ctLoc.endLine = mxn.posTracker.line;
              ctLoc.endCol = mxn.posTracker.col;
              ctLoc.endOffset = mxn.posTracker.offset;
            }
            orig._emitCurrentCharacterToken.call(this);
          }
        };
        Object.keys(Tokenizer.MODE).forEach((modeName) => {
          const state = Tokenizer.MODE[modeName];
          methods[state] = function(cp) {
            mxn.ctLoc = mxn._getCurrentLocation();
            orig[state].call(this, cp);
          };
        });
        return methods;
      }
    };
    module.exports = LocationInfoTokenizerMixin;
  }
});

// node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js
var require_open_element_stack_mixin = __commonJS({
  "node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var LocationInfoOpenElementStackMixin = class extends Mixin {
      constructor(stack, opts) {
        super(stack);
        this.onItemPop = opts.onItemPop;
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          pop() {
            mxn.onItemPop(this.current);
            orig.pop.call(this);
          },
          popAllUpToHtmlElement() {
            for (let i = this.stackTop; i > 0; i--) {
              mxn.onItemPop(this.items[i]);
            }
            orig.popAllUpToHtmlElement.call(this);
          },
          remove(element) {
            mxn.onItemPop(this.current);
            orig.remove.call(this, element);
          }
        };
      }
    };
    module.exports = LocationInfoOpenElementStackMixin;
  }
});

// node_modules/parse5/lib/extensions/location-info/parser-mixin.js
var require_parser_mixin = __commonJS({
  "node_modules/parse5/lib/extensions/location-info/parser-mixin.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var Tokenizer = require_tokenizer();
    var LocationInfoTokenizerMixin = require_tokenizer_mixin();
    var LocationInfoOpenElementStackMixin = require_open_element_stack_mixin();
    var HTML = require_html4();
    var $ = HTML.TAG_NAMES;
    var LocationInfoParserMixin = class extends Mixin {
      constructor(parser) {
        super(parser);
        this.parser = parser;
        this.treeAdapter = this.parser.treeAdapter;
        this.posTracker = null;
        this.lastStartTagToken = null;
        this.lastFosterParentingLocation = null;
        this.currentToken = null;
      }
      _setStartLocation(element) {
        let loc = null;
        if (this.lastStartTagToken) {
          loc = Object.assign({}, this.lastStartTagToken.location);
          loc.startTag = this.lastStartTagToken.location;
        }
        this.treeAdapter.setNodeSourceCodeLocation(element, loc);
      }
      _setEndLocation(element, closingToken) {
        const loc = this.treeAdapter.getNodeSourceCodeLocation(element);
        if (loc) {
          if (closingToken.location) {
            const ctLoc = closingToken.location;
            const tn = this.treeAdapter.getTagName(element);
            const isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;
            const endLoc = {};
            if (isClosingEndTag) {
              endLoc.endTag = Object.assign({}, ctLoc);
              endLoc.endLine = ctLoc.endLine;
              endLoc.endCol = ctLoc.endCol;
              endLoc.endOffset = ctLoc.endOffset;
            } else {
              endLoc.endLine = ctLoc.startLine;
              endLoc.endCol = ctLoc.startCol;
              endLoc.endOffset = ctLoc.startOffset;
            }
            this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
          }
        }
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          _bootstrap(document2, fragmentContext) {
            orig._bootstrap.call(this, document2, fragmentContext);
            mxn.lastStartTagToken = null;
            mxn.lastFosterParentingLocation = null;
            mxn.currentToken = null;
            const tokenizerMixin = Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
            mxn.posTracker = tokenizerMixin.posTracker;
            Mixin.install(this.openElements, LocationInfoOpenElementStackMixin, {
              onItemPop: function(element) {
                mxn._setEndLocation(element, mxn.currentToken);
              }
            });
          },
          _runParsingLoop(scriptHandler) {
            orig._runParsingLoop.call(this, scriptHandler);
            for (let i = this.openElements.stackTop; i >= 0; i--) {
              mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
            }
          },
          _processTokenInForeignContent(token2) {
            mxn.currentToken = token2;
            orig._processTokenInForeignContent.call(this, token2);
          },
          _processToken(token2) {
            mxn.currentToken = token2;
            orig._processToken.call(this, token2);
            const requireExplicitUpdate = token2.type === Tokenizer.END_TAG_TOKEN && (token2.tagName === $.HTML || token2.tagName === $.BODY && this.openElements.hasInScope($.BODY));
            if (requireExplicitUpdate) {
              for (let i = this.openElements.stackTop; i >= 0; i--) {
                const element = this.openElements.items[i];
                if (this.treeAdapter.getTagName(element) === token2.tagName) {
                  mxn._setEndLocation(element, token2);
                  break;
                }
              }
            }
          },
          _setDocumentType(token2) {
            orig._setDocumentType.call(this, token2);
            const documentChildren = this.treeAdapter.getChildNodes(this.document);
            const cnLength = documentChildren.length;
            for (let i = 0; i < cnLength; i++) {
              const node = documentChildren[i];
              if (this.treeAdapter.isDocumentTypeNode(node)) {
                this.treeAdapter.setNodeSourceCodeLocation(node, token2.location);
                break;
              }
            }
          },
          _attachElementToTree(element) {
            mxn._setStartLocation(element);
            mxn.lastStartTagToken = null;
            orig._attachElementToTree.call(this, element);
          },
          _appendElement(token2, namespaceURI) {
            mxn.lastStartTagToken = token2;
            orig._appendElement.call(this, token2, namespaceURI);
          },
          _insertElement(token2, namespaceURI) {
            mxn.lastStartTagToken = token2;
            orig._insertElement.call(this, token2, namespaceURI);
          },
          _insertTemplate(token2) {
            mxn.lastStartTagToken = token2;
            orig._insertTemplate.call(this, token2);
            const tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
            this.treeAdapter.setNodeSourceCodeLocation(tmplContent, null);
          },
          _insertFakeRootElement() {
            orig._insertFakeRootElement.call(this);
            this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
          },
          _appendCommentNode(token2, parent) {
            orig._appendCommentNode.call(this, token2, parent);
            const children = this.treeAdapter.getChildNodes(parent);
            const commentNode = children[children.length - 1];
            this.treeAdapter.setNodeSourceCodeLocation(commentNode, token2.location);
          },
          _findFosterParentingLocation() {
            mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
            return mxn.lastFosterParentingLocation;
          },
          _insertCharacters(token2) {
            orig._insertCharacters.call(this, token2);
            const hasFosterParent = this._shouldFosterParentOnInsertion();
            const parent = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current;
            const siblings = this.treeAdapter.getChildNodes(parent);
            const textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings.length - 1;
            const textNode = siblings[textNodeIdx];
            const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
            if (tnLoc) {
              const {endLine, endCol, endOffset} = token2.location;
              this.treeAdapter.updateNodeSourceCodeLocation(textNode, {endLine, endCol, endOffset});
            } else {
              this.treeAdapter.setNodeSourceCodeLocation(textNode, token2.location);
            }
          }
        };
      }
    };
    module.exports = LocationInfoParserMixin;
  }
});

// node_modules/parse5/lib/extensions/error-reporting/mixin-base.js
var require_mixin_base = __commonJS({
  "node_modules/parse5/lib/extensions/error-reporting/mixin-base.js"(exports, module) {
    "use strict";
    var Mixin = require_mixin();
    var ErrorReportingMixinBase = class extends Mixin {
      constructor(host, opts) {
        super(host);
        this.posTracker = null;
        this.onParseError = opts.onParseError;
      }
      _setErrorLocation(err) {
        err.startLine = err.endLine = this.posTracker.line;
        err.startCol = err.endCol = this.posTracker.col;
        err.startOffset = err.endOffset = this.posTracker.offset;
      }
      _reportError(code) {
        const err = {
          code,
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
        this._setErrorLocation(err);
        this.onParseError(err);
      }
      _getOverriddenMethods(mxn) {
        return {
          _err(code) {
            mxn._reportError(code);
          }
        };
      }
    };
    module.exports = ErrorReportingMixinBase;
  }
});

// node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js
var require_preprocessor_mixin2 = __commonJS({
  "node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js"(exports, module) {
    "use strict";
    var ErrorReportingMixinBase = require_mixin_base();
    var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
    var Mixin = require_mixin();
    var ErrorReportingPreprocessorMixin = class extends ErrorReportingMixinBase {
      constructor(preprocessor, opts) {
        super(preprocessor, opts);
        this.posTracker = Mixin.install(preprocessor, PositionTrackingPreprocessorMixin);
        this.lastErrOffset = -1;
      }
      _reportError(code) {
        if (this.lastErrOffset !== this.posTracker.offset) {
          this.lastErrOffset = this.posTracker.offset;
          super._reportError(code);
        }
      }
    };
    module.exports = ErrorReportingPreprocessorMixin;
  }
});

// node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js
var require_tokenizer_mixin2 = __commonJS({
  "node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js"(exports, module) {
    "use strict";
    var ErrorReportingMixinBase = require_mixin_base();
    var ErrorReportingPreprocessorMixin = require_preprocessor_mixin2();
    var Mixin = require_mixin();
    var ErrorReportingTokenizerMixin = class extends ErrorReportingMixinBase {
      constructor(tokenizer, opts) {
        super(tokenizer, opts);
        const preprocessorMixin = Mixin.install(tokenizer.preprocessor, ErrorReportingPreprocessorMixin, opts);
        this.posTracker = preprocessorMixin.posTracker;
      }
    };
    module.exports = ErrorReportingTokenizerMixin;
  }
});

// node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js
var require_parser_mixin2 = __commonJS({
  "node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js"(exports, module) {
    "use strict";
    var ErrorReportingMixinBase = require_mixin_base();
    var ErrorReportingTokenizerMixin = require_tokenizer_mixin2();
    var LocationInfoTokenizerMixin = require_tokenizer_mixin();
    var Mixin = require_mixin();
    var ErrorReportingParserMixin = class extends ErrorReportingMixinBase {
      constructor(parser, opts) {
        super(parser, opts);
        this.opts = opts;
        this.ctLoc = null;
        this.locBeforeToken = false;
      }
      _setErrorLocation(err) {
        if (this.ctLoc) {
          err.startLine = this.ctLoc.startLine;
          err.startCol = this.ctLoc.startCol;
          err.startOffset = this.ctLoc.startOffset;
          err.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
          err.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
          err.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
        }
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          _bootstrap(document2, fragmentContext) {
            orig._bootstrap.call(this, document2, fragmentContext);
            Mixin.install(this.tokenizer, ErrorReportingTokenizerMixin, mxn.opts);
            Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
          },
          _processInputToken(token2) {
            mxn.ctLoc = token2.location;
            orig._processInputToken.call(this, token2);
          },
          _err(code, options) {
            mxn.locBeforeToken = options && options.beforeToken;
            mxn._reportError(code);
          }
        };
      }
    };
    module.exports = ErrorReportingParserMixin;
  }
});

// node_modules/parse5/lib/tree-adapters/default.js
var require_default = __commonJS({
  "node_modules/parse5/lib/tree-adapters/default.js"(exports) {
    "use strict";
    var {DOCUMENT_MODE} = require_html4();
    exports.createDocument = function() {
      return {
        nodeName: "#document",
        mode: DOCUMENT_MODE.NO_QUIRKS,
        childNodes: []
      };
    };
    exports.createDocumentFragment = function() {
      return {
        nodeName: "#document-fragment",
        childNodes: []
      };
    };
    exports.createElement = function(tagName, namespaceURI, attrs) {
      return {
        nodeName: tagName,
        tagName,
        attrs,
        namespaceURI,
        childNodes: [],
        parentNode: null
      };
    };
    exports.createCommentNode = function(data) {
      return {
        nodeName: "#comment",
        data,
        parentNode: null
      };
    };
    var createTextNode = function(value) {
      return {
        nodeName: "#text",
        value,
        parentNode: null
      };
    };
    var appendChild = exports.appendChild = function(parentNode, newNode) {
      parentNode.childNodes.push(newNode);
      newNode.parentNode = parentNode;
    };
    var insertBefore = exports.insertBefore = function(parentNode, newNode, referenceNode) {
      const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
      parentNode.childNodes.splice(insertionIdx, 0, newNode);
      newNode.parentNode = parentNode;
    };
    exports.setTemplateContent = function(templateElement, contentElement) {
      templateElement.content = contentElement;
    };
    exports.getTemplateContent = function(templateElement) {
      return templateElement.content;
    };
    exports.setDocumentType = function(document2, name, publicId, systemId) {
      let doctypeNode = null;
      for (let i = 0; i < document2.childNodes.length; i++) {
        if (document2.childNodes[i].nodeName === "#documentType") {
          doctypeNode = document2.childNodes[i];
          break;
        }
      }
      if (doctypeNode) {
        doctypeNode.name = name;
        doctypeNode.publicId = publicId;
        doctypeNode.systemId = systemId;
      } else {
        appendChild(document2, {
          nodeName: "#documentType",
          name,
          publicId,
          systemId
        });
      }
    };
    exports.setDocumentMode = function(document2, mode) {
      document2.mode = mode;
    };
    exports.getDocumentMode = function(document2) {
      return document2.mode;
    };
    exports.detachNode = function(node) {
      if (node.parentNode) {
        const idx = node.parentNode.childNodes.indexOf(node);
        node.parentNode.childNodes.splice(idx, 1);
        node.parentNode = null;
      }
    };
    exports.insertText = function(parentNode, text) {
      if (parentNode.childNodes.length) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
        if (prevNode.nodeName === "#text") {
          prevNode.value += text;
          return;
        }
      }
      appendChild(parentNode, createTextNode(text));
    };
    exports.insertTextBefore = function(parentNode, text, referenceNode) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
      if (prevNode && prevNode.nodeName === "#text") {
        prevNode.value += text;
      } else {
        insertBefore(parentNode, createTextNode(text), referenceNode);
      }
    };
    exports.adoptAttributes = function(recipient, attrs) {
      const recipientAttrsMap = [];
      for (let i = 0; i < recipient.attrs.length; i++) {
        recipientAttrsMap.push(recipient.attrs[i].name);
      }
      for (let j = 0; j < attrs.length; j++) {
        if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
          recipient.attrs.push(attrs[j]);
        }
      }
    };
    exports.getFirstChild = function(node) {
      return node.childNodes[0];
    };
    exports.getChildNodes = function(node) {
      return node.childNodes;
    };
    exports.getParentNode = function(node) {
      return node.parentNode;
    };
    exports.getAttrList = function(element) {
      return element.attrs;
    };
    exports.getTagName = function(element) {
      return element.tagName;
    };
    exports.getNamespaceURI = function(element) {
      return element.namespaceURI;
    };
    exports.getTextNodeContent = function(textNode) {
      return textNode.value;
    };
    exports.getCommentNodeContent = function(commentNode) {
      return commentNode.data;
    };
    exports.getDocumentTypeNodeName = function(doctypeNode) {
      return doctypeNode.name;
    };
    exports.getDocumentTypeNodePublicId = function(doctypeNode) {
      return doctypeNode.publicId;
    };
    exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
      return doctypeNode.systemId;
    };
    exports.isTextNode = function(node) {
      return node.nodeName === "#text";
    };
    exports.isCommentNode = function(node) {
      return node.nodeName === "#comment";
    };
    exports.isDocumentTypeNode = function(node) {
      return node.nodeName === "#documentType";
    };
    exports.isElementNode = function(node) {
      return !!node.tagName;
    };
    exports.setNodeSourceCodeLocation = function(node, location) {
      node.sourceCodeLocation = location;
    };
    exports.getNodeSourceCodeLocation = function(node) {
      return node.sourceCodeLocation;
    };
    exports.updateNodeSourceCodeLocation = function(node, endLocation) {
      node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
    };
  }
});

// node_modules/parse5/lib/utils/merge-options.js
var require_merge_options = __commonJS({
  "node_modules/parse5/lib/utils/merge-options.js"(exports, module) {
    "use strict";
    module.exports = function mergeOptions(defaults, options) {
      options = options || Object.create(null);
      return [defaults, options].reduce((merged, optObj) => {
        Object.keys(optObj).forEach((key) => {
          merged[key] = optObj[key];
        });
        return merged;
      }, Object.create(null));
    };
  }
});

// node_modules/parse5/lib/common/doctype.js
var require_doctype = __commonJS({
  "node_modules/parse5/lib/common/doctype.js"(exports) {
    "use strict";
    var {DOCUMENT_MODE} = require_html4();
    var VALID_DOCTYPE_NAME = "html";
    var VALID_SYSTEM_ID = "about:legacy-compat";
    var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//"
    ];
    var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ]);
    var QUIRKS_MODE_PUBLIC_IDS = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"];
    var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
    var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ]);
    function enquoteDoctypeId(id) {
      const quote = id.indexOf('"') !== -1 ? "'" : '"';
      return quote + id + quote;
    }
    function hasPrefix(publicId, prefixes) {
      for (let i = 0; i < prefixes.length; i++) {
        if (publicId.indexOf(prefixes[i]) === 0) {
          return true;
        }
      }
      return false;
    }
    exports.isConforming = function(token2) {
      return token2.name === VALID_DOCTYPE_NAME && token2.publicId === null && (token2.systemId === null || token2.systemId === VALID_SYSTEM_ID);
    };
    exports.getDocumentMode = function(token2) {
      if (token2.name !== VALID_DOCTYPE_NAME) {
        return DOCUMENT_MODE.QUIRKS;
      }
      const systemId = token2.systemId;
      if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return DOCUMENT_MODE.QUIRKS;
      }
      let publicId = token2.publicId;
      if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
          return DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return DOCUMENT_MODE.QUIRKS;
        }
        prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return DOCUMENT_MODE.LIMITED_QUIRKS;
        }
      }
      return DOCUMENT_MODE.NO_QUIRKS;
    };
    exports.serializeContent = function(name, publicId, systemId) {
      let str = "!DOCTYPE ";
      if (name) {
        str += name;
      }
      if (publicId) {
        str += " PUBLIC " + enquoteDoctypeId(publicId);
      } else if (systemId) {
        str += " SYSTEM";
      }
      if (systemId !== null) {
        str += " " + enquoteDoctypeId(systemId);
      }
      return str;
    };
  }
});

// node_modules/parse5/lib/common/foreign-content.js
var require_foreign_content = __commonJS({
  "node_modules/parse5/lib/common/foreign-content.js"(exports) {
    "use strict";
    var Tokenizer = require_tokenizer();
    var HTML = require_html4();
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    var ATTRS = HTML.ATTRS;
    var MIME_TYPES = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    };
    var DEFINITION_URL_ATTR = "definitionurl";
    var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
    var SVG_ATTRS_ADJUSTMENT_MAP = {
      attributename: "attributeName",
      attributetype: "attributeType",
      basefrequency: "baseFrequency",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      clippathunits: "clipPathUnits",
      diffuseconstant: "diffuseConstant",
      edgemode: "edgeMode",
      filterunits: "filterUnits",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      limitingconeangle: "limitingConeAngle",
      markerheight: "markerHeight",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textlength: "textLength",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      xchannelselector: "xChannelSelector",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan"
    };
    var XML_ATTRS_ADJUSTMENT_MAP = {
      "xlink:actuate": {prefix: "xlink", name: "actuate", namespace: NS.XLINK},
      "xlink:arcrole": {prefix: "xlink", name: "arcrole", namespace: NS.XLINK},
      "xlink:href": {prefix: "xlink", name: "href", namespace: NS.XLINK},
      "xlink:role": {prefix: "xlink", name: "role", namespace: NS.XLINK},
      "xlink:show": {prefix: "xlink", name: "show", namespace: NS.XLINK},
      "xlink:title": {prefix: "xlink", name: "title", namespace: NS.XLINK},
      "xlink:type": {prefix: "xlink", name: "type", namespace: NS.XLINK},
      "xml:base": {prefix: "xml", name: "base", namespace: NS.XML},
      "xml:lang": {prefix: "xml", name: "lang", namespace: NS.XML},
      "xml:space": {prefix: "xml", name: "space", namespace: NS.XML},
      xmlns: {prefix: "", name: "xmlns", namespace: NS.XMLNS},
      "xmlns:xlink": {prefix: "xmlns", name: "xlink", namespace: NS.XMLNS}
    };
    var SVG_TAG_NAMES_ADJUSTMENT_MAP = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
      textpath: "textPath"
    };
    var EXITS_FOREIGN_CONTENT = {
      [$.B]: true,
      [$.BIG]: true,
      [$.BLOCKQUOTE]: true,
      [$.BODY]: true,
      [$.BR]: true,
      [$.CENTER]: true,
      [$.CODE]: true,
      [$.DD]: true,
      [$.DIV]: true,
      [$.DL]: true,
      [$.DT]: true,
      [$.EM]: true,
      [$.EMBED]: true,
      [$.H1]: true,
      [$.H2]: true,
      [$.H3]: true,
      [$.H4]: true,
      [$.H5]: true,
      [$.H6]: true,
      [$.HEAD]: true,
      [$.HR]: true,
      [$.I]: true,
      [$.IMG]: true,
      [$.LI]: true,
      [$.LISTING]: true,
      [$.MENU]: true,
      [$.META]: true,
      [$.NOBR]: true,
      [$.OL]: true,
      [$.P]: true,
      [$.PRE]: true,
      [$.RUBY]: true,
      [$.S]: true,
      [$.SMALL]: true,
      [$.SPAN]: true,
      [$.STRONG]: true,
      [$.STRIKE]: true,
      [$.SUB]: true,
      [$.SUP]: true,
      [$.TABLE]: true,
      [$.TT]: true,
      [$.U]: true,
      [$.UL]: true,
      [$.VAR]: true
    };
    exports.causesExit = function(startTagToken) {
      const tn = startTagToken.tagName;
      const isFontWithAttrs = tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);
      return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
    };
    exports.adjustTokenMathMLAttrs = function(token2) {
      for (let i = 0; i < token2.attrs.length; i++) {
        if (token2.attrs[i].name === DEFINITION_URL_ATTR) {
          token2.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
          break;
        }
      }
    };
    exports.adjustTokenSVGAttrs = function(token2) {
      for (let i = 0; i < token2.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token2.attrs[i].name];
        if (adjustedAttrName) {
          token2.attrs[i].name = adjustedAttrName;
        }
      }
    };
    exports.adjustTokenXMLAttrs = function(token2) {
      for (let i = 0; i < token2.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token2.attrs[i].name];
        if (adjustedAttrEntry) {
          token2.attrs[i].prefix = adjustedAttrEntry.prefix;
          token2.attrs[i].name = adjustedAttrEntry.name;
          token2.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
      }
    };
    exports.adjustTokenSVGTagName = function(token2) {
      const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token2.tagName];
      if (adjustedTagName) {
        token2.tagName = adjustedTagName;
      }
    };
    function isMathMLTextIntegrationPoint(tn, ns) {
      return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
    }
    function isHtmlIntegrationPoint(tn, ns, attrs) {
      if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
          if (attrs[i].name === ATTRS.ENCODING) {
            const value = attrs[i].value.toLowerCase();
            return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
          }
        }
      }
      return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
    }
    exports.isIntegrationPoint = function(tn, ns, attrs, foreignNS) {
      if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) {
        return true;
      }
      if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/parse5/lib/parser/index.js
var require_parser = __commonJS({
  "node_modules/parse5/lib/parser/index.js"(exports, module) {
    "use strict";
    var Tokenizer = require_tokenizer();
    var OpenElementStack = require_open_element_stack();
    var FormattingElementList = require_formatting_element_list();
    var LocationInfoParserMixin = require_parser_mixin();
    var ErrorReportingParserMixin = require_parser_mixin2();
    var Mixin = require_mixin();
    var defaultTreeAdapter = require_default();
    var mergeOptions = require_merge_options();
    var doctype = require_doctype();
    var foreignContent = require_foreign_content();
    var ERR = require_error_codes();
    var unicode = require_unicode();
    var HTML = require_html4();
    var $ = HTML.TAG_NAMES;
    var NS = HTML.NAMESPACES;
    var ATTRS = HTML.ATTRS;
    var DEFAULT_OPTIONS = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      onParseError: null,
      treeAdapter: defaultTreeAdapter
    };
    var HIDDEN_INPUT_TYPE = "hidden";
    var AA_OUTER_LOOP_ITER = 8;
    var AA_INNER_LOOP_ITER = 3;
    var INITIAL_MODE = "INITIAL_MODE";
    var BEFORE_HTML_MODE = "BEFORE_HTML_MODE";
    var BEFORE_HEAD_MODE = "BEFORE_HEAD_MODE";
    var IN_HEAD_MODE = "IN_HEAD_MODE";
    var IN_HEAD_NO_SCRIPT_MODE = "IN_HEAD_NO_SCRIPT_MODE";
    var AFTER_HEAD_MODE = "AFTER_HEAD_MODE";
    var IN_BODY_MODE = "IN_BODY_MODE";
    var TEXT_MODE = "TEXT_MODE";
    var IN_TABLE_MODE = "IN_TABLE_MODE";
    var IN_TABLE_TEXT_MODE = "IN_TABLE_TEXT_MODE";
    var IN_CAPTION_MODE = "IN_CAPTION_MODE";
    var IN_COLUMN_GROUP_MODE = "IN_COLUMN_GROUP_MODE";
    var IN_TABLE_BODY_MODE = "IN_TABLE_BODY_MODE";
    var IN_ROW_MODE = "IN_ROW_MODE";
    var IN_CELL_MODE = "IN_CELL_MODE";
    var IN_SELECT_MODE = "IN_SELECT_MODE";
    var IN_SELECT_IN_TABLE_MODE = "IN_SELECT_IN_TABLE_MODE";
    var IN_TEMPLATE_MODE = "IN_TEMPLATE_MODE";
    var AFTER_BODY_MODE = "AFTER_BODY_MODE";
    var IN_FRAMESET_MODE = "IN_FRAMESET_MODE";
    var AFTER_FRAMESET_MODE = "AFTER_FRAMESET_MODE";
    var AFTER_AFTER_BODY_MODE = "AFTER_AFTER_BODY_MODE";
    var AFTER_AFTER_FRAMESET_MODE = "AFTER_AFTER_FRAMESET_MODE";
    var INSERTION_MODE_RESET_MAP = {
      [$.TR]: IN_ROW_MODE,
      [$.TBODY]: IN_TABLE_BODY_MODE,
      [$.THEAD]: IN_TABLE_BODY_MODE,
      [$.TFOOT]: IN_TABLE_BODY_MODE,
      [$.CAPTION]: IN_CAPTION_MODE,
      [$.COLGROUP]: IN_COLUMN_GROUP_MODE,
      [$.TABLE]: IN_TABLE_MODE,
      [$.BODY]: IN_BODY_MODE,
      [$.FRAMESET]: IN_FRAMESET_MODE
    };
    var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {
      [$.CAPTION]: IN_TABLE_MODE,
      [$.COLGROUP]: IN_TABLE_MODE,
      [$.TBODY]: IN_TABLE_MODE,
      [$.TFOOT]: IN_TABLE_MODE,
      [$.THEAD]: IN_TABLE_MODE,
      [$.COL]: IN_COLUMN_GROUP_MODE,
      [$.TR]: IN_TABLE_BODY_MODE,
      [$.TD]: IN_ROW_MODE,
      [$.TH]: IN_ROW_MODE
    };
    var TOKEN_HANDLERS = {
      [INITIAL_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInInitialMode,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInInitialMode,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: doctypeInInitialMode,
        [Tokenizer.START_TAG_TOKEN]: tokenInInitialMode,
        [Tokenizer.END_TAG_TOKEN]: tokenInInitialMode,
        [Tokenizer.EOF_TOKEN]: tokenInInitialMode
      },
      [BEFORE_HTML_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHtml,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHtml,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagBeforeHtml,
        [Tokenizer.END_TAG_TOKEN]: endTagBeforeHtml,
        [Tokenizer.EOF_TOKEN]: tokenBeforeHtml
      },
      [BEFORE_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagBeforeHead,
        [Tokenizer.END_TAG_TOKEN]: endTagBeforeHead,
        [Tokenizer.EOF_TOKEN]: tokenBeforeHead
      },
      [IN_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagInHead,
        [Tokenizer.END_TAG_TOKEN]: endTagInHead,
        [Tokenizer.EOF_TOKEN]: tokenInHead
      },
      [IN_HEAD_NO_SCRIPT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInHeadNoScript,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHeadNoScript,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagInHeadNoScript,
        [Tokenizer.END_TAG_TOKEN]: endTagInHeadNoScript,
        [Tokenizer.EOF_TOKEN]: tokenInHeadNoScript
      },
      [AFTER_HEAD_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterHead,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterHead,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterHead,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterHead,
        [Tokenizer.EOF_TOKEN]: tokenAfterHead
      },
      [IN_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInBody,
        [Tokenizer.END_TAG_TOKEN]: endTagInBody,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [TEXT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: ignoreToken,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: ignoreToken,
        [Tokenizer.END_TAG_TOKEN]: endTagInText,
        [Tokenizer.EOF_TOKEN]: eofInText
      },
      [IN_TABLE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTable,
        [Tokenizer.END_TAG_TOKEN]: endTagInTable,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TABLE_TEXT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTableText,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInTableText,
        [Tokenizer.COMMENT_TOKEN]: tokenInTableText,
        [Tokenizer.DOCTYPE_TOKEN]: tokenInTableText,
        [Tokenizer.START_TAG_TOKEN]: tokenInTableText,
        [Tokenizer.END_TAG_TOKEN]: tokenInTableText,
        [Tokenizer.EOF_TOKEN]: tokenInTableText
      },
      [IN_CAPTION_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInCaption,
        [Tokenizer.END_TAG_TOKEN]: endTagInCaption,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_COLUMN_GROUP_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenInColumnGroup,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInColumnGroup,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInColumnGroup,
        [Tokenizer.END_TAG_TOKEN]: endTagInColumnGroup,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TABLE_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTableBody,
        [Tokenizer.END_TAG_TOKEN]: endTagInTableBody,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_ROW_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInRow,
        [Tokenizer.END_TAG_TOKEN]: endTagInRow,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_CELL_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInCell,
        [Tokenizer.END_TAG_TOKEN]: endTagInCell,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_SELECT_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInSelect,
        [Tokenizer.END_TAG_TOKEN]: endTagInSelect,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_SELECT_IN_TABLE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInSelectInTable,
        [Tokenizer.END_TAG_TOKEN]: endTagInSelectInTable,
        [Tokenizer.EOF_TOKEN]: eofInBody
      },
      [IN_TEMPLATE_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: characterInBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInTemplate,
        [Tokenizer.END_TAG_TOKEN]: endTagInTemplate,
        [Tokenizer.EOF_TOKEN]: eofInTemplate
      },
      [AFTER_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterBody,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToRootHtmlElement,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterBody,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterBody,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [IN_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagInFrameset,
        [Tokenizer.END_TAG_TOKEN]: endTagInFrameset,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [Tokenizer.COMMENT_TOKEN]: appendComment,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterFrameset,
        [Tokenizer.END_TAG_TOKEN]: endTagAfterFrameset,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_AFTER_BODY_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterBody,
        [Tokenizer.END_TAG_TOKEN]: tokenAfterAfterBody,
        [Tokenizer.EOF_TOKEN]: stopParsing
      },
      [AFTER_AFTER_FRAMESET_MODE]: {
        [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
        [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
        [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
        [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterFrameset,
        [Tokenizer.END_TAG_TOKEN]: ignoreToken,
        [Tokenizer.EOF_TOKEN]: stopParsing
      }
    };
    var Parser = class {
      constructor(options) {
        this.options = mergeOptions(DEFAULT_OPTIONS, options);
        this.treeAdapter = this.options.treeAdapter;
        this.pendingScript = null;
        if (this.options.sourceCodeLocationInfo) {
          Mixin.install(this, LocationInfoParserMixin);
        }
        if (this.options.onParseError) {
          Mixin.install(this, ErrorReportingParserMixin, {onParseError: this.options.onParseError});
        }
      }
      parse(html3) {
        const document2 = this.treeAdapter.createDocument();
        this._bootstrap(document2, null);
        this.tokenizer.write(html3, true);
        this._runParsingLoop(null);
        return document2;
      }
      parseFragment(html3, fragmentContext) {
        if (!fragmentContext) {
          fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);
        }
        const documentMock = this.treeAdapter.createElement("documentmock", NS.HTML, []);
        this._bootstrap(documentMock, fragmentContext);
        if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE) {
          this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
        }
        this._initTokenizerForFragmentParsing();
        this._insertFakeRootElement();
        this._resetInsertionMode();
        this._findFormInFragmentContext();
        this.tokenizer.write(html3, true);
        this._runParsingLoop(null);
        const rootElement = this.treeAdapter.getFirstChild(documentMock);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      _bootstrap(document2, fragmentContext) {
        this.tokenizer = new Tokenizer(this.options);
        this.stopped = false;
        this.insertionMode = INITIAL_MODE;
        this.originalInsertionMode = "";
        this.document = document2;
        this.fragmentContext = fragmentContext;
        this.headElement = null;
        this.formElement = null;
        this.openElements = new OpenElementStack(this.document, this.treeAdapter);
        this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
        this.tmplInsertionModeStack = [];
        this.tmplInsertionModeStackTop = -1;
        this.currentTmplInsertionMode = null;
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
      }
      _err() {
      }
      _runParsingLoop(scriptHandler) {
        while (!this.stopped) {
          this._setupTokenizerCDATAMode();
          const token2 = this.tokenizer.getNextToken();
          if (token2.type === Tokenizer.HIBERNATION_TOKEN) {
            break;
          }
          if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (token2.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token2.chars[0] === "\n") {
              if (token2.chars.length === 1) {
                continue;
              }
              token2.chars = token2.chars.substr(1);
            }
          }
          this._processInputToken(token2);
          if (scriptHandler && this.pendingScript) {
            break;
          }
        }
      }
      runParsingLoopForCurrentChunk(writeCallback, scriptHandler) {
        this._runParsingLoop(scriptHandler);
        if (scriptHandler && this.pendingScript) {
          const script = this.pendingScript;
          this.pendingScript = null;
          scriptHandler(script);
          return;
        }
        if (writeCallback) {
          writeCallback();
        }
      }
      _setupTokenizerCDATAMode() {
        const current = this._getAdjustedCurrentElement();
        this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS.HTML && !this._isIntegrationPoint(current);
      }
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = TEXT_MODE;
      }
      switchToPlaintextParsing() {
        this.insertionMode = TEXT_MODE;
        this.originalInsertionMode = IN_BODY_MODE;
        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
      }
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let node = this.fragmentContext;
        do {
          if (this.treeAdapter.getTagName(node) === $.FORM) {
            this.formElement = node;
            break;
          }
          node = this.treeAdapter.getParentNode(node);
        } while (node);
      }
      _initTokenizerForFragmentParsing() {
        if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
          const tn = this.treeAdapter.getTagName(this.fragmentContext);
          if (tn === $.TITLE || tn === $.TEXTAREA) {
            this.tokenizer.state = Tokenizer.MODE.RCDATA;
          } else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) {
            this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
          } else if (tn === $.SCRIPT) {
            this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;
          } else if (tn === $.PLAINTEXT) {
            this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
          }
        }
      }
      _setDocumentType(token2) {
        const name = token2.name || "";
        const publicId = token2.publicId || "";
        const systemId = token2.systemId || "";
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
      }
      _attachElementToTree(element) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element);
        } else {
          const parent = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.appendChild(parent, element);
        }
      }
      _appendElement(token2, namespaceURI) {
        const element = this.treeAdapter.createElement(token2.tagName, namespaceURI, token2.attrs);
        this._attachElementToTree(element);
      }
      _insertElement(token2, namespaceURI) {
        const element = this.treeAdapter.createElement(token2.tagName, namespaceURI, token2.attrs);
        this._attachElementToTree(element);
        this.openElements.push(element);
      }
      _insertFakeElement(tagName) {
        const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
        this._attachElementToTree(element);
        this.openElements.push(element);
      }
      _insertTemplate(token2) {
        const tmpl = this.treeAdapter.createElement(token2.tagName, NS.HTML, token2.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl);
        this.openElements.push(tmpl);
      }
      _insertFakeRootElement() {
        const element = this.treeAdapter.createElement($.HTML, NS.HTML, []);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element);
      }
      _appendCommentNode(token2, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token2.data);
        this.treeAdapter.appendChild(parent, commentNode);
      }
      _insertCharacters(token2) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentText(token2.chars);
        } else {
          const parent = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.insertText(parent, token2.chars);
        }
      }
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      _shouldProcessTokenInForeignContent(token2) {
        const current = this._getAdjustedCurrentElement();
        if (!current || current === this.document) {
          return false;
        }
        const ns = this.treeAdapter.getNamespaceURI(current);
        if (ns === NS.HTML) {
          return false;
        }
        if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML && token2.type === Tokenizer.START_TAG_TOKEN && token2.tagName === $.SVG) {
          return false;
        }
        const isCharacterToken = token2.type === Tokenizer.CHARACTER_TOKEN || token2.type === Tokenizer.NULL_CHARACTER_TOKEN || token2.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        const isMathMLTextStartTag = token2.type === Tokenizer.START_TAG_TOKEN && token2.tagName !== $.MGLYPH && token2.tagName !== $.MALIGNMARK;
        if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML)) {
          return false;
        }
        if ((token2.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS.HTML)) {
          return false;
        }
        return token2.type !== Tokenizer.EOF_TOKEN;
      }
      _processToken(token2) {
        TOKEN_HANDLERS[this.insertionMode][token2.type](this, token2);
      }
      _processTokenInBodyMode(token2) {
        TOKEN_HANDLERS[IN_BODY_MODE][token2.type](this, token2);
      }
      _processTokenInForeignContent(token2) {
        if (token2.type === Tokenizer.CHARACTER_TOKEN) {
          characterInForeignContent(this, token2);
        } else if (token2.type === Tokenizer.NULL_CHARACTER_TOKEN) {
          nullCharacterInForeignContent(this, token2);
        } else if (token2.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN) {
          insertCharacters(this, token2);
        } else if (token2.type === Tokenizer.COMMENT_TOKEN) {
          appendComment(this, token2);
        } else if (token2.type === Tokenizer.START_TAG_TOKEN) {
          startTagInForeignContent(this, token2);
        } else if (token2.type === Tokenizer.END_TAG_TOKEN) {
          endTagInForeignContent(this, token2);
        }
      }
      _processInputToken(token2) {
        if (this._shouldProcessTokenInForeignContent(token2)) {
          this._processTokenInForeignContent(token2);
        } else {
          this._processToken(token2);
        }
        if (token2.type === Tokenizer.START_TAG_TOKEN && token2.selfClosing && !token2.ackSelfClosing) {
          this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      _isIntegrationPoint(element, foreignNS) {
        const tn = this.treeAdapter.getTagName(element);
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
      }
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.length;
        if (listLength) {
          let unopenIdx = listLength;
          let entry = null;
          do {
            unopenIdx--;
            entry = this.activeFormattingElements.entries[unopenIdx];
            if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
              unopenIdx++;
              break;
            }
          } while (unopenIdx > 0);
          for (let i = unopenIdx; i < listLength; i++) {
            entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = IN_ROW_MODE;
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion($.P);
        this.openElements.popUntilTagNamePopped($.P);
      }
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop, last = false; i >= 0; i--) {
          let element = this.openElements.items[i];
          if (i === 0) {
            last = true;
            if (this.fragmentContext) {
              element = this.fragmentContext;
            }
          }
          const tn = this.treeAdapter.getTagName(element);
          const newInsertionMode = INSERTION_MODE_RESET_MAP[tn];
          if (newInsertionMode) {
            this.insertionMode = newInsertionMode;
            break;
          } else if (!last && (tn === $.TD || tn === $.TH)) {
            this.insertionMode = IN_CELL_MODE;
            break;
          } else if (!last && tn === $.HEAD) {
            this.insertionMode = IN_HEAD_MODE;
            break;
          } else if (tn === $.SELECT) {
            this._resetInsertionModeForSelect(i);
            break;
          } else if (tn === $.TEMPLATE) {
            this.insertionMode = this.currentTmplInsertionMode;
            break;
          } else if (tn === $.HTML) {
            this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
            break;
          } else if (last) {
            this.insertionMode = IN_BODY_MODE;
            break;
          }
        }
      }
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const ancestor = this.openElements.items[i];
            const tn = this.treeAdapter.getTagName(ancestor);
            if (tn === $.TEMPLATE) {
              break;
            } else if (tn === $.TABLE) {
              this.insertionMode = IN_SELECT_IN_TABLE_MODE;
              return;
            }
          }
        }
        this.insertionMode = IN_SELECT_MODE;
      }
      _pushTmplInsertionMode(mode) {
        this.tmplInsertionModeStack.push(mode);
        this.tmplInsertionModeStackTop++;
        this.currentTmplInsertionMode = mode;
      }
      _popTmplInsertionMode() {
        this.tmplInsertionModeStack.pop();
        this.tmplInsertionModeStackTop--;
        this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
      }
      _isElementCausesFosterParenting(element) {
        const tn = this.treeAdapter.getTagName(element);
        return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
      }
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
      }
      _findFosterParentingLocation() {
        const location = {
          parent: null,
          beforeElement: null
        };
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          const tn = this.treeAdapter.getTagName(openElement);
          const ns = this.treeAdapter.getNamespaceURI(openElement);
          if (tn === $.TEMPLATE && ns === NS.HTML) {
            location.parent = this.treeAdapter.getTemplateContent(openElement);
            break;
          } else if (tn === $.TABLE) {
            location.parent = this.treeAdapter.getParentNode(openElement);
            if (location.parent) {
              location.beforeElement = openElement;
            } else {
              location.parent = this.openElements.items[i - 1];
            }
            break;
          }
        }
        if (!location.parent) {
          location.parent = this.openElements.items[0];
        }
        return location;
      }
      _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        } else {
          this.treeAdapter.appendChild(location.parent, element);
        }
      }
      _fosterParentText(chars) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
        } else {
          this.treeAdapter.insertText(location.parent, chars);
        }
      }
      _isSpecialElement(element) {
        const tn = this.treeAdapter.getTagName(element);
        const ns = this.treeAdapter.getNamespaceURI(element);
        return HTML.SPECIAL_ELEMENTS[ns][tn];
      }
    };
    module.exports = Parser;
    function aaObtainFormattingElementEntry(p, token2) {
      let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token2.tagName);
      if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
          p.activeFormattingElements.removeEntry(formattingElementEntry);
          formattingElementEntry = null;
        } else if (!p.openElements.hasInScope(token2.tagName)) {
          formattingElementEntry = null;
        }
      } else {
        genericEndTagInBody(p, token2);
      }
      return formattingElementEntry;
    }
    function aaObtainFurthestBlock(p, formattingElementEntry) {
      let furthestBlock = null;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const element = p.openElements.items[i];
        if (element === formattingElementEntry.element) {
          break;
        }
        if (p._isSpecialElement(element)) {
          furthestBlock = element;
        }
      }
      if (!furthestBlock) {
        p.openElements.popUntilElementPopped(formattingElementEntry.element);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
      }
      return furthestBlock;
    }
    function aaInnerLoop(p, furthestBlock, formattingElement) {
      let lastElement = furthestBlock;
      let nextElement = p.openElements.getCommonAncestor(furthestBlock);
      for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
          if (counterOverflow) {
            p.activeFormattingElements.removeEntry(elementEntry);
          }
          p.openElements.remove(element);
        } else {
          element = aaRecreateElementFromEntry(p, elementEntry);
          if (lastElement === furthestBlock) {
            p.activeFormattingElements.bookmark = elementEntry;
          }
          p.treeAdapter.detachNode(lastElement);
          p.treeAdapter.appendChild(element, lastElement);
          lastElement = element;
        }
      }
      return lastElement;
    }
    function aaRecreateElementFromEntry(p, elementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
      const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
      p.openElements.replace(elementEntry.element, newElement);
      elementEntry.element = newElement;
      return newElement;
    }
    function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
      if (p._isElementCausesFosterParenting(commonAncestor)) {
        p._fosterParentElement(lastElement);
      } else {
        const tn = p.treeAdapter.getTagName(commonAncestor);
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tn === $.TEMPLATE && ns === NS.HTML) {
          commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
      }
    }
    function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
      const token2 = formattingElementEntry.token;
      const newElement = p.treeAdapter.createElement(token2.tagName, ns, token2.attrs);
      p._adoptNodes(furthestBlock, newElement);
      p.treeAdapter.appendChild(furthestBlock, newElement);
      p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      p.openElements.remove(formattingElementEntry.element);
      p.openElements.insertAfter(furthestBlock, newElement);
    }
    function callAdoptionAgency(p, token2) {
      let formattingElementEntry;
      for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        formattingElementEntry = aaObtainFormattingElementEntry(p, token2, formattingElementEntry);
        if (!formattingElementEntry) {
          break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
          break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
      }
    }
    function ignoreToken() {
    }
    function misplacedDoctype(p) {
      p._err(ERR.misplacedDoctype);
    }
    function appendComment(p, token2) {
      p._appendCommentNode(token2, p.openElements.currentTmplContent || p.openElements.current);
    }
    function appendCommentToRootHtmlElement(p, token2) {
      p._appendCommentNode(token2, p.openElements.items[0]);
    }
    function appendCommentToDocument(p, token2) {
      p._appendCommentNode(token2, p.document);
    }
    function insertCharacters(p, token2) {
      p._insertCharacters(token2);
    }
    function stopParsing(p) {
      p.stopped = true;
    }
    function doctypeInInitialMode(p, token2) {
      p._setDocumentType(token2);
      const mode = token2.forceQuirks ? HTML.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token2);
      if (!doctype.isConforming(token2)) {
        p._err(ERR.nonConformingDoctype);
      }
      p.treeAdapter.setDocumentMode(p.document, mode);
      p.insertionMode = BEFORE_HTML_MODE;
    }
    function tokenInInitialMode(p, token2) {
      p._err(ERR.missingDoctype, {beforeToken: true});
      p.treeAdapter.setDocumentMode(p.document, HTML.DOCUMENT_MODE.QUIRKS);
      p.insertionMode = BEFORE_HTML_MODE;
      p._processToken(token2);
    }
    function startTagBeforeHtml(p, token2) {
      if (token2.tagName === $.HTML) {
        p._insertElement(token2, NS.HTML);
        p.insertionMode = BEFORE_HEAD_MODE;
      } else {
        tokenBeforeHtml(p, token2);
      }
    }
    function endTagBeforeHtml(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR) {
        tokenBeforeHtml(p, token2);
      }
    }
    function tokenBeforeHtml(p, token2) {
      p._insertFakeRootElement();
      p.insertionMode = BEFORE_HEAD_MODE;
      p._processToken(token2);
    }
    function startTagBeforeHead(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.HEAD) {
        p._insertElement(token2, NS.HTML);
        p.headElement = p.openElements.current;
        p.insertionMode = IN_HEAD_MODE;
      } else {
        tokenBeforeHead(p, token2);
      }
    }
    function endTagBeforeHead(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR) {
        tokenBeforeHead(p, token2);
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(p, token2) {
      p._insertFakeElement($.HEAD);
      p.headElement = p.openElements.current;
      p.insertionMode = IN_HEAD_MODE;
      p._processToken(token2);
    }
    function startTagInHead(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META) {
        p._appendElement(token2, NS.HTML);
        token2.ackSelfClosing = true;
      } else if (tn === $.TITLE) {
        p._switchToTextParsing(token2, Tokenizer.MODE.RCDATA);
      } else if (tn === $.NOSCRIPT) {
        if (p.options.scriptingEnabled) {
          p._switchToTextParsing(token2, Tokenizer.MODE.RAWTEXT);
        } else {
          p._insertElement(token2, NS.HTML);
          p.insertionMode = IN_HEAD_NO_SCRIPT_MODE;
        }
      } else if (tn === $.NOFRAMES || tn === $.STYLE) {
        p._switchToTextParsing(token2, Tokenizer.MODE.RAWTEXT);
      } else if (tn === $.SCRIPT) {
        p._switchToTextParsing(token2, Tokenizer.MODE.SCRIPT_DATA);
      } else if (tn === $.TEMPLATE) {
        p._insertTemplate(token2, NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
        p.insertionMode = IN_TEMPLATE_MODE;
        p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
      } else if (tn === $.HEAD) {
        p._err(ERR.misplacedStartTagForHeadElement);
      } else {
        tokenInHead(p, token2);
      }
    }
    function endTagInHead(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HEAD) {
        p.openElements.pop();
        p.insertionMode = AFTER_HEAD_MODE;
      } else if (tn === $.BODY || tn === $.BR || tn === $.HTML) {
        tokenInHead(p, token2);
      } else if (tn === $.TEMPLATE) {
        if (p.openElements.tmplCount > 0) {
          p.openElements.generateImpliedEndTagsThoroughly();
          if (p.openElements.currentTagName !== $.TEMPLATE) {
            p._err(ERR.closingOfElementWithOpenChildElements);
          }
          p.openElements.popUntilTagNamePopped($.TEMPLATE);
          p.activeFormattingElements.clearToLastMarker();
          p._popTmplInsertionMode();
          p._resetInsertionMode();
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHead(p, token2) {
      p.openElements.pop();
      p.insertionMode = AFTER_HEAD_MODE;
      p._processToken(token2);
    }
    function startTagInHeadNoScript(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.BASEFONT || tn === $.BGSOUND || tn === $.HEAD || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.STYLE) {
        startTagInHead(p, token2);
      } else if (tn === $.NOSCRIPT) {
        p._err(ERR.nestedNoscriptInHead);
      } else {
        tokenInHeadNoScript(p, token2);
      }
    }
    function endTagInHeadNoScript(p, token2) {
      const tn = token2.tagName;
      if (tn === $.NOSCRIPT) {
        p.openElements.pop();
        p.insertionMode = IN_HEAD_MODE;
      } else if (tn === $.BR) {
        tokenInHeadNoScript(p, token2);
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHeadNoScript(p, token2) {
      const errCode = token2.type === Tokenizer.EOF_TOKEN ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
      p._err(errCode);
      p.openElements.pop();
      p.insertionMode = IN_HEAD_MODE;
      p._processToken(token2);
    }
    function startTagAfterHead(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.BODY) {
        p._insertElement(token2, NS.HTML);
        p.framesetOk = false;
        p.insertionMode = IN_BODY_MODE;
      } else if (tn === $.FRAMESET) {
        p._insertElement(token2, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
      } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
        p._err(ERR.abandonedHeadElementChild);
        p.openElements.push(p.headElement);
        startTagInHead(p, token2);
        p.openElements.remove(p.headElement);
      } else if (tn === $.HEAD) {
        p._err(ERR.misplacedStartTagForHeadElement);
      } else {
        tokenAfterHead(p, token2);
      }
    }
    function endTagAfterHead(p, token2) {
      const tn = token2.tagName;
      if (tn === $.BODY || tn === $.HTML || tn === $.BR) {
        tokenAfterHead(p, token2);
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token2);
      } else {
        p._err(ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenAfterHead(p, token2) {
      p._insertFakeElement($.BODY);
      p.insertionMode = IN_BODY_MODE;
      p._processToken(token2);
    }
    function whitespaceCharacterInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token2);
    }
    function characterInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token2);
      p.framesetOk = false;
    }
    function htmlStartTagInBody(p, token2) {
      if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token2.attrs);
      }
    }
    function bodyStartTagInBody(p, token2) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token2.attrs);
      }
    }
    function framesetStartTagInBody(p, token2) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token2, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
      }
    }
    function addressStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token2, NS.HTML);
    }
    function numberedHeaderStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      const tn = p.openElements.currentTagName;
      if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
        p.openElements.pop();
      }
      p._insertElement(token2, NS.HTML);
    }
    function preStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token2, NS.HTML);
      p.skipNextNewLine = true;
      p.framesetOk = false;
    }
    function formStartTagInBody(p, token2) {
      const inTemplate = p.openElements.tmplCount > 0;
      if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token2, NS.HTML);
        if (!inTemplate) {
          p.formElement = p.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(p, token2) {
      p.framesetOk = false;
      const tn = token2.tagName;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const element = p.openElements.items[i];
        const elementTn = p.treeAdapter.getTagName(element);
        let closeTn = null;
        if (tn === $.LI && elementTn === $.LI) {
          closeTn = $.LI;
        } else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT)) {
          closeTn = elementTn;
        }
        if (closeTn) {
          p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
          p.openElements.popUntilTagNamePopped(closeTn);
          break;
        }
        if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p._isSpecialElement(element)) {
          break;
        }
      }
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token2, NS.HTML);
    }
    function plaintextStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token2, NS.HTML);
      p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
    }
    function buttonStartTagInBody(p, token2) {
      if (p.openElements.hasInScope($.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.BUTTON);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
      p.framesetOk = false;
    }
    function aStartTagInBody(p, token2) {
      const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);
      if (activeElementEntry) {
        callAdoptionAgency(p, token2);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token2);
    }
    function bStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token2);
    }
    function nobrStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      if (p.openElements.hasInScope($.NOBR)) {
        callAdoptionAgency(p, token2);
        p._reconstructActiveFormattingElements();
      }
      p._insertElement(token2, NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token2);
    }
    function appletStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
    }
    function tableStartTagInBody(p, token2) {
      if (p.treeAdapter.getDocumentMode(p.document) !== HTML.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token2, NS.HTML);
      p.framesetOk = false;
      p.insertionMode = IN_TABLE_MODE;
    }
    function areaStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token2, NS.HTML);
      p.framesetOk = false;
      token2.ackSelfClosing = true;
    }
    function inputStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token2, NS.HTML);
      const inputType = Tokenizer.getTokenAttr(token2, ATTRS.TYPE);
      if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) {
        p.framesetOk = false;
      }
      token2.ackSelfClosing = true;
    }
    function paramStartTagInBody(p, token2) {
      p._appendElement(token2, NS.HTML);
      token2.ackSelfClosing = true;
    }
    function hrStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._appendElement(token2, NS.HTML);
      p.framesetOk = false;
      token2.ackSelfClosing = true;
    }
    function imageStartTagInBody(p, token2) {
      token2.tagName = $.IMG;
      areaStartTagInBody(p, token2);
    }
    function textareaStartTagInBody(p, token2) {
      p._insertElement(token2, NS.HTML);
      p.skipNextNewLine = true;
      p.tokenizer.state = Tokenizer.MODE.RCDATA;
      p.originalInsertionMode = p.insertionMode;
      p.framesetOk = false;
      p.insertionMode = TEXT_MODE;
    }
    function xmpStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._reconstructActiveFormattingElements();
      p.framesetOk = false;
      p._switchToTextParsing(token2, Tokenizer.MODE.RAWTEXT);
    }
    function iframeStartTagInBody(p, token2) {
      p.framesetOk = false;
      p._switchToTextParsing(token2, Tokenizer.MODE.RAWTEXT);
    }
    function noembedStartTagInBody(p, token2) {
      p._switchToTextParsing(token2, Tokenizer.MODE.RAWTEXT);
    }
    function selectStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
      p.framesetOk = false;
      if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE || p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE || p.insertionMode === IN_CELL_MODE) {
        p.insertionMode = IN_SELECT_IN_TABLE_MODE;
      } else {
        p.insertionMode = IN_SELECT_MODE;
      }
    }
    function optgroupStartTagInBody(p, token2) {
      if (p.openElements.currentTagName === $.OPTION) {
        p.openElements.pop();
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
    }
    function rbStartTagInBody(p, token2) {
      if (p.openElements.hasInScope($.RUBY)) {
        p.openElements.generateImpliedEndTags();
      }
      p._insertElement(token2, NS.HTML);
    }
    function rtStartTagInBody(p, token2) {
      if (p.openElements.hasInScope($.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.RTC);
      }
      p._insertElement(token2, NS.HTML);
    }
    function menuStartTagInBody(p, token2) {
      if (p.openElements.hasInButtonScope($.P)) {
        p._closePElement();
      }
      p._insertElement(token2, NS.HTML);
    }
    function mathStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenMathMLAttrs(token2);
      foreignContent.adjustTokenXMLAttrs(token2);
      if (token2.selfClosing) {
        p._appendElement(token2, NS.MATHML);
      } else {
        p._insertElement(token2, NS.MATHML);
      }
      token2.ackSelfClosing = true;
    }
    function svgStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenSVGAttrs(token2);
      foreignContent.adjustTokenXMLAttrs(token2);
      if (token2.selfClosing) {
        p._appendElement(token2, NS.SVG);
      } else {
        p._insertElement(token2, NS.SVG);
      }
      token2.ackSelfClosing = true;
    }
    function genericStartTagInBody(p, token2) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token2, NS.HTML);
    }
    function startTagInBody(p, token2) {
      const tn = token2.tagName;
      switch (tn.length) {
        case 1:
          if (tn === $.I || tn === $.S || tn === $.B || tn === $.U) {
            bStartTagInBody(p, token2);
          } else if (tn === $.P) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.A) {
            aStartTagInBody(p, token2);
          } else {
            genericStartTagInBody(p, token2);
          }
          break;
        case 2:
          if (tn === $.DL || tn === $.OL || tn === $.UL) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
            numberedHeaderStartTagInBody(p, token2);
          } else if (tn === $.LI || tn === $.DD || tn === $.DT) {
            listItemStartTagInBody(p, token2);
          } else if (tn === $.EM || tn === $.TT) {
            bStartTagInBody(p, token2);
          } else if (tn === $.BR) {
            areaStartTagInBody(p, token2);
          } else if (tn === $.HR) {
            hrStartTagInBody(p, token2);
          } else if (tn === $.RB) {
            rbStartTagInBody(p, token2);
          } else if (tn === $.RT || tn === $.RP) {
            rtStartTagInBody(p, token2);
          } else if (tn !== $.TH && tn !== $.TD && tn !== $.TR) {
            genericStartTagInBody(p, token2);
          }
          break;
        case 3:
          if (tn === $.DIV || tn === $.DIR || tn === $.NAV) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.PRE) {
            preStartTagInBody(p, token2);
          } else if (tn === $.BIG) {
            bStartTagInBody(p, token2);
          } else if (tn === $.IMG || tn === $.WBR) {
            areaStartTagInBody(p, token2);
          } else if (tn === $.XMP) {
            xmpStartTagInBody(p, token2);
          } else if (tn === $.SVG) {
            svgStartTagInBody(p, token2);
          } else if (tn === $.RTC) {
            rbStartTagInBody(p, token2);
          } else if (tn !== $.COL) {
            genericStartTagInBody(p, token2);
          }
          break;
        case 4:
          if (tn === $.HTML) {
            htmlStartTagInBody(p, token2);
          } else if (tn === $.BASE || tn === $.LINK || tn === $.META) {
            startTagInHead(p, token2);
          } else if (tn === $.BODY) {
            bodyStartTagInBody(p, token2);
          } else if (tn === $.MAIN || tn === $.MENU) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.FORM) {
            formStartTagInBody(p, token2);
          } else if (tn === $.CODE || tn === $.FONT) {
            bStartTagInBody(p, token2);
          } else if (tn === $.NOBR) {
            nobrStartTagInBody(p, token2);
          } else if (tn === $.AREA) {
            areaStartTagInBody(p, token2);
          } else if (tn === $.MATH) {
            mathStartTagInBody(p, token2);
          } else if (tn === $.MENU) {
            menuStartTagInBody(p, token2);
          } else if (tn !== $.HEAD) {
            genericStartTagInBody(p, token2);
          }
          break;
        case 5:
          if (tn === $.STYLE || tn === $.TITLE) {
            startTagInHead(p, token2);
          } else if (tn === $.ASIDE) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.SMALL) {
            bStartTagInBody(p, token2);
          } else if (tn === $.TABLE) {
            tableStartTagInBody(p, token2);
          } else if (tn === $.EMBED) {
            areaStartTagInBody(p, token2);
          } else if (tn === $.INPUT) {
            inputStartTagInBody(p, token2);
          } else if (tn === $.PARAM || tn === $.TRACK) {
            paramStartTagInBody(p, token2);
          } else if (tn === $.IMAGE) {
            imageStartTagInBody(p, token2);
          } else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD) {
            genericStartTagInBody(p, token2);
          }
          break;
        case 6:
          if (tn === $.SCRIPT) {
            startTagInHead(p, token2);
          } else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.BUTTON) {
            buttonStartTagInBody(p, token2);
          } else if (tn === $.STRIKE || tn === $.STRONG) {
            bStartTagInBody(p, token2);
          } else if (tn === $.APPLET || tn === $.OBJECT) {
            appletStartTagInBody(p, token2);
          } else if (tn === $.KEYGEN) {
            areaStartTagInBody(p, token2);
          } else if (tn === $.SOURCE) {
            paramStartTagInBody(p, token2);
          } else if (tn === $.IFRAME) {
            iframeStartTagInBody(p, token2);
          } else if (tn === $.SELECT) {
            selectStartTagInBody(p, token2);
          } else if (tn === $.OPTION) {
            optgroupStartTagInBody(p, token2);
          } else {
            genericStartTagInBody(p, token2);
          }
          break;
        case 7:
          if (tn === $.BGSOUND) {
            startTagInHead(p, token2);
          } else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.LISTING) {
            preStartTagInBody(p, token2);
          } else if (tn === $.MARQUEE) {
            appletStartTagInBody(p, token2);
          } else if (tn === $.NOEMBED) {
            noembedStartTagInBody(p, token2);
          } else if (tn !== $.CAPTION) {
            genericStartTagInBody(p, token2);
          }
          break;
        case 8:
          if (tn === $.BASEFONT) {
            startTagInHead(p, token2);
          } else if (tn === $.FRAMESET) {
            framesetStartTagInBody(p, token2);
          } else if (tn === $.FIELDSET) {
            addressStartTagInBody(p, token2);
          } else if (tn === $.TEXTAREA) {
            textareaStartTagInBody(p, token2);
          } else if (tn === $.TEMPLATE) {
            startTagInHead(p, token2);
          } else if (tn === $.NOSCRIPT) {
            if (p.options.scriptingEnabled) {
              noembedStartTagInBody(p, token2);
            } else {
              genericStartTagInBody(p, token2);
            }
          } else if (tn === $.OPTGROUP) {
            optgroupStartTagInBody(p, token2);
          } else if (tn !== $.COLGROUP) {
            genericStartTagInBody(p, token2);
          }
          break;
        case 9:
          if (tn === $.PLAINTEXT) {
            plaintextStartTagInBody(p, token2);
          } else {
            genericStartTagInBody(p, token2);
          }
          break;
        case 10:
          if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
            addressStartTagInBody(p, token2);
          } else {
            genericStartTagInBody(p, token2);
          }
          break;
        default:
          genericStartTagInBody(p, token2);
      }
    }
    function bodyEndTagInBody(p) {
      if (p.openElements.hasInScope($.BODY)) {
        p.insertionMode = AFTER_BODY_MODE;
      }
    }
    function htmlEndTagInBody(p, token2) {
      if (p.openElements.hasInScope($.BODY)) {
        p.insertionMode = AFTER_BODY_MODE;
        p._processToken(token2);
      }
    }
    function addressEndTagInBody(p, token2) {
      const tn = token2.tagName;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function formEndTagInBody(p) {
      const inTemplate = p.openElements.tmplCount > 0;
      const formElement = p.formElement;
      if (!inTemplate) {
        p.formElement = null;
      }
      if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
          p.openElements.popUntilTagNamePopped($.FORM);
        } else {
          p.openElements.remove(formElement);
        }
      }
    }
    function pEndTagInBody(p) {
      if (!p.openElements.hasInButtonScope($.P)) {
        p._insertFakeElement($.P);
      }
      p._closePElement();
    }
    function liEndTagInBody(p) {
      if (p.openElements.hasInListItemScope($.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.LI);
        p.openElements.popUntilTagNamePopped($.LI);
      }
    }
    function ddEndTagInBody(p, token2) {
      const tn = token2.tagName;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function numberedHeaderEndTagInBody(p) {
      if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(p, token2) {
      const tn = token2.tagName;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(p) {
      p._reconstructActiveFormattingElements();
      p._insertFakeElement($.BR);
      p.openElements.pop();
      p.framesetOk = false;
    }
    function genericEndTagInBody(p, token2) {
      const tn = token2.tagName;
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getTagName(element) === tn) {
          p.openElements.generateImpliedEndTagsWithExclusion(tn);
          p.openElements.popUntilElementPopped(element);
          break;
        }
        if (p._isSpecialElement(element)) {
          break;
        }
      }
    }
    function endTagInBody(p, token2) {
      const tn = token2.tagName;
      switch (tn.length) {
        case 1:
          if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U) {
            callAdoptionAgency(p, token2);
          } else if (tn === $.P) {
            pEndTagInBody(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 2:
          if (tn === $.DL || tn === $.UL || tn === $.OL) {
            addressEndTagInBody(p, token2);
          } else if (tn === $.LI) {
            liEndTagInBody(p, token2);
          } else if (tn === $.DD || tn === $.DT) {
            ddEndTagInBody(p, token2);
          } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
            numberedHeaderEndTagInBody(p, token2);
          } else if (tn === $.BR) {
            brEndTagInBody(p, token2);
          } else if (tn === $.EM || tn === $.TT) {
            callAdoptionAgency(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 3:
          if (tn === $.BIG) {
            callAdoptionAgency(p, token2);
          } else if (tn === $.DIR || tn === $.DIV || tn === $.NAV || tn === $.PRE) {
            addressEndTagInBody(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 4:
          if (tn === $.BODY) {
            bodyEndTagInBody(p, token2);
          } else if (tn === $.HTML) {
            htmlEndTagInBody(p, token2);
          } else if (tn === $.FORM) {
            formEndTagInBody(p, token2);
          } else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR) {
            callAdoptionAgency(p, token2);
          } else if (tn === $.MAIN || tn === $.MENU) {
            addressEndTagInBody(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 5:
          if (tn === $.ASIDE) {
            addressEndTagInBody(p, token2);
          } else if (tn === $.SMALL) {
            callAdoptionAgency(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 6:
          if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
            addressEndTagInBody(p, token2);
          } else if (tn === $.APPLET || tn === $.OBJECT) {
            appletEndTagInBody(p, token2);
          } else if (tn === $.STRIKE || tn === $.STRONG) {
            callAdoptionAgency(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 7:
          if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY || tn === $.LISTING) {
            addressEndTagInBody(p, token2);
          } else if (tn === $.MARQUEE) {
            appletEndTagInBody(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 8:
          if (tn === $.FIELDSET) {
            addressEndTagInBody(p, token2);
          } else if (tn === $.TEMPLATE) {
            endTagInHead(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        case 10:
          if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
            addressEndTagInBody(p, token2);
          } else {
            genericEndTagInBody(p, token2);
          }
          break;
        default:
          genericEndTagInBody(p, token2);
      }
    }
    function eofInBody(p, token2) {
      if (p.tmplInsertionModeStackTop > -1) {
        eofInTemplate(p, token2);
      } else {
        p.stopped = true;
      }
    }
    function endTagInText(p, token2) {
      if (token2.tagName === $.SCRIPT) {
        p.pendingScript = p.openElements.current;
      }
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
    }
    function eofInText(p, token2) {
      p._err(ERR.eofInElementThatCanContainOnlyText);
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token2);
    }
    function characterInTable(p, token2) {
      const curTn = p.openElements.currentTagName;
      if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
        p.pendingCharacterTokens = [];
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = IN_TABLE_TEXT_MODE;
        p._processToken(token2);
      } else {
        tokenInTable(p, token2);
      }
    }
    function captionStartTagInTable(p, token2) {
      p.openElements.clearBackToTableContext();
      p.activeFormattingElements.insertMarker();
      p._insertElement(token2, NS.HTML);
      p.insertionMode = IN_CAPTION_MODE;
    }
    function colgroupStartTagInTable(p, token2) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token2, NS.HTML);
      p.insertionMode = IN_COLUMN_GROUP_MODE;
    }
    function colStartTagInTable(p, token2) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement($.COLGROUP);
      p.insertionMode = IN_COLUMN_GROUP_MODE;
      p._processToken(token2);
    }
    function tbodyStartTagInTable(p, token2) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token2, NS.HTML);
      p.insertionMode = IN_TABLE_BODY_MODE;
    }
    function tdStartTagInTable(p, token2) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement($.TBODY);
      p.insertionMode = IN_TABLE_BODY_MODE;
      p._processToken(token2);
    }
    function tableStartTagInTable(p, token2) {
      if (p.openElements.hasInTableScope($.TABLE)) {
        p.openElements.popUntilTagNamePopped($.TABLE);
        p._resetInsertionMode();
        p._processToken(token2);
      }
    }
    function inputStartTagInTable(p, token2) {
      const inputType = Tokenizer.getTokenAttr(token2, ATTRS.TYPE);
      if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) {
        p._appendElement(token2, NS.HTML);
      } else {
        tokenInTable(p, token2);
      }
      token2.ackSelfClosing = true;
    }
    function formStartTagInTable(p, token2) {
      if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token2, NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
      }
    }
    function startTagInTable(p, token2) {
      const tn = token2.tagName;
      switch (tn.length) {
        case 2:
          if (tn === $.TD || tn === $.TH || tn === $.TR) {
            tdStartTagInTable(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        case 3:
          if (tn === $.COL) {
            colStartTagInTable(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        case 4:
          if (tn === $.FORM) {
            formStartTagInTable(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        case 5:
          if (tn === $.TABLE) {
            tableStartTagInTable(p, token2);
          } else if (tn === $.STYLE) {
            startTagInHead(p, token2);
          } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
            tbodyStartTagInTable(p, token2);
          } else if (tn === $.INPUT) {
            inputStartTagInTable(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        case 6:
          if (tn === $.SCRIPT) {
            startTagInHead(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        case 7:
          if (tn === $.CAPTION) {
            captionStartTagInTable(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        case 8:
          if (tn === $.COLGROUP) {
            colgroupStartTagInTable(p, token2);
          } else if (tn === $.TEMPLATE) {
            startTagInHead(p, token2);
          } else {
            tokenInTable(p, token2);
          }
          break;
        default:
          tokenInTable(p, token2);
      }
    }
    function endTagInTable(p, token2) {
      const tn = token2.tagName;
      if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TABLE)) {
          p.openElements.popUntilTagNamePopped($.TABLE);
          p._resetInsertionMode();
        }
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token2);
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
        tokenInTable(p, token2);
      }
    }
    function tokenInTable(p, token2) {
      const savedFosterParentingState = p.fosterParentingEnabled;
      p.fosterParentingEnabled = true;
      p._processTokenInBodyMode(token2);
      p.fosterParentingEnabled = savedFosterParentingState;
    }
    function whitespaceCharacterInTableText(p, token2) {
      p.pendingCharacterTokens.push(token2);
    }
    function characterInTableText(p, token2) {
      p.pendingCharacterTokens.push(token2);
      p.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(p, token2) {
      let i = 0;
      if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
          tokenInTable(p, p.pendingCharacterTokens[i]);
        }
      } else {
        for (; i < p.pendingCharacterTokens.length; i++) {
          p._insertCharacters(p.pendingCharacterTokens[i]);
        }
      }
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token2);
    }
    function startTagInCaption(p, token2) {
      const tn = token2.tagName;
      if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped($.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token2);
        }
      } else {
        startTagInBody(p, token2);
      }
    }
    function endTagInCaption(p, token2) {
      const tn = token2.tagName;
      if (tn === $.CAPTION || tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped($.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = IN_TABLE_MODE;
          if (tn === $.TABLE) {
            p._processToken(token2);
          }
        }
      } else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
        endTagInBody(p, token2);
      }
    }
    function startTagInColumnGroup(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.COL) {
        p._appendElement(token2, NS.HTML);
        token2.ackSelfClosing = true;
      } else if (tn === $.TEMPLATE) {
        startTagInHead(p, token2);
      } else {
        tokenInColumnGroup(p, token2);
      }
    }
    function endTagInColumnGroup(p, token2) {
      const tn = token2.tagName;
      if (tn === $.COLGROUP) {
        if (p.openElements.currentTagName === $.COLGROUP) {
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
        }
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token2);
      } else if (tn !== $.COL) {
        tokenInColumnGroup(p, token2);
      }
    }
    function tokenInColumnGroup(p, token2) {
      if (p.openElements.currentTagName === $.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;
        p._processToken(token2);
      }
    }
    function startTagInTableBody(p, token2) {
      const tn = token2.tagName;
      if (tn === $.TR) {
        p.openElements.clearBackToTableBodyContext();
        p._insertElement(token2, NS.HTML);
        p.insertionMode = IN_ROW_MODE;
      } else if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableBodyContext();
        p._insertFakeElement($.TR);
        p.insertionMode = IN_ROW_MODE;
        p._processToken(token2);
      } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasTableBodyContextInTableScope()) {
          p.openElements.clearBackToTableBodyContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token2);
        }
      } else {
        startTagInTable(p, token2);
      }
    }
    function endTagInTableBody(p, token2) {
      const tn = token2.tagName;
      if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.clearBackToTableBodyContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
        }
      } else if (tn === $.TABLE) {
        if (p.openElements.hasTableBodyContextInTableScope()) {
          p.openElements.clearBackToTableBodyContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token2);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR) {
        endTagInTable(p, token2);
      }
    }
    function startTagInRow(p, token2) {
      const tn = token2.tagName;
      if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableRowContext();
        p._insertElement(token2, NS.HTML);
        p.insertionMode = IN_CELL_MODE;
        p.activeFormattingElements.insertMarker();
      } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
          p._processToken(token2);
        }
      } else {
        startTagInTable(p, token2);
      }
    }
    function endTagInRow(p, token2) {
      const tn = token2.tagName;
      if (tn === $.TR) {
        if (p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
        }
      } else if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
          p._processToken(token2);
        }
      } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($.TR)) {
          p.openElements.clearBackToTableRowContext();
          p.openElements.pop();
          p.insertionMode = IN_TABLE_BODY_MODE;
          p._processToken(token2);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH) {
        endTagInTable(p, token2);
      }
    }
    function startTagInCell(p, token2) {
      const tn = token2.tagName;
      if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
          p._closeTableCell();
          p._processToken(token2);
        }
      } else {
        startTagInBody(p, token2);
      }
    }
    function endTagInCell(p, token2) {
      const tn = token2.tagName;
      if (tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = IN_ROW_MODE;
        }
      } else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope(tn)) {
          p._closeTableCell();
          p._processToken(token2);
        }
      } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML) {
        endTagInBody(p, token2);
      }
    }
    function startTagInSelect(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
        p._insertElement(token2, NS.HTML);
      } else if (tn === $.OPTGROUP) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
        if (p.openElements.currentTagName === $.OPTGROUP) {
          p.openElements.pop();
        }
        p._insertElement(token2, NS.HTML);
      } else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
        if (p.openElements.hasInSelectScope($.SELECT)) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
          if (tn !== $.SELECT) {
            p._processToken(token2);
          }
        }
      } else if (tn === $.SCRIPT || tn === $.TEMPLATE) {
        startTagInHead(p, token2);
      }
    }
    function endTagInSelect(p, token2) {
      const tn = token2.tagName;
      if (tn === $.OPTGROUP) {
        const prevOpenElement = p.openElements.items[p.openElements.stackTop - 1];
        const prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);
        if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP) {
          p.openElements.pop();
        }
        if (p.openElements.currentTagName === $.OPTGROUP) {
          p.openElements.pop();
        }
      } else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
      } else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
      } else if (tn === $.TEMPLATE) {
        endTagInHead(p, token2);
      }
    }
    function startTagInSelectInTable(p, token2) {
      const tn = token2.tagName;
      if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
        p._processToken(token2);
      } else {
        startTagInSelect(p, token2);
      }
    }
    function endTagInSelectInTable(p, token2) {
      const tn = token2.tagName;
      if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
          p._processToken(token2);
        }
      } else {
        endTagInSelect(p, token2);
      }
    }
    function startTagInTemplate(p, token2) {
      const tn = token2.tagName;
      if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
        startTagInHead(p, token2);
      } else {
        const newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;
        p._popTmplInsertionMode();
        p._pushTmplInsertionMode(newInsertionMode);
        p.insertionMode = newInsertionMode;
        p._processToken(token2);
      }
    }
    function endTagInTemplate(p, token2) {
      if (token2.tagName === $.TEMPLATE) {
        endTagInHead(p, token2);
      }
    }
    function eofInTemplate(p, token2) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped($.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p._popTmplInsertionMode();
        p._resetInsertionMode();
        p._processToken(token2);
      } else {
        p.stopped = true;
      }
    }
    function startTagAfterBody(p, token2) {
      if (token2.tagName === $.HTML) {
        startTagInBody(p, token2);
      } else {
        tokenAfterBody(p, token2);
      }
    }
    function endTagAfterBody(p, token2) {
      if (token2.tagName === $.HTML) {
        if (!p.fragmentContext) {
          p.insertionMode = AFTER_AFTER_BODY_MODE;
        }
      } else {
        tokenAfterBody(p, token2);
      }
    }
    function tokenAfterBody(p, token2) {
      p.insertionMode = IN_BODY_MODE;
      p._processToken(token2);
    }
    function startTagInFrameset(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.FRAMESET) {
        p._insertElement(token2, NS.HTML);
      } else if (tn === $.FRAME) {
        p._appendElement(token2, NS.HTML);
        token2.ackSelfClosing = true;
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p, token2);
      }
    }
    function endTagInFrameset(p, token2) {
      if (token2.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET) {
          p.insertionMode = AFTER_FRAMESET_MODE;
        }
      }
    }
    function startTagAfterFrameset(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p, token2);
      }
    }
    function endTagAfterFrameset(p, token2) {
      if (token2.tagName === $.HTML) {
        p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
      }
    }
    function startTagAfterAfterBody(p, token2) {
      if (token2.tagName === $.HTML) {
        startTagInBody(p, token2);
      } else {
        tokenAfterAfterBody(p, token2);
      }
    }
    function tokenAfterAfterBody(p, token2) {
      p.insertionMode = IN_BODY_MODE;
      p._processToken(token2);
    }
    function startTagAfterAfterFrameset(p, token2) {
      const tn = token2.tagName;
      if (tn === $.HTML) {
        startTagInBody(p, token2);
      } else if (tn === $.NOFRAMES) {
        startTagInHead(p, token2);
      }
    }
    function nullCharacterInForeignContent(p, token2) {
      token2.chars = unicode.REPLACEMENT_CHARACTER;
      p._insertCharacters(token2);
    }
    function characterInForeignContent(p, token2) {
      p._insertCharacters(token2);
      p.framesetOk = false;
    }
    function startTagInForeignContent(p, token2) {
      if (foreignContent.causesExit(token2) && !p.fragmentContext) {
        while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.current)) {
          p.openElements.pop();
        }
        p._processToken(token2);
      } else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === NS.MATHML) {
          foreignContent.adjustTokenMathMLAttrs(token2);
        } else if (currentNs === NS.SVG) {
          foreignContent.adjustTokenSVGTagName(token2);
          foreignContent.adjustTokenSVGAttrs(token2);
        }
        foreignContent.adjustTokenXMLAttrs(token2);
        if (token2.selfClosing) {
          p._appendElement(token2, currentNs);
        } else {
          p._insertElement(token2, currentNs);
        }
        token2.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(p, token2) {
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
          p._processToken(token2);
          break;
        }
        if (p.treeAdapter.getTagName(element).toLowerCase() === token2.tagName) {
          p.openElements.popUntilElementPopped(element);
          break;
        }
      }
    }
  }
});

// node_modules/rehype-parse/errors.json
var require_errors = __commonJS({
  "node_modules/rehype-parse/errors.json"(exports, module) {
    module.exports = {
      abandonedHeadElementChild: {
        reason: "Unexpected metadata element after head",
        description: "Unexpected element after head. Expected the element before `</head>`",
        url: false
      },
      abruptClosingOfEmptyComment: {
        reason: "Unexpected abruptly closed empty comment",
        description: "Unexpected `>` or `->`. Expected `-->` to close comments"
      },
      abruptDoctypePublicIdentifier: {
        reason: "Unexpected abruptly closed public identifier",
        description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
      },
      abruptDoctypeSystemIdentifier: {
        reason: "Unexpected abruptly closed system identifier",
        description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
      },
      absenceOfDigitsInNumericCharacterReference: {
        reason: "Unexpected non-digit at start of numeric character reference",
        description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
      },
      cdataInHtmlContent: {
        reason: "Unexpected CDATA section in HTML",
        description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
      },
      characterReferenceOutsideUnicodeRange: {
        reason: "Unexpected too big numeric character reference",
        description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
      },
      closingOfElementWithOpenChildElements: {
        reason: "Unexpected closing tag with open child elements",
        description: "Unexpectedly closing tag. Expected other tags to be closed first",
        url: false
      },
      controlCharacterInInputStream: {
        reason: "Unexpected control character",
        description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
      },
      controlCharacterReference: {
        reason: "Unexpected control character reference",
        description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
      },
      disallowedContentInNoscriptInHead: {
        reason: "Disallowed content inside `<noscript>` in `<head>`",
        description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
        url: false
      },
      duplicateAttribute: {
        reason: "Unexpected duplicate attribute",
        description: "Unexpectedly double attribute. Expected attributes to occur only once"
      },
      endTagWithAttributes: {
        reason: "Unexpected attribute on closing tag",
        description: "Unexpected attribute. Expected `>` instead"
      },
      endTagWithTrailingSolidus: {
        reason: "Unexpected slash at end of closing tag",
        description: "Unexpected `%c-1`. Expected `>` instead"
      },
      endTagWithoutMatchingOpenElement: {
        reason: "Unexpected unopened end tag",
        description: "Unexpected end tag. Expected no end tag or another end tag",
        url: false
      },
      eofBeforeTagName: {
        reason: "Unexpected end of file",
        description: "Unexpected end of file. Expected tag name instead"
      },
      eofInCdata: {
        reason: "Unexpected end of file in CDATA",
        description: "Unexpected end of file. Expected `]]>` to close the CDATA"
      },
      eofInComment: {
        reason: "Unexpected end of file in comment",
        description: "Unexpected end of file. Expected `-->` to close the comment"
      },
      eofInDoctype: {
        reason: "Unexpected end of file in doctype",
        description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
      },
      eofInElementThatCanContainOnlyText: {
        reason: "Unexpected end of file in element that can only contain text",
        description: "Unexpected end of file. Expected text or a closing tag",
        url: false
      },
      eofInScriptHtmlCommentLikeText: {
        reason: "Unexpected end of file in comment inside script",
        description: "Unexpected end of file. Expected `-->` to close the comment"
      },
      eofInTag: {
        reason: "Unexpected end of file in tag",
        description: "Unexpected end of file. Expected `>` to close the tag"
      },
      incorrectlyClosedComment: {
        reason: "Incorrectly closed comment",
        description: "Unexpected `%c-1`. Expected `-->` to close the comment"
      },
      incorrectlyOpenedComment: {
        reason: "Incorrectly opened comment",
        description: "Unexpected `%c`. Expected `<!--` to open the comment"
      },
      invalidCharacterSequenceAfterDoctypeName: {
        reason: "Invalid sequence after doctype name",
        description: "Unexpected sequence at `%c`. Expected `public` or `system`"
      },
      invalidFirstCharacterOfTagName: {
        reason: "Invalid first character in tag name",
        description: "Unexpected `%c`. Expected an ASCII letter instead"
      },
      misplacedDoctype: {
        reason: "Misplaced doctype",
        description: "Unexpected doctype. Expected doctype before head",
        url: false
      },
      misplacedStartTagForHeadElement: {
        reason: "Misplaced `<head>` start tag",
        description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
        url: false
      },
      missingAttributeValue: {
        reason: "Missing attribute value",
        description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
      },
      missingDoctype: {
        reason: "Missing doctype before other content",
        description: "Expected a `<!doctype html>` before anything else",
        url: false
      },
      missingDoctypeName: {
        reason: "Missing doctype name",
        description: "Unexpected doctype end at `%c`. Expected `html` instead"
      },
      missingDoctypePublicIdentifier: {
        reason: "Missing public identifier in doctype",
        description: "Unexpected `%c`. Expected identifier for `public` instead"
      },
      missingDoctypeSystemIdentifier: {
        reason: "Missing system identifier in doctype",
        description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
      },
      missingEndTagName: {
        reason: "Missing name in end tag",
        description: "Unexpected `%c`. Expected an ASCII letter instead"
      },
      missingQuoteBeforeDoctypePublicIdentifier: {
        reason: "Missing quote before public identifier in doctype",
        description: "Unexpected `%c`. Expected `\"` or `'` instead"
      },
      missingQuoteBeforeDoctypeSystemIdentifier: {
        reason: "Missing quote before system identifier in doctype",
        description: "Unexpected `%c`. Expected `\"` or `'` instead"
      },
      missingSemicolonAfterCharacterReference: {
        reason: "Missing semicolon after character reference",
        description: "Unexpected `%c`. Expected `;` instead"
      },
      missingWhitespaceAfterDoctypePublicKeyword: {
        reason: "Missing whitespace after public identifier in doctype",
        description: "Unexpected `%c`. Expected ASCII whitespace instead"
      },
      missingWhitespaceAfterDoctypeSystemKeyword: {
        reason: "Missing whitespace after system identifier in doctype",
        description: "Unexpected `%c`. Expected ASCII whitespace instead"
      },
      missingWhitespaceBeforeDoctypeName: {
        reason: "Missing whitespace before doctype name",
        description: "Unexpected `%c`. Expected ASCII whitespace instead"
      },
      missingWhitespaceBetweenAttributes: {
        reason: "Missing whitespace between attributes",
        description: "Unexpected `%c`. Expected ASCII whitespace instead"
      },
      missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
        reason: "Missing whitespace between public and system identifiers in doctype",
        description: "Unexpected `%c`. Expected ASCII whitespace instead"
      },
      nestedComment: {
        reason: "Unexpected nested comment",
        description: "Unexpected `<!--`. Expected `-->`"
      },
      nestedNoscriptInHead: {
        reason: "Unexpected nested `<noscript>` in `<head>`",
        description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
        url: false
      },
      nonConformingDoctype: {
        reason: "Unexpected non-conforming doctype declaration",
        description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
        url: false
      },
      nonVoidHtmlElementStartTagWithTrailingSolidus: {
        reason: "Unexpected trailing slash on start tag of non-void element",
        description: "Unexpected `/`. Expected `>` instead"
      },
      noncharacterCharacterReference: {
        reason: "Unexpected noncharacter code point referenced by character reference",
        description: "Unexpected code point. Do not use noncharacters in HTML"
      },
      noncharacterInInputStream: {
        reason: "Unexpected noncharacter character",
        description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
      },
      nullCharacterReference: {
        reason: "Unexpected NULL character referenced by character reference",
        description: "Unexpected code point. Do not use NULL characters in HTML"
      },
      openElementsLeftAfterEof: {
        reason: "Unexpected end of file",
        description: "Unexpected end of file. Expected closing tag instead",
        url: false
      },
      surrogateCharacterReference: {
        reason: "Unexpected surrogate character referenced by character reference",
        description: "Unexpected code point. Do not use lone surrogate characters in HTML"
      },
      surrogateInInputStream: {
        reason: "Unexpected surrogate character",
        description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
      },
      unexpectedCharacterAfterDoctypeSystemIdentifier: {
        reason: "Invalid character after system identifier in doctype",
        description: "Unexpected character at `%c`. Expected `>`"
      },
      unexpectedCharacterInAttributeName: {
        reason: "Unexpected character in attribute name",
        description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
      },
      unexpectedCharacterInUnquotedAttributeValue: {
        reason: "Unexpected character in unquoted attribute value",
        description: "Unexpected `%c`. Quote the attribute value to include it"
      },
      unexpectedEqualsSignBeforeAttributeName: {
        reason: "Unexpected equals sign before attribute name ",
        description: "Unexpected `%c`. Add an attribute name before it"
      },
      unexpectedNullCharacter: {
        reason: "Unexpected NULL character",
        description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
      },
      unexpectedQuestionMarkInsteadOfTagName: {
        reason: "Unexpected question mark instead of tag name",
        description: "Unexpected `%c`. Expected an ASCII letter instead"
      },
      unexpectedSolidusInTag: {
        reason: "Unexpected slash in tag",
        description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
      },
      unknownNamedCharacterReference: {
        reason: "Unexpected unknown named character reference",
        description: "Unexpected character reference. Expected known named character references"
      }
    };
  }
});

// node_modules/rehype-parse/index.js
var require_rehype_parse = __commonJS({
  "node_modules/rehype-parse/index.js"(exports, module) {
    "use strict";
    var fromParse5 = require_hast_util_from_parse5();
    var Parser5 = require_parser();
    var errors = require_errors();
    var base = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-";
    var fatalities = {2: true, 1: false, 0: null};
    module.exports = parse3;
    function parse3(options) {
      var settings = Object.assign({}, options, this.data("settings"));
      var position = settings.position;
      position = typeof position === "boolean" ? position : true;
      this.Parser = parser;
      function parser(doc, file) {
        var fn = settings.fragment ? "parseFragment" : "parse";
        var onParseError = settings.emitParseErrors ? onerror : null;
        var parse5 = new Parser5({
          sourceCodeLocationInfo: position,
          onParseError,
          scriptingEnabled: false
        });
        return fromParse5(parse5[fn](doc), {
          space: settings.space,
          file,
          verbose: settings.verbose
        });
        function onerror(err) {
          var code = err.code;
          var name = camelcase2(code);
          var setting = settings[name];
          var config = setting === void 0 || setting === null ? true : setting;
          var level = typeof config === "number" ? config : config ? 1 : 0;
          var start = {
            line: err.startLine,
            column: err.startCol,
            offset: err.startOffset
          };
          var end = {line: err.endLine, column: err.endCol, offset: err.endOffset};
          var info;
          var message;
          if (level) {
            info = errors[name] || {
              reason: "",
              description: ""
            };
            message = file.message(format(info.reason), {start, end});
            message.source = "parse-error";
            message.ruleId = code;
            message.fatal = fatalities[level];
            message.note = format(info.description);
            message.url = info.url === false ? null : base + code;
          }
          function format(value) {
            return value.replace(/%c(?:-(\d+))?/g, char).replace(/%x/g, encodedChar);
          }
          function char($0, $1) {
            var offset = $1 ? -parseInt($1, 10) : 0;
            var char2 = doc.charAt(err.startOffset + offset);
            return char2 === "`" ? "` ` `" : char2;
          }
          function encodedChar() {
            var char2 = doc.charCodeAt(err.startOffset).toString(16).toUpperCase();
            return "0x" + char2;
          }
        }
      }
    }
    function camelcase2(value) {
      return value.replace(/-[a-z]/g, replacer);
    }
    function replacer($0) {
      return $0.charAt(1).toUpperCase();
    }
  }
});

// node_modules/mdast-util-to-string/index.js
var require_mdast_util_to_string = __commonJS({
  "node_modules/mdast-util-to-string/index.js"(exports, module) {
    "use strict";
    module.exports = toString;
    function toString(node) {
      return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
    }
    function all(values) {
      var result = [];
      var index = -1;
      while (++index < values.length) {
        result[index] = toString(values[index]);
      }
      return result.join("");
    }
  }
});

// node_modules/micromark/dist/constant/assign.js
var require_assign = __commonJS({
  "node_modules/micromark/dist/constant/assign.js"(exports, module) {
    "use strict";
    var assign = Object.assign;
    module.exports = assign;
  }
});

// node_modules/micromark/dist/constant/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/micromark/dist/constant/has-own-property.js"(exports, module) {
    "use strict";
    var own3 = {}.hasOwnProperty;
    module.exports = own3;
  }
});

// node_modules/micromark/dist/util/normalize-identifier.js
var require_normalize_identifier = __commonJS({
  "node_modules/micromark/dist/util/normalize-identifier.js"(exports, module) {
    "use strict";
    function normalizeIdentifier(value) {
      return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
    }
    module.exports = normalizeIdentifier;
  }
});

// node_modules/micromark/dist/constant/from-char-code.js
var require_from_char_code = __commonJS({
  "node_modules/micromark/dist/constant/from-char-code.js"(exports, module) {
    "use strict";
    var fromCharCode = String.fromCharCode;
    module.exports = fromCharCode;
  }
});

// node_modules/micromark/dist/util/safe-from-int.js
var require_safe_from_int = __commonJS({
  "node_modules/micromark/dist/util/safe-from-int.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function safeFromInt(value, base) {
      var code = parseInt(value, base);
      if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
        return "\uFFFD";
      }
      return fromCharCode(code);
    }
    module.exports = safeFromInt;
  }
});

// node_modules/micromark/dist/character/markdown-line-ending.js
var require_markdown_line_ending = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending.js"(exports, module) {
    "use strict";
    function markdownLineEnding(code) {
      return code < -2;
    }
    module.exports = markdownLineEnding;
  }
});

// node_modules/micromark/dist/character/markdown-space.js
var require_markdown_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-space.js"(exports, module) {
    "use strict";
    function markdownSpace(code) {
      return code === -2 || code === -1 || code === 32;
    }
    module.exports = markdownSpace;
  }
});

// node_modules/micromark/dist/tokenize/factory-space.js
var require_factory_space = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-space.js"(exports, module) {
    "use strict";
    var markdownSpace = require_markdown_space();
    function spaceFactory(effects, ok2, type, max) {
      var limit = max ? max - 1 : Infinity;
      var size = 0;
      return start;
      function start(code) {
        if (markdownSpace(code)) {
          effects.enter(type);
          return prefix(code);
        }
        return ok2(code);
      }
      function prefix(code) {
        if (markdownSpace(code) && size++ < limit) {
          effects.consume(code);
          return prefix;
        }
        effects.exit(type);
        return ok2(code);
      }
    }
    module.exports = spaceFactory;
  }
});

// node_modules/micromark/dist/initialize/content.js
var require_content = __commonJS({
  "node_modules/micromark/dist/initialize/content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var tokenize = initializeContent;
    function initializeContent(effects) {
      var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
      var previous;
      return contentStart;
      function afterContentStartConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, contentStart, "linePrefix");
      }
      function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
      }
      function lineStart(code) {
        var token2 = effects.enter("chunkText", {
          contentType: "text",
          previous
        });
        if (previous) {
          previous.next = token2;
        }
        previous = token2;
        return data(code);
      }
      function data(code) {
        if (code === null) {
          effects.exit("chunkText");
          effects.exit("paragraph");
          effects.consume(code);
          return;
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          effects.exit("chunkText");
          return lineStart;
        }
        effects.consume(code);
        return data;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/tokenize/partial-blank-line.js
var require_partial_blank_line = __commonJS({
  "node_modules/micromark/dist/tokenize/partial-blank-line.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = {
      tokenize: tokenizePartialBlankLine,
      partial: true
    };
    function tokenizePartialBlankLine(effects, ok2, nok) {
      return factorySpace(effects, afterWhitespace, "linePrefix");
      function afterWhitespace(code) {
        return code === null || markdownLineEnding(code) ? ok2(code) : nok(code);
      }
    }
    module.exports = partialBlankLine;
  }
});

// node_modules/micromark/dist/initialize/document.js
var require_document = __commonJS({
  "node_modules/micromark/dist/initialize/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeDocument;
    var containerConstruct = {
      tokenize: tokenizeContainer
    };
    var lazyFlowConstruct = {
      tokenize: tokenizeLazyFlow
    };
    function initializeDocument(effects) {
      var self = this;
      var stack = [];
      var continued = 0;
      var inspectConstruct = {
        tokenize: tokenizeInspect,
        partial: true
      };
      var inspectResult;
      var childFlow;
      var childToken;
      return start;
      function start(code) {
        if (continued < stack.length) {
          self.containerState = stack[continued][1];
          return effects.attempt(stack[continued][0].continuation, documentContinue, documentContinued)(code);
        }
        return documentContinued(code);
      }
      function documentContinue(code) {
        continued++;
        return start(code);
      }
      function documentContinued(code) {
        if (inspectResult && inspectResult.flowContinue) {
          return flowStart(code);
        }
        self.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
        self.containerState = {};
        return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
      }
      function containerContinue(code) {
        stack.push([self.currentConstruct, self.containerState]);
        self.containerState = void 0;
        return documentContinued(code);
      }
      function flowStart(code) {
        if (code === null) {
          exitContainers(0, true);
          effects.consume(code);
          return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
          contentType: "flow",
          previous: childToken,
          _tokenizer: childFlow
        });
        return flowContinue(code);
      }
      function flowContinue(code) {
        if (code === null) {
          continueFlow(effects.exit("chunkFlow"));
          return flowStart(code);
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          continueFlow(effects.exit("chunkFlow"));
          return effects.check(inspectConstruct, documentAfterPeek);
        }
        effects.consume(code);
        return flowContinue;
      }
      function documentAfterPeek(code) {
        exitContainers(inspectResult.continued, inspectResult && inspectResult.flowEnd);
        continued = 0;
        return start(code);
      }
      function continueFlow(token2) {
        if (childToken)
          childToken.next = token2;
        childToken = token2;
        childFlow.lazy = inspectResult && inspectResult.lazy;
        childFlow.defineSkip(token2.start);
        childFlow.write(self.sliceStream(token2));
      }
      function exitContainers(size, end) {
        var index = stack.length;
        if (childFlow && end) {
          childFlow.write([null]);
          childToken = childFlow = void 0;
        }
        while (index-- > size) {
          self.containerState = stack[index][1];
          stack[index][0].exit.call(self, effects);
        }
        stack.length = size;
      }
      function tokenizeInspect(effects2, ok2) {
        var subcontinued = 0;
        inspectResult = {};
        return inspectStart;
        function inspectStart(code) {
          if (subcontinued < stack.length) {
            self.containerState = stack[subcontinued][1];
            return effects2.attempt(stack[subcontinued][0].continuation, inspectContinue, inspectLess)(code);
          }
          if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
            inspectResult.flowContinue = true;
            return inspectDone(code);
          }
          self.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
          self.containerState = {};
          return effects2.attempt(containerConstruct, inspectFlowEnd, inspectDone)(code);
        }
        function inspectContinue(code) {
          subcontinued++;
          return self.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
        }
        function inspectLess(code) {
          if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
            self.containerState = {};
            return effects2.attempt(containerConstruct, inspectFlowEnd, effects2.attempt(lazyFlowConstruct, inspectFlowEnd, effects2.check(partialBlankLine, inspectFlowEnd, inspectLazy)))(code);
          }
          return inspectFlowEnd(code);
        }
        function inspectLazy(code) {
          subcontinued = stack.length;
          inspectResult.lazy = true;
          inspectResult.flowContinue = true;
          return inspectDone(code);
        }
        function inspectFlowEnd(code) {
          inspectResult.flowEnd = true;
          return inspectDone(code);
        }
        function inspectDone(code) {
          inspectResult.continued = subcontinued;
          self.interrupt = self.containerState = void 0;
          return ok2(code);
        }
      }
    }
    function tokenizeContainer(effects, ok2, nok) {
      return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    }
    function tokenizeLazyFlow(effects, ok2, nok) {
      return factorySpace(effects, effects.lazy(this.parser.constructs.flow, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/util/size-chunks.js
var require_size_chunks = __commonJS({
  "node_modules/micromark/dist/util/size-chunks.js"(exports, module) {
    "use strict";
    function sizeChunks(chunks) {
      var index = -1;
      var size = 0;
      while (++index < chunks.length) {
        size += typeof chunks[index] === "string" ? chunks[index].length : 1;
      }
      return size;
    }
    module.exports = sizeChunks;
  }
});

// node_modules/micromark/dist/util/prefix-size.js
var require_prefix_size = __commonJS({
  "node_modules/micromark/dist/util/prefix-size.js"(exports, module) {
    "use strict";
    var sizeChunks = require_size_chunks();
    function prefixSize(events, type) {
      var tail = events[events.length - 1];
      if (!tail || tail[1].type !== type)
        return 0;
      return sizeChunks(tail[2].sliceStream(tail[1]));
    }
    module.exports = prefixSize;
  }
});

// node_modules/micromark/dist/constant/splice.js
var require_splice = __commonJS({
  "node_modules/micromark/dist/constant/splice.js"(exports, module) {
    "use strict";
    var splice = [].splice;
    module.exports = splice;
  }
});

// node_modules/micromark/dist/util/chunked-splice.js
var require_chunked_splice = __commonJS({
  "node_modules/micromark/dist/util/chunked-splice.js"(exports, module) {
    "use strict";
    var splice = require_splice();
    function chunkedSplice(list, start, remove, items) {
      var end = list.length;
      var chunkStart = 0;
      var parameters;
      if (start < 0) {
        start = -start > end ? 0 : end + start;
      } else {
        start = start > end ? end : start;
      }
      remove = remove > 0 ? remove : 0;
      if (items.length < 1e4) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        splice.apply(list, parameters);
      } else {
        if (remove)
          splice.apply(list, [start, remove]);
        while (chunkStart < items.length) {
          parameters = items.slice(chunkStart, chunkStart + 1e4);
          parameters.unshift(start, 0);
          splice.apply(list, parameters);
          chunkStart += 1e4;
          start += 1e4;
        }
      }
    }
    module.exports = chunkedSplice;
  }
});

// node_modules/micromark/dist/util/shallow.js
var require_shallow = __commonJS({
  "node_modules/micromark/dist/util/shallow.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    function shallow(object) {
      return assign({}, object);
    }
    module.exports = shallow;
  }
});

// node_modules/micromark/dist/util/subtokenize.js
var require_subtokenize = __commonJS({
  "node_modules/micromark/dist/util/subtokenize.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    var chunkedSplice = require_chunked_splice();
    var shallow = require_shallow();
    function subtokenize(events) {
      var jumps = {};
      var index = -1;
      var event;
      var lineIndex;
      var otherIndex;
      var otherEvent;
      var parameters;
      var subevents;
      var more;
      while (++index < events.length) {
        while (index in jumps) {
          index = jumps[index];
        }
        event = events[index];
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
          subevents = event[1]._tokenizer.events;
          otherIndex = 0;
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
            otherIndex += 2;
          }
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
            while (++otherIndex < subevents.length) {
              if (subevents[otherIndex][1].type === "content") {
                break;
              }
              if (subevents[otherIndex][1].type === "chunkText") {
                subevents[otherIndex][1].isInFirstContentOfListItem = true;
                otherIndex++;
              }
            }
          }
        }
        if (event[0] === "enter") {
          if (event[1].contentType) {
            assign(jumps, subcontent(events, index));
            index = jumps[index];
            more = true;
          }
        } else if (event[1]._container || event[1]._movePreviousLineEndings) {
          otherIndex = index;
          lineIndex = void 0;
          while (otherIndex--) {
            otherEvent = events[otherIndex];
            if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
              if (otherEvent[0] === "enter") {
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                }
                otherEvent[1].type = "lineEnding";
                lineIndex = otherIndex;
              }
            } else {
              break;
            }
          }
          if (lineIndex) {
            event[1].end = shallow(events[lineIndex][1].start);
            parameters = events.slice(lineIndex, index);
            parameters.unshift(event);
            chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters);
          }
        }
      }
      return !more;
    }
    function subcontent(events, eventIndex) {
      var token2 = events[eventIndex][1];
      var context = events[eventIndex][2];
      var startPosition = eventIndex - 1;
      var startPositions = [];
      var tokenizer = token2._tokenizer || context.parser[token2.contentType](token2.start);
      var childEvents = tokenizer.events;
      var jumps = [];
      var gaps = {};
      var stream;
      var previous;
      var index;
      var entered;
      var end;
      var adjust;
      while (token2) {
        while (events[++startPosition][1] !== token2) {
        }
        startPositions.push(startPosition);
        if (!token2._tokenizer) {
          stream = context.sliceStream(token2);
          if (!token2.next) {
            stream.push(null);
          }
          if (previous) {
            tokenizer.defineSkip(token2.start);
          }
          if (token2.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = true;
          }
          tokenizer.write(stream);
          if (token2.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = void 0;
          }
        }
        previous = token2;
        token2 = token2.next;
      }
      token2 = previous;
      index = childEvents.length;
      while (index--) {
        if (childEvents[index][0] === "enter") {
          entered = true;
        } else if (entered && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
          add(childEvents.slice(index + 1, end));
          token2._tokenizer = token2.next = void 0;
          token2 = token2.previous;
          end = index + 1;
        }
      }
      tokenizer.events = token2._tokenizer = token2.next = void 0;
      add(childEvents.slice(0, end));
      index = -1;
      adjust = 0;
      while (++index < jumps.length) {
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
      }
      return gaps;
      function add(slice) {
        var start = startPositions.pop();
        jumps.unshift([start, start + slice.length - 1]);
        chunkedSplice(events, start, 2, slice);
      }
    }
    module.exports = subtokenize;
  }
});

// node_modules/micromark/dist/tokenize/content.js
var require_content2 = __commonJS({
  "node_modules/micromark/dist/tokenize/content.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var prefixSize = require_prefix_size();
    var subtokenize = require_subtokenize();
    var factorySpace = require_factory_space();
    var content = {
      tokenize: tokenizeContent,
      resolve: resolveContent,
      interruptible: true,
      lazy: true
    };
    var continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true
    };
    function resolveContent(events) {
      subtokenize(events);
      return events;
    }
    function tokenizeContent(effects, ok2) {
      var previous;
      return start;
      function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
          contentType: "content"
        });
        return data(code);
      }
      function data(code) {
        if (code === null) {
          return contentEnd(code);
        }
        if (markdownLineEnding(code)) {
          return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
        }
        effects.consume(code);
        return data;
      }
      function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok2(code);
      }
      function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous = previous.next = effects.enter("chunkContent", {
          contentType: "content",
          previous
        });
        return data;
      }
    }
    function tokenizeContinuation(effects, ok2, nok) {
      var self = this;
      return startLookahead;
      function startLookahead(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, prefixed, "linePrefix");
      }
      function prefixed(code) {
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        if (self.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize(self.events, "linePrefix") < 4) {
          return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code);
        }
        return ok2(code);
      }
    }
    module.exports = content;
  }
});

// node_modules/micromark/dist/initialize/flow.js
var require_flow = __commonJS({
  "node_modules/micromark/dist/initialize/flow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var content = require_content2();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeFlow;
    function initializeFlow(effects) {
      var self = this;
      var initial = effects.attempt(partialBlankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
      return initial;
      function atBlankEnding(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = void 0;
        return initial;
      }
      function afterConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = void 0;
        return initial;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/initialize/text.js
var require_text = __commonJS({
  "node_modules/micromark/dist/initialize/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var assign = require_assign();
    var shallow = require_shallow();
    var text = initializeFactory("text");
    var string = initializeFactory("string");
    var resolver = {
      resolveAll: createResolver()
    };
    function initializeFactory(field) {
      return {
        tokenize: initializeText,
        resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
      };
      function initializeText(effects) {
        var self = this;
        var constructs = this.parser.constructs[field];
        var text2 = effects.attempt(constructs, start, notText);
        return start;
        function start(code) {
          return atBreak(code) ? text2(code) : notText(code);
        }
        function notText(code) {
          if (code === null) {
            effects.consume(code);
            return;
          }
          effects.enter("data");
          effects.consume(code);
          return data;
        }
        function data(code) {
          if (atBreak(code)) {
            effects.exit("data");
            return text2(code);
          }
          effects.consume(code);
          return data;
        }
        function atBreak(code) {
          var list = constructs[code];
          var index = -1;
          if (code === null) {
            return true;
          }
          if (list) {
            while (++index < list.length) {
              if (!list[index].previous || list[index].previous.call(self, self.previous)) {
                return true;
              }
            }
          }
        }
      }
    }
    function createResolver(extraResolver) {
      return resolveAllText;
      function resolveAllText(events, context) {
        var index = -1;
        var enter;
        while (++index <= events.length) {
          if (enter === void 0) {
            if (events[index] && events[index][1].type === "data") {
              enter = index;
              index++;
            }
          } else if (!events[index] || events[index][1].type !== "data") {
            if (index !== enter + 2) {
              events[enter][1].end = events[index - 1][1].end;
              events.splice(enter + 2, index - enter - 2);
              index = enter + 2;
            }
            enter = void 0;
          }
        }
        return extraResolver ? extraResolver(events, context) : events;
      }
    }
    function resolveAllLineSuffixes(events, context) {
      var eventIndex = -1;
      var chunks;
      var data;
      var chunk;
      var index;
      var bufferIndex;
      var size;
      var tabs;
      var token2;
      while (++eventIndex <= events.length) {
        if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
          data = events[eventIndex - 1][1];
          chunks = context.sliceStream(data);
          index = chunks.length;
          bufferIndex = -1;
          size = 0;
          tabs = void 0;
          while (index--) {
            chunk = chunks[index];
            if (typeof chunk === "string") {
              bufferIndex = chunk.length;
              while (chunk.charCodeAt(bufferIndex - 1) === 32) {
                size++;
                bufferIndex--;
              }
              if (bufferIndex)
                break;
              bufferIndex = -1;
            } else if (chunk === -2) {
              tabs = true;
              size++;
            } else if (chunk === -1)
              ;
            else {
              index++;
              break;
            }
          }
          if (size) {
            token2 = {
              type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
              start: {
                line: data.end.line,
                column: data.end.column - size,
                offset: data.end.offset - size,
                _index: data.start._index + index,
                _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
              },
              end: shallow(data.end)
            };
            data.end = shallow(token2.start);
            if (data.start.offset === data.end.offset) {
              assign(data, token2);
            } else {
              events.splice(eventIndex, 0, ["enter", token2, context], ["exit", token2, context]);
              eventIndex += 2;
            }
          }
          eventIndex++;
        }
      }
      return events;
    }
    exports.resolver = resolver;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/micromark/dist/util/miniflat.js
var require_miniflat = __commonJS({
  "node_modules/micromark/dist/util/miniflat.js"(exports, module) {
    "use strict";
    function miniflat(value) {
      return value === null || value === void 0 ? [] : "length" in value ? value : [value];
    }
    module.exports = miniflat;
  }
});

// node_modules/micromark/dist/util/combine-extensions.js
var require_combine_extensions = __commonJS({
  "node_modules/micromark/dist/util/combine-extensions.js"(exports, module) {
    "use strict";
    var hasOwnProperty = require_has_own_property();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    function combineExtensions(extensions) {
      var all = {};
      var index = -1;
      while (++index < extensions.length) {
        extension(all, extensions[index]);
      }
      return all;
    }
    function extension(all, extension2) {
      var hook;
      var left;
      var right;
      var code;
      for (hook in extension2) {
        left = hasOwnProperty.call(all, hook) ? all[hook] : all[hook] = {};
        right = extension2[hook];
        for (code in right) {
          left[code] = constructs(miniflat(right[code]), hasOwnProperty.call(left, code) ? left[code] : []);
        }
      }
    }
    function constructs(list, existing) {
      var index = -1;
      var before = [];
      while (++index < list.length) {
        ;
        (list[index].add === "after" ? existing : before).push(list[index]);
      }
      chunkedSplice(existing, 0, 0, before);
      return existing;
    }
    module.exports = combineExtensions;
  }
});

// node_modules/micromark/dist/util/chunked-push.js
var require_chunked_push = __commonJS({
  "node_modules/micromark/dist/util/chunked-push.js"(exports, module) {
    "use strict";
    var chunkedSplice = require_chunked_splice();
    function chunkedPush(list, items) {
      if (list.length) {
        chunkedSplice(list, list.length, 0, items);
        return list;
      }
      return items;
    }
    module.exports = chunkedPush;
  }
});

// node_modules/micromark/dist/util/resolve-all.js
var require_resolve_all = __commonJS({
  "node_modules/micromark/dist/util/resolve-all.js"(exports, module) {
    "use strict";
    function resolveAll(constructs, events, context) {
      var called = [];
      var index = -1;
      var resolve;
      while (++index < constructs.length) {
        resolve = constructs[index].resolveAll;
        if (resolve && called.indexOf(resolve) < 0) {
          events = resolve(events, context);
          called.push(resolve);
        }
      }
      return events;
    }
    module.exports = resolveAll;
  }
});

// node_modules/micromark/dist/util/serialize-chunks.js
var require_serialize_chunks = __commonJS({
  "node_modules/micromark/dist/util/serialize-chunks.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function serializeChunks(chunks) {
      var index = -1;
      var result = [];
      var chunk;
      var value;
      var atTab;
      while (++index < chunks.length) {
        chunk = chunks[index];
        if (typeof chunk === "string") {
          value = chunk;
        } else if (chunk === -5) {
          value = "\r";
        } else if (chunk === -4) {
          value = "\n";
        } else if (chunk === -3) {
          value = "\r\n";
        } else if (chunk === -2) {
          value = "	";
        } else if (chunk === -1) {
          if (atTab)
            continue;
          value = " ";
        } else {
          value = fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
      }
      return result.join("");
    }
    module.exports = serializeChunks;
  }
});

// node_modules/micromark/dist/util/slice-chunks.js
var require_slice_chunks = __commonJS({
  "node_modules/micromark/dist/util/slice-chunks.js"(exports, module) {
    "use strict";
    function sliceChunks(chunks, token2) {
      var startIndex = token2.start._index;
      var startBufferIndex = token2.start._bufferIndex;
      var endIndex = token2.end._index;
      var endBufferIndex = token2.end._bufferIndex;
      var view;
      if (startIndex === endIndex) {
        view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
      } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
          view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
          view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
      }
      return view;
    }
    module.exports = sliceChunks;
  }
});

// node_modules/micromark/dist/util/create-tokenizer.js
var require_create_tokenizer = __commonJS({
  "node_modules/micromark/dist/util/create-tokenizer.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    var resolveAll = require_resolve_all();
    var serializeChunks = require_serialize_chunks();
    var shallow = require_shallow();
    var sliceChunks = require_slice_chunks();
    function createTokenizer(parser, initialize, from) {
      var point = from ? shallow(from) : {
        line: 1,
        column: 1,
        offset: 0
      };
      var columnStart = {};
      var resolveAllConstructs = [];
      var chunks = [];
      var stack = [];
      var effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
          interrupt: true
        }),
        lazy: constructFactory(onsuccessfulcheck, {
          lazy: true
        })
      };
      var context = {
        previous: null,
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip: skip,
        write
      };
      var state = initialize.tokenize.call(context, effects);
      if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
      }
      point._index = 0;
      point._bufferIndex = -1;
      return context;
      function write(slice) {
        chunks = chunkedPush(chunks, slice);
        main();
        if (chunks[chunks.length - 1] !== null) {
          return [];
        }
        addResult(initialize, 0);
        context.events = resolveAll(resolveAllConstructs, context.events, context);
        return context.events;
      }
      function sliceSerialize(token2) {
        return serializeChunks(sliceStream(token2));
      }
      function sliceStream(token2) {
        return sliceChunks(chunks, token2);
      }
      function now() {
        return shallow(point);
      }
      function skip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
      }
      function main() {
        var chunkIndex;
        var chunk;
        while (point._index < chunks.length) {
          chunk = chunks[point._index];
          if (typeof chunk === "string") {
            chunkIndex = point._index;
            if (point._bufferIndex < 0) {
              point._bufferIndex = 0;
            }
            while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
              go(chunk.charCodeAt(point._bufferIndex));
            }
          } else {
            go(chunk);
          }
        }
      }
      function go(code) {
        state = state(code);
      }
      function consume(code) {
        if (markdownLineEnding(code)) {
          point.line++;
          point.column = 1;
          point.offset += code === -3 ? 2 : 1;
          accountForPotentialSkip();
        } else if (code !== -1) {
          point.column++;
          point.offset++;
        }
        if (point._bufferIndex < 0) {
          point._index++;
        } else {
          point._bufferIndex++;
          if (point._bufferIndex === chunks[point._index].length) {
            point._bufferIndex = -1;
            point._index++;
          }
        }
        context.previous = code;
      }
      function enter(type, fields) {
        var token2 = fields || {};
        token2.type = type;
        token2.start = now();
        context.events.push(["enter", token2, context]);
        stack.push(token2);
        return token2;
      }
      function exit(type) {
        var token2 = stack.pop();
        token2.end = now();
        context.events.push(["exit", token2, context]);
        return token2;
      }
      function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
      }
      function onsuccessfulcheck(construct, info) {
        info.restore();
      }
      function constructFactory(onreturn, fields) {
        return hook;
        function hook(constructs, returnState, bogusState) {
          var listOfConstructs;
          var constructIndex;
          var currentConstruct;
          var info;
          return constructs.tokenize || "length" in constructs ? handleListOfConstructs(miniflat(constructs)) : handleMapOfConstructs;
          function handleMapOfConstructs(code) {
            if (code in constructs || null in constructs) {
              return handleListOfConstructs(constructs.null ? miniflat(constructs[code]).concat(miniflat(constructs.null)) : constructs[code])(code);
            }
            return bogusState(code);
          }
          function handleListOfConstructs(list) {
            listOfConstructs = list;
            constructIndex = 0;
            return handleConstruct(list[constructIndex]);
          }
          function handleConstruct(construct) {
            return start;
            function start(code) {
              info = store();
              currentConstruct = construct;
              if (!construct.partial) {
                context.currentConstruct = construct;
              }
              if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
                return nok();
              }
              return construct.tokenize.call(fields ? assign({}, context, fields) : context, effects, ok2, nok)(code);
            }
          }
          function ok2(code) {
            onreturn(currentConstruct, info);
            return returnState;
          }
          function nok(code) {
            info.restore();
            if (++constructIndex < listOfConstructs.length) {
              return handleConstruct(listOfConstructs[constructIndex]);
            }
            return bogusState;
          }
        }
      }
      function addResult(construct, from2) {
        if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
          resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
          chunkedSplice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
        }
        if (construct.resolveTo) {
          context.events = construct.resolveTo(context.events, context);
        }
      }
      function store() {
        var startPoint = now();
        var startPrevious = context.previous;
        var startCurrentConstruct = context.currentConstruct;
        var startEventsIndex = context.events.length;
        var startStack = Array.from(stack);
        return {
          restore,
          from: startEventsIndex
        };
        function restore() {
          point = startPoint;
          context.previous = startPrevious;
          context.currentConstruct = startCurrentConstruct;
          context.events.length = startEventsIndex;
          stack = startStack;
          accountForPotentialSkip();
        }
      }
      function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
          point.column = columnStart[point.line];
          point.offset += columnStart[point.line] - 1;
        }
      }
    }
    module.exports = createTokenizer;
  }
});

// node_modules/micromark/dist/character/markdown-line-ending-or-space.js
var require_markdown_line_ending_or_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending-or-space.js"(exports, module) {
    "use strict";
    function markdownLineEndingOrSpace(code) {
      return code < 0 || code === 32;
    }
    module.exports = markdownLineEndingOrSpace;
  }
});

// node_modules/micromark/dist/constant/unicode-punctuation-regex.js
var require_unicode_punctuation_regex = __commonJS({
  "node_modules/micromark/dist/constant/unicode-punctuation-regex.js"(exports, module) {
    "use strict";
    var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
    module.exports = unicodePunctuation;
  }
});

// node_modules/micromark/dist/util/regex-check.js
var require_regex_check = __commonJS({
  "node_modules/micromark/dist/util/regex-check.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function regexCheck(regex) {
      return check;
      function check(code) {
        return regex.test(fromCharCode(code));
      }
    }
    module.exports = regexCheck;
  }
});

// node_modules/micromark/dist/character/unicode-punctuation.js
var require_unicode_punctuation = __commonJS({
  "node_modules/micromark/dist/character/unicode-punctuation.js"(exports, module) {
    "use strict";
    var unicodePunctuationRegex = require_unicode_punctuation_regex();
    var regexCheck = require_regex_check();
    var unicodePunctuation = regexCheck(unicodePunctuationRegex);
    module.exports = unicodePunctuation;
  }
});

// node_modules/micromark/dist/character/unicode-whitespace.js
var require_unicode_whitespace = __commonJS({
  "node_modules/micromark/dist/character/unicode-whitespace.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var unicodeWhitespace = regexCheck(/\s/);
    module.exports = unicodeWhitespace;
  }
});

// node_modules/micromark/dist/util/classify-character.js
var require_classify_character = __commonJS({
  "node_modules/micromark/dist/util/classify-character.js"(exports, module) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    function classifyCharacter(code) {
      if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
        return 1;
      }
      if (unicodePunctuation(code)) {
        return 2;
      }
    }
    module.exports = classifyCharacter;
  }
});

// node_modules/micromark/dist/util/move-point.js
var require_move_point = __commonJS({
  "node_modules/micromark/dist/util/move-point.js"(exports, module) {
    "use strict";
    function movePoint(point, offset) {
      point.column += offset;
      point.offset += offset;
      point._bufferIndex += offset;
      return point;
    }
    module.exports = movePoint;
  }
});

// node_modules/micromark/dist/tokenize/attention.js
var require_attention = __commonJS({
  "node_modules/micromark/dist/tokenize/attention.js"(exports, module) {
    "use strict";
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var classifyCharacter = require_classify_character();
    var movePoint = require_move_point();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var attention = {
      name: "attention",
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention
    };
    function resolveAllAttention(events, context) {
      var index = -1;
      var open;
      var group;
      var text;
      var openingSequence;
      var closingSequence;
      var use;
      var nextEvents;
      var offset;
      while (++index < events.length) {
        if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
          open = index;
          while (open--) {
            if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
              if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
                continue;
              }
              use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
              openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: movePoint(shallow(events[open][1].end), -use),
                end: shallow(events[open][1].end)
              };
              closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: shallow(events[index][1].start),
                end: movePoint(shallow(events[index][1].start), use)
              };
              text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: shallow(events[open][1].end),
                end: shallow(events[index][1].start)
              };
              group = {
                type: use > 1 ? "strong" : "emphasis",
                start: shallow(openingSequence.start),
                end: shallow(closingSequence.end)
              };
              events[open][1].end = shallow(openingSequence.start);
              events[index][1].start = shallow(closingSequence.end);
              nextEvents = [];
              if (events[open][1].end.offset - events[open][1].start.offset) {
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context]
                ]);
              }
              nextEvents = chunkedPush(nextEvents, [
                ["enter", group, context],
                ["enter", openingSequence, context],
                ["exit", openingSequence, context],
                ["enter", text, context]
              ]);
              nextEvents = chunkedPush(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
              nextEvents = chunkedPush(nextEvents, [
                ["exit", text, context],
                ["enter", closingSequence, context],
                ["exit", closingSequence, context],
                ["exit", group, context]
              ]);
              if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[index][1], context],
                  ["exit", events[index][1], context]
                ]);
              } else {
                offset = 0;
              }
              chunkedSplice(events, open - 1, index - open + 3, nextEvents);
              index = open + nextEvents.length - offset - 2;
              break;
            }
          }
        }
      }
      index = -1;
      while (++index < events.length) {
        if (events[index][1].type === "attentionSequence") {
          events[index][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeAttention(effects, ok2) {
      var before = classifyCharacter(this.previous);
      var marker;
      return start;
      function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
      }
      function sequence(code) {
        var token2;
        var after;
        var open;
        var close;
        if (code === marker) {
          effects.consume(code);
          return sequence;
        }
        token2 = effects.exit("attentionSequence");
        after = classifyCharacter(code);
        open = !after || after === 2 && before;
        close = !before || before === 2 && after;
        token2._open = marker === 42 ? open : open && (before || !close);
        token2._close = marker === 42 ? close : close && (after || !open);
        return ok2(code);
      }
    }
    module.exports = attention;
  }
});

// node_modules/micromark/dist/character/ascii-alpha.js
var require_ascii_alpha = __commonJS({
  "node_modules/micromark/dist/character/ascii-alpha.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlpha = regexCheck(/[A-Za-z]/);
    module.exports = asciiAlpha;
  }
});

// node_modules/micromark/dist/character/ascii-alphanumeric.js
var require_ascii_alphanumeric = __commonJS({
  "node_modules/micromark/dist/character/ascii-alphanumeric.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    module.exports = asciiAlphanumeric;
  }
});

// node_modules/micromark/dist/character/ascii-atext.js
var require_ascii_atext = __commonJS({
  "node_modules/micromark/dist/character/ascii-atext.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    module.exports = asciiAtext;
  }
});

// node_modules/micromark/dist/character/ascii-control.js
var require_ascii_control = __commonJS({
  "node_modules/micromark/dist/character/ascii-control.js"(exports, module) {
    "use strict";
    function asciiControl(code) {
      return code < 32 || code === 127;
    }
    module.exports = asciiControl;
  }
});

// node_modules/micromark/dist/tokenize/autolink.js
var require_autolink = __commonJS({
  "node_modules/micromark/dist/tokenize/autolink.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiAtext = require_ascii_atext();
    var asciiControl = require_ascii_control();
    var autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink
    };
    function tokenizeAutolink(effects, ok2, nok) {
      var size = 1;
      return start;
      function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
      }
      function open(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return schemeOrEmailAtext;
        }
        return asciiAtext(code) ? emailAtext(code) : nok(code);
      }
      function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
      }
      function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
          effects.consume(code);
          return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
          effects.consume(code);
          return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
      }
      function urlInside(code) {
        if (code === 62) {
          effects.exit("autolinkProtocol");
          return end(code);
        }
        if (code === 32 || code === 60 || asciiControl(code)) {
          return nok(code);
        }
        effects.consume(code);
        return urlInside;
      }
      function emailAtext(code) {
        if (code === 64) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (asciiAtext(code)) {
          effects.consume(code);
          return emailAtext;
        }
        return nok(code);
      }
      function emailAtSignOrDot(code) {
        return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
      }
      function emailLabel(code) {
        if (code === 46) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (code === 62) {
          effects.exit("autolinkProtocol").type = "autolinkEmail";
          return end(code);
        }
        return emailValue(code);
      }
      function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
          effects.consume(code);
          return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
      }
      function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok2;
      }
    }
    module.exports = autolink;
  }
});

// node_modules/micromark/dist/tokenize/block-quote.js
var require_block_quote = __commonJS({
  "node_modules/micromark/dist/tokenize/block-quote.js"(exports, module) {
    "use strict";
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var blockQuote = {
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit
    };
    function tokenizeBlockQuoteStart(effects, ok2, nok) {
      var self = this;
      return start;
      function start(code) {
        if (code === 62) {
          if (!self.containerState.open) {
            effects.enter("blockQuote", {
              _container: true
            });
            self.containerState.open = true;
          }
          effects.enter("blockQuotePrefix");
          effects.enter("blockQuoteMarker");
          effects.consume(code);
          effects.exit("blockQuoteMarker");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        if (markdownSpace(code)) {
          effects.enter("blockQuotePrefixWhitespace");
          effects.consume(code);
          effects.exit("blockQuotePrefixWhitespace");
          effects.exit("blockQuotePrefix");
          return ok2;
        }
        effects.exit("blockQuotePrefix");
        return ok2(code);
      }
    }
    function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
      return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    }
    function exit(effects) {
      effects.exit("blockQuote");
    }
    module.exports = blockQuote;
  }
});

// node_modules/micromark/dist/character/ascii-punctuation.js
var require_ascii_punctuation = __commonJS({
  "node_modules/micromark/dist/character/ascii-punctuation.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    module.exports = asciiPunctuation;
  }
});

// node_modules/micromark/dist/tokenize/character-escape.js
var require_character_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/character-escape.js"(exports, module) {
    "use strict";
    var asciiPunctuation = require_ascii_punctuation();
    var characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape
    };
    function tokenizeCharacterEscape(effects, ok2, nok) {
      return start;
      function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
      }
      function open(code) {
        if (asciiPunctuation(code)) {
          effects.enter("characterEscapeValue");
          effects.consume(code);
          effects.exit("characterEscapeValue");
          effects.exit("characterEscape");
          return ok2;
        }
        return nok(code);
      }
    }
    module.exports = characterEscape;
  }
});

// node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = __commonJS({
  "node_modules/parse-entities/decode-entity.browser.js"(exports, module) {
    "use strict";
    var el;
    var semicolon = 59;
    module.exports = decodeEntity;
    function decodeEntity(characters) {
      var entity = "&" + characters + ";";
      var char;
      el = el || document.createElement("i");
      el.innerHTML = entity;
      char = el.textContent;
      if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
        return false;
      }
      return char === entity ? false : char;
    }
  }
});

// node_modules/micromark/dist/character/ascii-digit.js
var require_ascii_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-digit.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiDigit = regexCheck(/\d/);
    module.exports = asciiDigit;
  }
});

// node_modules/micromark/dist/character/ascii-hex-digit.js
var require_ascii_hex_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-hex-digit.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    module.exports = asciiHexDigit;
  }
});

// node_modules/micromark/dist/tokenize/character-reference.js
var require_character_reference = __commonJS({
  "node_modules/micromark/dist/tokenize/character-reference.js"(exports, module) {
    "use strict";
    var decodeEntity = require_decode_entity_browser();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiDigit = require_ascii_digit();
    var asciiHexDigit = require_ascii_hex_digit();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : {default: e};
    }
    var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity);
    var characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference
    };
    function tokenizeCharacterReference(effects, ok2, nok) {
      var self = this;
      var size = 0;
      var max;
      var test;
      return start;
      function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
      }
      function open(code) {
        if (code === 35) {
          effects.enter("characterReferenceMarkerNumeric");
          effects.consume(code);
          effects.exit("characterReferenceMarkerNumeric");
          return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric;
        return value(code);
      }
      function numeric(code) {
        if (code === 88 || code === 120) {
          effects.enter("characterReferenceMarkerHexadecimal");
          effects.consume(code);
          effects.exit("characterReferenceMarkerHexadecimal");
          effects.enter("characterReferenceValue");
          max = 6;
          test = asciiHexDigit;
          return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit;
        return value(code);
      }
      function value(code) {
        var token2;
        if (code === 59 && size) {
          token2 = effects.exit("characterReferenceValue");
          if (test === asciiAlphanumeric && !decodeEntity__default["default"](self.sliceSerialize(token2))) {
            return nok(code);
          }
          effects.enter("characterReferenceMarker");
          effects.consume(code);
          effects.exit("characterReferenceMarker");
          effects.exit("characterReference");
          return ok2;
        }
        if (test(code) && size++ < max) {
          effects.consume(code);
          return value;
        }
        return nok(code);
      }
    }
    module.exports = characterReference;
  }
});

// node_modules/micromark/dist/tokenize/code-fenced.js
var require_code_fenced = __commonJS({
  "node_modules/micromark/dist/tokenize/code-fenced.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeFenced = {
      name: "codeFenced",
      tokenize: tokenizeCodeFenced,
      concrete: true
    };
    function tokenizeCodeFenced(effects, ok2, nok) {
      var self = this;
      var closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
      };
      var initialPrefix = prefixSize(this.events, "linePrefix");
      var sizeOpen = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
      }
      function sequenceOpen(code) {
        if (code === marker) {
          effects.consume(code);
          sizeOpen++;
          return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
      }
      function infoOpen(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return info(code);
      }
      function info(code) {
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceInfo");
          return factorySpace(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker)
          return nok(code);
        effects.consume(code);
        return info;
      }
      function infoAfter(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return meta(code);
      }
      function meta(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceMeta");
          return openAfter(code);
        }
        if (code === 96 && code === marker)
          return nok(code);
        effects.consume(code);
        return meta;
      }
      function openAfter(code) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok2(code) : content(code);
      }
      function content(code) {
        if (code === null) {
          return after(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, content, "linePrefix", initialPrefix + 1) : content);
        }
        effects.enter("codeFlowValue");
        return contentContinue(code);
      }
      function contentContinue(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return content(code);
        }
        effects.consume(code);
        return contentContinue;
      }
      function after(code) {
        effects.exit("codeFenced");
        return ok2(code);
      }
      function tokenizeClosingFence(effects2, ok3, nok2) {
        var size = 0;
        return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
        function closingSequenceStart(code) {
          effects2.enter("codeFencedFence");
          effects2.enter("codeFencedFenceSequence");
          return closingSequence(code);
        }
        function closingSequence(code) {
          if (code === marker) {
            effects2.consume(code);
            size++;
            return closingSequence;
          }
          if (size < sizeOpen)
            return nok2(code);
          effects2.exit("codeFencedFenceSequence");
          return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
        }
        function closingSequenceEnd(code) {
          if (code === null || markdownLineEnding(code)) {
            effects2.exit("codeFencedFence");
            return ok3(code);
          }
          return nok2(code);
        }
      }
    }
    module.exports = codeFenced;
  }
});

// node_modules/micromark/dist/tokenize/code-indented.js
var require_code_indented = __commonJS({
  "node_modules/micromark/dist/tokenize/code-indented.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedSplice = require_chunked_splice();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented,
      resolve: resolveCodeIndented
    };
    var indentedContentConstruct = {
      tokenize: tokenizeIndentedContent,
      partial: true
    };
    function resolveCodeIndented(events, context) {
      var code = {
        type: "codeIndented",
        start: events[0][1].start,
        end: events[events.length - 1][1].end
      };
      chunkedSplice(events, 0, 0, [["enter", code, context]]);
      chunkedSplice(events, events.length, 0, [["exit", code, context]]);
      return events;
    }
    function tokenizeCodeIndented(effects, ok2, nok) {
      return effects.attempt(indentedContentConstruct, afterPrefix, nok);
      function afterPrefix(code) {
        if (code === null) {
          return ok2(code);
        }
        if (markdownLineEnding(code)) {
          return effects.attempt(indentedContentConstruct, afterPrefix, ok2)(code);
        }
        effects.enter("codeFlowValue");
        return content(code);
      }
      function content(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return afterPrefix(code);
        }
        effects.consume(code);
        return content;
      }
    }
    function tokenizeIndentedContent(effects, ok2, nok) {
      var self = this;
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
      function afterPrefix(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
        }
        return prefixSize(self.events, "linePrefix") < 4 ? nok(code) : ok2(code);
      }
    }
    module.exports = codeIndented;
  }
});

// node_modules/micromark/dist/tokenize/code-text.js
var require_code_text = __commonJS({
  "node_modules/micromark/dist/tokenize/code-text.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var codeText = {
      name: "codeText",
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous
    };
    function resolveCodeText(events) {
      var tailExitIndex = events.length - 4;
      var headEnterIndex = 3;
      var index;
      var enter;
      if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex;
        while (++index < tailExitIndex) {
          if (events[index][1].type === "codeTextData") {
            events[tailExitIndex][1].type = events[headEnterIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
          }
        }
      }
      index = headEnterIndex - 1;
      tailExitIndex++;
      while (++index <= tailExitIndex) {
        if (enter === void 0) {
          if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
            enter = index;
          }
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
          events[enter][1].type = "codeTextData";
          if (index !== enter + 2) {
            events[enter][1].end = events[index - 1][1].end;
            events.splice(enter + 2, index - enter - 2);
            tailExitIndex -= index - enter - 2;
            index = enter + 2;
          }
          enter = void 0;
        }
      }
      return events;
    }
    function previous(code) {
      return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
    }
    function tokenizeCodeText(effects, ok2, nok) {
      var sizeOpen = 0;
      var size;
      var token2;
      return start;
      function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
      }
      function openingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          sizeOpen++;
          return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
      }
      function gap(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 96) {
          token2 = effects.enter("codeTextSequence");
          size = 0;
          return closingSequence(code);
        }
        if (code === 32) {
          effects.enter("space");
          effects.consume(code);
          effects.exit("space");
          return gap;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return gap;
        }
        effects.enter("codeTextData");
        return data(code);
      }
      function data(code) {
        if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
          effects.exit("codeTextData");
          return gap(code);
        }
        effects.consume(code);
        return data;
      }
      function closingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          size++;
          return closingSequence;
        }
        if (size === sizeOpen) {
          effects.exit("codeTextSequence");
          effects.exit("codeText");
          return ok2(code);
        }
        token2.type = "codeTextData";
        return data(code);
      }
    }
    module.exports = codeText;
  }
});

// node_modules/micromark/dist/tokenize/factory-destination.js
var require_factory_destination = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-destination.js"(exports, module) {
    "use strict";
    var asciiControl = require_ascii_control();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownLineEnding = require_markdown_line_ending();
    function destinationFactory(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
      var limit = max || Infinity;
      var balance = 0;
      return start;
      function start(code) {
        if (code === 60) {
          effects.enter(type);
          effects.enter(literalType);
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          return destinationEnclosedBefore;
        }
        if (asciiControl(code) || code === 41) {
          return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationRaw(code);
      }
      function destinationEnclosedBefore(code) {
        if (code === 62) {
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          effects.exit(literalType);
          effects.exit(type);
          return ok2;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationEnclosed(code);
      }
      function destinationEnclosed(code) {
        if (code === 62) {
          effects.exit("chunkString");
          effects.exit(stringType);
          return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
      }
      function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
          effects.consume(code);
          return destinationEnclosed;
        }
        return destinationEnclosed(code);
      }
      function destinationRaw(code) {
        if (code === 40) {
          if (++balance > limit)
            return nok(code);
          effects.consume(code);
          return destinationRaw;
        }
        if (code === 41) {
          if (!balance--) {
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok2(code);
          }
          effects.consume(code);
          return destinationRaw;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          if (balance)
            return nok(code);
          effects.exit("chunkString");
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok2(code);
        }
        if (asciiControl(code))
          return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
      }
      function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
          effects.consume(code);
          return destinationRaw;
        }
        return destinationRaw(code);
      }
    }
    module.exports = destinationFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-label.js
var require_factory_label = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-label.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    function labelFactory(effects, ok2, nok, type, markerType, stringType) {
      var self = this;
      var size = 0;
      var data;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
      }
      function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
          return nok(code);
        }
        if (code === 93) {
          effects.exit(stringType);
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok2;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return atBreak;
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return label(code);
      }
      function label(code) {
        if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
          effects.exit("chunkString");
          return atBreak(code);
        }
        effects.consume(code);
        data = data || !markdownSpace(code);
        return code === 92 ? labelEscape : label;
      }
      function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
          effects.consume(code);
          size++;
          return label;
        }
        return label(code);
      }
    }
    module.exports = labelFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-whitespace.js
var require_factory_whitespace = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-whitespace.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    function whitespaceFactory(effects, ok2) {
      var seen;
      return start;
      function start(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          seen = true;
          return start;
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        }
        return ok2(code);
      }
    }
    module.exports = whitespaceFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-title.js
var require_factory_title = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-title.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    function titleFactory(effects, ok2, nok, type, markerType, stringType) {
      var marker;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
      }
      function atFirstTitleBreak(code) {
        if (code === marker) {
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok2;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
      }
      function atTitleBreak(code) {
        if (code === marker) {
          effects.exit(stringType);
          return atFirstTitleBreak(marker);
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return title(code);
      }
      function title(code) {
        if (code === marker || code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
      }
      function titleEscape(code) {
        if (code === marker || code === 92) {
          effects.consume(code);
          return title;
        }
        return title(code);
      }
    }
    module.exports = titleFactory;
  }
});

// node_modules/micromark/dist/tokenize/definition.js
var require_definition = __commonJS({
  "node_modules/micromark/dist/tokenize/definition.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var normalizeIdentifier = require_normalize_identifier();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factorySpace = require_factory_space();
    var factoryWhitespace = require_factory_whitespace();
    var factoryTitle = require_factory_title();
    var definition = {
      name: "definition",
      tokenize: tokenizeDefinition
    };
    var titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true
    };
    function tokenizeDefinition(effects, ok2, nok) {
      var self = this;
      var identifier;
      return start;
      function start(code) {
        effects.enter("definition");
        return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
      }
      function labelAfter(code) {
        identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
          effects.enter("definitionMarker");
          effects.consume(code);
          effects.exit("definitionMarker");
          return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
        }
        return nok(code);
      }
      function after(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("definition");
          if (self.parser.defined.indexOf(identifier) < 0) {
            self.parser.defined.push(identifier);
          }
          return ok2(code);
        }
        return nok(code);
      }
    }
    function tokenizeTitle(effects, ok2, nok) {
      return start;
      function start(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
      }
      function before(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
        }
        return nok(code);
      }
      function after(code) {
        return code === null || markdownLineEnding(code) ? ok2(code) : nok(code);
      }
    }
    module.exports = definition;
  }
});

// node_modules/micromark/dist/tokenize/hard-break-escape.js
var require_hard_break_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/hard-break-escape.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape
    };
    function tokenizeHardBreakEscape(effects, ok2, nok) {
      return start;
      function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (markdownLineEnding(code)) {
          effects.exit("escapeMarker");
          effects.exit("hardBreakEscape");
          return ok2(code);
        }
        return nok(code);
      }
    }
    module.exports = hardBreakEscape;
  }
});

// node_modules/micromark/dist/tokenize/heading-atx.js
var require_heading_atx = __commonJS({
  "node_modules/micromark/dist/tokenize/heading-atx.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var chunkedSplice = require_chunked_splice();
    var factorySpace = require_factory_space();
    var headingAtx = {
      name: "headingAtx",
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx
    };
    function resolveHeadingAtx(events, context) {
      var contentEnd = events.length - 2;
      var contentStart = 3;
      var content;
      var text;
      if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
      }
      if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
        contentEnd -= 2;
      }
      if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
      }
      if (contentEnd > contentStart) {
        content = {
          type: "atxHeadingText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: "chunkText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
          contentType: "text"
        };
        chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
          ["enter", content, context],
          ["enter", text, context],
          ["exit", text, context],
          ["exit", content, context]
        ]);
      }
      return events;
    }
    function tokenizeHeadingAtx(effects, ok2, nok) {
      var self = this;
      var size = 0;
      return start;
      function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
      }
      function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
          effects.consume(code);
          return fenceOpenInside;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingSequence");
          return self.interrupt ? ok2(code) : headingBreak(code);
        }
        return nok(code);
      }
      function headingBreak(code) {
        if (code === 35) {
          effects.enter("atxHeadingSequence");
          return sequence(code);
        }
        if (code === null || markdownLineEnding(code)) {
          effects.exit("atxHeading");
          return ok2(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
      }
      function sequence(code) {
        if (code === 35) {
          effects.consume(code);
          return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
      }
      function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingText");
          return headingBreak(code);
        }
        effects.consume(code);
        return data;
      }
    }
    module.exports = headingAtx;
  }
});

// node_modules/micromark/dist/constant/html-block-names.js
var require_html_block_names = __commonJS({
  "node_modules/micromark/dist/constant/html-block-names.js"(exports, module) {
    "use strict";
    var basics = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
    module.exports = basics;
  }
});

// node_modules/micromark/dist/constant/html-raw-names.js
var require_html_raw_names = __commonJS({
  "node_modules/micromark/dist/constant/html-raw-names.js"(exports, module) {
    "use strict";
    var raws = ["pre", "script", "style", "textarea"];
    module.exports = raws;
  }
});

// node_modules/micromark/dist/tokenize/html-flow.js
var require_html_flow = __commonJS({
  "node_modules/micromark/dist/tokenize/html-flow.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var fromCharCode = require_from_char_code();
    var htmlBlockNames = require_html_block_names();
    var htmlRawNames = require_html_raw_names();
    var partialBlankLine = require_partial_blank_line();
    var htmlFlow = {
      name: "htmlFlow",
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true
    };
    var nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true
    };
    function resolveToHtmlFlow(events) {
      var index = events.length;
      while (index--) {
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
          break;
        }
      }
      if (index > 1 && events[index - 2][1].type === "linePrefix") {
        events[index][1].start = events[index - 2][1].start;
        events[index + 1][1].start = events[index - 2][1].start;
        events.splice(index - 2, 2);
      }
      return events;
    }
    function tokenizeHtmlFlow(effects, ok2, nok) {
      var self = this;
      var kind;
      var startTag;
      var buffer;
      var index;
      var marker;
      return start;
      function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationStart;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          kind = 3;
          return self.interrupt ? ok2 : continuationDeclarationInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          startTag = true;
          return tagName;
        }
        return nok(code);
      }
      function declarationStart(code) {
        if (code === 45) {
          effects.consume(code);
          kind = 2;
          return commentOpenInside;
        }
        if (code === 91) {
          effects.consume(code);
          kind = 5;
          buffer = "CDATA[";
          index = 0;
          return cdataOpenInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          kind = 4;
          return self.interrupt ? ok2 : continuationDeclarationInside;
        }
        return nok(code);
      }
      function commentOpenInside(code) {
        if (code === 45) {
          effects.consume(code);
          return self.interrupt ? ok2 : continuationDeclarationInside;
        }
        return nok(code);
      }
      function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? self.interrupt ? ok2 : continuation : cdataOpenInside;
        }
        return nok(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function tagName(code) {
        if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 1;
            return self.interrupt ? ok2(code) : continuation(code);
          }
          if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 6;
            if (code === 47) {
              effects.consume(code);
              return basicSelfClosing;
            }
            return self.interrupt ? ok2(code) : continuation(code);
          }
          kind = 7;
          return self.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function basicSelfClosing(code) {
        if (code === 62) {
          effects.consume(code);
          return self.interrupt ? ok2 : continuation;
        }
        return nok(code);
      }
      function completeClosingTagAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeClosingTagAfter;
        }
        return completeEnd(code);
      }
      function completeAttributeNameBefore(code) {
        if (code === 47) {
          effects.consume(code);
          return completeEnd;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameBefore;
        }
        return completeEnd(code);
      }
      function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
      }
      function completeAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
      }
      function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return completeAttributeValueQuoted;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        marker = void 0;
        return completeAttributeValueUnquoted(code);
      }
      function completeAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return completeAttributeValueQuotedAfter;
        }
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
      }
      function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
          return completeAttributeNameAfter(code);
        }
        effects.consume(code);
        return completeAttributeValueUnquoted;
      }
      function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace(code)) {
          return completeAttributeNameBefore(code);
        }
        return nok(code);
      }
      function completeEnd(code) {
        if (code === 62) {
          effects.consume(code);
          return completeAfter;
        }
        return nok(code);
      }
      function completeAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAfter;
        }
        return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
      }
      function continuation(code) {
        if (code === 45 && kind === 2) {
          effects.consume(code);
          return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
          effects.consume(code);
          return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
          effects.consume(code);
          return continuationClose;
        }
        if (code === 63 && kind === 3) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
          effects.consume(code);
          return continuationCharacterDataInside;
        }
        if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
          return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        }
        if (code === null || markdownLineEnding(code)) {
          return continuationAtLineEnding(code);
        }
        effects.consume(code);
        return continuation;
      }
      function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
      }
      function htmlContinueStart(code) {
        if (code === null) {
          return done(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return htmlContinueStart;
        }
        effects.enter("htmlFlowData");
        return continuation(code);
      }
      function continuationCommentInside(code) {
        if (code === 45) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationRawTagOpen(code) {
        if (code === 47) {
          effects.consume(code);
          buffer = "";
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
          effects.consume(code);
          return continuationClose;
        }
        if (asciiAlpha(code) && buffer.length < 8) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationCharacterDataInside(code) {
        if (code === 93) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationDeclarationInside(code) {
        if (code === 62) {
          effects.consume(code);
          return continuationClose;
        }
        return continuation(code);
      }
      function continuationClose(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("htmlFlowData");
          return done(code);
        }
        effects.consume(code);
        return continuationClose;
      }
      function done(code) {
        effects.exit("htmlFlow");
        return ok2(code);
      }
    }
    function tokenizeNextBlank(effects, ok2, nok) {
      return start;
      function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt(partialBlankLine, ok2, nok);
      }
    }
    module.exports = htmlFlow;
  }
});

// node_modules/micromark/dist/tokenize/html-text.js
var require_html_text = __commonJS({
  "node_modules/micromark/dist/tokenize/html-text.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText
    };
    function tokenizeHtmlText(effects, ok2, nok) {
      var self = this;
      var marker;
      var buffer;
      var index;
      var returnState;
      return start;
      function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationOpen;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          return instruction;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagOpen;
        }
        return nok(code);
      }
      function declarationOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentOpen;
        }
        if (code === 91) {
          effects.consume(code);
          buffer = "CDATA[";
          index = 0;
          return cdataOpen;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return declaration;
        }
        return nok(code);
      }
      function commentOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentStart;
        }
        return nok(code);
      }
      function commentStart(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentStartDash;
        }
        return comment(code);
      }
      function commentStartDash(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        return comment(code);
      }
      function comment(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentClose;
        }
        if (markdownLineEnding(code)) {
          returnState = comment;
          return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
      }
      function commentClose(code) {
        if (code === 45) {
          effects.consume(code);
          return end;
        }
        return comment(code);
      }
      function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
      }
      function cdata(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataClose;
        }
        if (markdownLineEnding(code)) {
          returnState = cdata;
          return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
      }
      function cdataClose(code) {
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function cdataEnd(code) {
        if (code === 62) {
          return end(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function declaration(code) {
        if (code === null || code === 62) {
          return end(code);
        }
        if (markdownLineEnding(code)) {
          returnState = declaration;
          return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
      }
      function instruction(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 63) {
          effects.consume(code);
          return instructionClose;
        }
        if (markdownLineEnding(code)) {
          returnState = instruction;
          return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
      }
      function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagClose;
        }
        return nok(code);
      }
      function tagClose(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagClose;
        }
        return tagCloseBetween(code);
      }
      function tagCloseBetween(code) {
        if (markdownLineEnding(code)) {
          returnState = tagCloseBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagCloseBetween;
        }
        return end(code);
      }
      function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpen;
        }
        if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenBetween(code) {
        if (code === 47) {
          effects.consume(code);
          return end;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenBetween;
        }
        return end(code);
      }
      function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
      }
      function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeNameAfter;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
      }
      function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueBefore;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = void 0;
        return tagOpenAttributeValueUnquoted;
      }
      function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueQuoted;
          return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
      }
      function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
          return nok(code);
        }
        if (code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
      }
      function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
      }
      function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
      }
      function end(code) {
        if (code === 62) {
          effects.consume(code);
          effects.exit("htmlTextData");
          effects.exit("htmlText");
          return ok2;
        }
        return nok(code);
      }
    }
    module.exports = htmlText;
  }
});

// node_modules/micromark/dist/tokenize/label-end.js
var require_label_end = __commonJS({
  "node_modules/micromark/dist/tokenize/label-end.js"(exports, module) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var normalizeIdentifier = require_normalize_identifier();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factoryTitle = require_factory_title();
    var factoryWhitespace = require_factory_whitespace();
    var labelEnd = {
      name: "labelEnd",
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd
    };
    var resourceConstruct = {
      tokenize: tokenizeResource
    };
    var fullReferenceConstruct = {
      tokenize: tokenizeFullReference
    };
    var collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference
    };
    function resolveAllLabelEnd(events) {
      var index = -1;
      var token2;
      while (++index < events.length) {
        token2 = events[index][1];
        if (!token2._used && (token2.type === "labelImage" || token2.type === "labelLink" || token2.type === "labelEnd")) {
          events.splice(index + 1, token2.type === "labelImage" ? 4 : 2);
          token2.type = "data";
          index++;
        }
      }
      return events;
    }
    function resolveToLabelEnd(events, context) {
      var index = events.length;
      var offset = 0;
      var group;
      var label;
      var text;
      var token2;
      var open;
      var close;
      var media;
      while (index--) {
        token2 = events[index][1];
        if (open) {
          if (token2.type === "link" || token2.type === "labelLink" && token2._inactive) {
            break;
          }
          if (events[index][0] === "enter" && token2.type === "labelLink") {
            token2._inactive = true;
          }
        } else if (close) {
          if (events[index][0] === "enter" && (token2.type === "labelImage" || token2.type === "labelLink") && !token2._balanced) {
            open = index;
            if (token2.type !== "labelLink") {
              offset = 2;
              break;
            }
          }
        } else if (token2.type === "labelEnd") {
          close = index;
        }
      }
      group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: shallow(events[open][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      label = {
        type: "label",
        start: shallow(events[open][1].start),
        end: shallow(events[close][1].end)
      };
      text = {
        type: "labelText",
        start: shallow(events[open + offset + 2][1].end),
        end: shallow(events[close - 2][1].start)
      };
      media = [
        ["enter", group, context],
        ["enter", label, context]
      ];
      media = chunkedPush(media, events.slice(open + 1, open + offset + 3));
      media = chunkedPush(media, [["enter", text, context]]);
      media = chunkedPush(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
      media = chunkedPush(media, [
        ["exit", text, context],
        events[close - 2],
        events[close - 1],
        ["exit", label, context]
      ]);
      media = chunkedPush(media, events.slice(close + 1));
      media = chunkedPush(media, [["exit", group, context]]);
      chunkedSplice(events, open, events.length, media);
      return events;
    }
    function tokenizeLabelEnd(effects, ok2, nok) {
      var self = this;
      var index = self.events.length;
      var labelStart;
      var defined;
      while (index--) {
        if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
          labelStart = self.events[index][1];
          break;
        }
      }
      return start;
      function start(code) {
        if (!labelStart) {
          return nok(code);
        }
        if (labelStart._inactive)
          return balanced(code);
        defined = self.parser.defined.indexOf(normalizeIdentifier(self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        }))) > -1;
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
      }
      function afterLabelEnd(code) {
        if (code === 40) {
          return effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code);
        }
        if (code === 91) {
          return effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code);
        }
        return defined ? ok2(code) : balanced(code);
      }
      function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
      }
    }
    function tokenizeResource(effects, ok2, nok) {
      return start;
      function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return factoryWhitespace(effects, open);
      }
      function open(code) {
        if (code === 41) {
          return end(code);
        }
        return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(code);
      }
      function destinationAfter(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
      }
      function between(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        }
        return end(code);
      }
      function end(code) {
        if (code === 41) {
          effects.enter("resourceMarker");
          effects.consume(code);
          effects.exit("resourceMarker");
          effects.exit("resource");
          return ok2;
        }
        return nok(code);
      }
    }
    function tokenizeFullReference(effects, ok2, nok) {
      var self = this;
      return start;
      function start(code) {
        return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
      }
      function afterLabel(code) {
        return self.parser.defined.indexOf(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) < 0 ? nok(code) : ok2(code);
      }
    }
    function tokenizeCollapsedReference(effects, ok2, nok) {
      return start;
      function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
      }
      function open(code) {
        if (code === 93) {
          effects.enter("referenceMarker");
          effects.consume(code);
          effects.exit("referenceMarker");
          effects.exit("reference");
          return ok2;
        }
        return nok(code);
      }
    }
    module.exports = labelEnd;
  }
});

// node_modules/micromark/dist/tokenize/label-start-image.js
var require_label_start_image = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-image.js"(exports, module) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartImage = {
      name: "labelStartImage",
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartImage(effects, ok2, nok) {
      var self = this;
      return start;
      function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
      }
      function open(code) {
        if (code === 91) {
          effects.enter("labelMarker");
          effects.consume(code);
          effects.exit("labelMarker");
          effects.exit("labelImage");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok2(code);
      }
    }
    module.exports = labelStartImage;
  }
});

// node_modules/micromark/dist/tokenize/label-start-link.js
var require_label_start_link = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-link.js"(exports, module) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartLink = {
      name: "labelStartLink",
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartLink(effects, ok2, nok) {
      var self = this;
      return start;
      function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
      }
      function after(code) {
        return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok2(code);
      }
    }
    module.exports = labelStartLink;
  }
});

// node_modules/micromark/dist/tokenize/line-ending.js
var require_line_ending = __commonJS({
  "node_modules/micromark/dist/tokenize/line-ending.js"(exports, module) {
    "use strict";
    var factorySpace = require_factory_space();
    var lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding
    };
    function tokenizeLineEnding(effects, ok2) {
      return start;
      function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, ok2, "linePrefix");
      }
    }
    module.exports = lineEnding;
  }
});

// node_modules/micromark/dist/tokenize/thematic-break.js
var require_thematic_break = __commonJS({
  "node_modules/micromark/dist/tokenize/thematic-break.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak
    };
    function tokenizeThematicBreak(effects, ok2, nok) {
      var size = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
      }
      function atBreak(code) {
        if (code === marker) {
          effects.enter("thematicBreakSequence");
          return sequence(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !markdownLineEnding(code)) {
          return nok(code);
        }
        effects.exit("thematicBreak");
        return ok2(code);
      }
      function sequence(code) {
        if (code === marker) {
          effects.consume(code);
          size++;
          return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
      }
    }
    module.exports = thematicBreak;
  }
});

// node_modules/micromark/dist/tokenize/list.js
var require_list = __commonJS({
  "node_modules/micromark/dist/tokenize/list.js"(exports, module) {
    "use strict";
    var asciiDigit = require_ascii_digit();
    var markdownSpace = require_markdown_space();
    var prefixSize = require_prefix_size();
    var sizeChunks = require_size_chunks();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var thematicBreak = require_thematic_break();
    var list = {
      name: "list",
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd
    };
    var listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true
    };
    var indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true
    };
    function tokenizeListStart(effects, ok2, nok) {
      var self = this;
      var initialSize = prefixSize(self.events, "linePrefix");
      var size = 0;
      return start;
      function start(code) {
        var kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
          if (!self.containerState.type) {
            self.containerState.type = kind;
            effects.enter(kind, {
              _container: true
            });
          }
          if (kind === "listUnordered") {
            effects.enter("listItemPrefix");
            return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
          }
          if (!self.interrupt || code === 49) {
            effects.enter("listItemPrefix");
            effects.enter("listItemValue");
            return inside(code);
          }
        }
        return nok(code);
      }
      function inside(code) {
        if (asciiDigit(code) && ++size < 10) {
          effects.consume(code);
          return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
          effects.exit("listItemValue");
          return atMarker(code);
        }
        return nok(code);
      }
      function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check(partialBlankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
      }
      function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
      }
      function otherPrefix(code) {
        if (markdownSpace(code)) {
          effects.enter("listItemPrefixWhitespace");
          effects.consume(code);
          effects.exit("listItemPrefixWhitespace");
          return endOfPrefix;
        }
        return nok(code);
      }
      function endOfPrefix(code) {
        self.containerState.size = initialSize + sizeChunks(self.sliceStream(effects.exit("listItemPrefix")));
        return ok2(code);
      }
    }
    function tokenizeListContinuation(effects, ok2, nok) {
      var self = this;
      self.containerState._closeFlow = void 0;
      return effects.check(partialBlankLine, onBlank, notBlank);
      function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
        return factorySpace(effects, ok2, "listItemIndent", self.containerState.size + 1)(code);
      }
      function notBlank(code) {
        if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
          self.containerState.furtherBlankLines = self.containerState.initialBlankLine = void 0;
          return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = self.containerState.initialBlankLine = void 0;
        return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code);
      }
      function notInCurrentItem(code) {
        self.containerState._closeFlow = true;
        self.interrupt = void 0;
        return factorySpace(effects, effects.attempt(list, ok2, nok), "linePrefix", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(code);
      }
    }
    function tokenizeIndent(effects, ok2, nok) {
      var self = this;
      return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
      function afterPrefix(code) {
        return prefixSize(self.events, "listItemIndent") === self.containerState.size ? ok2(code) : nok(code);
      }
    }
    function tokenizeListEnd(effects) {
      effects.exit(this.containerState.type);
    }
    function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
      var self = this;
      return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4 + 1);
      function afterPrefix(code) {
        return markdownSpace(code) || !prefixSize(self.events, "listItemPrefixWhitespace") ? nok(code) : ok2(code);
      }
    }
    module.exports = list;
  }
});

// node_modules/micromark/dist/tokenize/setext-underline.js
var require_setext_underline = __commonJS({
  "node_modules/micromark/dist/tokenize/setext-underline.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var shallow = require_shallow();
    var factorySpace = require_factory_space();
    var setextUnderline = {
      name: "setextUnderline",
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline
    };
    function resolveToSetextUnderline(events, context) {
      var index = events.length;
      var content;
      var text;
      var definition;
      var heading;
      while (index--) {
        if (events[index][0] === "enter") {
          if (events[index][1].type === "content") {
            content = index;
            break;
          }
          if (events[index][1].type === "paragraph") {
            text = index;
          }
        } else {
          if (events[index][1].type === "content") {
            events.splice(index, 1);
          }
          if (!definition && events[index][1].type === "definition") {
            definition = index;
          }
        }
      }
      heading = {
        type: "setextHeading",
        start: shallow(events[text][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      events[text][1].type = "setextHeadingText";
      if (definition) {
        events.splice(text, 0, ["enter", heading, context]);
        events.splice(definition + 1, 0, ["exit", events[content][1], context]);
        events[content][1].end = shallow(events[definition][1].end);
      } else {
        events[content][1] = heading;
      }
      events.push(["exit", heading, context]);
      return events;
    }
    function tokenizeSetextUnderline(effects, ok2, nok) {
      var self = this;
      var index = self.events.length;
      var marker;
      var paragraph;
      while (index--) {
        if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
          paragraph = self.events[index][1].type === "paragraph";
          break;
        }
      }
      return start;
      function start(code) {
        if (!self.lazy && (self.interrupt || paragraph)) {
          effects.enter("setextHeadingLine");
          effects.enter("setextHeadingLineSequence");
          marker = code;
          return closingSequence(code);
        }
        return nok(code);
      }
      function closingSequence(code) {
        if (code === marker) {
          effects.consume(code);
          return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
      }
      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("setextHeadingLine");
          return ok2(code);
        }
        return nok(code);
      }
    }
    module.exports = setextUnderline;
  }
});

// node_modules/micromark/dist/constructs.js
var require_constructs = __commonJS({
  "node_modules/micromark/dist/constructs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var text$1 = require_text();
    var attention = require_attention();
    var autolink = require_autolink();
    var blockQuote = require_block_quote();
    var characterEscape = require_character_escape();
    var characterReference = require_character_reference();
    var codeFenced = require_code_fenced();
    var codeIndented = require_code_indented();
    var codeText = require_code_text();
    var definition = require_definition();
    var hardBreakEscape = require_hard_break_escape();
    var headingAtx = require_heading_atx();
    var htmlFlow = require_html_flow();
    var htmlText = require_html_text();
    var labelEnd = require_label_end();
    var labelStartImage = require_label_start_image();
    var labelStartLink = require_label_start_link();
    var lineEnding = require_line_ending();
    var list = require_list();
    var setextUnderline = require_setext_underline();
    var thematicBreak = require_thematic_break();
    var document2 = {
      42: list,
      43: list,
      45: list,
      48: list,
      49: list,
      50: list,
      51: list,
      52: list,
      53: list,
      54: list,
      55: list,
      56: list,
      57: list,
      62: blockQuote
    };
    var contentInitial = {
      91: definition
    };
    var flowInitial = {
      "-2": codeIndented,
      "-1": codeIndented,
      32: codeIndented
    };
    var flow = {
      35: headingAtx,
      42: thematicBreak,
      45: [setextUnderline, thematicBreak],
      60: htmlFlow,
      61: setextUnderline,
      95: thematicBreak,
      96: codeFenced,
      126: codeFenced
    };
    var string = {
      38: characterReference,
      92: characterEscape
    };
    var text = {
      "-5": lineEnding,
      "-4": lineEnding,
      "-3": lineEnding,
      33: labelStartImage,
      38: characterReference,
      42: attention,
      60: [autolink, htmlText],
      91: labelStartLink,
      92: [hardBreakEscape, characterEscape],
      93: labelEnd,
      95: attention,
      96: codeText
    };
    var insideSpan = {
      null: [attention, text$1.resolver]
    };
    var disable = {
      null: []
    };
    exports.contentInitial = contentInitial;
    exports.disable = disable;
    exports.document = document2;
    exports.flow = flow;
    exports.flowInitial = flowInitial;
    exports.insideSpan = insideSpan;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/micromark/dist/parse.js
var require_parse = __commonJS({
  "node_modules/micromark/dist/parse.js"(exports, module) {
    "use strict";
    var content = require_content();
    var document2 = require_document();
    var flow = require_flow();
    var text = require_text();
    var combineExtensions = require_combine_extensions();
    var createTokenizer = require_create_tokenizer();
    var miniflat = require_miniflat();
    var constructs = require_constructs();
    function parse3(options) {
      var settings = options || {};
      var parser = {
        defined: [],
        constructs: combineExtensions([constructs].concat(miniflat(settings.extensions))),
        content: create2(content),
        document: create2(document2),
        flow: create2(flow),
        string: create2(text.string),
        text: create2(text.text)
      };
      return parser;
      function create2(initializer) {
        return creator;
        function creator(from) {
          return createTokenizer(parser, initializer, from);
        }
      }
    }
    module.exports = parse3;
  }
});

// node_modules/micromark/dist/preprocess.js
var require_preprocess = __commonJS({
  "node_modules/micromark/dist/preprocess.js"(exports, module) {
    "use strict";
    var search2 = /[\0\t\n\r]/g;
    function preprocess() {
      var start = true;
      var column = 1;
      var buffer = "";
      var atCarriageReturn;
      return preprocessor;
      function preprocessor(value, encoding, end) {
        var chunks = [];
        var match;
        var next;
        var startPosition;
        var endPosition;
        var code;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
          if (value.charCodeAt(0) === 65279) {
            startPosition++;
          }
          start = void 0;
        }
        while (startPosition < value.length) {
          search2.lastIndex = startPosition;
          match = search2.exec(value);
          endPosition = match ? match.index : value.length;
          code = value.charCodeAt(endPosition);
          if (!match) {
            buffer = value.slice(startPosition);
            break;
          }
          if (code === 10 && startPosition === endPosition && atCarriageReturn) {
            chunks.push(-3);
            atCarriageReturn = void 0;
          } else {
            if (atCarriageReturn) {
              chunks.push(-5);
              atCarriageReturn = void 0;
            }
            if (startPosition < endPosition) {
              chunks.push(value.slice(startPosition, endPosition));
              column += endPosition - startPosition;
            }
            if (code === 0) {
              chunks.push(65533);
              column++;
            } else if (code === 9) {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next)
                chunks.push(-1);
            } else if (code === 10) {
              chunks.push(-4);
              column = 1;
            } else {
              atCarriageReturn = true;
              column = 1;
            }
          }
          startPosition = endPosition + 1;
        }
        if (end) {
          if (atCarriageReturn)
            chunks.push(-5);
          if (buffer)
            chunks.push(buffer);
          chunks.push(null);
        }
        return chunks;
      }
    }
    module.exports = preprocess;
  }
});

// node_modules/micromark/dist/postprocess.js
var require_postprocess = __commonJS({
  "node_modules/micromark/dist/postprocess.js"(exports, module) {
    "use strict";
    var subtokenize = require_subtokenize();
    function postprocess(events) {
      while (!subtokenize(events)) {
      }
      return events;
    }
    module.exports = postprocess;
  }
});

// node_modules/mdast-util-from-markdown/dist/index.js
var require_dist = __commonJS({
  "node_modules/mdast-util-from-markdown/dist/index.js"(exports, module) {
    "use strict";
    module.exports = fromMarkdown;
    var toString = require_mdast_util_to_string();
    var assign = require_assign();
    var own3 = require_has_own_property();
    var normalizeIdentifier = require_normalize_identifier();
    var safeFromInt = require_safe_from_int();
    var parser = require_parse();
    var preprocessor = require_preprocess();
    var postprocess = require_postprocess();
    var decode = require_decode_entity_browser();
    var stringifyPosition = require_unist_util_stringify_position();
    function fromMarkdown(value, encoding, options) {
      if (typeof encoding !== "string") {
        options = encoding;
        encoding = void 0;
      }
      return compiler(options)(postprocess(parser(options).document().write(preprocessor()(value, encoding, true))));
    }
    function compiler(options) {
      var settings = options || {};
      var config = configure({
        transforms: [],
        canContainEols: [
          "emphasis",
          "fragment",
          "heading",
          "paragraph",
          "strong"
        ],
        enter: {
          autolink: opener(link),
          autolinkProtocol: onenterdata,
          autolinkEmail: onenterdata,
          atxHeading: opener(heading),
          blockQuote: opener(blockQuote),
          characterEscape: onenterdata,
          characterReference: onenterdata,
          codeFenced: opener(codeFlow),
          codeFencedFenceInfo: buffer,
          codeFencedFenceMeta: buffer,
          codeIndented: opener(codeFlow, buffer),
          codeText: opener(codeText, buffer),
          codeTextData: onenterdata,
          data: onenterdata,
          codeFlowValue: onenterdata,
          definition: opener(definition),
          definitionDestinationString: buffer,
          definitionLabelString: buffer,
          definitionTitleString: buffer,
          emphasis: opener(emphasis),
          hardBreakEscape: opener(hardBreak),
          hardBreakTrailing: opener(hardBreak),
          htmlFlow: opener(html3, buffer),
          htmlFlowData: onenterdata,
          htmlText: opener(html3, buffer),
          htmlTextData: onenterdata,
          image: opener(image),
          label: buffer,
          link: opener(link),
          listItem: opener(listItem),
          listItemValue: onenterlistitemvalue,
          listOrdered: opener(list, onenterlistordered),
          listUnordered: opener(list),
          paragraph: opener(paragraph),
          reference: onenterreference,
          referenceString: buffer,
          resourceDestinationString: buffer,
          resourceTitleString: buffer,
          setextHeading: opener(heading),
          strong: opener(strong),
          thematicBreak: opener(thematicBreak)
        },
        exit: {
          atxHeading: closer(),
          atxHeadingSequence: onexitatxheadingsequence,
          autolink: closer(),
          autolinkEmail: onexitautolinkemail,
          autolinkProtocol: onexitautolinkprotocol,
          blockQuote: closer(),
          characterEscapeValue: onexitdata,
          characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
          characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
          characterReferenceValue: onexitcharacterreferencevalue,
          codeFenced: closer(onexitcodefenced),
          codeFencedFence: onexitcodefencedfence,
          codeFencedFenceInfo: onexitcodefencedfenceinfo,
          codeFencedFenceMeta: onexitcodefencedfencemeta,
          codeFlowValue: onexitdata,
          codeIndented: closer(onexitcodeindented),
          codeText: closer(onexitcodetext),
          codeTextData: onexitdata,
          data: onexitdata,
          definition: closer(),
          definitionDestinationString: onexitdefinitiondestinationstring,
          definitionLabelString: onexitdefinitionlabelstring,
          definitionTitleString: onexitdefinitiontitlestring,
          emphasis: closer(),
          hardBreakEscape: closer(onexithardbreak),
          hardBreakTrailing: closer(onexithardbreak),
          htmlFlow: closer(onexithtmlflow),
          htmlFlowData: onexitdata,
          htmlText: closer(onexithtmltext),
          htmlTextData: onexitdata,
          image: closer(onexitimage),
          label: onexitlabel,
          labelText: onexitlabeltext,
          lineEnding: onexitlineending,
          link: closer(onexitlink),
          listItem: closer(),
          listOrdered: closer(),
          listUnordered: closer(),
          paragraph: closer(),
          referenceString: onexitreferencestring,
          resourceDestinationString: onexitresourcedestinationstring,
          resourceTitleString: onexitresourcetitlestring,
          resource: onexitresource,
          setextHeading: closer(onexitsetextheading),
          setextHeadingLineSequence: onexitsetextheadinglinesequence,
          setextHeadingText: onexitsetextheadingtext,
          strong: closer(),
          thematicBreak: closer()
        }
      }, settings.mdastExtensions || []);
      var data = {};
      return compile;
      function compile(events) {
        var tree = {type: "root", children: []};
        var stack = [tree];
        var tokenStack = [];
        var listStack = [];
        var index = -1;
        var handler;
        var listStart;
        var context = {
          stack,
          tokenStack,
          config,
          enter,
          exit,
          buffer,
          resume,
          setData,
          getData
        };
        while (++index < events.length) {
          if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
            if (events[index][0] === "enter") {
              listStack.push(index);
            } else {
              listStart = listStack.pop(index);
              index = prepareList(events, listStart, index);
            }
          }
        }
        index = -1;
        while (++index < events.length) {
          handler = config[events[index][0]];
          if (own3.call(handler, events[index][1].type)) {
            handler[events[index][1].type].call(assign({sliceSerialize: events[index][2].sliceSerialize}, context), events[index][1]);
          }
        }
        if (tokenStack.length) {
          throw new Error("Cannot close document, a token (`" + tokenStack[tokenStack.length - 1].type + "`, " + stringifyPosition({
            start: tokenStack[tokenStack.length - 1].start,
            end: tokenStack[tokenStack.length - 1].end
          }) + ") is still open");
        }
        tree.position = {
          start: point(events.length ? events[0][1].start : {line: 1, column: 1, offset: 0}),
          end: point(events.length ? events[events.length - 2][1].end : {line: 1, column: 1, offset: 0})
        };
        index = -1;
        while (++index < config.transforms.length) {
          tree = config.transforms[index](tree) || tree;
        }
        return tree;
      }
      function prepareList(events, start, length) {
        var index = start - 1;
        var containerBalance = -1;
        var listSpread = false;
        var listItem2;
        var tailIndex;
        var lineIndex;
        var tailEvent;
        var event;
        var firstBlankLineIndex;
        var atMarker;
        while (++index <= length) {
          event = events[index];
          if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
          } else if (event[1].type === "lineEndingBlank") {
            if (event[0] === "enter") {
              if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index;
              }
              atMarker = void 0;
            }
          } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
          } else {
            atMarker = void 0;
          }
          if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
            if (listItem2) {
              tailIndex = index;
              lineIndex = void 0;
              while (tailIndex--) {
                tailEvent = events[tailIndex];
                if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                  if (tailEvent[0] === "exit")
                    continue;
                  if (lineIndex) {
                    events[lineIndex][1].type = "lineEndingBlank";
                    listSpread = true;
                  }
                  tailEvent[1].type = "lineEnding";
                  lineIndex = tailIndex;
                } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
                } else {
                  break;
                }
              }
              if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                listItem2._spread = true;
              }
              listItem2.end = point(lineIndex ? events[lineIndex][1].start : event[1].end);
              events.splice(lineIndex || index, 0, ["exit", listItem2, event[2]]);
              index++;
              length++;
            }
            if (event[1].type === "listItemPrefix") {
              listItem2 = {
                type: "listItem",
                _spread: false,
                start: point(event[1].start)
              };
              events.splice(index, 0, ["enter", listItem2, event[2]]);
              index++;
              length++;
              firstBlankLineIndex = void 0;
              atMarker = true;
            }
          }
        }
        events[start][1]._spread = listSpread;
        return length;
      }
      function setData(key, value) {
        data[key] = value;
      }
      function getData(key) {
        return data[key];
      }
      function point(d) {
        return {line: d.line, column: d.column, offset: d.offset};
      }
      function opener(create2, and) {
        return open;
        function open(token2) {
          enter.call(this, create2(token2), token2);
          if (and)
            and.call(this, token2);
        }
      }
      function buffer() {
        this.stack.push({type: "fragment", children: []});
      }
      function enter(node, token2) {
        this.stack[this.stack.length - 1].children.push(node);
        this.stack.push(node);
        this.tokenStack.push(token2);
        node.position = {start: point(token2.start)};
        return node;
      }
      function closer(and) {
        return close;
        function close(token2) {
          if (and)
            and.call(this, token2);
          exit.call(this, token2);
        }
      }
      function exit(token2) {
        var node = this.stack.pop();
        var open = this.tokenStack.pop();
        if (!open) {
          throw new Error("Cannot close `" + token2.type + "` (" + stringifyPosition({start: token2.start, end: token2.end}) + "): it\u2019s not open");
        } else if (open.type !== token2.type) {
          throw new Error("Cannot close `" + token2.type + "` (" + stringifyPosition({start: token2.start, end: token2.end}) + "): a different token (`" + open.type + "`, " + stringifyPosition({start: open.start, end: open.end}) + ") is open");
        }
        node.position.end = point(token2.end);
        return node;
      }
      function resume() {
        return toString(this.stack.pop());
      }
      function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
      }
      function onenterlistitemvalue(token2) {
        if (getData("expectingFirstListItemValue")) {
          this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(token2), 10);
          setData("expectingFirstListItemValue");
        }
      }
      function onexitcodefencedfenceinfo() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].lang = data2;
      }
      function onexitcodefencedfencemeta() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].meta = data2;
      }
      function onexitcodefencedfence() {
        if (getData("flowCodeInside"))
          return;
        this.buffer();
        setData("flowCodeInside", true);
      }
      function onexitcodefenced() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
      }
      function onexitcodeindented() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitdefinitionlabelstring(token2) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token2)).toLowerCase();
      }
      function onexitdefinitiontitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitdefinitiondestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitatxheadingsequence(token2) {
        if (!this.stack[this.stack.length - 1].depth) {
          this.stack[this.stack.length - 1].depth = this.sliceSerialize(token2).length;
        }
      }
      function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
      }
      function onexitsetextheadinglinesequence(token2) {
        this.stack[this.stack.length - 1].depth = this.sliceSerialize(token2).charCodeAt(0) === 61 ? 1 : 2;
      }
      function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
      }
      function onenterdata(token2) {
        var siblings = this.stack[this.stack.length - 1].children;
        var tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== "text") {
          tail = text();
          tail.position = {start: point(token2.start)};
          this.stack[this.stack.length - 1].children.push(tail);
        }
        this.stack.push(tail);
      }
      function onexitdata(token2) {
        var tail = this.stack.pop();
        tail.value += this.sliceSerialize(token2);
        tail.position.end = point(token2.end);
      }
      function onexitlineending(token2) {
        var context = this.stack[this.stack.length - 1];
        if (getData("atHardBreak")) {
          context.children[context.children.length - 1].position.end = point(token2.end);
          setData("atHardBreak");
          return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.indexOf(context.type) > -1) {
          onenterdata.call(this, token2);
          onexitdata.call(this, token2);
        }
      }
      function onexithardbreak() {
        setData("atHardBreak", true);
      }
      function onexithtmlflow() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexithtmltext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitcodetext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitlink() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitimage() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitlabeltext(token2) {
        this.stack[this.stack.length - 2].identifier = normalizeIdentifier(this.sliceSerialize(token2)).toLowerCase();
      }
      function onexitlabel() {
        var fragment = this.stack[this.stack.length - 1];
        var value = this.resume();
        this.stack[this.stack.length - 1].label = value;
        setData("inReference", true);
        if (this.stack[this.stack.length - 1].type === "link") {
          this.stack[this.stack.length - 1].children = fragment.children;
        } else {
          this.stack[this.stack.length - 1].alt = value;
        }
      }
      function onexitresourcedestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitresourcetitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitresource() {
        setData("inReference");
      }
      function onenterreference() {
        setData("referenceType", "collapsed");
      }
      function onexitreferencestring(token2) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token2)).toLowerCase();
        setData("referenceType", "full");
      }
      function onexitcharacterreferencemarker(token2) {
        setData("characterReferenceType", token2.type);
      }
      function onexitcharacterreferencevalue(token2) {
        var data2 = this.sliceSerialize(token2);
        var type = getData("characterReferenceType");
        var value;
        var tail;
        if (type) {
          value = safeFromInt(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
          setData("characterReferenceType");
        } else {
          value = decode(data2);
        }
        tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token2.end);
      }
      function onexitautolinkprotocol(token2) {
        onexitdata.call(this, token2);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(token2);
      }
      function onexitautolinkemail(token2) {
        onexitdata.call(this, token2);
        this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(token2);
      }
      function blockQuote() {
        return {type: "blockquote", children: []};
      }
      function codeFlow() {
        return {type: "code", lang: null, meta: null, value: ""};
      }
      function codeText() {
        return {type: "inlineCode", value: ""};
      }
      function definition() {
        return {
          type: "definition",
          identifier: "",
          label: null,
          title: null,
          url: ""
        };
      }
      function emphasis() {
        return {type: "emphasis", children: []};
      }
      function heading() {
        return {type: "heading", depth: void 0, children: []};
      }
      function hardBreak() {
        return {type: "break"};
      }
      function html3() {
        return {type: "html", value: ""};
      }
      function image() {
        return {type: "image", title: null, url: "", alt: null};
      }
      function link() {
        return {type: "link", title: null, url: "", children: []};
      }
      function list(token2) {
        return {
          type: "list",
          ordered: token2.type === "listOrdered",
          start: null,
          spread: token2._spread,
          children: []
        };
      }
      function listItem(token2) {
        return {
          type: "listItem",
          spread: token2._spread,
          checked: null,
          children: []
        };
      }
      function paragraph() {
        return {type: "paragraph", children: []};
      }
      function strong() {
        return {type: "strong", children: []};
      }
      function text() {
        return {type: "text", value: ""};
      }
      function thematicBreak() {
        return {type: "thematicBreak"};
      }
    }
    function configure(config, extensions) {
      var index = -1;
      while (++index < extensions.length) {
        extension(config, extensions[index]);
      }
      return config;
    }
    function extension(config, extension2) {
      var key;
      var left;
      for (key in extension2) {
        left = own3.call(config, key) ? config[key] : config[key] = {};
        if (key === "canContainEols" || key === "transforms") {
          config[key] = [].concat(left, extension2[key]);
        } else {
          Object.assign(left, extension2[key]);
        }
      }
    }
  }
});

// node_modules/mdast-util-from-markdown/index.js
var require_mdast_util_from_markdown = __commonJS({
  "node_modules/mdast-util-from-markdown/index.js"(exports, module) {
    "use strict";
    module.exports = require_dist();
  }
});

// node_modules/remark-parse/index.js
var require_remark_parse = __commonJS({
  "node_modules/remark-parse/index.js"(exports, module) {
    "use strict";
    module.exports = parse3;
    var fromMarkdown = require_mdast_util_from_markdown();
    function parse3(options) {
      var self = this;
      this.Parser = parse4;
      function parse4(doc) {
        return fromMarkdown(doc, Object.assign({}, self.data("settings"), options, {
          extensions: self.data("micromarkExtensions") || [],
          mdastExtensions: self.data("fromMarkdownExtensions") || []
        }));
      }
    }
  }
});

// node_modules/unist-builder/index.js
var require_unist_builder = __commonJS({
  "node_modules/unist-builder/index.js"(exports, module) {
    "use strict";
    module.exports = u;
    function u(type, props, value) {
      var node;
      if ((value === null || value === void 0) && (typeof props !== "object" || Array.isArray(props))) {
        value = props;
        props = {};
      }
      node = Object.assign({type: String(type)}, props);
      if (Array.isArray(value)) {
        node.children = value;
      } else if (value !== null && value !== void 0) {
        node.value = String(value);
      }
      return node;
    }
  }
});

// node_modules/mdast-util-to-hast/node_modules/unist-util-is/convert.js
var require_convert = __commonJS({
  "node_modules/mdast-util-to-hast/node_modules/unist-util-is/convert.js"(exports, module) {
    "use strict";
    module.exports = convert2;
    function convert2(test) {
      if (test == null) {
        return ok2;
      }
      if (typeof test === "string") {
        return typeFactory2(test);
      }
      if (typeof test === "object") {
        return "length" in test ? anyFactory2(test) : allFactory(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key])
            return false;
        }
        return true;
      }
    }
    function anyFactory2(tests) {
      var checks2 = [];
      var index = -1;
      while (++index < tests.length) {
        checks2[index] = convert2(tests[index]);
      }
      return any;
      function any() {
        var index2 = -1;
        while (++index2 < checks2.length) {
          if (checks2[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory2(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok2() {
      return true;
    }
  }
});

// node_modules/mdast-util-to-hast/node_modules/unist-util-visit-parents/color.browser.js
var require_color_browser = __commonJS({
  "node_modules/mdast-util-to-hast/node_modules/unist-util-visit-parents/color.browser.js"(exports, module) {
    module.exports = identity;
    function identity(d) {
      return d;
    }
  }
});

// node_modules/mdast-util-to-hast/node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents = __commonJS({
  "node_modules/mdast-util-to-hast/node_modules/unist-util-visit-parents/index.js"(exports, module) {
    "use strict";
    module.exports = visitParents2;
    var convert2 = require_convert();
    var color2 = require_color_browser();
    var CONTINUE2 = true;
    var SKIP2 = "skip";
    var EXIT2 = false;
    visitParents2.CONTINUE = CONTINUE2;
    visitParents2.SKIP = SKIP2;
    visitParents2.EXIT = EXIT2;
    function visitParents2(tree, test, visitor, reverse) {
      var step;
      var is;
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert2(test);
      step = reverse ? -1 : 1;
      factory(tree, null, [])();
      function factory(node, index, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          visit2.displayName = "node (" + color2(value.type + (name ? "<" + name + ">" : "")) + ")";
        }
        return visit2;
        function visit2() {
          var grandparents = parents.concat(node);
          var result = [];
          var subresult;
          var offset;
          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult2(visitor(node, parents));
            if (result[0] === EXIT2) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP2) {
            offset = (reverse ? node.children.length : -1) + step;
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT2) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    }
    function toResult2(value) {
      if (value !== null && typeof value === "object" && "length" in value) {
        return value;
      }
      if (typeof value === "number") {
        return [CONTINUE2, value];
      }
      return [value];
    }
  }
});

// node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js
var require_unist_util_visit = __commonJS({
  "node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js"(exports, module) {
    "use strict";
    module.exports = visit2;
    var visitParents2 = require_unist_util_visit_parents();
    var CONTINUE2 = visitParents2.CONTINUE;
    var SKIP2 = visitParents2.SKIP;
    var EXIT2 = visitParents2.EXIT;
    visit2.CONTINUE = CONTINUE2;
    visit2.SKIP = SKIP2;
    visit2.EXIT = EXIT2;
    function visit2(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents2(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index, parent);
      }
    }
  }
});

// node_modules/unist-util-position/index.js
var require_unist_util_position = __commonJS({
  "node_modules/unist-util-position/index.js"(exports, module) {
    "use strict";
    var start = factory("start");
    var end = factory("end");
    module.exports = position;
    position.start = start;
    position.end = end;
    function position(node) {
      return {start: start(node), end: end(node)};
    }
    function factory(type) {
      point.displayName = type;
      return point;
      function point(node) {
        var point2 = node && node.position && node.position[type] || {};
        return {
          line: point2.line || null,
          column: point2.column || null,
          offset: isNaN(point2.offset) ? null : point2.offset
        };
      }
    }
  }
});

// node_modules/unist-util-generated/index.js
var require_unist_util_generated = __commonJS({
  "node_modules/unist-util-generated/index.js"(exports, module) {
    "use strict";
    module.exports = generated;
    function generated(node) {
      return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
    }
  }
});

// node_modules/mdast-util-definitions/node_modules/unist-util-is/convert.js
var require_convert2 = __commonJS({
  "node_modules/mdast-util-definitions/node_modules/unist-util-is/convert.js"(exports, module) {
    "use strict";
    module.exports = convert2;
    function convert2(test) {
      if (test == null) {
        return ok2;
      }
      if (typeof test === "string") {
        return typeFactory2(test);
      }
      if (typeof test === "object") {
        return "length" in test ? anyFactory2(test) : allFactory(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key])
            return false;
        }
        return true;
      }
    }
    function anyFactory2(tests) {
      var checks2 = [];
      var index = -1;
      while (++index < tests.length) {
        checks2[index] = convert2(tests[index]);
      }
      return any;
      function any() {
        var index2 = -1;
        while (++index2 < checks2.length) {
          if (checks2[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory2(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok2() {
      return true;
    }
  }
});

// node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/color.browser.js
var require_color_browser2 = __commonJS({
  "node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/color.browser.js"(exports, module) {
    module.exports = identity;
    function identity(d) {
      return d;
    }
  }
});

// node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents2 = __commonJS({
  "node_modules/mdast-util-definitions/node_modules/unist-util-visit-parents/index.js"(exports, module) {
    "use strict";
    module.exports = visitParents2;
    var convert2 = require_convert2();
    var color2 = require_color_browser2();
    var CONTINUE2 = true;
    var SKIP2 = "skip";
    var EXIT2 = false;
    visitParents2.CONTINUE = CONTINUE2;
    visitParents2.SKIP = SKIP2;
    visitParents2.EXIT = EXIT2;
    function visitParents2(tree, test, visitor, reverse) {
      var step;
      var is;
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert2(test);
      step = reverse ? -1 : 1;
      factory(tree, null, [])();
      function factory(node, index, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          visit2.displayName = "node (" + color2(value.type + (name ? "<" + name + ">" : "")) + ")";
        }
        return visit2;
        function visit2() {
          var grandparents = parents.concat(node);
          var result = [];
          var subresult;
          var offset;
          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult2(visitor(node, parents));
            if (result[0] === EXIT2) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP2) {
            offset = (reverse ? node.children.length : -1) + step;
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT2) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    }
    function toResult2(value) {
      if (value !== null && typeof value === "object" && "length" in value) {
        return value;
      }
      if (typeof value === "number") {
        return [CONTINUE2, value];
      }
      return [value];
    }
  }
});

// node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js
var require_unist_util_visit2 = __commonJS({
  "node_modules/mdast-util-definitions/node_modules/unist-util-visit/index.js"(exports, module) {
    "use strict";
    module.exports = visit2;
    var visitParents2 = require_unist_util_visit_parents2();
    var CONTINUE2 = visitParents2.CONTINUE;
    var SKIP2 = visitParents2.SKIP;
    var EXIT2 = visitParents2.EXIT;
    visit2.CONTINUE = CONTINUE2;
    visit2.SKIP = SKIP2;
    visit2.EXIT = EXIT2;
    function visit2(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents2(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index, parent);
      }
    }
  }
});

// node_modules/mdast-util-definitions/index.js
var require_mdast_util_definitions = __commonJS({
  "node_modules/mdast-util-definitions/index.js"(exports, module) {
    "use strict";
    var visit2 = require_unist_util_visit2();
    module.exports = getDefinitionFactory;
    var own3 = {}.hasOwnProperty;
    function getDefinitionFactory(node, options) {
      return getterFactory(gather(node, options));
    }
    function gather(node) {
      var cache = {};
      if (!node || !node.type) {
        throw new Error("mdast-util-definitions expected node");
      }
      visit2(node, "definition", ondefinition);
      return cache;
      function ondefinition(definition) {
        var id = normalise(definition.identifier);
        if (!own3.call(cache, id)) {
          cache[id] = definition;
        }
      }
    }
    function getterFactory(cache) {
      return getter;
      function getter(identifier) {
        var id = identifier && normalise(identifier);
        return id && own3.call(cache, id) ? cache[id] : null;
      }
    }
    function normalise(identifier) {
      return identifier.toUpperCase();
    }
  }
});

// node_modules/mdast-util-to-hast/lib/all.js
var require_all = __commonJS({
  "node_modules/mdast-util-to-hast/lib/all.js"(exports, module) {
    "use strict";
    module.exports = all;
    var one = require_one();
    function all(h2, parent) {
      var nodes = parent.children || [];
      var length = nodes.length;
      var values = [];
      var index = -1;
      var result;
      var head;
      while (++index < length) {
        result = one(h2, nodes[index], parent);
        if (result) {
          if (index && nodes[index - 1].type === "break") {
            if (result.value) {
              result.value = result.value.replace(/^\s+/, "");
            }
            head = result.children && result.children[0];
            if (head && head.value) {
              head.value = head.value.replace(/^\s+/, "");
            }
          }
          values = values.concat(result);
        }
      }
      return values;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/one.js
var require_one = __commonJS({
  "node_modules/mdast-util-to-hast/lib/one.js"(exports, module) {
    "use strict";
    module.exports = one;
    var u = require_unist_builder();
    var all = require_all();
    var own3 = {}.hasOwnProperty;
    function unknown(h2, node) {
      if (text(node)) {
        return h2.augment(node, u("text", node.value));
      }
      return h2(node, "div", all(h2, node));
    }
    function one(h2, node, parent) {
      var type = node && node.type;
      var fn;
      if (!type) {
        throw new Error("Expected node, got `" + node + "`");
      }
      if (own3.call(h2.handlers, type)) {
        fn = h2.handlers[type];
      } else if (h2.passThrough && h2.passThrough.indexOf(type) > -1) {
        fn = returnNode;
      } else {
        fn = h2.unknownHandler;
      }
      return (typeof fn === "function" ? fn : unknown)(h2, node, parent);
    }
    function text(node) {
      var data = node.data || {};
      if (own3.call(data, "hName") || own3.call(data, "hProperties") || own3.call(data, "hChildren")) {
        return false;
      }
      return "value" in node;
    }
    function returnNode(h2, node) {
      var clone;
      if (node.children) {
        clone = Object.assign({}, node);
        clone.children = all(h2, node);
        return clone;
      }
      return node;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
var require_thematic_break2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"(exports, module) {
    "use strict";
    module.exports = thematicBreak;
    function thematicBreak(h2, node) {
      return h2(node, "hr");
    }
  }
});

// node_modules/mdast-util-to-hast/lib/wrap.js
var require_wrap2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/wrap.js"(exports, module) {
    "use strict";
    module.exports = wrap;
    var u = require_unist_builder();
    function wrap(nodes, loose) {
      var result = [];
      var index = -1;
      var length = nodes.length;
      if (loose) {
        result.push(u("text", "\n"));
      }
      while (++index < length) {
        if (index) {
          result.push(u("text", "\n"));
        }
        result.push(nodes[index]);
      }
      if (loose && nodes.length > 0) {
        result.push(u("text", "\n"));
      }
      return result;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list.js
var require_list2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/list.js"(exports, module) {
    "use strict";
    module.exports = list;
    var wrap = require_wrap2();
    var all = require_all();
    function list(h2, node) {
      var props = {};
      var name = node.ordered ? "ol" : "ul";
      var items;
      var index = -1;
      var length;
      if (typeof node.start === "number" && node.start !== 1) {
        props.start = node.start;
      }
      items = all(h2, node);
      length = items.length;
      while (++index < length) {
        if (items[index].properties.className && items[index].properties.className.indexOf("task-list-item") !== -1) {
          props.className = ["contains-task-list"];
          break;
        }
      }
      return h2(node, name, props, wrap(items, true));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/footer.js
var require_footer = __commonJS({
  "node_modules/mdast-util-to-hast/lib/footer.js"(exports, module) {
    "use strict";
    module.exports = generateFootnotes;
    var thematicBreak = require_thematic_break2();
    var list = require_list2();
    var wrap = require_wrap2();
    function generateFootnotes(h2) {
      var footnoteById = h2.footnoteById;
      var footnoteOrder = h2.footnoteOrder;
      var length = footnoteOrder.length;
      var index = -1;
      var listItems = [];
      var def;
      var backReference;
      var content;
      var tail;
      while (++index < length) {
        def = footnoteById[footnoteOrder[index].toUpperCase()];
        if (!def) {
          continue;
        }
        content = def.children.concat();
        tail = content[content.length - 1];
        backReference = {
          type: "link",
          url: "#fnref-" + def.identifier,
          data: {hProperties: {className: ["footnote-backref"]}},
          children: [{type: "text", value: "\u21A9"}]
        };
        if (!tail || tail.type !== "paragraph") {
          tail = {type: "paragraph", children: []};
          content.push(tail);
        }
        tail.children.push(backReference);
        listItems.push({
          type: "listItem",
          data: {hProperties: {id: "fn-" + def.identifier}},
          children: content,
          position: def.position
        });
      }
      if (listItems.length === 0) {
        return null;
      }
      return h2(null, "div", {className: ["footnotes"]}, wrap([
        thematicBreak(h2),
        list(h2, {type: "list", ordered: true, children: listItems})
      ], true));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
var require_blockquote = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"(exports, module) {
    "use strict";
    module.exports = blockquote;
    var wrap = require_wrap2();
    var all = require_all();
    function blockquote(h2, node) {
      return h2(node, "blockquote", wrap(all(h2, node), true));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/break.js
var require_break = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/break.js"(exports, module) {
    "use strict";
    module.exports = hardBreak;
    var u = require_unist_builder();
    function hardBreak(h2, node) {
      return [h2(node, "br"), u("text", "\n")];
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/code.js
var require_code = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/code.js"(exports, module) {
    "use strict";
    module.exports = code;
    var u = require_unist_builder();
    function code(h2, node) {
      var value = node.value ? node.value + "\n" : "";
      var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
      var props = {};
      var code2;
      if (lang) {
        props.className = ["language-" + lang];
      }
      code2 = h2(node, "code", props, [u("text", value)]);
      if (node.meta) {
        code2.data = {meta: node.meta};
      }
      return h2(node.position, "pre", [code2]);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/delete.js
var require_delete = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/delete.js"(exports, module) {
    "use strict";
    module.exports = strikethrough;
    var all = require_all();
    function strikethrough(h2, node) {
      return h2(node, "del", all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
var require_emphasis = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"(exports, module) {
    "use strict";
    module.exports = emphasis;
    var all = require_all();
    function emphasis(h2, node) {
      return h2(node, "em", all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
var require_footnote_reference = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"(exports, module) {
    "use strict";
    module.exports = footnoteReference;
    var u = require_unist_builder();
    function footnoteReference(h2, node) {
      var footnoteOrder = h2.footnoteOrder;
      var identifier = String(node.identifier);
      if (footnoteOrder.indexOf(identifier) === -1) {
        footnoteOrder.push(identifier);
      }
      return h2(node.position, "sup", {id: "fnref-" + identifier}, [
        h2(node, "a", {href: "#fn-" + identifier, className: ["footnote-ref"]}, [
          u("text", node.label || identifier)
        ])
      ]);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote.js
var require_footnote = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote.js"(exports, module) {
    "use strict";
    module.exports = footnote;
    var footnoteReference = require_footnote_reference();
    function footnote(h2, node) {
      var footnoteById = h2.footnoteById;
      var footnoteOrder = h2.footnoteOrder;
      var identifier = 1;
      while (identifier in footnoteById) {
        identifier++;
      }
      identifier = String(identifier);
      footnoteOrder.push(identifier);
      footnoteById[identifier] = {
        type: "footnoteDefinition",
        identifier,
        children: [{type: "paragraph", children: node.children}],
        position: node.position
      };
      return footnoteReference(h2, {
        type: "footnoteReference",
        identifier,
        position: node.position
      });
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/heading.js
var require_heading = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/heading.js"(exports, module) {
    "use strict";
    module.exports = heading;
    var all = require_all();
    function heading(h2, node) {
      return h2(node, "h" + node.depth, all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/html.js
var require_html5 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/html.js"(exports, module) {
    "use strict";
    module.exports = html3;
    var u = require_unist_builder();
    function html3(h2, node) {
      return h2.dangerous ? h2.augment(node, u("raw", node.value)) : null;
    }
  }
});

// node_modules/mdurl/encode.js
var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {
    "use strict";
    var encodeCache = {};
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = encodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }
      return cache;
    }
    function encode(string, exclude, keepEscaped) {
      var i, l, code, nextCode, cache, result = "";
      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode.defaultChars;
      }
      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }
      cache = getEncodeCache(exclude);
      for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);
        if (keepEscaped && code === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }
        if (code < 128) {
          result += cache[code];
          continue;
        }
        if (code >= 55296 && code <= 57343) {
          if (code >= 55296 && code <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 56320 && nextCode <= 57343) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result += "%EF%BF%BD";
          continue;
        }
        result += encodeURIComponent(string[i]);
      }
      return result;
    }
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    module.exports = encode;
  }
});

// node_modules/mdast-util-to-hast/lib/revert.js
var require_revert = __commonJS({
  "node_modules/mdast-util-to-hast/lib/revert.js"(exports, module) {
    "use strict";
    module.exports = revert;
    var u = require_unist_builder();
    var all = require_all();
    function revert(h2, node) {
      var subtype = node.referenceType;
      var suffix = "]";
      var contents;
      var head;
      var tail;
      if (subtype === "collapsed") {
        suffix += "[]";
      } else if (subtype === "full") {
        suffix += "[" + (node.label || node.identifier) + "]";
      }
      if (node.type === "imageReference") {
        return u("text", "![" + node.alt + suffix);
      }
      contents = all(h2, node);
      head = contents[0];
      if (head && head.type === "text") {
        head.value = "[" + head.value;
      } else {
        contents.unshift(u("text", "["));
      }
      tail = contents[contents.length - 1];
      if (tail && tail.type === "text") {
        tail.value += suffix;
      } else {
        contents.push(u("text", suffix));
      }
      return contents;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
var require_image_reference = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"(exports, module) {
    "use strict";
    module.exports = imageReference;
    var normalize2 = require_encode();
    var revert = require_revert();
    function imageReference(h2, node) {
      var def = h2.definition(node.identifier);
      var props;
      if (!def) {
        return revert(h2, node);
      }
      props = {src: normalize2(def.url || ""), alt: node.alt};
      if (def.title !== null && def.title !== void 0) {
        props.title = def.title;
      }
      return h2(node, "img", props);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image.js
var require_image = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/image.js"(exports, module) {
    "use strict";
    var normalize2 = require_encode();
    module.exports = image;
    function image(h2, node) {
      var props = {src: normalize2(node.url), alt: node.alt};
      if (node.title !== null && node.title !== void 0) {
        props.title = node.title;
      }
      return h2(node, "img", props);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
var require_inline_code = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"(exports, module) {
    "use strict";
    module.exports = inlineCode;
    var u = require_unist_builder();
    function inlineCode(h2, node) {
      var value = node.value.replace(/\r?\n|\r/g, " ");
      return h2(node, "code", [u("text", value)]);
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
var require_link_reference = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"(exports, module) {
    "use strict";
    module.exports = linkReference;
    var normalize2 = require_encode();
    var revert = require_revert();
    var all = require_all();
    function linkReference(h2, node) {
      var def = h2.definition(node.identifier);
      var props;
      if (!def) {
        return revert(h2, node);
      }
      props = {href: normalize2(def.url || "")};
      if (def.title !== null && def.title !== void 0) {
        props.title = def.title;
      }
      return h2(node, "a", props, all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link.js
var require_link = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/link.js"(exports, module) {
    "use strict";
    var normalize2 = require_encode();
    var all = require_all();
    module.exports = link;
    function link(h2, node) {
      var props = {href: normalize2(node.url)};
      if (node.title !== null && node.title !== void 0) {
        props.title = node.title;
      }
      return h2(node, "a", props, all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
var require_list_item = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/list-item.js"(exports, module) {
    "use strict";
    module.exports = listItem;
    var u = require_unist_builder();
    var all = require_all();
    function listItem(h2, node, parent) {
      var result = all(h2, node);
      var head = result[0];
      var loose = parent ? listLoose(parent) : listItemLoose(node);
      var props = {};
      var wrapped = [];
      var length;
      var index;
      var child;
      if (typeof node.checked === "boolean") {
        if (!head || head.tagName !== "p") {
          head = h2(null, "p", []);
          result.unshift(head);
        }
        if (head.children.length > 0) {
          head.children.unshift(u("text", " "));
        }
        head.children.unshift(h2(null, "input", {
          type: "checkbox",
          checked: node.checked,
          disabled: true
        }));
        props.className = ["task-list-item"];
      }
      length = result.length;
      index = -1;
      while (++index < length) {
        child = result[index];
        if (loose || index !== 0 || child.tagName !== "p") {
          wrapped.push(u("text", "\n"));
        }
        if (child.tagName === "p" && !loose) {
          wrapped = wrapped.concat(child.children);
        } else {
          wrapped.push(child);
        }
      }
      if (length && (loose || child.tagName !== "p")) {
        wrapped.push(u("text", "\n"));
      }
      return h2(node, "li", props, wrapped);
    }
    function listLoose(node) {
      var loose = node.spread;
      var children = node.children;
      var length = children.length;
      var index = -1;
      while (!loose && ++index < length) {
        loose = listItemLoose(children[index]);
      }
      return loose;
    }
    function listItemLoose(node) {
      var spread = node.spread;
      return spread === void 0 || spread === null ? node.children.length > 1 : spread;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
var require_paragraph = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"(exports, module) {
    "use strict";
    module.exports = paragraph;
    var all = require_all();
    function paragraph(h2, node) {
      return h2(node, "p", all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/root.js
var require_root = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/root.js"(exports, module) {
    "use strict";
    module.exports = root;
    var u = require_unist_builder();
    var wrap = require_wrap2();
    var all = require_all();
    function root(h2, node) {
      return h2.augment(node, u("root", wrap(all(h2, node))));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/strong.js
var require_strong = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/strong.js"(exports, module) {
    "use strict";
    module.exports = strong;
    var all = require_all();
    function strong(h2, node) {
      return h2(node, "strong", all(h2, node));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/table.js
var require_table = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/table.js"(exports, module) {
    "use strict";
    module.exports = table;
    var position = require_unist_util_position();
    var wrap = require_wrap2();
    var all = require_all();
    function table(h2, node) {
      var rows = node.children;
      var index = rows.length;
      var align = node.align || [];
      var alignLength = align.length;
      var result = [];
      var pos;
      var row;
      var out;
      var name;
      var cell;
      while (index--) {
        row = rows[index].children;
        name = index === 0 ? "th" : "td";
        pos = alignLength || row.length;
        out = [];
        while (pos--) {
          cell = row[pos];
          out[pos] = h2(cell, name, {align: align[pos]}, cell ? all(h2, cell) : []);
        }
        result[index] = h2(rows[index], "tr", wrap(out, true));
      }
      return h2(node, "table", wrap([h2(result[0].position, "thead", wrap([result[0]], true))].concat(result[1] ? h2({
        start: position.start(result[1]),
        end: position.end(result[result.length - 1])
      }, "tbody", wrap(result.slice(1), true)) : []), true));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/text.js
var require_text2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/text.js"(exports, module) {
    "use strict";
    module.exports = text;
    var u = require_unist_builder();
    function text(h2, node) {
      return h2.augment(node, u("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")));
    }
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/index.js
var require_handlers = __commonJS({
  "node_modules/mdast-util-to-hast/lib/handlers/index.js"(exports, module) {
    "use strict";
    module.exports = {
      blockquote: require_blockquote(),
      break: require_break(),
      code: require_code(),
      delete: require_delete(),
      emphasis: require_emphasis(),
      footnoteReference: require_footnote_reference(),
      footnote: require_footnote(),
      heading: require_heading(),
      html: require_html5(),
      imageReference: require_image_reference(),
      image: require_image(),
      inlineCode: require_inline_code(),
      linkReference: require_link_reference(),
      link: require_link(),
      listItem: require_list_item(),
      list: require_list2(),
      paragraph: require_paragraph(),
      root: require_root(),
      strong: require_strong(),
      table: require_table(),
      text: require_text2(),
      thematicBreak: require_thematic_break2(),
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore
    };
    function ignore() {
      return null;
    }
  }
});

// node_modules/mdast-util-to-hast/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/mdast-util-to-hast/lib/index.js"(exports, module) {
    "use strict";
    module.exports = toHast;
    var u = require_unist_builder();
    var visit2 = require_unist_util_visit();
    var position = require_unist_util_position();
    var generated = require_unist_util_generated();
    var definitions = require_mdast_util_definitions();
    var one = require_one();
    var footer = require_footer();
    var handlers = require_handlers();
    var own3 = {}.hasOwnProperty;
    var deprecationWarningIssued = false;
    function factory(tree, options) {
      var settings = options || {};
      if (settings.allowDangerousHTML !== void 0 && !deprecationWarningIssued) {
        deprecationWarningIssued = true;
        console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead");
      }
      var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML;
      var footnoteById = {};
      h2.dangerous = dangerous;
      h2.definition = definitions(tree);
      h2.footnoteById = footnoteById;
      h2.footnoteOrder = [];
      h2.augment = augment;
      h2.handlers = Object.assign({}, handlers, settings.handlers);
      h2.unknownHandler = settings.unknownHandler;
      h2.passThrough = settings.passThrough;
      visit2(tree, "footnoteDefinition", onfootnotedefinition);
      return h2;
      function augment(left, right) {
        var data;
        var ctx;
        if (left && left.data) {
          data = left.data;
          if (data.hName) {
            if (right.type !== "element") {
              right = {
                type: "element",
                tagName: "",
                properties: {},
                children: []
              };
            }
            right.tagName = data.hName;
          }
          if (right.type === "element" && data.hProperties) {
            right.properties = Object.assign({}, right.properties, data.hProperties);
          }
          if (right.children && data.hChildren) {
            right.children = data.hChildren;
          }
        }
        ctx = left && left.position ? left : {position: left};
        if (!generated(ctx)) {
          right.position = {
            start: position.start(ctx),
            end: position.end(ctx)
          };
        }
        return right;
      }
      function h2(node, tagName, props, children) {
        if ((children === void 0 || children === null) && typeof props === "object" && "length" in props) {
          children = props;
          props = {};
        }
        return augment(node, {
          type: "element",
          tagName,
          properties: props || {},
          children: children || []
        });
      }
      function onfootnotedefinition(definition) {
        var id = String(definition.identifier).toUpperCase();
        if (!own3.call(footnoteById, id)) {
          footnoteById[id] = definition;
        }
      }
    }
    function toHast(tree, options) {
      var h2 = factory(tree, options);
      var node = one(h2, tree);
      var foot = footer(h2);
      if (foot) {
        node.children = node.children.concat(u("text", "\n"), foot);
      }
      return node;
    }
  }
});

// node_modules/mdast-util-to-hast/index.js
var require_mdast_util_to_hast = __commonJS({
  "node_modules/mdast-util-to-hast/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib2();
  }
});

// node_modules/remark-rehype/index.js
var require_remark_rehype = __commonJS({
  "node_modules/remark-rehype/index.js"(exports, module) {
    "use strict";
    var mdast2hast = require_mdast_util_to_hast();
    module.exports = remark2rehype;
    function remark2rehype(destination, options) {
      if (destination && !destination.process) {
        options = destination;
        destination = null;
      }
      return destination ? bridge(destination, options) : mutate(options);
    }
    function bridge(destination, options) {
      return transformer;
      function transformer(node, file, next) {
        destination.run(mdast2hast(node, options), file, done);
        function done(error) {
          next(error);
        }
      }
    }
    function mutate(options) {
      return transformer;
      function transformer(node) {
        return mdast2hast(node, options);
      }
    }
  }
});

// node_modules/onigasm/lib/onigasm.js
var require_onigasm = __commonJS({
  "node_modules/onigasm/lib/onigasm.js"(exports, module) {
    var Onigasm = function() {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      return function(Onigasm2) {
        Onigasm2 = Onigasm2 || {};
        var Module = typeof Onigasm2 !== "undefined" ? Onigasm2 : {};
        var moduleOverrides = {};
        var key;
        for (key in Module) {
          if (Module.hasOwnProperty(key)) {
            moduleOverrides[key] = Module[key];
          }
        }
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = function(status, toThrow) {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = false;
        var ENVIRONMENT_IS_WORKER = false;
        var ENVIRONMENT_IS_NODE = false;
        var ENVIRONMENT_IS_SHELL = true;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readBinary;
        if (ENVIRONMENT_IS_SHELL) {
          if (typeof read != "undefined") {
            read_ = function shell_read(f) {
              return read(f);
            };
          }
          readBinary = function readBinary2(f) {
            var data;
            if (typeof readbuffer === "function") {
              return new Uint8Array(readbuffer(f));
            }
            data = read(f, "binary");
            assert(typeof data === "object");
            return data;
          };
          if (typeof scriptArgs != "undefined") {
            arguments_ = scriptArgs;
          } else if (typeof arguments != "undefined") {
            arguments_ = arguments;
          }
          if (typeof quit === "function") {
            quit_ = function(status) {
              quit(status);
            };
          }
          if (typeof print !== "undefined") {
            if (typeof console === "undefined")
              console = {};
            console.log = print;
            console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
          }
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        for (key in moduleOverrides) {
          if (moduleOverrides.hasOwnProperty(key)) {
            Module[key] = moduleOverrides[key];
          }
        }
        moduleOverrides = null;
        if (Module["arguments"])
          arguments_ = Module["arguments"];
        if (Module["thisProgram"])
          thisProgram = Module["thisProgram"];
        if (Module["quit"])
          quit_ = Module["quit"];
        var STACK_ALIGN = 16;
        function dynamicAlloc(size) {
          var ret = HEAP32[DYNAMICTOP_PTR >> 2];
          var end = ret + size + 15 & -16;
          if (end > _emscripten_get_heap_size()) {
            abort();
          }
          HEAP32[DYNAMICTOP_PTR >> 2] = end;
          return ret;
        }
        function getNativeTypeSize(type) {
          switch (type) {
            case "i1":
            case "i8":
              return 1;
            case "i16":
              return 2;
            case "i32":
              return 4;
            case "i64":
              return 8;
            case "float":
              return 4;
            case "double":
              return 8;
            default: {
              if (type[type.length - 1] === "*") {
                return 4;
              } else if (type[0] === "i") {
                var bits = parseInt(type.substr(1));
                assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
                return bits / 8;
              } else {
                return 0;
              }
            }
          }
        }
        function warnOnce(text) {
          if (!warnOnce.shown)
            warnOnce.shown = {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err(text);
          }
        }
        function convertJsFunctionToWasm(func, sig) {
          var typeSection = [1, 0, 1, 96];
          var sigRet = sig.slice(0, 1);
          var sigParam = sig.slice(1);
          var typeCodes = {"i": 127, "j": 126, "f": 125, "d": 124};
          typeSection.push(sigParam.length);
          for (var i = 0; i < sigParam.length; ++i) {
            typeSection.push(typeCodes[sigParam[i]]);
          }
          if (sigRet == "v") {
            typeSection.push(0);
          } else {
            typeSection = typeSection.concat([1, typeCodes[sigRet]]);
          }
          typeSection[1] = typeSection.length - 2;
          var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
          var module2 = new WebAssembly.Module(bytes);
          var instance = new WebAssembly.Instance(module2, {e: {f: func}});
          var wrappedFunc = instance.exports.f;
          return wrappedFunc;
        }
        function addFunctionWasm(func, sig) {
          var table = wasmTable;
          var ret = table.length;
          try {
            table.grow(1);
          } catch (err2) {
            if (!err2 instanceof RangeError) {
              throw err2;
            }
            throw "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.";
          }
          try {
            table.set(ret, func);
          } catch (err2) {
            if (!err2 instanceof TypeError) {
              throw err2;
            }
            assert(typeof sig !== "undefined", "Missing signature argument to addFunction");
            var wrapped = convertJsFunctionToWasm(func, sig);
            table.set(ret, wrapped);
          }
          return ret;
        }
        function removeFunctionWasm(index) {
        }
        var funcWrappers = {};
        function dynCall(sig, ptr, args) {
          if (args && args.length) {
            return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
          } else {
            return Module["dynCall_" + sig].call(null, ptr);
          }
        }
        var tempRet0 = 0;
        var setTempRet0 = function(value) {
          tempRet0 = value;
        };
        var wasmBinary;
        if (Module["wasmBinary"])
          wasmBinary = Module["wasmBinary"];
        var noExitRuntime;
        if (Module["noExitRuntime"])
          noExitRuntime = Module["noExitRuntime"];
        if (typeof WebAssembly !== "object") {
          err("no native wasm support detected");
        }
        function setValue(ptr, value, type, noSafe) {
          type = type || "i8";
          if (type.charAt(type.length - 1) === "*")
            type = "i32";
          switch (type) {
            case "i1":
              HEAP8[ptr >> 0] = value;
              break;
            case "i8":
              HEAP8[ptr >> 0] = value;
              break;
            case "i16":
              HEAP16[ptr >> 1] = value;
              break;
            case "i32":
              HEAP32[ptr >> 2] = value;
              break;
            case "i64":
              tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
              break;
            case "float":
              HEAPF32[ptr >> 2] = value;
              break;
            case "double":
              HEAPF64[ptr >> 3] = value;
              break;
            default:
              abort("invalid type for setValue: " + type);
          }
        }
        var wasmMemory;
        var wasmTable = new WebAssembly.Table({"initial": 244, "maximum": 244 + 0, "element": "anyfunc"});
        var ABORT = false;
        var EXITSTATUS = 0;
        function assert(condition, text) {
          if (!condition) {
            abort("Assertion failed: " + text);
          }
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
          return func;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = {"string": function(str) {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": function(arr) {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          }};
          function convertReturnValue(ret2) {
            if (returnType === "string")
              return UTF8ToString(ret2);
            if (returnType === "boolean")
              return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0)
                  stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          ret = convertReturnValue(ret);
          if (stack !== 0)
            stackRestore(stack);
          return ret;
        }
        var ALLOC_NONE = 3;
        var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (u8Array[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
          if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
            return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
          } else {
            var str = "";
            while (idx < endPtr) {
              var u0 = u8Array[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = u8Array[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = u8Array[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx)
                break;
              outU8Array[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx)
                break;
              outU8Array[outIdx++] = 192 | u >> 6;
              outU8Array[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx)
                break;
              outU8Array[outIdx++] = 224 | u >> 12;
              outU8Array[outIdx++] = 128 | u >> 6 & 63;
              outU8Array[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx)
                break;
              outU8Array[outIdx++] = 240 | u >> 18;
              outU8Array[outIdx++] = 128 | u >> 12 & 63;
              outU8Array[outIdx++] = 128 | u >> 6 & 63;
              outU8Array[outIdx++] = 128 | u & 63;
            }
          }
          outU8Array[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343)
              u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
            if (u <= 127)
              ++len;
            else if (u <= 2047)
              len += 2;
            else if (u <= 65535)
              len += 3;
            else
              len += 4;
          }
          return len;
        }
        var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
        function writeArrayToMemory(array, buffer2) {
          HEAP8.set(array, buffer2);
        }
        function writeAsciiToMemory(str, buffer2, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull)
            HEAP8[buffer2 >> 0] = 0;
        }
        var WASM_PAGE_SIZE = 65536;
        function alignUp(x, multiple) {
          if (x % multiple > 0) {
            x += multiple - x % multiple;
          }
          return x;
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var STACK_BASE = 5507664, DYNAMIC_BASE = 5507664, DYNAMICTOP_PTR = 264624;
        var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 157286400;
        if (Module["wasmMemory"]) {
          wasmMemory = Module["wasmMemory"];
        } else {
          wasmMemory = new WebAssembly.Memory({"initial": INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE});
        }
        if (wasmMemory) {
          buffer = wasmMemory.buffer;
        }
        INITIAL_TOTAL_MEMORY = buffer.byteLength;
        updateGlobalBufferAndViews(buffer);
        HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            var callback = callbacks.shift();
            if (typeof callback == "function") {
              callback();
              continue;
            }
            var func = callback.func;
            if (typeof func === "number") {
              if (callback.arg === void 0) {
                Module["dynCall_v"](func);
              } else {
                Module["dynCall_vi"](func, callback.arg);
              }
            } else {
              func(callback.arg === void 0 ? null : callback.arg);
            }
          }
        }
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATMAIN__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeExited = false;
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
              Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
          callRuntimeCallbacks(__ATMAIN__);
        }
        function exitRuntime() {
          runtimeExited = true;
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
              Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var Math_abs = Math.abs;
        var Math_ceil = Math.ceil;
        var Math_floor = Math.floor;
        var Math_min = Math.min;
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        Module["preloadedImages"] = {};
        Module["preloadedAudios"] = {};
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what += "";
          out(what);
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
          throw new WebAssembly.RuntimeError(what);
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
        }
        var wasmBinaryFile = "onigasm.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary() {
          try {
            if (wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(wasmBinaryFile);
            } else {
              throw "both async and sync fetching of the wasm failed";
            }
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
            return fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function(response) {
              if (!response["ok"]) {
                throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
              }
              return response["arrayBuffer"]();
            }).catch(function() {
              return getBinary();
            });
          }
          return new Promise(function(resolve, reject) {
            resolve(getBinary());
          });
        }
        function createWasm() {
          var info = {"env": asmLibraryArg, "wasi_unstable": asmLibraryArg};
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module["asm"] = exports3;
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiatedSource(output) {
            receiveInstance(output["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
              fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiatedSource, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  instantiateArrayBuffer(receiveInstantiatedSource);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiatedSource);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              return false;
            }
          }
          instantiateAsync();
          return {};
        }
        var tempDouble;
        var tempI64;
        __ATINIT__.push({func: function() {
          ___wasm_call_ctors();
        }});
        function demangle(func) {
          var __cxa_demangle_func = Module["___cxa_demangle"] || Module["__cxa_demangle"];
          assert(__cxa_demangle_func);
          try {
            var s3 = func;
            if (s3.startsWith("__Z"))
              s3 = s3.substr(1);
            var len = lengthBytesUTF8(s3) + 1;
            var buf = _malloc(len);
            stringToUTF8(s3, buf, len);
            var status = _malloc(4);
            var ret = __cxa_demangle_func(buf, 0, 0, status);
            if (HEAP32[status >> 2] === 0 && ret) {
              return UTF8ToString(ret);
            }
          } catch (e) {
          } finally {
            if (buf)
              _free(buf);
            if (status)
              _free(status);
            if (ret)
              _free(ret);
          }
          return func;
        }
        function demangleAll(text) {
          var regex = /\b_Z[\w\d_]+/g;
          return text.replace(regex, function(x) {
            var y = demangle(x);
            return x === y ? x : y + " [" + x + "]";
          });
        }
        function jsStackTrace() {
          var err2 = new Error();
          if (!err2.stack) {
            try {
              throw new Error(0);
            } catch (e) {
              err2 = e;
            }
            if (!err2.stack) {
              return "(no stack trace available)";
            }
          }
          return err2.stack.toString();
        }
        function _abort() {
          abort();
        }
        function _emscripten_get_heap_size() {
          return HEAP8.length;
        }
        function _emscripten_get_sbrk_ptr() {
          return 264624;
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = _emscripten_get_heap_size();
          var PAGE_MULTIPLE = 65536;
          var LIMIT = 2147483648 - PAGE_MULTIPLE;
          if (requestedSize > LIMIT) {
            return false;
          }
          var MIN_TOTAL_MEMORY = 16777216;
          var newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);
          while (newSize < requestedSize) {
            if (newSize <= 536870912) {
              newSize = alignUp(2 * newSize, PAGE_MULTIPLE);
            } else {
              newSize = Math.min(alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE), LIMIT);
            }
          }
          var replacement = emscripten_realloc_buffer(newSize);
          if (!replacement) {
            return false;
          }
          return true;
        }
        var PATH = {splitPath: function(filename) {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        }, normalizeArray: function(parts, allowAboveRoot) {
          var up = 0;
          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }
          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift("..");
            }
          }
          return parts;
        }, normalize: function(path) {
          var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
          path = PATH.normalizeArray(path.split("/").filter(function(p) {
            return !!p;
          }), !isAbsolute).join("/");
          if (!path && !isAbsolute) {
            path = ".";
          }
          if (path && trailingSlash) {
            path += "/";
          }
          return (isAbsolute ? "/" : "") + path;
        }, dirname: function(path) {
          var result = PATH.splitPath(path), root = result[0], dir = result[1];
          if (!root && !dir) {
            return ".";
          }
          if (dir) {
            dir = dir.substr(0, dir.length - 1);
          }
          return root + dir;
        }, basename: function(path) {
          if (path === "/")
            return "/";
          var lastSlash = path.lastIndexOf("/");
          if (lastSlash === -1)
            return path;
          return path.substr(lastSlash + 1);
        }, extname: function(path) {
          return PATH.splitPath(path)[3];
        }, join: function() {
          var paths = Array.prototype.slice.call(arguments, 0);
          return PATH.normalize(paths.join("/"));
        }, join2: function(l, r) {
          return PATH.normalize(l + "/" + r);
        }};
        var SYSCALLS = {buffers: [null, [], []], printChar: function(stream, curr) {
          var buffer2 = SYSCALLS.buffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
            buffer2.length = 0;
          } else {
            buffer2.push(curr);
          }
        }, varargs: 0, get: function(varargs) {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function() {
          var ret = UTF8ToString(SYSCALLS.get());
          return ret;
        }, get64: function() {
          var low = SYSCALLS.get(), high = SYSCALLS.get();
          return low;
        }, getZero: function() {
          SYSCALLS.get();
        }};
        function _fd_close(fd) {
          try {
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
              abort(e);
            return e.errno;
          }
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          try {
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
              abort(e);
            return e.errno;
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          try {
            var num = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAP32[iov + i * 8 >> 2];
              var len = HEAP32[iov + (i * 8 + 4) >> 2];
              for (var j = 0; j < len; j++) {
                SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
              }
              num += len;
            }
            HEAP32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
              abort(e);
            return e.errno;
          }
        }
        function _setTempRet0($i) {
          setTempRet0($i | 0);
        }
        var ASSERTIONS = false;
        var asmLibraryArg = {"abort": _abort, "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "fd_close": _fd_close, "fd_seek": _fd_seek, "fd_write": _fd_write, "memory": wasmMemory, "setTempRet0": _setTempRet0, "table": wasmTable};
        var asm = createWasm();
        Module["asm"] = asm;
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
          return Module["asm"]["__wasm_call_ctors"].apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return Module["asm"]["malloc"].apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return Module["asm"]["free"].apply(null, arguments);
        };
        var _getLastError = Module["_getLastError"] = function() {
          return Module["asm"]["getLastError"].apply(null, arguments);
        };
        var _compilePattern = Module["_compilePattern"] = function() {
          return Module["asm"]["compilePattern"].apply(null, arguments);
        };
        var _disposeCompiledPatterns = Module["_disposeCompiledPatterns"] = function() {
          return Module["asm"]["disposeCompiledPatterns"].apply(null, arguments);
        };
        var _findBestMatch = Module["_findBestMatch"] = function() {
          return Module["asm"]["findBestMatch"].apply(null, arguments);
        };
        var ___cxa_demangle = Module["___cxa_demangle"] = function() {
          return Module["asm"]["__cxa_demangle"].apply(null, arguments);
        };
        var _setThrew = Module["_setThrew"] = function() {
          return Module["asm"]["setThrew"].apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
          return Module["asm"]["stackSave"].apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
          return Module["asm"]["stackAlloc"].apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
          return Module["asm"]["stackRestore"].apply(null, arguments);
        };
        var __growWasmMemory = Module["__growWasmMemory"] = function() {
          return Module["asm"]["__growWasmMemory"].apply(null, arguments);
        };
        var dynCall_vi = Module["dynCall_vi"] = function() {
          return Module["asm"]["dynCall_vi"].apply(null, arguments);
        };
        var dynCall_iiii = Module["dynCall_iiii"] = function() {
          return Module["asm"]["dynCall_iiii"].apply(null, arguments);
        };
        var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
          return Module["asm"]["dynCall_iiiii"].apply(null, arguments);
        };
        var dynCall_iii = Module["dynCall_iii"] = function() {
          return Module["asm"]["dynCall_iii"].apply(null, arguments);
        };
        var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
          return Module["asm"]["dynCall_iidiiii"].apply(null, arguments);
        };
        var dynCall_vii = Module["dynCall_vii"] = function() {
          return Module["asm"]["dynCall_vii"].apply(null, arguments);
        };
        var dynCall_ii = Module["dynCall_ii"] = function() {
          return Module["asm"]["dynCall_ii"].apply(null, arguments);
        };
        var dynCall_i = Module["dynCall_i"] = function() {
          return Module["asm"]["dynCall_i"].apply(null, arguments);
        };
        var dynCall_v = Module["dynCall_v"] = function() {
          return Module["asm"]["dynCall_v"].apply(null, arguments);
        };
        var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
          return Module["asm"]["dynCall_viiiiii"].apply(null, arguments);
        };
        var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
          return Module["asm"]["dynCall_viiiii"].apply(null, arguments);
        };
        var dynCall_viiii = Module["dynCall_viiii"] = function() {
          return Module["asm"]["dynCall_viiii"].apply(null, arguments);
        };
        var dynCall_jiji = Module["dynCall_jiji"] = function() {
          return Module["asm"]["dynCall_jiji"].apply(null, arguments);
        };
        Module["asm"] = asm;
        Module["ccall"] = ccall;
        var calledRun;
        Module["then"] = function(func) {
          if (calledRun) {
            func(Module);
          } else {
            var old = Module["onRuntimeInitialized"];
            Module["onRuntimeInitialized"] = function() {
              if (old)
                old();
              func(Module);
            };
          }
          return Module;
        };
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        dependenciesFulfilled = function runCaller() {
          if (!calledRun)
            run();
          if (!calledRun)
            dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0)
            return;
          function doRun() {
            if (calledRun)
              return;
            calledRun = true;
            if (ABORT)
              return;
            initRuntime();
            preMain();
            if (Module["onRuntimeInitialized"])
              Module["onRuntimeInitialized"]();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        Module["run"] = run;
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        noExitRuntime = true;
        run();
        return Onigasm2;
      };
    }();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = Onigasm;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return Onigasm;
      });
    else if (typeof exports === "object")
      exports["Onigasm"] = Onigasm;
  }
});

// node_modules/onigasm/lib/onigasmH.js
var require_onigasmH = __commonJS({
  "node_modules/onigasm/lib/onigasmH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var OnigasmModuleFactory = require_onigasm();
    async function initModule(bytes) {
      return new Promise((resolve, reject) => {
        const {log, warn, error} = console;
        OnigasmModuleFactory({
          instantiateWasm(imports, successCallback) {
            WebAssembly.instantiate(bytes, imports).then((output) => {
              successCallback(output.instance);
            }).catch((e) => {
              throw e;
            });
            return {};
          }
        }).then((moduleH) => {
          exports.onigasmH = moduleH;
          resolve();
        });
        if (typeof print !== "undefined") {
          console.log = log;
          console.error = error;
          console.warn = warn;
        }
      });
    }
    var isInitialized = false;
    async function loadWASM2(data) {
      if (isInitialized) {
        throw new Error(`Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized`);
      }
      if (typeof data === "string") {
        const arrayBuffer = await (await fetch(data)).arrayBuffer();
        await initModule(arrayBuffer);
      } else if (data instanceof ArrayBuffer) {
        await initModule(data);
      } else {
        throw new TypeError(`Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter`);
      }
      isInitialized = true;
    }
    exports.loadWASM = loadWASM2;
  }
});

// node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/yallist/iterator.js"(exports, module) {
    "use strict";
    module.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module) {
    "use strict";
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 2; i < arguments.length; i++) {
        walker = insert(this, walker, arguments[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self, node, value) {
      var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }
      self.length++;
      return inserted;
    }
    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/lru-cache/index.js"(exports, module) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = {max: options};
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h2) => h2);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self, key, doUse) => {
      const node = self[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
          del(self, node);
          if (!self[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self, hit) => {
      if (!hit || !hit.maxAge && !self[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
    };
    var trim = (self) => {
      if (self[LENGTH] > self[MAX]) {
        for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self, walker);
          walker = prev;
        }
      }
    };
    var del = (self, node) => {
      if (node) {
        const hit = node.value;
        if (self[DISPOSE])
          self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self);
    };
    module.exports = LRUCache;
  }
});

// node_modules/onigasm/lib/OnigString.js
var require_OnigString = __commonJS({
  "node_modules/onigasm/lib/OnigString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var OnigString2 = class {
      constructor(content) {
        this.substring = (start, end) => {
          return this.source.substring(start, end);
        };
        this.toString = (start, end) => {
          return this.source;
        };
        if (typeof content !== "string") {
          throw new TypeError("Argument must be a string");
        }
        this.source = content;
        this._utf8Bytes = null;
        this._utf8Indexes = null;
      }
      get utf8Bytes() {
        if (!this._utf8Bytes) {
          this.encode();
        }
        return this._utf8Bytes;
      }
      get utf8Indexes() {
        if (!this._utf8Bytes) {
          this.encode();
        }
        return this._utf8Indexes;
      }
      get content() {
        return this.source;
      }
      get length() {
        return this.source.length;
      }
      get hasMultiByteCharacters() {
        return this.utf8Indexes !== null;
      }
      convertUtf8OffsetToUtf16(utf8Offset) {
        if (utf8Offset < 0) {
          return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf8Offset >= utf8Array.length - 1) {
          return this.source.length;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf8Offset >= this._mappingTableStartOffset) {
          return findFirstInSorted(utf8OffsetMap, utf8Offset - this._mappingTableStartOffset) + this._mappingTableStartOffset;
        }
        return utf8Offset;
      }
      convertUtf16OffsetToUtf8(utf16Offset) {
        if (utf16Offset < 0) {
          return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf16Offset >= this.source.length) {
          return utf8Array.length - 1;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf16Offset >= this._mappingTableStartOffset) {
          return utf8OffsetMap[utf16Offset - this._mappingTableStartOffset] + this._mappingTableStartOffset;
        }
        return utf16Offset;
      }
      encode() {
        const str = this.source;
        const n = str.length;
        let utf16OffsetToUtf8;
        let utf8Offset = 0;
        let mappingTableStartOffset = 0;
        function createOffsetTable(startOffset) {
          const maxUtf8Len = (n - startOffset) * 3;
          if (maxUtf8Len <= 255) {
            utf16OffsetToUtf8 = new Uint8Array(n - startOffset);
          } else if (maxUtf8Len <= 65535) {
            utf16OffsetToUtf8 = new Uint16Array(n - startOffset);
          } else {
            utf16OffsetToUtf8 = new Uint32Array(n - startOffset);
          }
          mappingTableStartOffset = startOffset;
          utf16OffsetToUtf8[utf8Offset++] = 0;
        }
        const u8view = new Uint8Array(n * 3 + 1);
        let ptrHead = 0;
        let i = 0;
        while (i < str.length) {
          let codepoint;
          const c = str.charCodeAt(i);
          if (utf16OffsetToUtf8) {
            utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
          }
          if (c < 55296 || c > 57343) {
            codepoint = c;
          } else if (c >= 56320) {
            codepoint = 65533;
          } else {
            if (i === n - 1) {
              codepoint = 65533;
            } else {
              const d = str.charCodeAt(i + 1);
              if (56320 <= d && d <= 57343) {
                if (!utf16OffsetToUtf8) {
                  createOffsetTable(i);
                }
                const a = c & 1023;
                const b = d & 1023;
                codepoint = 65536 + (a << 10) + b;
                i += 1;
                utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
              } else {
                codepoint = 65533;
              }
            }
          }
          let bytesRequiredToEncode;
          let offset;
          if (codepoint <= 127) {
            bytesRequiredToEncode = 1;
            offset = 0;
          } else if (codepoint <= 2047) {
            bytesRequiredToEncode = 2;
            offset = 192;
          } else if (codepoint <= 65535) {
            bytesRequiredToEncode = 3;
            offset = 224;
          } else {
            bytesRequiredToEncode = 4;
            offset = 240;
          }
          if (bytesRequiredToEncode === 1) {
            u8view[ptrHead++] = codepoint;
          } else {
            if (!utf16OffsetToUtf8) {
              createOffsetTable(ptrHead);
            }
            u8view[ptrHead++] = (codepoint >> 6 * --bytesRequiredToEncode) + offset;
            while (bytesRequiredToEncode > 0) {
              const temp = codepoint >> 6 * (bytesRequiredToEncode - 1);
              u8view[ptrHead++] = 128 | temp & 63;
              bytesRequiredToEncode -= 1;
            }
          }
          i += 1;
        }
        const utf8 = u8view.slice(0, ptrHead + 1);
        utf8[ptrHead] = 0;
        this._utf8Bytes = utf8;
        if (utf16OffsetToUtf8) {
          this._utf8Indexes = utf16OffsetToUtf8;
          this._mappingTableStartOffset = mappingTableStartOffset;
        }
      }
    };
    function findFirstInSorted(array, i) {
      let low = 0;
      let high = array.length;
      if (high === 0) {
        return 0;
      }
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] >= i) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      while (low > 0 && (low >= array.length || array[low] > i)) {
        low--;
      }
      if (low > 0 && array[low] === array[low - 1]) {
        low--;
      }
      return low;
    }
    exports.default = OnigString2;
  }
});

// node_modules/onigasm/lib/OnigScanner.js
var require_OnigScanner = __commonJS({
  "node_modules/onigasm/lib/OnigScanner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var LRUCache = require_lru_cache();
    var onigasmH_1 = require_onigasmH();
    var OnigString_1 = require_OnigString();
    function mallocAndWriteString(str) {
      const ptr = onigasmH_1.onigasmH._malloc(str.utf8Bytes.length);
      onigasmH_1.onigasmH.HEAPU8.set(str.utf8Bytes, ptr);
      return ptr;
    }
    function convertUTF8BytesFromPtrToString(ptr) {
      const chars = [];
      let i = 0;
      while (onigasmH_1.onigasmH.HEAPU8[ptr] !== 0) {
        chars[i++] = onigasmH_1.onigasmH.HEAPU8[ptr++];
      }
      return chars.join();
    }
    var cache = new LRUCache({
      dispose: (scanner, info) => {
        const regexTPtrsPtr = onigasmH_1.onigasmH._malloc(info.regexTPtrs.length);
        onigasmH_1.onigasmH.HEAPU8.set(info.regexTPtrs, regexTPtrsPtr);
        const status = onigasmH_1.onigasmH._disposeCompiledPatterns(regexTPtrsPtr, scanner.patterns.length);
        if (status !== 0) {
          const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1.onigasmH._getLastError());
          throw new Error(errMessage);
        }
        onigasmH_1.onigasmH._free(regexTPtrsPtr);
      },
      max: 1e3
    });
    var OnigScanner2 = class {
      constructor(patterns) {
        if (onigasmH_1.onigasmH === null) {
          throw new Error(`Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API`);
        }
        for (let i = 0; i < patterns.length; i++) {
          const pattern = patterns[i];
          if (typeof pattern !== "string") {
            throw new TypeError(`First parameter to OnigScanner constructor must be array of (pattern) strings`);
          }
        }
        this.sources = patterns.slice();
      }
      get patterns() {
        return this.sources.slice();
      }
      findNextMatch(string, startPosition, callback) {
        if (startPosition == null) {
          startPosition = 0;
        }
        if (typeof startPosition === "function") {
          callback = startPosition;
          startPosition = 0;
        }
        try {
          const match = this.findNextMatchSync(string, startPosition);
          callback(null, match);
        } catch (error) {
          callback(error);
        }
      }
      findNextMatchSync(string, startPosition) {
        if (startPosition == null) {
          startPosition = 0;
        }
        startPosition = this.convertToNumber(startPosition);
        let onigNativeInfo = cache.get(this);
        let status = 0;
        if (!onigNativeInfo) {
          const regexTAddrRecieverPtr = onigasmH_1.onigasmH._malloc(4);
          const regexTPtrs = [];
          for (let i = 0; i < this.sources.length; i++) {
            const pattern = this.sources[i];
            const patternStrPtr = mallocAndWriteString(new OnigString_1.default(pattern));
            status = onigasmH_1.onigasmH._compilePattern(patternStrPtr, regexTAddrRecieverPtr);
            if (status !== 0) {
              const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1.onigasmH._getLastError());
              throw new Error(errMessage);
            }
            const regexTAddress = onigasmH_1.onigasmH.HEAP32[regexTAddrRecieverPtr / 4];
            regexTPtrs.push(regexTAddress);
            onigasmH_1.onigasmH._free(patternStrPtr);
          }
          onigNativeInfo = {
            regexTPtrs: new Uint8Array(Uint32Array.from(regexTPtrs).buffer)
          };
          onigasmH_1.onigasmH._free(regexTAddrRecieverPtr);
          cache.set(this, onigNativeInfo);
        }
        const onigString = string instanceof OnigString_1.default ? string : new OnigString_1.default(this.convertToString(string));
        const strPtr = mallocAndWriteString(onigString);
        const resultInfoReceiverPtr = onigasmH_1.onigasmH._malloc(8);
        const regexTPtrsPtr = onigasmH_1.onigasmH._malloc(onigNativeInfo.regexTPtrs.length);
        onigasmH_1.onigasmH.HEAPU8.set(onigNativeInfo.regexTPtrs, regexTPtrsPtr);
        status = onigasmH_1.onigasmH._findBestMatch(regexTPtrsPtr, this.sources.length, strPtr, onigString.utf8Bytes.length - 1, onigString.convertUtf16OffsetToUtf8(startPosition), resultInfoReceiverPtr);
        if (status !== 0) {
          const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1.onigasmH._getLastError());
          throw new Error(errMessage);
        }
        const [
          bestPatternIdx,
          encodedResultBeginAddress,
          encodedResultLength
        ] = new Uint32Array(onigasmH_1.onigasmH.HEAPU32.buffer, resultInfoReceiverPtr, 3);
        onigasmH_1.onigasmH._free(strPtr);
        onigasmH_1.onigasmH._free(resultInfoReceiverPtr);
        onigasmH_1.onigasmH._free(regexTPtrsPtr);
        if (encodedResultLength > 0) {
          const encodedResult = new Uint32Array(onigasmH_1.onigasmH.HEAPU32.buffer, encodedResultBeginAddress, encodedResultLength);
          const captureIndices = [];
          let i = 0;
          let captureIdx = 0;
          while (i < encodedResultLength) {
            const index = captureIdx++;
            let start = encodedResult[i++];
            let end = encodedResult[i++];
            if (onigString.hasMultiByteCharacters) {
              start = onigString.convertUtf8OffsetToUtf16(start);
              end = onigString.convertUtf8OffsetToUtf16(end);
            }
            captureIndices.push({
              end,
              index,
              length: end - start,
              start
            });
          }
          onigasmH_1.onigasmH._free(encodedResultBeginAddress);
          return {
            captureIndices,
            index: bestPatternIdx,
            scanner: this
          };
        }
        return null;
      }
      convertToString(value) {
        if (value === void 0) {
          return "undefined";
        }
        if (value === null) {
          return "null";
        }
        if (value instanceof OnigString_1.default) {
          return value.content;
        }
        return value.toString();
      }
      convertToNumber(value) {
        value = parseInt(value, 10);
        if (!isFinite(value)) {
          value = 0;
        }
        value = Math.max(value, 0);
        return value;
      }
    };
    exports.OnigScanner = OnigScanner2;
    exports.default = OnigScanner2;
  }
});

// node_modules/onigasm/lib/OnigRegExp.js
var require_OnigRegExp = __commonJS({
  "node_modules/onigasm/lib/OnigRegExp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var OnigScanner_1 = require_OnigScanner();
    var OnigRegExp = class {
      constructor(source) {
        this.source = source;
        try {
          this.scanner = new OnigScanner_1.default([this.source]);
        } catch (error) {
        }
      }
      searchSync(string, startPosition) {
        let match;
        if (startPosition == null) {
          startPosition = 0;
        }
        match = this.scanner.findNextMatchSync(string, startPosition);
        return this.captureIndicesForMatch(string, match);
      }
      search(string, startPosition, callback) {
        if (startPosition == null) {
          startPosition = 0;
        }
        if (typeof startPosition === "function") {
          callback = startPosition;
          startPosition = 0;
        }
        try {
          const ret = this.searchSync(string, startPosition);
          callback(null, ret);
        } catch (error) {
          callback(error);
        }
      }
      testSync(string) {
        if (typeof this.source === "boolean" || typeof string === "boolean") {
          return this.source === string;
        }
        return this.searchSync(string) != null;
      }
      test(string, callback) {
        if (typeof callback !== "function") {
          callback = () => {
          };
        }
        try {
          callback(null, this.testSync(string));
        } catch (error) {
          callback(error);
        }
      }
      captureIndicesForMatch(string, match) {
        if (match != null) {
          const {captureIndices} = match;
          let capture;
          string = this.scanner.convertToString(string);
          for (let i = 0; i < captureIndices.length; i++) {
            capture = captureIndices[i];
            capture.match = string.slice(capture.start, capture.end);
          }
          return captureIndices;
        } else {
          return null;
        }
      }
    };
    exports.default = OnigRegExp;
  }
});

// node_modules/onigasm/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/onigasm/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var onigasmH_1 = require_onigasmH();
    exports.loadWASM = onigasmH_1.loadWASM;
    var OnigRegExp_1 = require_OnigRegExp();
    exports.OnigRegExp = OnigRegExp_1.default;
    var OnigScanner_1 = require_OnigScanner();
    exports.OnigScanner = OnigScanner_1.default;
    var OnigString_1 = require_OnigString();
    exports.OnigString = OnigString_1.default;
  }
});

// node_modules/vscode-textmate/release/main.js
var require_main = __commonJS({
  "node_modules/vscode-textmate/release/main.js"(exports, module) {
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.vscodetextmate = t() : e.vscodetextmate = t();
    }(exports, function() {
      return (() => {
        "use strict";
        var e = {350: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.UseOnigurumaFindOptions = t2.DebugFlags = void 0, t2.DebugFlags = {InDebugMode: typeof process != "undefined" && !!process.env.VSCODE_TEXTMATE_DEBUG}, t2.UseOnigurumaFindOptions = false;
        }, 527: (e2, t2, n) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.LocalStackElement = t2.StackElement = t2.ScopeListElement = t2.StackElementMetadata = t2.Grammar = t2.ScopeMetadata = t2.collectDependencies = t2.collectSpecificDependencies = t2.ScopeDependencyCollector = t2.PartialScopeDependency = t2.FullScopeDependency = t2.createGrammar = void 0;
          var r = n(878), i = n(792), o = n(736), s3 = n(350), a = typeof performance == "undefined" ? function() {
            return Date.now();
          } : function() {
            return performance.now();
          };
          t2.createGrammar = function(e3, t3, n2, r2, i2, o2) {
            return new v(e3, t3, n2, r2, i2, o2);
          };
          var c = function(e3) {
            this.scopeName = e3;
          };
          t2.FullScopeDependency = c;
          var u = function() {
            function e3(e4, t3) {
              this.scopeName = e4, this.include = t3;
            }
            return e3.prototype.toKey = function() {
              return this.scopeName + "#" + this.include;
            }, e3;
          }();
          t2.PartialScopeDependency = u;
          var l = function() {
            function e3() {
              this.full = [], this.partial = [], this.visitedRule = new Set(), this._seenFull = new Set(), this._seenPartial = new Set();
            }
            return e3.prototype.add = function(e4) {
              e4 instanceof c ? this._seenFull.has(e4.scopeName) || (this._seenFull.add(e4.scopeName), this.full.push(e4)) : this._seenPartial.has(e4.toKey()) || (this._seenPartial.add(e4.toKey()), this.partial.push(e4));
            }, e3;
          }();
          function h2(e3, t3, n2, i2, o2) {
            for (var s4 = 0, a2 = i2; s4 < a2.length; s4++) {
              var l2 = a2[s4];
              if (!e3.visitedRule.has(l2)) {
                e3.visitedRule.add(l2);
                var f2 = l2.repository ? r.mergeObjects({}, o2, l2.repository) : o2;
                Array.isArray(l2.patterns) && h2(e3, t3, n2, l2.patterns, f2);
                var g2 = l2.include;
                if (g2)
                  if (g2 === "$base" || g2 === t3.scopeName)
                    d(e3, t3, t3);
                  else if (g2 === "$self" || g2 === n2.scopeName)
                    d(e3, t3, n2);
                  else if (g2.charAt(0) === "#")
                    p(e3, t3, n2, g2.substring(1), f2);
                  else {
                    var m2 = g2.indexOf("#");
                    if (m2 >= 0) {
                      var _2 = g2.substring(0, m2), y2 = g2.substring(m2 + 1);
                      _2 === t3.scopeName ? p(e3, t3, t3, y2, f2) : _2 === n2.scopeName ? p(e3, t3, n2, y2, f2) : e3.add(new u(_2, g2.substring(m2 + 1)));
                    } else
                      e3.add(new c(g2));
                  }
              }
            }
          }
          function p(e3, t3, n2, r2, i2) {
            i2 === void 0 && (i2 = n2.repository), i2 && i2[r2] && h2(e3, t3, n2, [i2[r2]], i2);
          }
          function d(e3, t3, n2) {
            if (n2.patterns && Array.isArray(n2.patterns) && h2(e3, t3, n2, n2.patterns, n2.repository), n2.injections) {
              var r2 = [];
              for (var i2 in n2.injections)
                r2.push(n2.injections[i2]);
              h2(e3, t3, n2, r2, n2.repository);
            }
          }
          function f(e3, t3) {
            if (!e3)
              return false;
            if (e3 === t3)
              return true;
            var n2 = t3.length;
            return e3.length > n2 && e3.substr(0, n2) === t3 && e3[n2] === ".";
          }
          function g(e3, t3) {
            if (t3.length < e3.length)
              return false;
            var n2 = 0;
            return e3.every(function(e4) {
              for (var r2 = n2; r2 < t3.length; r2++)
                if (f(t3[r2], e4))
                  return n2 = r2 + 1, true;
              return false;
            });
          }
          function m(e3, t3, n2, r2, s4) {
            for (var a2 = o.createMatchers(t3, g), c2 = i.RuleFactory.getCompiledRuleId(n2, r2, s4.repository), u2 = 0, l2 = a2; u2 < l2.length; u2++) {
              var h3 = l2[u2];
              e3.push({matcher: h3.matcher, ruleId: c2, grammar: s4, priority: h3.priority});
            }
          }
          t2.ScopeDependencyCollector = l, t2.collectSpecificDependencies = p, t2.collectDependencies = d;
          var _ = function(e3, t3, n2, r2) {
            this.scopeName = e3, this.languageId = t3, this.tokenType = n2, this.themeData = r2;
          };
          t2.ScopeMetadata = _;
          var y = function() {
            function e3(t3, n2, r2) {
              if (this._initialLanguage = t3, this._themeProvider = n2, this._cache = new Map(), this._defaultMetaData = new _("", this._initialLanguage, 0, [this._themeProvider.getDefaults()]), this._embeddedLanguages = Object.create(null), r2)
                for (var i2 = Object.keys(r2), o2 = 0, s4 = i2.length; o2 < s4; o2++) {
                  var a2 = i2[o2], c2 = r2[a2];
                  typeof c2 == "number" && c2 !== 0 ? this._embeddedLanguages[a2] = c2 : console.warn("Invalid embedded language found at scope " + a2 + ": <<" + c2 + ">>");
                }
              var u2 = Object.keys(this._embeddedLanguages).map(function(t4) {
                return e3._escapeRegExpCharacters(t4);
              });
              u2.length === 0 ? this._embeddedLanguagesRegex = null : (u2.sort(), u2.reverse(), this._embeddedLanguagesRegex = new RegExp("^((" + u2.join(")|(") + "))($|\\.)", ""));
            }
            return e3.prototype.onDidChangeTheme = function() {
              this._cache = new Map(), this._defaultMetaData = new _("", this._initialLanguage, 0, [this._themeProvider.getDefaults()]);
            }, e3.prototype.getDefaultMetadata = function() {
              return this._defaultMetaData;
            }, e3._escapeRegExpCharacters = function(e4) {
              return e4.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
            }, e3.prototype.getMetadataForScope = function(t3) {
              if (t3 === null)
                return e3._NULL_SCOPE_METADATA;
              var n2 = this._cache.get(t3);
              return n2 || (n2 = this._doGetMetadataForScope(t3), this._cache.set(t3, n2), n2);
            }, e3.prototype._doGetMetadataForScope = function(e4) {
              var t3 = this._scopeToLanguage(e4), n2 = this._toStandardTokenType(e4), r2 = this._themeProvider.themeMatch(e4);
              return new _(e4, t3, n2, r2);
            }, e3.prototype._scopeToLanguage = function(e4) {
              if (!e4)
                return 0;
              if (!this._embeddedLanguagesRegex)
                return 0;
              var t3 = e4.match(this._embeddedLanguagesRegex);
              return t3 && (this._embeddedLanguages[t3[1]] || 0) || 0;
            }, e3.prototype._toStandardTokenType = function(t3) {
              var n2 = t3.match(e3.STANDARD_TOKEN_TYPE_REGEXP);
              if (!n2)
                return 0;
              switch (n2[1]) {
                case "comment":
                  return 1;
                case "string":
                  return 2;
                case "regex":
                  return 4;
                case "meta.embedded":
                  return 8;
              }
              throw new Error("Unexpected match for standard token type!");
            }, e3._NULL_SCOPE_METADATA = new _("", 0, 0, null), e3.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/, e3;
          }(), v = function() {
            function e3(e4, t3, n2, r2, i2, s4) {
              if (this._scopeMetadataProvider = new y(t3, i2, n2), this._onigLib = s4, this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = i2, this._grammar = C(e4, null), this._injections = null, this._tokenTypeMatchers = [], r2)
                for (var a2 = 0, c2 = Object.keys(r2); a2 < c2.length; a2++)
                  for (var u2 = c2[a2], l2 = 0, h3 = o.createMatchers(u2, g); l2 < h3.length; l2++) {
                    var p2 = h3[l2];
                    this._tokenTypeMatchers.push({matcher: p2.matcher, type: r2[u2]});
                  }
            }
            return e3.prototype.dispose = function() {
              for (var e4 = 0, t3 = this._ruleId2desc; e4 < t3.length; e4++) {
                var n2 = t3[e4];
                n2 && n2.dispose();
              }
            }, e3.prototype.createOnigScanner = function(e4) {
              return this._onigLib.createOnigScanner(e4);
            }, e3.prototype.createOnigString = function(e4) {
              return this._onigLib.createOnigString(e4);
            }, e3.prototype.onDidChangeTheme = function() {
              this._scopeMetadataProvider.onDidChangeTheme();
            }, e3.prototype.getMetadataForScope = function(e4) {
              return this._scopeMetadataProvider.getMetadataForScope(e4);
            }, e3.prototype.getInjections = function() {
              var e4 = this;
              if (this._injections === null) {
                this._injections = [];
                var t3 = this._grammar.injections;
                if (t3)
                  for (var n2 in t3)
                    m(this._injections, n2, t3[n2], this, this._grammar);
                if (this._grammarRepository) {
                  var r2 = this._grammarRepository.injections(this._grammar.scopeName);
                  r2 && r2.forEach(function(t4) {
                    var n3 = e4.getExternalGrammar(t4);
                    if (n3) {
                      var r3 = n3.injectionSelector;
                      r3 && m(e4._injections, r3, n3, e4, n3);
                    }
                  });
                }
                this._injections.sort(function(e5, t4) {
                  return e5.priority - t4.priority;
                });
              }
              return this._injections;
            }, e3.prototype.registerRule = function(e4) {
              var t3 = ++this._lastRuleId, n2 = e4(t3);
              return this._ruleId2desc[t3] = n2, n2;
            }, e3.prototype.getRule = function(e4) {
              return this._ruleId2desc[e4];
            }, e3.prototype.getExternalGrammar = function(e4, t3) {
              if (this._includedGrammars[e4])
                return this._includedGrammars[e4];
              if (this._grammarRepository) {
                var n2 = this._grammarRepository.lookup(e4);
                if (n2)
                  return this._includedGrammars[e4] = C(n2, t3 && t3.$base), this._includedGrammars[e4];
              }
              return null;
            }, e3.prototype.tokenizeLine = function(e4, t3) {
              var n2 = this._tokenize(e4, t3, false);
              return {tokens: n2.lineTokens.getResult(n2.ruleStack, n2.lineLength), ruleStack: n2.ruleStack};
            }, e3.prototype.tokenizeLine2 = function(e4, t3) {
              var n2 = this._tokenize(e4, t3, true);
              return {tokens: n2.lineTokens.getBinaryResult(n2.ruleStack, n2.lineLength), ruleStack: n2.ruleStack};
            }, e3.prototype._tokenize = function(e4, t3, n2) {
              var r2;
              if (this._rootId === -1 && (this._rootId = i.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository)), t3 && t3 !== T.NULL)
                r2 = false, t3.reset();
              else {
                r2 = true;
                var o2 = this._scopeMetadataProvider.getDefaultMetadata(), s4 = o2.themeData[0], a2 = I.set(0, o2.languageId, o2.tokenType, s4.fontStyle, s4.foreground, s4.background), c2 = this.getRule(this._rootId).getName(null, null), u2 = this._scopeMetadataProvider.getMetadataForScope(c2), l2 = x.mergeMetadata(a2, null, u2), h3 = new x(null, c2 === null ? "unknown" : c2, l2);
                t3 = new T(null, this._rootId, -1, -1, false, null, h3, h3);
              }
              e4 += "\n";
              var p2 = this.createOnigString(e4), d2 = p2.content.length, f2 = new L(n2, e4, this._tokenTypeMatchers), g2 = A(this, p2, r2, 0, t3, f2, true);
              return b(p2), {lineLength: d2, lineTokens: f2, ruleStack: g2};
            }, e3;
          }();
          function b(e3) {
            typeof e3.dispose == "function" && e3.dispose();
          }
          function C(e3, t3) {
            return (e3 = r.clone(e3)).repository = e3.repository || {}, e3.repository.$self = {$vscodeTextmateLocation: e3.$vscodeTextmateLocation, patterns: e3.patterns, name: e3.scopeName}, e3.repository.$base = t3 || e3.repository.$self, e3;
          }
          function R(e3, t3, n2, r2, i2, o2, s4) {
            if (o2.length !== 0) {
              for (var a2 = t3.content, c2 = Math.min(o2.length, s4.length), u2 = [], l2 = s4[0].end, h3 = 0; h3 < c2; h3++) {
                var p2 = o2[h3];
                if (p2 !== null) {
                  var d2 = s4[h3];
                  if (d2.length !== 0) {
                    if (d2.start > l2)
                      break;
                    for (; u2.length > 0 && u2[u2.length - 1].endPos <= d2.start; )
                      i2.produceFromScopes(u2[u2.length - 1].scopes, u2[u2.length - 1].endPos), u2.pop();
                    if (u2.length > 0 ? i2.produceFromScopes(u2[u2.length - 1].scopes, d2.start) : i2.produce(r2, d2.start), p2.retokenizeCapturedWithRuleId) {
                      var f2 = p2.getName(a2, s4), g2 = r2.contentNameScopesList.push(e3, f2), m2 = p2.getContentName(a2, s4), _2 = g2.push(e3, m2), y2 = r2.push(p2.retokenizeCapturedWithRuleId, d2.start, -1, false, null, g2, _2), v2 = e3.createOnigString(a2.substring(0, d2.end));
                      A(e3, v2, n2 && d2.start === 0, d2.start, y2, i2, false), b(v2);
                    } else {
                      var C2 = p2.getName(a2, s4);
                      if (C2 !== null) {
                        var R2 = (u2.length > 0 ? u2[u2.length - 1].scopes : r2.contentNameScopesList).push(e3, C2);
                        u2.push(new G(R2, d2.end));
                      }
                    }
                  }
                }
              }
              for (; u2.length > 0; )
                i2.produceFromScopes(u2[u2.length - 1].scopes, u2[u2.length - 1].endPos), u2.pop();
            }
          }
          function S(e3) {
            for (var t3 = [], n2 = 0, r2 = e3.rules.length; n2 < r2; n2++)
              t3.push("   - " + e3.rules[n2] + ": " + e3.debugRegExps[n2]);
            return t3.join("\n");
          }
          function P(e3, t3) {
            var n2 = 0;
            return e3 || (n2 |= 1), t3 || (n2 |= 4), n2;
          }
          function k(e3, t3, n2, r2, i2) {
            return s3.UseOnigurumaFindOptions ? {ruleScanner: e3.compile(t3, n2), findOptions: P(r2, i2)} : {ruleScanner: e3.compileAG(t3, n2, r2, i2), findOptions: 0};
          }
          function w(e3, t3, n2, r2, i2) {
            return s3.UseOnigurumaFindOptions ? {ruleScanner: e3.compileWhile(t3, n2), findOptions: P(r2, i2)} : {ruleScanner: e3.compileWhileAG(t3, n2, r2, i2), findOptions: 0};
          }
          function A(e3, t3, n2, r2, o2, c2, u2) {
            var l2 = t3.content.length, h3 = false, p2 = -1;
            if (u2) {
              var d2 = function(e4, t4, n3, r3, o3, a2) {
                for (var c3 = o3.beginRuleCapturedEOL ? 0 : -1, u3 = [], l3 = o3; l3; l3 = l3.pop()) {
                  var h4 = l3.getRule(e4);
                  h4 instanceof i.BeginWhileRule && u3.push({rule: h4, stack: l3});
                }
                for (var p3 = u3.pop(); p3; p3 = u3.pop()) {
                  var d3 = w(p3.rule, e4, p3.stack.endRule, n3, r3 === c3), f3 = d3.ruleScanner, g2 = d3.findOptions, m2 = f3.scanner.findNextMatchSync(t4, r3, g2);
                  if (s3.DebugFlags.InDebugMode && (console.log("  scanning for while rule"), console.log(S(f3))), !m2) {
                    s3.DebugFlags.InDebugMode && console.log("  popping " + p3.rule.debugName + " - " + p3.rule.debugWhileRegExp), o3 = p3.stack.pop();
                    break;
                  }
                  if (f3.rules[m2.index] !== -2) {
                    o3 = p3.stack.pop();
                    break;
                  }
                  m2.captureIndices && m2.captureIndices.length && (a2.produce(p3.stack, m2.captureIndices[0].start), R(e4, t4, n3, p3.stack, a2, p3.rule.whileCaptures, m2.captureIndices), a2.produce(p3.stack, m2.captureIndices[0].end), c3 = m2.captureIndices[0].end, m2.captureIndices[0].end > r3 && (r3 = m2.captureIndices[0].end, n3 = false));
                }
                return {stack: o3, linePos: r3, anchorPosition: c3, isFirstLine: n3};
              }(e3, t3, n2, r2, o2, c2);
              o2 = d2.stack, r2 = d2.linePos, n2 = d2.isFirstLine, p2 = d2.anchorPosition;
            }
            for (; !h3; )
              f2();
            function f2() {
              s3.DebugFlags.InDebugMode && (console.log(""), console.log("@@scanNext " + r2 + ": |" + t3.content.substr(r2).replace(/\n$/, "\\n") + "|"));
              var u3 = function(e4, t4, n3, r3, i2, o3) {
                var c3 = function(e5, t5, n4, r4, i3, o4) {
                  var c4 = i3.getRule(e5), u5 = k(c4, e5, i3.endRule, n4, r4 === o4), l4 = u5.ruleScanner, h5 = u5.findOptions, p4 = 0;
                  s3.DebugFlags.InDebugMode && (p4 = a());
                  var d4 = l4.scanner.findNextMatchSync(t5, r4, h5);
                  if (s3.DebugFlags.InDebugMode) {
                    var f4 = a() - p4;
                    f4 > 5 && console.warn("Rule " + c4.debugName + " (" + c4.id + ") matching took " + f4 + " against '" + t5 + "'"), d4 && console.log("matched rule id: " + l4.rules[d4.index] + " from " + d4.captureIndices[0].start + " to " + d4.captureIndices[0].end);
                  }
                  return d4 ? {captureIndices: d4.captureIndices, matchedRuleId: l4.rules[d4.index]} : null;
                }(e4, t4, n3, r3, i2, o3), u4 = e4.getInjections();
                if (u4.length === 0)
                  return c3;
                var l3 = function(e5, t5, n4, r4, i3, o4, a2) {
                  for (var c4, u5 = Number.MAX_VALUE, l4 = null, h5 = 0, p4 = o4.contentNameScopesList.generateScopes(), d4 = 0, f4 = e5.length; d4 < f4; d4++) {
                    var g3 = e5[d4];
                    if (g3.matcher(p4)) {
                      var m3 = k(t5.getRule(g3.ruleId), t5, null, r4, i3 === a2), _3 = m3.ruleScanner, y3 = m3.findOptions, v3 = _3.scanner.findNextMatchSync(n4, i3, y3);
                      if (s3.DebugFlags.InDebugMode && (console.log("  scanning for injections"), console.log(S(_3))), v3) {
                        var b3 = v3.captureIndices[0].start;
                        if (!(b3 >= u5) && (u5 = b3, l4 = v3.captureIndices, c4 = _3.rules[v3.index], h5 = g3.priority, u5 === i3))
                          break;
                      }
                    }
                  }
                  return l4 ? {priorityMatch: h5 === -1, captureIndices: l4, matchedRuleId: c4} : null;
                }(u4, e4, t4, n3, r3, i2, o3);
                if (!l3)
                  return c3;
                if (!c3)
                  return l3;
                var h4 = c3.captureIndices[0].start, p3 = l3.captureIndices[0].start;
                return p3 < h4 || l3.priorityMatch && p3 === h4 ? l3 : c3;
              }(e3, t3, n2, r2, o2, p2);
              if (!u3)
                return s3.DebugFlags.InDebugMode && console.log("  no more matches."), c2.produce(o2, l2), void (h3 = true);
              var d3 = u3.captureIndices, f3 = u3.matchedRuleId, g2 = !!(d3 && d3.length > 0) && d3[0].end > r2;
              if (f3 === -1) {
                var m2 = o2.getRule(e3);
                s3.DebugFlags.InDebugMode && console.log("  popping " + m2.debugName + " - " + m2.debugEndRegExp), c2.produce(o2, d3[0].start), o2 = o2.setContentNameScopesList(o2.nameScopesList), R(e3, t3, n2, o2, c2, m2.endCaptures, d3), c2.produce(o2, d3[0].end);
                var _2 = o2;
                if (o2 = o2.pop(), p2 = _2.getAnchorPos(), !g2 && _2.getEnterPos() === r2)
                  return s3.DebugFlags.InDebugMode && console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"), o2 = _2, c2.produce(o2, l2), void (h3 = true);
              } else {
                var y2 = e3.getRule(f3);
                c2.produce(o2, d3[0].start);
                var v2 = o2, b2 = y2.getName(t3.content, d3), C2 = o2.contentNameScopesList.push(e3, b2);
                if (o2 = o2.push(f3, r2, p2, d3[0].end === l2, null, C2, C2), y2 instanceof i.BeginEndRule) {
                  var P2 = y2;
                  s3.DebugFlags.InDebugMode && console.log("  pushing " + P2.debugName + " - " + P2.debugBeginRegExp), R(e3, t3, n2, o2, c2, P2.beginCaptures, d3), c2.produce(o2, d3[0].end), p2 = d3[0].end;
                  var w2 = P2.getContentName(t3.content, d3), A2 = C2.push(e3, w2);
                  if (o2 = o2.setContentNameScopesList(A2), P2.endHasBackReferences && (o2 = o2.setEndRule(P2.getEndWithResolvedBackReferences(t3.content, d3))), !g2 && v2.hasSameRuleAs(o2))
                    return s3.DebugFlags.InDebugMode && console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), o2 = o2.pop(), c2.produce(o2, l2), void (h3 = true);
                } else if (y2 instanceof i.BeginWhileRule) {
                  if (P2 = y2, s3.DebugFlags.InDebugMode && console.log("  pushing " + P2.debugName), R(e3, t3, n2, o2, c2, P2.beginCaptures, d3), c2.produce(o2, d3[0].end), p2 = d3[0].end, w2 = P2.getContentName(t3.content, d3), A2 = C2.push(e3, w2), o2 = o2.setContentNameScopesList(A2), P2.whileHasBackReferences && (o2 = o2.setEndRule(P2.getWhileWithResolvedBackReferences(t3.content, d3))), !g2 && v2.hasSameRuleAs(o2))
                    return s3.DebugFlags.InDebugMode && console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), o2 = o2.pop(), c2.produce(o2, l2), void (h3 = true);
                } else {
                  var I2 = y2;
                  if (s3.DebugFlags.InDebugMode && console.log("  matched " + I2.debugName + " - " + I2.debugMatchRegExp), R(e3, t3, n2, o2, c2, I2.captures, d3), c2.produce(o2, d3[0].end), o2 = o2.pop(), !g2)
                    return s3.DebugFlags.InDebugMode && console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"), o2 = o2.safePop(), c2.produce(o2, l2), void (h3 = true);
                }
              }
              d3[0].end > r2 && (r2 = d3[0].end, n2 = false);
            }
            return o2;
          }
          t2.Grammar = v;
          var I = function() {
            function e3() {
            }
            return e3.toBinaryStr = function(e4) {
              for (var t3 = e4.toString(2); t3.length < 32; )
                t3 = "0" + t3;
              return t3;
            }, e3.printMetadata = function(t3) {
              var n2 = e3.getLanguageId(t3), r2 = e3.getTokenType(t3), i2 = e3.getFontStyle(t3), o2 = e3.getForeground(t3), s4 = e3.getBackground(t3);
              console.log({languageId: n2, tokenType: r2, fontStyle: i2, foreground: o2, background: s4});
            }, e3.getLanguageId = function(e4) {
              return (255 & e4) >>> 0;
            }, e3.getTokenType = function(e4) {
              return (1792 & e4) >>> 8;
            }, e3.getFontStyle = function(e4) {
              return (14336 & e4) >>> 11;
            }, e3.getForeground = function(e4) {
              return (8372224 & e4) >>> 14;
            }, e3.getBackground = function(e4) {
              return (4286578688 & e4) >>> 23;
            }, e3.set = function(t3, n2, r2, i2, o2, s4) {
              var a2 = e3.getLanguageId(t3), c2 = e3.getTokenType(t3), u2 = e3.getFontStyle(t3), l2 = e3.getForeground(t3), h3 = e3.getBackground(t3);
              return n2 !== 0 && (a2 = n2), r2 !== 0 && (c2 = r2 === 8 ? 0 : r2), i2 !== -1 && (u2 = i2), o2 !== 0 && (l2 = o2), s4 !== 0 && (h3 = s4), (a2 << 0 | c2 << 8 | u2 << 11 | l2 << 14 | h3 << 23) >>> 0;
            }, e3;
          }();
          t2.StackElementMetadata = I;
          var x = function() {
            function e3(e4, t3, n2) {
              this.parent = e4, this.scope = t3, this.metadata = n2;
            }
            return e3._equals = function(e4, t3) {
              for (; ; ) {
                if (e4 === t3)
                  return true;
                if (!e4 && !t3)
                  return true;
                if (!e4 || !t3)
                  return false;
                if (e4.scope !== t3.scope || e4.metadata !== t3.metadata)
                  return false;
                e4 = e4.parent, t3 = t3.parent;
              }
            }, e3.prototype.equals = function(t3) {
              return e3._equals(this, t3);
            }, e3._matchesScope = function(e4, t3, n2) {
              return t3 === e4 || e4.substring(0, n2.length) === n2;
            }, e3._matches = function(e4, t3) {
              if (t3 === null)
                return true;
              for (var n2 = t3.length, r2 = 0, i2 = t3[r2], o2 = i2 + "."; e4; ) {
                if (this._matchesScope(e4.scope, i2, o2)) {
                  if (++r2 === n2)
                    return true;
                  o2 = (i2 = t3[r2]) + ".";
                }
                e4 = e4.parent;
              }
              return false;
            }, e3.mergeMetadata = function(e4, t3, n2) {
              if (n2 === null)
                return e4;
              var r2 = -1, i2 = 0, o2 = 0;
              if (n2.themeData !== null)
                for (var s4 = 0, a2 = n2.themeData.length; s4 < a2; s4++) {
                  var c2 = n2.themeData[s4];
                  if (this._matches(t3, c2.parentScopes)) {
                    r2 = c2.fontStyle, i2 = c2.foreground, o2 = c2.background;
                    break;
                  }
                }
              return I.set(e4, n2.languageId, n2.tokenType, r2, i2, o2);
            }, e3._push = function(t3, n2, r2) {
              for (var i2 = 0, o2 = r2.length; i2 < o2; i2++) {
                var s4 = r2[i2], a2 = n2.getMetadataForScope(s4), c2 = e3.mergeMetadata(t3.metadata, t3, a2);
                t3 = new e3(t3, s4, c2);
              }
              return t3;
            }, e3.prototype.push = function(t3, n2) {
              return n2 === null ? this : n2.indexOf(" ") >= 0 ? e3._push(this, t3, n2.split(/ /g)) : e3._push(this, t3, [n2]);
            }, e3._generateScopes = function(e4) {
              for (var t3 = [], n2 = 0; e4; )
                t3[n2++] = e4.scope, e4 = e4.parent;
              return t3.reverse(), t3;
            }, e3.prototype.generateScopes = function() {
              return e3._generateScopes(this);
            }, e3;
          }();
          t2.ScopeListElement = x;
          var T = function() {
            function e3(e4, t3, n2, r2, i2, o2, s4, a2) {
              this.parent = e4, this.depth = this.parent ? this.parent.depth + 1 : 1, this.ruleId = t3, this._enterPos = n2, this._anchorPos = r2, this.beginRuleCapturedEOL = i2, this.endRule = o2, this.nameScopesList = s4, this.contentNameScopesList = a2;
            }
            return e3._structuralEquals = function(e4, t3) {
              for (; ; ) {
                if (e4 === t3)
                  return true;
                if (!e4 && !t3)
                  return true;
                if (!e4 || !t3)
                  return false;
                if (e4.depth !== t3.depth || e4.ruleId !== t3.ruleId || e4.endRule !== t3.endRule)
                  return false;
                e4 = e4.parent, t3 = t3.parent;
              }
            }, e3._equals = function(e4, t3) {
              return e4 === t3 || !!this._structuralEquals(e4, t3) && e4.contentNameScopesList.equals(t3.contentNameScopesList);
            }, e3.prototype.clone = function() {
              return this;
            }, e3.prototype.equals = function(t3) {
              return t3 !== null && e3._equals(this, t3);
            }, e3._reset = function(e4) {
              for (; e4; )
                e4._enterPos = -1, e4._anchorPos = -1, e4 = e4.parent;
            }, e3.prototype.reset = function() {
              e3._reset(this);
            }, e3.prototype.pop = function() {
              return this.parent;
            }, e3.prototype.safePop = function() {
              return this.parent ? this.parent : this;
            }, e3.prototype.push = function(t3, n2, r2, i2, o2, s4, a2) {
              return new e3(this, t3, n2, r2, i2, o2, s4, a2);
            }, e3.prototype.getEnterPos = function() {
              return this._enterPos;
            }, e3.prototype.getAnchorPos = function() {
              return this._anchorPos;
            }, e3.prototype.getRule = function(e4) {
              return e4.getRule(this.ruleId);
            }, e3.prototype._writeString = function(e4, t3) {
              return this.parent && (t3 = this.parent._writeString(e4, t3)), e4[t3++] = "(" + this.ruleId + ", TODO-" + this.nameScopesList + ", TODO-" + this.contentNameScopesList + ")", t3;
            }, e3.prototype.toString = function() {
              var e4 = [];
              return this._writeString(e4, 0), "[" + e4.join(",") + "]";
            }, e3.prototype.setContentNameScopesList = function(e4) {
              return this.contentNameScopesList === e4 ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e4);
            }, e3.prototype.setEndRule = function(t3) {
              return this.endRule === t3 ? this : new e3(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t3, this.nameScopesList, this.contentNameScopesList);
            }, e3.prototype.hasSameRuleAs = function(e4) {
              for (var t3 = this; t3 && t3._enterPos === e4._enterPos; ) {
                if (t3.ruleId === e4.ruleId)
                  return true;
                t3 = t3.parent;
              }
              return false;
            }, e3.NULL = new e3(null, 0, 0, 0, false, null, null, null), e3;
          }();
          t2.StackElement = T;
          var G = function(e3, t3) {
            this.scopes = e3, this.endPos = t3;
          };
          t2.LocalStackElement = G;
          var L = function() {
            function e3(e4, t3, n2) {
              this._emitBinaryTokens = e4, this._tokenTypeOverrides = n2, s3.DebugFlags.InDebugMode ? this._lineText = t3 : this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
            }
            return e3.prototype.produce = function(e4, t3) {
              this.produceFromScopes(e4.contentNameScopesList, t3);
            }, e3.prototype.produceFromScopes = function(e4, t3) {
              if (!(this._lastTokenEndIndex >= t3)) {
                if (this._emitBinaryTokens) {
                  for (var n2 = e4.metadata, r2 = 0, i2 = this._tokenTypeOverrides; r2 < i2.length; r2++) {
                    var o2 = i2[r2];
                    o2.matcher(e4.generateScopes()) && (n2 = I.set(n2, 0, M(o2.type), -1, 0, 0));
                  }
                  return this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n2 || (this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n2)), void (this._lastTokenEndIndex = t3);
                }
                var a2 = e4.generateScopes();
                if (s3.DebugFlags.InDebugMode) {
                  console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t3).replace(/\n$/, "\\n") + "|");
                  for (var c2 = 0; c2 < a2.length; c2++)
                    console.log("      * " + a2[c2]);
                }
                this._tokens.push({startIndex: this._lastTokenEndIndex, endIndex: t3, scopes: a2}), this._lastTokenEndIndex = t3;
              }
            }, e3.prototype.getResult = function(e4, t3) {
              return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t3 - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e4, t3), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
            }, e3.prototype.getBinaryResult = function(e4, t3) {
              this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t3 - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e4, t3), this._binaryTokens[this._binaryTokens.length - 2] = 0);
              for (var n2 = new Uint32Array(this._binaryTokens.length), r2 = 0, i2 = this._binaryTokens.length; r2 < i2; r2++)
                n2[r2] = this._binaryTokens[r2];
              return n2;
            }, e3;
          }();
          function M(e3) {
            switch (e3) {
              case 4:
                return 4;
              case 2:
                return 2;
              case 1:
                return 1;
              case 0:
              default:
                return 8;
            }
          }
        }, 25: (e2, t2, n) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.parseRawGrammar = void 0;
          var r = n(69), i = n(350), o = n(974);
          t2.parseRawGrammar = function(e3, t3) {
            return t3 === void 0 && (t3 = null), t3 !== null && /\.json$/.test(t3) ? (n2 = e3, s3 = t3, i.DebugFlags.InDebugMode ? o.parse(n2, s3, true) : JSON.parse(n2)) : function(e4, t4) {
              return i.DebugFlags.InDebugMode ? r.parseWithLocation(e4, t4, "$vscodeTextmateLocation") : r.parse(e4);
            }(e3, t3);
            var n2, s3;
          };
        }, 974: (e2, t2) => {
          function n(e3, t3) {
            throw new Error("Near offset " + e3.pos + ": " + t3 + " ~~~" + e3.source.substr(e3.pos, 50) + "~~~");
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.parse = void 0, t2.parse = function(e3, t3, s3) {
            var a = new r(e3), c = new i(), u = 0, l = null, h2 = [], p = [];
            function d() {
              h2.push(u), p.push(l);
            }
            function f() {
              u = h2.pop(), l = p.pop();
            }
            function g(e4) {
              n(a, e4);
            }
            for (; o(a, c); ) {
              if (u === 0) {
                if (l !== null && g("too many constructs in root"), c.type === 3) {
                  l = {}, s3 && (l.$vscodeTextmateLocation = c.toLocation(t3)), d(), u = 1;
                  continue;
                }
                if (c.type === 2) {
                  l = [], d(), u = 4;
                  continue;
                }
                g("unexpected token in root");
              }
              if (u === 2) {
                if (c.type === 5) {
                  f();
                  continue;
                }
                if (c.type === 7) {
                  u = 3;
                  continue;
                }
                g("expected , or }");
              }
              if (u === 1 || u === 3) {
                if (u === 1 && c.type === 5) {
                  f();
                  continue;
                }
                if (c.type === 1) {
                  var m = c.value;
                  if (o(a, c) && c.type === 6 || g("expected colon"), o(a, c) || g("expected value"), u = 2, c.type === 1) {
                    l[m] = c.value;
                    continue;
                  }
                  if (c.type === 8) {
                    l[m] = null;
                    continue;
                  }
                  if (c.type === 9) {
                    l[m] = true;
                    continue;
                  }
                  if (c.type === 10) {
                    l[m] = false;
                    continue;
                  }
                  if (c.type === 11) {
                    l[m] = parseFloat(c.value);
                    continue;
                  }
                  if (c.type === 2) {
                    var _ = [];
                    l[m] = _, d(), u = 4, l = _;
                    continue;
                  }
                  if (c.type === 3) {
                    var y = {};
                    s3 && (y.$vscodeTextmateLocation = c.toLocation(t3)), l[m] = y, d(), u = 1, l = y;
                    continue;
                  }
                }
                g("unexpected token in dict");
              }
              if (u === 5) {
                if (c.type === 4) {
                  f();
                  continue;
                }
                if (c.type === 7) {
                  u = 6;
                  continue;
                }
                g("expected , or ]");
              }
              if (u === 4 || u === 6) {
                if (u === 4 && c.type === 4) {
                  f();
                  continue;
                }
                if (u = 5, c.type === 1) {
                  l.push(c.value);
                  continue;
                }
                if (c.type === 8) {
                  l.push(null);
                  continue;
                }
                if (c.type === 9) {
                  l.push(true);
                  continue;
                }
                if (c.type === 10) {
                  l.push(false);
                  continue;
                }
                if (c.type === 11) {
                  l.push(parseFloat(c.value));
                  continue;
                }
                if (c.type === 2) {
                  _ = [], l.push(_), d(), u = 4, l = _;
                  continue;
                }
                if (c.type === 3) {
                  y = {}, s3 && (y.$vscodeTextmateLocation = c.toLocation(t3)), l.push(y), d(), u = 1, l = y;
                  continue;
                }
                g("unexpected token in array");
              }
              g("unknown state");
            }
            return p.length !== 0 && g("unclosed constructs"), l;
          };
          var r = function(e3) {
            this.source = e3, this.pos = 0, this.len = e3.length, this.line = 1, this.char = 0;
          }, i = function() {
            function e3() {
              this.value = null, this.type = 0, this.offset = -1, this.len = -1, this.line = -1, this.char = -1;
            }
            return e3.prototype.toLocation = function(e4) {
              return {filename: e4, line: this.line, char: this.char};
            }, e3;
          }();
          function o(e3, t3) {
            t3.value = null, t3.type = 0, t3.offset = -1, t3.len = -1, t3.line = -1, t3.char = -1;
            for (var r2, i2 = e3.source, o2 = e3.pos, s3 = e3.len, a = e3.line, c = e3.char; ; ) {
              if (o2 >= s3)
                return false;
              if ((r2 = i2.charCodeAt(o2)) !== 32 && r2 !== 9 && r2 !== 13) {
                if (r2 !== 10)
                  break;
                o2++, a++, c = 0;
              } else
                o2++, c++;
            }
            if (t3.offset = o2, t3.line = a, t3.char = c, r2 === 34) {
              for (t3.type = 1, o2++, c++; ; ) {
                if (o2 >= s3)
                  return false;
                if (r2 = i2.charCodeAt(o2), o2++, c++, r2 !== 92) {
                  if (r2 === 34)
                    break;
                } else
                  o2++, c++;
              }
              t3.value = i2.substring(t3.offset + 1, o2 - 1).replace(/\\u([0-9A-Fa-f]{4})/g, function(e4, t4) {
                return String.fromCodePoint(parseInt(t4, 16));
              }).replace(/\\(.)/g, function(t4, r3) {
                switch (r3) {
                  case '"':
                    return '"';
                  case "\\":
                    return "\\";
                  case "/":
                    return "/";
                  case "b":
                    return "\b";
                  case "f":
                    return "\f";
                  case "n":
                    return "\n";
                  case "r":
                    return "\r";
                  case "t":
                    return "	";
                  default:
                    n(e3, "invalid escape sequence");
                }
                throw new Error("unreachable");
              });
            } else if (r2 === 91)
              t3.type = 2, o2++, c++;
            else if (r2 === 123)
              t3.type = 3, o2++, c++;
            else if (r2 === 93)
              t3.type = 4, o2++, c++;
            else if (r2 === 125)
              t3.type = 5, o2++, c++;
            else if (r2 === 58)
              t3.type = 6, o2++, c++;
            else if (r2 === 44)
              t3.type = 7, o2++, c++;
            else if (r2 === 110) {
              if (t3.type = 8, o2++, c++, (r2 = i2.charCodeAt(o2)) !== 117)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 108)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 108)
                return false;
              o2++, c++;
            } else if (r2 === 116) {
              if (t3.type = 9, o2++, c++, (r2 = i2.charCodeAt(o2)) !== 114)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 117)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 101)
                return false;
              o2++, c++;
            } else if (r2 === 102) {
              if (t3.type = 10, o2++, c++, (r2 = i2.charCodeAt(o2)) !== 97)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 108)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 115)
                return false;
              if (o2++, c++, (r2 = i2.charCodeAt(o2)) !== 101)
                return false;
              o2++, c++;
            } else
              for (t3.type = 11; ; ) {
                if (o2 >= s3)
                  return false;
                if (!((r2 = i2.charCodeAt(o2)) === 46 || r2 >= 48 && r2 <= 57 || r2 === 101 || r2 === 69 || r2 === 45 || r2 === 43))
                  break;
                o2++, c++;
              }
            return t3.len = o2 - t3.offset, t3.value === null && (t3.value = i2.substr(t3.offset, t3.len)), e3.pos = o2, e3.line = a, e3.char = c, true;
          }
        }, 787: function(e2, t2, n) {
          var r = this && this.__createBinding || (Object.create ? function(e3, t3, n2, r2) {
            r2 === void 0 && (r2 = n2), Object.defineProperty(e3, r2, {enumerable: true, get: function() {
              return t3[n2];
            }});
          } : function(e3, t3, n2, r2) {
            r2 === void 0 && (r2 = n2), e3[r2] = t3[n2];
          }), i = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              n2 === "default" || Object.prototype.hasOwnProperty.call(t3, n2) || r(t3, e3, n2);
          }, o = this && this.__awaiter || function(e3, t3, n2, r2) {
            return new (n2 || (n2 = Promise))(function(i2, o2) {
              function s4(e4) {
                try {
                  c2(r2.next(e4));
                } catch (e5) {
                  o2(e5);
                }
              }
              function a2(e4) {
                try {
                  c2(r2.throw(e4));
                } catch (e5) {
                  o2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? i2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                  e5(t4);
                })).then(s4, a2);
              }
              c2((r2 = r2.apply(e3, t3 || [])).next());
            });
          }, s3 = this && this.__generator || function(e3, t3) {
            var n2, r2, i2, o2, s4 = {label: 0, sent: function() {
              if (1 & i2[0])
                throw i2[1];
              return i2[1];
            }, trys: [], ops: []};
            return o2 = {next: a2(0), throw: a2(1), return: a2(2)}, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
              return this;
            }), o2;
            function a2(o3) {
              return function(a3) {
                return function(o4) {
                  if (n2)
                    throw new TypeError("Generator is already executing.");
                  for (; s4; )
                    try {
                      if (n2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                        return i2;
                      switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                        case 0:
                        case 1:
                          i2 = o4;
                          break;
                        case 4:
                          return s4.label++, {value: o4[1], done: false};
                        case 5:
                          s4.label++, r2 = o4[1], o4 = [0];
                          continue;
                        case 7:
                          o4 = s4.ops.pop(), s4.trys.pop();
                          continue;
                        default:
                          if (!((i2 = (i2 = s4.trys).length > 0 && i2[i2.length - 1]) || o4[0] !== 6 && o4[0] !== 2)) {
                            s4 = 0;
                            continue;
                          }
                          if (o4[0] === 3 && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                            s4.label = o4[1];
                            break;
                          }
                          if (o4[0] === 6 && s4.label < i2[1]) {
                            s4.label = i2[1], i2 = o4;
                            break;
                          }
                          if (i2 && s4.label < i2[2]) {
                            s4.label = i2[2], s4.ops.push(o4);
                            break;
                          }
                          i2[2] && s4.ops.pop(), s4.trys.pop();
                          continue;
                      }
                      o4 = t3.call(e3, s4);
                    } catch (e4) {
                      o4 = [6, e4], r2 = 0;
                    } finally {
                      n2 = i2 = 0;
                    }
                  if (5 & o4[0])
                    throw o4[1];
                  return {value: o4[0] ? o4[1] : void 0, done: true};
                }([o3, a3]);
              };
            }
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.parseRawGrammar = t2.INITIAL = t2.Registry = void 0;
          var a = n(652), c = n(25), u = n(583), l = n(527);
          i(n(42), t2);
          var h2 = function() {
            function e3(e4) {
              this._options = e4, this._syncRegistry = new a.SyncRegistry(u.Theme.createFromRawTheme(e4.theme, e4.colorMap), e4.onigLib), this._ensureGrammarCache = new Map();
            }
            return e3.prototype.dispose = function() {
              this._syncRegistry.dispose();
            }, e3.prototype.setTheme = function(e4, t3) {
              this._syncRegistry.setTheme(u.Theme.createFromRawTheme(e4, t3));
            }, e3.prototype.getColorMap = function() {
              return this._syncRegistry.getColorMap();
            }, e3.prototype.loadGrammarWithEmbeddedLanguages = function(e4, t3, n2) {
              return this.loadGrammarWithConfiguration(e4, t3, {embeddedLanguages: n2});
            }, e3.prototype.loadGrammarWithConfiguration = function(e4, t3, n2) {
              return this._loadGrammar(e4, t3, n2.embeddedLanguages, n2.tokenTypes);
            }, e3.prototype.loadGrammar = function(e4) {
              return this._loadGrammar(e4, 0, null, null);
            }, e3.prototype._doLoadSingleGrammar = function(e4) {
              return o(this, void 0, void 0, function() {
                var t3, n2;
                return s3(this, function(r2) {
                  switch (r2.label) {
                    case 0:
                      return [4, this._options.loadGrammar(e4)];
                    case 1:
                      return (t3 = r2.sent()) && (n2 = typeof this._options.getInjections == "function" ? this._options.getInjections(e4) : void 0, this._syncRegistry.addGrammar(t3, n2)), [2];
                  }
                });
              });
            }, e3.prototype._loadSingleGrammar = function(e4) {
              return o(this, void 0, void 0, function() {
                return s3(this, function(t3) {
                  return this._ensureGrammarCache.has(e4) || this._ensureGrammarCache.set(e4, this._doLoadSingleGrammar(e4)), [2, this._ensureGrammarCache.get(e4)];
                });
              });
            }, e3.prototype._collectDependenciesForDep = function(e4, t3, n2) {
              var r2 = this._syncRegistry.lookup(n2.scopeName);
              if (r2) {
                n2 instanceof l.FullScopeDependency ? l.collectDependencies(t3, this._syncRegistry.lookup(e4), r2) : l.collectSpecificDependencies(t3, this._syncRegistry.lookup(e4), r2, n2.include);
                var i2 = this._syncRegistry.injections(n2.scopeName);
                if (i2)
                  for (var o2 = 0, s4 = i2; o2 < s4.length; o2++) {
                    var a2 = s4[o2];
                    t3.add(new l.FullScopeDependency(a2));
                  }
              } else if (n2.scopeName === e4)
                throw new Error("No grammar provided for <" + e4 + ">");
            }, e3.prototype._loadGrammar = function(e4, t3, n2, r2) {
              return o(this, void 0, void 0, function() {
                var i2, o2, a2, c2, u2, h3, p, d, f, g, m, _, y = this;
                return s3(this, function(s4) {
                  switch (s4.label) {
                    case 0:
                      i2 = new Set(), o2 = new Set(), i2.add(e4), a2 = [new l.FullScopeDependency(e4)], s4.label = 1;
                    case 1:
                      return a2.length > 0 ? (c2 = a2, a2 = [], [4, Promise.all(c2.map(function(e5) {
                        return y._loadSingleGrammar(e5.scopeName);
                      }))]) : [3, 3];
                    case 2:
                      for (s4.sent(), u2 = new l.ScopeDependencyCollector(), h3 = 0, p = c2; h3 < p.length; h3++)
                        _ = p[h3], this._collectDependenciesForDep(e4, u2, _);
                      for (d = 0, f = u2.full; d < f.length; d++)
                        _ = f[d], i2.has(_.scopeName) || (i2.add(_.scopeName), a2.push(_));
                      for (g = 0, m = u2.partial; g < m.length; g++)
                        _ = m[g], i2.has(_.scopeName) || o2.has(_.toKey()) || (o2.add(_.toKey()), a2.push(_));
                      return [3, 1];
                    case 3:
                      return [2, this.grammarForScopeName(e4, t3, n2, r2)];
                  }
                });
              });
            }, e3.prototype.addGrammar = function(e4, t3, n2, r2) {
              return t3 === void 0 && (t3 = []), n2 === void 0 && (n2 = 0), r2 === void 0 && (r2 = null), o(this, void 0, void 0, function() {
                return s3(this, function(i2) {
                  switch (i2.label) {
                    case 0:
                      return this._syncRegistry.addGrammar(e4, t3), [4, this.grammarForScopeName(e4.scopeName, n2, r2)];
                    case 1:
                      return [2, i2.sent()];
                  }
                });
              });
            }, e3.prototype.grammarForScopeName = function(e4, t3, n2, r2) {
              return t3 === void 0 && (t3 = 0), n2 === void 0 && (n2 = null), r2 === void 0 && (r2 = null), this._syncRegistry.grammarForScopeName(e4, t3, n2, r2);
            }, e3;
          }();
          t2.Registry = h2, t2.INITIAL = l.StackElement.NULL, t2.parseRawGrammar = c.parseRawGrammar;
        }, 736: (e2, t2) => {
          function n(e3) {
            return !!e3 && !!e3.match(/[\w\.:]+/);
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.createMatchers = void 0, t2.createMatchers = function(e3, t3) {
            for (var r, i, o, s3 = [], a = (o = (i = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(r = e3), {next: function() {
              if (!o)
                return null;
              var e4 = o[0];
              return o = i.exec(r), e4;
            }}), c = a.next(); c !== null; ) {
              var u = 0;
              if (c.length === 2 && c.charAt(1) === ":") {
                switch (c.charAt(0)) {
                  case "R":
                    u = 1;
                    break;
                  case "L":
                    u = -1;
                    break;
                  default:
                    console.log("Unknown priority " + c + " in scope selector");
                }
                c = a.next();
              }
              var l = p();
              if (s3.push({matcher: l, priority: u}), c !== ",")
                break;
              c = a.next();
            }
            return s3;
            function h2() {
              if (c === "-") {
                c = a.next();
                var e4 = h2();
                return function(t4) {
                  return !!e4 && !e4(t4);
                };
              }
              if (c === "(") {
                c = a.next();
                var r2 = function() {
                  for (var e5 = [], t4 = p(); t4 && (e5.push(t4), c === "|" || c === ","); ) {
                    do {
                      c = a.next();
                    } while (c === "|" || c === ",");
                    t4 = p();
                  }
                  return function(t5) {
                    return e5.some(function(e6) {
                      return e6(t5);
                    });
                  };
                }();
                return c === ")" && (c = a.next()), r2;
              }
              if (n(c)) {
                var i2 = [];
                do {
                  i2.push(c), c = a.next();
                } while (n(c));
                return function(e5) {
                  return t3(i2, e5);
                };
              }
              return null;
            }
            function p() {
              for (var e4 = [], t4 = h2(); t4; )
                e4.push(t4), t4 = h2();
              return function(t5) {
                return e4.every(function(e5) {
                  return e5(t5);
                });
              };
            }
          };
        }, 69: (e2, t2) => {
          function n(e3, t3, n2) {
            var r = e3.length, i = 0, o = 1, s3 = 0;
            function a(t4) {
              if (n2 === null)
                i += t4;
              else
                for (; t4 > 0; )
                  e3.charCodeAt(i) === 10 ? (i++, o++, s3 = 0) : (i++, s3++), t4--;
            }
            function c(e4) {
              n2 === null ? i = e4 : a(e4 - i);
            }
            function u() {
              for (; i < r; ) {
                var t4 = e3.charCodeAt(i);
                if (t4 !== 32 && t4 !== 9 && t4 !== 13 && t4 !== 10)
                  break;
                a(1);
              }
            }
            function l(t4) {
              return e3.substr(i, t4.length) === t4 && (a(t4.length), true);
            }
            function h2(t4) {
              var n3 = e3.indexOf(t4, i);
              c(n3 !== -1 ? n3 + t4.length : r);
            }
            function p(t4) {
              var n3 = e3.indexOf(t4, i);
              if (n3 !== -1) {
                var o2 = e3.substring(i, n3);
                return c(n3 + t4.length), o2;
              }
              return o2 = e3.substr(i), c(r), o2;
            }
            r > 0 && e3.charCodeAt(0) === 65279 && (i = 1);
            var d = 0, f = null, g = [], m = [], _ = null;
            function y(e4, t4) {
              g.push(d), m.push(f), d = e4, f = t4;
            }
            function v() {
              if (g.length === 0)
                return b("illegal state stack");
              d = g.pop(), f = m.pop();
            }
            function b(t4) {
              throw new Error("Near offset " + i + ": " + t4 + " ~~~" + e3.substr(i, 50) + "~~~");
            }
            var C, R, S, P, k, w = function() {
              if (_ === null)
                return b("missing <key>");
              var e4 = {};
              n2 !== null && (e4[n2] = {filename: t3, line: o, char: s3}), f[_] = e4, _ = null, y(1, e4);
            }, A = function() {
              if (_ === null)
                return b("missing <key>");
              var e4 = [];
              f[_] = e4, _ = null, y(2, e4);
            };
            function I() {
              if (d !== 1)
                return b("unexpected </dict>");
              v();
            }
            function x() {
              return d === 1 || d !== 2 ? b("unexpected </array>") : void v();
            }
            function T(e4) {
              if (d === 1) {
                if (_ === null)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                d === 2 ? f.push(e4) : f = e4;
            }
            function G(e4) {
              if (isNaN(e4))
                return b("cannot parse float");
              if (d === 1) {
                if (_ === null)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                d === 2 ? f.push(e4) : f = e4;
            }
            function L(e4) {
              if (isNaN(e4))
                return b("cannot parse integer");
              if (d === 1) {
                if (_ === null)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                d === 2 ? f.push(e4) : f = e4;
            }
            function M(e4) {
              if (d === 1) {
                if (_ === null)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                d === 2 ? f.push(e4) : f = e4;
            }
            function D(e4) {
              if (d === 1) {
                if (_ === null)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                d === 2 ? f.push(e4) : f = e4;
            }
            function E(e4) {
              if (d === 1) {
                if (_ === null)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                d === 2 ? f.push(e4) : f = e4;
            }
            function N(e4) {
              if (e4.isClosed)
                return "";
              var t4 = p("</");
              return h2(">"), t4.replace(/&#([0-9]+);/g, function(e5, t5) {
                return String.fromCodePoint(parseInt(t5, 10));
              }).replace(/&#x([0-9a-f]+);/g, function(e5, t5) {
                return String.fromCodePoint(parseInt(t5, 16));
              }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function(e5) {
                switch (e5) {
                  case "&amp;":
                    return "&";
                  case "&lt;":
                    return "<";
                  case "&gt;":
                    return ">";
                  case "&quot;":
                    return '"';
                  case "&apos;":
                    return "'";
                }
                return e5;
              });
            }
            for (; i < r && (u(), !(i >= r)); ) {
              var O = e3.charCodeAt(i);
              if (a(1), O !== 60)
                return b("expected <");
              if (i >= r)
                return b("unexpected end of input");
              var F = e3.charCodeAt(i);
              if (F !== 63)
                if (F !== 33) {
                  if (F === 47) {
                    if (a(1), u(), l("plist")) {
                      h2(">");
                      continue;
                    }
                    if (l("dict")) {
                      h2(">"), I();
                      continue;
                    }
                    if (l("array")) {
                      h2(">"), x();
                      continue;
                    }
                    return b("unexpected closed tag");
                  }
                  var j = (R = void 0, S = void 0, S = false, (R = p(">")).charCodeAt(R.length - 1) === 47 && (S = true, R = R.substring(0, R.length - 1)), {name: R.trim(), isClosed: S});
                  switch (j.name) {
                    case "dict":
                      d === 1 ? w() : d === 2 ? (k = void 0, k = {}, n2 !== null && (k[n2] = {filename: t3, line: o, char: s3}), f.push(k), y(1, k)) : (f = {}, n2 !== null && (f[n2] = {filename: t3, line: o, char: s3}), y(1, f)), j.isClosed && I();
                      continue;
                    case "array":
                      d === 1 ? A() : d === 2 ? (P = void 0, P = [], f.push(P), y(2, P)) : y(2, f = []), j.isClosed && x();
                      continue;
                    case "key":
                      C = N(j), d !== 1 ? b("unexpected <key>") : _ !== null ? b("too many <key>") : _ = C;
                      continue;
                    case "string":
                      T(N(j));
                      continue;
                    case "real":
                      G(parseFloat(N(j)));
                      continue;
                    case "integer":
                      L(parseInt(N(j), 10));
                      continue;
                    case "date":
                      M(new Date(N(j)));
                      continue;
                    case "data":
                      D(N(j));
                      continue;
                    case "true":
                      N(j), E(true);
                      continue;
                    case "false":
                      N(j), E(false);
                      continue;
                  }
                  if (!/^plist/.test(j.name))
                    return b("unexpected opened tag " + j.name);
                } else {
                  if (a(1), l("--")) {
                    h2("-->");
                    continue;
                  }
                  h2(">");
                }
              else
                a(1), h2("?>");
            }
            return f;
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.parse = t2.parseWithLocation = void 0, t2.parseWithLocation = function(e3, t3, r) {
            return n(e3, t3, r);
          }, t2.parse = function(e3) {
            return n(e3, null, null);
          };
        }, 652: function(e2, t2, n) {
          var r = this && this.__awaiter || function(e3, t3, n2, r2) {
            return new (n2 || (n2 = Promise))(function(i2, o2) {
              function s4(e4) {
                try {
                  c(r2.next(e4));
                } catch (e5) {
                  o2(e5);
                }
              }
              function a(e4) {
                try {
                  c(r2.throw(e4));
                } catch (e5) {
                  o2(e5);
                }
              }
              function c(e4) {
                var t4;
                e4.done ? i2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                  e5(t4);
                })).then(s4, a);
              }
              c((r2 = r2.apply(e3, t3 || [])).next());
            });
          }, i = this && this.__generator || function(e3, t3) {
            var n2, r2, i2, o2, s4 = {label: 0, sent: function() {
              if (1 & i2[0])
                throw i2[1];
              return i2[1];
            }, trys: [], ops: []};
            return o2 = {next: a(0), throw: a(1), return: a(2)}, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
              return this;
            }), o2;
            function a(o3) {
              return function(a2) {
                return function(o4) {
                  if (n2)
                    throw new TypeError("Generator is already executing.");
                  for (; s4; )
                    try {
                      if (n2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                        return i2;
                      switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                        case 0:
                        case 1:
                          i2 = o4;
                          break;
                        case 4:
                          return s4.label++, {value: o4[1], done: false};
                        case 5:
                          s4.label++, r2 = o4[1], o4 = [0];
                          continue;
                        case 7:
                          o4 = s4.ops.pop(), s4.trys.pop();
                          continue;
                        default:
                          if (!((i2 = (i2 = s4.trys).length > 0 && i2[i2.length - 1]) || o4[0] !== 6 && o4[0] !== 2)) {
                            s4 = 0;
                            continue;
                          }
                          if (o4[0] === 3 && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                            s4.label = o4[1];
                            break;
                          }
                          if (o4[0] === 6 && s4.label < i2[1]) {
                            s4.label = i2[1], i2 = o4;
                            break;
                          }
                          if (i2 && s4.label < i2[2]) {
                            s4.label = i2[2], s4.ops.push(o4);
                            break;
                          }
                          i2[2] && s4.ops.pop(), s4.trys.pop();
                          continue;
                      }
                      o4 = t3.call(e3, s4);
                    } catch (e4) {
                      o4 = [6, e4], r2 = 0;
                    } finally {
                      n2 = i2 = 0;
                    }
                  if (5 & o4[0])
                    throw o4[1];
                  return {value: o4[0] ? o4[1] : void 0, done: true};
                }([o3, a2]);
              };
            }
          };
          Object.defineProperty(t2, "__esModule", {value: true}), t2.SyncRegistry = void 0;
          var o = n(527), s3 = function() {
            function e3(e4, t3) {
              this._theme = e4, this._grammars = {}, this._rawGrammars = {}, this._injectionGrammars = {}, this._onigLibPromise = t3;
            }
            return e3.prototype.dispose = function() {
              for (var e4 in this._grammars)
                this._grammars.hasOwnProperty(e4) && this._grammars[e4].dispose();
            }, e3.prototype.setTheme = function(e4) {
              var t3 = this;
              this._theme = e4, Object.keys(this._grammars).forEach(function(e5) {
                t3._grammars[e5].onDidChangeTheme();
              });
            }, e3.prototype.getColorMap = function() {
              return this._theme.getColorMap();
            }, e3.prototype.addGrammar = function(e4, t3) {
              this._rawGrammars[e4.scopeName] = e4, t3 && (this._injectionGrammars[e4.scopeName] = t3);
            }, e3.prototype.lookup = function(e4) {
              return this._rawGrammars[e4];
            }, e3.prototype.injections = function(e4) {
              return this._injectionGrammars[e4];
            }, e3.prototype.getDefaults = function() {
              return this._theme.getDefaults();
            }, e3.prototype.themeMatch = function(e4) {
              return this._theme.match(e4);
            }, e3.prototype.grammarForScopeName = function(e4, t3, n2, s4) {
              return r(this, void 0, void 0, function() {
                var r2, a, c, u, l;
                return i(this, function(i2) {
                  switch (i2.label) {
                    case 0:
                      return this._grammars[e4] ? [3, 2] : (r2 = this._rawGrammars[e4]) ? (a = this._grammars, c = e4, u = o.createGrammar, l = [r2, t3, n2, s4, this], [4, this._onigLibPromise]) : [2, null];
                    case 1:
                      a[c] = u.apply(void 0, l.concat([i2.sent()])), i2.label = 2;
                    case 2:
                      return [2, this._grammars[e4]];
                  }
                });
              });
            }, e3;
          }();
          t2.SyncRegistry = s3;
        }, 792: function(e2, t2, n) {
          var r, i = this && this.__extends || (r = function(e3, t3) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n2 in t4)
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            })(e3, t3);
          }, function(e3, t3) {
            if (typeof t3 != "function" && t3 !== null)
              throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
            function n2() {
              this.constructor = e3;
            }
            r(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (n2.prototype = t3.prototype, new n2());
          });
          Object.defineProperty(t2, "__esModule", {value: true}), t2.RuleFactory = t2.BeginWhileRule = t2.BeginEndRule = t2.IncludeOnlyRule = t2.MatchRule = t2.RegExpSourceList = t2.RegExpSource = t2.CaptureRule = t2.Rule = t2.CompiledRule = void 0;
          var o = n(878), s3 = /\\(\d+)/, a = /\\(\d+)/g, c = function() {
            function e3(e4, t3, n2) {
              this.debugRegExps = t3, this.rules = n2, this.scanner = e4.createOnigScanner(t3);
            }
            return e3.prototype.dispose = function() {
              typeof this.scanner.dispose == "function" && this.scanner.dispose();
            }, e3;
          }();
          t2.CompiledRule = c;
          var u = function() {
            function e3(e4, t3, n2, r2) {
              this.$location = e4, this.id = t3, this._name = n2 || null, this._nameIsCapturing = o.RegexSource.hasCaptures(this._name), this._contentName = r2 || null, this._contentNameIsCapturing = o.RegexSource.hasCaptures(this._contentName);
            }
            return Object.defineProperty(e3.prototype, "debugName", {get: function() {
              var e4 = this.$location ? o.basename(this.$location.filename) + ":" + this.$location.line : "unknown";
              return this.constructor.name + "#" + this.id + " @ " + e4;
            }, enumerable: false, configurable: true}), e3.prototype.getName = function(e4, t3) {
              return this._nameIsCapturing && this._name !== null && e4 !== null && t3 !== null ? o.RegexSource.replaceCaptures(this._name, e4, t3) : this._name;
            }, e3.prototype.getContentName = function(e4, t3) {
              return this._contentNameIsCapturing && this._contentName !== null ? o.RegexSource.replaceCaptures(this._contentName, e4, t3) : this._contentName;
            }, e3;
          }();
          t2.Rule = u;
          var l = function(e3) {
            function t3(t4, n2, r2, i2, o2) {
              var s4 = e3.call(this, t4, n2, r2, i2) || this;
              return s4.retokenizeCapturedWithRuleId = o2, s4;
            }
            return i(t3, e3), t3.prototype.dispose = function() {
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              throw new Error("Not supported!");
            }, t3.prototype.compile = function(e4, t4) {
              throw new Error("Not supported!");
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              throw new Error("Not supported!");
            }, t3;
          }(u);
          t2.CaptureRule = l;
          var h2 = function() {
            function e3(e4, t3, n2) {
              if (n2 === void 0 && (n2 = true), n2)
                if (e4) {
                  for (var r2 = e4.length, i2 = 0, o2 = [], a2 = false, c2 = 0; c2 < r2; c2++)
                    if (e4.charAt(c2) === "\\" && c2 + 1 < r2) {
                      var u2 = e4.charAt(c2 + 1);
                      u2 === "z" ? (o2.push(e4.substring(i2, c2)), o2.push("$(?!\\n)(?<!\\n)"), i2 = c2 + 2) : u2 !== "A" && u2 !== "G" || (a2 = true), c2++;
                    }
                  this.hasAnchor = a2, i2 === 0 ? this.source = e4 : (o2.push(e4.substring(i2, r2)), this.source = o2.join(""));
                } else
                  this.hasAnchor = false, this.source = e4;
              else
                this.hasAnchor = false, this.source = e4;
              this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t3, this.hasBackReferences = s3.test(this.source);
            }
            return e3.prototype.clone = function() {
              return new e3(this.source, this.ruleId, true);
            }, e3.prototype.setSource = function(e4) {
              this.source !== e4 && (this.source = e4, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
            }, e3.prototype.resolveBackReferences = function(e4, t3) {
              var n2 = t3.map(function(t4) {
                return e4.substring(t4.start, t4.end);
              });
              return a.lastIndex = 0, this.source.replace(a, function(e5, t4) {
                return (n2[parseInt(t4, 10)] || "").replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
              });
            }, e3.prototype._buildAnchorCache = function() {
              var e4, t3, n2, r2, i2 = [], o2 = [], s4 = [], a2 = [];
              for (e4 = 0, t3 = this.source.length; e4 < t3; e4++)
                n2 = this.source.charAt(e4), i2[e4] = n2, o2[e4] = n2, s4[e4] = n2, a2[e4] = n2, n2 === "\\" && e4 + 1 < t3 && ((r2 = this.source.charAt(e4 + 1)) === "A" ? (i2[e4 + 1] = "\uFFFF", o2[e4 + 1] = "\uFFFF", s4[e4 + 1] = "A", a2[e4 + 1] = "A") : r2 === "G" ? (i2[e4 + 1] = "\uFFFF", o2[e4 + 1] = "G", s4[e4 + 1] = "\uFFFF", a2[e4 + 1] = "G") : (i2[e4 + 1] = r2, o2[e4 + 1] = r2, s4[e4 + 1] = r2, a2[e4 + 1] = r2), e4++);
              return {A0_G0: i2.join(""), A0_G1: o2.join(""), A1_G0: s4.join(""), A1_G1: a2.join("")};
            }, e3.prototype.resolveAnchors = function(e4, t3) {
              return this.hasAnchor && this._anchorCache ? e4 ? t3 ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t3 ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0 : this.source;
            }, e3;
          }();
          t2.RegExpSource = h2;
          var p = function() {
            function e3() {
              this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = {A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null};
            }
            return e3.prototype.dispose = function() {
              this._disposeCaches();
            }, e3.prototype._disposeCaches = function() {
              this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
            }, e3.prototype.push = function(e4) {
              this._items.push(e4), this._hasAnchors = this._hasAnchors || e4.hasAnchor;
            }, e3.prototype.unshift = function(e4) {
              this._items.unshift(e4), this._hasAnchors = this._hasAnchors || e4.hasAnchor;
            }, e3.prototype.length = function() {
              return this._items.length;
            }, e3.prototype.setSource = function(e4, t3) {
              this._items[e4].source !== t3 && (this._disposeCaches(), this._items[e4].setSource(t3));
            }, e3.prototype.compile = function(e4) {
              if (!this._cached) {
                var t3 = this._items.map(function(e5) {
                  return e5.source;
                });
                this._cached = new c(e4, t3, this._items.map(function(e5) {
                  return e5.ruleId;
                }));
              }
              return this._cached;
            }, e3.prototype.compileAG = function(e4, t3, n2) {
              return this._hasAnchors ? t3 ? n2 ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A1_G0) : n2 ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A0_G0) : this.compile(e4);
            }, e3.prototype._resolveAnchors = function(e4, t3, n2) {
              var r2 = this._items.map(function(e5) {
                return e5.resolveAnchors(t3, n2);
              });
              return new c(e4, r2, this._items.map(function(e5) {
                return e5.ruleId;
              }));
            }, e3;
          }();
          t2.RegExpSourceList = p;
          var d = function(e3) {
            function t3(t4, n2, r2, i2, o2) {
              var s4 = e3.call(this, t4, n2, r2, null) || this;
              return s4._match = new h2(i2, s4.id), s4.captures = o2, s4._cachedCompiledPatterns = null, s4;
            }
            return i(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
            }, Object.defineProperty(t3.prototype, "debugMatchRegExp", {get: function() {
              return "" + this._match.source;
            }, enumerable: false, configurable: true}), t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              t4.push(this._match);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true)), this._cachedCompiledPatterns;
            }, t3;
          }(u);
          t2.MatchRule = d;
          var f = function(e3) {
            function t3(t4, n2, r2, i2, o2) {
              var s4 = e3.call(this, t4, n2, r2, i2) || this;
              return s4.patterns = o2.patterns, s4.hasMissingPatterns = o2.hasMissingPatterns, s4._cachedCompiledPatterns = null, s4;
            }
            return i(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              var r2, i2;
              for (r2 = 0, i2 = this.patterns.length; r2 < i2; r2++)
                e4.getRule(this.patterns[r2]).collectPatternsRecursive(e4, t4, false);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true)), this._cachedCompiledPatterns;
            }, t3;
          }(u);
          t2.IncludeOnlyRule = f;
          var g = function(e3) {
            function t3(t4, n2, r2, i2, o2, s4, a2, c2, u2, l2) {
              var p2 = e3.call(this, t4, n2, r2, i2) || this;
              return p2._begin = new h2(o2, p2.id), p2.beginCaptures = s4, p2._end = new h2(a2 || "\uFFFF", -1), p2.endHasBackReferences = p2._end.hasBackReferences, p2.endCaptures = c2, p2.applyEndPatternLast = u2 || false, p2.patterns = l2.patterns, p2.hasMissingPatterns = l2.hasMissingPatterns, p2._cachedCompiledPatterns = null, p2;
            }
            return i(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
            }, Object.defineProperty(t3.prototype, "debugBeginRegExp", {get: function() {
              return "" + this._begin.source;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "debugEndRegExp", {get: function() {
              return "" + this._end.source;
            }, enumerable: false, configurable: true}), t3.prototype.getEndWithResolvedBackReferences = function(e4, t4) {
              return this._end.resolveBackReferences(e4, t4);
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              if (n2) {
                var r2, i2 = void 0;
                for (i2 = 0, r2 = this.patterns.length; i2 < r2; i2++)
                  e4.getRule(this.patterns[i2]).collectPatternsRecursive(e4, t4, false);
              } else
                t4.push(this._begin);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4, t4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4, t4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4, t4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true), this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end)), this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t4) : this._cachedCompiledPatterns.setSource(0, t4)), this._cachedCompiledPatterns;
            }, t3;
          }(u);
          t2.BeginEndRule = g;
          var m = function(e3) {
            function t3(t4, n2, r2, i2, o2, s4, a2, c2, u2) {
              var l2 = e3.call(this, t4, n2, r2, i2) || this;
              return l2._begin = new h2(o2, l2.id), l2.beginCaptures = s4, l2.whileCaptures = c2, l2._while = new h2(a2, -2), l2.whileHasBackReferences = l2._while.hasBackReferences, l2.patterns = u2.patterns, l2.hasMissingPatterns = u2.hasMissingPatterns, l2._cachedCompiledPatterns = null, l2._cachedCompiledWhilePatterns = null, l2;
            }
            return i(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
            }, Object.defineProperty(t3.prototype, "debugBeginRegExp", {get: function() {
              return "" + this._begin.source;
            }, enumerable: false, configurable: true}), Object.defineProperty(t3.prototype, "debugWhileRegExp", {get: function() {
              return "" + this._while.source;
            }, enumerable: false, configurable: true}), t3.prototype.getWhileWithResolvedBackReferences = function(e4, t4) {
              return this._while.resolveBackReferences(e4, t4);
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              if (n2) {
                var r2, i2 = void 0;
                for (i2 = 0, r2 = this.patterns.length; i2 < r2; i2++)
                  e4.getRule(this.patterns[i2]).collectPatternsRecursive(e4, t4, false);
              } else
                t4.push(this._begin);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true)), this._cachedCompiledPatterns;
            }, t3.prototype.compileWhile = function(e4, t4) {
              return this._getCachedCompiledWhilePatterns(e4, t4).compile(e4);
            }, t3.prototype.compileWhileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledWhilePatterns(e4, t4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledWhilePatterns = function(e4, t4) {
              return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new p(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t4 || "\uFFFF"), this._cachedCompiledWhilePatterns;
            }, t3;
          }(u);
          t2.BeginWhileRule = m;
          var _ = function() {
            function e3() {
            }
            return e3.createCaptureRule = function(e4, t3, n2, r2, i2) {
              return e4.registerRule(function(e5) {
                return new l(t3, e5, n2, r2, i2);
              });
            }, e3.getCompiledRuleId = function(t3, n2, r2) {
              return t3.id || n2.registerRule(function(i2) {
                if (t3.id = i2, t3.match)
                  return new d(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.match, e3._compileCaptures(t3.captures, n2, r2));
                if (t3.begin === void 0) {
                  t3.repository && (r2 = o.mergeObjects({}, r2, t3.repository));
                  var s4 = t3.patterns;
                  return s4 === void 0 && t3.include && (s4 = [{include: t3.include}]), new f(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.contentName, e3._compilePatterns(s4, n2, r2));
                }
                return t3.while ? new m(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.contentName, t3.begin, e3._compileCaptures(t3.beginCaptures || t3.captures, n2, r2), t3.while, e3._compileCaptures(t3.whileCaptures || t3.captures, n2, r2), e3._compilePatterns(t3.patterns, n2, r2)) : new g(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.contentName, t3.begin, e3._compileCaptures(t3.beginCaptures || t3.captures, n2, r2), t3.end, e3._compileCaptures(t3.endCaptures || t3.captures, n2, r2), t3.applyEndPatternLast, e3._compilePatterns(t3.patterns, n2, r2));
              }), t3.id;
            }, e3._compileCaptures = function(t3, n2, r2) {
              var i2 = [];
              if (t3) {
                var o2 = 0;
                for (var s4 in t3)
                  s4 !== "$vscodeTextmateLocation" && (c2 = parseInt(s4, 10)) > o2 && (o2 = c2);
                for (var a2 = 0; a2 <= o2; a2++)
                  i2[a2] = null;
                for (var s4 in t3)
                  if (s4 !== "$vscodeTextmateLocation") {
                    var c2 = parseInt(s4, 10), u2 = 0;
                    t3[s4].patterns && (u2 = e3.getCompiledRuleId(t3[s4], n2, r2)), i2[c2] = e3.createCaptureRule(n2, t3[s4].$vscodeTextmateLocation, t3[s4].name, t3[s4].contentName, u2);
                  }
              }
              return i2;
            }, e3._compilePatterns = function(t3, n2, r2) {
              var i2 = [];
              if (t3)
                for (var o2 = 0, s4 = t3.length; o2 < s4; o2++) {
                  var a2 = t3[o2], c2 = -1;
                  if (a2.include)
                    if (a2.include.charAt(0) === "#") {
                      var u2 = r2[a2.include.substr(1)];
                      u2 && (c2 = e3.getCompiledRuleId(u2, n2, r2));
                    } else if (a2.include === "$base" || a2.include === "$self")
                      c2 = e3.getCompiledRuleId(r2[a2.include], n2, r2);
                    else {
                      var l2 = null, h3 = null, p2 = a2.include.indexOf("#");
                      p2 >= 0 ? (l2 = a2.include.substring(0, p2), h3 = a2.include.substring(p2 + 1)) : l2 = a2.include;
                      var d2 = n2.getExternalGrammar(l2, r2);
                      if (d2)
                        if (h3) {
                          var _2 = d2.repository[h3];
                          _2 && (c2 = e3.getCompiledRuleId(_2, n2, d2.repository));
                        } else
                          c2 = e3.getCompiledRuleId(d2.repository.$self, n2, d2.repository);
                    }
                  else
                    c2 = e3.getCompiledRuleId(a2, n2, r2);
                  if (c2 !== -1) {
                    var y = n2.getRule(c2), v = false;
                    if ((y instanceof f || y instanceof g || y instanceof m) && y.hasMissingPatterns && y.patterns.length === 0 && (v = true), v)
                      continue;
                    i2.push(c2);
                  }
                }
              return {patterns: i2, hasMissingPatterns: (t3 ? t3.length : 0) !== i2.length};
            }, e3;
          }();
          t2.RuleFactory = _;
        }, 583: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true}), t2.ThemeTrieElement = t2.ThemeTrieElementRule = t2.strArrCmp = t2.strcmp = t2.Theme = t2.ColorMap = t2.parseTheme = t2.ParsedThemeRule = void 0;
          var n = function(e3, t3, n2, r2, i2, o2) {
            this.scope = e3, this.parentScopes = t3, this.index = n2, this.fontStyle = r2, this.foreground = i2, this.background = o2;
          };
          function r(e3) {
            return !!(/^#[0-9a-f]{6}$/i.test(e3) || /^#[0-9a-f]{8}$/i.test(e3) || /^#[0-9a-f]{3}$/i.test(e3) || /^#[0-9a-f]{4}$/i.test(e3));
          }
          function i(e3) {
            if (!e3)
              return [];
            if (!e3.settings || !Array.isArray(e3.settings))
              return [];
            for (var t3 = e3.settings, i2 = [], o2 = 0, s4 = 0, a2 = t3.length; s4 < a2; s4++) {
              var c2 = t3[s4];
              if (c2.settings) {
                var u2 = void 0;
                u2 = typeof c2.scope == "string" ? c2.scope.replace(/^[,]+/, "").replace(/[,]+$/, "").split(",") : Array.isArray(c2.scope) ? c2.scope : [""];
                var l2 = -1;
                if (typeof c2.settings.fontStyle == "string") {
                  l2 = 0;
                  for (var h3 = 0, p = (g = c2.settings.fontStyle.split(" ")).length; h3 < p; h3++)
                    switch (g[h3]) {
                      case "italic":
                        l2 |= 1;
                        break;
                      case "bold":
                        l2 |= 2;
                        break;
                      case "underline":
                        l2 |= 4;
                    }
                }
                var d = null;
                typeof c2.settings.foreground == "string" && r(c2.settings.foreground) && (d = c2.settings.foreground);
                var f = null;
                for (typeof c2.settings.background == "string" && r(c2.settings.background) && (f = c2.settings.background), h3 = 0, p = u2.length; h3 < p; h3++) {
                  var g, m = (g = u2[h3].trim().split(" "))[g.length - 1], _ = null;
                  g.length > 1 && (_ = g.slice(0, g.length - 1)).reverse(), i2[o2++] = new n(m, _, s4, l2, d, f);
                }
              }
            }
            return i2;
          }
          function o(e3, t3) {
            e3.sort(function(e4, t4) {
              var n3 = c(e4.scope, t4.scope);
              return n3 !== 0 || (n3 = u(e4.parentScopes, t4.parentScopes)) !== 0 ? n3 : e4.index - t4.index;
            });
            for (var n2 = 0, r2 = "#000000", i2 = "#ffffff"; e3.length >= 1 && e3[0].scope === ""; ) {
              var o2 = e3.shift();
              o2.fontStyle !== -1 && (n2 = o2.fontStyle), o2.foreground !== null && (r2 = o2.foreground), o2.background !== null && (i2 = o2.background);
            }
            for (var p = new s3(t3), d = new l(0, null, n2, p.getId(r2), p.getId(i2)), f = new h2(new l(0, null, -1, 0, 0), []), g = 0, m = e3.length; g < m; g++) {
              var _ = e3[g];
              f.insert(0, _.scope, _.parentScopes, _.fontStyle, p.getId(_.foreground), p.getId(_.background));
            }
            return new a(p, d, f);
          }
          t2.ParsedThemeRule = n, t2.parseTheme = i;
          var s3 = function() {
            function e3(e4) {
              if (this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null), Array.isArray(e4)) {
                this._isFrozen = true;
                for (var t3 = 0, n2 = e4.length; t3 < n2; t3++)
                  this._color2id[e4[t3]] = t3, this._id2color[t3] = e4[t3];
              } else
                this._isFrozen = false;
            }
            return e3.prototype.getId = function(e4) {
              if (e4 === null)
                return 0;
              e4 = e4.toUpperCase();
              var t3 = this._color2id[e4];
              if (t3)
                return t3;
              if (this._isFrozen)
                throw new Error("Missing color in color map - " + e4);
              return t3 = ++this._lastColorId, this._color2id[e4] = t3, this._id2color[t3] = e4, t3;
            }, e3.prototype.getColorMap = function() {
              return this._id2color.slice(0);
            }, e3;
          }();
          t2.ColorMap = s3;
          var a = function() {
            function e3(e4, t3, n2) {
              this._colorMap = e4, this._root = n2, this._defaults = t3, this._cache = {};
            }
            return e3.createFromRawTheme = function(e4, t3) {
              return this.createFromParsedTheme(i(e4), t3);
            }, e3.createFromParsedTheme = function(e4, t3) {
              return o(e4, t3);
            }, e3.prototype.getColorMap = function() {
              return this._colorMap.getColorMap();
            }, e3.prototype.getDefaults = function() {
              return this._defaults;
            }, e3.prototype.match = function(e4) {
              return this._cache.hasOwnProperty(e4) || (this._cache[e4] = this._root.match(e4)), this._cache[e4];
            }, e3;
          }();
          function c(e3, t3) {
            return e3 < t3 ? -1 : e3 > t3 ? 1 : 0;
          }
          function u(e3, t3) {
            if (e3 === null && t3 === null)
              return 0;
            if (!e3)
              return -1;
            if (!t3)
              return 1;
            var n2 = e3.length, r2 = t3.length;
            if (n2 === r2) {
              for (var i2 = 0; i2 < n2; i2++) {
                var o2 = c(e3[i2], t3[i2]);
                if (o2 !== 0)
                  return o2;
              }
              return 0;
            }
            return n2 - r2;
          }
          t2.Theme = a, t2.strcmp = c, t2.strArrCmp = u;
          var l = function() {
            function e3(e4, t3, n2, r2, i2) {
              this.scopeDepth = e4, this.parentScopes = t3, this.fontStyle = n2, this.foreground = r2, this.background = i2;
            }
            return e3.prototype.clone = function() {
              return new e3(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
            }, e3.cloneArr = function(e4) {
              for (var t3 = [], n2 = 0, r2 = e4.length; n2 < r2; n2++)
                t3[n2] = e4[n2].clone();
              return t3;
            }, e3.prototype.acceptOverwrite = function(e4, t3, n2, r2) {
              this.scopeDepth > e4 ? console.log("how did this happen?") : this.scopeDepth = e4, t3 !== -1 && (this.fontStyle = t3), n2 !== 0 && (this.foreground = n2), r2 !== 0 && (this.background = r2);
            }, e3;
          }();
          t2.ThemeTrieElementRule = l;
          var h2 = function() {
            function e3(e4, t3, n2) {
              t3 === void 0 && (t3 = []), n2 === void 0 && (n2 = {}), this._mainRule = e4, this._rulesWithParentScopes = t3, this._children = n2;
            }
            return e3._sortBySpecificity = function(e4) {
              return e4.length === 1 || e4.sort(this._cmpBySpecificity), e4;
            }, e3._cmpBySpecificity = function(e4, t3) {
              if (e4.scopeDepth === t3.scopeDepth) {
                var n2 = e4.parentScopes, r2 = t3.parentScopes, i2 = n2 === null ? 0 : n2.length, o2 = r2 === null ? 0 : r2.length;
                if (i2 === o2)
                  for (var s4 = 0; s4 < i2; s4++) {
                    var a2 = n2[s4].length, c2 = r2[s4].length;
                    if (a2 !== c2)
                      return c2 - a2;
                  }
                return o2 - i2;
              }
              return t3.scopeDepth - e4.scopeDepth;
            }, e3.prototype.match = function(t3) {
              if (t3 === "")
                return e3._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
              var n2, r2, i2 = t3.indexOf(".");
              return i2 === -1 ? (n2 = t3, r2 = "") : (n2 = t3.substring(0, i2), r2 = t3.substring(i2 + 1)), this._children.hasOwnProperty(n2) ? this._children[n2].match(r2) : e3._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
            }, e3.prototype.insert = function(t3, n2, r2, i2, o2, s4) {
              if (n2 !== "") {
                var a2, c2, u2, h3 = n2.indexOf(".");
                h3 === -1 ? (a2 = n2, c2 = "") : (a2 = n2.substring(0, h3), c2 = n2.substring(h3 + 1)), this._children.hasOwnProperty(a2) ? u2 = this._children[a2] : (u2 = new e3(this._mainRule.clone(), l.cloneArr(this._rulesWithParentScopes)), this._children[a2] = u2), u2.insert(t3 + 1, c2, r2, i2, o2, s4);
              } else
                this._doInsertHere(t3, r2, i2, o2, s4);
            }, e3.prototype._doInsertHere = function(e4, t3, n2, r2, i2) {
              if (t3 !== null) {
                for (var o2 = 0, s4 = this._rulesWithParentScopes.length; o2 < s4; o2++) {
                  var a2 = this._rulesWithParentScopes[o2];
                  if (u(a2.parentScopes, t3) === 0)
                    return void a2.acceptOverwrite(e4, n2, r2, i2);
                }
                n2 === -1 && (n2 = this._mainRule.fontStyle), r2 === 0 && (r2 = this._mainRule.foreground), i2 === 0 && (i2 = this._mainRule.background), this._rulesWithParentScopes.push(new l(e4, t3, n2, r2, i2));
              } else
                this._mainRule.acceptOverwrite(e4, n2, r2, i2);
            }, e3;
          }();
          t2.ThemeTrieElement = h2;
        }, 42: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {value: true});
        }, 878: (e2, t2) => {
          function n(e3) {
            return Array.isArray(e3) ? function(e4) {
              for (var t3 = [], r2 = 0, i2 = e4.length; r2 < i2; r2++)
                t3[r2] = n(e4[r2]);
              return t3;
            }(e3) : typeof e3 == "object" ? function(e4) {
              var t3 = {};
              for (var r2 in e4)
                t3[r2] = n(e4[r2]);
              return t3;
            }(e3) : e3;
          }
          Object.defineProperty(t2, "__esModule", {value: true}), t2.RegexSource = t2.basename = t2.mergeObjects = t2.clone = void 0, t2.clone = function(e3) {
            return n(e3);
          }, t2.mergeObjects = function(e3) {
            for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
              t3[n2 - 1] = arguments[n2];
            return t3.forEach(function(t4) {
              for (var n3 in t4)
                e3[n3] = t4[n3];
            }), e3;
          }, t2.basename = function e3(t3) {
            var n2 = ~t3.lastIndexOf("/") || ~t3.lastIndexOf("\\");
            return n2 === 0 ? t3 : ~n2 == t3.length - 1 ? e3(t3.substring(0, t3.length - 1)) : t3.substr(1 + ~n2);
          };
          var r = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, i = function() {
            function e3() {
            }
            return e3.hasCaptures = function(e4) {
              return e4 !== null && (r.lastIndex = 0, r.test(e4));
            }, e3.replaceCaptures = function(e4, t3, n2) {
              return e4.replace(r, function(e5, r2, i2, o) {
                var s3 = n2[parseInt(r2 || i2, 10)];
                if (!s3)
                  return e5;
                for (var a = t3.substring(s3.start, s3.end); a[0] === "."; )
                  a = a.substring(1);
                switch (o) {
                  case "downcase":
                    return a.toLowerCase();
                  case "upcase":
                    return a.toUpperCase();
                  default:
                    return a;
                }
              });
            }, e3;
          }();
          t2.RegexSource = i;
        }}, t = {};
        return function n(r) {
          if (t[r])
            return t[r].exports;
          var i = t[r] = {exports: {}};
          return e[r].call(i.exports, i, i.exports, n), i.exports;
        }(787);
      })();
    });
  }
});

// (disabled):path
var require_path = __commonJS({
  "(disabled):path"() {
  }
});

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/schema.js
var require_schema2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/schema.js"(exports, module) {
    "use strict";
    module.exports = Schema2;
    var proto = Schema2.prototype;
    proto.space = null;
    proto.normal = {};
    proto.property = {};
    function Schema2(property, normal, space) {
      this.property = property;
      this.normal = normal;
      if (space) {
        this.space = space;
      }
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/merge.js
var require_merge2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/merge.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var Schema2 = require_schema2();
    module.exports = merge2;
    function merge2(definitions) {
      var length = definitions.length;
      var property = [];
      var normal = [];
      var index = -1;
      var info;
      var space;
      while (++index < length) {
        info = definitions[index];
        property.push(info.property);
        normal.push(info.normal);
        space = info.space;
      }
      return new Schema2(xtend.apply(null, property), xtend.apply(null, normal), space);
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/normalize.js
var require_normalize2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/normalize.js"(exports, module) {
    "use strict";
    module.exports = normalize2;
    function normalize2(value) {
      return value.toLowerCase();
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/info.js
var require_info2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/info.js"(exports, module) {
    "use strict";
    module.exports = Info2;
    var proto = Info2.prototype;
    proto.space = null;
    proto.attribute = null;
    proto.property = null;
    proto.boolean = false;
    proto.booleanish = false;
    proto.overloadedBoolean = false;
    proto.number = false;
    proto.commaSeparated = false;
    proto.spaceSeparated = false;
    proto.commaOrSpaceSeparated = false;
    proto.mustUseProperty = false;
    proto.defined = false;
    function Info2(property, attribute) {
      this.property = property;
      this.attribute = attribute;
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/types.js
var require_types2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/types.js"(exports) {
    "use strict";
    var powers2 = 0;
    exports.boolean = increment2();
    exports.booleanish = increment2();
    exports.overloadedBoolean = increment2();
    exports.number = increment2();
    exports.spaceSeparated = increment2();
    exports.commaSeparated = increment2();
    exports.commaOrSpaceSeparated = increment2();
    function increment2() {
      return Math.pow(2, ++powers2);
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/defined-info.js
var require_defined_info2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/defined-info.js"(exports, module) {
    "use strict";
    var Info2 = require_info2();
    var types = require_types2();
    module.exports = DefinedInfo2;
    DefinedInfo2.prototype = new Info2();
    DefinedInfo2.prototype.defined = true;
    var checks2 = [
      "boolean",
      "booleanish",
      "overloadedBoolean",
      "number",
      "commaSeparated",
      "spaceSeparated",
      "commaOrSpaceSeparated"
    ];
    var checksLength = checks2.length;
    function DefinedInfo2(property, attribute, mask, space) {
      var index = -1;
      var check;
      mark2(this, "space", space);
      Info2.call(this, property, attribute);
      while (++index < checksLength) {
        check = checks2[index];
        mark2(this, check, (mask & types[check]) === types[check]);
      }
    }
    function mark2(values, key, value) {
      if (value) {
        values[key] = value;
      }
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/create.js
var require_create2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/create.js"(exports, module) {
    "use strict";
    var normalize2 = require_normalize2();
    var Schema2 = require_schema2();
    var DefinedInfo2 = require_defined_info2();
    module.exports = create2;
    function create2(definition) {
      var space = definition.space;
      var mustUseProperty = definition.mustUseProperty || [];
      var attributes = definition.attributes || {};
      var props = definition.properties;
      var transform = definition.transform;
      var property = {};
      var normal = {};
      var prop;
      var info;
      for (prop in props) {
        info = new DefinedInfo2(prop, transform(attributes, prop), props[prop], space);
        if (mustUseProperty.indexOf(prop) !== -1) {
          info.mustUseProperty = true;
        }
        property[prop] = info;
        normal[normalize2(prop)] = prop;
        normal[normalize2(info.attribute)] = prop;
      }
      return new Schema2(property, normal, space);
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/xlink.js
var require_xlink2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/xlink.js"(exports, module) {
    "use strict";
    var create2 = require_create2();
    module.exports = create2({
      space: "xlink",
      transform: xlinkTransform2,
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
      }
    });
    function xlinkTransform2(_, prop) {
      return "xlink:" + prop.slice(5).toLowerCase();
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/xml.js
var require_xml2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/xml.js"(exports, module) {
    "use strict";
    var create2 = require_create2();
    module.exports = create2({
      space: "xml",
      transform: xmlTransform2,
      properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
      }
    });
    function xmlTransform2(_, prop) {
      return "xml:" + prop.slice(3).toLowerCase();
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/case-sensitive-transform.js
var require_case_sensitive_transform2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
    "use strict";
    module.exports = caseSensitiveTransform2;
    function caseSensitiveTransform2(attributes, attribute) {
      return attribute in attributes ? attributes[attribute] : attribute;
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/util/case-insensitive-transform.js
var require_case_insensitive_transform2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
    "use strict";
    var caseSensitiveTransform2 = require_case_sensitive_transform2();
    module.exports = caseInsensitiveTransform2;
    function caseInsensitiveTransform2(attributes, property) {
      return caseSensitiveTransform2(attributes, property.toLowerCase());
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/xmlns.js
var require_xmlns2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/xmlns.js"(exports, module) {
    "use strict";
    var create2 = require_create2();
    var caseInsensitiveTransform2 = require_case_insensitive_transform2();
    module.exports = create2({
      space: "xmlns",
      attributes: {
        xmlnsxlink: "xmlns:xlink"
      },
      transform: caseInsensitiveTransform2,
      properties: {
        xmlns: null,
        xmlnsXLink: null
      }
    });
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/aria.js
var require_aria2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/aria.js"(exports, module) {
    "use strict";
    var types = require_types2();
    var create2 = require_create2();
    var booleanish2 = types.booleanish;
    var number2 = types.number;
    var spaceSeparated2 = types.spaceSeparated;
    module.exports = create2({
      transform: ariaTransform2,
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: booleanish2,
        ariaAutoComplete: null,
        ariaBusy: booleanish2,
        ariaChecked: booleanish2,
        ariaColCount: number2,
        ariaColIndex: number2,
        ariaColSpan: number2,
        ariaControls: spaceSeparated2,
        ariaCurrent: null,
        ariaDescribedBy: spaceSeparated2,
        ariaDetails: null,
        ariaDisabled: booleanish2,
        ariaDropEffect: spaceSeparated2,
        ariaErrorMessage: null,
        ariaExpanded: booleanish2,
        ariaFlowTo: spaceSeparated2,
        ariaGrabbed: booleanish2,
        ariaHasPopup: null,
        ariaHidden: booleanish2,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: spaceSeparated2,
        ariaLevel: number2,
        ariaLive: null,
        ariaModal: booleanish2,
        ariaMultiLine: booleanish2,
        ariaMultiSelectable: booleanish2,
        ariaOrientation: null,
        ariaOwns: spaceSeparated2,
        ariaPlaceholder: null,
        ariaPosInSet: number2,
        ariaPressed: booleanish2,
        ariaReadOnly: booleanish2,
        ariaRelevant: null,
        ariaRequired: booleanish2,
        ariaRoleDescription: spaceSeparated2,
        ariaRowCount: number2,
        ariaRowIndex: number2,
        ariaRowSpan: number2,
        ariaSelected: booleanish2,
        ariaSetSize: number2,
        ariaSort: null,
        ariaValueMax: number2,
        ariaValueMin: number2,
        ariaValueNow: number2,
        ariaValueText: null,
        role: null
      }
    });
    function ariaTransform2(_, prop) {
      return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/html.js
var require_html6 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/html.js"(exports, module) {
    "use strict";
    var types = require_types2();
    var create2 = require_create2();
    var caseInsensitiveTransform2 = require_case_insensitive_transform2();
    var boolean2 = types.boolean;
    var overloadedBoolean2 = types.overloadedBoolean;
    var booleanish2 = types.booleanish;
    var number2 = types.number;
    var spaceSeparated2 = types.spaceSeparated;
    var commaSeparated2 = types.commaSeparated;
    module.exports = create2({
      space: "html",
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
      },
      transform: caseInsensitiveTransform2,
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        abbr: null,
        accept: commaSeparated2,
        acceptCharset: spaceSeparated2,
        accessKey: spaceSeparated2,
        action: null,
        allow: null,
        allowFullScreen: boolean2,
        allowPaymentRequest: boolean2,
        allowUserMedia: boolean2,
        alt: null,
        as: null,
        async: boolean2,
        autoCapitalize: null,
        autoComplete: spaceSeparated2,
        autoFocus: boolean2,
        autoPlay: boolean2,
        capture: boolean2,
        charSet: null,
        checked: boolean2,
        cite: null,
        className: spaceSeparated2,
        cols: number2,
        colSpan: null,
        content: null,
        contentEditable: booleanish2,
        controls: boolean2,
        controlsList: spaceSeparated2,
        coords: number2 | commaSeparated2,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: boolean2,
        defer: boolean2,
        dir: null,
        dirName: null,
        disabled: boolean2,
        download: overloadedBoolean2,
        draggable: booleanish2,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: boolean2,
        formTarget: null,
        headers: spaceSeparated2,
        height: number2,
        hidden: boolean2,
        high: number2,
        href: null,
        hrefLang: null,
        htmlFor: spaceSeparated2,
        httpEquiv: spaceSeparated2,
        id: null,
        imageSizes: null,
        imageSrcSet: commaSeparated2,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: boolean2,
        itemId: null,
        itemProp: spaceSeparated2,
        itemRef: spaceSeparated2,
        itemScope: boolean2,
        itemType: spaceSeparated2,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: boolean2,
        low: number2,
        manifest: null,
        max: null,
        maxLength: number2,
        media: null,
        method: null,
        min: null,
        minLength: number2,
        multiple: boolean2,
        muted: boolean2,
        name: null,
        nonce: null,
        noModule: boolean2,
        noValidate: boolean2,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: boolean2,
        optimum: number2,
        pattern: null,
        ping: spaceSeparated2,
        placeholder: null,
        playsInline: boolean2,
        poster: null,
        preload: null,
        readOnly: boolean2,
        referrerPolicy: null,
        rel: spaceSeparated2,
        required: boolean2,
        reversed: boolean2,
        rows: number2,
        rowSpan: number2,
        sandbox: spaceSeparated2,
        scope: null,
        scoped: boolean2,
        seamless: boolean2,
        selected: boolean2,
        shape: null,
        size: number2,
        sizes: null,
        slot: null,
        span: number2,
        spellCheck: booleanish2,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: commaSeparated2,
        start: number2,
        step: null,
        style: null,
        tabIndex: number2,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: boolean2,
        useMap: null,
        value: booleanish2,
        width: number2,
        wrap: null,
        align: null,
        aLink: null,
        archive: spaceSeparated2,
        axis: null,
        background: null,
        bgColor: null,
        border: number2,
        borderColor: null,
        bottomMargin: number2,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: boolean2,
        declare: boolean2,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: number2,
        leftMargin: number2,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: number2,
        marginWidth: number2,
        noResize: boolean2,
        noHref: boolean2,
        noShade: boolean2,
        noWrap: boolean2,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: number2,
        rules: null,
        scheme: null,
        scrolling: booleanish2,
        standby: null,
        summary: null,
        text: null,
        topMargin: number2,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: number2,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: boolean2,
        disableRemotePlayback: boolean2,
        prefix: null,
        property: null,
        results: number2,
        security: null,
        unselectable: null
      }
    });
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/html.js
var require_html7 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/html.js"(exports, module) {
    "use strict";
    var merge2 = require_merge2();
    var xlink2 = require_xlink2();
    var xml2 = require_xml2();
    var xmlns2 = require_xmlns2();
    var aria2 = require_aria2();
    var html3 = require_html6();
    module.exports = merge2([xml2, xlink2, xmlns2, aria2, html3]);
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/lib/svg.js
var require_svg4 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/lib/svg.js"(exports, module) {
    "use strict";
    var types = require_types2();
    var create2 = require_create2();
    var caseSensitiveTransform2 = require_case_sensitive_transform2();
    var boolean2 = types.boolean;
    var number2 = types.number;
    var spaceSeparated2 = types.spaceSeparated;
    var commaSeparated2 = types.commaSeparated;
    var commaOrSpaceSeparated2 = types.commaOrSpaceSeparated;
    module.exports = create2({
      space: "svg",
      attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
      },
      transform: caseSensitiveTransform2,
      properties: {
        about: commaOrSpaceSeparated2,
        accentHeight: number2,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: number2,
        amplitude: number2,
        arabicForm: null,
        ascent: number2,
        attributeName: null,
        attributeType: null,
        azimuth: number2,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: number2,
        by: null,
        calcMode: null,
        capHeight: number2,
        className: spaceSeparated2,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: number2,
        diffuseConstant: number2,
        direction: null,
        display: null,
        dur: null,
        divisor: number2,
        dominantBaseline: null,
        download: boolean2,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: number2,
        enableBackground: null,
        end: null,
        event: null,
        exponent: number2,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: number2,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: commaSeparated2,
        g2: commaSeparated2,
        glyphName: commaSeparated2,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: number2,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: number2,
        horizOriginX: number2,
        horizOriginY: number2,
        id: null,
        ideographic: number2,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: number2,
        k: number2,
        k1: number2,
        k2: number2,
        k3: number2,
        k4: number2,
        kernelMatrix: commaOrSpaceSeparated2,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: number2,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: number2,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: number2,
        overlineThickness: number2,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: number2,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: spaceSeparated2,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: number2,
        pointsAtY: number2,
        pointsAtZ: number2,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: commaOrSpaceSeparated2,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: commaOrSpaceSeparated2,
        rev: commaOrSpaceSeparated2,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: commaOrSpaceSeparated2,
        requiredFeatures: commaOrSpaceSeparated2,
        requiredFonts: commaOrSpaceSeparated2,
        requiredFormats: commaOrSpaceSeparated2,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: number2,
        specularExponent: number2,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: number2,
        strikethroughThickness: number2,
        string: null,
        stroke: null,
        strokeDashArray: commaOrSpaceSeparated2,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: number2,
        strokeOpacity: number2,
        strokeWidth: null,
        style: null,
        surfaceScale: number2,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: commaOrSpaceSeparated2,
        tabIndex: number2,
        tableValues: null,
        target: null,
        targetX: number2,
        targetY: number2,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: commaOrSpaceSeparated2,
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: number2,
        underlineThickness: number2,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: number2,
        values: null,
        vAlphabetic: number2,
        vMathematical: number2,
        vectorEffect: null,
        vHanging: number2,
        vIdeographic: number2,
        version: null,
        vertAdvY: number2,
        vertOriginX: number2,
        vertOriginY: number2,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: number2,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
      }
    });
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/svg.js
var require_svg5 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/svg.js"(exports, module) {
    "use strict";
    var merge2 = require_merge2();
    var xlink2 = require_xlink2();
    var xml2 = require_xml2();
    var xmlns2 = require_xmlns2();
    var aria2 = require_aria2();
    var svg3 = require_svg4();
    module.exports = merge2([xml2, xlink2, xmlns2, aria2, svg3]);
  }
});

// node_modules/html-void-elements/index.json
var require_html_void_elements = __commonJS({
  "node_modules/html-void-elements/index.json"(exports, module) {
    module.exports = [
      "area",
      "base",
      "basefont",
      "bgsound",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "image",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "nextid",
      "param",
      "source",
      "track",
      "wbr"
    ];
  }
});

// node_modules/hast-util-is-element/convert.js
var require_convert3 = __commonJS({
  "node_modules/hast-util-is-element/convert.js"(exports, module) {
    "use strict";
    module.exports = convert2;
    function convert2(test) {
      if (typeof test === "string") {
        return tagNameFactory(test);
      }
      if (test === null || test === void 0) {
        return element;
      }
      if (typeof test === "object") {
        return any(test);
      }
      if (typeof test === "function") {
        return callFactory(test);
      }
      throw new Error("Expected function, string, or array as test");
    }
    function convertAll(tests) {
      var length = tests.length;
      var index = -1;
      var results = [];
      while (++index < length) {
        results[index] = convert2(tests[index]);
      }
      return results;
    }
    function any(tests) {
      var checks2 = convertAll(tests);
      var length = checks2.length;
      return matches2;
      function matches2() {
        var index = -1;
        while (++index < length) {
          if (checks2[index].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function tagNameFactory(test) {
      return tagName;
      function tagName(node) {
        return element(node) && node.tagName === test;
      }
    }
    function callFactory(test) {
      return call;
      function call(node) {
        return element(node) && Boolean(test.apply(this, arguments));
      }
    }
    function element(node) {
      return node && typeof node === "object" && node.type === "element" && typeof node.tagName === "string";
    }
  }
});

// node_modules/hast-util-is-element/index.js
var require_hast_util_is_element = __commonJS({
  "node_modules/hast-util-is-element/index.js"(exports, module) {
    "use strict";
    var convert2 = require_convert3();
    module.exports = isElement;
    isElement.convert = convert2;
    function isElement(node, test, index, parent, context) {
      var hasParent = parent !== null && parent !== void 0;
      var hasIndex = index !== null && index !== void 0;
      var check = convert2(test);
      if (hasIndex && (typeof index !== "number" || index < 0 || index === Infinity)) {
        throw new Error("Expected positive finite index for child node");
      }
      if (hasParent && (!parent.type || !parent.children)) {
        throw new Error("Expected parent node");
      }
      if (!node || !node.type || typeof node.type !== "string") {
        return false;
      }
      if (hasParent !== hasIndex) {
        throw new Error("Expected both parent and index");
      }
      return check.call(context, node, index, parent);
    }
  }
});

// node_modules/hast-util-whitespace/index.js
var require_hast_util_whitespace = __commonJS({
  "node_modules/hast-util-whitespace/index.js"(exports, module) {
    "use strict";
    module.exports = interElementWhiteSpace;
    var re = /[ \t\n\f\r]/g;
    function interElementWhiteSpace(node) {
      var value;
      if (node && typeof node === "object" && node.type === "text") {
        value = node.value || "";
      } else if (typeof node === "string") {
        value = node;
      } else {
        return false;
      }
      return value.replace(re, "") === "";
    }
  }
});

// node_modules/hast-util-to-html/lib/omission/util/siblings.js
var require_siblings = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/util/siblings.js"(exports) {
    "use strict";
    var whiteSpace = require_hast_util_whitespace();
    exports.before = siblings(-1);
    exports.after = siblings(1);
    function siblings(increment2) {
      return sibling;
      function sibling(parent, index, includeWhiteSpace) {
        var siblings2 = parent && parent.children;
        var offset = index + increment2;
        var next = siblings2 && siblings2[offset];
        if (!includeWhiteSpace) {
          while (next && whiteSpace(next)) {
            offset += increment2;
            next = siblings2[offset];
          }
        }
        return next;
      }
    }
  }
});

// node_modules/hast-util-to-html/node_modules/unist-util-is/convert.js
var require_convert4 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/unist-util-is/convert.js"(exports, module) {
    "use strict";
    module.exports = convert2;
    function convert2(test) {
      if (test == null) {
        return ok2;
      }
      if (typeof test === "string") {
        return typeFactory2(test);
      }
      if (typeof test === "object") {
        return "length" in test ? anyFactory2(test) : allFactory(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key])
            return false;
        }
        return true;
      }
    }
    function anyFactory2(tests) {
      var checks2 = [];
      var index = -1;
      while (++index < tests.length) {
        checks2[index] = convert2(tests[index]);
      }
      return any;
      function any() {
        var index2 = -1;
        while (++index2 < checks2.length) {
          if (checks2[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory2(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok2() {
      return true;
    }
  }
});

// node_modules/hast-util-to-html/lib/omission/util/white-space-start.js
var require_white_space_start = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/util/white-space-start.js"(exports, module) {
    "use strict";
    var convert2 = require_convert4();
    var whiteSpace = require_hast_util_whitespace();
    module.exports = whiteSpaceStart;
    var isText = convert2("text");
    function whiteSpaceStart(node) {
      return isText(node) && whiteSpace(node.value.charAt(0));
    }
  }
});

// node_modules/hast-util-to-html/lib/omission/util/comment.js
var require_comment = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/util/comment.js"(exports, module) {
    "use strict";
    var convert2 = require_convert4();
    module.exports = convert2("comment");
  }
});

// node_modules/hast-util-to-html/lib/omission/omission.js
var require_omission = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/omission.js"(exports, module) {
    "use strict";
    module.exports = omission;
    var own3 = {}.hasOwnProperty;
    function omission(handlers) {
      return omit;
      function omit(node, index, parent) {
        return own3.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
      }
    }
  }
});

// node_modules/hast-util-to-html/lib/omission/closing.js
var require_closing = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/closing.js"(exports, module) {
    "use strict";
    var element = require_hast_util_is_element();
    var whiteSpaceStart = require_white_space_start();
    var comment = require_comment();
    var siblings = require_siblings();
    var omission = require_omission();
    module.exports = omission({
      html: html3,
      head: headOrColgroupOrCaption,
      body,
      p,
      li,
      dt,
      dd,
      rt: rubyElement,
      rp: rubyElement,
      optgroup,
      option,
      menuitem,
      colgroup: headOrColgroupOrCaption,
      caption: headOrColgroupOrCaption,
      thead,
      tbody,
      tfoot,
      tr,
      td: cells,
      th: cells
    });
    function headOrColgroupOrCaption(node, index, parent) {
      var next = siblings.after(parent, index, true);
      return !next || !comment(next) && !whiteSpaceStart(next);
    }
    function html3(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || !comment(next);
    }
    function body(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || !comment(next);
    }
    function p(node, index, parent) {
      var next = siblings.after(parent, index);
      return next ? element(next, [
        "address",
        "article",
        "aside",
        "blockquote",
        "details",
        "div",
        "dl",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "main",
        "menu",
        "nav",
        "ol",
        "p",
        "pre",
        "section",
        "table",
        "ul"
      ]) : !parent || !element(parent, [
        "a",
        "audio",
        "del",
        "ins",
        "map",
        "noscript",
        "video"
      ]);
    }
    function li(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, "li");
    }
    function dt(node, index, parent) {
      var next = siblings.after(parent, index);
      return next && element(next, ["dt", "dd"]);
    }
    function dd(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, ["dt", "dd"]);
    }
    function rubyElement(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, ["rp", "rt"]);
    }
    function optgroup(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, "optgroup");
    }
    function option(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, ["option", "optgroup"]);
    }
    function menuitem(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, ["menuitem", "hr", "menu"]);
    }
    function thead(node, index, parent) {
      var next = siblings.after(parent, index);
      return next && element(next, ["tbody", "tfoot"]);
    }
    function tbody(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, ["tbody", "tfoot"]);
    }
    function tfoot(node, index, parent) {
      return !siblings.after(parent, index);
    }
    function tr(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, "tr");
    }
    function cells(node, index, parent) {
      var next = siblings.after(parent, index);
      return !next || element(next, ["td", "th"]);
    }
  }
});

// node_modules/hast-util-to-html/lib/omission/opening.js
var require_opening = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/opening.js"(exports, module) {
    "use strict";
    var element = require_hast_util_is_element();
    var siblings = require_siblings();
    var whiteSpaceStart = require_white_space_start();
    var comment = require_comment();
    var closing = require_closing();
    var omission = require_omission();
    module.exports = omission({
      html: html3,
      head,
      body,
      colgroup,
      tbody
    });
    function html3(node) {
      var head2 = siblings.after(node, -1);
      return !head2 || !comment(head2);
    }
    function head(node) {
      var children = node.children;
      var seen = [];
      var index = -1;
      while (++index < children.length) {
        if (element(children[index], ["title", "base"])) {
          if (seen.indexOf(children[index].tagName) > -1)
            return false;
          seen.push(children[index].tagName);
        }
      }
      return children.length;
    }
    function body(node) {
      var head2 = siblings.after(node, -1, true);
      return !head2 || !comment(head2) && !whiteSpaceStart(head2) && !element(head2, ["meta", "link", "script", "style", "template"]);
    }
    function colgroup(node, index, parent) {
      var previous = siblings.before(parent, index);
      var head2 = siblings.after(node, -1, true);
      if (element(previous, "colgroup") && closing(previous, parent.children.indexOf(previous), parent)) {
        return false;
      }
      return head2 && element(head2, "col");
    }
    function tbody(node, index, parent) {
      var previous = siblings.before(parent, index);
      var head2 = siblings.after(node, -1);
      if (element(previous, ["thead", "tbody"]) && closing(previous, parent.children.indexOf(previous), parent)) {
        return false;
      }
      return head2 && element(head2, "tr");
    }
  }
});

// node_modules/hast-util-to-html/lib/omission/index.js
var require_omission2 = __commonJS({
  "node_modules/hast-util-to-html/lib/omission/index.js"(exports) {
    "use strict";
    exports.opening = require_opening();
    exports.closing = require_closing();
  }
});

// node_modules/stringify-entities/lib/core.js
var require_core2 = __commonJS({
  "node_modules/stringify-entities/lib/core.js"(exports, module) {
    "use strict";
    module.exports = encode;
    function encode(value, options) {
      value = value.replace(options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g, basic);
      if (options.subset || options.escapeOnly) {
        return value;
      }
      return value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, basic);
      function surrogate(pair, index, all) {
        return options.format((pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536, all.charCodeAt(index + 2), options);
      }
      function basic(character, index, all) {
        return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
      }
    }
    function charactersToExpression(subset) {
      var groups = [];
      var index = -1;
      while (++index < subset.length) {
        groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
      }
      return new RegExp("(?:" + groups.join("|") + ")", "g");
    }
  }
});

// node_modules/stringify-entities/lib/constant/from-char-code.js
var require_from_char_code2 = __commonJS({
  "node_modules/stringify-entities/lib/constant/from-char-code.js"(exports, module) {
    module.exports = String.fromCharCode;
  }
});

// node_modules/stringify-entities/lib/util/to-hexadecimal.js
var require_to_hexadecimal = __commonJS({
  "node_modules/stringify-entities/lib/util/to-hexadecimal.js"(exports, module) {
    module.exports = toHexReference;
    var fromCharCode = require_from_char_code2();
    function toHexReference(code, next, omit) {
      var value = "&#x" + code.toString(16).toUpperCase();
      return omit && next && !/[\dA-Fa-f]/.test(fromCharCode(next)) ? value : value + ";";
    }
  }
});

// node_modules/stringify-entities/lib/util/to-decimal.js
var require_to_decimal = __commonJS({
  "node_modules/stringify-entities/lib/util/to-decimal.js"(exports, module) {
    module.exports = toDecimalReference;
    var fromCharCode = require_from_char_code2();
    function toDecimalReference(code, next, omit) {
      var value = "&#" + String(code);
      return omit && next && !/\d/.test(fromCharCode(next)) ? value : value + ";";
    }
  }
});

// node_modules/character-entities-legacy/index.json
var require_character_entities_legacy = __commonJS({
  "node_modules/character-entities-legacy/index.json"(exports, module) {
    module.exports = {
      AElig: "\xC6",
      AMP: "&",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Agrave: "\xC0",
      Aring: "\xC5",
      Atilde: "\xC3",
      Auml: "\xC4",
      COPY: "\xA9",
      Ccedil: "\xC7",
      ETH: "\xD0",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Egrave: "\xC8",
      Euml: "\xCB",
      GT: ">",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Igrave: "\xCC",
      Iuml: "\xCF",
      LT: "<",
      Ntilde: "\xD1",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Ograve: "\xD2",
      Oslash: "\xD8",
      Otilde: "\xD5",
      Ouml: "\xD6",
      QUOT: '"',
      REG: "\xAE",
      THORN: "\xDE",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Ugrave: "\xD9",
      Uuml: "\xDC",
      Yacute: "\xDD",
      aacute: "\xE1",
      acirc: "\xE2",
      acute: "\xB4",
      aelig: "\xE6",
      agrave: "\xE0",
      amp: "&",
      aring: "\xE5",
      atilde: "\xE3",
      auml: "\xE4",
      brvbar: "\xA6",
      ccedil: "\xE7",
      cedil: "\xB8",
      cent: "\xA2",
      copy: "\xA9",
      curren: "\xA4",
      deg: "\xB0",
      divide: "\xF7",
      eacute: "\xE9",
      ecirc: "\xEA",
      egrave: "\xE8",
      eth: "\xF0",
      euml: "\xEB",
      frac12: "\xBD",
      frac14: "\xBC",
      frac34: "\xBE",
      gt: ">",
      iacute: "\xED",
      icirc: "\xEE",
      iexcl: "\xA1",
      igrave: "\xEC",
      iquest: "\xBF",
      iuml: "\xEF",
      laquo: "\xAB",
      lt: "<",
      macr: "\xAF",
      micro: "\xB5",
      middot: "\xB7",
      nbsp: "\xA0",
      not: "\xAC",
      ntilde: "\xF1",
      oacute: "\xF3",
      ocirc: "\xF4",
      ograve: "\xF2",
      ordf: "\xAA",
      ordm: "\xBA",
      oslash: "\xF8",
      otilde: "\xF5",
      ouml: "\xF6",
      para: "\xB6",
      plusmn: "\xB1",
      pound: "\xA3",
      quot: '"',
      raquo: "\xBB",
      reg: "\xAE",
      sect: "\xA7",
      shy: "\xAD",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      szlig: "\xDF",
      thorn: "\xFE",
      times: "\xD7",
      uacute: "\xFA",
      ucirc: "\xFB",
      ugrave: "\xF9",
      uml: "\xA8",
      uuml: "\xFC",
      yacute: "\xFD",
      yen: "\xA5",
      yuml: "\xFF"
    };
  }
});

// node_modules/character-entities-html4/index.json
var require_character_entities_html4 = __commonJS({
  "node_modules/character-entities-html4/index.json"(exports, module) {
    module.exports = {
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      times: "\xD7",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      divide: "\xF7",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      fnof: "\u0192",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      bull: "\u2022",
      hellip: "\u2026",
      prime: "\u2032",
      Prime: "\u2033",
      oline: "\u203E",
      frasl: "\u2044",
      weierp: "\u2118",
      image: "\u2111",
      real: "\u211C",
      trade: "\u2122",
      alefsym: "\u2135",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lArr: "\u21D0",
      uArr: "\u21D1",
      rArr: "\u21D2",
      dArr: "\u21D3",
      hArr: "\u21D4",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      int: "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      lang: "\u2329",
      rang: "\u232A",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666",
      quot: '"',
      amp: "&",
      lt: "<",
      gt: ">",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      circ: "\u02C6",
      tilde: "\u02DC",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      permil: "\u2030",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      euro: "\u20AC"
    };
  }
});

// node_modules/stringify-entities/lib/constant/characters.js
var require_characters = __commonJS({
  "node_modules/stringify-entities/lib/constant/characters.js"(exports, module) {
    var entities = require_character_entities_html4();
    var characters = {};
    var name;
    module.exports = characters;
    for (name in entities) {
      characters[entities[name]] = name;
    }
  }
});

// node_modules/stringify-entities/lib/constant/has-own-property.js
var require_has_own_property2 = __commonJS({
  "node_modules/stringify-entities/lib/constant/has-own-property.js"(exports, module) {
    module.exports = {}.hasOwnProperty;
  }
});

// node_modules/stringify-entities/lib/constant/dangerous.json
var require_dangerous = __commonJS({
  "node_modules/stringify-entities/lib/constant/dangerous.json"(exports, module) {
    module.exports = [
      "cent",
      "copy",
      "divide",
      "gt",
      "lt",
      "not",
      "para",
      "times"
    ];
  }
});

// node_modules/stringify-entities/lib/util/to-named.js
var require_to_named = __commonJS({
  "node_modules/stringify-entities/lib/util/to-named.js"(exports, module) {
    module.exports = toNamed;
    var legacy = require_character_entities_legacy();
    var characters = require_characters();
    var fromCharCode = require_from_char_code2();
    var own3 = require_has_own_property2();
    var dangerous = require_dangerous();
    function toNamed(code, next, omit, attribute) {
      var character = fromCharCode(code);
      var name;
      var value;
      if (own3.call(characters, character)) {
        name = characters[character];
        value = "&" + name;
        if (omit && own3.call(legacy, name) && dangerous.indexOf(name) === -1 && (!attribute || next && next !== 61 && /[^\da-z]/i.test(fromCharCode(next)))) {
          return value;
        }
        return value + ";";
      }
      return "";
    }
  }
});

// node_modules/stringify-entities/lib/util/format-smart.js
var require_format_smart = __commonJS({
  "node_modules/stringify-entities/lib/util/format-smart.js"(exports, module) {
    module.exports = formatPretty;
    var toHexadecimal = require_to_hexadecimal();
    var toDecimal = require_to_decimal();
    var toNamed = require_to_named();
    function formatPretty(code, next, options) {
      var named;
      var numeric;
      var decimal;
      if (options.useNamedReferences || options.useShortestReferences) {
        named = toNamed(code, next, options.omitOptionalSemicolons, options.attribute);
      }
      if (options.useShortestReferences || !named) {
        numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
        if (options.useShortestReferences) {
          decimal = toDecimal(code, next, options.omitOptionalSemicolons);
          if (decimal.length < numeric.length) {
            numeric = decimal;
          }
        }
      }
      return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
    }
  }
});

// node_modules/stringify-entities/lib/encode.js
var require_encode2 = __commonJS({
  "node_modules/stringify-entities/lib/encode.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var core2 = require_core2();
    var smart = require_format_smart();
    module.exports = encode;
    function encode(value, options) {
      return core2(value, xtend(options, {format: smart}));
    }
  }
});

// node_modules/stringify-entities/lib/escape.js
var require_escape = __commonJS({
  "node_modules/stringify-entities/lib/escape.js"(exports, module) {
    "use strict";
    var core2 = require_core2();
    var smart = require_format_smart();
    module.exports = escape;
    function escape(value) {
      return core2(value, {
        escapeOnly: true,
        useNamedReferences: true,
        format: smart
      });
    }
  }
});

// node_modules/stringify-entities/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/stringify-entities/lib/index.js"(exports, module) {
    "use strict";
    var encode = require_encode2();
    var escape = require_escape();
    module.exports = encode;
    encode.escape = escape;
  }
});

// node_modules/stringify-entities/index.js
var require_stringify_entities = __commonJS({
  "node_modules/stringify-entities/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib4();
  }
});

// node_modules/hast-util-to-html/lib/comment.js
var require_comment2 = __commonJS({
  "node_modules/hast-util-to-html/lib/comment.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var entities = require_stringify_entities();
    module.exports = serializeComment;
    function serializeComment(ctx, node) {
      return ctx.bogusComments ? "<?" + entities(node.value, xtend(ctx.entities, {subset: [">"]})) + ">" : "<!--" + node.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, encode) + "-->";
      function encode($0) {
        return entities($0, xtend(ctx.entities, {subset: ["<", ">"]}));
      }
    }
  }
});

// node_modules/ccount/index.js
var require_ccount = __commonJS({
  "node_modules/ccount/index.js"(exports, module) {
    "use strict";
    module.exports = ccount;
    function ccount(source, character) {
      var value = String(source);
      var count = 0;
      var index;
      if (typeof character !== "string") {
        throw new Error("Expected character");
      }
      index = value.indexOf(character);
      while (index !== -1) {
        count++;
        index = value.indexOf(character, index + character.length);
      }
      return count;
    }
  }
});

// node_modules/hast-util-to-html/lib/doctype.js
var require_doctype2 = __commonJS({
  "node_modules/hast-util-to-html/lib/doctype.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var ccount = require_ccount();
    var entities = require_stringify_entities();
    module.exports = serializeDoctype;
    function serializeDoctype(ctx, node) {
      var sep = ctx.tightDoctype ? "" : " ";
      var parts = ["<!" + (ctx.upperDoctype ? "DOCTYPE" : "doctype")];
      if (node.name) {
        parts.push(sep, node.name);
        if (node.public != null) {
          parts.push(" public", sep, quote(ctx, node.public));
        } else if (node.system != null) {
          parts.push(" system");
        }
        if (node.system != null) {
          parts.push(sep, quote(ctx, node.system));
        }
      }
      return parts.join("") + ">";
    }
    function quote(ctx, value) {
      var string = String(value);
      var quote2 = ccount(string, ctx.quote) > ccount(string, ctx.alternative) ? ctx.alternative : ctx.quote;
      return quote2 + entities(string, xtend(ctx.entities, {subset: ["<", "&", quote2]})) + quote2;
    }
  }
});

// node_modules/hast-util-to-html/node_modules/property-information/find.js
var require_find2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/property-information/find.js"(exports, module) {
    "use strict";
    var normalize2 = require_normalize2();
    var DefinedInfo2 = require_defined_info2();
    var Info2 = require_info2();
    var data = "data";
    module.exports = find2;
    var valid2 = /^data[-\w.:]+$/i;
    var dash2 = /-[a-z]/g;
    var cap2 = /[A-Z]/g;
    function find2(schema, value) {
      var normal = normalize2(value);
      var prop = value;
      var Type = Info2;
      if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
      }
      if (normal.length > 4 && normal.slice(0, 4) === data && valid2.test(value)) {
        if (value.charAt(4) === "-") {
          prop = datasetToProperty2(value);
        } else {
          value = datasetToAttribute2(value);
        }
        Type = DefinedInfo2;
      }
      return new Type(prop, value);
    }
    function datasetToProperty2(attribute) {
      var value = attribute.slice(5).replace(dash2, camelcase2);
      return data + value.charAt(0).toUpperCase() + value.slice(1);
    }
    function datasetToAttribute2(property) {
      var value = property.slice(4);
      if (dash2.test(value)) {
        return property;
      }
      value = value.replace(cap2, kebab2);
      if (value.charAt(0) !== "-") {
        value = "-" + value;
      }
      return data + value;
    }
    function kebab2($0) {
      return "-" + $0.toLowerCase();
    }
    function camelcase2($0) {
      return $0.charAt(1).toUpperCase();
    }
  }
});

// node_modules/hast-util-to-html/node_modules/space-separated-tokens/index.js
var require_space_separated_tokens2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/space-separated-tokens/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.stringify = stringify;
    var empty = "";
    var space = " ";
    var whiteSpace = /[ \t\n\r\f]+/g;
    function parse3(value) {
      var input = String(value || empty).trim();
      return input === empty ? [] : input.split(whiteSpace);
    }
    function stringify(values) {
      return values.join(space).trim();
    }
  }
});

// node_modules/hast-util-to-html/node_modules/comma-separated-tokens/index.js
var require_comma_separated_tokens2 = __commonJS({
  "node_modules/hast-util-to-html/node_modules/comma-separated-tokens/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.stringify = stringify;
    var comma = ",";
    var space = " ";
    var empty = "";
    function parse3(value) {
      var values = [];
      var input = String(value || empty);
      var index = input.indexOf(comma);
      var lastIndex = 0;
      var end = false;
      var val;
      while (!end) {
        if (index === -1) {
          index = input.length;
          end = true;
        }
        val = input.slice(lastIndex, index).trim();
        if (val || !end) {
          values.push(val);
        }
        lastIndex = index + 1;
        index = input.indexOf(comma, lastIndex);
      }
      return values;
    }
    function stringify(values, options) {
      var settings = options || {};
      var left = settings.padLeft === false ? empty : space;
      var right = settings.padRight ? space : empty;
      if (values[values.length - 1] === empty) {
        values = values.concat(empty);
      }
      return values.join(right + comma + left).trim();
    }
  }
});

// node_modules/hast-util-to-html/lib/all.js
var require_all2 = __commonJS({
  "node_modules/hast-util-to-html/lib/all.js"(exports, module) {
    "use strict";
    var one = require_one2();
    module.exports = all;
    function all(ctx, parent) {
      var results = [];
      var children = parent && parent.children || [];
      var index = -1;
      while (++index < children.length) {
        results[index] = one(ctx, children[index], index, parent);
      }
      return results.join("");
    }
  }
});

// node_modules/hast-util-to-html/lib/constants.js
var require_constants = __commonJS({
  "node_modules/hast-util-to-html/lib/constants.js"(exports, module) {
    "use strict";
    module.exports = {
      name: [
        ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
        [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
      ],
      unquoted: [
        ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
        ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
      ],
      single: [
        ["&'".split(""), "\"&'`".split("")],
        ["\0&'".split(""), "\0\"&'`".split("")]
      ],
      double: [
        ['"&'.split(""), "\"&'`".split("")],
        ['\0"&'.split(""), "\0\"&'`".split("")]
      ]
    };
  }
});

// node_modules/hast-util-to-html/lib/element.js
var require_element = __commonJS({
  "node_modules/hast-util-to-html/lib/element.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var svg3 = require_svg5();
    var find2 = require_find2();
    var spaces = require_space_separated_tokens2();
    var commas = require_comma_separated_tokens2();
    var entities = require_stringify_entities();
    var ccount = require_ccount();
    var all = require_all2();
    var constants = require_constants();
    module.exports = serializeElement;
    function serializeElement(ctx, node, index, parent) {
      var schema = ctx.schema;
      var omit = schema.space === "svg" ? false : ctx.omit;
      var parts = [];
      var selfClosing = schema.space === "svg" ? ctx.closeEmpty : ctx.voids.indexOf(node.tagName.toLowerCase()) > -1;
      var attrs;
      var content;
      var last;
      if (schema.space === "html" && node.tagName === "svg") {
        ctx.schema = svg3;
      }
      attrs = serializeAttributes(ctx, node.properties);
      content = all(ctx, schema.space === "html" && node.tagName === "template" ? node.content : node);
      ctx.schema = schema;
      if (content)
        selfClosing = false;
      if (attrs || !omit || !omit.opening(node, index, parent)) {
        parts.push("<", node.tagName, attrs ? " " + attrs : "");
        if (selfClosing && (schema.space === "svg" || ctx.close)) {
          last = attrs.charAt(attrs.length - 1);
          if (!ctx.tightClose || last === "/" || schema.space === "svg" && last && last !== '"' && last !== "'") {
            parts.push(" ");
          }
          parts.push("/");
        }
        parts.push(">");
      }
      parts.push(content);
      if (!selfClosing && (!omit || !omit.closing(node, index, parent))) {
        parts.push("</" + node.tagName + ">");
      }
      return parts.join("");
    }
    function serializeAttributes(ctx, props) {
      var values = [];
      var index = -1;
      var key;
      var value;
      var last;
      for (key in props) {
        if (props[key] != null) {
          value = serializeAttribute(ctx, key, props[key]);
          if (value)
            values.push(value);
        }
      }
      while (++index < values.length) {
        last = ctx.tight ? values[index].charAt(values[index].length - 1) : null;
        if (index !== values.length - 1 && last !== '"' && last !== "'") {
          values[index] += " ";
        }
      }
      return values.join("");
    }
    function serializeAttribute(ctx, key, value) {
      var info = find2(ctx.schema, key);
      var quote = ctx.quote;
      var result;
      var name;
      if (info.overloadedBoolean && (value === info.attribute || value === "")) {
        value = true;
      } else if (info.boolean || info.overloadedBoolean && typeof value !== "string") {
        value = Boolean(value);
      }
      if (value == null || value === false || typeof value === "number" && value !== value) {
        return "";
      }
      name = entities(info.attribute, xtend(ctx.entities, {
        subset: constants.name[ctx.schema.space === "html" ? ctx.valid : 1][ctx.safe]
      }));
      if (value === true)
        return name;
      value = typeof value === "object" && "length" in value ? (info.commaSeparated ? commas.stringify : spaces.stringify)(value, {
        padLeft: !ctx.tightLists
      }) : String(value);
      if (ctx.collapseEmpty && !value)
        return name;
      if (ctx.unquoted) {
        result = entities(value, xtend(ctx.entities, {
          subset: constants.unquoted[ctx.valid][ctx.safe],
          attribute: true
        }));
      }
      if (result !== value) {
        if (ctx.smart && ccount(value, quote) > ccount(value, ctx.alternative)) {
          quote = ctx.alternative;
        }
        result = quote + entities(value, xtend(ctx.entities, {
          subset: (quote === "'" ? constants.single : constants.double)[ctx.schema.space === "html" ? ctx.valid : 1][ctx.safe],
          attribute: true
        })) + quote;
      }
      return name + (result ? "=" + result : result);
    }
  }
});

// node_modules/hast-util-to-html/lib/text.js
var require_text3 = __commonJS({
  "node_modules/hast-util-to-html/lib/text.js"(exports, module) {
    "use strict";
    var xtend = require_immutable();
    var entities = require_stringify_entities();
    module.exports = serializeText;
    function serializeText(ctx, node, index, parent) {
      return parent && (parent.tagName === "script" || parent.tagName === "style") ? node.value : entities(node.value, xtend(ctx.entities, {subset: ["<", "&"]}));
    }
  }
});

// node_modules/hast-util-to-html/lib/raw.js
var require_raw = __commonJS({
  "node_modules/hast-util-to-html/lib/raw.js"(exports, module) {
    "use strict";
    var text = require_text3();
    module.exports = serializeRaw;
    function serializeRaw(ctx, node) {
      return ctx.dangerous ? node.value : text(ctx, node);
    }
  }
});

// node_modules/hast-util-to-html/lib/one.js
var require_one2 = __commonJS({
  "node_modules/hast-util-to-html/lib/one.js"(exports, module) {
    "use strict";
    module.exports = serialize;
    var handlers = {
      comment: require_comment2(),
      doctype: require_doctype2(),
      element: require_element(),
      raw: require_raw(),
      root: require_all2(),
      text: require_text3()
    };
    var own3 = {}.hasOwnProperty;
    function serialize(ctx, node, index, parent) {
      if (!node || !node.type) {
        throw new Error("Expected node, not `" + node + "`");
      }
      if (!own3.call(handlers, node.type)) {
        throw new Error("Cannot compile unknown node `" + node.type + "`");
      }
      return handlers[node.type](ctx, node, index, parent);
    }
  }
});

// node_modules/hast-util-to-html/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/hast-util-to-html/lib/index.js"(exports, module) {
    "use strict";
    var html3 = require_html7();
    var svg3 = require_svg5();
    var voids = require_html_void_elements();
    var omission = require_omission2();
    var one = require_one2();
    module.exports = toHtml;
    var deprecationWarningIssued;
    function toHtml(node, options) {
      var settings = options || {};
      var quote = settings.quote || '"';
      var alternative = quote === '"' ? "'" : '"';
      if (quote !== '"' && quote !== "'") {
        throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
      }
      if ("allowDangerousHTML" in settings && !deprecationWarningIssued) {
        deprecationWarningIssued = true;
        console.warn("Deprecation warning: `allowDangerousHTML` is a nonstandard option, use `allowDangerousHtml` instead");
      }
      return one({
        valid: settings.allowParseErrors ? 0 : 1,
        safe: settings.allowDangerousCharacters ? 0 : 1,
        schema: settings.space === "svg" ? svg3 : html3,
        omit: settings.omitOptionalTags && omission,
        quote,
        alternative,
        smart: settings.quoteSmart,
        unquoted: settings.preferUnquoted,
        tight: settings.tightAttributes,
        upperDoctype: settings.upperDoctype,
        tightDoctype: settings.tightDoctype,
        bogusComments: settings.bogusComments,
        tightLists: settings.tightCommaSeparatedLists,
        tightClose: settings.tightSelfClosing,
        collapseEmpty: settings.collapseEmptyAttributes,
        dangerous: settings.allowDangerousHtml || settings.allowDangerousHTML,
        voids: settings.voids || voids.concat(),
        entities: settings.entities || {},
        close: settings.closeSelfClosing,
        closeEmpty: settings.closeEmptyElements
      }, node && typeof node === "object" && "length" in node ? {type: "root", children: node} : node);
    }
  }
});

// node_modules/hast-util-to-html/index.js
var require_hast_util_to_html = __commonJS({
  "node_modules/hast-util-to-html/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib5();
  }
});

// node_modules/rehype-stringify/index.js
var require_rehype_stringify = __commonJS({
  "node_modules/rehype-stringify/index.js"(exports, module) {
    "use strict";
    var toHTML = require_hast_util_to_html();
    module.exports = stringify;
    function stringify(config) {
      var settings = Object.assign({}, config, this.data("settings"));
      this.Compiler = compiler;
      function compiler(tree) {
        return toHTML(tree, settings);
      }
    }
  }
});

// demo/demo.src.js
var import_unified = __toModule(require_unified());
var import_rehype_parse = __toModule(require_rehype_parse());
var import_remark_parse = __toModule(require_remark_parse());
var import_remark_rehype = __toModule(require_remark_rehype());

// node_modules/shiki/dist/index.esm.js
var import_onigasm = __toModule(require_lib3());
var import_vscode_textmate = __toModule(require_main());
var languages = [
  {
    id: "abap",
    scopeName: "source.abap",
    path: "abap.tmLanguage.json"
  },
  {
    id: "actionscript-3",
    scopeName: "source.actionscript.3",
    path: "actionscript-3.tmLanguage.json"
  },
  {
    id: "ada",
    scopeName: "source.ada",
    path: "ada.tmLanguage.json"
  },
  {
    id: "apex",
    scopeName: "source.apex",
    path: "apex.tmLanguage.json"
  },
  {
    id: "applescript",
    scopeName: "source.applescript",
    path: "applescript.tmLanguage.json"
  },
  {
    id: "asm",
    scopeName: "source.asm.x86_64",
    path: "asm.tmLanguage.json"
  },
  {
    id: "asp-net-razor",
    scopeName: "text.aspnetcorerazor",
    path: "asp-net-razor.tmLanguage.json"
  },
  {
    id: "awk",
    scopeName: "source.awk",
    path: "awk.tmLanguage.json"
  },
  {
    id: "bat",
    scopeName: "source.batchfile",
    path: "bat.tmLanguage.json",
    aliases: ["batch"]
  },
  {
    id: "c",
    scopeName: "source.c",
    path: "c.tmLanguage.json"
  },
  {
    id: "clojure",
    scopeName: "source.clojure",
    path: "clojure.tmLanguage.json",
    aliases: ["clj"]
  },
  {
    id: "cobol",
    scopeName: "source.cobol",
    path: "cobol.tmLanguage.json"
  },
  {
    id: "coffee",
    scopeName: "source.coffee",
    path: "coffee.tmLanguage.json"
  },
  {
    id: "cpp.embedded.macro",
    scopeName: "source.cpp.embedded.macro",
    path: "cpp.embedded.macro.tmLanguage.json"
  },
  {
    id: "cpp",
    scopeName: "source.cpp",
    path: "cpp.tmLanguage.json"
  },
  {
    id: "crystal",
    scopeName: "source.crystal",
    path: "crystal.tmLanguage.json"
  },
  {
    id: "csharp",
    scopeName: "source.cs",
    path: "csharp.tmLanguage.json",
    aliases: ["c#"]
  },
  {
    id: "css",
    scopeName: "source.css",
    path: "css.tmLanguage.json"
  },
  {
    id: "d",
    scopeName: "source.d",
    path: "d.tmLanguage.json"
  },
  {
    id: "dart",
    scopeName: "source.dart",
    path: "dart.tmLanguage.json"
  },
  {
    id: "diff",
    scopeName: "source.diff",
    path: "diff.tmLanguage.json"
  },
  {
    id: "dockerfile",
    scopeName: "source.dockerfile",
    path: "dockerfile.tmLanguage.json"
  },
  {
    id: "elixir",
    scopeName: "source.elixir",
    path: "elixir.tmLanguage.json"
  },
  {
    id: "elm",
    scopeName: "source.elm",
    path: "elm.tmLanguage.json"
  },
  {
    id: "erlang",
    scopeName: "source.erlang",
    path: "erlang.tmLanguage.json"
  },
  {
    id: "fsharp",
    scopeName: "source.fsharp",
    path: "fsharp.tmLanguage.json",
    aliases: ["f#"]
  },
  {
    id: "git-commit",
    scopeName: "text.git-commit",
    path: "git-commit.tmLanguage.json"
  },
  {
    id: "git-rebase",
    scopeName: "text.git-rebase",
    path: "git-rebase.tmLanguage.json"
  },
  {
    id: "gnuplot",
    scopeName: "source.gnuplot",
    path: "gnuplot.tmLanguage.json"
  },
  {
    id: "go",
    scopeName: "source.go",
    path: "go.tmLanguage.json"
  },
  {
    id: "graphql",
    scopeName: "source.graphql",
    path: "graphql.tmLanguage.json"
  },
  {
    id: "groovy",
    scopeName: "source.groovy",
    path: "groovy.tmLanguage.json"
  },
  {
    id: "hack",
    scopeName: "source.hack",
    path: "hack.tmLanguage.json"
  },
  {
    id: "haml",
    scopeName: "text.haml",
    path: "haml.tmLanguage.json"
  },
  {
    id: "handlebars",
    scopeName: "text.html.handlebars",
    path: "handlebars.tmLanguage.json",
    aliases: ["hbs"]
  },
  {
    id: "haskell",
    scopeName: "source.haskell",
    path: "haskell.tmLanguage.json"
  },
  {
    id: "hcl",
    scopeName: "source.hcl",
    path: "hcl.tmLanguage.json"
  },
  {
    id: "hlsl",
    scopeName: "source.hlsl",
    path: "hlsl.tmLanguage.json"
  },
  {
    id: "html-ruby-erb",
    scopeName: "text.html.erb",
    path: "html-ruby-erb.tmLanguage.json",
    aliases: ["erb"]
  },
  {
    id: "html",
    scopeName: "text.html.basic",
    path: "html.tmLanguage.json"
  },
  {
    id: "ini",
    scopeName: "source.ini",
    path: "ini.tmLanguage.json"
  },
  {
    id: "java",
    scopeName: "source.java",
    path: "java.tmLanguage.json"
  },
  {
    id: "javascript",
    scopeName: "source.js",
    path: "javascript.tmLanguage.json",
    aliases: ["js"]
  },
  {
    id: "jinja-html",
    scopeName: "text.html.jinja",
    path: "jinja-html.tmLanguage.json"
  },
  {
    id: "jinja",
    scopeName: "source.jinja",
    path: "jinja.tmLanguage.json"
  },
  {
    id: "json",
    scopeName: "source.json",
    path: "json.tmLanguage.json"
  },
  {
    id: "jsonc",
    scopeName: "source.json.comments",
    path: "jsonc.tmLanguage.json"
  },
  {
    id: "jsonnet",
    scopeName: "source.jsonnet",
    path: "jsonnet.tmLanguage.json"
  },
  {
    id: "jsx",
    scopeName: "documentation.injection.js.jsx",
    path: "jsx.tmLanguage.json"
  },
  {
    id: "julia",
    scopeName: "source.julia",
    path: "julia.tmLanguage.json"
  },
  {
    id: "kotlin",
    scopeName: "source.kotlin",
    path: "kotlin.tmLanguage.json"
  },
  {
    id: "latex",
    scopeName: "text.tex.latex",
    path: "latex.tmLanguage.json",
    aliases: ["tex"]
  },
  {
    id: "less",
    scopeName: "source.css.less",
    path: "less.tmLanguage.json"
  },
  {
    id: "lisp",
    scopeName: "source.lisp",
    path: "lisp.tmLanguage.json"
  },
  {
    id: "logo",
    scopeName: "source.logo",
    path: "logo.tmLanguage.json"
  },
  {
    id: "lua",
    scopeName: "source.lua",
    path: "lua.tmLanguage.json"
  },
  {
    id: "makefile",
    scopeName: "source.makefile",
    path: "makefile.tmLanguage.json"
  },
  {
    id: "markdown",
    scopeName: "text.html.markdown",
    path: "markdown.tmLanguage.json",
    aliases: ["md"]
  },
  {
    id: "matlab",
    scopeName: "source.matlab",
    path: "matlab.tmLanguage.json"
  },
  {
    id: "mdx",
    scopeName: "text.html.markdown.jsx",
    path: "mdx.tmLanguage.json"
  },
  {
    id: "nix",
    scopeName: "source.nix",
    path: "nix.tmLanguage.json"
  },
  {
    id: "objective-c",
    scopeName: "source.objcpp",
    path: "objective-c.tmLanguage.json",
    aliases: ["objc"]
  },
  {
    id: "ocaml",
    scopeName: "source.ocaml",
    path: "ocaml.tmLanguage.json"
  },
  {
    id: "pascal",
    scopeName: "source.pascal",
    path: "pascal.tmLanguage.json"
  },
  {
    id: "perl",
    scopeName: "source.perl",
    path: "perl.tmLanguage.json"
  },
  {
    id: "perl6",
    scopeName: "source.perl.6",
    path: "perl6.tmLanguage.json"
  },
  {
    id: "php-html",
    scopeName: "text.html.php",
    path: "php-html.tmLanguage.json"
  },
  {
    id: "php",
    scopeName: "source.php",
    path: "php.tmLanguage.json"
  },
  {
    id: "pls",
    scopeName: "source.plsql.oracle",
    path: "pls.tmLanguage.json"
  },
  {
    id: "postcss",
    scopeName: "source.css.postcss",
    path: "postcss.tmLanguage.json"
  },
  {
    id: "powershell",
    scopeName: "source.powershell",
    path: "powershell.tmLanguage.json",
    aliases: ["ps", "ps1"]
  },
  {
    id: "prolog",
    scopeName: "source.prolog",
    path: "prolog.tmLanguage.json"
  },
  {
    id: "pug",
    scopeName: "text.pug",
    path: "pug.tmLanguage.json",
    aliases: ["jade"]
  },
  {
    id: "puppet",
    scopeName: "source.puppet",
    path: "puppet.tmLanguage.json"
  },
  {
    id: "purescript",
    scopeName: "source.purescript",
    path: "purescript.tmLanguage.json"
  },
  {
    id: "python",
    scopeName: "source.python",
    path: "python.tmLanguage.json",
    aliases: ["py"]
  },
  {
    id: "r",
    scopeName: "source.r",
    path: "r.tmLanguage.json"
  },
  {
    id: "razor",
    scopeName: "text.html.cshtml",
    path: "razor.tmLanguage.json"
  },
  {
    id: "ruby",
    scopeName: "source.ruby",
    path: "ruby.tmLanguage.json",
    aliases: ["rb"]
  },
  {
    id: "rust",
    scopeName: "source.rust",
    path: "rust.tmLanguage.json"
  },
  {
    id: "sas",
    scopeName: "source.sas",
    path: "sas.tmLanguage.json"
  },
  {
    id: "sass",
    scopeName: "source.sass",
    path: "sass.tmLanguage.json"
  },
  {
    id: "scala",
    scopeName: "source.scala",
    path: "scala.tmLanguage.json"
  },
  {
    id: "scheme",
    scopeName: "source.scheme",
    path: "scheme.tmLanguage.json"
  },
  {
    id: "scss",
    scopeName: "source.css.scss",
    path: "scss.tmLanguage.json"
  },
  {
    id: "shaderlab",
    scopeName: "source.shaderlab",
    path: "shaderlab.tmLanguage.json",
    aliases: ["shader"]
  },
  {
    id: "shellscript",
    scopeName: "source.shell",
    path: "shellscript.tmLanguage.json",
    aliases: ["shell", "bash", "sh", "zsh"]
  },
  {
    id: "smalltalk",
    scopeName: "source.smalltalk",
    path: "smalltalk.tmLanguage.json"
  },
  {
    id: "sql",
    scopeName: "source.sql",
    path: "sql.tmLanguage.json"
  },
  {
    id: "ssh-config",
    scopeName: "source.ssh-config",
    path: "ssh-config.tmLanguage.json"
  },
  {
    id: "stylus",
    scopeName: "source.stylus",
    path: "stylus.tmLanguage.json",
    aliases: ["styl"]
  },
  {
    id: "swift",
    scopeName: "source.swift",
    path: "swift.tmLanguage.json"
  },
  {
    id: "tcl",
    scopeName: "source.tcl",
    path: "tcl.tmLanguage.json"
  },
  {
    id: "toml",
    scopeName: "source.toml",
    path: "toml.tmLanguage.json"
  },
  {
    id: "ts",
    scopeName: "documentation.injection.ts",
    path: "ts.tmLanguage.json"
  },
  {
    id: "tsx",
    scopeName: "source.tsx",
    path: "tsx.tmLanguage.json"
  },
  {
    id: "typescript",
    scopeName: "source.ts",
    path: "typescript.tmLanguage.json",
    aliases: ["ts"]
  },
  {
    id: "vb",
    scopeName: "source.asp.vb.net",
    path: "vb.tmLanguage.json",
    aliases: ["cmd"]
  },
  {
    id: "viml",
    scopeName: "source.viml",
    path: "viml.tmLanguage.json"
  },
  {
    id: "vue-html",
    scopeName: "text.html.vue-html",
    path: "vue-html.tmLanguage.json"
  },
  {
    id: "vue",
    scopeName: "source.vue",
    path: "vue.tmLanguage.json"
  },
  {
    id: "wasm",
    scopeName: "source.wat",
    path: "wasm.tmLanguage.json"
  },
  {
    id: "xml",
    scopeName: "text.xml",
    path: "xml.tmLanguage.json"
  },
  {
    id: "xsl",
    scopeName: "text.xml.xsl",
    path: "xsl.tmLanguage.json"
  },
  {
    id: "yaml",
    scopeName: "source.yaml",
    path: "yaml.tmLanguage.json"
  },
  {
    id: "\u6587\u8A00",
    scopeName: "source.wenyan",
    path: "\u6587\u8A00.tmLanguage.json",
    aliases: ["wenyan"]
  }
];
function trimEndSlash(str) {
  if (str.endsWith("/") || str.endsWith("\\"))
    return str.slice(0, -1);
  return str;
}
function trimStartDot(str) {
  if (str.startsWith("./"))
    return str.slice(2);
  return str;
}
function dirname(str) {
  const parts = str.split(/[\/\\]/g);
  return parts[parts.length - 2];
}
function join(...parts) {
  return parts.map(trimEndSlash).map(trimStartDot).join("/");
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof fetch !== "undefined";
var CDN_ROOT = "";
var ONIGASM_WASM = "";
function setCDN(root) {
  CDN_ROOT = root;
}
var _onigasmPromise = null;
async function getOnigasm() {
  if (!_onigasmPromise) {
    let loader;
    if (isBrowser) {
      loader = (0, import_onigasm.loadWASM)(ONIGASM_WASM || _resolvePath("dist/onigasm.wasm"));
    } else {
      const path = require_path();
      const onigasmPath = path.join(require.resolve("onigasm"), "../onigasm.wasm");
      const fs = require_fs();
      const wasmBin = fs.readFileSync(onigasmPath).buffer;
      loader = (0, import_onigasm.loadWASM)(wasmBin);
    }
    _onigasmPromise = loader.then(() => {
      return {
        createOnigScanner(patterns) {
          return new import_onigasm.OnigScanner(patterns);
        },
        createOnigString(s3) {
          return new import_onigasm.OnigString(s3);
        }
      };
    });
  }
  return _onigasmPromise;
}
function _resolvePath(filepath) {
  if (isBrowser) {
    if (!CDN_ROOT) {
      console.warn("[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`");
    }
    return `${CDN_ROOT}${filepath}`;
  } else {
    const path = require_path();
    if (path.isAbsolute(filepath)) {
      return filepath;
    } else {
      return path.resolve(__dirname, "..", filepath);
    }
  }
}
async function _fetchAssets(filepath) {
  const path = _resolvePath(filepath);
  if (isBrowser) {
    return await fetch(path).then((r) => r.text());
  } else {
    const fs = require_fs();
    return await fs.promises.readFile(path, "utf-8");
  }
}
async function _fetchJSONAssets(filepath) {
  return JSON.parse(await _fetchAssets(filepath));
}
async function fetchTheme(themePath) {
  let theme = await _fetchJSONAssets(themePath);
  const shikiTheme = toShikiTheme(theme);
  if (shikiTheme.include) {
    const includedTheme = await fetchTheme(join(dirname(themePath), shikiTheme.include));
    if (includedTheme.settings) {
      shikiTheme.settings = shikiTheme.settings.concat(includedTheme.settings);
    }
    if (includedTheme.bg && !shikiTheme.bg) {
      shikiTheme.bg = includedTheme.bg;
    }
  }
  return shikiTheme;
}
async function fetchGrammar(filepath) {
  const content = await _fetchAssets(filepath);
  return JSON.parse(content);
}
function repairTheme(theme) {
  if (theme.settings[0].settings && !theme.settings[0].scope) {
    return;
  }
  theme.settings.unshift({
    settings: {
      foreground: theme.fg,
      background: theme.bg
    }
  });
}
function toShikiTheme(rawTheme) {
  const shikiTheme = Object.assign(Object.assign({}, rawTheme), getThemeDefaultColors(rawTheme));
  if (rawTheme.include) {
    shikiTheme.include = rawTheme.include;
  }
  if (rawTheme.tokenColors) {
    shikiTheme.settings = rawTheme.tokenColors;
  }
  repairTheme(shikiTheme);
  return shikiTheme;
}
var VSCODE_FALLBACK_EDITOR_FG = {light: "#333333", dark: "#bbbbbb"};
var VSCODE_FALLBACK_EDITOR_BG = {light: "#fffffe", dark: "#1e1e1e"};
function getThemeDefaultColors(theme) {
  var _a, _b, _c, _d, _e, _f;
  let fg, bg;
  let settings = theme.settings ? theme.settings : theme.tokenColors;
  const globalSetting = settings ? settings.find((s3) => {
    return !s3.name && !s3.scope;
  }) : void 0;
  if ((_a = globalSetting === null || globalSetting === void 0 ? void 0 : globalSetting.settings) === null || _a === void 0 ? void 0 : _a.foreground) {
    fg = globalSetting.settings.foreground;
  }
  if ((_b = globalSetting === null || globalSetting === void 0 ? void 0 : globalSetting.settings) === null || _b === void 0 ? void 0 : _b.background) {
    bg = globalSetting.settings.background;
  }
  if (!fg && ((_d = (_c = theme) === null || _c === void 0 ? void 0 : _c.colors) === null || _d === void 0 ? void 0 : _d["editor.foreground"])) {
    fg = theme.colors["editor.foreground"];
  }
  if (!bg && ((_f = (_e = theme) === null || _e === void 0 ? void 0 : _e.colors) === null || _f === void 0 ? void 0 : _f["editor.background"])) {
    bg = theme.colors["editor.background"];
  }
  if (!fg) {
    fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
  }
  if (!bg) {
    bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
  }
  return {
    fg,
    bg
  };
}
var Resolver = class {
  constructor(onigLibPromise, onigLibName) {
    this.languagesPath = "languages/";
    this.languageMap = {};
    this.scopeToLangMap = {};
    this._onigLibPromise = onigLibPromise;
    this._onigLibName = onigLibName;
  }
  get onigLib() {
    return this._onigLibPromise;
  }
  getOnigLibName() {
    return this._onigLibName;
  }
  getLangRegistration(langIdOrAlias) {
    return this.languageMap[langIdOrAlias];
  }
  async loadGrammar(scopeName) {
    const lang = this.scopeToLangMap[scopeName];
    if (!lang) {
      return null;
    }
    if (lang.grammar) {
      return lang.grammar;
    }
    const g = await fetchGrammar(languages.includes(lang) ? `${this.languagesPath}${lang.path}` : lang.path);
    lang.grammar = g;
    return g;
  }
  addLanguage(l) {
    this.languageMap[l.id] = l;
    if (l.aliases) {
      l.aliases.forEach((a) => {
        this.languageMap[a] = l;
      });
    }
    this.scopeToLangMap[l.scopeName] = l;
  }
};
var StackElementMetadata = class {
  static toBinaryStr(metadata) {
    let r = metadata.toString(2);
    while (r.length < 32) {
      r = "0" + r;
    }
    return r;
  }
  static printMetadata(metadata) {
    let languageId = StackElementMetadata.getLanguageId(metadata);
    let tokenType = StackElementMetadata.getTokenType(metadata);
    let fontStyle = StackElementMetadata.getFontStyle(metadata);
    let foreground = StackElementMetadata.getForeground(metadata);
    let background = StackElementMetadata.getBackground(metadata);
    console.log({
      languageId,
      tokenType,
      fontStyle,
      foreground,
      background
    });
  }
  static getLanguageId(metadata) {
    return (metadata & 255) >>> 0;
  }
  static getTokenType(metadata) {
    return (metadata & 1792) >>> 8;
  }
  static getFontStyle(metadata) {
    return (metadata & 14336) >>> 11;
  }
  static getForeground(metadata) {
    return (metadata & 8372224) >>> 14;
  }
  static getBackground(metadata) {
    return (metadata & 4286578688) >>> 23;
  }
  static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
    let _languageId = StackElementMetadata.getLanguageId(metadata);
    let _tokenType = StackElementMetadata.getTokenType(metadata);
    let _fontStyle = StackElementMetadata.getFontStyle(metadata);
    let _foreground = StackElementMetadata.getForeground(metadata);
    let _background = StackElementMetadata.getBackground(metadata);
    if (languageId !== 0) {
      _languageId = languageId;
    }
    if (tokenType !== 0) {
      _tokenType = tokenType === 8 ? 0 : tokenType;
    }
    if (fontStyle !== -1) {
      _fontStyle = fontStyle;
    }
    if (foreground !== 0) {
      _foreground = foreground;
    }
    if (background !== 0) {
      _background = background;
    }
    return (_languageId << 0 | _tokenType << 8 | _fontStyle << 11 | _foreground << 14 | _background << 23) >>> 0;
  }
};
function tokenizeWithTheme(theme, colorMap, fileContents, grammar, options) {
  let lines = fileContents.split(/\r\n|\r|\n/);
  let ruleStack = null;
  let actual = [];
  let final = [];
  for (let i = 0, len = lines.length; i < len; i++) {
    let line = lines[i];
    if (line === "") {
      actual = [];
      final.push([]);
      continue;
    }
    let resultWithScopes = grammar.tokenizeLine(line, ruleStack);
    let tokensWithScopes = resultWithScopes.tokens;
    let result = grammar.tokenizeLine2(line, ruleStack);
    let tokensLength = result.tokens.length / 2;
    let tokensWithScopesIndex = 0;
    for (let j = 0; j < tokensLength; j++) {
      let startIndex = result.tokens[2 * j];
      let nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
      if (startIndex === nextStartIndex) {
        continue;
      }
      let metadata = result.tokens[2 * j + 1];
      let foreground = StackElementMetadata.getForeground(metadata);
      let foregroundColor = colorMap[foreground];
      let explanation = [];
      if (options.includeExplanation) {
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          let tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          let tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
          offset += tokenWithScopesText.length;
          explanation.push({
            content: tokenWithScopesText,
            scopes: explainThemeScopes(theme, tokenWithScopes.scopes)
          });
          tokensWithScopesIndex++;
        }
      }
      actual.push({
        content: line.substring(startIndex, nextStartIndex),
        color: foregroundColor,
        explanation
      });
    }
    final.push(actual);
    actual = [];
    ruleStack = result.ruleStack;
  }
  return final;
}
function explainThemeScopes(theme, scopes) {
  let result = [];
  for (let i = 0, len = scopes.length; i < len; i++) {
    let parentScopes = scopes.slice(0, i);
    let scope = scopes[i];
    result[i] = {
      scopeName: scope,
      themeMatches: explainThemeScope(theme, scope, parentScopes)
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  let selectorPrefix = selector + ".";
  if (selector === scope || scope.substring(0, selectorPrefix.length) === selectorPrefix) {
    return true;
  }
  return false;
}
function matches(selector, selectorParentScopes, scope, parentScopes) {
  if (!matchesOne(selector, scope)) {
    return false;
  }
  let selectorParentIndex = selectorParentScopes.length - 1;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectorParentScopes[selectorParentIndex], parentScopes[parentIndex])) {
      selectorParentIndex--;
    }
    parentIndex--;
  }
  if (selectorParentIndex === -1) {
    return true;
  }
  return false;
}
function explainThemeScope(theme, scope, parentScopes) {
  let result = [], resultLen = 0;
  for (let i = 0, len = theme.settings.length; i < len; i++) {
    let setting = theme.settings[i];
    let selectors;
    if (typeof setting.scope === "string") {
      selectors = setting.scope.split(/,/).map((scope2) => scope2.trim());
    } else if (Array.isArray(setting.scope)) {
      selectors = setting.scope;
    } else {
      continue;
    }
    for (let j = 0, lenJ = selectors.length; j < lenJ; j++) {
      let rawSelector = selectors[j];
      let rawSelectorPieces = rawSelector.split(/ /);
      let selector = rawSelectorPieces[rawSelectorPieces.length - 1];
      let selectorParentScopes = rawSelectorPieces.slice(0, rawSelectorPieces.length - 1);
      if (matches(selector, selectorParentScopes, scope, parentScopes)) {
        result[resultLen++] = setting;
        j = lenJ;
      }
    }
  }
  return result;
}
function renderToHtml(lines, options = {}) {
  const bg = options.bg || "#fff";
  let html3 = "";
  html3 += `<pre class="shiki" style="background-color: ${bg}">`;
  if (options.langId) {
    html3 += `<div class="language-id">${options.langId}</div>`;
  }
  html3 += `<code>`;
  lines.forEach((l) => {
    html3 += `<span class="line">`;
    l.forEach((token2) => {
      html3 += `<span style="color: ${token2.color || options.fg}">${escapeHtml(token2.content)}</span>`;
    });
    html3 += `</span>
`;
  });
  html3 = html3.replace(/\n*$/, "");
  html3 += `</code></pre>`;
  return html3;
}
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHtml(html3) {
  return html3.replace(/[&<>"']/g, (chr) => htmlEscapes[chr]);
}
var Registry = class extends import_vscode_textmate.Registry {
  constructor(_resolver) {
    super(_resolver);
    this._resolver = _resolver;
    this.themesPath = "themes/";
    this._resolvedThemes = {};
    this._resolvedGammer = {};
  }
  getTheme(theme) {
    if (typeof theme === "string") {
      return this._resolvedThemes[theme];
    } else {
      return theme;
    }
  }
  async loadTheme(theme) {
    if (typeof theme === "string") {
      if (!this._resolvedThemes[theme]) {
        this._resolvedThemes[theme] = await fetchTheme(`${this.themesPath}${theme}.json`);
      }
      return this._resolvedThemes[theme];
    } else {
      theme = toShikiTheme(theme);
      if (theme.name) {
        this._resolvedThemes[theme.name] = theme;
      }
      return theme;
    }
  }
  async loadThemes(themes) {
    return await Promise.all(themes.map((theme) => this.loadTheme(theme)));
  }
  getGrammer(name) {
    return this._resolvedGammer[name];
  }
  async loadLanguage(lang) {
    const g = await this.loadGrammar(lang.scopeName);
    this._resolvedGammer[lang.id] = g;
    if (lang.aliases) {
      lang.aliases.forEach((la) => {
        this._resolvedGammer[la] = g;
      });
    }
  }
  async loadLanguages(langs) {
    for (const lang of langs) {
      this._resolver.addLanguage(lang);
    }
    for (const lang of langs) {
      await this.loadLanguage(lang);
    }
  }
};
function resolveLang(lang) {
  return typeof lang === "string" ? languages.find((l) => {
    var _a;
    return l.id === lang || ((_a = l.aliases) === null || _a === void 0 ? void 0 : _a.includes(lang));
  }) : lang;
}
function resolveOptions(options) {
  var _a;
  let _languages = languages;
  let _themes = options.themes || [];
  if ((_a = options.langs) === null || _a === void 0 ? void 0 : _a.length) {
    _languages = options.langs.map(resolveLang);
  }
  if (options.theme) {
    _themes.unshift(options.theme);
  }
  if (!_themes.length) {
    _themes = ["nord"];
  }
  return {_languages, _themes};
}
async function getHighlighter(options) {
  var _a, _b;
  const {_languages, _themes} = resolveOptions(options);
  const _resolver = new Resolver(getOnigasm(), "onigasm");
  const _registry = new Registry(_resolver);
  const themes = await _registry.loadThemes(_themes);
  const _defaultTheme = themes[0];
  await _registry.loadLanguages(_languages);
  if ((_a = options.paths) === null || _a === void 0 ? void 0 : _a.themes) {
    _registry.themesPath = options.paths.themes;
  }
  if ((_b = options.paths) === null || _b === void 0 ? void 0 : _b.languages) {
    _resolver.languagesPath = options.paths.languages;
  }
  function getTheme(theme) {
    const _theme = theme ? _registry.getTheme(theme) : _defaultTheme;
    if (!_theme) {
      throw Error(`No theme registration for ${theme}`);
    }
    _registry.setTheme(_theme);
    const _colorMap = _registry.getColorMap();
    return {_theme, _colorMap};
  }
  function getGrammer(lang) {
    const _grammer = _registry.getGrammer(lang);
    if (!_grammer) {
      throw Error(`No language registration for ${lang}`);
    }
    return {_grammer};
  }
  function codeToThemedTokens(code, lang = "text", theme, options2 = {includeExplanation: true}) {
    if (isPlaintext(lang)) {
      return [[{content: code}]];
    }
    const {_grammer} = getGrammer(lang);
    const {_theme, _colorMap} = getTheme(theme);
    return tokenizeWithTheme(_theme, _colorMap, code, _grammer, options2);
  }
  function codeToHtml(code, lang = "text", theme) {
    const tokens = codeToThemedTokens(code, lang, theme, {
      includeExplanation: false
    });
    const {_theme} = getTheme(theme);
    return renderToHtml(tokens, {
      fg: _theme.fg,
      bg: _theme.bg
    });
  }
  async function loadTheme(theme) {
    await _registry.loadTheme(theme);
  }
  async function loadLanguage(lang) {
    const _lang = resolveLang(lang);
    _resolver.addLanguage(_lang);
    await _registry.loadLanguage(_lang);
  }
  function getBackgroundColor(theme) {
    const {_theme} = getTheme(theme);
    return _theme.bg;
  }
  function getForegroundColor(theme) {
    const {_theme} = getTheme(theme);
    return _theme.fg;
  }
  return {
    codeToThemedTokens,
    codeToHtml,
    loadTheme,
    loadLanguage,
    getBackgroundColor,
    getForegroundColor
  };
}
function isPlaintext(lang) {
  return !lang || ["plaintext", "txt", "text"].includes(lang);
}

// node_modules/property-information/lib/util/schema.js
var Schema = class {
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
};
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;

// node_modules/property-information/lib/util/merge.js
function merge(definitions, space) {
  var property = {};
  var normal = {};
  var index = -1;
  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property);
    Object.assign(normal, definitions[index].normal);
  }
  return new Schema(property, normal, space);
}

// node_modules/property-information/lib/normalize.js
function normalize(value) {
  return value.toLowerCase();
}

// node_modules/property-information/lib/util/info.js
var Info = class {
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
};
Info.prototype.space = null;
Info.prototype.attribute = null;
Info.prototype.property = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/property-information/lib/util/defined-info.js
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info {
  constructor(property, attribute, mask, space) {
    var index = -1;
    super(property, attribute);
    mark(this, "space", space);
    while (++index < checks.length) {
      mark(this, checks[index], (mask & types_exports[checks[index]]) === types_exports[checks[index]]);
    }
  }
};
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

// node_modules/property-information/lib/util/create.js
var own = {}.hasOwnProperty;
function create(definition) {
  var property = {};
  var normal = {};
  var prop;
  var info;
  for (prop in definition.properties) {
    if (own.call(definition.properties, prop)) {
      info = new DefinedInfo(prop, definition.transform(definition.attributes, prop), definition.properties[prop], definition.space);
      if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition.space);
}

// node_modules/property-information/lib/xlink.js
var xlink = create({
  space: "xlink",
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function xlinkTransform(_, prop) {
  return "xlink:" + prop.slice(5).toLowerCase();
}

// node_modules/property-information/lib/xml.js
var xml = create({
  space: "xml",
  transform: xmlTransform,
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
});
function xmlTransform(_, prop) {
  return "xml:" + prop.slice(3).toLowerCase();
}

// node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// node_modules/property-information/lib/xmlns.js
var xmlns = create({
  space: "xmlns",
  attributes: {xmlnsxlink: "xmlns:xlink"},
  transform: caseInsensitiveTransform,
  properties: {xmlns: null, xmlnsXLink: null}
});

// node_modules/property-information/lib/aria.js
var aria = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});
function ariaTransform(_, prop) {
  return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
}

// node_modules/property-information/lib/html.js
var html = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

// node_modules/property-information/lib/svg.js
var svg = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

// node_modules/property-information/lib/find.js
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
function find(schema, value) {
  var normal = normalize(value);
  var prop = value;
  var Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return "data" + value.charAt(0).toUpperCase() + value.slice(1);
}
function datasetToAttribute(property) {
  var value = property.slice(4);
  if (dash.test(value)) {
    return property;
  }
  value = value.replace(cap, kebab);
  if (value.charAt(0) !== "-") {
    value = "-" + value;
  }
  return "data" + value;
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/property-information/index.js
var html2 = merge([xml, xlink, xmlns, aria, html], "html");
var svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

// node_modules/hast-util-parse-selector/index.js
var search = /[#.]/g;
var parseSelector = function(selector, defaultTagName = "div") {
  var value = selector || "";
  var props = {};
  var start = 0;
  var subvalue;
  var previous;
  var match;
  while (start < value.length) {
    search.lastIndex = start;
    match = search.exec(value);
    subvalue = value.slice(start, match ? match.index : value.length);
    if (subvalue) {
      if (!previous) {
        defaultTagName = subvalue;
      } else if (previous === "#") {
        props.id = subvalue;
      } else if (Array.isArray(props.className)) {
        props.className.push(subvalue);
      } else {
        props.className = [subvalue];
      }
      start += subvalue.length;
    }
    if (match) {
      previous = match[0];
      start++;
    }
  }
  return {
    type: "element",
    tagName: defaultTagName,
    properties: props,
    children: []
  };
};

// node_modules/space-separated-tokens/index.js
function parse(value) {
  const input = String(value || "").trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}

// node_modules/comma-separated-tokens/index.js
function parse2(value) {
  var tokens = [];
  var input = String(value || "");
  var index = input.indexOf(",");
  var start = 0;
  var end;
  var token2;
  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }
    token2 = input.slice(start, index).trim();
    if (token2 || !end) {
      tokens.push(token2);
    }
    start = index + 1;
    index = input.indexOf(",", start);
  }
  return tokens;
}

// node_modules/hastscript/lib/core.js
var buttonTypes = new Set(["menu", "submit", "reset", "button"]);
var own2 = {}.hasOwnProperty;
function core(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive && createAdjustMap(caseSensitive);
  const h2 = function(selector, properties, ...children) {
    var index = -1;
    var node;
    var key;
    if (selector === void 0 || selector === null) {
      node = {type: "root", children: []};
      children.unshift(properties);
    } else {
      node = parseSelector(selector, defaultTagName);
      node.tagName = node.tagName.toLowerCase();
      if (adjust && own2.call(adjust, node.tagName)) {
        node.tagName = adjust[node.tagName];
      }
      if (isProperties(properties, node.tagName)) {
        for (key in properties) {
          if (own2.call(properties, key)) {
            addProperty(schema, node.properties, key, properties[key]);
          }
        }
      } else {
        children.unshift(properties);
      }
    }
    while (++index < children.length) {
      addChild(node.children, children[index]);
    }
    if (node.tagName === "template") {
      node.content = {type: "root", children: node.children};
      node.children = [];
    }
    return node;
  };
  return h2;
}
function isProperties(value, name) {
  if (value === null || value === void 0 || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  if (name === "input" || !value.type || typeof value.type !== "string") {
    return true;
  }
  if (Array.isArray(value.children)) {
    return false;
  }
  if (name === "button") {
    return buttonTypes.has(value.type.toLowerCase());
  }
  return !("value" in value);
}
function addProperty(schema, properties, key, value) {
  var info = find(schema, key);
  var index = -1;
  var result;
  var finalResult;
  if (value === void 0 || value === null)
    return;
  if (typeof value === "number") {
    if (Number.isNaN(value))
      return;
    result = value;
  } else if (typeof value === "boolean") {
    result = value;
  } else if (typeof value === "string") {
    if (info.spaceSeparated) {
      result = parse(value);
    } else if (info.commaSeparated) {
      result = parse2(value);
    } else if (info.commaOrSpaceSeparated) {
      result = parse(parse2(value).join(" "));
    } else {
      result = parsePrimitive(info, info.property, value);
    }
  } else if (Array.isArray(value)) {
    result = value.concat();
  } else {
    result = info.property === "style" ? style(value) : String(value);
  }
  if (Array.isArray(result)) {
    finalResult = [];
    while (++index < result.length) {
      finalResult[index] = parsePrimitive(info, info.property, result[index]);
    }
    result = finalResult;
  }
  if (info.property === "className" && Array.isArray(properties.className)) {
    result = properties.className.concat(result);
  }
  properties[info.property] = result;
}
function addChild(nodes, value) {
  var index = -1;
  if (value === void 0 || value === null) {
  } else if (typeof value === "string" || typeof value === "number") {
    nodes.push({type: "text", value: String(value)});
  } else if (Array.isArray(value)) {
    while (++index < value.length) {
      addChild(nodes, value[index]);
    }
  } else if (typeof value === "object" && "type" in value) {
    if (value.type === "root") {
      addChild(nodes, value.children);
    } else {
      nodes.push(value);
    }
  } else {
    throw new Error("Expected node, nodes, or string, got `" + value + "`");
  }
}
function parsePrimitive(info, name, value) {
  if (typeof value === "string") {
    if (info.number && value && !Number.isNaN(Number(value))) {
      return Number(value);
    }
    if ((info.boolean || info.overloadedBoolean) && (value === "" || normalize(value) === normalize(name))) {
      return true;
    }
  }
  return value;
}
function style(value) {
  var result = [];
  var key;
  for (key in value) {
    if (own2.call(value, key)) {
      result.push([key, value[key]].join(": "));
    }
  }
  return result.join("; ");
}
function createAdjustMap(values) {
  var result = {};
  var index = -1;
  while (++index < values.length) {
    result[values[index].toLowerCase()] = values[index];
  }
  return result;
}

// node_modules/hastscript/lib/html.js
var h = core(html2, "div");

// node_modules/unist-util-is/index.js
var convert = function(test) {
  if (test === void 0 || test === null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return "length" in test ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  var checks2 = [];
  var index = -1;
  while (++index < tests.length) {
    checks2[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    var index2 = -1;
    while (++index2 < checks2.length) {
      if (checks2[index2].call(this, ...parameters))
        return true;
    }
  }
}
function propsFactory(check) {
  return castFactory(all);
  function all(node) {
    var key;
    for (key in check) {
      if (node[key] !== check[key])
        return;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}

// node_modules/unist-util-visit-parents/color.browser.js
function color(d) {
  return d;
}

// node_modules/unist-util-visit-parents/index.js
var CONTINUE = true;
var SKIP = "skip";
var EXIT = false;
var visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  var is = convert(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      var result = [];
      var subresult;
      var offset;
      var grandparents;
      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}

// node_modules/unist-util-visit/index.js
var visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// src/utils.ts
function s2(css) {
  const toKebabCase = (s3) => s3.replace(/(.)([A-Z])/g, "$1-$2").toLowerCase();
  return Object.entries(css).map(([k, v]) => `${toKebabCase(k)}: ${v}`).join("; ");
}
function findCodeNodes(tree) {
  const nodes = [];
  visit(tree, {type: "element", tagName: "code"}, (node, index, parent) => nodes.push({node, index, parent}));
  return nodes;
}
function findHeadNode(tree) {
  let headNode = null;
  visit(tree, {type: "element", tagName: "head"}, (head) => {
    headNode = head;
  });
  return headNode;
}

// src/style.css
var style_default = 'pre.advanced-code {\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    counter-reset: lineNumbers;\n}\n\npre.advanced-code .codeblock-line:before {\n    counter-increment: lineNumbers;\n    content: counter(lineNumbers);\n    text-align: right;\n    display: inline-block;\n    width: 2rem;\n    margin-right: 20px;\n    color: dimgrey;\n    border-right: 1px dotted dimgrey;\n    padding-right: 3px;\n}\n\npre.advanced-code .codeblock-line[data-highlight="true"] {\n    background-color: darkgreen;\n}\n\npre.advanced-code .codeblock-line[data-highlight="true"]:before {\n    color: white;\n}';

// src/elements.ts
function token(color2, content) {
  const style2 = color2 ? s2({color: color2}) : s2({});
  return h("span", {style: style2}, content);
}
function codeblockLine(highlighted, children) {
  const props = highlighted ? {dataHighlight: "true"} : {};
  const c = children.length === 0 ? " " : children;
  return h(".codeblock-line", props, c);
}
function stylesheet() {
  return h("style", {type: "text/css"}, style_default);
}

// node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// src/cleanupCode.ts
function cleanupCode(rawCode) {
  const trimEmptyLines = (code) => code.replace(/(^\n+)|(\n+$)/g, "");
  return trimEmptyLines(rawCode);
}

// src/index.ts
function parseMeta(value) {
  return value ? {highlightedLines: JSON.parse(value)} : {highlightedLines: []};
}
function parseLanguage(className) {
  if (!className || className === "")
    return null;
  const languageClasses = className.split(" ").filter((c) => c.startsWith("language-")).map((c) => c.substring(c.indexOf("-") + 1));
  return languageClasses.length > 0 ? languageClasses[0] : null;
}
function transformInlineCode(highlighter, lang, node) {
}
function transformCodeBlock(highlighter, lang, node, parent) {
  var _a;
  const meta = parseMeta((_a = node.data) == null ? void 0 : _a.meta);
  const rawCode = node.children[0].value;
  const code = cleanupCode(rawCode);
  const lines = highlighter.codeToThemedTokens(code, lang);
  node.children = lines.map((line, zeroIndexedLineNumber) => codeblockLine(meta.highlightedLines.includes(zeroIndexedLineNumber + 1), line.map((t) => token(t.color, t.content))));
  if (!parent.properties) {
    parent.properties = {style: ""};
  }
  parent.properties = __spreadProps(__spreadValues({}, parent.properties), {
    className: clsx_m_default("advanced-code", parent.properties.className)
  });
  parent.properties.style = s2({
    color: highlighter.getForegroundColor(),
    backgroundColor: highlighter.getBackgroundColor()
  }) + (parent.properties.style || "");
}
var advancedCodeBlock = function advancedCodeBlock2() {
  const transformCode = async (node, index, parent) => {
    var _a;
    const lang = parseLanguage(String((_a = node.properties) == null ? void 0 : _a.className));
    if (lang === null || node.children.length !== 1 || node.children[0].type !== "text") {
      return;
    }
    if (parent === null || parent.type !== "element" || parent.tagName !== "pre") {
      const highlighter = await getHighlighter({
        theme: "monokai",
        langs: [lang]
      });
      return transformInlineCode(highlighter, lang, node);
    } else {
      const highlighter = await getHighlighter({
        theme: "monokai",
        langs: [lang]
      });
      return transformCodeBlock(highlighter, lang, node, parent);
    }
  };
  return async function codeBlockProcessor(tree) {
    const nodes = findCodeNodes(tree);
    const headNode = findHeadNode(tree);
    if (headNode && !headNode.children) {
      headNode.children = [stylesheet()];
    } else if (headNode) {
      headNode.children.push(stylesheet());
    } else if (nodes.length > 0) {
      const root = tree;
      root.children = [stylesheet(), ...root.children];
    }
    await Promise.all(nodes.map(({node, index, parent}) => transformCode(node, index, parent)));
  };
};
var src_default = advancedCodeBlock;

// demo/demo.src.js
var import_rehype_stringify = __toModule(require_rehype_stringify());
setCDN("https://unpkg.com/shiki/");
var previewRemarkDiv = document.getElementById("previewRemark");
var previewRehypeDiv = document.getElementById("previewRehype");
var editorRemark = document.getElementById("editorRemark");
var editorRehype = document.getElementById("editorRehype");
var submitRemark = document.getElementById("submitRemark");
var submitRehype = document.getElementById("submitRehype");
function convertRehype() {
  (0, import_unified.default)().use(import_rehype_parse.default).use(src_default).use(import_rehype_stringify.default).process(editorRehype.value).then((newMarkup) => {
    previewRehypeDiv.innerHTML = newMarkup.contents;
  });
}
editorRehype.addEventListener("keypress", (event) => {
  if (event.ctrlKey && event.code === "Enter") {
    convertRehype();
  }
});
submitRehype.addEventListener("click", (e) => {
  e.preventDefault();
  convertRehype();
});
convertRehype();
function convertRemark() {
  (0, import_unified.default)().use(import_remark_parse.default).use(import_remark_rehype.default).use(src_default).use(import_rehype_stringify.default).process(editorRemark.value).then((newMarkup) => {
    previewRemarkDiv.innerHTML = newMarkup.contents;
  });
}
editorRemark.addEventListener("keypress", (event) => {
  if (event.ctrlKey && event.code === "Enter") {
    convertRemark();
  }
});
submitRemark.addEventListener("click", (e) => {
  e.preventDefault();
  convertRemark();
});
convertRemark();
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
