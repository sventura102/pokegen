// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"egcxg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "eee974a1ccaa3f09";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jSUBV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _externalServicesMjs = require("./ExternalServices.mjs");
var _externalServicesMjsDefault = parcelHelpers.interopDefault(_externalServicesMjs);
var _homePageMjs = require("./HomePage.mjs");
var _homePageMjsDefault = parcelHelpers.interopDefault(_homePageMjs);
var _pokeListMjs = require("./PokeList.mjs");
var _pokeListMjsDefault = parcelHelpers.interopDefault(_pokeListMjs);
var _pollProcessMjs = require("./poll-process.mjs");
var _pollProcessMjsDefault = parcelHelpers.interopDefault(_pollProcessMjs);
var _signUpMjs = require("./SignUp.mjs");
var _signUpMjsDefault = parcelHelpers.interopDefault(_signUpMjs);
const mainContainer = document.querySelector(".main-content");
const dataSource = new (0, _externalServicesMjsDefault.default)();
initRouter(dataSource, mainContainer);
function initRouter(dataSource, mainContainer) {
    function hashToRoute(hash) {
        switch(hash){
            case "#/home-page":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const homePage = new (0, _homePageMjsDefault.default)(dataSource, mainContainer);
                homePage.init();
                break;
            case "#/poke-list":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const pokeList = new (0, _pokeListMjsDefault.default)(dataSource, mainContainer);
                pokeList.init();
                break;
            case "#/poke-poll":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const pokePoll = new (0, _pollProcessMjsDefault.default)(dataSource, mainContainer);
                pokePoll.init();
                break;
            case "#/poke-signup":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const signup = new (0, _signUpMjsDefault.default)(dataSource, mainContainer);
                signup.init();
                break;
            default:
                // Delete previous main content:
                mainContainer.innerHtml = "";
                break;
        }
    }
    const defaultHash = window.location.hash || "#/home-page";
    hashToRoute(defaultHash);
    window.addEventListener("hashchange", (e)=>{
        const newUrl = new URL(e.newURL);
        const hash = newUrl.hash;
        hashToRoute(hash);
    });
}

},{"./ExternalServices.mjs":"b2hnZ","./HomePage.mjs":"dkD60","./PokeList.mjs":"ixoBQ","./SignUp.mjs":"9VahQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./poll-process.mjs":"bmPuY"}],"b2hnZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const baseURL = "https://pokeapi.co/api/v2/";
function convertToJson(res) {
    if (res.ok) return res.json();
    else throw {
        name: "servicesError",
        message: res
    };
}
class ExternalServices {
    // Get JSON of types (count,results->name[0]->url[1]):
    async getPokeTypes() {
        const response = await fetch(baseURL + "type/");
        const data = await convertToJson(response);
        return data.results;
    }
    // Get JSON of generations (count, results->name[0]->url[1]):
    async getPokeGenerations() {
        const response = await fetch(baseURL + "generation/");
        const data = await convertToJson(response);
        return data.results;
    }
    // Gets JSON (with pokemon_species->[6] and types->[7]) from given URL:
    async getPokemonsByGeneration(genNumber) {
        const response = await fetch(baseURL + `generation/${genNumber}/`);
        const data = await convertToJson(response);
        return data.pokemon_species;
    }
    // Gets JSON (with name->[5] and pokemon->[9]) from given URL:
    async getPokemonsByType(type) {
        const products = await fetch(baseURL + `type/${type}/`);
        const data = await convertToJson(products);
        return data.pokemon;
    }
    // Find a specific pokémon based on its ID:
    async findPokemonById(id) {
        const pokemon = await fetch(baseURL + `pokemon/${id}`);
        const data = await convertToJson(pokemon);
        return data;
    }
}
exports.default = ExternalServices;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dkD60":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsMjs = require("./utils.mjs");
function homePageTemplate() {
    return `<h1>Welcome to the Pokémon Generator!</h1>

            <h2>Select Pokémons based on generation</h2>
            <form action="/#/poke-list" id="generation-form" name="gen-form">
                <label for="generations">Generation:</label>
                <select id="gen-select" required></select>
                <button id="gen-btn" type="submit">Show Pokemons!</button>
            </form>

            <h2>Select Pokémons based on type</h2>
            <form action="/#/poke-list" id="type-form" name="type-form">
                <button id="type-btn" type="submit">Show Pokemons!</button>
            </form>`;
}
function genOptions(genJSON) {
    return `<option value="${genJSON.name}">${genJSON.url.slice(-2, -1)}</option>`;
}
function typeOptions(typeJSON) {
    return `<input class="type" type="checkbox" id="${typeJSON.name}" value="${typeJSON.name}">
            <label for="${typeJSON.name}">${typeJSON.name.charAt(0).toUpperCase() + typeJSON.name.slice(1)}</label>`;
}
function getCheckedTypes() {
    let types = document.querySelectorAll(".type");
    let typesChecked = [];
    for(let i = 0; i < types.length; i++)if (types[i].checked == true) {
        let type = types[i].value;
        typesChecked.push(type);
    }
    (0, _utilsMjs.setLocalStorage)("types", typesChecked);
}
class HomePage {
    constructor(dataSource, mainContainer){
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }
    async init() {
        // Fill the title with the name of the page:
        document.querySelector(".page-title").textContent = "Home Page | Pok\xe9Gen";
        // Add footer year:
        document.querySelector("#footer-year").textContent = new Date().getFullYear();
        // Await promise from dataSource:
        const generationsList = await this.dataSource.getPokeGenerations();
        const typesList = await this.dataSource.getPokeTypes();
        //Render Home Page main:
        (0, _utilsMjs.renderWithTemplate)(homePageTemplate(), this.mainContainer);
        // Get the options parent elements:
        const genOptionsElement = document.querySelector("#gen-select");
        const typeOptionsElement = document.querySelector("#type-form");
        // Render inner form elements:
        (0, _utilsMjs.renderListWithTemplate)(genOptions, genOptionsElement, generationsList);
        (0, _utilsMjs.renderListWithTemplate)(typeOptions, typeOptionsElement, typesList);
        // Listen for click on the button:
        document.querySelector("#gen-btn").addEventListener("click", ()=>{
            // Check form validity (no empty input fields):
            var myForm = document.forms[0];
            var chk_status = myForm.checkValidity();
            myForm.reportValidity();
            if (chk_status) {
                const generation = document.getElementById("gen-select").options[document.getElementById("gen-select").selectedIndex].text;
                (0, _utilsMjs.setLocalStorage)("category", "generation");
                (0, _utilsMjs.setLocalStorage)("generation", `${generation}`);
            }
        });
        // Listen for click on the button:
        document.querySelector("#type-btn").addEventListener("click", ()=>{
            // Check form validity (no empty input fields):
            var myForm = document.forms[0];
            var chk_status = myForm.checkValidity();
            myForm.reportValidity();
            if (chk_status) {
                getCheckedTypes();
                (0, _utilsMjs.setLocalStorage)("category", "types");
            }
        });
    }
}
exports.default = HomePage;

},{"./utils.mjs":"6Qrgp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Qrgp":[function(require,module,exports) {
// retrieve data from localstorage
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocalStorage", ()=>getLocalStorage);
parcelHelpers.export(exports, "setLocalStorage", ()=>setLocalStorage);
// set a listener for both touchend and click
parcelHelpers.export(exports, "setClick", ()=>setClick);
//create new function getParam that will get the parameter from the URL
parcelHelpers.export(exports, "getParam", ()=>getParam);
parcelHelpers.export(exports, "renderListWithTemplate", ()=>renderListWithTemplate);
parcelHelpers.export(exports, "renderWithTemplate", ()=>renderWithTemplate);
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
function setLocalStorage(key, data) {
    let jsonData;
    try {
        jsonData = JSON.stringify(data);
    } catch (e) {
        console.error(`Error parsing data to JSON: ${e}`);
        return;
    }
    localStorage.setItem(key, jsonData);
}
function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event)=>{
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}
function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pokemon = urlParams.get(param);
    return pokemon;
}
function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
    // if clear is true we need to clear out the contents of the parent.
    if (clear == true) parentElement.innerHTML = "";
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}
function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    //if there is a callback...call it and pass data
    if (callback) callback(data);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixoBQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsMjs = require("./utils.mjs");
function pokeListMainTemplate(category) {
    return `<h1>Pokémon List by ${category}</h1>
            <h2>These are the pokémons that were introduced in the selected ${category}</h2>
            <ul id="pokemon-list"></ul>`;
}
function pokemonListCardTemplate(pokemon) {
    return `<li class="pokemon-card">
                <a href="/#/poke-details" id="${pokemon.id}">
                    <h3 class="poke-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                </a>
                <button type="submit" id="${pokemon.name}">Vote for Me!</button>
            </li>`;
}
class PokemonList {
    constructor(dataSource, mainContainer){
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.category = (0, _utilsMjs.getLocalStorage)("category");
        this.pokeList = [];
        this.pokeInfo = [];
        this.sortBy = "name"; // initialize the default sorting order
    }
    async init() {
        // Fill the title with the name of the page:
        document.querySelector(".page-title").textContent = `Pokémon List by ${this.category} | PokéGen`;
        // Render PokeList main:
        (0, _utilsMjs.renderWithTemplate)(pokeListMainTemplate(this.category), this.mainContainer);
        // Get number of generation from LocalStorage:
        let generation = (0, _utilsMjs.getLocalStorage)("generation");
        // Await promise from dataSource:
        this.pokeList = await this.dataSource.getPokemonsByGeneration(generation);
        // Sort the list based on the default sorting order(name):
        this.sortPokeList(this.pokeList);
        // Set the pokemon information in the pokeList:
        this.pokeList.forEach((pokemon)=>{
            const url = pokemon.url.slice(0, -1);
            const pokeId = url.substring(url.lastIndexOf("/") + 1);
            pokemon.id = pokeId;
        // //Get pokemon info from API:
        // this.getPokeInfo(pokeId);s
        });
        console.log(this.pokeList);
        // Get the options parent elements:
        const pokemonListElement = document.querySelector("#pokemon-list");
        // Render list of generations:
        (0, _utilsMjs.renderListWithTemplate)(pokemonListCardTemplate, pokemonListElement, this.pokeList);
        // Listen for click on button:
        document.querySelectorAll("button").forEach((occurence)=>{
            let name = occurence.getAttribute("id");
            occurence.addEventListener("click", function() {
                let voteList = (0, _utilsMjs.getLocalStorage)("votes");
                // Check pokemons inside the votes object:
                for(const pokemon in voteList)if (pokemon == name) {
                    if (voteList[pokemon] > 0) voteList[pokemon] += 1;
                    else voteList[pokemon] = 1;
                } else Object.assign(voteList, {
                    [name]: 1
                });
                // Set new values in localStorage:
                (0, _utilsMjs.setLocalStorage)("votes", voteList);
            });
        });
        // Listen for click on the link to set pokémon ID in localStorage:s
        document.querySelectorAll("a").forEach((occurence)=>{
            let id = occurence.getAttribute("id");
            occurence.addEventListener("click", function() {
                (0, _utilsMjs.setLocalStorage)("pokeId", id);
            });
        });
    }
    // Sorts the pokeList alphabetically:
    sortPokeList(pokeList) {
        if (this.sortBy === "name") pokeList.sort((a, b)=>a.name.localeCompare(b.name));
    }
    // Get pokémon information:
    async getPokeInfo(pokeId) {
        this.pokeInfo.push(await this.dataSource.findPokemonById(pokeId));
    }
} /* const pokeInfo = await this.dataSource.findPokemonById(pokeId); */  /* <img src="${pokemon.sprites}" alt="Image of ${pokemon.name}">"/>
<p class="poke-color">${pokemon}</p>
<p class="poke-type">${pokemon}</p>
<p class="poke-growth">${pokemon}</p> */ 
exports.default = PokemonList;

},{"./utils.mjs":"6Qrgp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VahQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsMjs = require("./utils.mjs");
function signupPageTemplate() {
    return `<h1>Signup</h1>
            <h2>Please fill in this form to receive updates when new Pokémons are released!</h2>
            <form action="" method="post">
                <input type="text" name="user-name" placeholder=User Name">
                <input type="email" name="user-email" placeholder="Email">
                <input type="password" name="user-pass" placeholder="Password">
                <input type="button" name="signup-btn" value="Signup">
                </form>
            <div class="popup" id="popUp">
                <h2>Thank you!</h2>
                <p>You've created your account. Thanks!</p>
            </div>`;
}
function togglePopup() {
    document.getElementById("popUp").classList.toggle("active");
}
class SignUp {
    constructor(dataSource, mainContainer){
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }
    async init() {
        //Fill title with the name of the page:
        document.querySelector(".page-title").textContent = "Sign Up | Pok\xe9Gen";
        //Render SignUp main:
        (0, _utilsMjs.renderWithTemplate)(signupPageTemplate(), this.mainContainer);
        //Click function:
        document.querySelector("#signup-btn").addEventListener("click", ()=>{
            return togglePopup;
        });
    }
}
exports.default = SignUp;

},{"./utils.mjs":"6Qrgp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmPuY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsMjs = require("./utils.mjs");
function pollTemplate() {
    return `<div class="poll">
                <div class="top-pokemons"></div>
            </div>;`;
}
//display poll question and options
let poll = {
    question: "What's your favorite starter pokemon from the 1st generation?",
    answers: [
        "Bulbasaur",
        "Charmander",
        "Squirtle",
        "Pikachu"
    ],
    pollCount: 20,
    answersWeight: [
        4,
        4,
        2,
        10
    ],
    selectedAnswer: 1
};
let pollDom = {
    question: document.querySelector(".poll . question"),
    answers: document.querySelector(".poll .answers")
};
pollDom.question.innerText = poll.question;
poll.answers.map(function(answer, i) {
    return `<div class="answer" onClick="markAnswer('${i}')">
        ${answer}
        <span class="percentage-bar"></span>
        <span class="percentage-value"></span>
        </div`;
}).join("");
//mark selected answer
function markAnswer(i) {
    poll.selectedAnswer = +i;
    try {
        document.querySelector(".poll . answers .answer .selected").classList.remove("selected");
    } catch (msg) {}
    document.querySelectorAll(".poll . answers .answer").classList.add("selected");
    showResults();
}
//display poll results
function showResults() {
    let answers = document.querySelector(".poll .answers .answer");
    for(let i = 0; 1 < answers.length; i++){
        let percentage = 0;
        if (i == poll.selectedAnswer) percentage = Math.round((poll.answersWeight[i] + 1) * 100 / (poll.pollCount + 1));
        else percentage = Math.round((poll.answersWeight[i] + 1) * 100 / (poll.pollCount + 1));
        answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
        answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
}
//Comment Section
function addComment() {
    return `<div class ="comments">
            <h2>Leave Your Comments</h2>
            <form id=comment-form>
                <label for="fullName">Name:</label>
                <input type="fullName" name="fullName" id="fullName" required>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" required>
                <textarea placeholder='Add Your Comment'></textarea>
                <div class="button">
                    input type="submit" value="Comment">
                    <button>Cancel</button>
                </div>
            </form>
            </div>`;
}
// Store votes:
setLocalStorage("votes", {
    "victini": 3,
    "meowth": 5,
    "bulbasaur": 2,
    "pikachu": 15
});
// 
function showResults() {
    const pokeVotes = getLocalStorage(this.key);
    if (pokeVotes != null) {
        let topPokemons = [];
        // Go through the list of pokemons with votes and 
        // get the top 4 with most votes:
        const htmlItems = pokeVotes.map((pokemon)=>{});
    }
}
class PokemonVotingPoll {
    constructor(dataSource, mainContainer){
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }
    async init() {
        // Fill the title with the name of the page:
        document.querySelector(".page-title").textContent = "Poll Page | Pok\xe9Gen";
        // Await promise from dataSource:
        //Render Poll Page main:
        (0, _utilsMjs.renderWithTemplate)(pollTemplate(), this.mainContainer);
    // Get the options parent elements:
    // Listen for click on the button:
    }
}
exports.default = PokemonVotingPoll;

},{"./utils.mjs":"6Qrgp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["egcxg","jSUBV"], "jSUBV", "parcelRequire38ce")

//# sourceMappingURL=index.ccaa3f09.js.map
