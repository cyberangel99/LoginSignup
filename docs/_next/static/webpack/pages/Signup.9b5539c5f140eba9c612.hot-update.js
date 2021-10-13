self["webpackHotUpdate_N_E"]("pages/Signup",{

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebase": function() { return /* binding */ firebase; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");





/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var ERRORS = (_a$1 = {},
    _a$1["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a$1["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a$1["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a$1["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a$1["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a$1["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a$1);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory('app', 'Firebase', ERRORS);

var name$c = "@firebase/app";
var version$1 = "0.6.29";

var name$b = "@firebase/analytics";

var name$a = "@firebase/app-check";

var name$9 = "@firebase/auth";

var name$8 = "@firebase/database";

var name$7 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$5 = "@firebase/messaging";

var name$4 = "@firebase/performance";

var name$3 = "@firebase/remote-config";

var name$2 = "@firebase/storage";

var name$1 = "@firebase/firestore";

var name = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a = {},
    _a[name$c] = 'fire-core',
    _a[name$b] = 'fire-analytics',
    _a[name$a] = 'fire-app-check',
    _a[name$9] = 'fire-auth',
    _a[name$8] = 'fire-rtdb',
    _a[name$7] = 'fire-fn',
    _a[name$6] = 'fire-iid',
    _a[name$5] = 'fire-fcm',
    _a[name$4] = 'fire-perf',
    _a[name$3] = 'fire-rc',
    _a[name$2] = 'fire-gcs',
    _a[name$1] = 'fire-fst',
    _a['fire-js'] = 'fire-js',
    _a[name] = 'fire-js-all',
    _a);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(options);
        this.container = new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        // populate ComponentContainer with existing components
        this.firebase_.INTERNAL.components.forEach(function (component) {
            return _this._addComponent(component);
        });
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        var _a;
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // Initialize instance if InstatiationMode is `EXPLICIT`.
        var provider = this.container.getProvider(name);
        if (!provider.isInitialized() &&
            ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT" /* EXPLICIT */) {
            provider.initialize();
        }
        // getImmediate will always succeed because _getService is only called for registered components.
        return provider.getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    FirebaseAppImpl.prototype.toJSON = function () {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        };
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version = "8.8.1";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        // add the component to existing app instances
        for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
            var appName = _a[_i];
            apps[appName]._addComponent(component);
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
        }
        (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.setUserLogHandler)(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.createSubscribe,
        ErrorFactory: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory,
        deepExtend: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(namespace, props);
    }
    return namespace;
}
var firebase$1 = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$c, version$1, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.isBrowser)() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase$1.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase$1.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.isNode)()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase = firebase$1;
registerCoreComponents(firebase);

/* harmony default export */ __webpack_exports__["default"] = (firebase);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/auth.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");
(function() {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}var ca=ba(this);
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}
da("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject)}catch(m){h.reject(m)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=ca.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
g[h];g[h]=null;try{m()}catch(p){this.f(p)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(p){return function(v){m||(m=!0,p.call(h,v))}}var h=this,m=!1;return{resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.s(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.v(g):this.h(g)}};
b.prototype.v=function(g){var h=void 0;try{h=g.then}catch(m){this.g(m);return}"function"==typeof h?this.u(h,g):this.h(g)};b.prototype.g=function(g){this.i(2,g)};b.prototype.h=function(g){this.i(1,g)};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.s=function(g){var h=this.f();
g.Ra(h.resolve,h.reject)};b.prototype.u=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject)}catch(p){m.reject(p)}};b.prototype.then=function(g,h){function m(A,Q){return"function"==typeof A?function(ya){try{p(A(ya))}catch(Ad){v(Ad)}}:Q}var p,v,B=new b(function(A,Q){p=A;v=Q});this.Ra(m(g,p),m(h,v));return B};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Ra=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m)};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g)})};b.race=function(g){return new b(function(h,m){for(var p=fa(g),v=p.next();!v.done;v=p.next())d(v.value).Ra(h,m)})};b.all=function(g){var h=fa(g),m=h.next();return m.done?d([]):new b(function(p,v){function B(ya){return function(Ad){A[ya]=Ad;Q--;0==Q&&p(A)}}var A=[],Q=0;do A.push(void 0),Q++,d(m.value).Ra(B(A.length-1),v),m=h.next();while(!m.done)})};return b});
var ha=ha||{},l=this||self,ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)?a:""}function la(){}function ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function na(a){var b=ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}function oa(a){return"function"==ma(a)}function n(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function pa(a){return Object.prototype.hasOwnProperty.call(a,qa)&&a[qa]||(a[qa]=++ra)}var qa="closure_uid_"+(1E9*Math.random()>>>0),ra=0;function sa(a,b,c){return a.call.apply(a.bind,arguments)}function ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=sa:q=ta;return q.apply(null,arguments)}function ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var va=Date.now;function r(a,b){function c(){}c.prototype=b.prototype;a.bb=b.prototype;a.prototype=new c;a.prototype.constructor=a}function wa(a){return a};/*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function t(a,b,c){this.code=xa+a;this.message=b||za[a]||"";this.a=c||null}r(t,Error);t.prototype.w=function(){var a={code:this.code,message:this.message};this.a&&(a.serverResponse=this.a);return a};t.prototype.toJSON=function(){return this.w()};function Aa(a){var b=a&&a.code;return b?new t(b.substring(xa.length),a.message,a.serverResponse):null}
var xa="auth/",za={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.",
"unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
"multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
"missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
"rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.",
"unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
"web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var Ba={ld:{Ua:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},sd:{Ua:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",$a:"https://securetoken.googleapis.com/v1/token",Xa:"https://identitytoolkit.googleapis.com/v2/",id:"p"},ud:{Ua:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
$a:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},vd:{Ua:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",$a:"https://test-securetoken.sandbox.googleapis.com/v1/token",Xa:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};
function Ca(a){for(var b in Ba)if(Ba[b].id===a)return a=Ba[b],{firebaseEndpoint:a.Ua,secureTokenEndpoint:a.$a,identityPlatformEndpoint:a.Xa};return null}var Da;Da=Ca("__EID__")?"__EID__":void 0;function Ea(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(u,Error);u.prototype.name="CustomError";function Fa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}r(Fa,u);Fa.prototype.name="AssertionError";function Ga(a,b){throw new Fa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Ha(a,b){this.c=a;this.f=b;this.b=0;this.a=null}Ha.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function Ia(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function Ja(){this.b=this.a=null}var La=new Ha(function(){return new Ka},function(a){a.reset()});Ja.prototype.add=function(a,b){var c=La.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function Ma(){var a=Na,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ka(){this.next=this.b=this.a=null}Ka.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Ka.prototype.reset=function(){this.next=this.b=this.a=null};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Pa(a,b){for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}
var Qa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ra=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Sa=Array.prototype.some?function(a,
b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function Ta(a){a:{var b=Ua;for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Va(a,b){return 0<=Oa(a,b)}
function Wa(a,b){b=Oa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Xa(a,b){var c=0;Pa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ya(a){return Array.prototype.concat.apply([],arguments)}function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var $a=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;function x(a,b){return-1!=a.indexOf(b)}function hb(a,b){return a<b?-1:a>b?1:0};var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}function y(a){return x(ib,a)};function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function mb(a){for(var b in a)return!1;return!0}function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function pb(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(n(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":typeof a;Ga("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f)}};function qb(a,b){this.a=a===rb&&b||"";this.b=sb}qb.prototype.ta=!0;qb.prototype.sa=function(){return this.a};qb.prototype.toString=function(){return"Const{"+this.a+"}"};function tb(a){if(a instanceof qb&&a.constructor===qb&&a.b===sb)return a.a;Ga("expected object of type Const, got '"+a+"'");return"type_error:Const"}var sb={},rb={};var ub;function vb(){if(void 0===ub){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa})}catch(c){l.console&&l.console.error(c.message)}ub=a}else ub=a}return ub};function wb(a,b){this.a=b===xb?a:""}wb.prototype.ta=!0;wb.prototype.sa=function(){return this.a.toString()};wb.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function yb(a){if(a instanceof wb&&a.constructor===wb)return a.a;Ga("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ma(a));return"type_error:TrustedResourceUrl"}
function zb(a,b){var c=tb(a);if(!Ab.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Bb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof qb?tb(d):encodeURIComponent(String(d))});return Cb(a)}var Bb=/%{(\w+)}/g,Ab=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,xb={};
function Cb(a){var b=vb();a=b?b.createScriptURL(a):a;return new wb(a,xb)};function C(a,b){this.a=b===Db?a:""}C.prototype.ta=!0;C.prototype.sa=function(){return this.a.toString()};C.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Eb(a){if(a instanceof C&&a.constructor===C)return a.a;Ga("expected object of type SafeUrl, got '"+a+"' of type "+ma(a));return"type_error:SafeUrl"}
var Fb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Gb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Ib(a){if(a instanceof C)return a;a="object"==typeof a&&a.ta?a.sa():String(a);if(Hb.test(a))a=new C(a,Db);else{a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Gb);a=b&&Fb.test(b[1])?new C(a,Db):null}return a}function Jb(a){if(a instanceof C)return a;a="object"==typeof a&&a.ta?a.sa():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return new C(a,Db)}var Db={},Kb=new C("about:invalid#zClosurez",Db);function Lb(a,b,c){this.a=c===Mb?a:""}Lb.prototype.ta=!0;Lb.prototype.sa=function(){return this.a.toString()};Lb.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.a;Ga("expected object of type SafeHtml, got '"+a+"' of type "+ma(a));return"type_error:SafeHtml"}var Mb={};function Ob(a,b){pb(a,"HTMLScriptElement");a.src=yb(b);(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=l?b=ka(b.document):(null===ja&&(ja=ka(l.document)),b=ja);b&&a.setAttribute("nonce",b)}function Pb(a,b,c,d){a=a instanceof C?a:Jb(a);b=b||l;c=c instanceof qb?tb(c):c||"";return b.open(Eb(a),c,d,void 0)};function Qb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Rb(a){gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(eb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(fb,"&#0;")));return a};function Sb(a){Sb[" "](a);return a}Sb[" "]=la;function Tb(a,b){var c=Ub;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Vb=y("Opera"),Wb=y("Trident")||y("MSIE"),Xb=y("Edge"),Yb=Xb||Wb,Zb=y("Gecko")&&!(x(ib.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),$b=x(ib.toLowerCase(),"webkit")&&!y("Edge");function ac(){var a=l.document;return a?a.documentMode:void 0}var bc;
a:{var cc="",dc=function(){var a=ib;if(Zb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Xb)return/Edge\/([\d\.]+)/.exec(a);if(Wb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($b)return/WebKit\/(\S+)/.exec(a);if(Vb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();dc&&(cc=dc?dc[1]:"");if(Wb){var ec=ac();if(null!=ec&&ec>parseFloat(cc)){bc=String(ec);break a}}bc=cc}var Ub={};
function fc(a){return Tb(a,function(){for(var b=0,c=$a(String(bc)).split("."),d=$a(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=hb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||hb(0==g[2].length,0==h[2].length)||hb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var gc;
if(l.document&&Wb){var hc=ac();gc=hc?hc:parseInt(bc,10)||void 0}else gc=void 0;var ic=gc;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var jc=!Wb||9<=Number(ic);function kc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function lc(a,b){lb(b,function(c,d){c&&"object"==typeof c&&c.ta&&(c=c.sa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function nc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!jc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Rb(g.name),'"');if(g.type){f.push(' type="',Rb(g.type),'"');var h={};z(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=oc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):lc(f,g));2<d.length&&pc(e,f,d);return f}
function pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!na(f)||n(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(n(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(oa(f)){g="function"==typeof f.item;break a}}g=!1}w(g?Za(f):f,d)}}}function oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};function qc(a){l.setTimeout(function(){throw a;},0)}var rc;
function sc(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var e=oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(m){if(("*"==h||m.origin==h)&&m.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Hb;c.Hb=null;e()}};return function(e){d.next={Hb:e};d=d.next;b.port2.postMessage(0)}}return function(e){l.setTimeout(e,0)}};function tc(a,b){uc||vc();wc||(uc(),wc=!0);Na.add(a,b)}var uc;function vc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);uc=function(){a.then(xc)}}else uc=function(){var b=xc;!oa(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(rc||(rc=sc()),rc(b)):l.setImmediate(b)}}var wc=!1,Na=new Ja;function xc(){for(var a;a=Ma();){try{a.a.call(a.b)}catch(b){qc(b)}Ia(La,a)}wc=!1};function D(a,b){this.a=yc;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=la)try{var c=this;a.call(b,function(d){zc(c,Ac,d)},function(d){if(!(d instanceof Bc))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}zc(c,Cc,d)})}catch(d){zc(this,Cc,d)}}var yc=0,Ac=2,Cc=3;function Dc(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}Dc.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var Ec=new Ha(function(){return new Dc},function(a){a.reset()});
function Fc(a,b,c){var d=Ec.get();d.g=a;d.b=b;d.f=c;return d}function E(a){if(a instanceof D)return a;var b=new D(la);zc(b,Ac,a);return b}function F(a){return new D(function(b,c){c(a)})}function Gc(a,b,c){Hc(a,b,c,null)||tc(ua(b,a))}function Ic(a){return new D(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,v){d--;e[p]=v;0==d&&b(e)},g=function(p){c(p)},h=0,m;h<a.length;h++)m=a[h],Gc(m,ua(f,h),g);else b(e)})}
function Jc(a){return new D(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Qb:!0,value:p}:{Qb:!1,reason:p};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Gc(g,ua(e,f,!0),ua(e,f,!1));else b(d)})}D.prototype.then=function(a,b,c){return Kc(this,oa(a)?a:null,oa(b)?b:null,c)};D.prototype.$goog_Thenable=!0;k=D.prototype;k.oa=function(a,b){a=Fc(a,a,b);a.c=!0;Lc(this,a);return this};k.o=function(a,b){return Kc(this,null,a,b)};
k.cancel=function(a){if(this.a==yc){var b=new Bc(a);tc(function(){Mc(this,b)},this)}};function Mc(a,b){if(a.a==yc)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==yc&&1==d?Mc(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Nc(c),Oc(c,e,Cc,b)))}a.c=null}else zc(a,Cc,b)}function Lc(a,b){a.b||a.a!=Ac&&a.a!=Cc||Pc(a);a.f?a.f.next=b:a.b=b;a.f=b}
function Kc(a,b,c,d){var e=Fc(null,null,null);e.a=new D(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m)}catch(p){g(p)}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof Bc?g(h):f(m)}catch(p){g(p)}}:g});e.a.c=a;Lc(a,e);return e.a}k.$c=function(a){this.a=yc;zc(this,Ac,a)};k.ad=function(a){this.a=yc;zc(this,Cc,a)};
function zc(a,b,c){a.a==yc&&(a===c&&(b=Cc,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Hc(c,a.$c,a.ad,a)||(a.i=c,a.a=b,a.c=null,Pc(a),b!=Cc||c instanceof Bc||Qc(a,c)))}function Hc(a,b,c,d){if(a instanceof D)return Lc(a,Fc(b||la,c||null,d)),!0;if(Ea(a))return a.then(b,c,d),!0;if(n(a))try{var e=a.then;if(oa(e))return Rc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Rc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m))}function g(m){h||(h=!0,c.call(e,m))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function Pc(a){a.h||(a.h=!0,tc(a.gc,a))}function Nc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.gc=function(){for(var a;a=Nc(this);)Oc(this,a,this.a,this.i);this.h=!1};
function Oc(a,b,c,d){if(c==Cc&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Sc(b,c,d);else try{b.c?b.g.call(b.f):Sc(b,c,d)}catch(e){Tc.call(null,e)}Ia(Ec,b)}function Sc(a,b,c){b==Ac?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Qc(a,b){a.g=!0;tc(function(){a.g&&Tc.call(null,b)})}var Tc=qc;function Bc(a){u.call(this,a)}r(Bc,u);Bc.prototype.name="cancel";function Uc(){0!=Vc&&(Wc[pa(this)]=this);this.ya=this.ya;this.pa=this.pa}var Vc=0,Wc={};Uc.prototype.ya=!1;function Xc(a){if(!a.ya&&(a.ya=!0,a.Da(),0!=Vc)){var b=pa(a);if(0!=Vc&&a.pa&&0<a.pa.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Wc[b]}}Uc.prototype.Da=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()()};var Yc=Object.freeze||function(a){return a};var Zc=!Wb||9<=Number(ic),$c=Wb&&!fc("9"),ad=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",la,b),l.removeEventListener("test",la,b)}catch(c){}return a}();function G(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=!1}G.prototype.preventDefault=function(){this.defaultPrevented=!0};function bd(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Zb){a:{try{Sb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cd[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}r(bd,G);var cd=Yc({2:"touch",3:"pen",4:"mouse"});bd.prototype.preventDefault=function(){bd.bb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$c)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};bd.prototype.g=function(){return this.a};var dd="closure_listenable_"+(1E6*Math.random()|0),ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Wa=e;this.key=++ed;this.wa=this.Qa=!1}function gd(a){a.wa=!0;a.listener=null;a.proxy=null;a.src=null;a.Wa=null};function hd(a){this.src=a;this.a={};this.b=0}hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=id(a,b,d,e);-1<g?(b=a[g],c||(b.Qa=!1)):(b=new fd(b,this.src,f,!!d,e),b.Qa=c,a.push(b));return b};function jd(a,b){var c=b.type;c in a.a&&Wa(a.a[c],b)&&(gd(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wa&&f.listener==b&&f.capture==!!c&&f.Wa==d)return e}return-1};var kd="closure_lm_"+(1E6*Math.random()|0),ld={},md=0;function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?qd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!1,d,e)}
function rd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=n(e)?!!e.capture:!!e,h=sd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=td();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ad||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ud(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");md++}}
function td(){var a=vd,b=Zc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?wd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!0,d,e)}
function xd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xd(a,b[f],c,d,e);else(d=n(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?(a=a.v,b=String(b).toString(),b in a.a&&(f=a.a[b],c=id(f,c,d,e),-1<c&&(gd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=sd(a))&&(b=a.a[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=-1<a?b[a]:null)&&yd(c))}
function yd(a){if("number"!==typeof a&&a&&!a.wa){var b=a.src;if(b&&b[dd])jd(b.v,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ud(c),d):b.addListener&&b.removeListener&&b.removeListener(d);md--;(c=sd(b))?(jd(c,a),0==c.b&&(c.src=null,b[kd]=null)):gd(a)}}}function ud(a){return a in ld?ld[a]:ld[a]="on"+a}
function zd(a,b,c,d){var e=!0;if(a=sd(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.wa&&(f=Bd(f,d),e=e&&!1!==f)}return e}function Bd(a,b){var c=a.listener,d=a.Wa||a.src;a.Qa&&yd(a);return c.call(d,b)}
function vd(a,b){if(a.wa)return!0;if(!Zc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new bd(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=zd(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=zd(d[e],a,!1,b),c=c&&f}return c}return Bd(a,
new bd(b,this))}function sd(a){a=a[kd];return a instanceof hd?a:null}var Cd="__closure_events_fn_"+(1E9*Math.random()>>>0);function pd(a){if(oa(a))return a;a[Cd]||(a[Cd]=function(b){return a.handleEvent(b)});return a[Cd]};function H(){Uc.call(this);this.v=new hd(this);this.bc=this;this.hb=null}r(H,Uc);H.prototype[dd]=!0;H.prototype.addEventListener=function(a,b,c,d){nd(this,a,b,c,d)};H.prototype.removeEventListener=function(a,b,c,d){xd(this,a,b,c,d)};
H.prototype.dispatchEvent=function(a){var b,c=this.hb;if(c)for(b=[];c;c=c.hb)b.push(c);c=this.bc;var d=a.type||a;if("string"===typeof a)a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else{var e=a;a=new G(d,c);z(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=Dd(g,d,!0,a)&&e}g=a.b=c;e=Dd(g,d,!0,a)&&e;e=Dd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=Dd(g,d,!1,a)&&e;return e};
H.prototype.Da=function(){H.bb.Da.call(this);if(this.v){var a=this.v,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,gd(d[e]);delete a.a[c];a.b--}}this.hb=null};function qd(a,b,c,d,e){a.v.add(String(b),c,!1,d,e)}function wd(a,b,c,d,e){a.v.add(String(b),c,!0,d,e)}
function Dd(a,b,c,d){b=a.v.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.wa&&g.capture==c){var h=g.listener,m=g.Wa||g.src;g.Qa&&jd(a.v,g);e=!1!==h.call(m,d)&&e}}return e&&!d.defaultPrevented};function Ed(a,b,c){if(oa(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Fd(a){var b=null;return(new D(function(c,d){b=Ed(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).o(function(c){l.clearTimeout(b);throw c;})};function Gd(a){if(a.X&&"function"==typeof a.X)return a.X();if("string"===typeof a)return a.split("");if(na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Hd(a){if(a.Y&&"function"==typeof a.Y)return a.Y();if(!a.X||"function"!=typeof a.X){if(na(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Id(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(na(a)||"string"===typeof a)w(a,b,void 0);else for(var c=Hd(a),d=Gd(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Jd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Jd)for(c=a.Y(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}k=Jd.prototype;k.X=function(){Kd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.Y=function(){Kd(this);return this.a.concat()};
k.clear=function(){this.b={};this.c=this.a.length=0};function Kd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Ld(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Ld(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return Ld(this.b,a)?this.b[a]:b};k.set=function(a,b){Ld(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
k.forEach=function(a,b){for(var c=this.Y(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Ld(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Md=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Od(a,b){this.a=this.l=this.c="";this.g=null;this.h=this.f="";this.i=!1;var c;a instanceof Od?(this.i=void 0!==b?b:a.i,Pd(this,a.c),this.l=a.l,this.a=a.a,Qd(this,a.g),this.f=a.f,Rd(this,Sd(a.b)),this.h=a.h):a&&(c=String(a).match(Md))?(this.i=!!b,Pd(this,c[1]||"",!0),this.l=Td(c[2]||""),this.a=Td(c[3]||"",!0),Qd(this,c[4]),this.f=Td(c[5]||"",!0),Rd(this,c[6]||"",!0),this.h=Td(c[7]||"")):(this.i=!!b,this.b=new Ud(null,this.i))}
Od.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Vd(b,Wd,!0),":");var c=this.a;if(c||"file"==b)a.push("//"),(b=this.l)&&a.push(Vd(b,Wd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.g,null!=c&&a.push(":",String(c));if(c=this.f)this.a&&"/"!=c.charAt(0)&&a.push("/"),a.push(Vd(c,"/"==c.charAt(0)?Xd:Yd,!0));(c=this.b.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Vd(c,Zd));return a.join("")};
Od.prototype.resolve=function(a){var b=new Od(this),c=!!a.c;c?Pd(b,a.c):c=!!a.l;c?b.l=a.l:c=!!a.a;c?b.a=a.a:c=null!=a.g;var d=a.f;if(c)Qd(b,a.g);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.a&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(x(e,"./")||x(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.b.toString();c?Rd(b,Sd(a.b)):c=!!a.h;c&&(b.h=a.h);return b};function Pd(a,b,c){a.c=c?Td(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Qd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.g=b}else a.g=null}function Rd(a,b,c){b instanceof Ud?(a.b=b,$d(a.b,a.i)):(c||(b=Vd(b,ae)),a.b=new Ud(b,a.i))}function I(a,b,c){a.b.set(b,c)}function be(a,b){return a.b.get(b)}
function J(a){return a instanceof Od?new Od(a):new Od(a,void 0)}function ce(a,b,c,d){var e=new Od(null,void 0);a&&Pd(e,a);b&&(e.a=b);c&&Qd(e,c);d&&(e.f=d);return e}function Td(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vd(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,de),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function de(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Wd=/[#\/\?@]/g,Yd=/[#\?:]/g,Xd=/[#\?]/g,ae=/[#\?@]/g,Zd=/#/g;function Ud(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}function ee(a){a.a||(a.a=new Jd,a.b=0,a.c&&Nd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function fe(a){var b=Hd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ud(null,void 0);a=Gd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?ge(c,e,f):c.add(e,f)}return c}k=Ud.prototype;
k.add=function(a,b){ee(this);this.c=null;a=he(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function ie(a,b){ee(a);b=he(a,b);Ld(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Ld(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Kd(a)))}k.clear=function(){this.a=this.c=null;this.b=0};function je(a,b){ee(a);b=he(a,b);return Ld(a.a.b,b)}k.forEach=function(a,b){ee(this);this.a.forEach(function(c,d){w(c,function(e){a.call(b,e,d,this)},this)},this)};
k.Y=function(){ee(this);for(var a=this.a.X(),b=this.a.Y(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.X=function(a){ee(this);var b=[];if("string"===typeof a)je(this,a)&&(b=Ya(b,this.a.get(he(this,a))));else{a=this.a.X();for(var c=0;c<a.length;c++)b=Ya(b,a[c])}return b};k.set=function(a,b){ee(this);this.c=null;a=he(this,a);je(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
k.get=function(a,b){if(!a)return b;a=this.X(a);return 0<a.length?String(a[0]):b};function ge(a,b,c){ie(a,b);0<c.length&&(a.c=null,a.a.set(he(a,b),Za(c)),a.b+=c.length)}k.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.Y(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.X(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};
function Sd(a){var b=new Ud;b.c=a.c;a.a&&(b.a=new Jd(a.a),b.b=a.b);return b}function he(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function $d(a,b){b&&!a.f&&(ee(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(ie(this,d),ge(this,e,c))},a));a.f=b};function ke(a){var b=[];le(new me,a,b);return b.join("")}function me(){}
function le(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),le(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ne(d,c),c.push(":"),le(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ne(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var oe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function ne(a,b){b.push('"',a.replace(pe,function(c){var d=oe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),oe[c]=d);return d}),'"')};function qe(){var a=K();return Wb&&!!ic&&11==ic||/Edge\/\d+/.test(a)}function re(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function se(a,b){b=b||l.window;var c="about:blank";a&&(c=Eb(Ib(a)||Kb));b.location.href=c}function te(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<te(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function ue(){var a=K();a=ve(a)!=we?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Wb||!ic||9<ic}function xe(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ye(a){a=a||l.window;try{a.close()}catch(b){}}
function ze(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,x(c,"crios/")&&(b.target="_blank"));ve(K())==Ae&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof C?c:Ib("undefined"!=typeof c.href?c.href:String(c))||Kb;c=a.target||c.target;e=
[];for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0))}var g=e.join(",");if((y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c)g=oc(document,"A"),pb(g,"HTMLAnchorElement"),b=b instanceof C?b:Jb(b),g.href=Eb(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),
a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={};else if(a.noreferrer){if(g=Pb("",d,c,g),a=Eb(b),g&&(Yb&&x(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Rb(a)+'">',a=(d=vb())?d.createHTML(a):a,a=new Lb(a,null,Mb),d=g.document))d.write(Nb(a)),d.close()}else(g=Pb(b,d,c,g))&&a.noopener&&(g.opener=null);if(g)try{g.focus()}catch(h){}return g}
function Be(a){return new D(function(b){function c(){Fd(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var Ce=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,De=/^[^@]+@[^@]+$/;function Ee(){var a=null;return(new D(function(b){"complete"==l.document.readyState?b():(a=function(){b()},od(window,"load",a))})).o(function(b){xd(window,"load",a);throw b;})}
function Fe(){return Ge(void 0)?Ee().then(function(){return new D(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):F(Error("Cordova must run in an Android or iOS file scheme."))}function Ge(a){a=a||K();return!("file:"!==He()&&"ionic:"!==He()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ie(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function Je(){return"undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function Ke(){return _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.hasOwnProperty("node")?"Node":Je()?"Worker":"Browser"}function Le(){var a=Ke();return"ReactNative"===a||"Node"===a}function Me(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var Ae="Firefox",we="Chrome";
function ve(a){var b=a.toLowerCase();if(x(b,"opera/")||x(b,"opr/")||x(b,"opios/"))return"Opera";if(x(b,"iemobile"))return"IEMobile";if(x(b,"msie")||x(b,"trident/"))return"IE";if(x(b,"edge/"))return"Edge";if(x(b,"firefox/"))return Ae;if(x(b,"silk/"))return"Silk";if(x(b,"blackberry"))return"Blackberry";if(x(b,"webos"))return"Webos";if(!x(b,"safari/")||x(b,"chrome/")||x(b,"crios/")||x(b,"android"))if(!x(b,"chrome/")&&!x(b,"crios/")||x(b,"edge/")){if(x(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return we;else return"Safari";return"Other"}var Ne={md:"FirebaseCore-web",od:"FirebaseUI-web"};function Oe(a,b){b=b||[];var c=[],d={},e;for(e in Ne)d[Ne[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Ke();"Browser"===c?(d=K(),c=ve(d)):"Worker"===c&&(d=K(),c=ve(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function K(){return l.navigator&&l.navigator.userAgent||""}
function L(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Pe(){try{var a=l.localStorage,b=Qe();if(a)return a.setItem(b,"1"),a.removeItem(b),qe()?!!l.indexedDB:!0}catch(c){return Je()&&!!l.indexedDB}return!1}function Re(){return(Se()||"chrome-extension:"===He()||Ge())&&!Le()&&Pe()&&!Je()}function Se(){return"http:"===He()||"https:"===He()}function He(){return l.location&&l.location.protocol||null}
function Te(a){a=a||K();return xe(a)||ve(a)==Ae?!1:!0}function Ue(a){return"undefined"===typeof a?null:ke(a)}function Ve(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function We(a){if(null!==a)return JSON.parse(a)}function Qe(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Xe(a){a=a||K();return"Safari"==ve(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Ye(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Ze(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=K();b=Ke();this.b=xe(a)||"ReactNative"===b}
Ze.prototype.get=function(){var a=l.navigator;return(a&&"boolean"===typeof a.onLine&&(Se()||"chrome-extension:"===He()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function $e(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function af(){var a=l.document,b=null;return $e()||!a?E():(new D(function(c){b=function(){$e()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).o(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function bf(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function cf(){return!(!L("fireauth.oauthhelper",l)&&!L("fireauth.iframe",l))}
function df(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function ef(){var a=l.navigator;return a&&a.serviceWorker?E().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).o(function(){return null}):E(null)};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var ff={};function gf(a){ff[a]||(ff[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var hf;try{var jf={};Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:2});hf=2==jf.abcd}catch(a){hf=!1}function M(a,b,c){hf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function N(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c])}function kf(a){var b={};N(b,a);return b}function lf(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function mf(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function nf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)M(b,c,nf(a[c]))}return b};/*

 Copyright 2019 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function of(a){var b=a&&(a[pf]?"phone":null);if(b&&a&&a[qf]){M(this,"uid",a[qf]);M(this,"displayName",a[rf]||null);var c=null;a[sf]&&(c=(new Date(a[sf])).toUTCString());M(this,"enrollmentTime",c);M(this,"factorId",b)}else throw new t("internal-error","Internal assert: invalid MultiFactorInfo object");}of.prototype.w=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};function tf(a){try{var b=new uf(a)}catch(c){b=null}return b}
var rf="displayName",sf="enrolledAt",qf="mfaEnrollmentId",pf="phoneInfo";function uf(a){of.call(this,a);M(this,"phoneNumber",a[pf])}r(uf,of);uf.prototype.w=function(){var a=uf.bb.w.call(this);a.phoneNumber=this.phoneNumber;return a};function vf(a){var b={},c=a[wf],d=a[xf],e=a[yf];a=tf(a[zf]);if(!e||e!=Af&&e!=Bf&&!c||e==Bf&&!d||e==Cf&&!a)throw Error("Invalid checkActionCode response!");e==Bf?(b[Df]=c||null,b[Ef]=c||null,b[Ff]=d):(b[Df]=d||null,b[Ef]=d||null,b[Ff]=c||null);b[Gf]=a||null;M(this,Hf,e);M(this,If,nf(b))}
var Cf="REVERT_SECOND_FACTOR_ADDITION",Af="EMAIL_SIGNIN",Bf="VERIFY_AND_CHANGE_EMAIL",wf="email",zf="mfaInfo",xf="newEmail",yf="requestType",Ff="email",Df="fromEmail",Gf="multiFactorInfo",Ef="previousEmail",If="data",Hf="operation";function Jf(a){a=J(a);var b=be(a,Kf)||null,c=be(a,Lf)||null,d=be(a,Mf)||null;d=d?Nf[d]||null:null;if(!b||!c||!d)throw new t("argument-error",Kf+", "+Lf+"and "+Mf+" are required in a valid action code URL.");N(this,{apiKey:b,operation:d,code:c,continueUrl:be(a,Of)||null,languageCode:be(a,Pf)||null,tenantId:be(a,Qf)||null})}
var Kf="apiKey",Lf="oobCode",Of="continueUrl",Pf="languageCode",Mf="mode",Qf="tenantId",Nf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:Cf,signIn:Af,verifyAndChangeEmail:Bf,verifyEmail:"VERIFY_EMAIL"};function Rf(a){try{return new Jf(a)}catch(b){return null}};function Sf(a){var b=a[Tf];if("undefined"===typeof b)throw new t("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new t("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Uf];if(c&&"object"===typeof c){b=c[Vf];var d=c[Wf];c=c[Xf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new t("argument-error",Wf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new t("argument-error",Xf+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new t("argument-error",Vf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new t("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new t("argument-error",Uf+" property must be a non null object when specified.");this.f=null;if((b=a[Yf])&&"object"===
typeof b)if(b=b[Zf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new t("argument-error",Zf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new t("argument-error",Yf+" property must be a non null object when specified.");b=a[$f];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new t("argument-error",$f+" property must be a boolean when specified.");this.c=!!b;a=a[ag];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new t("argument-error",ag+" property must be a non empty string when specified.");this.i=a||null}var Uf="android",ag="dynamicLinkDomain",$f="handleCodeInApp",Yf="iOS",Tf="url",Wf="installApp",Xf="minimumVersion",Vf="packageName",Zf="bundleId";
function bg(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function cg(a){return Ra(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};var dg=null;function eg(a){var b=[];fg(a,function(c){b.push(c)});return b}function fg(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),v=dg[p];if(null!=v)return v;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}gg();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function gg(){if(!dg){dg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++)for(var d=a.concat(b[c].split("")),e=0;e<d.length;e++){var f=d[e];void 0===dg[f]&&(dg[f]=e)}}};function hg(a){var b=ig(a);if(!(b&&b.sub&&b.iss&&b.aud&&b.exp))throw Error("Invalid JWT");this.h=a;this.a=b.exp;this.i=b.sub;a=Date.now()/1E3;this.g=b.iat||(a>this.a?this.a:a);this.b=b.provider_id||b.firebase&&b.firebase.sign_in_provider||null;this.f=b.firebase&&b.firebase.tenant||null;this.c=!!b.is_anonymous||"anonymous"==this.b}hg.prototype.T=function(){return this.f};hg.prototype.l=function(){return this.c};hg.prototype.toString=function(){return this.h};
function jg(a){try{return new hg(a)}catch(b){return null}}
function ig(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{var d=eg(a);a=[];for(c=b=0;b<d.length;){var e=d[b++];if(128>e)a[c++]=String.fromCharCode(e);else if(191<e&&224>e){var f=d[b++];a[c++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=d[b++];var g=d[b++],h=d[b++],m=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;a[c++]=String.fromCharCode(55296+(m>>10));a[c++]=String.fromCharCode(56320+(m&1023))}else f=d[b++],g=
d[b++],a[c++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return JSON.parse(a.join(""))}catch(p){}return null};var kg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),lg=["client_id","response_type","scope","redirect_uri","state"],mg={nd:{Ja:"locale",va:700,ua:600,fa:"facebook.com",Ya:lg},pd:{Ja:null,va:500,ua:750,fa:"github.com",Ya:lg},qd:{Ja:"hl",va:515,ua:680,fa:"google.com",Ya:lg},wd:{Ja:"lang",va:485,ua:705,fa:"twitter.com",Ya:kg},kd:{Ja:"locale",va:640,ua:600,fa:"apple.com",Ya:[]}};
function ng(a){for(var b in mg)if(mg[b].fa==a)return mg[b];return null};function og(a){var b={};b["facebook.com"]=pg;b["google.com"]=qg;b["github.com"]=rg;b["twitter.com"]=sg;var c=a&&a[tg];try{if(c)return b[c]?new b[c](a):new ug(a);if("undefined"!==typeof a[vg])return new wg(a)}catch(d){}return null}var vg="idToken",tg="providerId";
function wg(a){var b=a[tg];if(!b&&a[vg]){var c=jg(a[vg]);c&&c.b&&(b=c.b)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);M(this,"providerId",b);M(this,"isNewUser",c)}function ug(a){wg.call(this,a);a=We(a.rawUserInfo||"{}");M(this,"profile",nf(a||{}))}r(ug,wg);
function pg(a){ug.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}r(pg,ug);function rg(a){ug.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",this.profile&&this.profile.login||null)}r(rg,ug);function qg(a){ug.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}r(qg,ug);
function sg(a){ug.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",a.screenName||null)}r(sg,ug);function xg(a){var b=J(a),c=be(b,"link"),d=be(J(c),"link");b=be(b,"deep_link_id");return be(J(b),"link")||b||d||c||a};function yg(a,b){if(!a&&!b)throw new t("internal-error","Internal assert: no raw session string available");if(a&&b)throw new t("internal-error","Internal assert: unable to determine the session type");this.a=a||null;this.b=b||null;this.type=this.a?zg:Ag}var zg="enroll",Ag="signin";yg.prototype.Ha=function(){return this.a?E(this.a):E(this.b)};yg.prototype.w=function(){return this.type==zg?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}};function Bg(){}Bg.prototype.ka=function(){};Bg.prototype.b=function(){};Bg.prototype.c=function(){};Bg.prototype.w=function(){};function Cg(a,b){return a.then(function(c){if(c[Dg]){var d=jg(c[Dg]);if(!d||b!=d.i)throw new t("user-mismatch");return c}throw new t("user-mismatch");}).o(function(c){throw c&&c.code&&c.code==xa+"user-not-found"?new t("user-mismatch"):c;})}
function Eg(a,b){if(b)this.a=b;else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",a)}Eg.prototype.ka=function(a){return Fg(a,Gg(this))};Eg.prototype.b=function(a,b){var c=Gg(this);c.idToken=b;return Hg(a,c)};Eg.prototype.c=function(a,b){return Cg(Ig(a,Gg(this)),b)};function Gg(a){return{pendingToken:a.a,requestUri:"http://localhost"}}Eg.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};
function Jg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new Eg(a.providerId,a.pendingToken)}catch(b){}return null}
function Kg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&M(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",c)}
Kg.prototype.ka=function(a){return Fg(a,Lg(this))};Kg.prototype.b=function(a,b){var c=Lg(this);c.idToken=b;return Hg(a,c)};Kg.prototype.c=function(a,b){var c=Lg(this);return Cg(Ig(a,c),b)};
function Lg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:fe(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
Kg.prototype.w=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function Mg(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new Kg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function Ng(a,b){this.Qc=b||[];N(this,{providerId:a,isOAuthProvider:!0});this.Jb={};this.qb=(ng(a)||{}).Ja||null;this.pb=null}
Ng.prototype.Ka=function(a){this.Jb=nb(a);return this};function Og(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new t("argument-error",'SAML provider IDs must be prefixed with "saml."');Ng.call(this,a,[])}r(Og,Ng);function Pg(a){Ng.call(this,a,lg);this.a=[]}r(Pg,Ng);Pg.prototype.Ca=function(a){Va(this.a,a)||this.a.push(a);return this};Pg.prototype.Rb=function(){return Za(this.a)};
Pg.prototype.credential=function(a,b){var c;n(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new t("argument-error","credential failed: must provide the ID token and/or the access token.");return new Kg(this.providerId,c,this.providerId)};function Qg(){Pg.call(this,"facebook.com")}r(Qg,Pg);M(Qg,"PROVIDER_ID","facebook.com");M(Qg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Rg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return(new Qg).credential({accessToken:b})}function Sg(){Pg.call(this,"github.com")}r(Sg,Pg);M(Sg,"PROVIDER_ID","github.com");M(Sg,"GITHUB_SIGN_IN_METHOD","github.com");
function Tg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return(new Sg).credential({accessToken:b})}function Ug(){Pg.call(this,"google.com");this.Ca("profile")}r(Ug,Pg);M(Ug,"PROVIDER_ID","google.com");M(Ug,"GOOGLE_SIGN_IN_METHOD","google.com");function Vg(a,b){var c=a;n(a)&&(c=a.idToken,b=a.accessToken);return(new Ug).credential({idToken:c,accessToken:b})}function Wg(){Ng.call(this,"twitter.com",kg)}
r(Wg,Ng);M(Wg,"PROVIDER_ID","twitter.com");M(Wg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Xg(a,b){var c=a;n(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new t("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Kg("twitter.com",c,"twitter.com")}
function Yg(a,b,c){this.a=a;this.f=b;M(this,"providerId","password");M(this,"signInMethod",c===Zg.EMAIL_LINK_SIGN_IN_METHOD?Zg.EMAIL_LINK_SIGN_IN_METHOD:Zg.EMAIL_PASSWORD_SIGN_IN_METHOD)}Yg.prototype.ka=function(a){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,$g,{email:this.a,oobCode:this.f}):O(a,ah,{email:this.a,password:this.f})};
Yg.prototype.b=function(a,b){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,bh,{idToken:b,email:this.a,oobCode:this.f}):O(a,ch,{idToken:b,email:this.a,password:this.f})};Yg.prototype.c=function(a,b){return Cg(this.ka(a),b)};Yg.prototype.w=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}};function dh(a){return a&&a.email&&a.password?new Yg(a.email,a.password,a.signInMethod):null}function Zg(){N(this,{providerId:"password",isOAuthProvider:!1})}
function eh(a,b){b=fh(b);if(!b)throw new t("argument-error","Invalid email link!");return new Yg(a,b.code,Zg.EMAIL_LINK_SIGN_IN_METHOD)}function fh(a){a=xg(a);return(a=Rf(a))&&a.operation===Af?a:null}N(Zg,{PROVIDER_ID:"password"});N(Zg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});N(Zg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function gh(a){if(!(a.fb&&a.eb||a.La&&a.ea))throw new t("internal-error");this.a=a;M(this,"providerId","phone");this.fa="phone";M(this,"signInMethod","phone")}
gh.prototype.ka=function(a){return a.gb(hh(this))};gh.prototype.b=function(a,b){var c=hh(this);c.idToken=b;return O(a,ih,c)};gh.prototype.c=function(a,b){var c=hh(this);c.operation="REAUTH";a=O(a,jh,c);return Cg(a,b)};gh.prototype.w=function(){var a={providerId:"phone"};this.a.fb&&(a.verificationId=this.a.fb);this.a.eb&&(a.verificationCode=this.a.eb);this.a.La&&(a.temporaryProof=this.a.La);this.a.ea&&(a.phoneNumber=this.a.ea);return a};
function kh(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};w(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c])});return new gh(b)}return null}function hh(a){return a.a.La&&a.a.ea?{temporaryProof:a.a.La,phoneNumber:a.a.ea}:{sessionInfo:a.a.fb,code:a.a.eb}}
function lh(a){try{this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth()}catch(b){throw new t("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}N(this,{providerId:"phone",isOAuthProvider:!1})}
lh.prototype.gb=function(a,b){var c=this.a.a;return E(b.verify()).then(function(d){if("string"!==typeof d)throw new t("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":var e=n(a)?a.session:null,f=n(a)?a.phoneNumber:a,g;e&&e.type==zg?g=e.Ha().then(function(h){return mh(c,{idToken:h,phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:d}})}):e&&e.type==Ag?g=e.Ha().then(function(h){return nh(c,
{mfaPendingCredential:h,mfaEnrollmentId:a.multiFactorHint&&a.multiFactorHint.uid||a.multiFactorUid,phoneSignInInfo:{recaptchaToken:d}})}):g=oh(c,{phoneNumber:f,recaptchaToken:d});return g.then(function(h){"function"===typeof b.reset&&b.reset();return h},function(h){"function"===typeof b.reset&&b.reset();throw h;});default:throw new t("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
function ph(a,b){if(!a)throw new t("missing-verification-id");if(!b)throw new t("missing-verification-code");return new gh({fb:a,eb:b})}N(lh,{PROVIDER_ID:"phone"});N(lh,{PHONE_SIGN_IN_METHOD:"phone"});
function qh(a){if(a.temporaryProof&&a.phoneNumber)return new gh({La:a.temporaryProof,ea:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Vg(f,c);case "facebook.com":return Rg(c);case "github.com":return Tg(c);case "twitter.com":return Xg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new Eg(b,g):new Kg(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new Pg(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function rh(a){if(!a.isOAuthProvider)throw new t("invalid-oauth-provider");};function sh(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new t("invalid-auth-event");if(this.g&&!this.f)throw new t("invalid-auth-event");}else throw new t("invalid-auth-event");}sh.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};sh.prototype.T=function(){return this.h};
sh.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}};function th(a){a=a||{};return a.type?new sh(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Aa(a.error),a.postBody,a.tenantId):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function uh(){this.b=null;this.a=[]}var vh=null;function wh(a){var b=vh;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c)},a=L("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b))};function xh(a){var b="unauthorized-domain",c=void 0,d=J(a);a=d.a;d=d.c;"chrome-extension"==d?c=Qb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Qb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
t.call(this,b,c)}r(xh,t);function yh(a,b,c){t.call(this,a,c);a=b||{};a.Kb&&M(this,"email",a.Kb);a.ea&&M(this,"phoneNumber",a.ea);a.credential&&M(this,"credential",a.credential);a.$b&&M(this,"tenantId",a.$b)}r(yh,t);yh.prototype.w=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.w();b&&z(a,b);return a};yh.prototype.toJSON=function(){return this.w()};
function zh(a){if(a.code){var b=a.code||"";0==b.indexOf(xa)&&(b=b.substring(xa.length));var c={credential:qh(a),$b:a.tenantId};if(a.email)c.Kb=a.email;else if(a.phoneNumber)c.ea=a.phoneNumber;else if(!c.credential)return new t(b,a.message||void 0);return new yh(b,c,a.message)}return null};function Ah(){}Ah.prototype.c=null;function Bh(a){return a.c||(a.c=a.b())};var Ch;function Dh(){}r(Dh,Ah);Dh.prototype.a=function(){var a=Eh(this);return a?new ActiveXObject(a):new XMLHttpRequest};Dh.prototype.b=function(){var a={};Eh(this)&&(a[0]=!0,a[1]=!0);return a};
function Eh(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Ch=new Dh;function Fh(){}r(Fh,Ah);Fh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Gh;throw Error("Unsupported browser");};Fh.prototype.b=function(){return{}};
function Gh(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=q(this.qc,this);this.a.onerror=q(this.Tb,this);this.a.onprogress=q(this.rc,this);this.a.ontimeout=q(this.vc,this)}k=Gh.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};k.abort=function(){this.a.abort()};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};k.qc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Hh(this,4)};k.Tb=function(){this.status=500;this.response=this.responseText="";Hh(this,4)};k.vc=function(){this.Tb()};
k.rc=function(){this.status=200;Hh(this,1)};function Hh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}k.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Ih(a,b,c){this.reset(a,b,c,void 0,void 0)}Ih.prototype.a=null;var Jh=0;Ih.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Jh++;d||va();delete this.a};function Kh(a){this.f=a;this.b=this.c=this.a=null}function Lh(a,b){this.name=a;this.value=b}Lh.prototype.toString=function(){return this.name};var Mh=new Lh("SEVERE",1E3),Nh=new Lh("WARNING",900),Oh=new Lh("CONFIG",700),Ph=new Lh("FINE",500);function Qh(a){if(a.c)return a.c;if(a.a)return Qh(a.a);Ga("Root logger has no level set.");return null}Kh.prototype.log=function(a,b,c){if(a.value>=Qh(this).value)for(oa(b)&&(b=b()),a=new Ih(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Rh={},Sh=null;
function Th(a){Sh||(Sh=new Kh(""),Rh[""]=Sh,Sh.c=Oh);var b;if(!(b=Rh[a])){b=new Kh(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Th(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Rh[a]=b}return b};function Uh(a,b){a&&a.log(Ph,b,void 0)};function Vh(a){this.f=a}r(Vh,Ah);Vh.prototype.a=function(){return new Wh(this.f)};Vh.prototype.b=function(a){return function(){return a}}({});function Wh(a){H.call(this);this.u=a;this.h=void 0;this.readyState=Xh;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.l=new Headers;this.b=null;this.s="GET";this.f="";this.a=!1;this.i=Th("goog.net.FetchXmlHttp");this.m=this.c=this.g=null}r(Wh,H);var Xh=0;k=Wh.prototype;
k.open=function(a,b){if(this.readyState!=Xh)throw this.abort(),Error("Error reopening a connection");this.s=a;this.f=b;this.readyState=1;Yh(this)};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.l,method:this.s,credentials:this.h,cache:void 0};a&&(b.body=a);this.u.fetch(new Request(this.f,b)).then(this.uc.bind(this),this.Va.bind(this))};
k.abort=function(){this.response=this.responseText="";this.l=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Zh(this));this.readyState=Xh};
k.uc=function(a){this.a&&(this.g=a,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=a.headers,this.readyState=2,Yh(this)),this.a&&(this.readyState=3,Yh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.sc.bind(this),this.Va.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.m=new TextDecoder,$h(this)):a.text().then(this.tc.bind(this),this.Va.bind(this)))))};
function $h(a){a.c.read().then(a.pc.bind(a)).catch(a.Va.bind(a))}k.pc=function(a){if(this.a){var b=this.m.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Zh(this):Yh(this);3==this.readyState&&$h(this)}};k.tc=function(a){this.a&&(this.response=this.responseText=a,Zh(this))};k.sc=function(a){this.a&&(this.response=a,Zh(this))};k.Va=function(a){var b=this.i;b&&b.log(Nh,"Failed to fetch url "+this.f,a instanceof Error?a:Error(a));this.a&&Zh(this)};
function Zh(a){a.readyState=4;a.g=null;a.c=null;a.m=null;Yh(a)}k.setRequestHeader=function(a,b){this.l.append(a,b)};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.i)&&a.log(Nh,"Attempting to get response header but no headers have been received for url: "+this.f,void 0),"")};
k.getAllResponseHeaders=function(){if(!this.b){var a=this.i;a&&a.log(Nh,"Attempting to get all response headers but no headers have been received for url: "+this.f,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Yh(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return"include"===this.h},set:function(a){this.h=a?"include":"same-origin"}});function ai(a){H.call(this);this.headers=new Jd;this.D=a||null;this.c=!1;this.C=this.a=null;this.h=this.P=this.l="";this.f=this.N=this.i=this.J=!1;this.g=0;this.s=null;this.m=bi;this.u=this.S=!1}r(ai,H);var bi="";ai.prototype.b=Th("goog.net.XhrIo");var ci=/^https?$/i,di=["POST","PUT"];
function ei(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.P=c;a.J=!1;a.c=!0;a.a=a.D?a.D.a():Ch.a();a.C=a.D?Bh(a.D):Bh(Ch);a.a.onreadystatechange=q(a.Wb,a);try{Uh(a.b,fi(a,"Opening Xhr")),a.N=!0,a.a.open(c,String(b),!0),a.N=!1}catch(g){Uh(a.b,fi(a,"Error opening Xhr: "+g.message));gi(a,g);return}b=d||"";var f=new Jd(a.headers);e&&Id(e,function(g,h){f.set(h,g)});e=Ta(f.Y());d=l.FormData&&b instanceof
l.FormData;!Va(di,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.S&&(a.a.withCredentials=a.S);try{hi(a),0<a.g&&(a.u=ii(a.a),Uh(a.b,fi(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.u)),a.u?(a.a.timeout=a.g,a.a.ontimeout=q(a.Ma,a)):a.s=Ed(a.Ma,a.g,a)),Uh(a.b,fi(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(g){Uh(a.b,
fi(a,"Send error: "+g.message)),gi(a,g)}}function ii(a){return Wb&&fc(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Ua(a){return"content-type"==a.toLowerCase()}k=ai.prototype;k.Ma=function(){"undefined"!=typeof ha&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Uh(this.b,fi(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function gi(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;ji(a);ki(a)}
function ji(a){a.J||(a.J=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}k.abort=function(){this.a&&this.c&&(Uh(this.b,fi(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ki(this))};k.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ki(this,!0));ai.bb.Da.call(this)};k.Wb=function(){this.ya||(this.N||this.i||this.f?li(this):this.Jc())};k.Jc=function(){li(this)};
function li(a){if(a.c&&"undefined"!=typeof ha)if(a.C[1]&&4==mi(a)&&2==ni(a))Uh(a.b,fi(a,"Local request error detected and ignored"));else if(a.i&&4==mi(a))Ed(a.Wb,0,a);else if(a.dispatchEvent("readystatechange"),4==mi(a)){Uh(a.b,fi(a,"Request complete"));a.c=!1;try{var b=ni(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Md)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1)}e=!ci.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var h=2<mi(a)?a.a.statusText:""}catch(m){Uh(a.b,"Can not get status: "+m.message),h=""}a.h=h+" ["+ni(a)+"]";ji(a)}}finally{ki(a)}}}function ki(a,b){if(a.a){hi(a);var c=a.a,d=a.C[0]?la:null;a.a=null;a.C=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Mh,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function hi(a){a.a&&a.u&&(a.a.ontimeout=null);a.s&&(l.clearTimeout(a.s),a.s=null)}function mi(a){return a.a?a.a.readyState:0}function ni(a){try{return 2<mi(a)?a.a.status:-1}catch(b){return-1}}function oi(a){try{return a.a?a.a.responseText:""}catch(b){return Uh(a.b,"Can not get responseText: "+b.message),""}}
k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case bi:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Mh,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Uh(this.b,"Can not get response: "+b.message),null}};function fi(a,b){return b+" ["+a.P+" "+a.l+" "+ni(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function pi(a){var b=qi;this.g=[];this.u=b;this.s=a||null;this.f=this.a=!1;this.c=void 0;this.v=this.C=this.i=!1;this.h=0;this.b=null;this.l=0}pi.prototype.cancel=function(a){if(this.a)this.c instanceof pi&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.u?this.u.call(this.s,this):this.v=!0;this.a||(a=new ri(this),si(this),ti(this,!1,a))}};pi.prototype.m=function(a,b){this.i=!1;ti(this,a,b)};function ti(a,b,c){a.a=!0;a.c=c;a.f=!b;ui(a)}
function si(a){if(a.a){if(!a.v)throw new vi(a);a.v=!1}}function wi(a,b){xi(a,null,b,void 0)}function xi(a,b,c,d){a.g.push([b,c,d]);a.a&&ui(a)}pi.prototype.then=function(a,b,c){var d,e,f=new D(function(g,h){d=g;e=h});xi(this,d,function(g){g instanceof ri?f.cancel():e(g)});return f.then(a,b,c)};pi.prototype.$goog_Thenable=!0;function yi(a){return Sa(a.g,function(b){return oa(b[1])})}
function ui(a){if(a.h&&a.a&&yi(a)){var b=a.h,c=zi[b];c&&(l.clearTimeout(c.a),delete zi[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(Ea(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,yi(a)||(c=!0)}}a.c=b;d&&(h=q(a.m,a,!0),d=q(a.m,a,!1),b instanceof pi?(xi(b,h,d),b.C=!0):b.then(h,d));c&&(b=
new Ai(b),zi[b.a]=b,a.h=b.a)}function vi(){u.call(this)}r(vi,u);vi.prototype.message="Deferred has already fired";vi.prototype.name="AlreadyCalledError";function ri(){u.call(this)}r(ri,u);ri.prototype.message="Deferred was canceled";ri.prototype.name="CanceledError";function Ai(a){this.a=l.setTimeout(q(this.c,this),0);this.b=a}Ai.prototype.c=function(){delete zi[this.a];throw this.b;};var zi={};function Bi(a){var b={},c=b.document||document,d=yb(a).toString(),e=oc(document,"SCRIPT"),f={Xb:e,Ma:void 0},g=new pi(f),h=null,m=null!=b.timeout?b.timeout:5E3;0<m&&(h=window.setTimeout(function(){Ci(e,!0);var p=new Di(Ei,"Timeout reached for loading script "+d);si(g);ti(g,!1,p)},m),f.Ma=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ci(e,b.xd||!1,h),si(g),ti(g,!0,null))};e.onerror=function(){Ci(e,!0,h);var p=new Di(Fi,"Error while loading script "+
d);si(g);ti(g,!1,p)};f=b.attributes||{};z(f,{type:"text/javascript",charset:"UTF-8"});lc(e,f);Ob(e,a);Gi(c).appendChild(e);return g}function Gi(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function qi(){if(this&&this.Xb){var a=this.Xb;a&&"SCRIPT"==a.tagName&&Ci(a,!0,this.Ma)}}
function Ci(a,b,c){null!=c&&l.clearTimeout(c);a.onload=la;a.onerror=la;a.onreadystatechange=la;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var Fi=0,Ei=1;function Di(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}r(Di,u);function Hi(a){this.f=a}r(Hi,Ah);Hi.prototype.a=function(){return new this.f};Hi.prototype.b=function(){return{}};
function Ii(a,b,c){this.c=a;a=b||{};this.l=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Ji;this.g=nb(a.secureTokenHeaders||Ki);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.i=a.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/";this.v=a.firebaseTimeout||Li;this.a=nb(a.firebaseHeaders||Mi);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==Ke();c=l.XMLHttpRequest||
c&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node.XMLHttpRequest;if(!c&&!Je())throw new t("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;Je()?this.f=new Vh(self):Le()?this.f=new Hi(c):this.f=new Fh;this.b=null}var Ni,Dg="idToken",Ji=new Ze(3E4,6E4),Ki={"Content-Type":"application/x-www-form-urlencoded"},Li=new Ze(3E4,6E4),Mi={"Content-Type":"application/json"};function Oi(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Pi(a,b){b&&(a.l=Qi("https://securetoken.googleapis.com/v1/token",b),a.h=Qi("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",b),a.i=Qi("https://identitytoolkit.googleapis.com/v2/",b))}function Qi(a,b){a=J(a);b=J(b.url);a.f=a.a+a.f;Pd(a,b.c);a.a=b.a;Qd(a,b.g);return a.toString()}function Ri(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"])}Ii.prototype.T=function(){return this.b};
function Si(a,b,c,d,e,f,g){ue()||Je()?a=q(a.u,a):(Ni||(Ni=new D(function(h,m){Ti(h,m)})),a=q(a.s,a));a(b,c,d,e,f,g)}
Ii.prototype.u=function(a,b,c,d,e,f){if(Je()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new t("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new ai(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout")},f)}qd(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
JSON.parse(oi(this))||null}catch(p){m=null}b&&b(m)});wd(g,"ready",function(){h&&clearTimeout(h);Xc(this)});wd(g,"timeout",function(){h&&clearTimeout(h);Xc(this);b&&b(null)});ei(g,a,c,d,e)};var Ui=new qb(rb,"https://apis.google.com/js/client.js?onload=%{onload}"),Vi="__fcb"+Math.floor(1E6*Math.random()).toString();
function Ti(a,b){if(((window.gapi||{}).client||{}).request)a();else{l[Vi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=zb(Ui,{onload:Vi});wi(Bi(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Ii.prototype.s=function(a,b,c,d,e){var f=this;Ni.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h)}})}).o(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}})})};
function Wi(a,b){return new D(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Si(a,a.l+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Xi(e)):e.access_token&&e.refresh_token?c(e):d(new t("internal-error")):d(new t("network-request-failed"))},"POST",fe(b).toString(),a.g,a.m.get()):d(new t("internal-error"))})}
function Yi(a,b,c,d,e,f,g){var h=J(b+c);I(h,"key",a.c);g&&I(h,"cb",Date.now().toString());var m="GET"==d;if(m)for(var p in e)e.hasOwnProperty(p)&&I(h,p,e[p]);return new D(function(v,B){Si(a,h.toString(),function(A){A?A.error?B(Xi(A,f||{})):v(A):B(new t("network-request-failed"))},d,m?void 0:ke(Ve(e)),a.a,a.v.get())})}function Zi(a){a=a.email;if("string"!==typeof a||!De.test(a))throw new t("invalid-email");}function $i(a){"email"in a&&Zi(a)}
function aj(a,b){return O(a,bj,{identifier:b,continueUri:Se()?re():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function cj(a){return O(a,dj,{}).then(function(b){return b.authorizedDomains||[]})}function P(a){if(!a[Dg]){if(a.mfaPendingCredential)throw new t("multi-factor-auth-required",null,nb(a));throw new t("internal-error");}}
function ej(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new t("internal-error");}else{if(!a.sessionInfo)throw new t("missing-verification-id");if(!a.code)throw new t("missing-verification-code");}}Ii.prototype.Ab=function(){return O(this,fj,{})};Ii.prototype.Cb=function(a,b){return O(this,gj,{idToken:a,email:b})};Ii.prototype.Db=function(a,b){return O(this,ch,{idToken:a,password:b})};var hj={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=Ii.prototype;
k.Eb=function(a,b){var c={idToken:a},d=[];lb(hj,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return O(this,gj,c)};k.wb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};z(a,b);return O(this,ij,a)};k.xb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};z(a,b);return O(this,jj,a)};k.vb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};z(a,b);return O(this,kj,a)};
k.Fb=function(a,b,c){a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:b};z(a,c);return O(this,lj,a)};function oh(a,b){return O(a,mj,b)}k.gb=function(a){return O(this,nj,a)};function mh(a,b){return O(a,oj,b).then(function(c){return c.phoneSessionInfo.sessionInfo})}
function pj(a){if(!a.phoneVerificationInfo)throw new t("internal-error");if(!a.phoneVerificationInfo.sessionInfo)throw new t("missing-verification-id");if(!a.phoneVerificationInfo.code)throw new t("missing-verification-code");}function nh(a,b){return O(a,qj,b).then(function(c){return c.phoneResponseInfo.sessionInfo})}function rj(a,b,c){return O(a,sj,{idToken:b,deleteProvider:c})}function tj(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new t("internal-error");}
function uj(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Ud(a.postBody),je(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function vj(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=zh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=zh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=zh(a)):a.errorMessage&&(b=wj(a.errorMessage));if(b)throw b;P(a)}function Fg(a,b){b.returnIdpCredential=!0;return O(a,xj,b)}function Hg(a,b){b.returnIdpCredential=!0;return O(a,yj,b)}
function Ig(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return O(a,zj,b)}function Aj(a){if(!a.oobCode)throw new t("invalid-action-code");}k.ob=function(a,b){return O(this,Bj,{oobCode:a,newPassword:b})};k.Sa=function(a){return O(this,Cj,{oobCode:a})};k.kb=function(a){return O(this,Dj,{oobCode:a})};
var Dj={endpoint:"setAccountInfo",A:Aj,Z:"email",B:!0},Cj={endpoint:"resetPassword",A:Aj,G:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b&&"VERIFY_AND_CHANGE_EMAIL"!=b)throw new t("internal-error");},B:!0},Ej={endpoint:"signupNewUser",A:function(a){Zi(a);if(!a.password)throw new t("weak-password");},G:P,V:!0,B:!0},bj={endpoint:"createAuthUri",B:!0},Fj={endpoint:"deleteAccount",O:["idToken"]},sj={endpoint:"setAccountInfo",O:["idToken","deleteProvider"],A:function(a){if(!Array.isArray(a.deleteProvider))throw new t("internal-error");
}},$g={endpoint:"emailLinkSignin",O:["email","oobCode"],A:Zi,G:P,V:!0,B:!0},bh={endpoint:"emailLinkSignin",O:["idToken","email","oobCode"],A:Zi,G:P,V:!0},Gj={endpoint:"accounts/mfaEnrollment:finalize",O:["idToken","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Hj={endpoint:"accounts/mfaSignIn:finalize",O:["mfaPendingCredential","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Ij={endpoint:"getAccountInfo"},jj={endpoint:"getOobConfirmationCode",O:["requestType"],A:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new t("internal-error");
Zi(a)},Z:"email",B:!0},kj={endpoint:"getOobConfirmationCode",O:["idToken","requestType"],A:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},lj={endpoint:"getOobConfirmationCode",O:["idToken","newEmail","requestType"],A:function(a){if("VERIFY_AND_CHANGE_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},ij={endpoint:"getOobConfirmationCode",O:["requestType"],A:function(a){if("PASSWORD_RESET"!=a.requestType)throw new t("internal-error");
Zi(a)},Z:"email",B:!0},dj={mb:!0,endpoint:"getProjectConfig",Vb:"GET"},Jj={mb:!0,endpoint:"getRecaptchaParam",Vb:"GET",G:function(a){if(!a.recaptchaSiteKey)throw new t("internal-error");}},Bj={endpoint:"resetPassword",A:Aj,Z:"email",B:!0},mj={endpoint:"sendVerificationCode",O:["phoneNumber","recaptchaToken"],Z:"sessionInfo",B:!0},gj={endpoint:"setAccountInfo",O:["idToken"],A:$i,V:!0},ch={endpoint:"setAccountInfo",O:["idToken"],A:function(a){$i(a);if(!a.password)throw new t("weak-password");},G:P,
V:!0},fj={endpoint:"signupNewUser",G:P,V:!0,B:!0},oj={endpoint:"accounts/mfaEnrollment:start",O:["idToken","phoneEnrollmentInfo"],A:function(a){if(!a.phoneEnrollmentInfo)throw new t("internal-error");if(!a.phoneEnrollmentInfo.phoneNumber)throw new t("missing-phone-number");if(!a.phoneEnrollmentInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneSessionInfo||!a.phoneSessionInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},qj={endpoint:"accounts/mfaSignIn:start",
O:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(a){if(!a.phoneSignInInfo||!a.phoneSignInInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneResponseInfo||!a.phoneResponseInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},xj={endpoint:"verifyAssertion",A:tj,Za:uj,G:vj,V:!0,B:!0},zj={endpoint:"verifyAssertion",A:tj,Za:uj,G:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new t("user-not-found");if(a.errorMessage)throw wj(a.errorMessage);
P(a)},V:!0,B:!0},yj={endpoint:"verifyAssertion",A:function(a){tj(a);if(!a.idToken)throw new t("internal-error");},Za:uj,G:vj,V:!0},Kj={endpoint:"verifyCustomToken",A:function(a){if(!a.token)throw new t("invalid-custom-token");},G:P,V:!0,B:!0},ah={endpoint:"verifyPassword",A:function(a){Zi(a);if(!a.password)throw new t("wrong-password");},G:P,V:!0,B:!0},nj={endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},ih={endpoint:"verifyPhoneNumber",A:function(a){if(!a.idToken)throw new t("internal-error");ej(a)},
G:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",zh(a);P(a)}},jh={Ib:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},Lj={endpoint:"accounts/mfaEnrollment:withdraw",O:["idToken","mfaEnrollmentId"],G:function(a){if(!!a[Dg]^!!a.refreshToken)throw new t("internal-error");},B:!0,Na:!0};
function O(a,b,c){if(!mf(c,b.O))return F(new t("internal-error"));var d=!!b.Na,e=b.Vb||"POST",f;return E(c).then(b.A).then(function(){b.V&&(c.returnSecureToken=!0);b.B&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return d?Yi(a,a.i,b.endpoint,e,c,b.Ib,b.mb||!1):Yi(a,a.h,b.endpoint,e,c,b.Ib,b.mb||!1)}).then(function(g){f=g;return b.Za?b.Za(c,f):f}).then(b.G).then(function(){if(!b.Z)return f;if(!(b.Z in f))throw new t("internal-error");return f[b.Z]})}
function wj(a){return Xi({error:{errors:[{message:a}],code:400,message:a}})}
function Xi(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new t(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",
UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"};z(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new t(d[e],b);!b&&a&&(b=Ue(a));return new t("internal-error",b)};function Mj(a){this.b=a;this.a=null;this.sb=Nj(this)}
function Nj(a){return Oj().then(function(){return new D(function(b,c){L("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Pj.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Qj(a,b){return a.sb.then(function(){return new D(function(c){a.a.send(b.type,b,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Rj(a,b){a.sb.then(function(){a.a.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Sj=new qb(rb,"https://apis.google.com/js/api.js?onload=%{onload}"),Tj=new Ze(3E4,6E4),Pj=new Ze(5E3,15E3),Uj=null;
function Oj(){return Uj?Uj:Uj=(new D(function(a,b){function c(){Ye();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ye();b(Error("Network Error"))},timeout:Tj.get()})}if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){L("gapi.load")?c():b(Error("Network Error"))};d=zb(Sj,{onload:d});E(Bi(d)).o(function(){b(Error("Network Error"))})}})).o(function(a){Uj=null;throw a;})};function Vj(a,b,c,d){this.l=a;this.h=b;this.i=c;this.g=d;this.f=null;this.g?(a=J(this.g.url),a=ce(a.c,a.a,a.g,"/emulator/auth/iframe")):a=ce("https",this.l,null,"/__/auth/iframe");this.a=a;I(this.a,"apiKey",this.h);I(this.a,"appName",this.i);this.b=null;this.c=[]}Vj.prototype.toString=function(){this.f?I(this.a,"v",this.f):ie(this.a.b,"v");this.b?I(this.a,"eid",this.b):ie(this.a.b,"eid");this.c.length?I(this.a,"fw",this.c.join(",")):ie(this.a.b,"fw");return this.a.toString()};
function Wj(a,b,c,d,e,f){this.u=a;this.s=b;this.c=c;this.m=d;this.v=f;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null}Wj.prototype.zb=function(a){this.h=a;return this};
Wj.prototype.toString=function(){if(this.v){var a=J(this.v.url);a=ce(a.c,a.a,a.g,"/emulator/auth/handler")}else a=ce("https",this.u,null,"/__/auth/handler");I(a,"apiKey",this.s);I(a,"appName",this.c);I(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.app(this.c).auth().la()}catch(h){c=null}b.pb=c;I(a,"providerId",this.a.providerId);c=this.a;b=Ve(c.Jb);for(var d in b)b[d]=b[d].toString();d=c.Qc;b=nb(b);for(var e=0;e<d.length;e++){var f=d[e];f in b&&delete b[f]}c.qb&&
c.pb&&!b[c.qb]&&(b[c.qb]=c.pb);mb(b)||I(a,"customParameters",Ue(b))}"function"===typeof this.a.Rb&&(c=this.a.Rb(),c.length&&I(a,"scopes",c.join(",")));this.l?I(a,"redirectUrl",this.l):ie(a.b,"redirectUrl");this.g?I(a,"eventId",this.g):ie(a.b,"eventId");this.i?I(a,"v",this.i):ie(a.b,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!be(a,g)&&I(a,g,this.b[g]);this.h?I(a,"tid",this.h):ie(a.b,"tid");this.f?I(a,"eid",this.f):ie(a.b,"eid");g=Xj(this.c);g.length&&I(a,"fw",g.join(","));return a.toString()};
function Xj(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.app(a).auth().Ga()}catch(b){return[]}}function Yj(a,b,c,d,e,f){this.s=a;this.g=b;this.b=c;this.f=f;this.c=d||null;this.i=e||null;this.l=this.u=this.C=null;this.h=[];this.m=this.a=null}
function Zj(a){var b=re();return cj(a).then(function(c){a:{var d=J(b),e=d.c;d=d.a;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=J(g).a==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:Ce.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1}if(!c)throw new xh(re());})}
function ak(a){if(a.m)return a.m;a.m=Ee().then(function(){if(!a.u){var b=a.c,c=a.i,d=Xj(a.b),e=new Vj(a.s,a.g,a.b,a.f);e.f=b;e.b=c;e.c=Za(d||[]);a.u=e.toString()}a.v=new Mj(a.u);bk(a)});return a.m}k=Yj.prototype;k.Pb=function(a,b,c){var d=new t("popup-closed-by-user"),e=new t("web-storage-unsupported"),f=this,g=!1;return this.ma().then(function(){ck(f).then(function(h){h||(a&&ye(a),b(e),g=!0)})}).o(function(){}).then(function(){if(!g)return Be(a)}).then(function(){if(!g)return Fd(c).then(function(){b(d)})})};
k.Yb=function(){var a=K();return!Te(a)&&!Xe(a)};k.Ub=function(){return!1};
k.Nb=function(a,b,c,d,e,f,g,h){if(!a)return F(new t("popup-blocked"));if(g&&!Te())return this.ma().o(function(p){ye(a);e(p)}),d(),E();this.a||(this.a=Zj(dk(this)));var m=this;return this.a.then(function(){var p=m.ma().o(function(v){ye(a);e(v);throw v;});d();return p}).then(function(){rh(c);if(!g){var p=ek(m.s,m.g,m.b,b,c,null,f,m.c,void 0,m.i,h,m.f);se(p,a)}}).o(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
function dk(a){a.l||(a.C=a.c?Oe(a.c,Xj(a.b)):null,a.l=new Ii(a.g,Ca(a.i),a.C),a.f&&Pi(a.l,a.f));return a.l}k.Ob=function(a,b,c,d){this.a||(this.a=Zj(dk(this)));var e=this;return this.a.then(function(){rh(b);var f=ek(e.s,e.g,e.b,a,b,re(),c,e.c,void 0,e.i,d,e.f);se(f)}).o(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ma=function(){var a=this;return ak(this).then(function(){return a.v.sb}).o(function(){a.a=null;throw new t("network-request-failed");})};k.ac=function(){return!0};
function ek(a,b,c,d,e,f,g,h,m,p,v,B){a=new Wj(a,b,c,d,e,B);a.l=f;a.g=g;a.i=h;a.b=nb(m||null);a.f=p;return a.zb(v).toString()}function bk(a){if(!a.v)throw Error("IfcHandler must be initialized!");Rj(a.v,function(b){var c={};if(b&&b.authEvent){var d=!1;b=th(b.authEvent);for(c=0;c<a.h.length;c++)d=a.h[c](b)||d;c={};c.status=d?"ACK":"ERROR";return E(c)}c.status="ERROR";return E(c)})}
function ck(a){var b={type:"webStorageSupport"};return ak(a).then(function(){return Qj(a.v,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.Ea=function(a){this.h.push(a)};k.Ta=function(a){Xa(this.h,function(b){return b==a})};function fk(a){this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.reactNative&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new t("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}k=fk.prototype;k.get=function(a){return E(this.a.getItem(a)).then(function(b){return b&&We(b)})};k.set=function(a,b){return E(this.a.setItem(a,Ue(b)))};k.U=function(a){return E(this.a.removeItem(a))};k.ca=function(){};k.ia=function(){};function gk(a){this.b=a;this.a={};this.f=q(this.c,this)}var hk=[];function ik(){var a=Je()?self:null;w(hk,function(c){c.b==a&&(b=c)});if(!b){var b=new gk(a);hk.push(b)}return b}
gk.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];w(d,function(f){e.push(E().then(function(){return f(a.origin,a.data.data)}))});Jc(e).then(function(f){var g=[];w(f,function(h){g.push({fulfilled:h.Qb,value:h.value,reason:h.reason?h.reason.message:void 0})});w(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g})})}};function jk(a,b,c){mb(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c)};function kk(a){this.a=a}kk.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function lk(a){this.c=a;this.b=!1;this.a=[]}
function mk(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return F(Error("connection_unavailable"));var v=d?800:50,B="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new D(function(A,Q){B?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),B.port1.start(),h=setTimeout(function(){Q(Error("unsupported_event"))},v),g=function(ya){ya.data.eventId===e&&("ack"===ya.data.status?(clearTimeout(h),m=setTimeout(function(){Q(Error("timeout"))},3E3)):"done"===ya.data.status?(clearTimeout(m),
"undefined"!==typeof ya.data.response?A(ya.data.response):Q(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),Q(Error("invalid_response"))))},p={messageChannel:B,onMessage:g},a.a.push(p),B.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[B.port2])):Q(Error("connection_unavailable"))})).then(function(A){nk(a,p);return A}).o(function(A){nk(a,p);throw A;})}
function nk(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Xa(a.a,function(e){return e==b})}}lk.prototype.close=function(){for(;0<this.a.length;)nk(this,this.a[0]);this.b=!0};function ok(){if(!pk())throw new t("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.m=l.indexedDB;this.type="indexedDB";this.g=this.v=this.f=this.l=null;this.s=!1;this.h=null;var a=this;Je()&&self?(this.v=ik(),jk(this.v,"keyChanged",function(b,c){return qk(a).then(function(d){0<d.length&&w(a.a,function(e){e(d)});return{keyProcessed:Va(d,c.key)}})}),jk(this.v,"ping",function(){return E(["keyChanged"])})):ef().then(function(b){if(a.h=b)a.g=new lk(new kk(b)),mk(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
Va(c[0].value,"keyChanged")&&(a.s=!0)}).o(function(){})})}var rk;function sk(a){return new D(function(b,c){var d=a.m.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(e){c(Error(e.target.error))}})}
function tk(a){return new D(function(b,c){var d=a.m.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault()}catch(f){}c(Error(e.target.error))};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):sk(a).then(function(){return tk(a)}).then(function(f){b(f)}).o(function(f){c(f)})}})}
function uk(a){a.i||(a.i=tk(a));return a.i}function vk(a,b){function c(e,f){uk(a).then(b).then(e).o(function(g){if(3<++d)f(g);else return uk(a).then(function(h){h.close();a.i=void 0;return c(e,f)}).o(function(h){f(h)})})}var d=0;return new D(c)}function pk(){try{return!!l.indexedDB}catch(a){return!1}}function wk(a){return a.objectStore("firebaseLocalStorage")}function xk(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}
function yk(a){return new D(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b()};a.onerror=function(d){c(d.target.error)}})}k=ok.prototype;k.set=function(a,b){var c=this,d=!1;return vk(this,function(e){e=wk(xk(e,!0));return yk(e.get(a))}).then(function(e){return vk(c,function(f){f=wk(xk(f,!0));if(e)return e.value=b,yk(f.put(e));c.b++;d=!0;var g={};g.fbase_key=a;g.value=b;return yk(f.add(g))})}).then(function(){c.c[a]=b;return zk(c,a)}).oa(function(){d&&c.b--})};
function zk(a,b){return a.g&&a.h&&df()===a.h?mk(a.g,"keyChanged",{key:b},a.s).then(function(){}).o(function(){}):E()}k.get=function(a){return vk(this,function(b){return yk(wk(xk(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.U=function(a){var b=this,c=!1;return vk(this,function(d){c=!0;b.b++;return yk(wk(xk(d,!0))["delete"](a))}).then(function(){delete b.c[a];return zk(b,a)}).oa(function(){c&&b.b--})};
function qk(a){return uk(a).then(function(b){var c=wk(xk(b,!1));return c.getAll?yk(c.getAll()):new D(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f)};g.onerror=function(h){e(h.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=te(a.c,c);a.c=c}return d})}k.ca=function(a){0==this.a.length&&Ak(this);this.a.push(a)};
k.ia=function(a){Xa(this.a,function(b){return b==a});0==this.a.length&&Bk(this)};function Ak(a){function b(){a.f=setTimeout(function(){a.l=qk(a).then(function(c){0<c.length&&w(a.a,function(d){d(c)})}).then(function(){b()}).o(function(c){"STOP_EVENT"!=c.message&&b()})},800)}Bk(a);b()}function Bk(a){a.l&&a.l.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function Ck(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=E().then(function(){if(pk()){var d=Qe(),e="__sak"+d;rk||(rk=new ok);c=rk;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.U(e)}).then(function(){return c}).o(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.ca(function(e){w(b.a,function(f){f(e)})});return d})}k=Ck.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.U=function(a){return this.b.then(function(b){return b.U(a)})};k.ca=function(a){this.a.push(a)};k.ia=function(a){Xa(this.a,function(b){return b==a})};function Dk(){this.a={};this.type="inMemory"}k=Dk.prototype;k.get=function(a){return E(this.a[a])};k.set=function(a,b){this.a[a]=b;return E()};k.U=function(a){delete this.a[a];return E()};k.ca=function(){};k.ia=function(){};function Ek(){if(!Fk()){if("Node"==Ke())throw new t("internal-error","The LocalStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Gk()||_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node.localStorage;this.type="localStorage"}function Gk(){try{var a=l.localStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Fk(){var a="Node"==Ke();a=Gk()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=Ek.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d)})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a)})};
k.ca=function(a){l.window&&nd(l.window,"storage",a)};k.ia=function(a){l.window&&xd(l.window,"storage",a)};function Hk(){this.type="nullStorage"}k=Hk.prototype;k.get=function(){return E(null)};k.set=function(){return E()};k.U=function(){return E()};k.ca=function(){};k.ia=function(){};function Ik(){if(!Jk()){if("Node"==Ke())throw new t("internal-error","The SessionStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Kk()||_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function Kk(){try{var a=l.sessionStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Jk(){var a="Node"==Ke();a=Kk()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=Ik.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d)})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a)})};k.ca=function(){};
k.ia=function(){};function Lk(){var a={};a.Browser=Mk;a.Node=Nk;a.ReactNative=Ok;a.Worker=Pk;this.a=a[Ke()]}var Qk,Mk={F:Ek,cb:Ik},Nk={F:Ek,cb:Ik},Ok={F:fk,cb:Hk},Pk={F:Ek,cb:Hk};var Rk={rd:"local",NONE:"none",td:"session"};function Sk(a){var b=new t("invalid-persistence-type"),c=new t("unsupported-persistence-type");a:{for(d in Rk)if(Rk[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Ke()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;case "Worker":if("session"===a||!pk()&&"none"!==a)throw c;break;default:if(!Pe()&&"none"!==a)throw c;}}
function Tk(){var a=!Xe(K())&&Ie()?!0:!1,b=Te(),c=Pe();this.m=a;this.h=b;this.l=c;this.a={};Qk||(Qk=new Lk);a=Qk;try{this.g=!qe()&&cf()||!l.indexedDB?new a.a.F:new Ck(Je()?new Dk:new a.a.F)}catch(d){this.g=new Dk,this.h=!0}try{this.i=new a.a.cb}catch(d){this.i=new Dk}this.v=new Dk;this.f=q(this.Zb,this);this.b={}}var Uk;function Vk(){Uk||(Uk=new Tk);return Uk}function Wk(a,b){switch(b){case "session":return a.i;case "none":return a.v;default:return a.g}}
function Xk(a,b){return"firebase:"+a.name+(b?":"+b:"")}function Yk(a,b,c){var d=Xk(b,c),e=Wk(a,b.F);return a.get(b,c).then(function(f){var g=null;try{g=We(l.localStorage.getItem(d))}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d)})}k=Tk.prototype;k.get=function(a,b){return Wk(this,a.F).get(Xk(a,b))};function Zk(a,b,c){c=Xk(b,c);"local"==b.F&&(a.b[c]=null);return Wk(a,b.F).U(c)}
k.set=function(a,b,c){var d=Xk(a,c),e=this,f=Wk(this,a.F);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.F&&(e.b[d]=g)})};k.addListener=function(a,b,c){a=Xk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));mb(this.a)&&(Wk(this,"local").ca(this.f),this.h||(qe()||!cf())&&l.indexedDB||!this.l||$k(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
k.removeListener=function(a,b,c){a=Xk(a,b);this.a[a]&&(Xa(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);mb(this.a)&&(Wk(this,"local").ia(this.f),al(this))};function $k(a){al(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new bd({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Zb(c))}},1E3)}function al(a){a.c&&(clearInterval(a.c),a.c=null)}
k.Zb=function(a){if(a&&a.g){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.nb(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Wk(this,"local").ia(this.f):al(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.nb(b)};Wb&&ic&&10==ic&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else w(a,q(this.nb,this))};k.nb=function(a){this.a[a]&&w(this.a[a],function(b){b()})};function bl(a){this.a=a;this.b=Vk()}var cl={name:"authEvent",F:"local"};function dl(a){return a.b.get(cl,a.a).then(function(b){return th(b)})};function el(){this.a=Vk()};function fl(){this.b=-1};function gl(a,b){this.b=hl;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0===il&&(l.Int32Array?il=new Int32Array(jl):il=jl);this.reset()}var il;r(gl,fl);for(var hl=64,kl=hl-1,ll=[],ml=0;ml<kl;ml++)ll[ml]=0;var nl=Ya(128,ll);gl.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Za(this.h)};
function ol(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,v=a.a[5]|0,B=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var A=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&v^~p&B;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
7))|0;g=g+(il[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=B;B=v;v=p;p=m+g|0;m=h;h=e;e=d;d=g+A|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+v|0;a.a[6]=a.a[6]+B|0;a.a[7]=a.a[7]+f|0}
function pl(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if("string"===typeof b)for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(ol(a),e=0);else if(na(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(ol(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var jl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ql(){gl.call(this,8,rl)}r(ql,gl);var rl=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function sl(a,b,c,d,e,f){this.v=a;this.i=b;this.l=c;this.m=d||null;this.u=e||null;this.s=f;this.h=b+":"+c;this.C=new el;this.g=new bl(this.h);this.f=null;this.b=[];this.a=this.c=null}function tl(a){return new t("invalid-cordova-configuration",a)}k=sl.prototype;
k.ma=function(){return this.Ia?this.Ia:this.Ia=Fe().then(function(){if("function"!==typeof L("universalLinks.subscribe",l))throw tl("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof L("BuildInfo.packageName",l))throw tl("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",l))throw tl("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",l))throw tl("cordova-plugin-inappbrowser is not installed");
},function(){throw new t("cordova-not-ready");})};function ul(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function vl(a){var b=new ql;pl(b,a);a=[];var c=8*b.g;56>b.c?pl(b,nl,56-b.c):pl(b,nl,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;ol(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return cg(a)}
k.Pb=function(a,b){b(new t("operation-not-supported-in-this-environment"));return E()};k.Nb=function(){return F(new t("operation-not-supported-in-this-environment"))};k.ac=function(){return!1};k.Yb=function(){return!0};k.Ub=function(){return!0};
k.Ob=function(a,b,c,d){if(this.c)return F(new t("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=E().then(function(){rh(b);return wl(e)}).then(function(){return xl(e,a,b,c,d)}).then(function(){return(new D(function(v,B){h=function(){var A=L("cordova.plugins.browsertab.close",l);v();"function"===typeof A&&A();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return!1};e.Ea(h);m=function(){g||(g=Fd(2E3).then(function(){B(new t("redirect-cancelled-by-user"))}))};
p=function(){$e()&&m()};f.addEventListener("resume",m,!1);K().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1)})).o(function(v){return yl(e).then(function(){throw v;})})}).oa(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.Ta(h);e.c=null})};
function xl(a,b,c,d,e){var f=ul(),g=new sh(b,d,null,f,new t("no-auth-event"),null,e),h=L("BuildInfo.packageName",l);if("string"!==typeof h)throw new t("invalid-cordova-configuration");var m=L("BuildInfo.displayName",l),p={};if(K().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(K().toLowerCase().match(/android/))p.apn=h;else return F(new t("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=vl(f);p.sessionId=f;var v=ek(a.v,a.i,a.l,b,c,null,d,a.m,p,a.u,e,a.s);return a.ma().then(function(){var B=
a.h;return a.C.a.set(cl,g.w(),B)}).then(function(){var B=L("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof B)throw new t("invalid-cordova-configuration");var A=null;B(function(Q){if(Q){A=L("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");A(v)}else{A=L("cordova.InAppBrowser.open",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");Q=K();a.a=A(v,Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes")}})})}function zl(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function wl(a){a.f||(a.f=a.ma().then(function(){return new D(function(b){function c(d){b(d);a.Ta(c);return!1}a.Ea(c);Al(a)})}));return a.f}function yl(a){var b=null;return dl(a.g).then(function(c){b=c;c=a.g;return Zk(c.b,cl,c.a)}).then(function(){return b})}
function Al(a){function b(g){d=!0;e&&e.cancel();yl(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=xg(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=J(m),p=We(be(p,"firebaseError")||null),p=(p="object"===typeof p?Aa(p):null)?new sh(h.c,h.b,null,null,p,null,h.T()):new sh(h.c,h.b,m,h.f,null,null,h.T()));m=p||c}zl(a,m)})}var c=new sh("unknown",null,null,null,new t("no-auth-event")),d=!1,e=Fd(500).then(function(){return yl(a).then(function(){d||zl(a,c)})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
g.toLowerCase().indexOf(L("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g)}catch(h){console.error(h)}};vh||(vh=new uh);wh(b)}k.Ea=function(a){this.b.push(a);wl(this).o(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new sh("unknown",null,null,null,new t("no-auth-event")),a(b))})};k.Ta=function(a){Xa(this.b,function(b){return b==a})};function Bl(a){this.a=a;this.b=Vk()}var Cl={name:"pendingRedirect",F:"session"};function Dl(a){return a.b.set(Cl,"pending",a.a)}function El(a){return Zk(a.b,Cl,a.a)}function Fl(a){return a.b.get(Cl,a.a).then(function(b){return"pending"==b})};function Gl(a,b,c,d){this.i={};this.u=0;this.D=a;this.v=b;this.m=c;this.J=d;this.h=[];this.f=!1;this.l=q(this.s,this);this.b=new Hl;this.C=new Il;this.g=new Bl(Jl(this.v,this.m));this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.C;this.c.linkViaPopup=this.C;this.c.reauthViaPopup=this.C;this.a=Kl(this.D,this.v,this.m,Da,this.J)}
function Kl(a,b,c,d,e){var f=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION||null;return Ge()?new sl(a,b,c,f,d,e):new Yj(a,b,c,f,d,e)}Gl.prototype.reset=function(){this.f=!1;this.a.Ta(this.l);this.a=Kl(this.D,this.v,this.m,null,this.J);this.i={}};function Ll(a){a.f||(a.f=!0,a.a.Ea(a.l));var b=a.a;return a.a.ma().o(function(c){a.a==b&&a.reset();throw c;})}
function Ml(a){a.a.Yb()&&Ll(a).o(function(b){var c=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(b)&&a.s(c)});a.a.Ub()||Ol(a.b)}function Pl(a,b){Va(a.h,b)||a.h.push(b);a.f||Fl(a.g).then(function(c){c?El(a.g).then(function(){Ll(a).o(function(d){var e=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(d)&&a.s(e)})}):Ml(a)}).o(function(){Ml(a)})}function Ql(a,b){Xa(a.h,function(c){return c==b})}
Gl.prototype.s=function(a){if(!a)throw new t("invalid-auth-event");6E5<=Date.now()-this.u&&(this.i={},this.u=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return!1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.Gb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.u=Date.now());b=!0;break}}Ol(this.b);return b};var Rl=new Ze(2E3,1E4),Sl=new Ze(3E4,6E4);Gl.prototype.ra=function(){return this.b.ra()};
function Tl(a,b,c,d,e,f,g){return a.a.Nb(b,c,d,function(){a.f||(a.f=!0,a.a.Ea(a.l))},function(){a.reset()},e,f,g)}function Nl(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
function Ul(a,b,c,d,e){var f;return Dl(a.g).then(function(){return a.a.Ob(b,c,d,e).o(function(g){if(Nl(g))throw new t("operation-not-supported-in-this-environment");f=g;return El(a.g).then(function(){throw f;})}).then(function(){return a.a.ac()?new D(function(){}):El(a.g).then(function(){return a.ra()}).then(function(){}).o(function(){})})})}function Vl(a,b,c,d,e){return a.a.Pb(d,function(f){b.na(c,null,f,e)},Rl.get())}var Wl={};function Jl(a,b,c){a=a+":"+b;c&&(a=a+":"+c.url);return a}
function Xl(a,b,c,d){var e=Jl(b,c,d);Wl[e]||(Wl[e]=new Gl(a,b,c,d));return Wl[e]}function Hl(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}Hl.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
Hl.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Yl(this,!0,null,a.a),E()):b.Fa(c,d)?Zl(this,a,b):F(new t("invalid-auth-event")):(Yl(this,!1,null,null),E())}else F(new t("invalid-auth-event"))};function Ol(a){a.g||(a.g=!0,Yl(a,!1,null,null))}function $l(a){a.g&&!a.i&&Yl(a,!1,null,null)}
function Zl(a,b,c){c=c.Fa(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.T(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){Yl(a,h,m,null)}).o(function(m){Yl(a,h,null,m)})}function am(a,b){a.b=function(){return F(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function bm(a,b){a.b=function(){return E(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function Yl(a,b,c,d){b?d?am(a,d):bm(a,c):bm(a,{user:null});a.f=[];a.c=[]}
Hl.prototype.ra=function(){var a=this;return new D(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),cm(a))})};function cm(a){var b=new t("timeout");a.a&&a.a.cancel();a.a=Fd(Sl.get()).then(function(){a.b||(a.g=!0,Yl(a,!0,null,b))})}function Il(){}Il.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.na(a.c,null,a.a,a.b),E()):b.Fa(c,d)?dm(a,b):F(new t("invalid-auth-event"))}else F(new t("invalid-auth-event"))};
function dm(a,b){var c=a.b,d=a.c;b.Fa(d,c)(a.g,a.f,a.T(),a.i).then(function(e){b.na(d,e,null,c)}).o(function(e){b.na(d,null,e,c)})};function em(){this.jb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.jb},set:function(a){this.jb=a},enumerable:!1})};function fm(a,b){this.a=b;M(this,"verificationId",a)}fm.prototype.confirm=function(a){a=ph(this.verificationId,a);return this.a(a)};function gm(a,b,c,d){return(new lh(a)).gb(b,c).then(function(e){return new fm(e,d)})};function hm(a){var b=ig(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new t("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");N(this,{token:a,expirationTime:bf(1E3*b.exp),authTime:bf(1E3*b.auth_time),issuedAtTime:bf(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,signInSecondFactor:b.firebase&&b.firebase.sign_in_second_factor?b.firebase.sign_in_second_factor:null,claims:b})}
;function im(a,b,c){var d=b&&b[jm];if(!d)throw new t("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=a;this.f=nb(b);this.g=c;this.c=new yg(null,d);this.b=[];var e=this;w(b[km]||[],function(f){(f=tf(f))&&e.b.push(f)});M(this,"auth",this.a);M(this,"session",this.c);M(this,"hints",this.b)}var km="mfaInfo",jm="mfaPendingCredential";im.prototype.Rc=function(a){var b=this;return a.tb(this.a.a,this.c).then(function(c){var d=nb(b.f);delete d[km];delete d[jm];z(d,c);return b.g(d)})};function lm(a,b,c,d){t.call(this,"multi-factor-auth-required",d,b);this.b=new im(a,b,c);M(this,"resolver",this.b)}r(lm,t);function mm(a,b,c){if(a&&n(a.serverResponse)&&"auth/multi-factor-auth-required"===a.code)try{return new lm(b,a.serverResponse,c,a.message)}catch(d){}return null};function nm(){}nm.prototype.tb=function(a,b,c){return b.type==zg?om(this,a,b,c):pm(this,a,b)};function om(a,b,c,d){return c.Ha().then(function(e){e={idToken:e};"undefined"!==typeof d&&(e.displayName=d);z(e,{phoneVerificationInfo:hh(a.a)});return O(b,Gj,e)})}function pm(a,b,c){return c.Ha().then(function(d){d={mfaPendingCredential:d};z(d,{phoneVerificationInfo:hh(a.a)});return O(b,Hj,d)})}function qm(a){M(this,"factorId",a.fa);this.a=a}r(qm,nm);
function rm(a){qm.call(this,a);if(this.a.fa!=lh.PROVIDER_ID)throw new t("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");}r(rm,qm);function sm(a,b){G.call(this,a);for(var c in b)this[c]=b[c]}r(sm,G);function tm(a,b){this.a=a;this.b=[];this.c=q(this.yc,this);nd(this.a,"userReloaded",this.c);var c=[];b&&b.multiFactor&&b.multiFactor.enrolledFactors&&w(b.multiFactor.enrolledFactors,function(d){var e=null,f={};if(d){d.uid&&(f[qf]=d.uid);d.displayName&&(f[rf]=d.displayName);d.enrollmentTime&&(f[sf]=(new Date(d.enrollmentTime)).toISOString());d.phoneNumber&&(f[pf]=d.phoneNumber);try{e=new uf(f)}catch(g){}d=e}else d=null;d&&c.push(d)});um(this,c)}
function vm(a){var b=[];w(a.mfaInfo||[],function(c){(c=tf(c))&&b.push(c)});return b}k=tm.prototype;k.yc=function(a){um(this,vm(a.hd))};function um(a,b){a.b=b;M(a,"enrolledFactors",b)}k.Sb=function(){return this.a.I().then(function(a){return new yg(a,null)})};k.fc=function(a,b){var c=this,d=this.a.a;return this.Sb().then(function(e){return a.tb(d,e,b)}).then(function(e){wm(c.a,e);return c.a.reload()})};
k.bd=function(a){var b=this,c="string"===typeof a?a:a.uid,d=this.a.a;return this.a.I().then(function(e){return O(d,Lj,{idToken:e,mfaEnrollmentId:c})}).then(function(e){var f=Qa(b.b,function(g){return g.uid!=c});um(b,f);wm(b.a,e);return b.a.reload().o(function(g){if("auth/user-token-expired"!=g.code)throw g;})})};k.w=function(){return{multiFactor:{enrolledFactors:Ra(this.b,function(a){return a.w()})}}};function xm(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}xm.prototype.start=function(){this.a=this.c;ym(this,!0)};function zm(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function ym(a,b){a.stop();a.b=Fd(zm(a,b)).then(function(){return af()}).then(function(){return a.h()}).then(function(){ym(a,!0)}).o(function(c){a.i(c)&&ym(a,!1)})}
xm.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Am(a){this.f=a;this.b=this.a=null;this.c=Date.now()}Am.prototype.w=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:this.c}};function Bm(a,b){"undefined"===typeof b&&(a.b?(b=a.b,b=b.a-b.g):b=0);a.c=Date.now()+1E3*b}function Cm(a,b){a.b=jg(b[Dg]||"");a.a=b.refreshToken;b=b.expiresIn;Bm(a,"undefined"!==typeof b?Number(b):void 0)}function Dm(a,b){a.b=b.b;a.a=b.a;a.c=b.c}
function Em(a,b){return Wi(a.f,b).then(function(c){a.b=jg(c.access_token);a.a=c.refresh_token;Bm(a,c.expires_in);return{accessToken:a.b.toString(),refreshToken:a.a}}).o(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}Am.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?F(new t("user-token-expired")):a||!this.b||Date.now()>this.c-3E4?this.a?Em(this,{grant_type:"refresh_token",refresh_token:this.a}):E(null):E({accessToken:this.b.toString(),refreshToken:this.a})};function Fm(a,b){this.a=a||null;this.b=b||null;N(this,{lastSignInTime:bf(b||null),creationTime:bf(a||null)})}function Gm(a){return new Fm(a.a,a.b)}Fm.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Hm(a,b,c,d,e,f){N(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}
function Im(a,b,c){this.N=[];this.l=a.apiKey;this.m=a.appName;this.s=a.authDomain||null;var d=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION?Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION):null;this.a=new Ii(this.l,Ca(Da),d);(this.u=a.emulatorConfig||null)&&Pi(this.a,this.u);this.h=new Am(this.a);Jm(this,b[Dg]);Cm(this.h,b);M(this,"refreshToken",this.h.a);Km(this,c||{});H.call(this);this.P=!1;this.s&&Re()&&(this.b=Xl(this.s,this.l,this.m,this.u));this.W=[];this.i=null;this.D=Lm(this);this.ba=q(this.ib,this);var e=this;this.za=null;this.Pa=function(f){e.xa(f.h)};
this.qa=null;this.Ba=function(f){Mm(e,f.c)};this.$=null;this.aa=[];this.Oa=function(f){Nm(e,f.f)};this.ja=null;this.S=new tm(this,c);M(this,"multiFactor",this.S)}r(Im,H);Im.prototype.xa=function(a){this.za=a;Oi(this.a,a)};function Mm(a,b){a.u=b;Pi(a.a,b);a.b&&(b=a.b,a.b=Xl(a.s,a.l,a.m,a.u),a.P&&(Ql(b,a),Pl(a.b,a)))}Im.prototype.la=function(){return this.za};function Om(a,b){a.qa&&xd(a.qa,"languageCodeChanged",a.Pa);(a.qa=b)&&nd(b,"languageCodeChanged",a.Pa)}
function Pm(a,b){a.$&&xd(a.$,"emulatorConfigChanged",a.Ba);(a.$=b)&&nd(b,"emulatorConfigChanged",a.Ba)}function Nm(a,b){a.aa=b;Ri(a.a,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION?Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION,a.aa):null)}Im.prototype.Ga=function(){return Za(this.aa)};function Qm(a,b){a.ja&&xd(a.ja,"frameworkChanged",a.Oa);(a.ja=b)&&nd(b,"frameworkChanged",a.Oa)}Im.prototype.ib=function(){this.D.b&&(this.D.stop(),this.D.start())};
function Rm(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.app(a.m).auth()}catch(b){throw new t("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function Lm(a){return new xm(function(){return a.I(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.h.c-Date.now()-3E5;return 0<b?b:0})}function Sm(a){a.J||a.D.b||(a.D.start(),xd(a,"tokenChanged",a.ba),nd(a,"tokenChanged",a.ba))}function Tm(a){xd(a,"tokenChanged",a.ba);a.D.stop()}
function Jm(a,b){a.Aa=b;M(a,"_lat",b)}function Um(a,b){Xa(a.W,function(c){return c==b})}function Vm(a){for(var b=[],c=0;c<a.W.length;c++)b.push(a.W[c](a));return Jc(b).then(function(){return a})}function Wm(a){a.b&&!a.P&&(a.P=!0,Pl(a.b,a))}
function Km(a,b){N(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new Fm(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId}M(Im.prototype,"providerId","firebase");function Xm(){}function Ym(a){return E().then(function(){if(a.J)throw new t("app-deleted");})}
function Zm(a){return Ra(a.providerData,function(b){return b.providerId})}function $m(a,b){b&&(an(a,b.providerId),a.providerData.push(b))}function an(a,b){Xa(a.providerData,function(c){return c.providerId==b})}function bn(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c)}
function cn(a,b){a!=b&&(N(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?M(a,"metadata",Gm(b.metadata)):M(a,"metadata",new Fm),w(b.providerData,function(c){$m(a,c)}),Dm(a.h,b.h),M(a,"refreshToken",a.h.a),um(a.S,b.S.b))}k=Im.prototype;k.reload=function(){var a=this;return R(this,Ym(this).then(function(){return dn(a).then(function(){return Vm(a)}).then(Xm)}))};
function dn(a){return a.I().then(function(b){var c=a.isAnonymous;return en(a,b).then(function(){c||bn(a,"isAnonymous",!1);return b})})}k.oc=function(a){return this.I(a).then(function(b){return new hm(b)})};k.I=function(a){var b=this;return R(this,Ym(this).then(function(){return b.h.getToken(a)}).then(function(c){if(!c)throw new t("internal-error");c.accessToken!=b.Aa&&(Jm(b,c.accessToken),b.dispatchEvent(new sm("tokenChanged")));bn(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function wm(a,b){b[Dg]&&a.Aa!=b[Dg]&&(Cm(a.h,b),a.dispatchEvent(new sm("tokenChanged")),Jm(a,b[Dg]),bn(a,"refreshToken",a.h.a))}function en(a,b){return O(a.a,Ij,{idToken:b}).then(q(a.Kc,a))}
k.Kc=function(a){a=a.users;if(!a||!a.length)throw new t("internal-error");a=a[0];Km(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=fn(a),c=0;c<b.length;c++)$m(this,b[c]);bn(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));this.dispatchEvent(new sm("userReloaded",{hd:a}))};
function fn(a){return(a=a.providerUserInfo)&&a.length?Ra(a,function(b){return new Hm(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Lc=function(a){gf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.ub(a)};
k.ub=function(a){var b=this,c=null;return R(this,a.c(this.a,this.uid).then(function(d){wm(b,d);c=gn(b,d,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};function hn(a,b){return dn(a).then(function(){if(Va(Zm(a),b))return Vm(a).then(function(){throw new t("provider-already-linked");})})}k.Cc=function(a){gf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.rb(a)};
k.rb=function(a){var b=this,c=null;return R(this,hn(this,a.providerId).then(function(){return b.I()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=gn(b,d,"link");return jn(b,d)}).then(function(){return c}))};k.Dc=function(a,b){var c=this;return R(this,hn(this,"phone").then(function(){return gm(Rm(c),a,b,q(c.rb,c))}))};k.Mc=function(a,b){var c=this;return R(this,E().then(function(){return gm(Rm(c),a,b,q(c.ub,c))}),!0)};
function gn(a,b,c){var d=qh(b);b=og(b);return kf({user:a,credential:d,additionalUserInfo:b,operationType:c})}function jn(a,b){wm(a,b);return a.reload().then(function(){return a})}k.Cb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Cb(c,a)}).then(function(c){wm(b,c);return b.reload()}))};k.ed=function(a){var b=this;return R(this,this.I().then(function(c){return a.b(b.a,c)}).then(function(c){wm(b,c);return b.reload()}))};
k.Db=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Db(c,a)}).then(function(c){wm(b,c);return b.reload()}))};
k.Eb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Ym(this);var b=this;return R(this,this.I().then(function(c){return b.a.Eb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){wm(b,c);bn(b,"displayName",c.displayName||null);bn(b,"photoURL",c.photoUrl||null);w(b.providerData,function(d){"password"===d.providerId&&(M(d,"displayName",b.displayName),M(d,"photoURL",b.photoURL))});return Vm(b)}).then(Xm))};
k.cd=function(a){var b=this;return R(this,dn(this).then(function(c){return Va(Zm(b),a)?rj(b.a,c,[a]).then(function(d){var e={};w(d.providerUserInfo||[],function(f){e[f.providerId]=!0});w(Zm(b),function(f){e[f]||an(b,f)});e[lh.PROVIDER_ID]||M(b,"phoneNumber",null);return Vm(b)}):Vm(b).then(function(){throw new t("no-such-provider");})}))};
k.delete=function(){var a=this;return R(this,this.I().then(function(b){return O(a.a,Fj,{idToken:b})}).then(function(){a.dispatchEvent(new sm("userDeleted"))})).then(function(){for(var b=0;b<a.N.length;b++)a.N[b].cancel("app-deleted");Om(a,null);Pm(a,null);Qm(a,null);a.N=[];a.J=!0;Tm(a);M(a,"refreshToken",null);a.b&&Ql(a.b,a)})};
k.Gb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.ga||null)==b||"reauthViaRedirect"==a&&(this.ga||null)==b?!0:!1};k.na=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)};
k.Fa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?q(this.Lb,this):"reauthViaPopup"==a&&b==(this.g||null)?q(this.Mb,this):"linkViaRedirect"==a&&(this.ga||null)==b?q(this.Lb,this):"reauthViaRedirect"==a&&(this.ga||null)==b?q(this.Mb,this):null};k.Ec=function(a){var b=this;return kn(this,"linkViaPopup",a,function(){return hn(b,a.providerId).then(function(){return Vm(b)})},!1)};k.Nc=function(a){return kn(this,"reauthViaPopup",a,function(){return E()},!0)};
function kn(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.i&&!e)return F(a.i);var f=ng(c.providerId),g=Qe(a.uid+":::"),h=null;(!Te()||Ie())&&a.s&&c.isOAuthProvider&&(h=ek(a.s,a.l,a.m,b,c,null,g,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION||null,null,null,a.tenantId,a.u));var m=ze(h,f&&f.va,f&&f.ua);d=d().then(function(){ln(a);if(!e)return a.I().then(function(){})}).then(function(){return Tl(a.b,m,b,c,g,!!h,a.tenantId)}).then(function(){return new D(function(p,v){a.na(b,null,new t("cancelled-popup-request"),
a.g||null);a.f=p;a.C=v;a.g=g;a.c=Vl(a.b,a,b,m,g)})}).then(function(p){m&&ye(m);return p?kf(p):null}).o(function(p){m&&ye(m);throw p;});return R(a,d,e)}k.Fc=function(a){var b=this;return mn(this,"linkViaRedirect",a,function(){return hn(b,a.providerId)},!1)};k.Oc=function(a){return mn(this,"reauthViaRedirect",a,function(){return E()},!0)};
function mn(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.i&&!e)return F(a.i);var f=null,g=Qe(a.uid+":::");d=d().then(function(){ln(a);if(!e)return a.I().then(function(){})}).then(function(){a.ga=g;return Vm(a)}).then(function(h){a.ha&&(h=a.ha,h=h.b.set(nn,a.w(),h.a));return h}).then(function(){return Ul(a.b,b,c,g,a.tenantId)}).o(function(h){f=h;if(a.ha)return on(a.ha);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function ln(a){if(!a.b||!a.P){if(a.b&&!a.P)throw new t("internal-error");throw new t("auth-domain-config-required");}}k.Lb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.I().then(function(g){return Hg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=gn(e,g,"link");return jn(e,g)}).then(function(){return f});return R(this,c)};
k.Mb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=E().then(function(){return Cg(Ig(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=gn(e,h,"reauthenticate");wm(e,h);e.i=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
k.vb=function(a){var b=this,c=null;return R(this,this.I().then(function(d){c=d;return"undefined"===typeof a||mb(a)?{}:bg(new Sf(a))}).then(function(d){return b.a.vb(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};k.Fb=function(a,b){var c=this,d=null;return R(this,this.I().then(function(e){d=e;return"undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(e){return c.a.Fb(d,a,e)}).then(function(e){if(c.email!=e)return c.reload()}).then(function(){}))};
function R(a,b,c){var d=pn(a,b,c);a.N.push(d);d.oa(function(){Wa(a.N,d)});return d.o(function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),Rm(a),q(a.jc,a)));throw f||e;})}k.jc=function(a){var b=null,c=this;a=Cg(E(a),c.uid).then(function(d){b=gn(c,d,"reauthenticate");wm(c,d);c.i=null;return c.reload()}).then(function(){return b});return R(this,a,!0)};
function pn(a,b,c){return a.i&&!c?(b.cancel(),F(a.i)):b.o(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.i||a.dispatchEvent(new sm("userInvalidated")),a.i=d);throw d;})}k.toJSON=function(){return this.w()};
k.w=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.h.w(),redirectEventId:this.ga||null};this.metadata&&z(a,this.metadata.w());w(this.providerData,function(b){a.providerData.push(lf(b))});z(a,this.S.w());return a};
function qn(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName,emulatorConfig:a.emulatorConfig},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken){c[Dg]=a.stsTokenManager.accessToken;c.refreshToken=a.stsTokenManager.refreshToken||null;var d=a.stsTokenManager.expirationTime;d&&(c.expiresIn=(d-Date.now())/1E3)}else return null;var e=new Im(b,c,a);a.providerData&&w(a.providerData,function(f){f&&$m(e,kf(f))});a.redirectEventId&&(e.ga=a.redirectEventId);
return e}function rn(a,b,c,d){var e=new Im(a,b);c&&(e.ha=c);d&&Nm(e,d);return e.reload().then(function(){return e})}function sn(a,b,c,d){var e=a.h,f={};f[Dg]=e.b&&e.b.toString();f.refreshToken=e.a;b=new Im(b||{apiKey:a.l,authDomain:a.s,appName:a.m},f);c&&(b.ha=c);d&&Nm(b,d);cn(b,a);return b};function tn(a){this.a=a;this.b=Vk()}var nn={name:"redirectUser",F:"session"};function on(a){return Zk(a.b,nn,a.a)}function un(a,b){return a.b.get(nn,a.a).then(function(c){c&&b&&(c.authDomain=b);return qn(c||{})})};function vn(a){this.a=a;this.b=Vk();this.c=null;this.f=wn(this);this.b.addListener(xn("local"),this.a,q(this.g,this))}vn.prototype.g=function(){var a=this,b=xn("local");yn(this,function(){return E().then(function(){return a.c&&"local"!=a.c.F?a.b.get(b,a.a):null}).then(function(c){if(c)return zn(a,"local").then(function(){a.c=b})})})};function zn(a,b){var c=[],d;for(d in Rk)Rk[d]!==b&&c.push(Zk(a.b,xn(Rk[d]),a.a));c.push(Zk(a.b,An,a.a));return Ic(c)}
function wn(a){var b=xn("local"),c=xn("session"),d=xn("none");return Yk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(An,a.a).then(function(h){return h?xn(h):b})})})}).then(function(e){a.c=e;return zn(a,e.F)}).o(function(){a.c||(a.c=b)})}var An={name:"persistence",F:"session"};function xn(a){return{name:"authUser",F:a}}
vn.prototype.yb=function(a){var b=null,c=this;Sk(a);return yn(this,function(){return a!=c.c.F?c.b.get(c.c,c.a).then(function(d){b=d;return zn(c,a)}).then(function(){c.c=xn(a);if(b)return c.b.set(c.c,b,c.a)}):E()})};function Bn(a){return yn(a,function(){return a.b.set(An,a.c.F,a.a)})}function Cn(a,b){return yn(a,function(){return a.b.set(a.c,b.w(),a.a)})}function Dn(a){return yn(a,function(){return Zk(a.b,a.c,a.a)})}
function En(a,b,c){return yn(a,function(){return a.b.get(a.c,a.a).then(function(d){d&&b&&(d.authDomain=b);d&&c&&(d.emulatorConfig=c);return qn(d||{})})})}function yn(a,b){a.f=a.f.then(b,b);return a.f};function Fn(a){this.l=!1;M(this,"settings",new em);M(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION?Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION):null,this.a=new Ii(S(this).options&&S(this).options.apiKey,Ca(Da),a);else throw new t("invalid-api-key");this.P=[];this.s=[];this.N=[];this.Pa=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.createSubscribe(q(this.zc,this));this.W=void 0;this.ib=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.createSubscribe(q(this.Ac,this));Gn(this,null);this.i=new vn(S(this).options.apiKey+":"+S(this).name);this.D=
new tn(S(this).options.apiKey+":"+S(this).name);this.$=T(this,Hn(this));this.h=T(this,In(this));this.ba=!1;this.ja=q(this.Zc,this);this.Ba=q(this.da,this);this.qa=q(this.mc,this);this.za=q(this.wc,this);this.Aa=q(this.xc,this);this.b=null;Jn(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this.delete,this);this.INTERNAL.logFramework=q(this.Gc,this);this.u=0;H.call(this);Kn(this);this.J=[];this.R=null}r(Fn,H);function Ln(a){G.call(this,"languageCodeChanged");this.h=a}r(Ln,G);
function Mn(a){G.call(this,"emulatorConfigChanged");this.c=a}r(Mn,G);function Nn(a){G.call(this,"frameworkChanged");this.f=a}r(Nn,G);k=Fn.prototype;k.yb=function(a){a=this.i.yb(a);return T(this,a)};k.xa=function(a){this.aa===a||this.l||(this.aa=a,Oi(this.a,this.aa),this.dispatchEvent(new Ln(this.la())))};k.la=function(){return this.aa};k.fd=function(){var a=l.navigator;this.xa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};
k.gd=function(a,b){if(!this.R){if(!/^https?:\/\//.test(a))throw new t("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");b=b?!!b.disableWarnings:!1;On(b);this.R={url:a,ec:b};this.settings.jb=!0;Pi(this.a,this.R);this.dispatchEvent(new Mn(this.R))}};
function On(a){"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");l.document&&!a&&Ee().then(function(){var b=l.document.createElement("div");b.innerText="Running in emulator mode. Do not use with production credentials.";b.style.position="fixed";b.style.width="100%";b.style.backgroundColor="#ffffff";b.style.border=".1em solid #000000";b.style.color=
"#b50000";b.style.bottom="0px";b.style.left="0px";b.style.margin="0px";b.style.zIndex=1E4;b.style.textAlign="center";b.classList.add("firebase-emulator-warning");l.document.body.appendChild(b)})}k.Gc=function(a){this.J.push(a);Ri(this.a,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION?Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION,this.J):null);this.dispatchEvent(new Nn(this.J))};k.Ga=function(){return Za(this.J)};k.zb=function(a){this.S===a||this.l||(this.S=a,this.a.b=this.S)};k.T=function(){return this.S};
function Kn(a){Object.defineProperty(a,"lc",{get:function(){return this.la()},set:function(b){this.xa(b)},enumerable:!1});a.aa=null;Object.defineProperty(a,"ti",{get:function(){return this.T()},set:function(b){this.zb(b)},enumerable:!1});a.S=null;Object.defineProperty(a,"emulatorConfig",{get:function(){if(this.R){var b=J(this.R.url);b=kf({protocol:b.c,host:b.a,port:b.g,options:kf({disableWarnings:this.R.ec})})}else b=null;return b},enumerable:!1})}
k.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).w()}};function Pn(a){return a.Oa||F(new t("auth-domain-config-required"))}function Jn(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&Re()&&(a.Oa=a.$.then(function(){if(!a.l){a.b=Xl(b,c,S(a).name,a.R);Pl(a.b,a);U(a)&&Wm(U(a));if(a.m){Wm(a.m);var d=a.m;d.xa(a.la());Om(d,a);d=a.m;Nm(d,a.J);Qm(d,a);d=a.m;Mm(d,a.R);Pm(d,a);a.m=null}return a.b}}))}
k.Gb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};k.na=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C)};k.Fa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?q(this.ic,this):null};
k.ic=function(a,b,c,d){var e=this,f={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);return e.$.then(function(){return Qn(e,Fg(e.a,f))})};
k.Xc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=ng(a.providerId),d=Qe(),e=null;(!Te()||Ie())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=ek(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION||null,null,null,this.T(),this.R));var f=ze(e,c&&c.va,c&&c.ua);c=Pn(this).then(function(g){return Tl(g,f,"signInViaPopup",a,d,!!e,b.T())}).then(function(){return new D(function(g,h){b.na("signInViaPopup",
null,new t("cancelled-popup-request"),b.g);b.f=g;b.C=h;b.g=d;b.c=Vl(b.b,b,"signInViaPopup",f,d)})}).then(function(g){f&&ye(f);return g?kf(g):null}).o(function(g){f&&ye(f);throw g;});return T(this,c)};k.Yc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=Pn(this).then(function(){return Bn(b.i)}).then(function(){return Ul(b.b,"signInViaRedirect",a,void 0,b.T())});return T(this,c)};
function Rn(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=Pn(a).then(function(){return a.b.ra()}).then(function(c){return c?kf(c):null});return T(a,b)}k.ra=function(){var a=this;return Rn(this).then(function(b){a.b&&$l(a.b.b);return b}).o(function(b){a.b&&$l(a.b.b);throw b;})};
k.dd=function(a){if(!a)return F(new t("null-user"));if(this.S!=a.tenantId)return F(new t("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=sn(a,c,b.D,b.Ga());return T(this,this.h.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return cn(U(b),a),b.da(a);Gn(b,d);Wm(d);return b.da(d)}).then(function(){Sn(b)}))};
function Tn(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;a.R&&(c.emulatorConfig=a.R);return a.$.then(function(){return rn(c,b,a.D,a.Ga())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return cn(U(a),d),a.da(d);Gn(a,d);Wm(d);return a.da(d)}).then(function(){Sn(a)})}
function Gn(a,b){U(a)&&(Um(U(a),a.Ba),xd(U(a),"tokenChanged",a.qa),xd(U(a),"userDeleted",a.za),xd(U(a),"userInvalidated",a.Aa),Tm(U(a)));b&&(b.W.push(a.Ba),nd(b,"tokenChanged",a.qa),nd(b,"userDeleted",a.za),nd(b,"userInvalidated",a.Aa),0<a.u&&Sm(b));M(a,"currentUser",b);b&&(b.xa(a.la()),Om(b,a),Nm(b,a.J),Qm(b,a),Mm(b,a.R),Pm(b,a))}k.Bb=function(){var a=this,b=this.h.then(function(){a.b&&$l(a.b.b);if(!U(a))return E();Gn(a,null);return Dn(a.i).then(function(){Sn(a)})});return T(this,b)};
function Un(a){var b=un(a.D,S(a).options.authDomain).then(function(c){if(a.m=c)c.ha=a.D;return on(a.D)});return T(a,b)}function Hn(a){var b=S(a).options.authDomain,c=Un(a).then(function(){return En(a.i,b,a.R)}).then(function(d){return d?(d.ha=a.D,a.m&&(a.m.ga||null)==(d.ga||null)?d:d.reload().then(function(){return Cn(a.i,d).then(function(){return d})}).o(function(e){return"auth/network-request-failed"==e.code?d:Dn(a.i)})):null}).then(function(d){Gn(a,d||null)});return T(a,c)}
function In(a){return a.$.then(function(){return Rn(a)}).o(function(){}).then(function(){if(!a.l)return a.ja()}).o(function(){}).then(function(){if(!a.l){a.ba=!0;var b=a.i;b.b.addListener(xn("local"),b.a,a.ja)}})}
k.Zc=function(){var a=this;return En(this.i,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return cn(U(a),b),U(a).I();if(U(a)||b)Gn(a,b),b&&(Wm(b),b.ha=a.D),a.b&&Pl(a.b,a),Sn(a)}})};k.da=function(a){return Cn(this.i,a)};k.mc=function(){Sn(this);this.da(U(this))};k.wc=function(){this.Bb()};k.xc=function(){this.Bb()};
function Qn(a,b){var c=null,d=null;return T(a,b.then(function(e){c=qh(e);d=og(e);return Tn(a,e)},function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),a,q(a.kc,a)));throw f||e;}).then(function(){return kf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.kc=function(a){var b=this;return this.h.then(function(){return Qn(b,E(a))})};k.zc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};
k.Ac=function(a){var b=this;Vn(this,function(){a.next(U(b))})};k.Ic=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d))});return this.Pa(a,b,c)};k.Hc=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){d.W=d.getUid();"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d))});return this.ib(a,b,c)};
k.nc=function(a){var b=this,c=this.h.then(function(){return U(b)?U(b).I(a).then(function(d){return{accessToken:d}}):null});return T(this,c)};k.Tc=function(a){var b=this;return this.h.then(function(){return Qn(b,O(b.a,Kj,{token:a}))}).then(function(c){var d=c.user;bn(d,"isAnonymous",!1);b.da(d);return c})};k.Uc=function(a,b){var c=this;return this.h.then(function(){return Qn(c,O(c.a,ah,{email:a,password:b}))})};
k.dc=function(a,b){var c=this;return this.h.then(function(){return Qn(c,O(c.a,Ej,{email:a,password:b}))})};k.ab=function(a){var b=this;return this.h.then(function(){return Qn(b,a.ka(b.a))})};k.Sc=function(a){gf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.ab(a)};
k.Ab=function(){var a=this;return this.h.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=kf({providerId:null,isNewUser:!1});return kf({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Qn(a,a.a.Ab()).then(function(d){var e=d.user;bn(e,"isAnonymous",!0);a.da(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Wn(a){return U(a)&&U(a)._lat||null}
function Sn(a){if(a.ba){for(var b=0;b<a.s.length;b++)if(a.s[b])a.s[b](Wn(a));if(a.W!==a.getUid()&&a.N.length)for(a.W=a.getUid(),b=0;b<a.N.length;b++)if(a.N[b])a.N[b](Wn(a))}}k.cc=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&Sm(U(this))};k.Pc=function(a){var b=this;w(this.s,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&Tm(U(this));this.removeAuthTokenListener(a)};
k.addAuthTokenListener=function(a){var b=this;this.s.push(a);T(this,this.h.then(function(){b.l||Va(b.s,a)&&a(Wn(b))}))};k.removeAuthTokenListener=function(a){Xa(this.s,function(b){return b==a})};function Vn(a,b){a.N.push(b);T(a,a.h.then(function(){!a.l&&Va(a.N,b)&&a.W!==a.getUid()&&(a.W=a.getUid(),b(Wn(a)))}))}
k.delete=function(){this.l=!0;for(var a=0;a<this.P.length;a++)this.P[a].cancel("app-deleted");this.P=[];this.i&&(a=this.i,a.b.removeListener(xn("local"),a.a,this.ja));this.b&&(Ql(this.b,this),$l(this.b.b));return Promise.resolve()};function T(a,b){a.P.push(b);b.oa(function(){Wa(a.P,b)});return b}k.hc=function(a){return T(this,aj(this.a,a))};k.Bc=function(a){return!!fh(a)};
k.xb=function(a,b){var c=this;return T(this,E().then(function(){var d=new Sf(b);if(!d.c)throw new t("argument-error",$f+" must be true when sending sign in link to email");return bg(d)}).then(function(d){return c.a.xb(a,d)}).then(function(){}))};k.jd=function(a){return this.Sa(a).then(function(b){return b.data.email})};k.ob=function(a,b){return T(this,this.a.ob(a,b).then(function(){}))};k.Sa=function(a){return T(this,this.a.Sa(a).then(function(b){return new vf(b)}))};
k.kb=function(a){return T(this,this.a.kb(a).then(function(){}))};k.wb=function(a,b){var c=this;return T(this,E().then(function(){return"undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(d){return c.a.wb(a,d)}).then(function(){}))};k.Wc=function(a,b){return T(this,gm(this,a,b,q(this.ab,this)))};
k.Vc=function(a,b){var c=this;return T(this,E().then(function(){var d=b||re(),e=eh(a,d);d=fh(d);if(!d)throw new t("argument-error","Invalid email link!");if(d.tenantId!==c.T())throw new t("tenant-id-mismatch");return c.ab(e)}))};function Xn(){}Xn.prototype.render=function(){};Xn.prototype.reset=function(){};Xn.prototype.getResponse=function(){};Xn.prototype.execute=function(){};function Yn(){this.a={};this.b=1E12}var Zn=null;Yn.prototype.render=function(a,b){this.a[this.b.toString()]=new $n(a,b);return this.b++};Yn.prototype.reset=function(a){var b=ao(this,a);a=bo(a);b&&a&&(b.delete(),delete this.a[a])};Yn.prototype.getResponse=function(a){return(a=ao(this,a))?a.getResponse():null};Yn.prototype.execute=function(a){(a=ao(this,a))&&a.execute()};function ao(a,b){return(b=bo(b))?a.a[b]||null:null}function bo(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function $n(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=kc(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():nd(this.f,"click",this.i)}$n.prototype.getResponse=function(){co(this);return this.b};
$n.prototype.execute=function(){co(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Me();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};$n.prototype.delete=function(){co(this);this.g=!0;clearTimeout(this.a);this.a=null;xd(this.f,"click",this.i)};function co(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function eo(){}M(eo,"FACTOR_ID","phone");function fo(){}fo.prototype.g=function(){Zn||(Zn=new Yn);return E(Zn)};fo.prototype.c=function(){};var go=null;function ho(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var io=new qb(rb,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),jo=new Ze(3E4,6E4);
ho.prototype.g=function(a){var b=this;return new D(function(c,d){var e=setTimeout(function(){d(new t("network-request-failed"))},jo.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha)}else clearTimeout(e),d(new t("internal-error"));delete l[b.a]};var f=zb(io,{onload:b.a,hl:a||""});E(Bi(f)).o(function(){clearTimeout(e);d(new t("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(l.grecaptcha)})};ho.prototype.c=function(){this.b--};var ko=null;function lo(a,b,c,d,e,f,g){M(this,"type","recaptcha");this.c=this.f=null;this.J=!1;this.v=b;this.g=null;g?(go||(go=new fo),g=go):(ko||(ko=new ho),g=ko);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[mo])throw new t("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[no];if(!l.document)throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!kc(b)||!this.i&&kc(b).hasChildNodes())throw new t("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new Ii(a,f||null,e||null);this.u=d||function(){return null};var h=this;this.l=[];var m=this.a[oo];this.a[oo]=function(v){po(h,v);if("function"===typeof m)m(v);else if("string"===typeof m){var B=L(m,l);"function"===typeof B&&B(v)}};var p=this.a[qo];this.a[qo]=function(){po(h,null);if("function"===typeof p)p();else if("string"===typeof p){var v=
L(p,l);"function"===typeof v&&v()}}}var oo="callback",qo="expired-callback",mo="sitekey",no="size";function po(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b)}catch(d){}}function ro(a,b){Xa(a.l,function(c){return c==b})}function so(a,b){a.h.push(b);b.oa(function(){Wa(a.h,b)});return b}k=lo.prototype;
k.Ia=function(){var a=this;return this.f?this.f:this.f=so(this,E().then(function(){if(Se()&&!Je())return Ee();throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.u())}).then(function(b){a.g=b;return O(a.s,Jj,{})}).then(function(b){a.a[mo]=b.recaptchaSiteKey}).o(function(b){a.f=null;throw b;}))};
k.render=function(){to(this);var a=this;return so(this,this.Ia().then(function(){if(null===a.c){var b=a.v;if(!a.i){var c=kc(b);b=nc("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};k.verify=function(){to(this);var a=this;return so(this,this.render().then(function(b){return new D(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(f){f&&(ro(a,e),c(f))};a.l.push(e);a.i&&a.g.execute(a.c)}})}))};k.reset=function(){to(this);null!==this.c&&this.g.reset(this.c)};
function to(a){if(a.J)throw new t("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){to(this);this.J=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=kc(this.v);for(var b;b=a.firstChild;)a.removeChild(b)}};
function uo(a,b,c){var d=!1;try{this.b=c||_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.app()}catch(g){throw new t("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new t("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Ga()}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(g){}f=_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION?Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION,f):null;lo.call(this,c,a,b,function(){try{var g=e.b.auth().la()}catch(h){g=
null}return g},f,Ca(Da),d)}r(uo,lo);function vo(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new t("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=wo.length)throw new t("internal-error",
"Argument validator received an unsupported number of arguments.");c=wo[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new t("argument-error",a+" failed: "+d);}var wo="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:function(c){return"string"===typeof c}}}
function xo(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:function(c){return"boolean"===typeof c}}}function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:n}}function yo(a,b){return{name:a||"",K:"a function",optional:!!b,M:function(c){return"function"===typeof c}}}function zo(a,b){return{name:a||"",K:"null",optional:!!b,M:function(c){return null===c}}}function Ao(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}
function Bo(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof Fn)}}}function Co(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.app.App)}}}function Do(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.ka||!c)}}}
function Eo(){return{name:"multiFactorAssertion",K:"a valid multiFactorAssertion",optional:!1,M:function(a){return a?!!a.tb:!1}}}function Fo(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Go(a,b){return n(a)&&"string"===typeof a.type&&a.type===b&&"function"===typeof a.Ha}function Ho(a){return n(a)&&"string"===typeof a.uid}
function Io(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!(!a||"string"!==typeof a.type||"function"!==typeof a.verify)}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(e){return a.M(e)||b.M(e)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Jo(d,a[c],b[c].j)}}function Ko(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ua(function(e){return this[e]},c),set:ua(function(e,f,g,h){vo(e,[g],[h],!0);this[f]=h},d,c,b[c].lb),enumerable:!0})}}function Z(a,b,c,d){a[b]=Jo(b,c,d)}
function Jo(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);vo(e,c,g);return b.apply(this,g)}if(!c)return b;var e=Lo(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Lo(a){a=a.split(".");return a[a.length-1]};Y(Fn.prototype,{kb:{name:"applyActionCode",j:[V("code")]},Sa:{name:"checkActionCode",j:[V("code")]},ob:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},hc:{name:"fetchSignInMethodsForEmail",j:[V("email")]},ra:{name:"getRedirectResult",j:[]},Bc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},Hc:{name:"onAuthStateChanged",j:[X(W(),yo(),"nextOrObserver"),yo("opt_error",!0),yo("opt_completed",!0)]},Ic:{name:"onIdTokenChanged",
j:[X(W(),yo(),"nextOrObserver"),yo("opt_error",!0),yo("opt_completed",!0)]},wb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),zo(null,!0),"opt_actionCodeSettings",!0)]},xb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},yb:{name:"setPersistence",j:[V("persistence")]},Sc:{name:"signInAndRetrieveDataWithCredential",j:[Do()]},Ab:{name:"signInAnonymously",j:[]},ab:{name:"signInWithCredential",j:[Do()]},Tc:{name:"signInWithCustomToken",j:[V("token")]},
Uc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Vc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Wc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),Io()]},Xc:{name:"signInWithPopup",j:[Fo()]},Yc:{name:"signInWithRedirect",j:[Fo()]},dd:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(b){return!!(b&&b instanceof Im)}}}(),zo(),"user")]},Bb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,
!0)]},fd:{name:"useDeviceLanguage",j:[]},gd:{name:"useEmulator",j:[V("url"),W("options",!0)]},jd:{name:"verifyPasswordResetCode",j:[V("code")]}});Ko(Fn.prototype,{lc:{name:"languageCode",lb:X(V(),zo(),"languageCode")},ti:{name:"tenantId",lb:X(V(),zo(),"tenantId")}});Fn.Persistence=Rk;Fn.Persistence.LOCAL="local";Fn.Persistence.SESSION="session";Fn.Persistence.NONE="none";
Y(Im.prototype,{"delete":{name:"delete",j:[]},oc:{name:"getIdTokenResult",j:[xo("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[xo("opt_forceRefresh",!0)]},Cc:{name:"linkAndRetrieveDataWithCredential",j:[Do()]},rb:{name:"linkWithCredential",j:[Do()]},Dc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Io()]},Ec:{name:"linkWithPopup",j:[Fo()]},Fc:{name:"linkWithRedirect",j:[Fo()]},Lc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Do()]},ub:{name:"reauthenticateWithCredential",j:[Do()]},Mc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Io()]},Nc:{name:"reauthenticateWithPopup",j:[Fo()]},Oc:{name:"reauthenticateWithRedirect",j:[Fo()]},reload:{name:"reload",j:[]},vb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),zo(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},cd:{name:"unlink",j:[V("provider")]},Cb:{name:"updateEmail",j:[V("email")]},Db:{name:"updatePassword",j:[V("password")]},ed:{name:"updatePhoneNumber",j:[Do("phone")]},Eb:{name:"updateProfile",j:[W("profile")]},
Fb:{name:"verifyBeforeUpdateEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),zo(null,!0),"opt_actionCodeSettings",!0)]}});Y(Yn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(Xn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(D.prototype,{oa:{name:"finally"},o:{name:"catch"},then:{name:"then"}});
Ko(em.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",lb:xo("appVerificationDisabledForTesting")}});Y(fm.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(Bg,"fromJSON",function(a){a="string"===typeof a?JSON.parse(a):a;for(var b,c=[Mg,dh,kh,Jg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Zg,"credential",function(a,b){return new Yg(a,b)},[V("email"),V("password")]);Y(Yg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
Y(Qg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Qg,"credential",Rg,[X(V(),W(),"token")]);Z(Zg,"credentialWithLink",eh,[V("email"),V("emailLink")]);Y(Sg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sg,"credential",Tg,[X(V(),W(),"token")]);Y(Ug.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});
Z(Ug,"credential",Vg,[X(V(),X(W(),zo()),"idToken"),X(V(),zo(),"accessToken",!0)]);Y(Wg.prototype,{Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Wg,"credential",Xg,[X(V(),W(),"token"),V("secret",!0)]);Y(Pg.prototype,{Ca:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),zo()),"optionsOrIdToken"),X(V(),zo(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(Kg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
Y(Eg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Z(lh,"credential",ph,[V("verificationId"),V("verificationCode")]);
Y(lh.prototype,{gb:{name:"verifyPhoneNumber",j:[X(V(),function(a,b){return{name:a||"phoneInfoOptions",K:"valid phone info options",optional:!!b,M:function(c){return c?c.session&&c.phoneNumber?Go(c.session,zg)&&"string"===typeof c.phoneNumber:c.session&&c.multiFactorHint?Go(c.session,Ag)&&Ho(c.multiFactorHint):c.session&&c.multiFactorUid?Go(c.session,Ag)&&"string"===typeof c.multiFactorUid:c.phoneNumber?"string"===typeof c.phoneNumber:!1:!1}}}(),"phoneInfoOptions"),Io()]}});
Y(gh.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(t.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(yh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(xh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(lm.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(im.prototype,{Rc:{name:"resolveSignIn",j:[Eo()]}});
Y(tm.prototype,{Sb:{name:"getSession",j:[]},fc:{name:"enroll",j:[Eo(),V("displayName",!0)]},bd:{name:"unenroll",j:[X({name:"multiFactorInfo",K:"a valid multiFactorInfo",optional:!1,M:Ho},V(),"multiFactorInfoIdentifier")]}});Y(uo.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(Jf,"parseLink",Rf,[V("link")]);Z(eo,"assertion",function(a){return new rm(a)},[Do("phone")]);
(function(){if("undefined"!==typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL&&_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.registerComponent){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Af,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:Cf,VERIFY_AND_CHANGE_EMAIL:Bf,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:Fn,AuthCredential:Bg,Error:t};Z(a,"EmailAuthProvider",Zg,[]);Z(a,"FacebookAuthProvider",Qg,[]);Z(a,"GithubAuthProvider",Sg,[]);Z(a,"GoogleAuthProvider",Ug,[]);Z(a,"TwitterAuthProvider",Wg,[]);
Z(a,"OAuthProvider",Pg,[V("providerId")]);Z(a,"SAMLAuthProvider",Og,[V("providerId")]);Z(a,"PhoneAuthProvider",lh,[Bo()]);Z(a,"RecaptchaVerifier",uo,[X(V(),Ao(),"recaptchaContainer"),W("recaptchaParameters",!0),Co()]);Z(a,"ActionCodeURL",Jf,[]);Z(a,"PhoneMultiFactorGenerator",eo,[]);_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.registerComponent({name:"auth",instanceFactory:function(b){b=b.getProvider("app").getImmediate();return new Fn(b)},multipleInstances:!1,serviceProps:a,instantiationMode:"LAZY",type:"PUBLIC",onInstanceCreated:function(b){b.getProvider("auth-internal").initialize()}});
_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(b){b=b.getProvider("auth").getImmediate();return{getUid:q(b.getUid,b),getToken:q(b.nc,b),addAuthTokenListener:q(b.cc,b),removeAuthTokenListener:q(b.Pc,b)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"});_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.registerVersion("@firebase/auth","0.16.8");_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.INTERNAL.extendNamespace({User:Im})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
})();}).apply(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": function() { return /* binding */ Component; },
/* harmony export */   "ComponentContainer": function() { return /* binding */ ComponentContainer; },
/* harmony export */   "Provider": function() { return /* binding */ Provider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@firebase/component/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");



/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    Component.prototype.setInstanceCreatedCallback = function (callback) {
        this.onInstanceCreated = callback;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error("Service " + this.name + " is not available");
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var services;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); }))))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.isInitialized = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instances.has(identifier);
    };
    Provider.prototype.initialize = function (opts) {
        var e_2, _a;
        if (opts === void 0) { opts = {}; }
        var _b = opts.options, options = _b === void 0 ? {} : _b;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
        }
        if (!this.isComponentSet()) {
            throw Error("Component " + this.name + " has not been registered yet");
        }
        var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        try {
            // resolve any pending promise waiting for the service instance
            for (var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                    instanceDeferred.resolve(instance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return instance;
    };
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    Provider.prototype.onInit = function (callback, identifier) {
        var _a;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        var existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return function () {
            existingCallbacks.delete(callback);
        };
    };
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
        var e_3, _a;
        var callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        try {
            for (var callbacks_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                    callback(instance, identifier);
                }
                catch (_b) {
                    // ignore errors in the onInit callback
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Provider.prototype.getOrInitializeService = function (_a) {
        var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
        var instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_c) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    Provider.prototype.shouldAutoInitialize = function () {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@firebase/component/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": function() { return /* binding */ LogLevel; },
/* harmony export */   "Logger": function() { return /* binding */ Logger; },
/* harmony export */   "setLogLevel": function() { return /* binding */ setLogLevel; },
/* harmony export */   "setUserLogHandler": function() { return /* binding */ setUserLogHandler; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": function() { return /* binding */ CONSTANTS; },
/* harmony export */   "Deferred": function() { return /* binding */ Deferred; },
/* harmony export */   "ErrorFactory": function() { return /* binding */ ErrorFactory; },
/* harmony export */   "FirebaseError": function() { return /* binding */ FirebaseError; },
/* harmony export */   "MAX_VALUE_MILLIS": function() { return /* binding */ MAX_VALUE_MILLIS; },
/* harmony export */   "RANDOM_FACTOR": function() { return /* binding */ RANDOM_FACTOR; },
/* harmony export */   "Sha1": function() { return /* binding */ Sha1; },
/* harmony export */   "areCookiesEnabled": function() { return /* binding */ areCookiesEnabled; },
/* harmony export */   "assert": function() { return /* binding */ assert; },
/* harmony export */   "assertionError": function() { return /* binding */ assertionError; },
/* harmony export */   "async": function() { return /* binding */ async; },
/* harmony export */   "base64": function() { return /* binding */ base64; },
/* harmony export */   "base64Decode": function() { return /* binding */ base64Decode; },
/* harmony export */   "base64Encode": function() { return /* binding */ base64Encode; },
/* harmony export */   "calculateBackoffMillis": function() { return /* binding */ calculateBackoffMillis; },
/* harmony export */   "contains": function() { return /* binding */ contains; },
/* harmony export */   "createMockUserToken": function() { return /* binding */ createMockUserToken; },
/* harmony export */   "createSubscribe": function() { return /* binding */ createSubscribe; },
/* harmony export */   "decode": function() { return /* binding */ decode; },
/* harmony export */   "deepCopy": function() { return /* binding */ deepCopy; },
/* harmony export */   "deepEqual": function() { return /* binding */ deepEqual; },
/* harmony export */   "deepExtend": function() { return /* binding */ deepExtend; },
/* harmony export */   "errorPrefix": function() { return /* binding */ errorPrefix; },
/* harmony export */   "extractQuerystring": function() { return /* binding */ extractQuerystring; },
/* harmony export */   "getGlobal": function() { return /* binding */ getGlobal; },
/* harmony export */   "getModularInstance": function() { return /* binding */ getModularInstance; },
/* harmony export */   "getUA": function() { return /* binding */ getUA; },
/* harmony export */   "isAdmin": function() { return /* binding */ isAdmin; },
/* harmony export */   "isBrowser": function() { return /* binding */ isBrowser; },
/* harmony export */   "isBrowserExtension": function() { return /* binding */ isBrowserExtension; },
/* harmony export */   "isElectron": function() { return /* binding */ isElectron; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "isIE": function() { return /* binding */ isIE; },
/* harmony export */   "isIndexedDBAvailable": function() { return /* binding */ isIndexedDBAvailable; },
/* harmony export */   "isMobileCordova": function() { return /* binding */ isMobileCordova; },
/* harmony export */   "isNode": function() { return /* binding */ isNode; },
/* harmony export */   "isNodeSdk": function() { return /* binding */ isNodeSdk; },
/* harmony export */   "isReactNative": function() { return /* binding */ isReactNative; },
/* harmony export */   "isSafari": function() { return /* binding */ isSafari; },
/* harmony export */   "isUWP": function() { return /* binding */ isUWP; },
/* harmony export */   "isValidFormat": function() { return /* binding */ isValidFormat; },
/* harmony export */   "isValidTimestamp": function() { return /* binding */ isValidTimestamp; },
/* harmony export */   "issuedAtTime": function() { return /* binding */ issuedAtTime; },
/* harmony export */   "jsonEval": function() { return /* binding */ jsonEval; },
/* harmony export */   "map": function() { return /* binding */ map; },
/* harmony export */   "ordinal": function() { return /* binding */ ordinal; },
/* harmony export */   "querystring": function() { return /* binding */ querystring; },
/* harmony export */   "querystringDecode": function() { return /* binding */ querystringDecode; },
/* harmony export */   "safeGet": function() { return /* binding */ safeGet; },
/* harmony export */   "stringLength": function() { return /* binding */ stringLength; },
/* harmony export */   "stringToByteArray": function() { return /* binding */ stringToByteArray; },
/* harmony export */   "stringify": function() { return /* binding */ stringify; },
/* harmony export */   "validateArgCount": function() { return /* binding */ validateArgCount; },
/* harmony export */   "validateCallback": function() { return /* binding */ validateCallback; },
/* harmony export */   "validateContextObject": function() { return /* binding */ validateContextObject; },
/* harmony export */   "validateIndexedDBOpenable": function() { return /* binding */ validateIndexedDBOpenable; },
/* harmony export */   "validateNamespace": function() { return /* binding */ validateNamespace; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@firebase/util/node_modules/tslib/tslib.es6.js");


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    var header = {
        alg: 'none',
        type: 'JWT'
    };
    var project = projectId || 'demo-project';
    var iat = token.iat || 0;
    var sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    var payload = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ 
        // Set all required fields to decent defaults
        iss: "https://securetoken.google.com/" + project, aud: project, iat: iat, exp: iat + 3600, auth_time: iat, sub: sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    var signature = '';
    return [
        base64.encodeString(JSON.stringify(header), /*webSafe=*/ false),
        base64.encodeString(JSON.stringify(payload), /*webSafe=*/ false),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise(function (resolve, reject) {
        try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = self.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function () {
                request_1.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist_1) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                }
                resolve(true);
            };
            request_1.onupgradeneeded = function () {
                preExist_1 = false;
            };
            request_1.onerror = function () {
                var _a;
                reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (!navigator || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(FirebaseError, _super);
    function FirebaseError(code, message, customData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.customData = customData;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
        var k = aKeys_1[_i];
        if (!bKeys.includes(k)) {
            return false;
        }
        var aProp = a[k];
        var bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (var _a = 0, bKeys_1 = bKeys; _a < bKeys_1.length; _a++) {
        var k = bKeys_1[_a];
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var _a = token.split('='), key = _a[0], value = _a[1];
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    var queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    var fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return fnName + " failed: " + argName + " argument ";
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
    if (intervalMillis === void 0) { intervalMillis = DEFAULT_INTERVAL_MILLIS; }
    if (backoffFactor === void 0) { backoffFactor = DEFAULT_BACKOFF_FACTOR; }
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    var randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return "" + i;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    var cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    var dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/util/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./components/ValidateSignup.js":
/*!**************************************!*\
  !*** ./components/ValidateSignup.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined;


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var ValidateSignup = function ValidateSignup() {
  var schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6).max(12).required(),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_1__.ref('password'), null], 'Passwords must match').required()
  }); //submit handler

  var submitSignup = function submitSignup(values, _ref) {
    var resetForm = _ref.resetForm;
    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
      setFinished(true);
      resetForm();
      router.push('/dashboard');
      localStorage.setItem('token', response.user.refreshToken);
      console.log(response);
      var user = userCredential.user; // ...
    })["catch"](function (error) {
      console.log(error.message);
      setError(true);
      setErrorMessage(error.message); // ..
    });
  };

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schema,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
        handleChange = _ref2.handleChange,
        values = _ref2.values,
        touched = _ref2.touched,
        errors = _ref2.errors;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, "Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: handleChange,
      value: values.email,
      isValid: touched.email && !errors.email,
      isInvalid: touched.email && errors.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: handleChange,
      value: values.password,
      isValid: touched.password && !errors.password,
      isInvalid: touched.password && errors.password,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
      className: "password",
      controlId: "confirmPassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      onChange: handleChange,
      value: values.confirmPassword,
      isValid: touched.confirmPassword && !errors.confirmPassword,
      isInvalid: touched.confirmPassword && errors.confirmPassword,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, errors.confirmPassword)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, "Submit")))));
  });
};

_c = ValidateSignup;
/* harmony default export */ __webpack_exports__["default"] = (ValidateSignup);

var _c;

$RefreshReg$(_c, "ValidateSignup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2F1dGguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmFsaWRhdGVTaWdudXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hdXRoL2Rpc3QvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRlU2lnbnVwIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInN1Ym1pdFNpZ251cCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsImF1dGgiLCJnZXRBdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwic2V0RmluaXNoZWQiLCJyb3V0ZXIiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlc3BvbnNlIiwidXNlciIsInJlZnJlc2hUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJzZXRFcnJvciIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lGO0FBQzlDO0FBQ007O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscURBQXFELFNBQVM7QUFDOUQ7QUFDQSxtRUFBbUUsU0FBUztBQUM1RSxzRUFBc0UsU0FBUztBQUMvRSxrRUFBa0UsU0FBUztBQUMzRSx5RUFBeUUsU0FBUztBQUNsRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVk7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7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NEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsNENBQTRDLFlBQVksRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRTREO0FBQzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVI0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFRLEU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxQkFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQU07QUFDckIsZUFBZSxxQkFBTTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBO0FBQUE7QUFBQSxPQUNHMkIsTUFBTSxDQUFDM0IsZUFEVixDQWJGLENBakJGLEVBbUNFLE1BQUMsbURBQUQ7QUFBUSxhQUFPLEVBQUMsU0FBaEI7QUFBMEIsVUFBSSxFQUFDLFFBQS9CO0FBQXdDLGVBQVMsRUFBQyxRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DRixDQW5CRixDQURGLENBREYsQ0FERDtBQUFBLEdBUkgsQ0FERjtBQTRFRCxDQTFHRDs7S0FBTVQsYztBQTJHTiwrREFBZUEsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hId0I7QUFDeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2lnbnVwLjliNTUzOWM1ZjE0MGViYTljNjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgZGVlcENvcHksIGNvbnRhaW5zLCBkZWVwRXh0ZW5kLCBjcmVhdGVTdWJzY3JpYmUsIGlzQnJvd3NlciwgaXNOb2RlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29udGFpbmVyLCBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlciwgc2V0TG9nTGV2ZWwsIHNldFVzZXJMb2dIYW5kbGVyIH0gZnJvbSAnQGZpcmViYXNlL2xvZ2dlcic7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYSQxO1xyXG52YXIgRVJST1JTID0gKF9hJDEgPSB7fSxcclxuICAgIF9hJDFbXCJuby1hcHBcIiAvKiBOT19BUFAgKi9dID0gXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXHJcbiAgICAgICAgJ2NhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKScsXHJcbiAgICBfYSQxW1wiYmFkLWFwcC1uYW1lXCIgLyogQkFEX0FQUF9OQU1FICovXSA9IFwiSWxsZWdhbCBBcHAgbmFtZTogJ3skYXBwTmFtZX1cIixcclxuICAgIF9hJDFbXCJkdXBsaWNhdGUtYXBwXCIgLyogRFVQTElDQVRFX0FQUCAqL10gPSBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBleGlzdHNcIixcclxuICAgIF9hJDFbXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcclxuICAgIF9hJDFbXCJpbnZhbGlkLWFwcC1hcmd1bWVudFwiIC8qIElOVkFMSURfQVBQX0FSR1VNRU5UICovXSA9ICdmaXJlYmFzZS57JGFwcE5hbWV9KCkgdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50IG9yIGEgJyArXHJcbiAgICAgICAgJ0ZpcmViYXNlIEFwcCBpbnN0YW5jZS4nLFxyXG4gICAgX2EkMVtcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi9dID0gJ0ZpcnN0IGFyZ3VtZW50IHRvIGBvbkxvZ2AgbXVzdCBiZSBudWxsIG9yIGEgZnVuY3Rpb24uJyxcclxuICAgIF9hJDEpO1xyXG52YXIgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3RvcnkoJ2FwcCcsICdGaXJlYmFzZScsIEVSUk9SUyk7XG5cbnZhciBuYW1lJGMgPSBcIkBmaXJlYmFzZS9hcHBcIjtcbnZhciB2ZXJzaW9uJDEgPSBcIjAuNi4yOVwiO1xuXG52YXIgbmFtZSRiID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5cbnZhciBuYW1lJGEgPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2tcIjtcblxudmFyIG5hbWUkOSA9IFwiQGZpcmViYXNlL2F1dGhcIjtcblxudmFyIG5hbWUkOCA9IFwiQGZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbnZhciBuYW1lJDcgPSBcIkBmaXJlYmFzZS9mdW5jdGlvbnNcIjtcblxudmFyIG5hbWUkNiA9IFwiQGZpcmViYXNlL2luc3RhbGxhdGlvbnNcIjtcblxudmFyIG5hbWUkNSA9IFwiQGZpcmViYXNlL21lc3NhZ2luZ1wiO1xuXG52YXIgbmFtZSQ0ID0gXCJAZmlyZWJhc2UvcGVyZm9ybWFuY2VcIjtcblxudmFyIG5hbWUkMyA9IFwiQGZpcmViYXNlL3JlbW90ZS1jb25maWdcIjtcblxudmFyIG5hbWUkMiA9IFwiQGZpcmViYXNlL3N0b3JhZ2VcIjtcblxudmFyIG5hbWUkMSA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2Utd3JhcHBlclwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgX2E7XHJcbnZhciBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcclxudmFyIFBMQVRGT1JNX0xPR19TVFJJTkcgPSAoX2EgPSB7fSxcclxuICAgIF9hW25hbWUkY10gPSAnZmlyZS1jb3JlJyxcclxuICAgIF9hW25hbWUkYl0gPSAnZmlyZS1hbmFseXRpY3MnLFxyXG4gICAgX2FbbmFtZSRhXSA9ICdmaXJlLWFwcC1jaGVjaycsXHJcbiAgICBfYVtuYW1lJDldID0gJ2ZpcmUtYXV0aCcsXHJcbiAgICBfYVtuYW1lJDhdID0gJ2ZpcmUtcnRkYicsXHJcbiAgICBfYVtuYW1lJDddID0gJ2ZpcmUtZm4nLFxyXG4gICAgX2FbbmFtZSQ2XSA9ICdmaXJlLWlpZCcsXHJcbiAgICBfYVtuYW1lJDVdID0gJ2ZpcmUtZmNtJyxcclxuICAgIF9hW25hbWUkNF0gPSAnZmlyZS1wZXJmJyxcclxuICAgIF9hW25hbWUkM10gPSAnZmlyZS1yYycsXHJcbiAgICBfYVtuYW1lJDJdID0gJ2ZpcmUtZ2NzJyxcclxuICAgIF9hW25hbWUkMV0gPSAnZmlyZS1mc3QnLFxyXG4gICAgX2FbJ2ZpcmUtanMnXSA9ICdmaXJlLWpzJyxcclxuICAgIF9hW25hbWVdID0gJ2ZpcmUtanMtYWxsJyxcclxuICAgIF9hKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0BmaXJlYmFzZS9hcHAnKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEdsb2JhbCBjb250ZXh0IG9iamVjdCBmb3IgYSBjb2xsZWN0aW9uIG9mIHNlcnZpY2VzIHVzaW5nXHJcbiAqIGEgc2hhcmVkIGF1dGhlbnRpY2F0aW9uIHN0YXRlLlxyXG4gKi9cclxudmFyIEZpcmViYXNlQXBwSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZpcmViYXNlQXBwSW1wbChvcHRpb25zLCBjb25maWcsIGZpcmViYXNlXykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5maXJlYmFzZV8gPSBmaXJlYmFzZV87XHJcbiAgICAgICAgdGhpcy5pc0RlbGV0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYW1lXyA9IGNvbmZpZy5uYW1lO1xyXG4gICAgICAgIHRoaXMuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXyA9XHJcbiAgICAgICAgICAgIGNvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zXyA9IGRlZXBDb3B5KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbXBvbmVudENvbnRhaW5lcihjb25maWcubmFtZSk7XHJcbiAgICAgICAgLy8gYWRkIGl0c2VsZiB0byBjb250YWluZXJcclxuICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQobmV3IENvbXBvbmVudCgnYXBwJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXM7IH0sIFwiUFVCTElDXCIgLyogUFVCTElDICovKSk7XHJcbiAgICAgICAgLy8gcG9wdWxhdGUgQ29tcG9uZW50Q29udGFpbmVyIHdpdGggZXhpc3RpbmcgY29tcG9uZW50c1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VfLklOVEVSTkFMLmNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZSwgXCJhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWRfKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXyA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZF8oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWRfKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5maXJlYmFzZV8uSU5URVJOQUwucmVtb3ZlQXBwKF90aGlzLm5hbWVfKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKS5tYXAoZnVuY3Rpb24gKHByb3ZpZGVyKSB7IHJldHVybiBwcm92aWRlci5kZWxldGUoKTsgfSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXNEZWxldGVkXyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBzZXJ2aWNlIGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFwcCAoY3JlYXRpbmcgaXRcclxuICAgICAqIG9uIGRlbWFuZCksIGlkZW50aWZpZWQgYnkgdGhlIHBhc3NlZCBpbnN0YW5jZUlkZW50aWZpZXIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogQ3VycmVudGx5IHN0b3JhZ2UgYW5kIGZ1bmN0aW9ucyBhcmUgdGhlIG9ubHkgb25lcyB0aGF0IGFyZSBsZXZlcmFnaW5nIHRoaXNcclxuICAgICAqIGZ1bmN0aW9uYWxpdHkuIFRoZXkgaW52b2tlIGl0IGJ5IGNhbGxpbmc6XHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICogZmlyZWJhc2UuYXBwKCkuc3RvcmFnZSgnU1RPUkFHRSBCVUNLRVQgSUQnKVxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHNlcnZpY2UgbmFtZSBpcyBwYXNzZWQgdG8gdGhpcyBhbHJlYWR5XHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZS5fZ2V0U2VydmljZSA9IGZ1bmN0aW9uIChuYW1lLCBpbnN0YW5jZUlkZW50aWZpZXIpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlSWRlbnRpZmllciA9PT0gdm9pZCAwKSB7IGluc3RhbmNlSWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWRfKCk7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZSBpZiBJbnN0YXRpYXRpb25Nb2RlIGlzIGBFWFBMSUNJVGAuXHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIobmFtZSk7XHJcbiAgICAgICAgaWYgKCFwcm92aWRlci5pc0luaXRpYWxpemVkKCkgJiZcclxuICAgICAgICAgICAgKChfYSA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5zdGFudGlhdGlvbk1vZGUpID09PSBcIkVYUExJQ0lUXCIgLyogRVhQTElDSVQgKi8pIHtcclxuICAgICAgICAgICAgcHJvdmlkZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnZXRJbW1lZGlhdGUgd2lsbCBhbHdheXMgc3VjY2VlZCBiZWNhdXNlIF9nZXRTZXJ2aWNlIGlzIG9ubHkgY2FsbGVkIGZvciByZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IGluc3RhbmNlSWRlbnRpZmllclxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc2VydmljZSBpbnN0YW5jZSBmcm9tIHRoZSBjYWNoZSwgc28gd2Ugd2lsbCBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgICogd2hlbiBwZW9wbGUgdHJ5IHRvIGdldCB0aGlzIHNlcnZpY2UgYWdhaW4uXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogY3VycmVudGx5IG9ubHkgZmlyZXN0b3JlIGlzIHVzaW5nIHRoaXMgZnVuY3Rpb25hbGl0eSB0byBzdXBwb3J0IGZpcmVzdG9yZSBzaHV0ZG93bi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgc2VydmljZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VJZGVudGlmaWVyIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIGFsbG93ZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLl9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlSWRlbnRpZmllciA9PT0gdm9pZCAwKSB7IGluc3RhbmNlSWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIobmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuX2FkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiQ29tcG9uZW50IFwiICsgY29tcG9uZW50Lm5hbWUgKyBcIiBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCBcIiArIHRoaXMubmFtZSwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ6IHRoaXMuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cclxuICAgICAqIHVzZSBiZWZvcmUgcGVyZm9ybWluZyBBUEkgYWN0aW9ucyBvbiB0aGUgQXBwLlxyXG4gICAgICovXHJcbiAgICBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLmNoZWNrRGVzdHJveWVkXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLWRlbGV0ZWRcIiAvKiBBUFBfREVMRVRFRCAqLywgeyBhcHBOYW1lOiB0aGlzLm5hbWVfIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRmlyZWJhc2VBcHBJbXBsO1xyXG59KCkpO1xyXG4vLyBQcmV2ZW50IGRlYWQtY29kZSBlbGltaW5hdGlvbiBvZiB0aGVzZSBtZXRob2RzIHcvbyBpbnZhbGlkIHByb3BlcnR5XHJcbi8vIGNvcHlpbmcuXHJcbihGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLm5hbWUgJiYgRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZS5vcHRpb25zKSB8fFxyXG4gICAgRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZS5kZWxldGUgfHxcclxuICAgIGNvbnNvbGUubG9nKCdkYycpO1xuXG52YXIgdmVyc2lvbiA9IFwiOC44LjFcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEJlY2F1c2UgYXV0aCBjYW4ndCBzaGFyZSBjb2RlIHdpdGggb3RoZXIgY29tcG9uZW50cywgd2UgYXR0YWNoIHRoZSB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4gKiBpbiBhbiBpbnRlcm5hbCBuYW1lc3BhY2UgdG8gc2hhcmUgY29kZS5cclxuICogVGhpcyBmdW5jdGlvbiByZXR1cm4gYSBmaXJlYmFzZSBuYW1lc3BhY2Ugb2JqZWN0IHdpdGhvdXRcclxuICogYW55IHV0aWxpdHkgZnVuY3Rpb25zLCBzbyBpdCBjYW4gYmUgc2hhcmVkIGJldHdlZW4gdGhlIHJlZ3VsYXIgZmlyZWJhc2VOYW1lc3BhY2UgYW5kXHJcbiAqIHRoZSBsaXRlIHZlcnNpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZUNvcmUoZmlyZWJhc2VBcHBJbXBsKSB7XHJcbiAgICB2YXIgYXBwcyA9IHt9O1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHZhciBjb21wb25lbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgLy8gQSBuYW1lc3BhY2UgaXMgYSBwbGFpbiBKYXZhU2NyaXB0IE9iamVjdC5cclxuICAgIHZhciBuYW1lc3BhY2UgPSB7XHJcbiAgICAgICAgLy8gSGFjayB0byBwcmV2ZW50IEJhYmVsIGZyb20gbW9kaWZ5aW5nIHRoZSBvYmplY3QgcmV0dXJuZWRcclxuICAgICAgICAvLyBhcyB0aGUgZmlyZWJhc2UgbmFtZXNwYWNlLlxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBfX2VzTW9kdWxlOiB0cnVlLFxyXG4gICAgICAgIGluaXRpYWxpemVBcHA6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGFwcDogYXBwLFxyXG4gICAgICAgIHJlZ2lzdGVyVmVyc2lvbjogcmVnaXN0ZXJWZXJzaW9uLFxyXG4gICAgICAgIHNldExvZ0xldmVsOiBzZXRMb2dMZXZlbCxcclxuICAgICAgICBvbkxvZzogb25Mb2csXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGFwcHM6IG51bGwsXHJcbiAgICAgICAgU0RLX1ZFUlNJT046IHZlcnNpb24sXHJcbiAgICAgICAgSU5URVJOQUw6IHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJDb21wb25lbnQ6IHJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICByZW1vdmVBcHA6IHJlbW92ZUFwcCxcclxuICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICAgICAgdXNlQXNTZXJ2aWNlOiB1c2VBc1NlcnZpY2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gSW5qZWN0IGEgY2lyY3VsYXIgZGVmYXVsdCBleHBvcnQgdG8gYWxsb3cgQmFiZWwgdXNlcnMgd2hvIHdlcmUgcHJldmlvdXNseVxyXG4gICAgLy8gdXNpbmc6XHJcbiAgICAvL1xyXG4gICAgLy8gICBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG4gICAgLy8gICB3aGljaCBiZWNvbWVzOiB2YXIgZmlyZWJhc2UgPSByZXF1aXJlKCdmaXJlYmFzZScpLmRlZmF1bHQ7XHJcbiAgICAvL1xyXG4gICAgLy8gaW5zdGVhZCBvZlxyXG4gICAgLy9cclxuICAgIC8vICAgaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG4gICAgLy8gICB3aGljaCBiZWNvbWVzOiB2YXIgZmlyZWJhc2UgPSByZXF1aXJlKCdmaXJlYmFzZScpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIG5hbWVzcGFjZVsnZGVmYXVsdCddID0gbmFtZXNwYWNlO1xyXG4gICAgLy8gZmlyZWJhc2UuYXBwcyBpcyBhIHJlYWQtb25seSBnZXR0ZXIuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmFtZXNwYWNlLCAnYXBwcycsIHtcclxuICAgICAgICBnZXQ6IGdldEFwcHNcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYnkgQXBwLmRlbGV0ZSgpIC0gYnV0IGJlZm9yZSBhbnkgc2VydmljZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBBcHBcclxuICAgICAqIGFyZSBkZWxldGVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBcHAobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSBhcHBzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEFwcCBvYmplY3QgZm9yIGEgZ2l2ZW4gbmFtZSAob3IgREVGQVVMVCkuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGFwcChuYW1lKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgREVGQVVMVF9FTlRSWV9OQU1FO1xyXG4gICAgICAgIGlmICghY29udGFpbnMoYXBwcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcHBcIiAvKiBOT19BUFAgKi8sIHsgYXBwTmFtZTogbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFwcHNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBhcHBbJ0FwcCddID0gZmlyZWJhc2VBcHBJbXBsO1xyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChvcHRpb25zLCByYXdDb25maWcpIHtcclxuICAgICAgICBpZiAocmF3Q29uZmlnID09PSB2b2lkIDApIHsgcmF3Q29uZmlnID0ge307IH1cclxuICAgICAgICBpZiAodHlwZW9mIHJhd0NvbmZpZyAhPT0gJ29iamVjdCcgfHwgcmF3Q29uZmlnID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSByYXdDb25maWc7XHJcbiAgICAgICAgICAgIHJhd0NvbmZpZyA9IHsgbmFtZTogbmFtZV8xIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25maWcgPSByYXdDb25maWc7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uZmlnLm5hbWUgPSBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImJhZC1hcHAtbmFtZVwiIC8qIEJBRF9BUFBfTkFNRSAqLywge1xyXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogU3RyaW5nKG5hbWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29udGFpbnMoYXBwcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJkdXBsaWNhdGUtYXBwXCIgLyogRFVQTElDQVRFX0FQUCAqLywgeyBhcHBOYW1lOiBuYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXBwID0gbmV3IGZpcmViYXNlQXBwSW1wbChvcHRpb25zLCBjb25maWcsIG5hbWVzcGFjZSk7XHJcbiAgICAgICAgYXBwc1tuYW1lXSA9IGFwcDtcclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIG5vbi1kZWxldGVkIEZpcmViYXNlQXBwcy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0QXBwcygpIHtcclxuICAgICAgICAvLyBNYWtlIGEgY29weSBzbyBjYWxsZXIgY2Fubm90IG11dGF0ZSB0aGUgYXBwcyBsaXN0LlxyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhhcHBzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGFwcHNbbmFtZV07IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQubmFtZTtcclxuICAgICAgICBpZiAoY29tcG9uZW50cy5oYXMoY29tcG9uZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgXCIgKyBjb21wb25lbnROYW1lICsgXCIuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LnR5cGUgPT09IFwiUFVCTElDXCIgLyogUFVCTElDICovXHJcbiAgICAgICAgICAgICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlW2NvbXBvbmVudE5hbWVdXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXBvbmVudHMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIHNlcnZpY2UgbmFtZXNwYWNlIGZvciBwdWJsaWMgY29tcG9uZW50c1xyXG4gICAgICAgIGlmIChjb21wb25lbnQudHlwZSA9PT0gXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi8pIHtcclxuICAgICAgICAgICAgLy8gVGhlIFNlcnZpY2UgbmFtZXNwYWNlIGlzIGFuIGFjY2Vzc29yIGZ1bmN0aW9uIC4uLlxyXG4gICAgICAgICAgICB2YXIgc2VydmljZU5hbWVzcGFjZSA9IGZ1bmN0aW9uIChhcHBBcmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcHBBcmcgPT09IHZvaWQgMCkgeyBhcHBBcmcgPSBhcHAoKTsgfVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXBwQXJnW2NvbXBvbmVudE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW52YWxpZCBhcmd1bWVudC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgaW4gdGhlIGZvbGxvd2luZyBjYXNlOiBmaXJlYmFzZS5zdG9yYWdlKCdnczovJylcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtYXBwLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9BUFBfQVJHVU1FTlQgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogY29tcG9uZW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRm9yd2FyZCBzZXJ2aWNlIGluc3RhbmNlIGxvb2t1cCB0byB0aGUgRmlyZWJhc2VBcHAuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcEFyZ1tjb21wb25lbnROYW1lXSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyAuLi4gYW5kIGEgY29udGFpbmVyIGZvciBzZXJ2aWNlLWxldmVsIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2VydmljZVByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQoc2VydmljZU5hbWVzcGFjZSwgY29tcG9uZW50LnNlcnZpY2VQcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgbmFtZXNwYWNlW2NvbXBvbmVudE5hbWVdID0gc2VydmljZU5hbWVzcGFjZTtcclxuICAgICAgICAgICAgLy8gUGF0Y2ggdGhlIEZpcmViYXNlQXBwSW1wbCBwcm90b3R5cGVcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgZmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZVtjb21wb25lbnROYW1lXSA9XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGUgZXNsaW50IGRpc2FibGUgY2FuIGJlIHJlbW92ZWQgYW5kIHRoZSAnaWdub3JlUmVzdEFyZ3MnXHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb24gYWRkZWQgdG8gdGhlIG5vLWV4cGxpY2l0LWFueSBydWxlIHdoZW4gRVNsaW50IHJlbGVhc2VzIGl0LlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZpY2VGeG4gPSB0aGlzLl9nZXRTZXJ2aWNlLmJpbmQodGhpcywgY29tcG9uZW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2VGeG4uYXBwbHkodGhpcywgY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzID8gYXJncyA6IFtdKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFkZCB0aGUgY29tcG9uZW50IHRvIGV4aXN0aW5nIGFwcCBpbnN0YW5jZXNcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMoYXBwcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhcHBOYW1lID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBhcHBzW2FwcE5hbWVdLl9hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC50eXBlID09PSBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqL1xyXG4gICAgICAgICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2VbY29tcG9uZW50TmFtZV1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJWZXJzaW9uKGxpYnJhcnlLZXlPck5hbWUsIHZlcnNpb24sIHZhcmlhbnQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgLy8gVE9ETzogV2UgY2FuIHVzZSB0aGlzIGNoZWNrIHRvIHdoaXRlbGlzdCBzdHJpbmdzIHdoZW4vaWYgd2Ugc2V0IHVwXHJcbiAgICAgICAgLy8gYSBnb29kIHdoaXRlbGlzdCBzeXN0ZW0uXHJcbiAgICAgICAgdmFyIGxpYnJhcnkgPSAoX2EgPSBQTEFURk9STV9MT0dfU1RSSU5HW2xpYnJhcnlLZXlPck5hbWVdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBsaWJyYXJ5S2V5T3JOYW1lO1xyXG4gICAgICAgIGlmICh2YXJpYW50KSB7XHJcbiAgICAgICAgICAgIGxpYnJhcnkgKz0gXCItXCIgKyB2YXJpYW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGlicmFyeU1pc21hdGNoID0gbGlicmFyeS5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgICAgIHZhciB2ZXJzaW9uTWlzbWF0Y2ggPSB2ZXJzaW9uLm1hdGNoKC9cXHN8XFwvLyk7XHJcbiAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIHdhcm5pbmcgPSBbXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byByZWdpc3RlciBsaWJyYXJ5IFxcXCJcIiArIGxpYnJhcnkgKyBcIlxcXCIgd2l0aCB2ZXJzaW9uIFxcXCJcIiArIHZlcnNpb24gKyBcIlxcXCI6XCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZy5wdXNoKFwibGlicmFyeSBuYW1lIFxcXCJcIiArIGxpYnJhcnkgKyBcIlxcXCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFxcXCIvXFxcIilcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCAmJiB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmcucHVzaCgnYW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZy5wdXNoKFwidmVyc2lvbiBuYW1lIFxcXCJcIiArIHZlcnNpb24gKyBcIlxcXCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFxcXCIvXFxcIilcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZy5qb2luKCcgJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQobGlicmFyeSArIFwiLXZlcnNpb25cIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgbGlicmFyeTogbGlicmFyeSwgdmVyc2lvbjogdmVyc2lvbiB9KTsgfSwgXCJWRVJTSU9OXCIgLyogVkVSU0lPTiAqLykpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Mb2cobG9nQ2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgIT09IG51bGwgJiYgdHlwZW9mIGxvZ0NhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1sb2ctYXJndW1lbnRcIiAvKiBJTlZBTElEX0xPR19BUkdVTUVOVCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIC8vIE1hcCB0aGUgcmVxdWVzdGVkIHNlcnZpY2UgdG8gYSByZWdpc3RlcmVkIHNlcnZpY2UgbmFtZVxyXG4gICAgLy8gKHVzZWQgdG8gbWFwIGF1dGggdG8gc2VydmVyQXV0aCBzZXJ2aWNlIHdoZW4gbmVlZGVkKS5cclxuICAgIGZ1bmN0aW9uIHVzZUFzU2VydmljZShhcHAsIG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gJ3NlcnZlckF1dGgnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNlU2VydmljZSA9IG5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmFtZXNwYWNlO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm4gYSBmaXJlYmFzZSBuYW1lc3BhY2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBJbiBwcm9kdWN0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGV4YWN0bHkgb25jZSBhbmQgdGhlIHJlc3VsdFxyXG4gKiBhc3NpZ25lZCB0byB0aGUgJ2ZpcmViYXNlJyBnbG9iYWwuICBJdCBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzXHJcbiAqIGluIHVuaXQgdGVzdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZSgpIHtcclxuICAgIHZhciBuYW1lc3BhY2UgPSBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZUNvcmUoRmlyZWJhc2VBcHBJbXBsKTtcclxuICAgIG5hbWVzcGFjZS5JTlRFUk5BTCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBuYW1lc3BhY2UuSU5URVJOQUwpLCB7IGNyZWF0ZUZpcmViYXNlTmFtZXNwYWNlOiBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZSxcclxuICAgICAgICBleHRlbmROYW1lc3BhY2U6IGV4dGVuZE5hbWVzcGFjZSxcclxuICAgICAgICBjcmVhdGVTdWJzY3JpYmU6IGNyZWF0ZVN1YnNjcmliZSxcclxuICAgICAgICBFcnJvckZhY3Rvcnk6IEVycm9yRmFjdG9yeSxcclxuICAgICAgICBkZWVwRXh0ZW5kOiBkZWVwRXh0ZW5kIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXRjaCB0aGUgdG9wLWxldmVsIGZpcmViYXNlIG5hbWVzcGFjZSB3aXRoIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cclxuICAgICAqXHJcbiAgICAgKiBmaXJlYmFzZS5JTlRFUk5BTC5leHRlbmROYW1lc3BhY2UoKVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBleHRlbmROYW1lc3BhY2UocHJvcHMpIHtcclxuICAgICAgICBkZWVwRXh0ZW5kKG5hbWVzcGFjZSwgcHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hbWVzcGFjZTtcclxufVxyXG52YXIgZmlyZWJhc2UkMSA9IGNyZWF0ZUZpcmViYXNlTmFtZXNwYWNlKCk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBQbGF0Zm9ybUxvZ2dlclNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF0Zm9ybUxvZ2dlclNlcnZpY2UoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcbiAgICAvLyBJbiBpbml0aWFsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGluc3RhbGxhdGlvbnMgb25cclxuICAgIC8vIGF1dGggdG9rZW4gcmVmcmVzaCwgYW5kIGluc3RhbGxhdGlvbnMgd2lsbCBzZW5kIHRoaXMgc3RyaW5nLlxyXG4gICAgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRQbGF0Zm9ybUluZm9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVycyA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVycygpO1xyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBwcm92aWRlcnMgYW5kIGdldCBsaWJyYXJ5L3ZlcnNpb24gcGFpcnMgZnJvbSBhbnkgdGhhdCBhcmVcclxuICAgICAgICAvLyB2ZXJzaW9uIGNvbXBvbmVudHMuXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyc1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChwcm92aWRlcikge1xyXG4gICAgICAgICAgICBpZiAoaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSBwcm92aWRlci5nZXRJbW1lZGlhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlLmxpYnJhcnkgKyBcIi9cIiArIHNlcnZpY2UudmVyc2lvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobG9nU3RyaW5nKSB7IHJldHVybiBsb2dTdHJpbmc7IH0pXHJcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXRmb3JtTG9nZ2VyU2VydmljZTtcclxufSgpKTtcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm92aWRlciBjaGVjayBpZiB0aGlzIHByb3ZpZGVyIHByb3ZpZGVzIGEgVmVyc2lvblNlcnZpY2VcclxuICpcclxuICogTk9URTogVXNpbmcgUHJvdmlkZXI8J2FwcC12ZXJzaW9uJz4gaXMgYSBoYWNrIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3ZpZGVyXHJcbiAqIHByb3ZpZGVzIFZlcnNpb25TZXJ2aWNlLiBUaGUgcHJvdmlkZXIgaXMgbm90IG5lY2Vzc2FyaWx5IGEgJ2FwcC12ZXJzaW9uJ1xyXG4gKiBwcm92aWRlci5cclxuICovXHJcbmZ1bmN0aW9uIGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikge1xyXG4gICAgdmFyIGNvbXBvbmVudCA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpO1xyXG4gICAgcmV0dXJuIChjb21wb25lbnQgPT09IG51bGwgfHwgY29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb25lbnQudHlwZSkgPT09IFwiVkVSU0lPTlwiIC8qIFZFUlNJT04gKi87XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXJDb3JlQ29tcG9uZW50cyhmaXJlYmFzZSwgdmFyaWFudCkge1xyXG4gICAgZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudCgncGxhdGZvcm0tbG9nZ2VyJywgZnVuY3Rpb24gKGNvbnRhaW5lcikgeyByZXR1cm4gbmV3IFBsYXRmb3JtTG9nZ2VyU2VydmljZShjb250YWluZXIpOyB9LCBcIlBSSVZBVEVcIiAvKiBQUklWQVRFICovKSk7XHJcbiAgICAvLyBSZWdpc3RlciBgYXBwYCBwYWNrYWdlLlxyXG4gICAgZmlyZWJhc2UucmVnaXN0ZXJWZXJzaW9uKG5hbWUkYywgdmVyc2lvbiQxLCB2YXJpYW50KTtcclxuICAgIC8vIFJlZ2lzdGVyIHBsYXRmb3JtIFNESyBpZGVudGlmaWVyIChubyB2ZXJzaW9uKS5cclxuICAgIGZpcmViYXNlLnJlZ2lzdGVyVmVyc2lvbignZmlyZS1qcycsICcnKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBGaXJlYmFzZSBMaXRlIGRldGVjdGlvbiB0ZXN0XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmlmIChpc0Jyb3dzZXIoKSAmJiBzZWxmLmZpcmViYXNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGxvZ2dlci53YXJuKFwiXFxuICAgIFdhcm5pbmc6IEZpcmViYXNlIGlzIGFscmVhZHkgZGVmaW5lZCBpbiB0aGUgZ2xvYmFsIHNjb3BlLiBQbGVhc2UgbWFrZSBzdXJlXFxuICAgIEZpcmViYXNlIGxpYnJhcnkgaXMgb25seSBsb2FkZWQgb25jZS5cXG4gIFwiKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdmFyIHNka1ZlcnNpb24gPSBzZWxmLmZpcmViYXNlLlNES19WRVJTSU9OO1xyXG4gICAgaWYgKHNka1ZlcnNpb24gJiYgc2RrVmVyc2lvbi5pbmRleE9mKCdMSVRFJykgPj0gMCkge1xyXG4gICAgICAgIGxvZ2dlci53YXJuKFwiXFxuICAgIFdhcm5pbmc6IFlvdSBhcmUgdHJ5aW5nIHRvIGxvYWQgRmlyZWJhc2Ugd2hpbGUgdXNpbmcgRmlyZWJhc2UgUGVyZm9ybWFuY2Ugc3RhbmRhbG9uZSBzY3JpcHQuXFxuICAgIFlvdSBzaG91bGQgbG9hZCBGaXJlYmFzZSBQZXJmb3JtYW5jZSB3aXRoIHRoaXMgaW5zdGFuY2Ugb2YgRmlyZWJhc2UgdG8gYXZvaWQgbG9hZGluZyBkdXBsaWNhdGUgY29kZS5cXG4gICAgXCIpO1xyXG4gICAgfVxyXG59XHJcbnZhciBpbml0aWFsaXplQXBwID0gZmlyZWJhc2UkMS5pbml0aWFsaXplQXBwO1xyXG4vLyBUT0RPOiBUaGlzIGRpc2FibGUgY2FuIGJlIHJlbW92ZWQgYW5kIHRoZSAnaWdub3JlUmVzdEFyZ3MnIG9wdGlvbiBhZGRlZCB0b1xyXG4vLyB0aGUgbm8tZXhwbGljaXQtYW55IHJ1bGUgd2hlbiBFU2xpbnQgcmVsZWFzZXMgaXQuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmZpcmViYXNlJDEuaW5pdGlhbGl6ZUFwcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIC8vIEVudmlyb25tZW50IGNoZWNrIGJlZm9yZSBpbml0aWFsaXppbmcgYXBwXHJcbiAgICAvLyBEbyB0aGUgY2hlY2sgaW4gaW5pdGlhbGl6ZUFwcCwgc28gcGVvcGxlIGhhdmUgYSBjaGFuY2UgdG8gZGlzYWJsZSBpdCBieSBzZXR0aW5nIGxvZ0xldmVsXHJcbiAgICAvLyBpbiBAZmlyZWJhc2UvbG9nZ2VyXHJcbiAgICBpZiAoaXNOb2RlKCkpIHtcclxuICAgICAgICBsb2dnZXIud2FybihcIlxcbiAgICAgIFdhcm5pbmc6IFRoaXMgaXMgYSBicm93c2VyLXRhcmdldGVkIEZpcmViYXNlIGJ1bmRsZSBidXQgaXQgYXBwZWFycyBpdCBpcyBiZWluZ1xcbiAgICAgIHJ1biBpbiBhIE5vZGUgZW52aXJvbm1lbnQuICBJZiBydW5uaW5nIGluIGEgTm9kZSBlbnZpcm9ubWVudCwgbWFrZSBzdXJlIHlvdVxcbiAgICAgIGFyZSB1c2luZyB0aGUgYnVuZGxlIHNwZWNpZmllZCBieSB0aGUgXFxcIm1haW5cXFwiIGZpZWxkIGluIHBhY2thZ2UuanNvbi5cXG4gICAgICBcXG4gICAgICBJZiB5b3UgYXJlIHVzaW5nIFdlYnBhY2ssIHlvdSBjYW4gc3BlY2lmeSBcXFwibWFpblxcXCIgYXMgdGhlIGZpcnN0IGl0ZW0gaW5cXG4gICAgICBcXFwicmVzb2x2ZS5tYWluRmllbGRzXFxcIjpcXG4gICAgICBodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vcmVzb2x2ZS8jcmVzb2x2ZW1haW5maWVsZHNcXG4gICAgICBcXG4gICAgICBJZiB1c2luZyBSb2xsdXAsIHVzZSB0aGUgQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlIHBsdWdpbiBhbmQgc3BlY2lmeSBcXFwibWFpblxcXCJcXG4gICAgICBhcyB0aGUgZmlyc3QgaXRlbSBpbiBcXFwibWFpbkZpZWxkc1xcXCIsIGUuZy4gWydtYWluJywgJ21vZHVsZSddLlxcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlXFxuICAgICAgXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluaXRpYWxpemVBcHAuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcclxufTtcclxudmFyIGZpcmViYXNlID0gZmlyZWJhc2UkMTtcclxucmVnaXN0ZXJDb3JlQ29tcG9uZW50cyhmaXJlYmFzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuZXhwb3J0IHsgZmlyZWJhc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnOyhmdW5jdGlvbigpIHsvKlxuXG4gQ29weXJpZ2h0IFRoZSBDbG9zdXJlIExpYnJhcnkgQXV0aG9ycy5cbiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuKi9cbnZhciBrLGFhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLGIsYyl7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtiXT1jLnZhbHVlKX07ZnVuY3Rpb24gYmEoYSl7YT1bXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LFwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbCxhXTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoOysrYil7dmFyIGM9YVtiXTtpZihjJiZjLk1hdGg9PU1hdGgpcmV0dXJuIGN9cmV0dXJuIGdsb2JhbFRoaXN9dmFyIGNhPWJhKHRoaXMpO1xuZnVuY3Rpb24gZGEoYSxiKXtpZihiKXt2YXIgYz1jYTthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGgtMTtkKyspe3ZhciBlPWFbZF07ZSBpbiBjfHwoY1tlXT17fSk7Yz1jW2VdfWE9YVthLmxlbmd0aC0xXTtkPWNbYV07Yj1iKGQpO2IhPWQmJm51bGwhPWImJmFhKGMsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX19ZnVuY3Rpb24gZWEoYSl7dmFyIGI9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX19ZnVuY3Rpb24gZmEoYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOntuZXh0OmVhKGEpfX1cbmRhKFwiUHJvbWlzZVwiLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZyl7dGhpcy5iPTA7dGhpcy5jPXZvaWQgMDt0aGlzLmE9W107dmFyIGg9dGhpcy5mKCk7dHJ5e2coaC5yZXNvbHZlLGgucmVqZWN0KX1jYXRjaChtKXtoLnJlamVjdChtKX19ZnVuY3Rpb24gYygpe3RoaXMuYT1udWxsfWZ1bmN0aW9uIGQoZyl7cmV0dXJuIGcgaW5zdGFuY2VvZiBiP2c6bmV3IGIoZnVuY3Rpb24oaCl7aChnKX0pfWlmKGEpcmV0dXJuIGE7Yy5wcm90b3R5cGUuYj1mdW5jdGlvbihnKXtpZihudWxsPT10aGlzLmEpe3RoaXMuYT1bXTt2YXIgaD10aGlzO3RoaXMuYyhmdW5jdGlvbigpe2guZygpfSl9dGhpcy5hLnB1c2goZyl9O3ZhciBlPWNhLnNldFRpbWVvdXQ7Yy5wcm90b3R5cGUuYz1mdW5jdGlvbihnKXtlKGcsMCl9O2MucHJvdG90eXBlLmc9ZnVuY3Rpb24oKXtmb3IoO3RoaXMuYSYmdGhpcy5hLmxlbmd0aDspe3ZhciBnPXRoaXMuYTt0aGlzLmE9W107Zm9yKHZhciBoPTA7aDxnLmxlbmd0aDsrK2gpe3ZhciBtPVxuZ1toXTtnW2hdPW51bGw7dHJ5e20oKX1jYXRjaChwKXt0aGlzLmYocCl9fX10aGlzLmE9bnVsbH07Yy5wcm90b3R5cGUuZj1mdW5jdGlvbihnKXt0aGlzLmMoZnVuY3Rpb24oKXt0aHJvdyBnO30pfTtiLnByb3RvdHlwZS5mPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZyhwKXtyZXR1cm4gZnVuY3Rpb24odil7bXx8KG09ITAscC5jYWxsKGgsdikpfX12YXIgaD10aGlzLG09ITE7cmV0dXJue3Jlc29sdmU6Zyh0aGlzLm0pLHJlamVjdDpnKHRoaXMuZyl9fTtiLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGcpe2lmKGc9PT10aGlzKXRoaXMuZyhuZXcgVHlwZUVycm9yKFwiQSBQcm9taXNlIGNhbm5vdCByZXNvbHZlIHRvIGl0c2VsZlwiKSk7ZWxzZSBpZihnIGluc3RhbmNlb2YgYil0aGlzLnMoZyk7ZWxzZXthOnN3aXRjaCh0eXBlb2YgZyl7Y2FzZSBcIm9iamVjdFwiOnZhciBoPW51bGwhPWc7YnJlYWsgYTtjYXNlIFwiZnVuY3Rpb25cIjpoPSEwO2JyZWFrIGE7ZGVmYXVsdDpoPSExfWg/dGhpcy52KGcpOnRoaXMuaChnKX19O1xuYi5wcm90b3R5cGUudj1mdW5jdGlvbihnKXt2YXIgaD12b2lkIDA7dHJ5e2g9Zy50aGVufWNhdGNoKG0pe3RoaXMuZyhtKTtyZXR1cm59XCJmdW5jdGlvblwiPT10eXBlb2YgaD90aGlzLnUoaCxnKTp0aGlzLmgoZyl9O2IucHJvdG90eXBlLmc9ZnVuY3Rpb24oZyl7dGhpcy5pKDIsZyl9O2IucHJvdG90eXBlLmg9ZnVuY3Rpb24oZyl7dGhpcy5pKDEsZyl9O2IucHJvdG90eXBlLmk9ZnVuY3Rpb24oZyxoKXtpZigwIT10aGlzLmIpdGhyb3cgRXJyb3IoXCJDYW5ub3Qgc2V0dGxlKFwiK2crXCIsIFwiK2grXCIpOiBQcm9taXNlIGFscmVhZHkgc2V0dGxlZCBpbiBzdGF0ZVwiK3RoaXMuYik7dGhpcy5iPWc7dGhpcy5jPWg7dGhpcy5sKCl9O2IucHJvdG90eXBlLmw9ZnVuY3Rpb24oKXtpZihudWxsIT10aGlzLmEpe2Zvcih2YXIgZz0wO2c8dGhpcy5hLmxlbmd0aDsrK2cpZi5iKHRoaXMuYVtnXSk7dGhpcy5hPW51bGx9fTt2YXIgZj1uZXcgYztiLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGcpe3ZhciBoPXRoaXMuZigpO1xuZy5SYShoLnJlc29sdmUsaC5yZWplY3QpfTtiLnByb3RvdHlwZS51PWZ1bmN0aW9uKGcsaCl7dmFyIG09dGhpcy5mKCk7dHJ5e2cuY2FsbChoLG0ucmVzb2x2ZSxtLnJlamVjdCl9Y2F0Y2gocCl7bS5yZWplY3QocCl9fTtiLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGcsaCl7ZnVuY3Rpb24gbShBLFEpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIEE/ZnVuY3Rpb24oeWEpe3RyeXtwKEEoeWEpKX1jYXRjaChBZCl7dihBZCl9fTpRfXZhciBwLHYsQj1uZXcgYihmdW5jdGlvbihBLFEpe3A9QTt2PVF9KTt0aGlzLlJhKG0oZyxwKSxtKGgsdikpO3JldHVybiBCfTtiLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihnKXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCxnKX07Yi5wcm90b3R5cGUuUmE9ZnVuY3Rpb24oZyxoKXtmdW5jdGlvbiBtKCl7c3dpdGNoKHAuYil7Y2FzZSAxOmcocC5jKTticmVhaztjYXNlIDI6aChwLmMpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXRlOiBcIitcbnAuYik7fX12YXIgcD10aGlzO251bGw9PXRoaXMuYT9mLmIobSk6dGhpcy5hLnB1c2gobSl9O2IucmVzb2x2ZT1kO2IucmVqZWN0PWZ1bmN0aW9uKGcpe3JldHVybiBuZXcgYihmdW5jdGlvbihoLG0pe20oZyl9KX07Yi5yYWNlPWZ1bmN0aW9uKGcpe3JldHVybiBuZXcgYihmdW5jdGlvbihoLG0pe2Zvcih2YXIgcD1mYShnKSx2PXAubmV4dCgpOyF2LmRvbmU7dj1wLm5leHQoKSlkKHYudmFsdWUpLlJhKGgsbSl9KX07Yi5hbGw9ZnVuY3Rpb24oZyl7dmFyIGg9ZmEoZyksbT1oLm5leHQoKTtyZXR1cm4gbS5kb25lP2QoW10pOm5ldyBiKGZ1bmN0aW9uKHAsdil7ZnVuY3Rpb24gQih5YSl7cmV0dXJuIGZ1bmN0aW9uKEFkKXtBW3lhXT1BZDtRLS07MD09USYmcChBKX19dmFyIEE9W10sUT0wO2RvIEEucHVzaCh2b2lkIDApLFErKyxkKG0udmFsdWUpLlJhKEIoQS5sZW5ndGgtMSksdiksbT1oLm5leHQoKTt3aGlsZSghbS5kb25lKX0pfTtyZXR1cm4gYn0pO1xudmFyIGhhPWhhfHx7fSxsPXRoaXN8fHNlbGYsaWE9L15bXFx3Ky9fLV0rWz1dezAsMn0kLyxqYT1udWxsO2Z1bmN0aW9uIGthKGEpe3JldHVybihhPWEucXVlcnlTZWxlY3RvciYmYS5xdWVyeVNlbGVjdG9yKFwic2NyaXB0W25vbmNlXVwiKSkmJihhPWEubm9uY2V8fGEuZ2V0QXR0cmlidXRlKFwibm9uY2VcIikpJiZpYS50ZXN0KGEpP2E6XCJcIn1mdW5jdGlvbiBsYSgpe31mdW5jdGlvbiBtYShhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiIT1iP2I6YT9BcnJheS5pc0FycmF5KGEpP1wiYXJyYXlcIjpiOlwibnVsbFwifWZ1bmN0aW9uIG5hKGEpe3ZhciBiPW1hKGEpO3JldHVyblwiYXJyYXlcIj09Ynx8XCJvYmplY3RcIj09YiYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RofWZ1bmN0aW9uIG9hKGEpe3JldHVyblwiZnVuY3Rpb25cIj09bWEoYSl9ZnVuY3Rpb24gbihhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiPT1iJiZudWxsIT1hfHxcImZ1bmN0aW9uXCI9PWJ9XG5mdW5jdGlvbiBwYShhKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEscWEpJiZhW3FhXXx8KGFbcWFdPSsrcmEpfXZhciBxYT1cImNsb3N1cmVfdWlkX1wiKygxRTkqTWF0aC5yYW5kb20oKT4+PjApLHJhPTA7ZnVuY3Rpb24gc2EoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gdGEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShlLGQpO3JldHVybiBhLmFwcGx5KGIsZSl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19XG5mdW5jdGlvbiBxKGEsYixjKXtGdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP3E9c2E6cT10YTtyZXR1cm4gcS5hcHBseShudWxsLGFyZ3VtZW50cyl9ZnVuY3Rpb24gdWEoYSxiKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGQ9Yy5zbGljZSgpO2QucHVzaC5hcHBseShkLGFyZ3VtZW50cyk7cmV0dXJuIGEuYXBwbHkodGhpcyxkKX19dmFyIHZhPURhdGUubm93O2Z1bmN0aW9uIHIoYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EuYmI9Yi5wcm90b3R5cGU7YS5wcm90b3R5cGU9bmV3IGM7YS5wcm90b3R5cGUuY29uc3RydWN0b3I9YX1mdW5jdGlvbiB3YShhKXtyZXR1cm4gYX07LypcblxuIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmZ1bmN0aW9uIHQoYSxiLGMpe3RoaXMuY29kZT14YSthO3RoaXMubWVzc2FnZT1ifHx6YVthXXx8XCJcIjt0aGlzLmE9Y3x8bnVsbH1yKHQsRXJyb3IpO3QucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXt2YXIgYT17Y29kZTp0aGlzLmNvZGUsbWVzc2FnZTp0aGlzLm1lc3NhZ2V9O3RoaXMuYSYmKGEuc2VydmVyUmVzcG9uc2U9dGhpcy5hKTtyZXR1cm4gYX07dC5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudygpfTtmdW5jdGlvbiBBYShhKXt2YXIgYj1hJiZhLmNvZGU7cmV0dXJuIGI/bmV3IHQoYi5zdWJzdHJpbmcoeGEubGVuZ3RoKSxhLm1lc3NhZ2UsYS5zZXJ2ZXJSZXNwb25zZSk6bnVsbH1cbnZhciB4YT1cImF1dGgvXCIsemE9e1wiYWRtaW4tcmVzdHJpY3RlZC1vcGVyYXRpb25cIjpcIlRoaXMgb3BlcmF0aW9uIGlzIHJlc3RyaWN0ZWQgdG8gYWRtaW5pc3RyYXRvcnMgb25seS5cIixcImFyZ3VtZW50LWVycm9yXCI6XCJcIixcImFwcC1ub3QtYXV0aG9yaXplZFwiOlwiVGhpcyBhcHAsIGlkZW50aWZpZWQgYnkgdGhlIGRvbWFpbiB3aGVyZSBpdCdzIGhvc3RlZCwgaXMgbm90IGF1dGhvcml6ZWQgdG8gdXNlIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uIHdpdGggdGhlIHByb3ZpZGVkIEFQSSBrZXkuIFJldmlldyB5b3VyIGtleSBjb25maWd1cmF0aW9uIGluIHRoZSBHb29nbGUgQVBJIGNvbnNvbGUuXCIsXCJhcHAtbm90LWluc3RhbGxlZFwiOlwiVGhlIHJlcXVlc3RlZCBtb2JpbGUgYXBwbGljYXRpb24gY29ycmVzcG9uZGluZyB0byB0aGUgaWRlbnRpZmllciAoQW5kcm9pZCBwYWNrYWdlIG5hbWUgb3IgaU9TIGJ1bmRsZSBJRCkgcHJvdmlkZWQgaXMgbm90IGluc3RhbGxlZCBvbiB0aGlzIGRldmljZS5cIixcblwiY2FwdGNoYS1jaGVjay1mYWlsZWRcIjpcIlRoZSByZUNBUFRDSEEgcmVzcG9uc2UgdG9rZW4gcHJvdmlkZWQgaXMgZWl0aGVyIGludmFsaWQsIGV4cGlyZWQsIGFscmVhZHkgdXNlZCBvciB0aGUgZG9tYWluIGFzc29jaWF0ZWQgd2l0aCBpdCBkb2VzIG5vdCBtYXRjaCB0aGUgbGlzdCBvZiB3aGl0ZWxpc3RlZCBkb21haW5zLlwiLFwiY29kZS1leHBpcmVkXCI6XCJUaGUgU01TIGNvZGUgaGFzIGV4cGlyZWQuIFBsZWFzZSByZS1zZW5kIHRoZSB2ZXJpZmljYXRpb24gY29kZSB0byB0cnkgYWdhaW4uXCIsXCJjb3Jkb3ZhLW5vdC1yZWFkeVwiOlwiQ29yZG92YSBmcmFtZXdvcmsgaXMgbm90IHJlYWR5LlwiLFwiY29ycy11bnN1cHBvcnRlZFwiOlwiVGhpcyBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQuXCIsXCJjcmVkZW50aWFsLWFscmVhZHktaW4tdXNlXCI6XCJUaGlzIGNyZWRlbnRpYWwgaXMgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgdXNlciBhY2NvdW50LlwiLFwiY3VzdG9tLXRva2VuLW1pc21hdGNoXCI6XCJUaGUgY3VzdG9tIHRva2VuIGNvcnJlc3BvbmRzIHRvIGEgZGlmZmVyZW50IGF1ZGllbmNlLlwiLFxuXCJyZXF1aXJlcy1yZWNlbnQtbG9naW5cIjpcIlRoaXMgb3BlcmF0aW9uIGlzIHNlbnNpdGl2ZSBhbmQgcmVxdWlyZXMgcmVjZW50IGF1dGhlbnRpY2F0aW9uLiBMb2cgaW4gYWdhaW4gYmVmb3JlIHJldHJ5aW5nIHRoaXMgcmVxdWVzdC5cIixcImR5bmFtaWMtbGluay1ub3QtYWN0aXZhdGVkXCI6XCJQbGVhc2UgYWN0aXZhdGUgRHluYW1pYyBMaW5rcyBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZSBhbmQgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zLlwiLFwiZW1haWwtY2hhbmdlLW5lZWRzLXZlcmlmaWNhdGlvblwiOlwiTXVsdGktZmFjdG9yIHVzZXJzIG11c3QgYWx3YXlzIGhhdmUgYSB2ZXJpZmllZCBlbWFpbC5cIixcImVtYWlsLWFscmVhZHktaW4tdXNlXCI6XCJUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuXCIsXCJleHBpcmVkLWFjdGlvbi1jb2RlXCI6XCJUaGUgYWN0aW9uIGNvZGUgaGFzIGV4cGlyZWQuIFwiLFwiY2FuY2VsbGVkLXBvcHVwLXJlcXVlc3RcIjpcIlRoaXMgb3BlcmF0aW9uIGhhcyBiZWVuIGNhbmNlbGxlZCBkdWUgdG8gYW5vdGhlciBjb25mbGljdGluZyBwb3B1cCBiZWluZyBvcGVuZWQuXCIsXG5cImludGVybmFsLWVycm9yXCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXCJpbnZhbGlkLWFwcC1jcmVkZW50aWFsXCI6XCJUaGUgcGhvbmUgdmVyaWZpY2F0aW9uIHJlcXVlc3QgY29udGFpbnMgYW4gaW52YWxpZCBhcHBsaWNhdGlvbiB2ZXJpZmllci4gVGhlIHJlQ0FQVENIQSB0b2tlbiByZXNwb25zZSBpcyBlaXRoZXIgaW52YWxpZCBvciBleHBpcmVkLlwiLFwiaW52YWxpZC1hcHAtaWRcIjpcIlRoZSBtb2JpbGUgYXBwIGlkZW50aWZpZXIgaXMgbm90IHJlZ2lzdGVkIGZvciB0aGUgY3VycmVudCBwcm9qZWN0LlwiLFwiaW52YWxpZC11c2VyLXRva2VuXCI6XCJUaGlzIHVzZXIncyBjcmVkZW50aWFsIGlzbid0IHZhbGlkIGZvciB0aGlzIHByb2plY3QuIFRoaXMgY2FuIGhhcHBlbiBpZiB0aGUgdXNlcidzIHRva2VuIGhhcyBiZWVuIHRhbXBlcmVkIHdpdGgsIG9yIGlmIHRoZSB1c2VyIGlzbid0IGZvciB0aGUgcHJvamVjdCBhc3NvY2lhdGVkIHdpdGggdGhpcyBBUEkga2V5LlwiLFwiaW52YWxpZC1hdXRoLWV2ZW50XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXG5cImludmFsaWQtdmVyaWZpY2F0aW9uLWNvZGVcIjpcIlRoZSBTTVMgdmVyaWZpY2F0aW9uIGNvZGUgdXNlZCB0byBjcmVhdGUgdGhlIHBob25lIGF1dGggY3JlZGVudGlhbCBpcyBpbnZhbGlkLiBQbGVhc2UgcmVzZW5kIHRoZSB2ZXJpZmljYXRpb24gY29kZSBzbXMgYW5kIGJlIHN1cmUgdG8gdXNlIHRoZSB2ZXJpZmljYXRpb24gY29kZSBwcm92aWRlZCBieSB0aGUgdXNlci5cIixcImludmFsaWQtY29udGludWUtdXJpXCI6XCJUaGUgY29udGludWUgVVJMIHByb3ZpZGVkIGluIHRoZSByZXF1ZXN0IGlzIGludmFsaWQuXCIsXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiOlwiVGhlIGZvbGxvd2luZyBDb3Jkb3ZhIHBsdWdpbnMgbXVzdCBiZSBpbnN0YWxsZWQgdG8gZW5hYmxlIE9BdXRoIHNpZ24taW46IGNvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mbywgY29yZG92YS11bml2ZXJzYWwtbGlua3MtcGx1Z2luLCBjb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiLCBjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIgYW5kIGNvcmRvdmEtcGx1Z2luLWN1c3RvbXVybHNjaGVtZS5cIixcblwiaW52YWxpZC1jdXN0b20tdG9rZW5cIjpcIlRoZSBjdXN0b20gdG9rZW4gZm9ybWF0IGlzIGluY29ycmVjdC4gUGxlYXNlIGNoZWNrIHRoZSBkb2N1bWVudGF0aW9uLlwiLFwiaW52YWxpZC1keW5hbWljLWxpbmstZG9tYWluXCI6XCJUaGUgcHJvdmlkZWQgZHluYW1pYyBsaW5rIGRvbWFpbiBpcyBub3QgY29uZmlndXJlZCBvciBhdXRob3JpemVkIGZvciB0aGUgY3VycmVudCBwcm9qZWN0LlwiLFwiaW52YWxpZC1lbWFpbFwiOlwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYmFkbHkgZm9ybWF0dGVkLlwiLFwiaW52YWxpZC1hcGkta2V5XCI6XCJZb3VyIEFQSSBrZXkgaXMgaW52YWxpZCwgcGxlYXNlIGNoZWNrIHlvdSBoYXZlIGNvcGllZCBpdCBjb3JyZWN0bHkuXCIsXCJpbnZhbGlkLWNlcnQtaGFzaFwiOlwiVGhlIFNIQS0xIGNlcnRpZmljYXRlIGhhc2ggcHJvdmlkZWQgaXMgaW52YWxpZC5cIixcImludmFsaWQtY3JlZGVudGlhbFwiOlwiVGhlIHN1cHBsaWVkIGF1dGggY3JlZGVudGlhbCBpcyBtYWxmb3JtZWQgb3IgaGFzIGV4cGlyZWQuXCIsXG5cImludmFsaWQtbWVzc2FnZS1wYXlsb2FkXCI6XCJUaGUgZW1haWwgdGVtcGxhdGUgY29ycmVzcG9uZGluZyB0byB0aGlzIGFjdGlvbiBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgaW4gaXRzIG1lc3NhZ2UuIFBsZWFzZSBmaXggYnkgZ29pbmcgdG8gdGhlIEF1dGggZW1haWwgdGVtcGxhdGVzIHNlY3Rpb24gaW4gdGhlIEZpcmViYXNlIENvbnNvbGUuXCIsXCJpbnZhbGlkLW11bHRpLWZhY3Rvci1zZXNzaW9uXCI6XCJUaGUgcmVxdWVzdCBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgcHJvb2Ygb2YgZmlyc3QgZmFjdG9yIHN1Y2Nlc3NmdWwgc2lnbi1pbi5cIixcImludmFsaWQtb2F1dGgtcHJvdmlkZXJcIjpcIkVtYWlsQXV0aFByb3ZpZGVyIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgb3BlcmF0aW9uLiBUaGlzIG9wZXJhdGlvbiBvbmx5IHN1cHBvcnRzIE9BdXRoIHByb3ZpZGVycy5cIixcImludmFsaWQtb2F1dGgtY2xpZW50LWlkXCI6XCJUaGUgT0F1dGggY2xpZW50IElEIHByb3ZpZGVkIGlzIGVpdGhlciBpbnZhbGlkIG9yIGRvZXMgbm90IG1hdGNoIHRoZSBzcGVjaWZpZWQgQVBJIGtleS5cIixcblwidW5hdXRob3JpemVkLWRvbWFpblwiOlwiVGhpcyBkb21haW4gaXMgbm90IGF1dGhvcml6ZWQgZm9yIE9BdXRoIG9wZXJhdGlvbnMgZm9yIHlvdXIgRmlyZWJhc2UgcHJvamVjdC4gRWRpdCB0aGUgbGlzdCBvZiBhdXRob3JpemVkIGRvbWFpbnMgZnJvbSB0aGUgRmlyZWJhc2UgY29uc29sZS5cIixcImludmFsaWQtYWN0aW9uLWNvZGVcIjpcIlRoZSBhY3Rpb24gY29kZSBpcyBpbnZhbGlkLiBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIGNvZGUgaXMgbWFsZm9ybWVkLCBleHBpcmVkLCBvciBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIsXCJ3cm9uZy1wYXNzd29yZFwiOlwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiLFwiaW52YWxpZC1wZXJzaXN0ZW5jZS10eXBlXCI6XCJUaGUgc3BlY2lmaWVkIHBlcnNpc3RlbmNlIHR5cGUgaXMgaW52YWxpZC4gSXQgY2FuIG9ubHkgYmUgbG9jYWwsIHNlc3Npb24gb3Igbm9uZS5cIixcImludmFsaWQtcGhvbmUtbnVtYmVyXCI6XCJUaGUgZm9ybWF0IG9mIHRoZSBwaG9uZSBudW1iZXIgcHJvdmlkZWQgaXMgaW5jb3JyZWN0LiBQbGVhc2UgZW50ZXIgdGhlIHBob25lIG51bWJlciBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBwYXJzZWQgaW50byBFLjE2NCBmb3JtYXQuIEUuMTY0IHBob25lIG51bWJlcnMgYXJlIHdyaXR0ZW4gaW4gdGhlIGZvcm1hdCBbK11bY291bnRyeSBjb2RlXVtzdWJzY3JpYmVyIG51bWJlciBpbmNsdWRpbmcgYXJlYSBjb2RlXS5cIixcblwiaW52YWxpZC1wcm92aWRlci1pZFwiOlwiVGhlIHNwZWNpZmllZCBwcm92aWRlciBJRCBpcyBpbnZhbGlkLlwiLFwiaW52YWxpZC1yZWNpcGllbnQtZW1haWxcIjpcIlRoZSBlbWFpbCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgYWN0aW9uIGZhaWxlZCB0byBzZW5kIGFzIHRoZSBwcm92aWRlZCByZWNpcGllbnQgZW1haWwgYWRkcmVzcyBpcyBpbnZhbGlkLlwiLFwiaW52YWxpZC1zZW5kZXJcIjpcIlRoZSBlbWFpbCB0ZW1wbGF0ZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgYWN0aW9uIGNvbnRhaW5zIGFuIGludmFsaWQgc2VuZGVyIGVtYWlsIG9yIG5hbWUuIFBsZWFzZSBmaXggYnkgZ29pbmcgdG8gdGhlIEF1dGggZW1haWwgdGVtcGxhdGVzIHNlY3Rpb24gaW4gdGhlIEZpcmViYXNlIENvbnNvbGUuXCIsXCJpbnZhbGlkLXZlcmlmaWNhdGlvbi1pZFwiOlwiVGhlIHZlcmlmaWNhdGlvbiBJRCB1c2VkIHRvIGNyZWF0ZSB0aGUgcGhvbmUgYXV0aCBjcmVkZW50aWFsIGlzIGludmFsaWQuXCIsXCJpbnZhbGlkLXRlbmFudC1pZFwiOlwiVGhlIEF1dGggaW5zdGFuY2UncyB0ZW5hbnQgSUQgaXMgaW52YWxpZC5cIixcblwibXVsdGktZmFjdG9yLWluZm8tbm90LWZvdW5kXCI6XCJUaGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgc2Vjb25kIGZhY3RvciBtYXRjaGluZyB0aGUgaWRlbnRpZmllciBwcm92aWRlZC5cIixcIm11bHRpLWZhY3Rvci1hdXRoLXJlcXVpcmVkXCI6XCJQcm9vZiBvZiBvd25lcnNoaXAgb2YgYSBzZWNvbmQgZmFjdG9yIGlzIHJlcXVpcmVkIHRvIGNvbXBsZXRlIHNpZ24taW4uXCIsXCJtaXNzaW5nLWFuZHJvaWQtcGtnLW5hbWVcIjpcIkFuIEFuZHJvaWQgUGFja2FnZSBOYW1lIG11c3QgYmUgcHJvdmlkZWQgaWYgdGhlIEFuZHJvaWQgQXBwIGlzIHJlcXVpcmVkIHRvIGJlIGluc3RhbGxlZC5cIixcImF1dGgtZG9tYWluLWNvbmZpZy1yZXF1aXJlZFwiOlwiQmUgc3VyZSB0byBpbmNsdWRlIGF1dGhEb21haW4gd2hlbiBjYWxsaW5nIGZpcmViYXNlLmluaXRpYWxpemVBcHAoKSwgYnkgZm9sbG93aW5nIHRoZSBpbnN0cnVjdGlvbnMgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUuXCIsXCJtaXNzaW5nLWFwcC1jcmVkZW50aWFsXCI6XCJUaGUgcGhvbmUgdmVyaWZpY2F0aW9uIHJlcXVlc3QgaXMgbWlzc2luZyBhbiBhcHBsaWNhdGlvbiB2ZXJpZmllciBhc3NlcnRpb24uIEEgcmVDQVBUQ0hBIHJlc3BvbnNlIHRva2VuIG5lZWRzIHRvIGJlIHByb3ZpZGVkLlwiLFxuXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1jb2RlXCI6XCJUaGUgcGhvbmUgYXV0aCBjcmVkZW50aWFsIHdhcyBjcmVhdGVkIHdpdGggYW4gZW1wdHkgU01TIHZlcmlmaWNhdGlvbiBjb2RlLlwiLFwibWlzc2luZy1jb250aW51ZS11cmlcIjpcIkEgY29udGludWUgVVJMIG11c3QgYmUgcHJvdmlkZWQgaW4gdGhlIHJlcXVlc3QuXCIsXCJtaXNzaW5nLWlmcmFtZS1zdGFydFwiOlwiQW4gaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLlwiLFwibWlzc2luZy1pb3MtYnVuZGxlLWlkXCI6XCJBbiBpT1MgQnVuZGxlIElEIG11c3QgYmUgcHJvdmlkZWQgaWYgYW4gQXBwIFN0b3JlIElEIGlzIHByb3ZpZGVkLlwiLFwibWlzc2luZy1tdWx0aS1mYWN0b3ItaW5mb1wiOlwiTm8gc2Vjb25kIGZhY3RvciBpZGVudGlmaWVyIGlzIHByb3ZpZGVkLlwiLFwibWlzc2luZy1tdWx0aS1mYWN0b3Itc2Vzc2lvblwiOlwiVGhlIHJlcXVlc3QgaXMgbWlzc2luZyBwcm9vZiBvZiBmaXJzdCBmYWN0b3Igc3VjY2Vzc2Z1bCBzaWduLWluLlwiLFwibWlzc2luZy1vci1pbnZhbGlkLW5vbmNlXCI6XCJUaGUgcmVxdWVzdCBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgbm9uY2UuIFRoaXMgY2FuIG9jY3VyIGlmIHRoZSBTSEEtMjU2IGhhc2ggb2YgdGhlIHByb3ZpZGVkIHJhdyBub25jZSBkb2VzIG5vdCBtYXRjaCB0aGUgaGFzaGVkIG5vbmNlIGluIHRoZSBJRCB0b2tlbiBwYXlsb2FkLlwiLFxuXCJtaXNzaW5nLXBob25lLW51bWJlclwiOlwiVG8gc2VuZCB2ZXJpZmljYXRpb24gY29kZXMsIHByb3ZpZGUgYSBwaG9uZSBudW1iZXIgZm9yIHRoZSByZWNpcGllbnQuXCIsXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1pZFwiOlwiVGhlIHBob25lIGF1dGggY3JlZGVudGlhbCB3YXMgY3JlYXRlZCB3aXRoIGFuIGVtcHR5IHZlcmlmaWNhdGlvbiBJRC5cIixcImFwcC1kZWxldGVkXCI6XCJUaGlzIGluc3RhbmNlIG9mIEZpcmViYXNlQXBwIGhhcyBiZWVuIGRlbGV0ZWQuXCIsXCJhY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsXCI6XCJBbiBhY2NvdW50IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIHNhbWUgZW1haWwgYWRkcmVzcyBidXQgZGlmZmVyZW50IHNpZ24taW4gY3JlZGVudGlhbHMuIFNpZ24gaW4gdXNpbmcgYSBwcm92aWRlciBhc3NvY2lhdGVkIHdpdGggdGhpcyBlbWFpbCBhZGRyZXNzLlwiLFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiOlwiQSBuZXR3b3JrIGVycm9yIChzdWNoIGFzIHRpbWVvdXQsIGludGVycnVwdGVkIGNvbm5lY3Rpb24gb3IgdW5yZWFjaGFibGUgaG9zdCkgaGFzIG9jY3VycmVkLlwiLFxuXCJuby1hdXRoLWV2ZW50XCI6XCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIsXCJuby1zdWNoLXByb3ZpZGVyXCI6XCJVc2VyIHdhcyBub3QgbGlua2VkIHRvIGFuIGFjY291bnQgd2l0aCB0aGUgZ2l2ZW4gcHJvdmlkZXIuXCIsXCJudWxsLXVzZXJcIjpcIkEgbnVsbCB1c2VyIG9iamVjdCB3YXMgcHJvdmlkZWQgYXMgdGhlIGFyZ3VtZW50IGZvciBhbiBvcGVyYXRpb24gd2hpY2ggcmVxdWlyZXMgYSBub24tbnVsbCB1c2VyIG9iamVjdC5cIixcIm9wZXJhdGlvbi1ub3QtYWxsb3dlZFwiOlwiVGhlIGdpdmVuIHNpZ24taW4gcHJvdmlkZXIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgRmlyZWJhc2UgcHJvamVjdC4gRW5hYmxlIGl0IGluIHRoZSBGaXJlYmFzZSBjb25zb2xlLCB1bmRlciB0aGUgc2lnbi1pbiBtZXRob2QgdGFiIG9mIHRoZSBBdXRoIHNlY3Rpb24uXCIsXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCI6J1RoaXMgb3BlcmF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGVudmlyb25tZW50IHRoaXMgYXBwbGljYXRpb24gaXMgcnVubmluZyBvbi4gXCJsb2NhdGlvbi5wcm90b2NvbFwiIG11c3QgYmUgaHR0cCwgaHR0cHMgb3IgY2hyb21lLWV4dGVuc2lvbiBhbmQgd2ViIHN0b3JhZ2UgbXVzdCBiZSBlbmFibGVkLicsXG5cInBvcHVwLWJsb2NrZWRcIjpcIlVuYWJsZSB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggdGhlIHBvcHVwLiBJdCBtYXkgaGF2ZSBiZWVuIGJsb2NrZWQgYnkgdGhlIGJyb3dzZXIuXCIsXCJwb3B1cC1jbG9zZWQtYnktdXNlclwiOlwiVGhlIHBvcHVwIGhhcyBiZWVuIGNsb3NlZCBieSB0aGUgdXNlciBiZWZvcmUgZmluYWxpemluZyB0aGUgb3BlcmF0aW9uLlwiLFwicHJvdmlkZXItYWxyZWFkeS1saW5rZWRcIjpcIlVzZXIgY2FuIG9ubHkgYmUgbGlua2VkIHRvIG9uZSBpZGVudGl0eSBmb3IgdGhlIGdpdmVuIHByb3ZpZGVyLlwiLFwicXVvdGEtZXhjZWVkZWRcIjpcIlRoZSBwcm9qZWN0J3MgcXVvdGEgZm9yIHRoaXMgb3BlcmF0aW9uIGhhcyBiZWVuIGV4Y2VlZGVkLlwiLFwicmVkaXJlY3QtY2FuY2VsbGVkLWJ5LXVzZXJcIjpcIlRoZSByZWRpcmVjdCBvcGVyYXRpb24gaGFzIGJlZW4gY2FuY2VsbGVkIGJ5IHRoZSB1c2VyIGJlZm9yZSBmaW5hbGl6aW5nLlwiLFwicmVkaXJlY3Qtb3BlcmF0aW9uLXBlbmRpbmdcIjpcIkEgcmVkaXJlY3Qgc2lnbi1pbiBvcGVyYXRpb24gaXMgYWxyZWFkeSBwZW5kaW5nLlwiLFxuXCJyZWplY3RlZC1jcmVkZW50aWFsXCI6XCJUaGUgcmVxdWVzdCBjb250YWlucyBtYWxmb3JtZWQgb3IgbWlzbWF0Y2hpbmcgY3JlZGVudGlhbHMuXCIsXCJzZWNvbmQtZmFjdG9yLWFscmVhZHktaW4tdXNlXCI6XCJUaGUgc2Vjb25kIGZhY3RvciBpcyBhbHJlYWR5IGVucm9sbGVkIG9uIHRoaXMgYWNjb3VudC5cIixcIm1heGltdW0tc2Vjb25kLWZhY3Rvci1jb3VudC1leGNlZWRlZFwiOlwiVGhlIG1heGltdW0gYWxsb3dlZCBudW1iZXIgb2Ygc2Vjb25kIGZhY3RvcnMgb24gYSB1c2VyIGhhcyBiZWVuIGV4Y2VlZGVkLlwiLFwidGVuYW50LWlkLW1pc21hdGNoXCI6XCJUaGUgcHJvdmlkZWQgdGVuYW50IElEIGRvZXMgbm90IG1hdGNoIHRoZSBBdXRoIGluc3RhbmNlJ3MgdGVuYW50IElEXCIsdGltZW91dDpcIlRoZSBvcGVyYXRpb24gaGFzIHRpbWVkIG91dC5cIixcInVzZXItdG9rZW4tZXhwaXJlZFwiOlwiVGhlIHVzZXIncyBjcmVkZW50aWFsIGlzIG5vIGxvbmdlciB2YWxpZC4gVGhlIHVzZXIgbXVzdCBzaWduIGluIGFnYWluLlwiLFxuXCJ0b28tbWFueS1yZXF1ZXN0c1wiOlwiV2UgaGF2ZSBibG9ja2VkIGFsbCByZXF1ZXN0cyBmcm9tIHRoaXMgZGV2aWNlIGR1ZSB0byB1bnVzdWFsIGFjdGl2aXR5LiBUcnkgYWdhaW4gbGF0ZXIuXCIsXCJ1bmF1dGhvcml6ZWQtY29udGludWUtdXJpXCI6XCJUaGUgZG9tYWluIG9mIHRoZSBjb250aW51ZSBVUkwgaXMgbm90IHdoaXRlbGlzdGVkLiAgUGxlYXNlIHdoaXRlbGlzdCB0aGUgZG9tYWluIGluIHRoZSBGaXJlYmFzZSBjb25zb2xlLlwiLFwidW5zdXBwb3J0ZWQtZmlyc3QtZmFjdG9yXCI6XCJFbnJvbGxpbmcgYSBzZWNvbmQgZmFjdG9yIG9yIHNpZ25pbmcgaW4gd2l0aCBhIG11bHRpLWZhY3RvciBhY2NvdW50IHJlcXVpcmVzIHNpZ24taW4gd2l0aCBhIHN1cHBvcnRlZCBmaXJzdCBmYWN0b3IuXCIsXCJ1bnN1cHBvcnRlZC1wZXJzaXN0ZW5jZS10eXBlXCI6XCJUaGUgY3VycmVudCBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBzcGVjaWZpZWQgcGVyc2lzdGVuY2UgdHlwZS5cIixcInVuc3VwcG9ydGVkLXRlbmFudC1vcGVyYXRpb25cIjpcIlRoaXMgb3BlcmF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYSBtdWx0aS10ZW5hbnQgY29udGV4dC5cIixcblwidW52ZXJpZmllZC1lbWFpbFwiOlwiVGhlIG9wZXJhdGlvbiByZXF1aXJlcyBhIHZlcmlmaWVkIGVtYWlsLlwiLFwidXNlci1jYW5jZWxsZWRcIjpcIlRoZSB1c2VyIGRpZCBub3QgZ3JhbnQgeW91ciBhcHBsaWNhdGlvbiB0aGUgcGVybWlzc2lvbnMgaXQgcmVxdWVzdGVkLlwiLFwidXNlci1ub3QtZm91bmRcIjpcIlRoZXJlIGlzIG5vIHVzZXIgcmVjb3JkIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpZGVudGlmaWVyLiBUaGUgdXNlciBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQuXCIsXCJ1c2VyLWRpc2FibGVkXCI6XCJUaGUgdXNlciBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkIGJ5IGFuIGFkbWluaXN0cmF0b3IuXCIsXCJ1c2VyLW1pc21hdGNoXCI6XCJUaGUgc3VwcGxpZWQgY3JlZGVudGlhbHMgZG8gbm90IGNvcnJlc3BvbmQgdG8gdGhlIHByZXZpb3VzbHkgc2lnbmVkIGluIHVzZXIuXCIsXCJ1c2VyLXNpZ25lZC1vdXRcIjpcIlwiLFwid2Vhay1wYXNzd29yZFwiOlwiVGhlIHBhc3N3b3JkIG11c3QgYmUgNiBjaGFyYWN0ZXJzIGxvbmcgb3IgbW9yZS5cIixcblwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIjpcIlRoaXMgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkIG9yIDNyZCBwYXJ0eSBjb29raWVzIGFuZCBkYXRhIG1heSBiZSBkaXNhYmxlZC5cIn07dmFyIEJhPXtsZDp7VWE6XCJodHRwczovL3N0YWdpbmctaWRlbnRpdHl0b29sa2l0LnNhbmRib3guZ29vZ2xlYXBpcy5jb20vaWRlbnRpdHl0b29sa2l0L3YzL3JlbHlpbmdwYXJ0eS9cIiwkYTpcImh0dHBzOi8vc3RhZ2luZy1zZWN1cmV0b2tlbi5zYW5kYm94Lmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCIsWGE6XCJodHRwczovL3N0YWdpbmctaWRlbnRpdHl0b29sa2l0LnNhbmRib3guZ29vZ2xlYXBpcy5jb20vdjIvXCIsaWQ6XCJiXCJ9LHNkOntVYTpcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2lkZW50aXR5dG9vbGtpdC92My9yZWx5aW5ncGFydHkvXCIsJGE6XCJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCIsWGE6XCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92Mi9cIixpZDpcInBcIn0sdWQ6e1VhOlwiaHR0cHM6Ly9zdGFnaW5nLXd3dy5zYW5kYm94Lmdvb2dsZWFwaXMuY29tL2lkZW50aXR5dG9vbGtpdC92My9yZWx5aW5ncGFydHkvXCIsXG4kYTpcImh0dHBzOi8vc3RhZ2luZy1zZWN1cmV0b2tlbi5zYW5kYm94Lmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCIsWGE6XCJodHRwczovL3N0YWdpbmctaWRlbnRpdHl0b29sa2l0LnNhbmRib3guZ29vZ2xlYXBpcy5jb20vdjIvXCIsaWQ6XCJzXCJ9LHZkOntVYTpcImh0dHBzOi8vd3d3LWdvb2dsZWFwaXMtdGVzdC5zYW5kYm94Lmdvb2dsZS5jb20vaWRlbnRpdHl0b29sa2l0L3YzL3JlbHlpbmdwYXJ0eS9cIiwkYTpcImh0dHBzOi8vdGVzdC1zZWN1cmV0b2tlbi5zYW5kYm94Lmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCIsWGE6XCJodHRwczovL3Rlc3QtaWRlbnRpdHl0b29sa2l0LnNhbmRib3guZ29vZ2xlYXBpcy5jb20vdjIvXCIsaWQ6XCJ0XCJ9fTtcbmZ1bmN0aW9uIENhKGEpe2Zvcih2YXIgYiBpbiBCYSlpZihCYVtiXS5pZD09PWEpcmV0dXJuIGE9QmFbYl0se2ZpcmViYXNlRW5kcG9pbnQ6YS5VYSxzZWN1cmVUb2tlbkVuZHBvaW50OmEuJGEsaWRlbnRpdHlQbGF0Zm9ybUVuZHBvaW50OmEuWGF9O3JldHVybiBudWxsfXZhciBEYTtEYT1DYShcIl9fRUlEX19cIik/XCJfX0VJRF9fXCI6dm9pZCAwO2Z1bmN0aW9uIEVhKGEpe2lmKCFhKXJldHVybiExO3RyeXtyZXR1cm4hIWEuJGdvb2dfVGhlbmFibGV9Y2F0Y2goYil7cmV0dXJuITF9fTtmdW5jdGlvbiB1KGEpe2lmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKUVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsdSk7ZWxzZXt2YXIgYj1FcnJvcigpLnN0YWNrO2ImJih0aGlzLnN0YWNrPWIpfWEmJih0aGlzLm1lc3NhZ2U9U3RyaW5nKGEpKX1yKHUsRXJyb3IpO3UucHJvdG90eXBlLm5hbWU9XCJDdXN0b21FcnJvclwiO2Z1bmN0aW9uIEZhKGEsYil7YT1hLnNwbGl0KFwiJXNcIik7Zm9yKHZhciBjPVwiXCIsZD1hLmxlbmd0aC0xLGU9MDtlPGQ7ZSsrKWMrPWFbZV0rKGU8Yi5sZW5ndGg/YltlXTpcIiVzXCIpO3UuY2FsbCh0aGlzLGMrYVtkXSl9cihGYSx1KTtGYS5wcm90b3R5cGUubmFtZT1cIkFzc2VydGlvbkVycm9yXCI7ZnVuY3Rpb24gR2EoYSxiKXt0aHJvdyBuZXcgRmEoXCJGYWlsdXJlXCIrKGE/XCI6IFwiK2E6XCJcIiksQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTt9O2Z1bmN0aW9uIEhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5iPTA7dGhpcy5hPW51bGx9SGEucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe2lmKDA8dGhpcy5iKXt0aGlzLmItLTt2YXIgYT10aGlzLmE7dGhpcy5hPWEubmV4dDthLm5leHQ9bnVsbH1lbHNlIGE9dGhpcy5jKCk7cmV0dXJuIGF9O2Z1bmN0aW9uIElhKGEsYil7YS5mKGIpOzEwMD5hLmImJihhLmIrKyxiLm5leHQ9YS5hLGEuYT1iKX07ZnVuY3Rpb24gSmEoKXt0aGlzLmI9dGhpcy5hPW51bGx9dmFyIExhPW5ldyBIYShmdW5jdGlvbigpe3JldHVybiBuZXcgS2F9LGZ1bmN0aW9uKGEpe2EucmVzZXQoKX0pO0phLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1MYS5nZXQoKTtjLnNldChhLGIpO3RoaXMuYj90aGlzLmIubmV4dD1jOnRoaXMuYT1jO3RoaXMuYj1jfTtmdW5jdGlvbiBNYSgpe3ZhciBhPU5hLGI9bnVsbDthLmEmJihiPWEuYSxhLmE9YS5hLm5leHQsYS5hfHwoYS5iPW51bGwpLGIubmV4dD1udWxsKTtyZXR1cm4gYn1mdW5jdGlvbiBLYSgpe3RoaXMubmV4dD10aGlzLmI9dGhpcy5hPW51bGx9S2EucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3RoaXMuYT1hO3RoaXMuYj1iO3RoaXMubmV4dD1udWxsfTtLYS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLm5leHQ9dGhpcy5iPXRoaXMuYT1udWxsfTt2YXIgT2E9QXJyYXkucHJvdG90eXBlLmluZGV4T2Y/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuXCJzdHJpbmdcIiE9PXR5cGVvZiBifHwxIT1iLmxlbmd0aD8tMTphLmluZGV4T2YoYiwwKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihjIGluIGEmJmFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSx3PUFycmF5LnByb3RvdHlwZS5mb3JFYWNoP2Z1bmN0aW9uKGEsYixjKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPVwic3RyaW5nXCI9PT10eXBlb2YgYT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8ZDtmKyspZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSl9O1xuZnVuY3Rpb24gUGEoYSxiKXtmb3IodmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBhP2Euc3BsaXQoXCJcIik6YSxkPWEubGVuZ3RoLTE7MDw9ZDstLWQpZCBpbiBjJiZiLmNhbGwodm9pZCAwLGNbZF0sZCxhKX1cbnZhciBRYT1BcnJheS5wcm90b3R5cGUuZmlsdGVyP2Z1bmN0aW9uKGEsYil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgsZD1bXSxlPTAsZj1cInN0cmluZ1wiPT09dHlwZW9mIGE/YS5zcGxpdChcIlwiKTphLGc9MDtnPGM7ZysrKWlmKGcgaW4gZil7dmFyIGg9ZltnXTtiLmNhbGwodm9pZCAwLGgsZyxhKSYmKGRbZSsrXT1oKX1yZXR1cm4gZH0sUmE9QXJyYXkucHJvdG90eXBlLm1hcD9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYSxiLHZvaWQgMCl9OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEubGVuZ3RoLGQ9QXJyYXkoYyksZT1cInN0cmluZ1wiPT09dHlwZW9mIGE/YS5zcGxpdChcIlwiKTphLGY9MDtmPGM7ZisrKWYgaW4gZSYmKGRbZl09Yi5jYWxsKHZvaWQgMCxlW2ZdLGYsYSkpO3JldHVybiBkfSxTYT1BcnJheS5wcm90b3R5cGUuc29tZT9mdW5jdGlvbihhLFxuYil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYSxiLHZvaWQgMCl9OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEubGVuZ3RoLGQ9XCJzdHJpbmdcIj09PXR5cGVvZiBhP2Euc3BsaXQoXCJcIik6YSxlPTA7ZTxjO2UrKylpZihlIGluIGQmJmIuY2FsbCh2b2lkIDAsZFtlXSxlLGEpKXJldHVybiEwO3JldHVybiExfTtmdW5jdGlvbiBUYShhKXthOnt2YXIgYj1VYTtmb3IodmFyIGM9YS5sZW5ndGgsZD1cInN0cmluZ1wiPT09dHlwZW9mIGE/YS5zcGxpdChcIlwiKTphLGU9MDtlPGM7ZSsrKWlmKGUgaW4gZCYmYi5jYWxsKHZvaWQgMCxkW2VdLGUsYSkpe2I9ZTticmVhayBhfWI9LTF9cmV0dXJuIDA+Yj9udWxsOlwic3RyaW5nXCI9PT10eXBlb2YgYT9hLmNoYXJBdChiKTphW2JdfWZ1bmN0aW9uIFZhKGEsYil7cmV0dXJuIDA8PU9hKGEsYil9XG5mdW5jdGlvbiBXYShhLGIpe2I9T2EoYSxiKTt2YXIgYzsoYz0wPD1iKSYmQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGEsYiwxKTtyZXR1cm4gY31mdW5jdGlvbiBYYShhLGIpe3ZhciBjPTA7UGEoYSxmdW5jdGlvbihkLGUpe2IuY2FsbCh2b2lkIDAsZCxlLGEpJiYxPT1BcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYSxlLDEpLmxlbmd0aCYmYysrfSl9ZnVuY3Rpb24gWWEoYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sYXJndW1lbnRzKX1mdW5jdGlvbiBaYShhKXt2YXIgYj1hLmxlbmd0aDtpZigwPGIpe2Zvcih2YXIgYz1BcnJheShiKSxkPTA7ZDxiO2QrKyljW2RdPWFbZF07cmV0dXJuIGN9cmV0dXJuW119O3ZhciAkYT1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudHJpbSgpfTpmdW5jdGlvbihhKXtyZXR1cm4vXltcXHNcXHhhMF0qKFtcXHNcXFNdKj8pW1xcc1xceGEwXSokLy5leGVjKGEpWzFdfSxhYj0vJi9nLGJiPS88L2csY2I9Lz4vZyxkYj0vXCIvZyxlYj0vJy9nLGZiPS9cXHgwMC9nLGdiPS9bXFx4MDAmPD5cIiddLztmdW5jdGlvbiB4KGEsYil7cmV0dXJuLTEhPWEuaW5kZXhPZihiKX1mdW5jdGlvbiBoYihhLGIpe3JldHVybiBhPGI/LTE6YT5iPzE6MH07dmFyIGliO2E6e3ZhciBqYj1sLm5hdmlnYXRvcjtpZihqYil7dmFyIGtiPWpiLnVzZXJBZ2VudDtpZihrYil7aWI9a2I7YnJlYWsgYX19aWI9XCJcIn1mdW5jdGlvbiB5KGEpe3JldHVybiB4KGliLGEpfTtmdW5jdGlvbiBsYihhLGIpe2Zvcih2YXIgYyBpbiBhKWIuY2FsbCh2b2lkIDAsYVtjXSxjLGEpfWZ1bmN0aW9uIG1iKGEpe2Zvcih2YXIgYiBpbiBhKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIG5iKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSliW2NdPWFbY107cmV0dXJuIGJ9dmFyIG9iPVwiY29uc3RydWN0b3IgaGFzT3duUHJvcGVydHkgaXNQcm90b3R5cGVPZiBwcm9wZXJ0eUlzRW51bWVyYWJsZSB0b0xvY2FsZVN0cmluZyB0b1N0cmluZyB2YWx1ZU9mXCIuc3BsaXQoXCIgXCIpO2Z1bmN0aW9uIHooYSxiKXtmb3IodmFyIGMsZCxlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7ZD1hcmd1bWVudHNbZV07Zm9yKGMgaW4gZClhW2NdPWRbY107Zm9yKHZhciBmPTA7ZjxvYi5sZW5ndGg7ZisrKWM9b2JbZl0sT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGQsYykmJihhW2NdPWRbY10pfX07ZnVuY3Rpb24gcGIoYSxiKXthOnt0cnl7dmFyIGM9YSYmYS5vd25lckRvY3VtZW50LGQ9YyYmKGMuZGVmYXVsdFZpZXd8fGMucGFyZW50V2luZG93KTtkPWR8fGw7aWYoZC5FbGVtZW50JiZkLkxvY2F0aW9uKXt2YXIgZT1kO2JyZWFrIGF9fWNhdGNoKGcpe31lPW51bGx9aWYoZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGVbYl0mJighYXx8IShhIGluc3RhbmNlb2YgZVtiXSkmJihhIGluc3RhbmNlb2YgZS5Mb2NhdGlvbnx8YSBpbnN0YW5jZW9mIGUuRWxlbWVudCkpKXtpZihuKGEpKXRyeXt2YXIgZj1hLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lfHxhLmNvbnN0cnVjdG9yLm5hbWV8fE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX1jYXRjaChnKXtmPVwiPG9iamVjdCBjb3VsZCBub3QgYmUgc3RyaW5naWZpZWQ+XCJ9ZWxzZSBmPXZvaWQgMD09PWE/XCJ1bmRlZmluZWRcIjpudWxsPT09YT9cIm51bGxcIjp0eXBlb2YgYTtHYShcIkFyZ3VtZW50IGlzIG5vdCBhICVzIChvciBhIG5vbi1FbGVtZW50LCBub24tTG9jYXRpb24gbW9jayk7IGdvdDogJXNcIixcbmIsZil9fTtmdW5jdGlvbiBxYihhLGIpe3RoaXMuYT1hPT09cmImJmJ8fFwiXCI7dGhpcy5iPXNifXFiLnByb3RvdHlwZS50YT0hMDtxYi5wcm90b3R5cGUuc2E9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTtxYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIkNvbnN0e1wiK3RoaXMuYStcIn1cIn07ZnVuY3Rpb24gdGIoYSl7aWYoYSBpbnN0YW5jZW9mIHFiJiZhLmNvbnN0cnVjdG9yPT09cWImJmEuYj09PXNiKXJldHVybiBhLmE7R2EoXCJleHBlY3RlZCBvYmplY3Qgb2YgdHlwZSBDb25zdCwgZ290ICdcIithK1wiJ1wiKTtyZXR1cm5cInR5cGVfZXJyb3I6Q29uc3RcIn12YXIgc2I9e30scmI9e307dmFyIHViO2Z1bmN0aW9uIHZiKCl7aWYodm9pZCAwPT09dWIpe3ZhciBhPW51bGwsYj1sLnRydXN0ZWRUeXBlcztpZihiJiZiLmNyZWF0ZVBvbGljeSl7dHJ5e2E9Yi5jcmVhdGVQb2xpY3koXCJnb29nI2h0bWxcIix7Y3JlYXRlSFRNTDp3YSxjcmVhdGVTY3JpcHQ6d2EsY3JlYXRlU2NyaXB0VVJMOndhfSl9Y2F0Y2goYyl7bC5jb25zb2xlJiZsLmNvbnNvbGUuZXJyb3IoYy5tZXNzYWdlKX11Yj1hfWVsc2UgdWI9YX1yZXR1cm4gdWJ9O2Z1bmN0aW9uIHdiKGEsYil7dGhpcy5hPWI9PT14Yj9hOlwiXCJ9d2IucHJvdG90eXBlLnRhPSEwO3diLnByb3RvdHlwZS5zYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmEudG9TdHJpbmcoKX07d2IucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJUcnVzdGVkUmVzb3VyY2VVcmx7XCIrdGhpcy5hK1wifVwifTtmdW5jdGlvbiB5YihhKXtpZihhIGluc3RhbmNlb2Ygd2ImJmEuY29uc3RydWN0b3I9PT13YilyZXR1cm4gYS5hO0dhKFwiZXhwZWN0ZWQgb2JqZWN0IG9mIHR5cGUgVHJ1c3RlZFJlc291cmNlVXJsLCBnb3QgJ1wiK2ErXCInIG9mIHR5cGUgXCIrbWEoYSkpO3JldHVyblwidHlwZV9lcnJvcjpUcnVzdGVkUmVzb3VyY2VVcmxcIn1cbmZ1bmN0aW9uIHpiKGEsYil7dmFyIGM9dGIoYSk7aWYoIUFiLnRlc3QoYykpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIFRydXN0ZWRSZXNvdXJjZVVybCBmb3JtYXQ6IFwiK2MpO2E9Yy5yZXBsYWNlKEJiLGZ1bmN0aW9uKGQsZSl7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGUpKXRocm93IEVycm9yKCdGb3VuZCBtYXJrZXIsIFwiJytlKydcIiwgaW4gZm9ybWF0IHN0cmluZywgXCInK2MrJ1wiLCBidXQgbm8gdmFsaWQgbGFiZWwgbWFwcGluZyBmb3VuZCBpbiBhcmdzOiAnK0pTT04uc3RyaW5naWZ5KGIpKTtkPWJbZV07cmV0dXJuIGQgaW5zdGFuY2VvZiBxYj90YihkKTplbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGQpKX0pO3JldHVybiBDYihhKX12YXIgQmI9LyV7KFxcdyspfS9nLEFiPS9eKChodHRwczopP1xcL1xcL1swLTlhLXouOltcXF0tXStcXC98XFwvW14vXFxcXF18W146L1xcXFwlXStcXC98W146L1xcXFwlXSpbPyNdfGFib3V0OmJsYW5rIykvaSx4Yj17fTtcbmZ1bmN0aW9uIENiKGEpe3ZhciBiPXZiKCk7YT1iP2IuY3JlYXRlU2NyaXB0VVJMKGEpOmE7cmV0dXJuIG5ldyB3YihhLHhiKX07ZnVuY3Rpb24gQyhhLGIpe3RoaXMuYT1iPT09RGI/YTpcIlwifUMucHJvdG90eXBlLnRhPSEwO0MucHJvdG90eXBlLnNhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS50b1N0cmluZygpfTtDLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiU2FmZVVybHtcIit0aGlzLmErXCJ9XCJ9O2Z1bmN0aW9uIEViKGEpe2lmKGEgaW5zdGFuY2VvZiBDJiZhLmNvbnN0cnVjdG9yPT09QylyZXR1cm4gYS5hO0dhKFwiZXhwZWN0ZWQgb2JqZWN0IG9mIHR5cGUgU2FmZVVybCwgZ290ICdcIithK1wiJyBvZiB0eXBlIFwiK21hKGEpKTtyZXR1cm5cInR5cGVfZXJyb3I6U2FmZVVybFwifVxudmFyIEZiPS9eKD86YXVkaW9cXC8oPzozZ3BwMnwzZ3BwfGFhY3xMMTZ8bWlkaXxtcDN8bXA0fG1wZWd8b2dhfG9nZ3xvcHVzfHgtbTRhfHgtbWF0cm9za2F8eC13YXZ8d2F2fHdlYm0pfGZvbnRcXC9cXHcrfGltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwfHgtaWNvbil8dGV4dFxcL2Nzdnx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtfHF1aWNrdGltZXx4LW1hdHJvc2thKSkoPzo7XFx3Kz0oPzpcXHcrfFwiW1xcdzssPSBdK1wiKSkqJC9pLEdiPS9eZGF0YTooLiopO2Jhc2U2NCxbYS16MC05K1xcL10rPSokL2ksSGI9L14oPzooPzpodHRwcz98bWFpbHRvfGZ0cCk6fFteOi8/I10qKD86Wy8/I118JCkpL2k7XG5mdW5jdGlvbiBJYihhKXtpZihhIGluc3RhbmNlb2YgQylyZXR1cm4gYTthPVwib2JqZWN0XCI9PXR5cGVvZiBhJiZhLnRhP2Euc2EoKTpTdHJpbmcoYSk7aWYoSGIudGVzdChhKSlhPW5ldyBDKGEsRGIpO2Vsc2V7YT1TdHJpbmcoYSk7YT1hLnJlcGxhY2UoLyglMEF8JTBEKS9nLFwiXCIpO3ZhciBiPWEubWF0Y2goR2IpO2E9YiYmRmIudGVzdChiWzFdKT9uZXcgQyhhLERiKTpudWxsfXJldHVybiBhfWZ1bmN0aW9uIEpiKGEpe2lmKGEgaW5zdGFuY2VvZiBDKXJldHVybiBhO2E9XCJvYmplY3RcIj09dHlwZW9mIGEmJmEudGE/YS5zYSgpOlN0cmluZyhhKTtIYi50ZXN0KGEpfHwoYT1cImFib3V0OmludmFsaWQjekNsb3N1cmV6XCIpO3JldHVybiBuZXcgQyhhLERiKX12YXIgRGI9e30sS2I9bmV3IEMoXCJhYm91dDppbnZhbGlkI3pDbG9zdXJlelwiLERiKTtmdW5jdGlvbiBMYihhLGIsYyl7dGhpcy5hPWM9PT1NYj9hOlwiXCJ9TGIucHJvdG90eXBlLnRhPSEwO0xiLnByb3RvdHlwZS5zYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmEudG9TdHJpbmcoKX07TGIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJTYWZlSHRtbHtcIit0aGlzLmErXCJ9XCJ9O2Z1bmN0aW9uIE5iKGEpe2lmKGEgaW5zdGFuY2VvZiBMYiYmYS5jb25zdHJ1Y3Rvcj09PUxiKXJldHVybiBhLmE7R2EoXCJleHBlY3RlZCBvYmplY3Qgb2YgdHlwZSBTYWZlSHRtbCwgZ290ICdcIithK1wiJyBvZiB0eXBlIFwiK21hKGEpKTtyZXR1cm5cInR5cGVfZXJyb3I6U2FmZUh0bWxcIn12YXIgTWI9e307ZnVuY3Rpb24gT2IoYSxiKXtwYihhLFwiSFRNTFNjcmlwdEVsZW1lbnRcIik7YS5zcmM9eWIoYik7KGI9YS5vd25lckRvY3VtZW50JiZhLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpJiZiIT1sP2I9a2EoYi5kb2N1bWVudCk6KG51bGw9PT1qYSYmKGphPWthKGwuZG9jdW1lbnQpKSxiPWphKTtiJiZhLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsYil9ZnVuY3Rpb24gUGIoYSxiLGMsZCl7YT1hIGluc3RhbmNlb2YgQz9hOkpiKGEpO2I9Ynx8bDtjPWMgaW5zdGFuY2VvZiBxYj90YihjKTpjfHxcIlwiO3JldHVybiBiLm9wZW4oRWIoYSksYyxkLHZvaWQgMCl9O2Z1bmN0aW9uIFFiKGEsYil7Zm9yKHZhciBjPWEuc3BsaXQoXCIlc1wiKSxkPVwiXCIsZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ZS5sZW5ndGgmJjE8Yy5sZW5ndGg7KWQrPWMuc2hpZnQoKStlLnNoaWZ0KCk7cmV0dXJuIGQrYy5qb2luKFwiJXNcIil9ZnVuY3Rpb24gUmIoYSl7Z2IudGVzdChhKSYmKC0xIT1hLmluZGV4T2YoXCImXCIpJiYoYT1hLnJlcGxhY2UoYWIsXCImYW1wO1wiKSksLTEhPWEuaW5kZXhPZihcIjxcIikmJihhPWEucmVwbGFjZShiYixcIiZsdDtcIikpLC0xIT1hLmluZGV4T2YoXCI+XCIpJiYoYT1hLnJlcGxhY2UoY2IsXCImZ3Q7XCIpKSwtMSE9YS5pbmRleE9mKCdcIicpJiYoYT1hLnJlcGxhY2UoZGIsXCImcXVvdDtcIikpLC0xIT1hLmluZGV4T2YoXCInXCIpJiYoYT1hLnJlcGxhY2UoZWIsXCImIzM5O1wiKSksLTEhPWEuaW5kZXhPZihcIlxceDAwXCIpJiYoYT1hLnJlcGxhY2UoZmIsXCImIzA7XCIpKSk7cmV0dXJuIGF9O2Z1bmN0aW9uIFNiKGEpe1NiW1wiIFwiXShhKTtyZXR1cm4gYX1TYltcIiBcIl09bGE7ZnVuY3Rpb24gVGIoYSxiKXt2YXIgYz1VYjtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsYSk/Y1thXTpjW2FdPWIoYSl9O3ZhciBWYj15KFwiT3BlcmFcIiksV2I9eShcIlRyaWRlbnRcIil8fHkoXCJNU0lFXCIpLFhiPXkoXCJFZGdlXCIpLFliPVhifHxXYixaYj15KFwiR2Vja29cIikmJiEoeChpYi50b0xvd2VyQ2FzZSgpLFwid2Via2l0XCIpJiYheShcIkVkZ2VcIikpJiYhKHkoXCJUcmlkZW50XCIpfHx5KFwiTVNJRVwiKSkmJiF5KFwiRWRnZVwiKSwkYj14KGliLnRvTG93ZXJDYXNlKCksXCJ3ZWJraXRcIikmJiF5KFwiRWRnZVwiKTtmdW5jdGlvbiBhYygpe3ZhciBhPWwuZG9jdW1lbnQ7cmV0dXJuIGE/YS5kb2N1bWVudE1vZGU6dm9pZCAwfXZhciBiYztcbmE6e3ZhciBjYz1cIlwiLGRjPWZ1bmN0aW9uKCl7dmFyIGE9aWI7aWYoWmIpcmV0dXJuL3J2OihbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKFhiKXJldHVybi9FZGdlXFwvKFtcXGRcXC5dKykvLmV4ZWMoYSk7aWYoV2IpcmV0dXJuL1xcYig/Ok1TSUV8cnYpWzogXShbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKCRiKXJldHVybi9XZWJLaXRcXC8oXFxTKykvLmV4ZWMoYSk7aWYoVmIpcmV0dXJuLyg/OlZlcnNpb24pWyBcXC9dPyhcXFMrKS8uZXhlYyhhKX0oKTtkYyYmKGNjPWRjP2RjWzFdOlwiXCIpO2lmKFdiKXt2YXIgZWM9YWMoKTtpZihudWxsIT1lYyYmZWM+cGFyc2VGbG9hdChjYykpe2JjPVN0cmluZyhlYyk7YnJlYWsgYX19YmM9Y2N9dmFyIFViPXt9O1xuZnVuY3Rpb24gZmMoYSl7cmV0dXJuIFRiKGEsZnVuY3Rpb24oKXtmb3IodmFyIGI9MCxjPSRhKFN0cmluZyhiYykpLnNwbGl0KFwiLlwiKSxkPSRhKFN0cmluZyhhKSkuc3BsaXQoXCIuXCIpLGU9TWF0aC5tYXgoYy5sZW5ndGgsZC5sZW5ndGgpLGY9MDswPT1iJiZmPGU7ZisrKXt2YXIgZz1jW2ZdfHxcIlwiLGg9ZFtmXXx8XCJcIjtkb3tnPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGcpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aD0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhoKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2lmKDA9PWdbMF0ubGVuZ3RoJiYwPT1oWzBdLmxlbmd0aClicmVhaztiPWhiKDA9PWdbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoZ1sxXSwxMCksMD09aFsxXS5sZW5ndGg/MDpwYXJzZUludChoWzFdLDEwKSl8fGhiKDA9PWdbMl0ubGVuZ3RoLDA9PWhbMl0ubGVuZ3RoKXx8aGIoZ1syXSxoWzJdKTtnPWdbM107aD1oWzNdfXdoaWxlKDA9PWIpfXJldHVybiAwPD1ifSl9dmFyIGdjO1xuaWYobC5kb2N1bWVudCYmV2Ipe3ZhciBoYz1hYygpO2djPWhjP2hjOnBhcnNlSW50KGJjLDEwKXx8dm9pZCAwfWVsc2UgZ2M9dm9pZCAwO3ZhciBpYz1nYzt0cnl7KG5ldyBzZWxmLk9mZnNjcmVlbkNhbnZhcygwLDApKS5nZXRDb250ZXh0KFwiMmRcIil9Y2F0Y2goYSl7fXZhciBqYz0hV2J8fDk8PU51bWJlcihpYyk7ZnVuY3Rpb24ga2MoYSl7dmFyIGI9ZG9jdW1lbnQ7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhP2IuZ2V0RWxlbWVudEJ5SWQoYSk6YX1mdW5jdGlvbiBsYyhhLGIpe2xiKGIsZnVuY3Rpb24oYyxkKXtjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmYy50YSYmKGM9Yy5zYSgpKTtcInN0eWxlXCI9PWQ/YS5zdHlsZS5jc3NUZXh0PWM6XCJjbGFzc1wiPT1kP2EuY2xhc3NOYW1lPWM6XCJmb3JcIj09ZD9hLmh0bWxGb3I9YzptYy5oYXNPd25Qcm9wZXJ0eShkKT9hLnNldEF0dHJpYnV0ZShtY1tkXSxjKTowPT1kLmxhc3RJbmRleE9mKFwiYXJpYS1cIiwwKXx8MD09ZC5sYXN0SW5kZXhPZihcImRhdGEtXCIsMCk/YS5zZXRBdHRyaWJ1dGUoZCxjKTphW2RdPWN9KX1cbnZhciBtYz17Y2VsbHBhZGRpbmc6XCJjZWxsUGFkZGluZ1wiLGNlbGxzcGFjaW5nOlwiY2VsbFNwYWNpbmdcIixjb2xzcGFuOlwiY29sU3BhblwiLGZyYW1lYm9yZGVyOlwiZnJhbWVCb3JkZXJcIixoZWlnaHQ6XCJoZWlnaHRcIixtYXhsZW5ndGg6XCJtYXhMZW5ndGhcIixub25jZTpcIm5vbmNlXCIscm9sZTpcInJvbGVcIixyb3dzcGFuOlwicm93U3BhblwiLHR5cGU6XCJ0eXBlXCIsdXNlbWFwOlwidXNlTWFwXCIsdmFsaWduOlwidkFsaWduXCIsd2lkdGg6XCJ3aWR0aFwifTtcbmZ1bmN0aW9uIG5jKGEsYixjKXt2YXIgZD1hcmd1bWVudHMsZT1kb2N1bWVudCxmPVN0cmluZyhkWzBdKSxnPWRbMV07aWYoIWpjJiZnJiYoZy5uYW1lfHxnLnR5cGUpKXtmPVtcIjxcIixmXTtnLm5hbWUmJmYucHVzaCgnIG5hbWU9XCInLFJiKGcubmFtZSksJ1wiJyk7aWYoZy50eXBlKXtmLnB1c2goJyB0eXBlPVwiJyxSYihnLnR5cGUpLCdcIicpO3ZhciBoPXt9O3ooaCxnKTtkZWxldGUgaC50eXBlO2c9aH1mLnB1c2goXCI+XCIpO2Y9Zi5qb2luKFwiXCIpfWY9b2MoZSxmKTtnJiYoXCJzdHJpbmdcIj09PXR5cGVvZiBnP2YuY2xhc3NOYW1lPWc6QXJyYXkuaXNBcnJheShnKT9mLmNsYXNzTmFtZT1nLmpvaW4oXCIgXCIpOmxjKGYsZykpOzI8ZC5sZW5ndGgmJnBjKGUsZixkKTtyZXR1cm4gZn1cbmZ1bmN0aW9uIHBjKGEsYixjKXtmdW5jdGlvbiBkKGgpe2gmJmIuYXBwZW5kQ2hpbGQoXCJzdHJpbmdcIj09PXR5cGVvZiBoP2EuY3JlYXRlVGV4dE5vZGUoaCk6aCl9Zm9yKHZhciBlPTI7ZTxjLmxlbmd0aDtlKyspe3ZhciBmPWNbZV07aWYoIW5hKGYpfHxuKGYpJiYwPGYubm9kZVR5cGUpZChmKTtlbHNle2E6e2lmKGYmJlwibnVtYmVyXCI9PXR5cGVvZiBmLmxlbmd0aCl7aWYobihmKSl7dmFyIGc9XCJmdW5jdGlvblwiPT10eXBlb2YgZi5pdGVtfHxcInN0cmluZ1wiPT10eXBlb2YgZi5pdGVtO2JyZWFrIGF9aWYob2EoZikpe2c9XCJmdW5jdGlvblwiPT10eXBlb2YgZi5pdGVtO2JyZWFrIGF9fWc9ITF9dyhnP1phKGYpOmYsZCl9fX1mdW5jdGlvbiBvYyhhLGIpe2I9U3RyaW5nKGIpO1wiYXBwbGljYXRpb24veGh0bWwreG1sXCI9PT1hLmNvbnRlbnRUeXBlJiYoYj1iLnRvTG93ZXJDYXNlKCkpO3JldHVybiBhLmNyZWF0ZUVsZW1lbnQoYil9O2Z1bmN0aW9uIHFjKGEpe2wuc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGE7fSwwKX12YXIgcmM7XG5mdW5jdGlvbiBzYygpe3ZhciBhPWwuTWVzc2FnZUNoYW5uZWw7XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmd2luZG93LnBvc3RNZXNzYWdlJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciYmIXkoXCJQcmVzdG9cIikmJihhPWZ1bmN0aW9uKCl7dmFyIGU9b2MoZG9jdW1lbnQsXCJJRlJBTUVcIik7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKTt2YXIgZj1lLmNvbnRlbnRXaW5kb3c7ZT1mLmRvY3VtZW50O2Uub3BlbigpO2UuY2xvc2UoKTt2YXIgZz1cImNhbGxJbW1lZGlhdGVcIitNYXRoLnJhbmRvbSgpLGg9XCJmaWxlOlwiPT1mLmxvY2F0aW9uLnByb3RvY29sP1wiKlwiOmYubG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2YubG9jYXRpb24uaG9zdDtlPXEoZnVuY3Rpb24obSl7aWYoKFwiKlwiPT1ofHxtLm9yaWdpbj09aCkmJm0uZGF0YT09Zyl0aGlzLnBvcnQxLm9ubWVzc2FnZSgpfSx0aGlzKTtcbmYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixlLCExKTt0aGlzLnBvcnQxPXt9O3RoaXMucG9ydDI9e3Bvc3RNZXNzYWdlOmZ1bmN0aW9uKCl7Zi5wb3N0TWVzc2FnZShnLGgpfX19KTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEmJiF5KFwiVHJpZGVudFwiKSYmIXkoXCJNU0lFXCIpKXt2YXIgYj1uZXcgYSxjPXt9LGQ9YztiLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKHZvaWQgMCE9PWMubmV4dCl7Yz1jLm5leHQ7dmFyIGU9Yy5IYjtjLkhiPW51bGw7ZSgpfX07cmV0dXJuIGZ1bmN0aW9uKGUpe2QubmV4dD17SGI6ZX07ZD1kLm5leHQ7Yi5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19cmV0dXJuIGZ1bmN0aW9uKGUpe2wuc2V0VGltZW91dChlLDApfX07ZnVuY3Rpb24gdGMoYSxiKXt1Y3x8dmMoKTt3Y3x8KHVjKCksd2M9ITApO05hLmFkZChhLGIpfXZhciB1YztmdW5jdGlvbiB2Yygpe2lmKGwuUHJvbWlzZSYmbC5Qcm9taXNlLnJlc29sdmUpe3ZhciBhPWwuUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7dWM9ZnVuY3Rpb24oKXthLnRoZW4oeGMpfX1lbHNlIHVjPWZ1bmN0aW9uKCl7dmFyIGI9eGM7IW9hKGwuc2V0SW1tZWRpYXRlKXx8bC5XaW5kb3cmJmwuV2luZG93LnByb3RvdHlwZSYmIXkoXCJFZGdlXCIpJiZsLldpbmRvdy5wcm90b3R5cGUuc2V0SW1tZWRpYXRlPT1sLnNldEltbWVkaWF0ZT8ocmN8fChyYz1zYygpKSxyYyhiKSk6bC5zZXRJbW1lZGlhdGUoYil9fXZhciB3Yz0hMSxOYT1uZXcgSmE7ZnVuY3Rpb24geGMoKXtmb3IodmFyIGE7YT1NYSgpOyl7dHJ5e2EuYS5jYWxsKGEuYil9Y2F0Y2goYil7cWMoYil9SWEoTGEsYSl9d2M9ITF9O2Z1bmN0aW9uIEQoYSxiKXt0aGlzLmE9eWM7dGhpcy5pPXZvaWQgMDt0aGlzLmY9dGhpcy5iPXRoaXMuYz1udWxsO3RoaXMuZz10aGlzLmg9ITE7aWYoYSE9bGEpdHJ5e3ZhciBjPXRoaXM7YS5jYWxsKGIsZnVuY3Rpb24oZCl7emMoYyxBYyxkKX0sZnVuY3Rpb24oZCl7aWYoIShkIGluc3RhbmNlb2YgQmMpKXRyeXtpZihkIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgZDt0aHJvdyBFcnJvcihcIlByb21pc2UgcmVqZWN0ZWQuXCIpO31jYXRjaChlKXt9emMoYyxDYyxkKX0pfWNhdGNoKGQpe3pjKHRoaXMsQ2MsZCl9fXZhciB5Yz0wLEFjPTIsQ2M9MztmdW5jdGlvbiBEYygpe3RoaXMubmV4dD10aGlzLmY9dGhpcy5iPXRoaXMuZz10aGlzLmE9bnVsbDt0aGlzLmM9ITF9RGMucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5mPXRoaXMuYj10aGlzLmc9dGhpcy5hPW51bGw7dGhpcy5jPSExfTt2YXIgRWM9bmV3IEhhKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEY30sZnVuY3Rpb24oYSl7YS5yZXNldCgpfSk7XG5mdW5jdGlvbiBGYyhhLGIsYyl7dmFyIGQ9RWMuZ2V0KCk7ZC5nPWE7ZC5iPWI7ZC5mPWM7cmV0dXJuIGR9ZnVuY3Rpb24gRShhKXtpZihhIGluc3RhbmNlb2YgRClyZXR1cm4gYTt2YXIgYj1uZXcgRChsYSk7emMoYixBYyxhKTtyZXR1cm4gYn1mdW5jdGlvbiBGKGEpe3JldHVybiBuZXcgRChmdW5jdGlvbihiLGMpe2MoYSl9KX1mdW5jdGlvbiBHYyhhLGIsYyl7SGMoYSxiLGMsbnVsbCl8fHRjKHVhKGIsYSkpfWZ1bmN0aW9uIEljKGEpe3JldHVybiBuZXcgRChmdW5jdGlvbihiLGMpe3ZhciBkPWEubGVuZ3RoLGU9W107aWYoZClmb3IodmFyIGY9ZnVuY3Rpb24ocCx2KXtkLS07ZVtwXT12OzA9PWQmJmIoZSl9LGc9ZnVuY3Rpb24ocCl7YyhwKX0saD0wLG07aDxhLmxlbmd0aDtoKyspbT1hW2hdLEdjKG0sdWEoZixoKSxnKTtlbHNlIGIoZSl9KX1cbmZ1bmN0aW9uIEpjKGEpe3JldHVybiBuZXcgRChmdW5jdGlvbihiKXt2YXIgYz1hLmxlbmd0aCxkPVtdO2lmKGMpZm9yKHZhciBlPWZ1bmN0aW9uKGgsbSxwKXtjLS07ZFtoXT1tP3tRYjohMCx2YWx1ZTpwfTp7UWI6ITEscmVhc29uOnB9OzA9PWMmJmIoZCl9LGY9MCxnO2Y8YS5sZW5ndGg7ZisrKWc9YVtmXSxHYyhnLHVhKGUsZiwhMCksdWEoZSxmLCExKSk7ZWxzZSBiKGQpfSl9RC5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIEtjKHRoaXMsb2EoYSk/YTpudWxsLG9hKGIpP2I6bnVsbCxjKX07RC5wcm90b3R5cGUuJGdvb2dfVGhlbmFibGU9ITA7az1ELnByb3RvdHlwZTtrLm9hPWZ1bmN0aW9uKGEsYil7YT1GYyhhLGEsYik7YS5jPSEwO0xjKHRoaXMsYSk7cmV0dXJuIHRoaXN9O2subz1mdW5jdGlvbihhLGIpe3JldHVybiBLYyh0aGlzLG51bGwsYSxiKX07XG5rLmNhbmNlbD1mdW5jdGlvbihhKXtpZih0aGlzLmE9PXljKXt2YXIgYj1uZXcgQmMoYSk7dGMoZnVuY3Rpb24oKXtNYyh0aGlzLGIpfSx0aGlzKX19O2Z1bmN0aW9uIE1jKGEsYil7aWYoYS5hPT15YylpZihhLmMpe3ZhciBjPWEuYztpZihjLmIpe2Zvcih2YXIgZD0wLGU9bnVsbCxmPW51bGwsZz1jLmI7ZyYmKGcuY3x8KGQrKyxnLmE9PWEmJihlPWcpLCEoZSYmMTxkKSkpO2c9Zy5uZXh0KWV8fChmPWcpO2UmJihjLmE9PXljJiYxPT1kP01jKGMsYik6KGY/KGQ9ZixkLm5leHQ9PWMuZiYmKGMuZj1kKSxkLm5leHQ9ZC5uZXh0Lm5leHQpOk5jKGMpLE9jKGMsZSxDYyxiKSkpfWEuYz1udWxsfWVsc2UgemMoYSxDYyxiKX1mdW5jdGlvbiBMYyhhLGIpe2EuYnx8YS5hIT1BYyYmYS5hIT1DY3x8UGMoYSk7YS5mP2EuZi5uZXh0PWI6YS5iPWI7YS5mPWJ9XG5mdW5jdGlvbiBLYyhhLGIsYyxkKXt2YXIgZT1GYyhudWxsLG51bGwsbnVsbCk7ZS5hPW5ldyBEKGZ1bmN0aW9uKGYsZyl7ZS5nPWI/ZnVuY3Rpb24oaCl7dHJ5e3ZhciBtPWIuY2FsbChkLGgpO2YobSl9Y2F0Y2gocCl7ZyhwKX19OmY7ZS5iPWM/ZnVuY3Rpb24oaCl7dHJ5e3ZhciBtPWMuY2FsbChkLGgpO3ZvaWQgMD09PW0mJmggaW5zdGFuY2VvZiBCYz9nKGgpOmYobSl9Y2F0Y2gocCl7ZyhwKX19Omd9KTtlLmEuYz1hO0xjKGEsZSk7cmV0dXJuIGUuYX1rLiRjPWZ1bmN0aW9uKGEpe3RoaXMuYT15Yzt6Yyh0aGlzLEFjLGEpfTtrLmFkPWZ1bmN0aW9uKGEpe3RoaXMuYT15Yzt6Yyh0aGlzLENjLGEpfTtcbmZ1bmN0aW9uIHpjKGEsYixjKXthLmE9PXljJiYoYT09PWMmJihiPUNjLGM9bmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2Fubm90IHJlc29sdmUgdG8gaXRzZWxmXCIpKSxhLmE9MSxIYyhjLGEuJGMsYS5hZCxhKXx8KGEuaT1jLGEuYT1iLGEuYz1udWxsLFBjKGEpLGIhPUNjfHxjIGluc3RhbmNlb2YgQmN8fFFjKGEsYykpKX1mdW5jdGlvbiBIYyhhLGIsYyxkKXtpZihhIGluc3RhbmNlb2YgRClyZXR1cm4gTGMoYSxGYyhifHxsYSxjfHxudWxsLGQpKSwhMDtpZihFYShhKSlyZXR1cm4gYS50aGVuKGIsYyxkKSwhMDtpZihuKGEpKXRyeXt2YXIgZT1hLnRoZW47aWYob2EoZSkpcmV0dXJuIFJjKGEsZSxiLGMsZCksITB9Y2F0Y2goZil7cmV0dXJuIGMuY2FsbChkLGYpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gUmMoYSxiLGMsZCxlKXtmdW5jdGlvbiBmKG0pe2h8fChoPSEwLGQuY2FsbChlLG0pKX1mdW5jdGlvbiBnKG0pe2h8fChoPSEwLGMuY2FsbChlLG0pKX12YXIgaD0hMTt0cnl7Yi5jYWxsKGEsZyxmKX1jYXRjaChtKXtmKG0pfX1mdW5jdGlvbiBQYyhhKXthLmh8fChhLmg9ITAsdGMoYS5nYyxhKSl9ZnVuY3Rpb24gTmMoYSl7dmFyIGI9bnVsbDthLmImJihiPWEuYixhLmI9Yi5uZXh0LGIubmV4dD1udWxsKTthLmJ8fChhLmY9bnVsbCk7cmV0dXJuIGJ9ay5nYz1mdW5jdGlvbigpe2Zvcih2YXIgYTthPU5jKHRoaXMpOylPYyh0aGlzLGEsdGhpcy5hLHRoaXMuaSk7dGhpcy5oPSExfTtcbmZ1bmN0aW9uIE9jKGEsYixjLGQpe2lmKGM9PUNjJiZiLmImJiFiLmMpZm9yKDthJiZhLmc7YT1hLmMpYS5nPSExO2lmKGIuYSliLmEuYz1udWxsLFNjKGIsYyxkKTtlbHNlIHRyeXtiLmM/Yi5nLmNhbGwoYi5mKTpTYyhiLGMsZCl9Y2F0Y2goZSl7VGMuY2FsbChudWxsLGUpfUlhKEVjLGIpfWZ1bmN0aW9uIFNjKGEsYixjKXtiPT1BYz9hLmcuY2FsbChhLmYsYyk6YS5iJiZhLmIuY2FsbChhLmYsYyl9ZnVuY3Rpb24gUWMoYSxiKXthLmc9ITA7dGMoZnVuY3Rpb24oKXthLmcmJlRjLmNhbGwobnVsbCxiKX0pfXZhciBUYz1xYztmdW5jdGlvbiBCYyhhKXt1LmNhbGwodGhpcyxhKX1yKEJjLHUpO0JjLnByb3RvdHlwZS5uYW1lPVwiY2FuY2VsXCI7ZnVuY3Rpb24gVWMoKXswIT1WYyYmKFdjW3BhKHRoaXMpXT10aGlzKTt0aGlzLnlhPXRoaXMueWE7dGhpcy5wYT10aGlzLnBhfXZhciBWYz0wLFdjPXt9O1VjLnByb3RvdHlwZS55YT0hMTtmdW5jdGlvbiBYYyhhKXtpZighYS55YSYmKGEueWE9ITAsYS5EYSgpLDAhPVZjKSl7dmFyIGI9cGEoYSk7aWYoMCE9VmMmJmEucGEmJjA8YS5wYS5sZW5ndGgpdGhyb3cgRXJyb3IoYStcIiBkaWQgbm90IGVtcHR5IGl0cyBvbkRpc3Bvc2VDYWxsYmFja3MgcXVldWUuIFRoaXMgcHJvYmFibHkgbWVhbnMgaXQgb3ZlcnJvZGUgZGlzcG9zZSgpIG9yIGRpc3Bvc2VJbnRlcm5hbCgpIHdpdGhvdXQgY2FsbGluZyB0aGUgc3VwZXJjbGFzcycgbWV0aG9kLlwiKTtkZWxldGUgV2NbYl19fVVjLnByb3RvdHlwZS5EYT1mdW5jdGlvbigpe2lmKHRoaXMucGEpZm9yKDt0aGlzLnBhLmxlbmd0aDspdGhpcy5wYS5zaGlmdCgpKCl9O3ZhciBZYz1PYmplY3QuZnJlZXplfHxmdW5jdGlvbihhKXtyZXR1cm4gYX07dmFyIFpjPSFXYnx8OTw9TnVtYmVyKGljKSwkYz1XYiYmIWZjKFwiOVwiKSxhZD1mdW5jdGlvbigpe2lmKCFsLmFkZEV2ZW50TGlzdGVuZXJ8fCFPYmplY3QuZGVmaW5lUHJvcGVydHkpcmV0dXJuITE7dmFyIGE9ITEsYj1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe2E9ITB9fSk7dHJ5e2wuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixsYSxiKSxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsbGEsYil9Y2F0Y2goYyl7fXJldHVybiBhfSgpO2Z1bmN0aW9uIEcoYSxiKXt0aGlzLnR5cGU9YTt0aGlzLmI9dGhpcy50YXJnZXQ9Yjt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITF9Ry5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9O2Z1bmN0aW9uIGJkKGEsYil7Ry5jYWxsKHRoaXMsYT9hLnR5cGU6XCJcIik7dGhpcy5yZWxhdGVkVGFyZ2V0PXRoaXMuYj10aGlzLnRhcmdldD1udWxsO3RoaXMuYnV0dG9uPXRoaXMuc2NyZWVuWT10aGlzLnNjcmVlblg9dGhpcy5jbGllbnRZPXRoaXMuY2xpZW50WD0wO3RoaXMua2V5PVwiXCI7dGhpcy5tZXRhS2V5PXRoaXMuc2hpZnRLZXk9dGhpcy5hbHRLZXk9dGhpcy5jdHJsS2V5PSExO3RoaXMucG9pbnRlcklkPTA7dGhpcy5wb2ludGVyVHlwZT1cIlwiO3RoaXMuYT1udWxsO2lmKGEpe3ZhciBjPXRoaXMudHlwZT1hLnR5cGUsZD1hLmNoYW5nZWRUb3VjaGVzJiZhLmNoYW5nZWRUb3VjaGVzLmxlbmd0aD9hLmNoYW5nZWRUb3VjaGVzWzBdOm51bGw7dGhpcy50YXJnZXQ9YS50YXJnZXR8fGEuc3JjRWxlbWVudDt0aGlzLmI9YjtpZihiPWEucmVsYXRlZFRhcmdldCl7aWYoWmIpe2E6e3RyeXtTYihiLm5vZGVOYW1lKTt2YXIgZT0hMDticmVhayBhfWNhdGNoKGYpe31lPSExfWV8fChiPW51bGwpfX1lbHNlXCJtb3VzZW92ZXJcIj09XG5jP2I9YS5mcm9tRWxlbWVudDpcIm1vdXNlb3V0XCI9PWMmJihiPWEudG9FbGVtZW50KTt0aGlzLnJlbGF0ZWRUYXJnZXQ9YjtkPyh0aGlzLmNsaWVudFg9dm9pZCAwIT09ZC5jbGllbnRYP2QuY2xpZW50WDpkLnBhZ2VYLHRoaXMuY2xpZW50WT12b2lkIDAhPT1kLmNsaWVudFk/ZC5jbGllbnRZOmQucGFnZVksdGhpcy5zY3JlZW5YPWQuc2NyZWVuWHx8MCx0aGlzLnNjcmVlblk9ZC5zY3JlZW5ZfHwwKToodGhpcy5jbGllbnRYPXZvaWQgMCE9PWEuY2xpZW50WD9hLmNsaWVudFg6YS5wYWdlWCx0aGlzLmNsaWVudFk9dm9pZCAwIT09YS5jbGllbnRZP2EuY2xpZW50WTphLnBhZ2VZLHRoaXMuc2NyZWVuWD1hLnNjcmVlblh8fDAsdGhpcy5zY3JlZW5ZPWEuc2NyZWVuWXx8MCk7dGhpcy5idXR0b249YS5idXR0b247dGhpcy5rZXk9YS5rZXl8fFwiXCI7dGhpcy5jdHJsS2V5PWEuY3RybEtleTt0aGlzLmFsdEtleT1hLmFsdEtleTt0aGlzLnNoaWZ0S2V5PWEuc2hpZnRLZXk7dGhpcy5tZXRhS2V5PVxuYS5tZXRhS2V5O3RoaXMucG9pbnRlcklkPWEucG9pbnRlcklkfHwwO3RoaXMucG9pbnRlclR5cGU9XCJzdHJpbmdcIj09PXR5cGVvZiBhLnBvaW50ZXJUeXBlP2EucG9pbnRlclR5cGU6Y2RbYS5wb2ludGVyVHlwZV18fFwiXCI7dGhpcy5hPWE7YS5kZWZhdWx0UHJldmVudGVkJiZ0aGlzLnByZXZlbnREZWZhdWx0KCl9fXIoYmQsRyk7dmFyIGNkPVljKHsyOlwidG91Y2hcIiwzOlwicGVuXCIsNDpcIm1vdXNlXCJ9KTtiZC5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtiZC5iYi5wcmV2ZW50RGVmYXVsdC5jYWxsKHRoaXMpO3ZhciBhPXRoaXMuYTtpZihhLnByZXZlbnREZWZhdWx0KWEucHJldmVudERlZmF1bHQoKTtlbHNlIGlmKGEucmV0dXJuVmFsdWU9ITEsJGMpdHJ5e2lmKGEuY3RybEtleXx8MTEyPD1hLmtleUNvZGUmJjEyMz49YS5rZXlDb2RlKWEua2V5Q29kZT0tMX1jYXRjaChiKXt9fTtiZC5wcm90b3R5cGUuZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF9O3ZhciBkZD1cImNsb3N1cmVfbGlzdGVuYWJsZV9cIisoMUU2Kk1hdGgucmFuZG9tKCl8MCksZWQ9MDtmdW5jdGlvbiBmZChhLGIsYyxkLGUpe3RoaXMubGlzdGVuZXI9YTt0aGlzLnByb3h5PW51bGw7dGhpcy5zcmM9Yjt0aGlzLnR5cGU9Yzt0aGlzLmNhcHR1cmU9ISFkO3RoaXMuV2E9ZTt0aGlzLmtleT0rK2VkO3RoaXMud2E9dGhpcy5RYT0hMX1mdW5jdGlvbiBnZChhKXthLndhPSEwO2EubGlzdGVuZXI9bnVsbDthLnByb3h5PW51bGw7YS5zcmM9bnVsbDthLldhPW51bGx9O2Z1bmN0aW9uIGhkKGEpe3RoaXMuc3JjPWE7dGhpcy5hPXt9O3RoaXMuYj0wfWhkLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLnRvU3RyaW5nKCk7YT10aGlzLmFbZl07YXx8KGE9dGhpcy5hW2ZdPVtdLHRoaXMuYisrKTt2YXIgZz1pZChhLGIsZCxlKTstMTxnPyhiPWFbZ10sY3x8KGIuUWE9ITEpKTooYj1uZXcgZmQoYix0aGlzLnNyYyxmLCEhZCxlKSxiLlFhPWMsYS5wdXNoKGIpKTtyZXR1cm4gYn07ZnVuY3Rpb24gamQoYSxiKXt2YXIgYz1iLnR5cGU7YyBpbiBhLmEmJldhKGEuYVtjXSxiKSYmKGdkKGIpLDA9PWEuYVtjXS5sZW5ndGgmJihkZWxldGUgYS5hW2NdLGEuYi0tKSl9ZnVuY3Rpb24gaWQoYSxiLGMsZCl7Zm9yKHZhciBlPTA7ZTxhLmxlbmd0aDsrK2Upe3ZhciBmPWFbZV07aWYoIWYud2EmJmYubGlzdGVuZXI9PWImJmYuY2FwdHVyZT09ISFjJiZmLldhPT1kKXJldHVybiBlfXJldHVybi0xfTt2YXIga2Q9XCJjbG9zdXJlX2xtX1wiKygxRTYqTWF0aC5yYW5kb20oKXwwKSxsZD17fSxtZD0wO2Z1bmN0aW9uIG5kKGEsYixjLGQsZSl7aWYoZCYmZC5vbmNlKW9kKGEsYixjLGQsZSk7ZWxzZSBpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKW5kKGEsYltmXSxjLGQsZSk7ZWxzZSBjPXBkKGMpLGEmJmFbZGRdP3FkKGEsYixjLG4oZCk/ISFkLmNhcHR1cmU6ISFkLGUpOnJkKGEsYixjLCExLGQsZSl9XG5mdW5jdGlvbiByZChhLGIsYyxkLGUsZil7aWYoIWIpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGV2ZW50IHR5cGVcIik7dmFyIGc9bihlKT8hIWUuY2FwdHVyZTohIWUsaD1zZChhKTtofHwoYVtrZF09aD1uZXcgaGQoYSkpO2M9aC5hZGQoYixjLGQsZyxmKTtpZighYy5wcm94eSl7ZD10ZCgpO2MucHJveHk9ZDtkLnNyYz1hO2QubGlzdGVuZXI9YztpZihhLmFkZEV2ZW50TGlzdGVuZXIpYWR8fChlPWcpLHZvaWQgMD09PWUmJihlPSExKSxhLmFkZEV2ZW50TGlzdGVuZXIoYi50b1N0cmluZygpLGQsZSk7ZWxzZSBpZihhLmF0dGFjaEV2ZW50KWEuYXR0YWNoRXZlbnQodWQoYi50b1N0cmluZygpKSxkKTtlbHNlIGlmKGEuYWRkTGlzdGVuZXImJmEucmVtb3ZlTGlzdGVuZXIpYS5hZGRMaXN0ZW5lcihkKTtlbHNlIHRocm93IEVycm9yKFwiYWRkRXZlbnRMaXN0ZW5lciBhbmQgYXR0YWNoRXZlbnQgYXJlIHVuYXZhaWxhYmxlLlwiKTttZCsrfX1cbmZ1bmN0aW9uIHRkKCl7dmFyIGE9dmQsYj1aYz9mdW5jdGlvbihjKXtyZXR1cm4gYS5jYWxsKGIuc3JjLGIubGlzdGVuZXIsYyl9OmZ1bmN0aW9uKGMpe2M9YS5jYWxsKGIuc3JjLGIubGlzdGVuZXIsYyk7aWYoIWMpcmV0dXJuIGN9O3JldHVybiBifWZ1bmN0aW9uIG9kKGEsYixjLGQsZSl7aWYoQXJyYXkuaXNBcnJheShiKSlmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKylvZChhLGJbZl0sYyxkLGUpO2Vsc2UgYz1wZChjKSxhJiZhW2RkXT93ZChhLGIsYyxuKGQpPyEhZC5jYXB0dXJlOiEhZCxlKTpyZChhLGIsYywhMCxkLGUpfVxuZnVuY3Rpb24geGQoYSxiLGMsZCxlKXtpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKXhkKGEsYltmXSxjLGQsZSk7ZWxzZShkPW4oZCk/ISFkLmNhcHR1cmU6ISFkLGM9cGQoYyksYSYmYVtkZF0pPyhhPWEudixiPVN0cmluZyhiKS50b1N0cmluZygpLGIgaW4gYS5hJiYoZj1hLmFbYl0sYz1pZChmLGMsZCxlKSwtMTxjJiYoZ2QoZltjXSksQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGYsYywxKSwwPT1mLmxlbmd0aCYmKGRlbGV0ZSBhLmFbYl0sYS5iLS0pKSkpOmEmJihhPXNkKGEpKSYmKGI9YS5hW2IudG9TdHJpbmcoKV0sYT0tMSxiJiYoYT1pZChiLGMsZCxlKSksKGM9LTE8YT9iW2FdOm51bGwpJiZ5ZChjKSl9XG5mdW5jdGlvbiB5ZChhKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGEmJmEmJiFhLndhKXt2YXIgYj1hLnNyYztpZihiJiZiW2RkXSlqZChiLnYsYSk7ZWxzZXt2YXIgYz1hLnR5cGUsZD1hLnByb3h5O2IucmVtb3ZlRXZlbnRMaXN0ZW5lcj9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoYyxkLGEuY2FwdHVyZSk6Yi5kZXRhY2hFdmVudD9iLmRldGFjaEV2ZW50KHVkKGMpLGQpOmIuYWRkTGlzdGVuZXImJmIucmVtb3ZlTGlzdGVuZXImJmIucmVtb3ZlTGlzdGVuZXIoZCk7bWQtLTsoYz1zZChiKSk/KGpkKGMsYSksMD09Yy5iJiYoYy5zcmM9bnVsbCxiW2tkXT1udWxsKSk6Z2QoYSl9fX1mdW5jdGlvbiB1ZChhKXtyZXR1cm4gYSBpbiBsZD9sZFthXTpsZFthXT1cIm9uXCIrYX1cbmZ1bmN0aW9uIHpkKGEsYixjLGQpe3ZhciBlPSEwO2lmKGE9c2QoYSkpaWYoYj1hLmFbYi50b1N0cmluZygpXSlmb3IoYj1iLmNvbmNhdCgpLGE9MDthPGIubGVuZ3RoO2ErKyl7dmFyIGY9YlthXTtmJiZmLmNhcHR1cmU9PWMmJiFmLndhJiYoZj1CZChmLGQpLGU9ZSYmITEhPT1mKX1yZXR1cm4gZX1mdW5jdGlvbiBCZChhLGIpe3ZhciBjPWEubGlzdGVuZXIsZD1hLldhfHxhLnNyYzthLlFhJiZ5ZChhKTtyZXR1cm4gYy5jYWxsKGQsYil9XG5mdW5jdGlvbiB2ZChhLGIpe2lmKGEud2EpcmV0dXJuITA7aWYoIVpjKXtpZighYilhOntiPVtcIndpbmRvd1wiLFwiZXZlbnRcIl07Zm9yKHZhciBjPWwsZD0wO2Q8Yi5sZW5ndGg7ZCsrKWlmKGM9Y1tiW2RdXSxudWxsPT1jKXtiPW51bGw7YnJlYWsgYX1iPWN9ZD1iO2I9bmV3IGJkKGQsdGhpcyk7Yz0hMDtpZighKDA+ZC5rZXlDb2RlfHx2b2lkIDAhPWQucmV0dXJuVmFsdWUpKXthOnt2YXIgZT0hMTtpZigwPT1kLmtleUNvZGUpdHJ5e2Qua2V5Q29kZT0tMTticmVhayBhfWNhdGNoKGcpe2U9ITB9aWYoZXx8dm9pZCAwPT1kLnJldHVyblZhbHVlKWQucmV0dXJuVmFsdWU9ITB9ZD1bXTtmb3IoZT1iLmI7ZTtlPWUucGFyZW50Tm9kZSlkLnB1c2goZSk7YT1hLnR5cGU7Zm9yKGU9ZC5sZW5ndGgtMTswPD1lO2UtLSl7Yi5iPWRbZV07dmFyIGY9emQoZFtlXSxhLCEwLGIpO2M9YyYmZn1mb3IoZT0wO2U8ZC5sZW5ndGg7ZSsrKWIuYj1kW2VdLGY9emQoZFtlXSxhLCExLGIpLGM9YyYmZn1yZXR1cm4gY31yZXR1cm4gQmQoYSxcbm5ldyBiZChiLHRoaXMpKX1mdW5jdGlvbiBzZChhKXthPWFba2RdO3JldHVybiBhIGluc3RhbmNlb2YgaGQ/YTpudWxsfXZhciBDZD1cIl9fY2xvc3VyZV9ldmVudHNfZm5fXCIrKDFFOSpNYXRoLnJhbmRvbSgpPj4+MCk7ZnVuY3Rpb24gcGQoYSl7aWYob2EoYSkpcmV0dXJuIGE7YVtDZF18fChhW0NkXT1mdW5jdGlvbihiKXtyZXR1cm4gYS5oYW5kbGVFdmVudChiKX0pO3JldHVybiBhW0NkXX07ZnVuY3Rpb24gSCgpe1VjLmNhbGwodGhpcyk7dGhpcy52PW5ldyBoZCh0aGlzKTt0aGlzLmJjPXRoaXM7dGhpcy5oYj1udWxsfXIoSCxVYyk7SC5wcm90b3R5cGVbZGRdPSEwO0gucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMsZCl7bmQodGhpcyxhLGIsYyxkKX07SC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyxkKXt4ZCh0aGlzLGEsYixjLGQpfTtcbkgucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmhiO2lmKGMpZm9yKGI9W107YztjPWMuaGIpYi5wdXNoKGMpO2M9dGhpcy5iYzt2YXIgZD1hLnR5cGV8fGE7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWE9bmV3IEcoYSxjKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBHKWEudGFyZ2V0PWEudGFyZ2V0fHxjO2Vsc2V7dmFyIGU9YTthPW5ldyBHKGQsYyk7eihhLGUpfWU9ITA7aWYoYilmb3IodmFyIGY9Yi5sZW5ndGgtMTswPD1mO2YtLSl7dmFyIGc9YS5iPWJbZl07ZT1EZChnLGQsITAsYSkmJmV9Zz1hLmI9YztlPURkKGcsZCwhMCxhKSYmZTtlPURkKGcsZCwhMSxhKSYmZTtpZihiKWZvcihmPTA7ZjxiLmxlbmd0aDtmKyspZz1hLmI9YltmXSxlPURkKGcsZCwhMSxhKSYmZTtyZXR1cm4gZX07XG5ILnByb3RvdHlwZS5EYT1mdW5jdGlvbigpe0guYmIuRGEuY2FsbCh0aGlzKTtpZih0aGlzLnYpe3ZhciBhPXRoaXMudixiPTAsYztmb3IoYyBpbiBhLmEpe2Zvcih2YXIgZD1hLmFbY10sZT0wO2U8ZC5sZW5ndGg7ZSsrKSsrYixnZChkW2VdKTtkZWxldGUgYS5hW2NdO2EuYi0tfX10aGlzLmhiPW51bGx9O2Z1bmN0aW9uIHFkKGEsYixjLGQsZSl7YS52LmFkZChTdHJpbmcoYiksYywhMSxkLGUpfWZ1bmN0aW9uIHdkKGEsYixjLGQsZSl7YS52LmFkZChTdHJpbmcoYiksYywhMCxkLGUpfVxuZnVuY3Rpb24gRGQoYSxiLGMsZCl7Yj1hLnYuYVtTdHJpbmcoYildO2lmKCFiKXJldHVybiEwO2I9Yi5jb25jYXQoKTtmb3IodmFyIGU9ITAsZj0wO2Y8Yi5sZW5ndGg7KytmKXt2YXIgZz1iW2ZdO2lmKGcmJiFnLndhJiZnLmNhcHR1cmU9PWMpe3ZhciBoPWcubGlzdGVuZXIsbT1nLldhfHxnLnNyYztnLlFhJiZqZChhLnYsZyk7ZT0hMSE9PWguY2FsbChtLGQpJiZlfX1yZXR1cm4gZSYmIWQuZGVmYXVsdFByZXZlbnRlZH07ZnVuY3Rpb24gRWQoYSxiLGMpe2lmKG9hKGEpKWMmJihhPXEoYSxjKSk7ZWxzZSBpZihhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmhhbmRsZUV2ZW50KWE9cShhLmhhbmRsZUV2ZW50LGEpO2Vsc2UgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGxpc3RlbmVyIGFyZ3VtZW50XCIpO3JldHVybiAyMTQ3NDgzNjQ3PE51bWJlcihiKT8tMTpsLnNldFRpbWVvdXQoYSxifHwwKX1mdW5jdGlvbiBGZChhKXt2YXIgYj1udWxsO3JldHVybihuZXcgRChmdW5jdGlvbihjLGQpe2I9RWQoZnVuY3Rpb24oKXtjKHZvaWQgMCl9LGEpOy0xPT1iJiZkKEVycm9yKFwiRmFpbGVkIHRvIHNjaGVkdWxlIHRpbWVyLlwiKSl9KSkubyhmdW5jdGlvbihjKXtsLmNsZWFyVGltZW91dChiKTt0aHJvdyBjO30pfTtmdW5jdGlvbiBHZChhKXtpZihhLlgmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuWClyZXR1cm4gYS5YKCk7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhLnNwbGl0KFwiXCIpO2lmKG5hKGEpKXtmb3IodmFyIGI9W10sYz1hLmxlbmd0aCxkPTA7ZDxjO2QrKyliLnB1c2goYVtkXSk7cmV0dXJuIGJ9Yj1bXTtjPTA7Zm9yKGQgaW4gYSliW2MrK109YVtkXTtyZXR1cm4gYn1mdW5jdGlvbiBIZChhKXtpZihhLlkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuWSlyZXR1cm4gYS5ZKCk7aWYoIWEuWHx8XCJmdW5jdGlvblwiIT10eXBlb2YgYS5YKXtpZihuYShhKXx8XCJzdHJpbmdcIj09PXR5cGVvZiBhKXt2YXIgYj1bXTthPWEubGVuZ3RoO2Zvcih2YXIgYz0wO2M8YTtjKyspYi5wdXNoKGMpO3JldHVybiBifWI9W107Yz0wO2Zvcih2YXIgZCBpbiBhKWJbYysrXT1kO3JldHVybiBifX1cbmZ1bmN0aW9uIElkKGEsYil7aWYoYS5mb3JFYWNoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmZvckVhY2gpYS5mb3JFYWNoKGIsdm9pZCAwKTtlbHNlIGlmKG5hKGEpfHxcInN0cmluZ1wiPT09dHlwZW9mIGEpdyhhLGIsdm9pZCAwKTtlbHNlIGZvcih2YXIgYz1IZChhKSxkPUdkKGEpLGU9ZC5sZW5ndGgsZj0wO2Y8ZTtmKyspYi5jYWxsKHZvaWQgMCxkW2ZdLGMmJmNbZl0sYSl9O2Z1bmN0aW9uIEpkKGEsYil7dGhpcy5iPXt9O3RoaXMuYT1bXTt0aGlzLmM9MDt2YXIgYz1hcmd1bWVudHMubGVuZ3RoO2lmKDE8Yyl7aWYoYyUyKXRocm93IEVycm9yKFwiVW5ldmVuIG51bWJlciBvZiBhcmd1bWVudHNcIik7Zm9yKHZhciBkPTA7ZDxjO2QrPTIpdGhpcy5zZXQoYXJndW1lbnRzW2RdLGFyZ3VtZW50c1tkKzFdKX1lbHNlIGlmKGEpaWYoYSBpbnN0YW5jZW9mIEpkKWZvcihjPWEuWSgpLGQ9MDtkPGMubGVuZ3RoO2QrKyl0aGlzLnNldChjW2RdLGEuZ2V0KGNbZF0pKTtlbHNlIGZvcihkIGluIGEpdGhpcy5zZXQoZCxhW2RdKX1rPUpkLnByb3RvdHlwZTtrLlg9ZnVuY3Rpb24oKXtLZCh0aGlzKTtmb3IodmFyIGE9W10sYj0wO2I8dGhpcy5hLmxlbmd0aDtiKyspYS5wdXNoKHRoaXMuYlt0aGlzLmFbYl1dKTtyZXR1cm4gYX07ay5ZPWZ1bmN0aW9uKCl7S2QodGhpcyk7cmV0dXJuIHRoaXMuYS5jb25jYXQoKX07XG5rLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5iPXt9O3RoaXMuYz10aGlzLmEubGVuZ3RoPTB9O2Z1bmN0aW9uIEtkKGEpe2lmKGEuYyE9YS5hLmxlbmd0aCl7Zm9yKHZhciBiPTAsYz0wO2I8YS5hLmxlbmd0aDspe3ZhciBkPWEuYVtiXTtMZChhLmIsZCkmJihhLmFbYysrXT1kKTtiKyt9YS5hLmxlbmd0aD1jfWlmKGEuYyE9YS5hLmxlbmd0aCl7dmFyIGU9e307Zm9yKGM9Yj0wO2I8YS5hLmxlbmd0aDspZD1hLmFbYl0sTGQoZSxkKXx8KGEuYVtjKytdPWQsZVtkXT0xKSxiKys7YS5hLmxlbmd0aD1jfX1rLmdldD1mdW5jdGlvbihhLGIpe3JldHVybiBMZCh0aGlzLmIsYSk/dGhpcy5iW2FdOmJ9O2suc2V0PWZ1bmN0aW9uKGEsYil7TGQodGhpcy5iLGEpfHwodGhpcy5jKyssdGhpcy5hLnB1c2goYSkpO3RoaXMuYlthXT1ifTtcbmsuZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLlkoKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj10aGlzLmdldChlKTthLmNhbGwoYixmLGUsdGhpcyl9fTtmdW5jdGlvbiBMZChhLGIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKX07dmFyIE1kPS9eKD86KFteOi8/Iy5dKyk6KT8oPzpcXC9cXC8oPzooW15cXFxcLz8jXSopQCk/KFteXFxcXC8/I10qPykoPzo6KFswLTldKykpPyg/PVtcXFxcLz8jXXwkKSk/KFtePyNdKyk/KD86XFw/KFteI10qKSk/KD86IyhbXFxzXFxTXSopKT8kLztmdW5jdGlvbiBOZChhLGIpe2lmKGEpe2E9YS5zcGxpdChcIiZcIik7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10uaW5kZXhPZihcIj1cIiksZT1udWxsO2lmKDA8PWQpe3ZhciBmPWFbY10uc3Vic3RyaW5nKDAsZCk7ZT1hW2NdLnN1YnN0cmluZyhkKzEpfWVsc2UgZj1hW2NdO2IoZixlP2RlY29kZVVSSUNvbXBvbmVudChlLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSk6XCJcIil9fX07ZnVuY3Rpb24gT2QoYSxiKXt0aGlzLmE9dGhpcy5sPXRoaXMuYz1cIlwiO3RoaXMuZz1udWxsO3RoaXMuaD10aGlzLmY9XCJcIjt0aGlzLmk9ITE7dmFyIGM7YSBpbnN0YW5jZW9mIE9kPyh0aGlzLmk9dm9pZCAwIT09Yj9iOmEuaSxQZCh0aGlzLGEuYyksdGhpcy5sPWEubCx0aGlzLmE9YS5hLFFkKHRoaXMsYS5nKSx0aGlzLmY9YS5mLFJkKHRoaXMsU2QoYS5iKSksdGhpcy5oPWEuaCk6YSYmKGM9U3RyaW5nKGEpLm1hdGNoKE1kKSk/KHRoaXMuaT0hIWIsUGQodGhpcyxjWzFdfHxcIlwiLCEwKSx0aGlzLmw9VGQoY1syXXx8XCJcIiksdGhpcy5hPVRkKGNbM118fFwiXCIsITApLFFkKHRoaXMsY1s0XSksdGhpcy5mPVRkKGNbNV18fFwiXCIsITApLFJkKHRoaXMsY1s2XXx8XCJcIiwhMCksdGhpcy5oPVRkKGNbN118fFwiXCIpKToodGhpcy5pPSEhYix0aGlzLmI9bmV3IFVkKG51bGwsdGhpcy5pKSl9XG5PZC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXRoaXMuYztiJiZhLnB1c2goVmQoYixXZCwhMCksXCI6XCIpO3ZhciBjPXRoaXMuYTtpZihjfHxcImZpbGVcIj09YilhLnB1c2goXCIvL1wiKSwoYj10aGlzLmwpJiZhLnB1c2goVmQoYixXZCwhMCksXCJAXCIpLGEucHVzaChlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGMpKS5yZXBsYWNlKC8lMjUoWzAtOWEtZkEtRl17Mn0pL2csXCIlJDFcIikpLGM9dGhpcy5nLG51bGwhPWMmJmEucHVzaChcIjpcIixTdHJpbmcoYykpO2lmKGM9dGhpcy5mKXRoaXMuYSYmXCIvXCIhPWMuY2hhckF0KDApJiZhLnB1c2goXCIvXCIpLGEucHVzaChWZChjLFwiL1wiPT1jLmNoYXJBdCgwKT9YZDpZZCwhMCkpOyhjPXRoaXMuYi50b1N0cmluZygpKSYmYS5wdXNoKFwiP1wiLGMpOyhjPXRoaXMuaCkmJmEucHVzaChcIiNcIixWZChjLFpkKSk7cmV0dXJuIGEuam9pbihcIlwiKX07XG5PZC5wcm90b3R5cGUucmVzb2x2ZT1mdW5jdGlvbihhKXt2YXIgYj1uZXcgT2QodGhpcyksYz0hIWEuYztjP1BkKGIsYS5jKTpjPSEhYS5sO2M/Yi5sPWEubDpjPSEhYS5hO2M/Yi5hPWEuYTpjPW51bGwhPWEuZzt2YXIgZD1hLmY7aWYoYylRZChiLGEuZyk7ZWxzZSBpZihjPSEhYS5mKXtpZihcIi9cIiE9ZC5jaGFyQXQoMCkpaWYodGhpcy5hJiYhdGhpcy5mKWQ9XCIvXCIrZDtlbHNle3ZhciBlPWIuZi5sYXN0SW5kZXhPZihcIi9cIik7LTEhPWUmJihkPWIuZi5zdWJzdHIoMCxlKzEpK2QpfWU9ZDtpZihcIi4uXCI9PWV8fFwiLlwiPT1lKWQ9XCJcIjtlbHNlIGlmKHgoZSxcIi4vXCIpfHx4KGUsXCIvLlwiKSl7ZD0wPT1lLmxhc3RJbmRleE9mKFwiL1wiLDApO2U9ZS5zcGxpdChcIi9cIik7Zm9yKHZhciBmPVtdLGc9MDtnPGUubGVuZ3RoOyl7dmFyIGg9ZVtnKytdO1wiLlwiPT1oP2QmJmc9PWUubGVuZ3RoJiZmLnB1c2goXCJcIik6XCIuLlwiPT1oPygoMTxmLmxlbmd0aHx8MT09Zi5sZW5ndGgmJlwiXCIhPWZbMF0pJiZmLnBvcCgpLFxuZCYmZz09ZS5sZW5ndGgmJmYucHVzaChcIlwiKSk6KGYucHVzaChoKSxkPSEwKX1kPWYuam9pbihcIi9cIil9ZWxzZSBkPWV9Yz9iLmY9ZDpjPVwiXCIhPT1hLmIudG9TdHJpbmcoKTtjP1JkKGIsU2QoYS5iKSk6Yz0hIWEuaDtjJiYoYi5oPWEuaCk7cmV0dXJuIGJ9O2Z1bmN0aW9uIFBkKGEsYixjKXthLmM9Yz9UZChiLCEwKTpiO2EuYyYmKGEuYz1hLmMucmVwbGFjZSgvOiQvLFwiXCIpKX1mdW5jdGlvbiBRZChhLGIpe2lmKGIpe2I9TnVtYmVyKGIpO2lmKGlzTmFOKGIpfHwwPmIpdGhyb3cgRXJyb3IoXCJCYWQgcG9ydCBudW1iZXIgXCIrYik7YS5nPWJ9ZWxzZSBhLmc9bnVsbH1mdW5jdGlvbiBSZChhLGIsYyl7YiBpbnN0YW5jZW9mIFVkPyhhLmI9YiwkZChhLmIsYS5pKSk6KGN8fChiPVZkKGIsYWUpKSxhLmI9bmV3IFVkKGIsYS5pKSl9ZnVuY3Rpb24gSShhLGIsYyl7YS5iLnNldChiLGMpfWZ1bmN0aW9uIGJlKGEsYil7cmV0dXJuIGEuYi5nZXQoYil9XG5mdW5jdGlvbiBKKGEpe3JldHVybiBhIGluc3RhbmNlb2YgT2Q/bmV3IE9kKGEpOm5ldyBPZChhLHZvaWQgMCl9ZnVuY3Rpb24gY2UoYSxiLGMsZCl7dmFyIGU9bmV3IE9kKG51bGwsdm9pZCAwKTthJiZQZChlLGEpO2ImJihlLmE9Yik7YyYmUWQoZSxjKTtkJiYoZS5mPWQpO3JldHVybiBlfWZ1bmN0aW9uIFRkKGEsYil7cmV0dXJuIGE/Yj9kZWNvZGVVUkkoYS5yZXBsYWNlKC8lMjUvZyxcIiUyNTI1XCIpKTpkZWNvZGVVUklDb21wb25lbnQoYSk6XCJcIn1mdW5jdGlvbiBWZChhLGIsYyl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhPyhhPWVuY29kZVVSSShhKS5yZXBsYWNlKGIsZGUpLGMmJihhPWEucmVwbGFjZSgvJTI1KFswLTlhLWZBLUZdezJ9KS9nLFwiJSQxXCIpKSxhKTpudWxsfWZ1bmN0aW9uIGRlKGEpe2E9YS5jaGFyQ29kZUF0KDApO3JldHVyblwiJVwiKyhhPj40JjE1KS50b1N0cmluZygxNikrKGEmMTUpLnRvU3RyaW5nKDE2KX1cbnZhciBXZD0vWyNcXC9cXD9AXS9nLFlkPS9bI1xcPzpdL2csWGQ9L1sjXFw/XS9nLGFlPS9bI1xcP0BdL2csWmQ9LyMvZztmdW5jdGlvbiBVZChhLGIpe3RoaXMuYj10aGlzLmE9bnVsbDt0aGlzLmM9YXx8bnVsbDt0aGlzLmY9ISFifWZ1bmN0aW9uIGVlKGEpe2EuYXx8KGEuYT1uZXcgSmQsYS5iPTAsYS5jJiZOZChhLmMsZnVuY3Rpb24oYixjKXthLmFkZChkZWNvZGVVUklDb21wb25lbnQoYi5yZXBsYWNlKC9cXCsvZyxcIiBcIikpLGMpfSkpfWZ1bmN0aW9uIGZlKGEpe3ZhciBiPUhkKGEpO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBiKXRocm93IEVycm9yKFwiS2V5cyBhcmUgdW5kZWZpbmVkXCIpO3ZhciBjPW5ldyBVZChudWxsLHZvaWQgMCk7YT1HZChhKTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXSxmPWFbZF07QXJyYXkuaXNBcnJheShmKT9nZShjLGUsZik6Yy5hZGQoZSxmKX1yZXR1cm4gY31rPVVkLnByb3RvdHlwZTtcbmsuYWRkPWZ1bmN0aW9uKGEsYil7ZWUodGhpcyk7dGhpcy5jPW51bGw7YT1oZSh0aGlzLGEpO3ZhciBjPXRoaXMuYS5nZXQoYSk7Y3x8dGhpcy5hLnNldChhLGM9W10pO2MucHVzaChiKTt0aGlzLmIrPTE7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIGllKGEsYil7ZWUoYSk7Yj1oZShhLGIpO0xkKGEuYS5iLGIpJiYoYS5jPW51bGwsYS5iLT1hLmEuZ2V0KGIpLmxlbmd0aCxhPWEuYSxMZChhLmIsYikmJihkZWxldGUgYS5iW2JdLGEuYy0tLGEuYS5sZW5ndGg+MiphLmMmJktkKGEpKSl9ay5jbGVhcj1mdW5jdGlvbigpe3RoaXMuYT10aGlzLmM9bnVsbDt0aGlzLmI9MH07ZnVuY3Rpb24gamUoYSxiKXtlZShhKTtiPWhlKGEsYik7cmV0dXJuIExkKGEuYS5iLGIpfWsuZm9yRWFjaD1mdW5jdGlvbihhLGIpe2VlKHRoaXMpO3RoaXMuYS5mb3JFYWNoKGZ1bmN0aW9uKGMsZCl7dyhjLGZ1bmN0aW9uKGUpe2EuY2FsbChiLGUsZCx0aGlzKX0sdGhpcyl9LHRoaXMpfTtcbmsuWT1mdW5jdGlvbigpe2VlKHRoaXMpO2Zvcih2YXIgYT10aGlzLmEuWCgpLGI9dGhpcy5hLlkoKSxjPVtdLGQ9MDtkPGIubGVuZ3RoO2QrKylmb3IodmFyIGU9YVtkXSxmPTA7ZjxlLmxlbmd0aDtmKyspYy5wdXNoKGJbZF0pO3JldHVybiBjfTtrLlg9ZnVuY3Rpb24oYSl7ZWUodGhpcyk7dmFyIGI9W107aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWplKHRoaXMsYSkmJihiPVlhKGIsdGhpcy5hLmdldChoZSh0aGlzLGEpKSkpO2Vsc2V7YT10aGlzLmEuWCgpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWI9WWEoYixhW2NdKX1yZXR1cm4gYn07ay5zZXQ9ZnVuY3Rpb24oYSxiKXtlZSh0aGlzKTt0aGlzLmM9bnVsbDthPWhlKHRoaXMsYSk7amUodGhpcyxhKSYmKHRoaXMuYi09dGhpcy5hLmdldChhKS5sZW5ndGgpO3RoaXMuYS5zZXQoYSxbYl0pO3RoaXMuYis9MTtyZXR1cm4gdGhpc307XG5rLmdldD1mdW5jdGlvbihhLGIpe2lmKCFhKXJldHVybiBiO2E9dGhpcy5YKGEpO3JldHVybiAwPGEubGVuZ3RoP1N0cmluZyhhWzBdKTpifTtmdW5jdGlvbiBnZShhLGIsYyl7aWUoYSxiKTswPGMubGVuZ3RoJiYoYS5jPW51bGwsYS5hLnNldChoZShhLGIpLFphKGMpKSxhLmIrPWMubGVuZ3RoKX1rLnRvU3RyaW5nPWZ1bmN0aW9uKCl7aWYodGhpcy5jKXJldHVybiB0aGlzLmM7aWYoIXRoaXMuYSlyZXR1cm5cIlwiO2Zvcih2YXIgYT1bXSxiPXRoaXMuYS5ZKCksYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdLGU9ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhkKSk7ZD10aGlzLlgoZCk7Zm9yKHZhciBmPTA7ZjxkLmxlbmd0aDtmKyspe3ZhciBnPWU7XCJcIiE9PWRbZl0mJihnKz1cIj1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGRbZl0pKSk7YS5wdXNoKGcpfX1yZXR1cm4gdGhpcy5jPWEuam9pbihcIiZcIil9O1xuZnVuY3Rpb24gU2QoYSl7dmFyIGI9bmV3IFVkO2IuYz1hLmM7YS5hJiYoYi5hPW5ldyBKZChhLmEpLGIuYj1hLmIpO3JldHVybiBifWZ1bmN0aW9uIGhlKGEsYil7Yj1TdHJpbmcoYik7YS5mJiYoYj1iLnRvTG93ZXJDYXNlKCkpO3JldHVybiBifWZ1bmN0aW9uICRkKGEsYil7YiYmIWEuZiYmKGVlKGEpLGEuYz1udWxsLGEuYS5mb3JFYWNoKGZ1bmN0aW9uKGMsZCl7dmFyIGU9ZC50b0xvd2VyQ2FzZSgpO2QhPWUmJihpZSh0aGlzLGQpLGdlKHRoaXMsZSxjKSl9LGEpKTthLmY9Yn07ZnVuY3Rpb24ga2UoYSl7dmFyIGI9W107bGUobmV3IG1lLGEsYik7cmV0dXJuIGIuam9pbihcIlwiKX1mdW5jdGlvbiBtZSgpe31cbmZ1bmN0aW9uIGxlKGEsYixjKXtpZihudWxsPT1iKWMucHVzaChcIm51bGxcIik7ZWxzZXtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7aWYoQXJyYXkuaXNBcnJheShiKSl7dmFyIGQ9YjtiPWQubGVuZ3RoO2MucHVzaChcIltcIik7Zm9yKHZhciBlPVwiXCIsZj0wO2Y8YjtmKyspYy5wdXNoKGUpLGxlKGEsZFtmXSxjKSxlPVwiLFwiO2MucHVzaChcIl1cIik7cmV0dXJufWlmKGIgaW5zdGFuY2VvZiBTdHJpbmd8fGIgaW5zdGFuY2VvZiBOdW1iZXJ8fGIgaW5zdGFuY2VvZiBCb29sZWFuKWI9Yi52YWx1ZU9mKCk7ZWxzZXtjLnB1c2goXCJ7XCIpO2U9XCJcIjtmb3IoZCBpbiBiKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGQpJiYoZj1iW2RdLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGYmJihjLnB1c2goZSksbmUoZCxjKSxjLnB1c2goXCI6XCIpLGxlKGEsZixjKSxlPVwiLFwiKSk7Yy5wdXNoKFwifVwiKTtyZXR1cm59fXN3aXRjaCh0eXBlb2YgYil7Y2FzZSBcInN0cmluZ1wiOm5lKGIsYyk7YnJlYWs7Y2FzZSBcIm51bWJlclwiOmMucHVzaChpc0Zpbml0ZShiKSYmXG4haXNOYU4oYik/U3RyaW5nKGIpOlwibnVsbFwiKTticmVhaztjYXNlIFwiYm9vbGVhblwiOmMucHVzaChTdHJpbmcoYikpO2JyZWFrO2Nhc2UgXCJmdW5jdGlvblwiOmMucHVzaChcIm51bGxcIik7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcIlVua25vd24gdHlwZTogXCIrdHlwZW9mIGIpO319fXZhciBvZT17J1wiJzonXFxcXFwiJyxcIlxcXFxcIjpcIlxcXFxcXFxcXCIsXCIvXCI6XCJcXFxcL1wiLFwiXFxiXCI6XCJcXFxcYlwiLFwiXFxmXCI6XCJcXFxcZlwiLFwiXFxuXCI6XCJcXFxcblwiLFwiXFxyXCI6XCJcXFxcclwiLFwiXFx0XCI6XCJcXFxcdFwiLFwiXFx4MEJcIjpcIlxcXFx1MDAwYlwifSxwZT0vXFx1ZmZmZi8udGVzdChcIlxcdWZmZmZcIik/L1tcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxcdWZmZmZdL2c6L1tcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceGZmXS9nO1xuZnVuY3Rpb24gbmUoYSxiKXtiLnB1c2goJ1wiJyxhLnJlcGxhY2UocGUsZnVuY3Rpb24oYyl7dmFyIGQ9b2VbY107ZHx8KGQ9XCJcXFxcdVwiKyhjLmNoYXJDb2RlQXQoMCl8NjU1MzYpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSksb2VbY109ZCk7cmV0dXJuIGR9KSwnXCInKX07ZnVuY3Rpb24gcWUoKXt2YXIgYT1LKCk7cmV0dXJuIFdiJiYhIWljJiYxMT09aWN8fC9FZGdlXFwvXFxkKy8udGVzdChhKX1mdW5jdGlvbiByZSgpe3JldHVybiBsLndpbmRvdyYmbC53aW5kb3cubG9jYXRpb24uaHJlZnx8c2VsZiYmc2VsZi5sb2NhdGlvbiYmc2VsZi5sb2NhdGlvbi5ocmVmfHxcIlwifWZ1bmN0aW9uIHNlKGEsYil7Yj1ifHxsLndpbmRvdzt2YXIgYz1cImFib3V0OmJsYW5rXCI7YSYmKGM9RWIoSWIoYSl8fEtiKSk7Yi5sb2NhdGlvbi5ocmVmPWN9ZnVuY3Rpb24gdGUoYSxiKXt2YXIgYz1bXSxkO2ZvcihkIGluIGEpZCBpbiBiP3R5cGVvZiBhW2RdIT10eXBlb2YgYltkXT9jLnB1c2goZCk6XCJvYmplY3RcIj09dHlwZW9mIGFbZF0mJm51bGwhPWFbZF0mJm51bGwhPWJbZF0/MDx0ZShhW2RdLGJbZF0pLmxlbmd0aCYmYy5wdXNoKGQpOmFbZF0hPT1iW2RdJiZjLnB1c2goZCk6Yy5wdXNoKGQpO2ZvcihkIGluIGIpZCBpbiBhfHxjLnB1c2goZCk7cmV0dXJuIGN9XG5mdW5jdGlvbiB1ZSgpe3ZhciBhPUsoKTthPXZlKGEpIT13ZT9udWxsOihhPWEubWF0Y2goL1xcc0Nocm9tZVxcLyhcXGQrKS9pKSkmJjI9PWEubGVuZ3RoP3BhcnNlSW50KGFbMV0sMTApOm51bGw7cmV0dXJuIGEmJjMwPmE/ITE6IVdifHwhaWN8fDk8aWN9ZnVuY3Rpb24geGUoYSl7YT0oYXx8SygpKS50b0xvd2VyQ2FzZSgpO3JldHVybiBhLm1hdGNoKC9hbmRyb2lkLyl8fGEubWF0Y2goL3dlYm9zLyl8fGEubWF0Y2goL2lwaG9uZXxpcGFkfGlwb2QvKXx8YS5tYXRjaCgvYmxhY2tiZXJyeS8pfHxhLm1hdGNoKC93aW5kb3dzIHBob25lLyl8fGEubWF0Y2goL2llbW9iaWxlLyk/ITA6ITF9ZnVuY3Rpb24geWUoYSl7YT1hfHxsLndpbmRvdzt0cnl7YS5jbG9zZSgpfWNhdGNoKGIpe319XG5mdW5jdGlvbiB6ZShhLGIsYyl7dmFyIGQ9TWF0aC5mbG9vcigxRTkqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKTtiPWJ8fDUwMDtjPWN8fDYwMDt2YXIgZT0od2luZG93LnNjcmVlbi5hdmFpbEhlaWdodC1jKS8yLGY9KHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aC1iKS8yO2I9e3dpZHRoOmIsaGVpZ2h0OmMsdG9wOjA8ZT9lOjAsbGVmdDowPGY/ZjowLGxvY2F0aW9uOiEwLHJlc2l6YWJsZTohMCxzdGF0dXNiYXI6ITAsdG9vbGJhcjohMX07Yz1LKCkudG9Mb3dlckNhc2UoKTtkJiYoYi50YXJnZXQ9ZCx4KGMsXCJjcmlvcy9cIikmJihiLnRhcmdldD1cIl9ibGFua1wiKSk7dmUoSygpKT09QWUmJihhPWF8fFwiaHR0cDovL2xvY2FsaG9zdFwiLGIuc2Nyb2xsYmFycz0hMCk7Yz1hfHxcIlwiOyhhPWIpfHwoYT17fSk7ZD13aW5kb3c7Yj1jIGluc3RhbmNlb2YgQz9jOkliKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBjLmhyZWY/Yy5ocmVmOlN0cmluZyhjKSl8fEtiO2M9YS50YXJnZXR8fGMudGFyZ2V0O2U9XG5bXTtmb3IoZyBpbiBhKXN3aXRjaChnKXtjYXNlIFwid2lkdGhcIjpjYXNlIFwiaGVpZ2h0XCI6Y2FzZSBcInRvcFwiOmNhc2UgXCJsZWZ0XCI6ZS5wdXNoKGcrXCI9XCIrYVtnXSk7YnJlYWs7Y2FzZSBcInRhcmdldFwiOmNhc2UgXCJub29wZW5lclwiOmNhc2UgXCJub3JlZmVycmVyXCI6YnJlYWs7ZGVmYXVsdDplLnB1c2goZytcIj1cIisoYVtnXT8xOjApKX12YXIgZz1lLmpvaW4oXCIsXCIpO2lmKCh5KFwiaVBob25lXCIpJiYheShcImlQb2RcIikmJiF5KFwiaVBhZFwiKXx8eShcImlQYWRcIil8fHkoXCJpUG9kXCIpKSYmZC5uYXZpZ2F0b3ImJmQubmF2aWdhdG9yLnN0YW5kYWxvbmUmJmMmJlwiX3NlbGZcIiE9YylnPW9jKGRvY3VtZW50LFwiQVwiKSxwYihnLFwiSFRNTEFuY2hvckVsZW1lbnRcIiksYj1iIGluc3RhbmNlb2YgQz9iOkpiKGIpLGcuaHJlZj1FYihiKSxnLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLGMpLGEubm9yZWZlcnJlciYmZy5zZXRBdHRyaWJ1dGUoXCJyZWxcIixcIm5vcmVmZXJyZXJcIiksYT1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRcIiksXG5hLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCxkLDEpLGcuZGlzcGF0Y2hFdmVudChhKSxnPXt9O2Vsc2UgaWYoYS5ub3JlZmVycmVyKXtpZihnPVBiKFwiXCIsZCxjLGcpLGE9RWIoYiksZyYmKFliJiZ4KGEsXCI7XCIpJiYoYT1cIidcIithLnJlcGxhY2UoLycvZyxcIiUyN1wiKStcIidcIiksZy5vcGVuZXI9bnVsbCxhPSc8bWV0YSBuYW1lPVwicmVmZXJyZXJcIiBjb250ZW50PVwibm8tcmVmZXJyZXJcIj48bWV0YSBodHRwLWVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9XCIwOyB1cmw9JytSYihhKSsnXCI+JyxhPShkPXZiKCkpP2QuY3JlYXRlSFRNTChhKTphLGE9bmV3IExiKGEsbnVsbCxNYiksZD1nLmRvY3VtZW50KSlkLndyaXRlKE5iKGEpKSxkLmNsb3NlKCl9ZWxzZShnPVBiKGIsZCxjLGcpKSYmYS5ub29wZW5lciYmKGcub3BlbmVyPW51bGwpO2lmKGcpdHJ5e2cuZm9jdXMoKX1jYXRjaChoKXt9cmV0dXJuIGd9XG5mdW5jdGlvbiBCZShhKXtyZXR1cm4gbmV3IEQoZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe0ZkKDJFMykudGhlbihmdW5jdGlvbigpe2lmKCFhfHxhLmNsb3NlZCliKCk7ZWxzZSByZXR1cm4gYygpfSl9cmV0dXJuIGMoKX0pfXZhciBDZT0vXlxcZHsxLDN9XFwuXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9JC8sRGU9L15bXkBdK0BbXkBdKyQvO2Z1bmN0aW9uIEVlKCl7dmFyIGE9bnVsbDtyZXR1cm4obmV3IEQoZnVuY3Rpb24oYil7XCJjb21wbGV0ZVwiPT1sLmRvY3VtZW50LnJlYWR5U3RhdGU/YigpOihhPWZ1bmN0aW9uKCl7YigpfSxvZCh3aW5kb3csXCJsb2FkXCIsYSkpfSkpLm8oZnVuY3Rpb24oYil7eGQod2luZG93LFwibG9hZFwiLGEpO3Rocm93IGI7fSl9XG5mdW5jdGlvbiBGZSgpe3JldHVybiBHZSh2b2lkIDApP0VlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgRChmdW5jdGlvbihhLGIpe3ZhciBjPWwuZG9jdW1lbnQsZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihFcnJvcihcIkNvcmRvdmEgZnJhbWV3b3JrIGlzIG5vdCByZWFkeS5cIikpfSwxRTMpO2MuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCk7YSgpfSwhMSl9KX0pOkYoRXJyb3IoXCJDb3Jkb3ZhIG11c3QgcnVuIGluIGFuIEFuZHJvaWQgb3IgaU9TIGZpbGUgc2NoZW1lLlwiKSl9ZnVuY3Rpb24gR2UoYSl7YT1hfHxLKCk7cmV0dXJuIShcImZpbGU6XCIhPT1IZSgpJiZcImlvbmljOlwiIT09SGUoKXx8IWEudG9Mb3dlckNhc2UoKS5tYXRjaCgvaXBob25lfGlwYWR8aXBvZHxhbmRyb2lkLykpfWZ1bmN0aW9uIEllKCl7dmFyIGE9bC53aW5kb3c7dHJ5e3JldHVybiEoIWF8fGE9PWEudG9wKX1jYXRjaChiKXtyZXR1cm4hMX19XG5mdW5jdGlvbiBKZSgpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgbC5Xb3JrZXJHbG9iYWxTY29wZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGwuaW1wb3J0U2NyaXB0c31mdW5jdGlvbiBLZSgpe3JldHVybiBmaXJlYmFzZS5JTlRFUk5BTC5oYXNPd25Qcm9wZXJ0eShcInJlYWN0TmF0aXZlXCIpP1wiUmVhY3ROYXRpdmVcIjpmaXJlYmFzZS5JTlRFUk5BTC5oYXNPd25Qcm9wZXJ0eShcIm5vZGVcIik/XCJOb2RlXCI6SmUoKT9cIldvcmtlclwiOlwiQnJvd3NlclwifWZ1bmN0aW9uIExlKCl7dmFyIGE9S2UoKTtyZXR1cm5cIlJlYWN0TmF0aXZlXCI9PT1hfHxcIk5vZGVcIj09PWF9ZnVuY3Rpb24gTWUoKXtmb3IodmFyIGE9NTAsYj1bXTswPGE7KWIucHVzaChcIjEyMzQ1Njc4OTBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuY2hhckF0KE1hdGguZmxvb3IoNjIqTWF0aC5yYW5kb20oKSkpKSxhLS07cmV0dXJuIGIuam9pbihcIlwiKX1cbnZhciBBZT1cIkZpcmVmb3hcIix3ZT1cIkNocm9tZVwiO1xuZnVuY3Rpb24gdmUoYSl7dmFyIGI9YS50b0xvd2VyQ2FzZSgpO2lmKHgoYixcIm9wZXJhL1wiKXx8eChiLFwib3ByL1wiKXx8eChiLFwib3Bpb3MvXCIpKXJldHVyblwiT3BlcmFcIjtpZih4KGIsXCJpZW1vYmlsZVwiKSlyZXR1cm5cIklFTW9iaWxlXCI7aWYoeChiLFwibXNpZVwiKXx8eChiLFwidHJpZGVudC9cIikpcmV0dXJuXCJJRVwiO2lmKHgoYixcImVkZ2UvXCIpKXJldHVyblwiRWRnZVwiO2lmKHgoYixcImZpcmVmb3gvXCIpKXJldHVybiBBZTtpZih4KGIsXCJzaWxrL1wiKSlyZXR1cm5cIlNpbGtcIjtpZih4KGIsXCJibGFja2JlcnJ5XCIpKXJldHVyblwiQmxhY2tiZXJyeVwiO2lmKHgoYixcIndlYm9zXCIpKXJldHVyblwiV2Vib3NcIjtpZigheChiLFwic2FmYXJpL1wiKXx8eChiLFwiY2hyb21lL1wiKXx8eChiLFwiY3Jpb3MvXCIpfHx4KGIsXCJhbmRyb2lkXCIpKWlmKCF4KGIsXCJjaHJvbWUvXCIpJiYheChiLFwiY3Jpb3MvXCIpfHx4KGIsXCJlZGdlL1wiKSl7aWYoeChiLFwiYW5kcm9pZFwiKSlyZXR1cm5cIkFuZHJvaWRcIjtpZigoYT1hLm1hdGNoKC8oW2EtekEtWlxcZFxcLl0rKVxcL1thLXpBLVpcXGRcXC5dKiQvKSkmJlxuMj09YS5sZW5ndGgpcmV0dXJuIGFbMV19ZWxzZSByZXR1cm4gd2U7ZWxzZSByZXR1cm5cIlNhZmFyaVwiO3JldHVyblwiT3RoZXJcIn12YXIgTmU9e21kOlwiRmlyZWJhc2VDb3JlLXdlYlwiLG9kOlwiRmlyZWJhc2VVSS13ZWJcIn07ZnVuY3Rpb24gT2UoYSxiKXtiPWJ8fFtdO3ZhciBjPVtdLGQ9e30sZTtmb3IoZSBpbiBOZSlkW05lW2VdXT0hMDtmb3IoZT0wO2U8Yi5sZW5ndGg7ZSsrKVwidW5kZWZpbmVkXCIhPT10eXBlb2YgZFtiW2VdXSYmKGRlbGV0ZSBkW2JbZV1dLGMucHVzaChiW2VdKSk7Yy5zb3J0KCk7Yj1jO2IubGVuZ3RofHwoYj1bXCJGaXJlYmFzZUNvcmUtd2ViXCJdKTtjPUtlKCk7XCJCcm93c2VyXCI9PT1jPyhkPUsoKSxjPXZlKGQpKTpcIldvcmtlclwiPT09YyYmKGQ9SygpLGM9dmUoZCkrXCItXCIrYyk7cmV0dXJuIGMrXCIvSnNDb3JlL1wiK2ErXCIvXCIrYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBLKCl7cmV0dXJuIGwubmF2aWdhdG9yJiZsLm5hdmlnYXRvci51c2VyQWdlbnR8fFwiXCJ9XG5mdW5jdGlvbiBMKGEsYil7YT1hLnNwbGl0KFwiLlwiKTtiPWJ8fGw7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aCYmXCJvYmplY3RcIj09dHlwZW9mIGImJm51bGwhPWI7YysrKWI9YlthW2NdXTtjIT1hLmxlbmd0aCYmKGI9dm9pZCAwKTtyZXR1cm4gYn1mdW5jdGlvbiBQZSgpe3RyeXt2YXIgYT1sLmxvY2FsU3RvcmFnZSxiPVFlKCk7aWYoYSlyZXR1cm4gYS5zZXRJdGVtKGIsXCIxXCIpLGEucmVtb3ZlSXRlbShiKSxxZSgpPyEhbC5pbmRleGVkREI6ITB9Y2F0Y2goYyl7cmV0dXJuIEplKCkmJiEhbC5pbmRleGVkREJ9cmV0dXJuITF9ZnVuY3Rpb24gUmUoKXtyZXR1cm4oU2UoKXx8XCJjaHJvbWUtZXh0ZW5zaW9uOlwiPT09SGUoKXx8R2UoKSkmJiFMZSgpJiZQZSgpJiYhSmUoKX1mdW5jdGlvbiBTZSgpe3JldHVyblwiaHR0cDpcIj09PUhlKCl8fFwiaHR0cHM6XCI9PT1IZSgpfWZ1bmN0aW9uIEhlKCl7cmV0dXJuIGwubG9jYXRpb24mJmwubG9jYXRpb24ucHJvdG9jb2x8fG51bGx9XG5mdW5jdGlvbiBUZShhKXthPWF8fEsoKTtyZXR1cm4geGUoYSl8fHZlKGEpPT1BZT8hMTohMH1mdW5jdGlvbiBVZShhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGE/bnVsbDprZShhKX1mdW5jdGlvbiBWZShhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmbnVsbCE9PWFbY10mJnZvaWQgMCE9PWFbY10mJihiW2NdPWFbY10pO3JldHVybiBifWZ1bmN0aW9uIFdlKGEpe2lmKG51bGwhPT1hKXJldHVybiBKU09OLnBhcnNlKGEpfWZ1bmN0aW9uIFFlKGEpe3JldHVybiBhP2E6TWF0aC5mbG9vcigxRTkqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKX1mdW5jdGlvbiBYZShhKXthPWF8fEsoKTtyZXR1cm5cIlNhZmFyaVwiPT12ZShhKXx8YS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pcGhvbmV8aXBhZHxpcG9kLyk/ITE6ITB9XG5mdW5jdGlvbiBZZSgpe3ZhciBhPWwuX19fanNsO2lmKGEmJmEuSClmb3IodmFyIGIgaW4gYS5IKWlmKGEuSFtiXS5yPWEuSFtiXS5yfHxbXSxhLkhbYl0uTD1hLkhbYl0uTHx8W10sYS5IW2JdLnI9YS5IW2JdLkwuY29uY2F0KCksYS5DUClmb3IodmFyIGM9MDtjPGEuQ1AubGVuZ3RoO2MrKylhLkNQW2NdPW51bGx9ZnVuY3Rpb24gWmUoYSxiKXtpZihhPmIpdGhyb3cgRXJyb3IoXCJTaG9ydCBkZWxheSBzaG91bGQgYmUgbGVzcyB0aGFuIGxvbmcgZGVsYXkhXCIpO3RoaXMuYT1hO3RoaXMuYz1iO2E9SygpO2I9S2UoKTt0aGlzLmI9eGUoYSl8fFwiUmVhY3ROYXRpdmVcIj09PWJ9XG5aZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIGE9bC5uYXZpZ2F0b3I7cmV0dXJuKGEmJlwiYm9vbGVhblwiPT09dHlwZW9mIGEub25MaW5lJiYoU2UoKXx8XCJjaHJvbWUtZXh0ZW5zaW9uOlwiPT09SGUoKXx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLmNvbm5lY3Rpb24pP2Eub25MaW5lOjEpP3RoaXMuYj90aGlzLmM6dGhpcy5hOk1hdGgubWluKDVFMyx0aGlzLmEpfTtmdW5jdGlvbiAkZSgpe3ZhciBhPWwuZG9jdW1lbnQ7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYS52aXNpYmlsaXR5U3RhdGU/XCJ2aXNpYmxlXCI9PWEudmlzaWJpbGl0eVN0YXRlOiEwfVxuZnVuY3Rpb24gYWYoKXt2YXIgYT1sLmRvY3VtZW50LGI9bnVsbDtyZXR1cm4gJGUoKXx8IWE/RSgpOihuZXcgRChmdW5jdGlvbihjKXtiPWZ1bmN0aW9uKCl7JGUoKSYmKGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixiLCExKSxjKCkpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsYiwhMSl9KSkubyhmdW5jdGlvbihjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsYiwhMSk7dGhyb3cgYzt9KX1mdW5jdGlvbiBiZihhKXt0cnl7dmFyIGI9bmV3IERhdGUocGFyc2VJbnQoYSwxMCkpO2lmKCFpc05hTihiLmdldFRpbWUoKSkmJiEvW14wLTldLy50ZXN0KGEpKXJldHVybiBiLnRvVVRDU3RyaW5nKCl9Y2F0Y2goYyl7fXJldHVybiBudWxsfWZ1bmN0aW9uIGNmKCl7cmV0dXJuISghTChcImZpcmVhdXRoLm9hdXRoaGVscGVyXCIsbCkmJiFMKFwiZmlyZWF1dGguaWZyYW1lXCIsbCkpfVxuZnVuY3Rpb24gZGYoKXt2YXIgYT1sLm5hdmlnYXRvcjtyZXR1cm4gYSYmYS5zZXJ2aWNlV29ya2VyJiZhLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcnx8bnVsbH1mdW5jdGlvbiBlZigpe3ZhciBhPWwubmF2aWdhdG9yO3JldHVybiBhJiZhLnNlcnZpY2VXb3JrZXI/RSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5zZXJ2aWNlV29ya2VyLnJlYWR5fSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYi5hY3RpdmV8fG51bGx9KS5vKGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9KTpFKG51bGwpfTsvKlxuXG4gQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbnZhciBmZj17fTtmdW5jdGlvbiBnZihhKXtmZlthXXx8KGZmW2FdPSEwLFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKGEpKX07dmFyIGhmO3RyeXt2YXIgamY9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KGpmLFwiYWJjZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZToxfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGpmLFwiYWJjZFwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZToyfSk7aGY9Mj09amYuYWJjZH1jYXRjaChhKXtoZj0hMX1mdW5jdGlvbiBNKGEsYixjKXtoZj9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjfSk6YVtiXT1jfWZ1bmN0aW9uIE4oYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJk0oYSxjLGJbY10pfWZ1bmN0aW9uIGtmKGEpe3ZhciBiPXt9O04oYixhKTtyZXR1cm4gYn1mdW5jdGlvbiBsZihhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBtZihhLGIpe2lmKCFifHwhYi5sZW5ndGgpcmV0dXJuITA7aWYoIWEpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWFbYltjXV07aWYodm9pZCAwPT09ZHx8bnVsbD09PWR8fFwiXCI9PT1kKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIG5mKGEpe3ZhciBiPWE7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEmJm51bGwhPWEpe2I9XCJsZW5ndGhcImluIGE/W106e307Zm9yKHZhciBjIGluIGEpTShiLGMsbmYoYVtjXSkpfXJldHVybiBifTsvKlxuXG4gQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmZ1bmN0aW9uIG9mKGEpe3ZhciBiPWEmJihhW3BmXT9cInBob25lXCI6bnVsbCk7aWYoYiYmYSYmYVtxZl0pe00odGhpcyxcInVpZFwiLGFbcWZdKTtNKHRoaXMsXCJkaXNwbGF5TmFtZVwiLGFbcmZdfHxudWxsKTt2YXIgYz1udWxsO2Fbc2ZdJiYoYz0obmV3IERhdGUoYVtzZl0pKS50b1VUQ1N0cmluZygpKTtNKHRoaXMsXCJlbnJvbGxtZW50VGltZVwiLGMpO00odGhpcyxcImZhY3RvcklkXCIsYil9ZWxzZSB0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIsXCJJbnRlcm5hbCBhc3NlcnQ6IGludmFsaWQgTXVsdGlGYWN0b3JJbmZvIG9iamVjdFwiKTt9b2YucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXtyZXR1cm57dWlkOnRoaXMudWlkLGRpc3BsYXlOYW1lOnRoaXMuZGlzcGxheU5hbWUsZmFjdG9ySWQ6dGhpcy5mYWN0b3JJZCxlbnJvbGxtZW50VGltZTp0aGlzLmVucm9sbG1lbnRUaW1lfX07ZnVuY3Rpb24gdGYoYSl7dHJ5e3ZhciBiPW5ldyB1ZihhKX1jYXRjaChjKXtiPW51bGx9cmV0dXJuIGJ9XG52YXIgcmY9XCJkaXNwbGF5TmFtZVwiLHNmPVwiZW5yb2xsZWRBdFwiLHFmPVwibWZhRW5yb2xsbWVudElkXCIscGY9XCJwaG9uZUluZm9cIjtmdW5jdGlvbiB1ZihhKXtvZi5jYWxsKHRoaXMsYSk7TSh0aGlzLFwicGhvbmVOdW1iZXJcIixhW3BmXSl9cih1ZixvZik7dWYucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXt2YXIgYT11Zi5iYi53LmNhbGwodGhpcyk7YS5waG9uZU51bWJlcj10aGlzLnBob25lTnVtYmVyO3JldHVybiBhfTtmdW5jdGlvbiB2ZihhKXt2YXIgYj17fSxjPWFbd2ZdLGQ9YVt4Zl0sZT1hW3lmXTthPXRmKGFbemZdKTtpZighZXx8ZSE9QWYmJmUhPUJmJiYhY3x8ZT09QmYmJiFkfHxlPT1DZiYmIWEpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNoZWNrQWN0aW9uQ29kZSByZXNwb25zZSFcIik7ZT09QmY/KGJbRGZdPWN8fG51bGwsYltFZl09Y3x8bnVsbCxiW0ZmXT1kKTooYltEZl09ZHx8bnVsbCxiW0VmXT1kfHxudWxsLGJbRmZdPWN8fG51bGwpO2JbR2ZdPWF8fG51bGw7TSh0aGlzLEhmLGUpO00odGhpcyxJZixuZihiKSl9XG52YXIgQ2Y9XCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTlwiLEFmPVwiRU1BSUxfU0lHTklOXCIsQmY9XCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTFwiLHdmPVwiZW1haWxcIix6Zj1cIm1mYUluZm9cIix4Zj1cIm5ld0VtYWlsXCIseWY9XCJyZXF1ZXN0VHlwZVwiLEZmPVwiZW1haWxcIixEZj1cImZyb21FbWFpbFwiLEdmPVwibXVsdGlGYWN0b3JJbmZvXCIsRWY9XCJwcmV2aW91c0VtYWlsXCIsSWY9XCJkYXRhXCIsSGY9XCJvcGVyYXRpb25cIjtmdW5jdGlvbiBKZihhKXthPUooYSk7dmFyIGI9YmUoYSxLZil8fG51bGwsYz1iZShhLExmKXx8bnVsbCxkPWJlKGEsTWYpfHxudWxsO2Q9ZD9OZltkXXx8bnVsbDpudWxsO2lmKCFifHwhY3x8IWQpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLEtmK1wiLCBcIitMZitcImFuZCBcIitNZitcIiBhcmUgcmVxdWlyZWQgaW4gYSB2YWxpZCBhY3Rpb24gY29kZSBVUkwuXCIpO04odGhpcyx7YXBpS2V5OmIsb3BlcmF0aW9uOmQsY29kZTpjLGNvbnRpbnVlVXJsOmJlKGEsT2YpfHxudWxsLGxhbmd1YWdlQ29kZTpiZShhLFBmKXx8bnVsbCx0ZW5hbnRJZDpiZShhLFFmKXx8bnVsbH0pfVxudmFyIEtmPVwiYXBpS2V5XCIsTGY9XCJvb2JDb2RlXCIsT2Y9XCJjb250aW51ZVVybFwiLFBmPVwibGFuZ3VhZ2VDb2RlXCIsTWY9XCJtb2RlXCIsUWY9XCJ0ZW5hbnRJZFwiLE5mPXtyZWNvdmVyRW1haWw6XCJSRUNPVkVSX0VNQUlMXCIscmVzZXRQYXNzd29yZDpcIlBBU1NXT1JEX1JFU0VUXCIscmV2ZXJ0U2Vjb25kRmFjdG9yQWRkaXRpb246Q2Ysc2lnbkluOkFmLHZlcmlmeUFuZENoYW5nZUVtYWlsOkJmLHZlcmlmeUVtYWlsOlwiVkVSSUZZX0VNQUlMXCJ9O2Z1bmN0aW9uIFJmKGEpe3RyeXtyZXR1cm4gbmV3IEpmKGEpfWNhdGNoKGIpe3JldHVybiBudWxsfX07ZnVuY3Rpb24gU2YoYSl7dmFyIGI9YVtUZl07aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiKXRocm93IG5ldyB0KFwibWlzc2luZy1jb250aW51ZS11cmlcIik7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBifHxcInN0cmluZ1wiPT09dHlwZW9mIGImJiFiLmxlbmd0aCl0aHJvdyBuZXcgdChcImludmFsaWQtY29udGludWUtdXJpXCIpO3RoaXMuaD1iO3RoaXMuYj10aGlzLmE9bnVsbDt0aGlzLmc9ITE7dmFyIGM9YVtVZl07aWYoYyYmXCJvYmplY3RcIj09PXR5cGVvZiBjKXtiPWNbVmZdO3ZhciBkPWNbV2ZdO2M9Y1tYZl07aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBiJiZiLmxlbmd0aCl7dGhpcy5hPWI7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkJiZcImJvb2xlYW5cIiE9PXR5cGVvZiBkKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixXZitcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgYm9vbGVhbiB3aGVuIHNwZWNpZmllZC5cIik7dGhpcy5nPSEhZDtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJihcInN0cmluZ1wiIT09XG50eXBlb2YgY3x8XCJzdHJpbmdcIj09PXR5cGVvZiBjJiYhYy5sZW5ndGgpKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixYZitcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZyB3aGVuIHNwZWNpZmllZC5cIik7dGhpcy5iPWN8fG51bGx9ZWxzZXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGIpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLFZmK1wiIHByb3BlcnR5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nIHdoZW4gc3BlY2lmaWVkLlwiKTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGR8fFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyl0aHJvdyBuZXcgdChcIm1pc3NpbmctYW5kcm9pZC1wa2ctbmFtZVwiKTt9fWVsc2UgaWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixVZitcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgbm9uIG51bGwgb2JqZWN0IHdoZW4gc3BlY2lmaWVkLlwiKTt0aGlzLmY9bnVsbDtpZigoYj1hW1lmXSkmJlwib2JqZWN0XCI9PT1cbnR5cGVvZiBiKWlmKGI9YltaZl0sXCJzdHJpbmdcIj09PXR5cGVvZiBiJiZiLmxlbmd0aCl0aGlzLmY9YjtlbHNle2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYil0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsWmYrXCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgd2hlbiBzcGVjaWZpZWQuXCIpO31lbHNlIGlmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYil0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsWWYrXCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbiBudWxsIG9iamVjdCB3aGVuIHNwZWNpZmllZC5cIik7Yj1hWyRmXTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGImJlwiYm9vbGVhblwiIT09dHlwZW9mIGIpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLCRmK1wiIHByb3BlcnR5IG11c3QgYmUgYSBib29sZWFuIHdoZW4gc3BlY2lmaWVkLlwiKTt0aGlzLmM9ISFiO2E9YVthZ107aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhJiYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhfHxcInN0cmluZ1wiPT09XG50eXBlb2YgYSYmIWEubGVuZ3RoKSl0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsYWcrXCIgcHJvcGVydHkgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmcgd2hlbiBzcGVjaWZpZWQuXCIpO3RoaXMuaT1hfHxudWxsfXZhciBVZj1cImFuZHJvaWRcIixhZz1cImR5bmFtaWNMaW5rRG9tYWluXCIsJGY9XCJoYW5kbGVDb2RlSW5BcHBcIixZZj1cImlPU1wiLFRmPVwidXJsXCIsV2Y9XCJpbnN0YWxsQXBwXCIsWGY9XCJtaW5pbXVtVmVyc2lvblwiLFZmPVwicGFja2FnZU5hbWVcIixaZj1cImJ1bmRsZUlkXCI7XG5mdW5jdGlvbiBiZyhhKXt2YXIgYj17fTtiLmNvbnRpbnVlVXJsPWEuaDtiLmNhbkhhbmRsZUNvZGVJbkFwcD1hLmM7aWYoYi5hbmRyb2lkUGFja2FnZU5hbWU9YS5hKWIuYW5kcm9pZE1pbmltdW1WZXJzaW9uPWEuYixiLmFuZHJvaWRJbnN0YWxsQXBwPWEuZztiLmlPU0J1bmRsZUlkPWEuZjtiLmR5bmFtaWNMaW5rRG9tYWluPWEuaTtmb3IodmFyIGMgaW4gYiludWxsPT09YltjXSYmZGVsZXRlIGJbY107cmV0dXJuIGJ9O2Z1bmN0aW9uIGNnKGEpe3JldHVybiBSYShhLGZ1bmN0aW9uKGIpe2I9Yi50b1N0cmluZygxNik7cmV0dXJuIDE8Yi5sZW5ndGg/YjpcIjBcIitifSkuam9pbihcIlwiKX07dmFyIGRnPW51bGw7ZnVuY3Rpb24gZWcoYSl7dmFyIGI9W107ZmcoYSxmdW5jdGlvbihjKXtiLnB1c2goYyl9KTtyZXR1cm4gYn1mdW5jdGlvbiBmZyhhLGIpe2Z1bmN0aW9uIGMobSl7Zm9yKDtkPGEubGVuZ3RoOyl7dmFyIHA9YS5jaGFyQXQoZCsrKSx2PWRnW3BdO2lmKG51bGwhPXYpcmV0dXJuIHY7aWYoIS9eW1xcc1xceGEwXSokLy50ZXN0KHApKXRocm93IEVycm9yKFwiVW5rbm93biBiYXNlNjQgZW5jb2RpbmcgYXQgY2hhcjogXCIrcCk7fXJldHVybiBtfWdnKCk7Zm9yKHZhciBkPTA7Oyl7dmFyIGU9YygtMSksZj1jKDApLGc9Yyg2NCksaD1jKDY0KTtpZig2ND09PWgmJi0xPT09ZSlicmVhaztiKGU8PDJ8Zj4+NCk7NjQhPWcmJihiKGY8PDQmMjQwfGc+PjIpLDY0IT1oJiZiKGc8PDYmMTkyfGgpKX19XG5mdW5jdGlvbiBnZygpe2lmKCFkZyl7ZGc9e307Zm9yKHZhciBhPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIi5zcGxpdChcIlwiKSxiPVtcIisvPVwiLFwiKy9cIixcIi1fPVwiLFwiLV8uXCIsXCItX1wiXSxjPTA7NT5jO2MrKylmb3IodmFyIGQ9YS5jb25jYXQoYltjXS5zcGxpdChcIlwiKSksZT0wO2U8ZC5sZW5ndGg7ZSsrKXt2YXIgZj1kW2VdO3ZvaWQgMD09PWRnW2ZdJiYoZGdbZl09ZSl9fX07ZnVuY3Rpb24gaGcoYSl7dmFyIGI9aWcoYSk7aWYoIShiJiZiLnN1YiYmYi5pc3MmJmIuYXVkJiZiLmV4cCkpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIEpXVFwiKTt0aGlzLmg9YTt0aGlzLmE9Yi5leHA7dGhpcy5pPWIuc3ViO2E9RGF0ZS5ub3coKS8xRTM7dGhpcy5nPWIuaWF0fHwoYT50aGlzLmE/dGhpcy5hOmEpO3RoaXMuYj1iLnByb3ZpZGVyX2lkfHxiLmZpcmViYXNlJiZiLmZpcmViYXNlLnNpZ25faW5fcHJvdmlkZXJ8fG51bGw7dGhpcy5mPWIuZmlyZWJhc2UmJmIuZmlyZWJhc2UudGVuYW50fHxudWxsO3RoaXMuYz0hIWIuaXNfYW5vbnltb3VzfHxcImFub255bW91c1wiPT10aGlzLmJ9aGcucHJvdG90eXBlLlQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mfTtoZy5wcm90b3R5cGUubD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O2hnLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmh9O1xuZnVuY3Rpb24gamcoYSl7dHJ5e3JldHVybiBuZXcgaGcoYSl9Y2F0Y2goYil7cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24gaWcoYSl7aWYoIWEpcmV0dXJuIG51bGw7YT1hLnNwbGl0KFwiLlwiKTtpZigzIT1hLmxlbmd0aClyZXR1cm4gbnVsbDthPWFbMV07Zm9yKHZhciBiPSg0LWEubGVuZ3RoJTQpJTQsYz0wO2M8YjtjKyspYSs9XCIuXCI7dHJ5e3ZhciBkPWVnKGEpO2E9W107Zm9yKGM9Yj0wO2I8ZC5sZW5ndGg7KXt2YXIgZT1kW2IrK107aWYoMTI4PmUpYVtjKytdPVN0cmluZy5mcm9tQ2hhckNvZGUoZSk7ZWxzZSBpZigxOTE8ZSYmMjI0PmUpe3ZhciBmPWRbYisrXTthW2MrK109U3RyaW5nLmZyb21DaGFyQ29kZSgoZSYzMSk8PDZ8ZiY2Myl9ZWxzZSBpZigyMzk8ZSYmMzY1PmUpe2Y9ZFtiKytdO3ZhciBnPWRbYisrXSxoPWRbYisrXSxtPSgoZSY3KTw8MTh8KGYmNjMpPDwxMnwoZyY2Myk8PDZ8aCY2MyktNjU1MzY7YVtjKytdPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYrKG0+PjEwKSk7YVtjKytdPVN0cmluZy5mcm9tQ2hhckNvZGUoNTYzMjArKG0mMTAyMykpfWVsc2UgZj1kW2IrK10sZz1cbmRbYisrXSxhW2MrK109U3RyaW5nLmZyb21DaGFyQ29kZSgoZSYxNSk8PDEyfChmJjYzKTw8NnxnJjYzKX1yZXR1cm4gSlNPTi5wYXJzZShhLmpvaW4oXCJcIikpfWNhdGNoKHApe31yZXR1cm4gbnVsbH07dmFyIGtnPVwib2F1dGhfY29uc3VtZXJfa2V5IG9hdXRoX25vbmNlIG9hdXRoX3NpZ25hdHVyZSBvYXV0aF9zaWduYXR1cmVfbWV0aG9kIG9hdXRoX3RpbWVzdGFtcCBvYXV0aF90b2tlbiBvYXV0aF92ZXJzaW9uXCIuc3BsaXQoXCIgXCIpLGxnPVtcImNsaWVudF9pZFwiLFwicmVzcG9uc2VfdHlwZVwiLFwic2NvcGVcIixcInJlZGlyZWN0X3VyaVwiLFwic3RhdGVcIl0sbWc9e25kOntKYTpcImxvY2FsZVwiLHZhOjcwMCx1YTo2MDAsZmE6XCJmYWNlYm9vay5jb21cIixZYTpsZ30scGQ6e0phOm51bGwsdmE6NTAwLHVhOjc1MCxmYTpcImdpdGh1Yi5jb21cIixZYTpsZ30scWQ6e0phOlwiaGxcIix2YTo1MTUsdWE6NjgwLGZhOlwiZ29vZ2xlLmNvbVwiLFlhOmxnfSx3ZDp7SmE6XCJsYW5nXCIsdmE6NDg1LHVhOjcwNSxmYTpcInR3aXR0ZXIuY29tXCIsWWE6a2d9LGtkOntKYTpcImxvY2FsZVwiLHZhOjY0MCx1YTo2MDAsZmE6XCJhcHBsZS5jb21cIixZYTpbXX19O1xuZnVuY3Rpb24gbmcoYSl7Zm9yKHZhciBiIGluIG1nKWlmKG1nW2JdLmZhPT1hKXJldHVybiBtZ1tiXTtyZXR1cm4gbnVsbH07ZnVuY3Rpb24gb2coYSl7dmFyIGI9e307YltcImZhY2Vib29rLmNvbVwiXT1wZztiW1wiZ29vZ2xlLmNvbVwiXT1xZztiW1wiZ2l0aHViLmNvbVwiXT1yZztiW1widHdpdHRlci5jb21cIl09c2c7dmFyIGM9YSYmYVt0Z107dHJ5e2lmKGMpcmV0dXJuIGJbY10/bmV3IGJbY10oYSk6bmV3IHVnKGEpO2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYVt2Z10pcmV0dXJuIG5ldyB3ZyhhKX1jYXRjaChkKXt9cmV0dXJuIG51bGx9dmFyIHZnPVwiaWRUb2tlblwiLHRnPVwicHJvdmlkZXJJZFwiO1xuZnVuY3Rpb24gd2coYSl7dmFyIGI9YVt0Z107aWYoIWImJmFbdmddKXt2YXIgYz1qZyhhW3ZnXSk7YyYmYy5iJiYoYj1jLmIpfWlmKCFiKXRocm93IEVycm9yKFwiSW52YWxpZCBhZGRpdGlvbmFsIHVzZXIgaW5mbyFcIik7aWYoXCJhbm9ueW1vdXNcIj09Ynx8XCJjdXN0b21cIj09YiliPW51bGw7Yz0hMTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEuaXNOZXdVc2VyP2M9ISFhLmlzTmV3VXNlcjpcImlkZW50aXR5dG9vbGtpdCNTaWdudXBOZXdVc2VyUmVzcG9uc2VcIj09PWEua2luZCYmKGM9ITApO00odGhpcyxcInByb3ZpZGVySWRcIixiKTtNKHRoaXMsXCJpc05ld1VzZXJcIixjKX1mdW5jdGlvbiB1ZyhhKXt3Zy5jYWxsKHRoaXMsYSk7YT1XZShhLnJhd1VzZXJJbmZvfHxcInt9XCIpO00odGhpcyxcInByb2ZpbGVcIixuZihhfHx7fSkpfXIodWcsd2cpO1xuZnVuY3Rpb24gcGcoYSl7dWcuY2FsbCh0aGlzLGEpO2lmKFwiZmFjZWJvb2suY29tXCIhPXRoaXMucHJvdmlkZXJJZCl0aHJvdyBFcnJvcihcIkludmFsaWQgcHJvdmlkZXIgSUQhXCIpO31yKHBnLHVnKTtmdW5jdGlvbiByZyhhKXt1Zy5jYWxsKHRoaXMsYSk7aWYoXCJnaXRodWIuY29tXCIhPXRoaXMucHJvdmlkZXJJZCl0aHJvdyBFcnJvcihcIkludmFsaWQgcHJvdmlkZXIgSUQhXCIpO00odGhpcyxcInVzZXJuYW1lXCIsdGhpcy5wcm9maWxlJiZ0aGlzLnByb2ZpbGUubG9naW58fG51bGwpfXIocmcsdWcpO2Z1bmN0aW9uIHFnKGEpe3VnLmNhbGwodGhpcyxhKTtpZihcImdvb2dsZS5jb21cIiE9dGhpcy5wcm92aWRlcklkKXRocm93IEVycm9yKFwiSW52YWxpZCBwcm92aWRlciBJRCFcIik7fXIocWcsdWcpO1xuZnVuY3Rpb24gc2coYSl7dWcuY2FsbCh0aGlzLGEpO2lmKFwidHdpdHRlci5jb21cIiE9dGhpcy5wcm92aWRlcklkKXRocm93IEVycm9yKFwiSW52YWxpZCBwcm92aWRlciBJRCFcIik7TSh0aGlzLFwidXNlcm5hbWVcIixhLnNjcmVlbk5hbWV8fG51bGwpfXIoc2csdWcpO2Z1bmN0aW9uIHhnKGEpe3ZhciBiPUooYSksYz1iZShiLFwibGlua1wiKSxkPWJlKEooYyksXCJsaW5rXCIpO2I9YmUoYixcImRlZXBfbGlua19pZFwiKTtyZXR1cm4gYmUoSihiKSxcImxpbmtcIil8fGJ8fGR8fGN8fGF9O2Z1bmN0aW9uIHlnKGEsYil7aWYoIWEmJiFiKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIkludGVybmFsIGFzc2VydDogbm8gcmF3IHNlc3Npb24gc3RyaW5nIGF2YWlsYWJsZVwiKTtpZihhJiZiKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIkludGVybmFsIGFzc2VydDogdW5hYmxlIHRvIGRldGVybWluZSB0aGUgc2Vzc2lvbiB0eXBlXCIpO3RoaXMuYT1hfHxudWxsO3RoaXMuYj1ifHxudWxsO3RoaXMudHlwZT10aGlzLmE/emc6QWd9dmFyIHpnPVwiZW5yb2xsXCIsQWc9XCJzaWduaW5cIjt5Zy5wcm90b3R5cGUuSGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hP0UodGhpcy5hKTpFKHRoaXMuYil9O3lnLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHlwZT09emc/e211bHRpRmFjdG9yU2Vzc2lvbjp7aWRUb2tlbjp0aGlzLmF9fTp7bXVsdGlGYWN0b3JTZXNzaW9uOntwZW5kaW5nQ3JlZGVudGlhbDp0aGlzLmJ9fX07ZnVuY3Rpb24gQmcoKXt9QmcucHJvdG90eXBlLmthPWZ1bmN0aW9uKCl7fTtCZy5wcm90b3R5cGUuYj1mdW5jdGlvbigpe307QmcucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt9O0JnLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBDZyhhLGIpe3JldHVybiBhLnRoZW4oZnVuY3Rpb24oYyl7aWYoY1tEZ10pe3ZhciBkPWpnKGNbRGddKTtpZighZHx8YiE9ZC5pKXRocm93IG5ldyB0KFwidXNlci1taXNtYXRjaFwiKTtyZXR1cm4gY310aHJvdyBuZXcgdChcInVzZXItbWlzbWF0Y2hcIik7fSkubyhmdW5jdGlvbihjKXt0aHJvdyBjJiZjLmNvZGUmJmMuY29kZT09eGErXCJ1c2VyLW5vdC1mb3VuZFwiP25ldyB0KFwidXNlci1taXNtYXRjaFwiKTpjO30pfVxuZnVuY3Rpb24gRWcoYSxiKXtpZihiKXRoaXMuYT1iO2Vsc2UgdGhyb3cgbmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiLFwiZmFpbGVkIHRvIGNvbnN0cnVjdCBhIGNyZWRlbnRpYWxcIik7TSh0aGlzLFwicHJvdmlkZXJJZFwiLGEpO00odGhpcyxcInNpZ25Jbk1ldGhvZFwiLGEpfUVnLnByb3RvdHlwZS5rYT1mdW5jdGlvbihhKXtyZXR1cm4gRmcoYSxHZyh0aGlzKSl9O0VnLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9R2codGhpcyk7Yy5pZFRva2VuPWI7cmV0dXJuIEhnKGEsYyl9O0VnLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEsYil7cmV0dXJuIENnKElnKGEsR2codGhpcykpLGIpfTtmdW5jdGlvbiBHZyhhKXtyZXR1cm57cGVuZGluZ1Rva2VuOmEuYSxyZXF1ZXN0VXJpOlwiaHR0cDovL2xvY2FsaG9zdFwifX1FZy5wcm90b3R5cGUudz1mdW5jdGlvbigpe3JldHVybntwcm92aWRlcklkOnRoaXMucHJvdmlkZXJJZCxzaWduSW5NZXRob2Q6dGhpcy5zaWduSW5NZXRob2QscGVuZGluZ1Rva2VuOnRoaXMuYX19O1xuZnVuY3Rpb24gSmcoYSl7aWYoYSYmYS5wcm92aWRlcklkJiZhLnNpZ25Jbk1ldGhvZCYmMD09YS5wcm92aWRlcklkLmluZGV4T2YoXCJzYW1sLlwiKSYmYS5wZW5kaW5nVG9rZW4pdHJ5e3JldHVybiBuZXcgRWcoYS5wcm92aWRlcklkLGEucGVuZGluZ1Rva2VuKX1jYXRjaChiKXt9cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBLZyhhLGIsYyl7dGhpcy5hPW51bGw7aWYoYi5pZFRva2VufHxiLmFjY2Vzc1Rva2VuKWIuaWRUb2tlbiYmTSh0aGlzLFwiaWRUb2tlblwiLGIuaWRUb2tlbiksYi5hY2Nlc3NUb2tlbiYmTSh0aGlzLFwiYWNjZXNzVG9rZW5cIixiLmFjY2Vzc1Rva2VuKSxiLm5vbmNlJiYhYi5wZW5kaW5nVG9rZW4mJk0odGhpcyxcIm5vbmNlXCIsYi5ub25jZSksYi5wZW5kaW5nVG9rZW4mJih0aGlzLmE9Yi5wZW5kaW5nVG9rZW4pO2Vsc2UgaWYoYi5vYXV0aFRva2VuJiZiLm9hdXRoVG9rZW5TZWNyZXQpTSh0aGlzLFwiYWNjZXNzVG9rZW5cIixiLm9hdXRoVG9rZW4pLE0odGhpcyxcInNlY3JldFwiLGIub2F1dGhUb2tlblNlY3JldCk7ZWxzZSB0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIsXCJmYWlsZWQgdG8gY29uc3RydWN0IGEgY3JlZGVudGlhbFwiKTtNKHRoaXMsXCJwcm92aWRlcklkXCIsYSk7TSh0aGlzLFwic2lnbkluTWV0aG9kXCIsYyl9XG5LZy5wcm90b3R5cGUua2E9ZnVuY3Rpb24oYSl7cmV0dXJuIEZnKGEsTGcodGhpcykpfTtLZy5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIpe3ZhciBjPUxnKHRoaXMpO2MuaWRUb2tlbj1iO3JldHVybiBIZyhhLGMpfTtLZy5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIpe3ZhciBjPUxnKHRoaXMpO3JldHVybiBDZyhJZyhhLGMpLGIpfTtcbmZ1bmN0aW9uIExnKGEpe3ZhciBiPXt9O2EuaWRUb2tlbiYmKGIuaWRfdG9rZW49YS5pZFRva2VuKTthLmFjY2Vzc1Rva2VuJiYoYi5hY2Nlc3NfdG9rZW49YS5hY2Nlc3NUb2tlbik7YS5zZWNyZXQmJihiLm9hdXRoX3Rva2VuX3NlY3JldD1hLnNlY3JldCk7Yi5wcm92aWRlcklkPWEucHJvdmlkZXJJZDthLm5vbmNlJiYhYS5hJiYoYi5ub25jZT1hLm5vbmNlKTtiPXtwb3N0Qm9keTpmZShiKS50b1N0cmluZygpLHJlcXVlc3RVcmk6XCJodHRwOi8vbG9jYWxob3N0XCJ9O2EuYSYmKGRlbGV0ZSBiLnBvc3RCb2R5LGIucGVuZGluZ1Rva2VuPWEuYSk7cmV0dXJuIGJ9XG5LZy5wcm90b3R5cGUudz1mdW5jdGlvbigpe3ZhciBhPXtwcm92aWRlcklkOnRoaXMucHJvdmlkZXJJZCxzaWduSW5NZXRob2Q6dGhpcy5zaWduSW5NZXRob2R9O3RoaXMuaWRUb2tlbiYmKGEub2F1dGhJZFRva2VuPXRoaXMuaWRUb2tlbik7dGhpcy5hY2Nlc3NUb2tlbiYmKGEub2F1dGhBY2Nlc3NUb2tlbj10aGlzLmFjY2Vzc1Rva2VuKTt0aGlzLnNlY3JldCYmKGEub2F1dGhUb2tlblNlY3JldD10aGlzLnNlY3JldCk7dGhpcy5ub25jZSYmKGEubm9uY2U9dGhpcy5ub25jZSk7dGhpcy5hJiYoYS5wZW5kaW5nVG9rZW49dGhpcy5hKTtyZXR1cm4gYX07XG5mdW5jdGlvbiBNZyhhKXtpZihhJiZhLnByb3ZpZGVySWQmJmEuc2lnbkluTWV0aG9kKXt2YXIgYj17aWRUb2tlbjphLm9hdXRoSWRUb2tlbixhY2Nlc3NUb2tlbjphLm9hdXRoVG9rZW5TZWNyZXQ/bnVsbDphLm9hdXRoQWNjZXNzVG9rZW4sb2F1dGhUb2tlblNlY3JldDphLm9hdXRoVG9rZW5TZWNyZXQsb2F1dGhUb2tlbjphLm9hdXRoVG9rZW5TZWNyZXQmJmEub2F1dGhBY2Nlc3NUb2tlbixub25jZTphLm5vbmNlLHBlbmRpbmdUb2tlbjphLnBlbmRpbmdUb2tlbn07dHJ5e3JldHVybiBuZXcgS2coYS5wcm92aWRlcklkLGIsYS5zaWduSW5NZXRob2QpfWNhdGNoKGMpe319cmV0dXJuIG51bGx9ZnVuY3Rpb24gTmcoYSxiKXt0aGlzLlFjPWJ8fFtdO04odGhpcyx7cHJvdmlkZXJJZDphLGlzT0F1dGhQcm92aWRlcjohMH0pO3RoaXMuSmI9e307dGhpcy5xYj0obmcoYSl8fHt9KS5KYXx8bnVsbDt0aGlzLnBiPW51bGx9XG5OZy5wcm90b3R5cGUuS2E9ZnVuY3Rpb24oYSl7dGhpcy5KYj1uYihhKTtyZXR1cm4gdGhpc307ZnVuY3Rpb24gT2coYSl7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhfHwwIT1hLmluZGV4T2YoXCJzYW1sLlwiKSl0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsJ1NBTUwgcHJvdmlkZXIgSURzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcInNhbWwuXCInKTtOZy5jYWxsKHRoaXMsYSxbXSl9cihPZyxOZyk7ZnVuY3Rpb24gUGcoYSl7TmcuY2FsbCh0aGlzLGEsbGcpO3RoaXMuYT1bXX1yKFBnLE5nKTtQZy5wcm90b3R5cGUuQ2E9ZnVuY3Rpb24oYSl7VmEodGhpcy5hLGEpfHx0aGlzLmEucHVzaChhKTtyZXR1cm4gdGhpc307UGcucHJvdG90eXBlLlJiPWZ1bmN0aW9uKCl7cmV0dXJuIFphKHRoaXMuYSl9O1xuUGcucHJvdG90eXBlLmNyZWRlbnRpYWw9ZnVuY3Rpb24oYSxiKXt2YXIgYztuKGEpP2M9e2lkVG9rZW46YS5pZFRva2VufHxudWxsLGFjY2Vzc1Rva2VuOmEuYWNjZXNzVG9rZW58fG51bGwsbm9uY2U6YS5yYXdOb25jZXx8bnVsbH06Yz17aWRUb2tlbjphfHxudWxsLGFjY2Vzc1Rva2VuOmJ8fG51bGx9O2lmKCFjLmlkVG9rZW4mJiFjLmFjY2Vzc1Rva2VuKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixcImNyZWRlbnRpYWwgZmFpbGVkOiBtdXN0IHByb3ZpZGUgdGhlIElEIHRva2VuIGFuZC9vciB0aGUgYWNjZXNzIHRva2VuLlwiKTtyZXR1cm4gbmV3IEtnKHRoaXMucHJvdmlkZXJJZCxjLHRoaXMucHJvdmlkZXJJZCl9O2Z1bmN0aW9uIFFnKCl7UGcuY2FsbCh0aGlzLFwiZmFjZWJvb2suY29tXCIpfXIoUWcsUGcpO00oUWcsXCJQUk9WSURFUl9JRFwiLFwiZmFjZWJvb2suY29tXCIpO00oUWcsXCJGQUNFQk9PS19TSUdOX0lOX01FVEhPRFwiLFwiZmFjZWJvb2suY29tXCIpO1xuZnVuY3Rpb24gUmcoYSl7aWYoIWEpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLFwiY3JlZGVudGlhbCBmYWlsZWQ6IGV4cGVjdGVkIDEgYXJndW1lbnQgKHRoZSBPQXV0aCBhY2Nlc3MgdG9rZW4pLlwiKTt2YXIgYj1hO24oYSkmJihiPWEuYWNjZXNzVG9rZW4pO3JldHVybihuZXcgUWcpLmNyZWRlbnRpYWwoe2FjY2Vzc1Rva2VuOmJ9KX1mdW5jdGlvbiBTZygpe1BnLmNhbGwodGhpcyxcImdpdGh1Yi5jb21cIil9cihTZyxQZyk7TShTZyxcIlBST1ZJREVSX0lEXCIsXCJnaXRodWIuY29tXCIpO00oU2csXCJHSVRIVUJfU0lHTl9JTl9NRVRIT0RcIixcImdpdGh1Yi5jb21cIik7XG5mdW5jdGlvbiBUZyhhKXtpZighYSl0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsXCJjcmVkZW50aWFsIGZhaWxlZDogZXhwZWN0ZWQgMSBhcmd1bWVudCAodGhlIE9BdXRoIGFjY2VzcyB0b2tlbikuXCIpO3ZhciBiPWE7bihhKSYmKGI9YS5hY2Nlc3NUb2tlbik7cmV0dXJuKG5ldyBTZykuY3JlZGVudGlhbCh7YWNjZXNzVG9rZW46Yn0pfWZ1bmN0aW9uIFVnKCl7UGcuY2FsbCh0aGlzLFwiZ29vZ2xlLmNvbVwiKTt0aGlzLkNhKFwicHJvZmlsZVwiKX1yKFVnLFBnKTtNKFVnLFwiUFJPVklERVJfSURcIixcImdvb2dsZS5jb21cIik7TShVZyxcIkdPT0dMRV9TSUdOX0lOX01FVEhPRFwiLFwiZ29vZ2xlLmNvbVwiKTtmdW5jdGlvbiBWZyhhLGIpe3ZhciBjPWE7bihhKSYmKGM9YS5pZFRva2VuLGI9YS5hY2Nlc3NUb2tlbik7cmV0dXJuKG5ldyBVZykuY3JlZGVudGlhbCh7aWRUb2tlbjpjLGFjY2Vzc1Rva2VuOmJ9KX1mdW5jdGlvbiBXZygpe05nLmNhbGwodGhpcyxcInR3aXR0ZXIuY29tXCIsa2cpfVxucihXZyxOZyk7TShXZyxcIlBST1ZJREVSX0lEXCIsXCJ0d2l0dGVyLmNvbVwiKTtNKFdnLFwiVFdJVFRFUl9TSUdOX0lOX01FVEhPRFwiLFwidHdpdHRlci5jb21cIik7ZnVuY3Rpb24gWGcoYSxiKXt2YXIgYz1hO24oYyl8fChjPXtvYXV0aFRva2VuOmEsb2F1dGhUb2tlblNlY3JldDpifSk7aWYoIWMub2F1dGhUb2tlbnx8IWMub2F1dGhUb2tlblNlY3JldCl0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsXCJjcmVkZW50aWFsIGZhaWxlZDogZXhwZWN0ZWQgMiBhcmd1bWVudHMgKHRoZSBPQXV0aCBhY2Nlc3MgdG9rZW4gYW5kIHNlY3JldCkuXCIpO3JldHVybiBuZXcgS2coXCJ0d2l0dGVyLmNvbVwiLGMsXCJ0d2l0dGVyLmNvbVwiKX1cbmZ1bmN0aW9uIFlnKGEsYixjKXt0aGlzLmE9YTt0aGlzLmY9YjtNKHRoaXMsXCJwcm92aWRlcklkXCIsXCJwYXNzd29yZFwiKTtNKHRoaXMsXCJzaWduSW5NZXRob2RcIixjPT09WmcuRU1BSUxfTElOS19TSUdOX0lOX01FVEhPRD9aZy5FTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EOlpnLkVNQUlMX1BBU1NXT1JEX1NJR05fSU5fTUVUSE9EKX1ZZy5wcm90b3R5cGUua2E9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2lnbkluTWV0aG9kPT1aZy5FTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EP08oYSwkZyx7ZW1haWw6dGhpcy5hLG9vYkNvZGU6dGhpcy5mfSk6TyhhLGFoLHtlbWFpbDp0aGlzLmEscGFzc3dvcmQ6dGhpcy5mfSl9O1xuWWcucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5zaWduSW5NZXRob2Q9PVpnLkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0Q/TyhhLGJoLHtpZFRva2VuOmIsZW1haWw6dGhpcy5hLG9vYkNvZGU6dGhpcy5mfSk6TyhhLGNoLHtpZFRva2VuOmIsZW1haWw6dGhpcy5hLHBhc3N3b3JkOnRoaXMuZn0pfTtZZy5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIpe3JldHVybiBDZyh0aGlzLmthKGEpLGIpfTtZZy5wcm90b3R5cGUudz1mdW5jdGlvbigpe3JldHVybntlbWFpbDp0aGlzLmEscGFzc3dvcmQ6dGhpcy5mLHNpZ25Jbk1ldGhvZDp0aGlzLnNpZ25Jbk1ldGhvZH19O2Z1bmN0aW9uIGRoKGEpe3JldHVybiBhJiZhLmVtYWlsJiZhLnBhc3N3b3JkP25ldyBZZyhhLmVtYWlsLGEucGFzc3dvcmQsYS5zaWduSW5NZXRob2QpOm51bGx9ZnVuY3Rpb24gWmcoKXtOKHRoaXMse3Byb3ZpZGVySWQ6XCJwYXNzd29yZFwiLGlzT0F1dGhQcm92aWRlcjohMX0pfVxuZnVuY3Rpb24gZWgoYSxiKXtiPWZoKGIpO2lmKCFiKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixcIkludmFsaWQgZW1haWwgbGluayFcIik7cmV0dXJuIG5ldyBZZyhhLGIuY29kZSxaZy5FTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EKX1mdW5jdGlvbiBmaChhKXthPXhnKGEpO3JldHVybihhPVJmKGEpKSYmYS5vcGVyYXRpb249PT1BZj9hOm51bGx9TihaZyx7UFJPVklERVJfSUQ6XCJwYXNzd29yZFwifSk7TihaZyx7RU1BSUxfTElOS19TSUdOX0lOX01FVEhPRDpcImVtYWlsTGlua1wifSk7TihaZyx7RU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0Q6XCJwYXNzd29yZFwifSk7ZnVuY3Rpb24gZ2goYSl7aWYoIShhLmZiJiZhLmVifHxhLkxhJiZhLmVhKSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIpO3RoaXMuYT1hO00odGhpcyxcInByb3ZpZGVySWRcIixcInBob25lXCIpO3RoaXMuZmE9XCJwaG9uZVwiO00odGhpcyxcInNpZ25Jbk1ldGhvZFwiLFwicGhvbmVcIil9XG5naC5wcm90b3R5cGUua2E9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2IoaGgodGhpcykpfTtnaC5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIpe3ZhciBjPWhoKHRoaXMpO2MuaWRUb2tlbj1iO3JldHVybiBPKGEsaWgsYyl9O2doLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9aGgodGhpcyk7Yy5vcGVyYXRpb249XCJSRUFVVEhcIjthPU8oYSxqaCxjKTtyZXR1cm4gQ2coYSxiKX07Z2gucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXt2YXIgYT17cHJvdmlkZXJJZDpcInBob25lXCJ9O3RoaXMuYS5mYiYmKGEudmVyaWZpY2F0aW9uSWQ9dGhpcy5hLmZiKTt0aGlzLmEuZWImJihhLnZlcmlmaWNhdGlvbkNvZGU9dGhpcy5hLmViKTt0aGlzLmEuTGEmJihhLnRlbXBvcmFyeVByb29mPXRoaXMuYS5MYSk7dGhpcy5hLmVhJiYoYS5waG9uZU51bWJlcj10aGlzLmEuZWEpO3JldHVybiBhfTtcbmZ1bmN0aW9uIGtoKGEpe2lmKGEmJlwicGhvbmVcIj09PWEucHJvdmlkZXJJZCYmKGEudmVyaWZpY2F0aW9uSWQmJmEudmVyaWZpY2F0aW9uQ29kZXx8YS50ZW1wb3JhcnlQcm9vZiYmYS5waG9uZU51bWJlcikpe3ZhciBiPXt9O3coW1widmVyaWZpY2F0aW9uSWRcIixcInZlcmlmaWNhdGlvbkNvZGVcIixcInRlbXBvcmFyeVByb29mXCIsXCJwaG9uZU51bWJlclwiXSxmdW5jdGlvbihjKXthW2NdJiYoYltjXT1hW2NdKX0pO3JldHVybiBuZXcgZ2goYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gaGgoYSl7cmV0dXJuIGEuYS5MYSYmYS5hLmVhP3t0ZW1wb3JhcnlQcm9vZjphLmEuTGEscGhvbmVOdW1iZXI6YS5hLmVhfTp7c2Vzc2lvbkluZm86YS5hLmZiLGNvZGU6YS5hLmVifX1cbmZ1bmN0aW9uIGxoKGEpe3RyeXt0aGlzLmE9YXx8ZmlyZWJhc2UuYXV0aCgpfWNhdGNoKGIpe3Rocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixcIkVpdGhlciBhbiBpbnN0YW5jZSBvZiBmaXJlYmFzZS5hdXRoLkF1dGggbXVzdCBiZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIgY29uc3RydWN0b3IsIG9yIHRoZSBkZWZhdWx0IGZpcmViYXNlIEFwcCBpbnN0YW5jZSBtdXN0IGJlIGluaXRpYWxpemVkIHZpYSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKCkuXCIpO31OKHRoaXMse3Byb3ZpZGVySWQ6XCJwaG9uZVwiLGlzT0F1dGhQcm92aWRlcjohMX0pfVxubGgucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5hLmE7cmV0dXJuIEUoYi52ZXJpZnkoKSkudGhlbihmdW5jdGlvbihkKXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLFwiQW4gaW1wbGVtZW50YXRpb24gb2YgZmlyZWJhc2UuYXV0aC5BcHBsaWNhdGlvblZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkoKSBtdXN0IHJldHVybiBhIGZpcmViYXNlLlByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RyaW5nLlwiKTtzd2l0Y2goYi50eXBlKXtjYXNlIFwicmVjYXB0Y2hhXCI6dmFyIGU9bihhKT9hLnNlc3Npb246bnVsbCxmPW4oYSk/YS5waG9uZU51bWJlcjphLGc7ZSYmZS50eXBlPT16Zz9nPWUuSGEoKS50aGVuKGZ1bmN0aW9uKGgpe3JldHVybiBtaChjLHtpZFRva2VuOmgscGhvbmVFbnJvbGxtZW50SW5mbzp7cGhvbmVOdW1iZXI6ZixyZWNhcHRjaGFUb2tlbjpkfX0pfSk6ZSYmZS50eXBlPT1BZz9nPWUuSGEoKS50aGVuKGZ1bmN0aW9uKGgpe3JldHVybiBuaChjLFxue21mYVBlbmRpbmdDcmVkZW50aWFsOmgsbWZhRW5yb2xsbWVudElkOmEubXVsdGlGYWN0b3JIaW50JiZhLm11bHRpRmFjdG9ySGludC51aWR8fGEubXVsdGlGYWN0b3JVaWQscGhvbmVTaWduSW5JbmZvOntyZWNhcHRjaGFUb2tlbjpkfX0pfSk6Zz1vaChjLHtwaG9uZU51bWJlcjpmLHJlY2FwdGNoYVRva2VuOmR9KTtyZXR1cm4gZy50aGVuKGZ1bmN0aW9uKGgpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlc2V0JiZiLnJlc2V0KCk7cmV0dXJuIGh9LGZ1bmN0aW9uKGgpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlc2V0JiZiLnJlc2V0KCk7dGhyb3cgaDt9KTtkZWZhdWx0OnRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIiwnT25seSBmaXJlYmFzZS5hdXRoLkFwcGxpY2F0aW9uVmVyaWZpZXJzIHdpdGggdHlwZT1cInJlY2FwdGNoYVwiIGFyZSBjdXJyZW50bHkgc3VwcG9ydGVkLicpO319KX07XG5mdW5jdGlvbiBwaChhLGIpe2lmKCFhKXRocm93IG5ldyB0KFwibWlzc2luZy12ZXJpZmljYXRpb24taWRcIik7aWYoIWIpdGhyb3cgbmV3IHQoXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1jb2RlXCIpO3JldHVybiBuZXcgZ2goe2ZiOmEsZWI6Yn0pfU4obGgse1BST1ZJREVSX0lEOlwicGhvbmVcIn0pO04obGgse1BIT05FX1NJR05fSU5fTUVUSE9EOlwicGhvbmVcIn0pO1xuZnVuY3Rpb24gcWgoYSl7aWYoYS50ZW1wb3JhcnlQcm9vZiYmYS5waG9uZU51bWJlcilyZXR1cm4gbmV3IGdoKHtMYTphLnRlbXBvcmFyeVByb29mLGVhOmEucGhvbmVOdW1iZXJ9KTt2YXIgYj1hJiZhLnByb3ZpZGVySWQ7aWYoIWJ8fFwicGFzc3dvcmRcIj09PWIpcmV0dXJuIG51bGw7dmFyIGM9YSYmYS5vYXV0aEFjY2Vzc1Rva2VuLGQ9YSYmYS5vYXV0aFRva2VuU2VjcmV0LGU9YSYmYS5ub25jZSxmPWEmJmEub2F1dGhJZFRva2VuLGc9YSYmYS5wZW5kaW5nVG9rZW47dHJ5e3N3aXRjaChiKXtjYXNlIFwiZ29vZ2xlLmNvbVwiOnJldHVybiBWZyhmLGMpO2Nhc2UgXCJmYWNlYm9vay5jb21cIjpyZXR1cm4gUmcoYyk7Y2FzZSBcImdpdGh1Yi5jb21cIjpyZXR1cm4gVGcoYyk7Y2FzZSBcInR3aXR0ZXIuY29tXCI6cmV0dXJuIFhnKGMsZCk7ZGVmYXVsdDpyZXR1cm4gY3x8ZHx8Znx8Zz9nPzA9PWIuaW5kZXhPZihcInNhbWwuXCIpP25ldyBFZyhiLGcpOm5ldyBLZyhiLHtwZW5kaW5nVG9rZW46ZyxpZFRva2VuOmEub2F1dGhJZFRva2VuLFxuYWNjZXNzVG9rZW46YS5vYXV0aEFjY2Vzc1Rva2VufSxiKToobmV3IFBnKGIpKS5jcmVkZW50aWFsKHtpZFRva2VuOmYsYWNjZXNzVG9rZW46YyxyYXdOb25jZTplfSk6bnVsbH19Y2F0Y2goaCl7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIHJoKGEpe2lmKCFhLmlzT0F1dGhQcm92aWRlcil0aHJvdyBuZXcgdChcImludmFsaWQtb2F1dGgtcHJvdmlkZXJcIik7fTtmdW5jdGlvbiBzaChhLGIsYyxkLGUsZixnKXt0aGlzLmM9YTt0aGlzLmI9Ynx8bnVsbDt0aGlzLmc9Y3x8bnVsbDt0aGlzLmY9ZHx8bnVsbDt0aGlzLmk9Znx8bnVsbDt0aGlzLmg9Z3x8bnVsbDt0aGlzLmE9ZXx8bnVsbDtpZih0aGlzLmd8fHRoaXMuYSl7aWYodGhpcy5nJiZ0aGlzLmEpdGhyb3cgbmV3IHQoXCJpbnZhbGlkLWF1dGgtZXZlbnRcIik7aWYodGhpcy5nJiYhdGhpcy5mKXRocm93IG5ldyB0KFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpO31lbHNlIHRocm93IG5ldyB0KFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpO31zaC5wcm90b3R5cGUuZ2V0VWlkPWZ1bmN0aW9uKCl7dmFyIGE9W107YS5wdXNoKHRoaXMuYyk7dGhpcy5iJiZhLnB1c2godGhpcy5iKTt0aGlzLmYmJmEucHVzaCh0aGlzLmYpO3RoaXMuaCYmYS5wdXNoKHRoaXMuaCk7cmV0dXJuIGEuam9pbihcIi1cIil9O3NoLnByb3RvdHlwZS5UPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaH07XG5zaC5wcm90b3R5cGUudz1mdW5jdGlvbigpe3JldHVybnt0eXBlOnRoaXMuYyxldmVudElkOnRoaXMuYix1cmxSZXNwb25zZTp0aGlzLmcsc2Vzc2lvbklkOnRoaXMuZixwb3N0Qm9keTp0aGlzLmksdGVuYW50SWQ6dGhpcy5oLGVycm9yOnRoaXMuYSYmdGhpcy5hLncoKX19O2Z1bmN0aW9uIHRoKGEpe2E9YXx8e307cmV0dXJuIGEudHlwZT9uZXcgc2goYS50eXBlLGEuZXZlbnRJZCxhLnVybFJlc3BvbnNlLGEuc2Vzc2lvbklkLGEuZXJyb3ImJkFhKGEuZXJyb3IpLGEucG9zdEJvZHksYS50ZW5hbnRJZCk6bnVsbH07LypcblxuIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5mdW5jdGlvbiB1aCgpe3RoaXMuYj1udWxsO3RoaXMuYT1bXX12YXIgdmg9bnVsbDtmdW5jdGlvbiB3aChhKXt2YXIgYj12aDtiLmEucHVzaChhKTtiLmJ8fChiLmI9ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTA7ZDxiLmEubGVuZ3RoO2QrKyliLmFbZF0oYyl9LGE9TChcInVuaXZlcnNhbExpbmtzLnN1YnNjcmliZVwiLGwpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiZhKG51bGwsYi5iKSl9O2Z1bmN0aW9uIHhoKGEpe3ZhciBiPVwidW5hdXRob3JpemVkLWRvbWFpblwiLGM9dm9pZCAwLGQ9SihhKTthPWQuYTtkPWQuYztcImNocm9tZS1leHRlbnNpb25cIj09ZD9jPVFiKFwiVGhpcyBjaHJvbWUgZXh0ZW5zaW9uIElEIChjaHJvbWUtZXh0ZW5zaW9uOi8vJXMpIGlzIG5vdCBhdXRob3JpemVkIHRvIHJ1biB0aGlzIG9wZXJhdGlvbi4gQWRkIGl0IHRvIHRoZSBPQXV0aCByZWRpcmVjdCBkb21haW5zIGxpc3QgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUgLT4gQXV0aCBzZWN0aW9uIC0+IFNpZ24gaW4gbWV0aG9kIHRhYi5cIixhKTpcImh0dHBcIj09ZHx8XCJodHRwc1wiPT1kP2M9UWIoXCJUaGlzIGRvbWFpbiAoJXMpIGlzIG5vdCBhdXRob3JpemVkIHRvIHJ1biB0aGlzIG9wZXJhdGlvbi4gQWRkIGl0IHRvIHRoZSBPQXV0aCByZWRpcmVjdCBkb21haW5zIGxpc3QgaW4gdGhlIEZpcmViYXNlIGNvbnNvbGUgLT4gQXV0aCBzZWN0aW9uIC0+IFNpZ24gaW4gbWV0aG9kIHRhYi5cIixhKTpiPVwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiO1xudC5jYWxsKHRoaXMsYixjKX1yKHhoLHQpO2Z1bmN0aW9uIHloKGEsYixjKXt0LmNhbGwodGhpcyxhLGMpO2E9Ynx8e307YS5LYiYmTSh0aGlzLFwiZW1haWxcIixhLktiKTthLmVhJiZNKHRoaXMsXCJwaG9uZU51bWJlclwiLGEuZWEpO2EuY3JlZGVudGlhbCYmTSh0aGlzLFwiY3JlZGVudGlhbFwiLGEuY3JlZGVudGlhbCk7YS4kYiYmTSh0aGlzLFwidGVuYW50SWRcIixhLiRiKX1yKHloLHQpO3loLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7dmFyIGE9e2NvZGU6dGhpcy5jb2RlLG1lc3NhZ2U6dGhpcy5tZXNzYWdlfTt0aGlzLmVtYWlsJiYoYS5lbWFpbD10aGlzLmVtYWlsKTt0aGlzLnBob25lTnVtYmVyJiYoYS5waG9uZU51bWJlcj10aGlzLnBob25lTnVtYmVyKTt0aGlzLnRlbmFudElkJiYoYS50ZW5hbnRJZD10aGlzLnRlbmFudElkKTt2YXIgYj10aGlzLmNyZWRlbnRpYWwmJnRoaXMuY3JlZGVudGlhbC53KCk7YiYmeihhLGIpO3JldHVybiBhfTt5aC5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudygpfTtcbmZ1bmN0aW9uIHpoKGEpe2lmKGEuY29kZSl7dmFyIGI9YS5jb2RlfHxcIlwiOzA9PWIuaW5kZXhPZih4YSkmJihiPWIuc3Vic3RyaW5nKHhhLmxlbmd0aCkpO3ZhciBjPXtjcmVkZW50aWFsOnFoKGEpLCRiOmEudGVuYW50SWR9O2lmKGEuZW1haWwpYy5LYj1hLmVtYWlsO2Vsc2UgaWYoYS5waG9uZU51bWJlciljLmVhPWEucGhvbmVOdW1iZXI7ZWxzZSBpZighYy5jcmVkZW50aWFsKXJldHVybiBuZXcgdChiLGEubWVzc2FnZXx8dm9pZCAwKTtyZXR1cm4gbmV3IHloKGIsYyxhLm1lc3NhZ2UpfXJldHVybiBudWxsfTtmdW5jdGlvbiBBaCgpe31BaC5wcm90b3R5cGUuYz1udWxsO2Z1bmN0aW9uIEJoKGEpe3JldHVybiBhLmN8fChhLmM9YS5iKCkpfTt2YXIgQ2g7ZnVuY3Rpb24gRGgoKXt9cihEaCxBaCk7RGgucHJvdG90eXBlLmE9ZnVuY3Rpb24oKXt2YXIgYT1FaCh0aGlzKTtyZXR1cm4gYT9uZXcgQWN0aXZlWE9iamVjdChhKTpuZXcgWE1MSHR0cFJlcXVlc3R9O0RoLnByb3RvdHlwZS5iPWZ1bmN0aW9uKCl7dmFyIGE9e307RWgodGhpcykmJihhWzBdPSEwLGFbMV09ITApO3JldHVybiBhfTtcbmZ1bmN0aW9uIEVoKGEpe2lmKCFhLmYmJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBYTUxIdHRwUmVxdWVzdCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFjdGl2ZVhPYmplY3Qpe2Zvcih2YXIgYj1bXCJNU1hNTDIuWE1MSFRUUC42LjBcIixcIk1TWE1MMi5YTUxIVFRQLjMuMFwiLFwiTVNYTUwyLlhNTEhUVFBcIixcIk1pY3Jvc29mdC5YTUxIVFRQXCJdLGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTt0cnl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KGQpLGEuZj1kfWNhdGNoKGUpe319dGhyb3cgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIEFjdGl2ZVhPYmplY3QuIEFjdGl2ZVggbWlnaHQgYmUgZGlzYWJsZWQsIG9yIE1TWE1MIG1pZ2h0IG5vdCBiZSBpbnN0YWxsZWRcIik7fXJldHVybiBhLmZ9Q2g9bmV3IERoO2Z1bmN0aW9uIEZoKCl7fXIoRmgsQWgpO0ZoLnByb3RvdHlwZS5hPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFhNTEh0dHBSZXF1ZXN0O2lmKFwid2l0aENyZWRlbnRpYWxzXCJpbiBhKXJldHVybiBhO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBYRG9tYWluUmVxdWVzdClyZXR1cm4gbmV3IEdoO3Rocm93IEVycm9yKFwiVW5zdXBwb3J0ZWQgYnJvd3NlclwiKTt9O0ZoLnByb3RvdHlwZS5iPWZ1bmN0aW9uKCl7cmV0dXJue319O1xuZnVuY3Rpb24gR2goKXt0aGlzLmE9bmV3IFhEb21haW5SZXF1ZXN0O3RoaXMucmVhZHlTdGF0ZT0wO3RoaXMub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7dGhpcy5yZXNwb25zZVR5cGU9dGhpcy5yZXNwb25zZVRleHQ9dGhpcy5yZXNwb25zZT1cIlwiO3RoaXMuc3RhdHVzPS0xO3RoaXMuc3RhdHVzVGV4dD1cIlwiO3RoaXMuYS5vbmxvYWQ9cSh0aGlzLnFjLHRoaXMpO3RoaXMuYS5vbmVycm9yPXEodGhpcy5UYix0aGlzKTt0aGlzLmEub25wcm9ncmVzcz1xKHRoaXMucmMsdGhpcyk7dGhpcy5hLm9udGltZW91dD1xKHRoaXMudmMsdGhpcyl9az1HaC5wcm90b3R5cGU7ay5vcGVuPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsIT1jJiYhYyl0aHJvdyBFcnJvcihcIk9ubHkgYXN5bmMgcmVxdWVzdHMgYXJlIHN1cHBvcnRlZC5cIik7dGhpcy5hLm9wZW4oYSxiKX07XG5rLnNlbmQ9ZnVuY3Rpb24oYSl7aWYoYSlpZihcInN0cmluZ1wiPT10eXBlb2YgYSl0aGlzLmEuc2VuZChhKTtlbHNlIHRocm93IEVycm9yKFwiT25seSBzdHJpbmcgZGF0YSBpcyBzdXBwb3J0ZWRcIik7ZWxzZSB0aGlzLmEuc2VuZCgpfTtrLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5hLmFib3J0KCl9O2suc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbigpe307ay5nZXRSZXNwb25zZUhlYWRlcj1mdW5jdGlvbihhKXtyZXR1cm5cImNvbnRlbnQtdHlwZVwiPT1hLnRvTG93ZXJDYXNlKCk/dGhpcy5hLmNvbnRlbnRUeXBlOlwiXCJ9O2sucWM9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1cz0yMDA7dGhpcy5yZXNwb25zZT10aGlzLnJlc3BvbnNlVGV4dD10aGlzLmEucmVzcG9uc2VUZXh0O0hoKHRoaXMsNCl9O2suVGI9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1cz01MDA7dGhpcy5yZXNwb25zZT10aGlzLnJlc3BvbnNlVGV4dD1cIlwiO0hoKHRoaXMsNCl9O2sudmM9ZnVuY3Rpb24oKXt0aGlzLlRiKCl9O1xuay5yYz1mdW5jdGlvbigpe3RoaXMuc3RhdHVzPTIwMDtIaCh0aGlzLDEpfTtmdW5jdGlvbiBIaChhLGIpe2EucmVhZHlTdGF0ZT1iO2lmKGEub25yZWFkeXN0YXRlY2hhbmdlKWEub25yZWFkeXN0YXRlY2hhbmdlKCl9ay5nZXRBbGxSZXNwb25zZUhlYWRlcnM9ZnVuY3Rpb24oKXtyZXR1cm5cImNvbnRlbnQtdHlwZTogXCIrdGhpcy5hLmNvbnRlbnRUeXBlfTtmdW5jdGlvbiBJaChhLGIsYyl7dGhpcy5yZXNldChhLGIsYyx2b2lkIDAsdm9pZCAwKX1JaC5wcm90b3R5cGUuYT1udWxsO3ZhciBKaD0wO0loLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbihhLGIsYyxkLGUpe1wibnVtYmVyXCI9PXR5cGVvZiBlfHxKaCsrO2R8fHZhKCk7ZGVsZXRlIHRoaXMuYX07ZnVuY3Rpb24gS2goYSl7dGhpcy5mPWE7dGhpcy5iPXRoaXMuYz10aGlzLmE9bnVsbH1mdW5jdGlvbiBMaChhLGIpe3RoaXMubmFtZT1hO3RoaXMudmFsdWU9Yn1MaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lfTt2YXIgTWg9bmV3IExoKFwiU0VWRVJFXCIsMUUzKSxOaD1uZXcgTGgoXCJXQVJOSU5HXCIsOTAwKSxPaD1uZXcgTGgoXCJDT05GSUdcIiw3MDApLFBoPW5ldyBMaChcIkZJTkVcIiw1MDApO2Z1bmN0aW9uIFFoKGEpe2lmKGEuYylyZXR1cm4gYS5jO2lmKGEuYSlyZXR1cm4gUWgoYS5hKTtHYShcIlJvb3QgbG9nZ2VyIGhhcyBubyBsZXZlbCBzZXQuXCIpO3JldHVybiBudWxsfUtoLnByb3RvdHlwZS5sb2c9ZnVuY3Rpb24oYSxiLGMpe2lmKGEudmFsdWU+PVFoKHRoaXMpLnZhbHVlKWZvcihvYShiKSYmKGI9YigpKSxhPW5ldyBJaChhLFN0cmluZyhiKSx0aGlzLmYpLGMmJihhLmE9YyksYz10aGlzO2M7KWM9Yy5hfTt2YXIgUmg9e30sU2g9bnVsbDtcbmZ1bmN0aW9uIFRoKGEpe1NofHwoU2g9bmV3IEtoKFwiXCIpLFJoW1wiXCJdPVNoLFNoLmM9T2gpO3ZhciBiO2lmKCEoYj1SaFthXSkpe2I9bmV3IEtoKGEpO3ZhciBjPWEubGFzdEluZGV4T2YoXCIuXCIpLGQ9YS5zdWJzdHIoYysxKTtjPVRoKGEuc3Vic3RyKDAsYykpO2MuYnx8KGMuYj17fSk7Yy5iW2RdPWI7Yi5hPWM7UmhbYV09Yn1yZXR1cm4gYn07ZnVuY3Rpb24gVWgoYSxiKXthJiZhLmxvZyhQaCxiLHZvaWQgMCl9O2Z1bmN0aW9uIFZoKGEpe3RoaXMuZj1hfXIoVmgsQWgpO1ZoLnByb3RvdHlwZS5hPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBXaCh0aGlzLmYpfTtWaC5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYX19KHt9KTtmdW5jdGlvbiBXaChhKXtILmNhbGwodGhpcyk7dGhpcy51PWE7dGhpcy5oPXZvaWQgMDt0aGlzLnJlYWR5U3RhdGU9WGg7dGhpcy5zdGF0dXM9MDt0aGlzLnJlc3BvbnNlVHlwZT10aGlzLnJlc3BvbnNlVGV4dD10aGlzLnJlc3BvbnNlPXRoaXMuc3RhdHVzVGV4dD1cIlwiO3RoaXMub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7dGhpcy5sPW5ldyBIZWFkZXJzO3RoaXMuYj1udWxsO3RoaXMucz1cIkdFVFwiO3RoaXMuZj1cIlwiO3RoaXMuYT0hMTt0aGlzLmk9VGgoXCJnb29nLm5ldC5GZXRjaFhtbEh0dHBcIik7dGhpcy5tPXRoaXMuYz10aGlzLmc9bnVsbH1yKFdoLEgpO3ZhciBYaD0wO2s9V2gucHJvdG90eXBlO1xuay5vcGVuPWZ1bmN0aW9uKGEsYil7aWYodGhpcy5yZWFkeVN0YXRlIT1YaCl0aHJvdyB0aGlzLmFib3J0KCksRXJyb3IoXCJFcnJvciByZW9wZW5pbmcgYSBjb25uZWN0aW9uXCIpO3RoaXMucz1hO3RoaXMuZj1iO3RoaXMucmVhZHlTdGF0ZT0xO1loKHRoaXMpfTtrLnNlbmQ9ZnVuY3Rpb24oYSl7aWYoMSE9dGhpcy5yZWFkeVN0YXRlKXRocm93IHRoaXMuYWJvcnQoKSxFcnJvcihcIm5lZWQgdG8gY2FsbCBvcGVuKCkgZmlyc3QuIFwiKTt0aGlzLmE9ITA7dmFyIGI9e2hlYWRlcnM6dGhpcy5sLG1ldGhvZDp0aGlzLnMsY3JlZGVudGlhbHM6dGhpcy5oLGNhY2hlOnZvaWQgMH07YSYmKGIuYm9keT1hKTt0aGlzLnUuZmV0Y2gobmV3IFJlcXVlc3QodGhpcy5mLGIpKS50aGVuKHRoaXMudWMuYmluZCh0aGlzKSx0aGlzLlZhLmJpbmQodGhpcykpfTtcbmsuYWJvcnQ9ZnVuY3Rpb24oKXt0aGlzLnJlc3BvbnNlPXRoaXMucmVzcG9uc2VUZXh0PVwiXCI7dGhpcy5sPW5ldyBIZWFkZXJzO3RoaXMuc3RhdHVzPTA7dGhpcy5jJiZ0aGlzLmMuY2FuY2VsKFwiUmVxdWVzdCB3YXMgYWJvcnRlZC5cIik7MTw9dGhpcy5yZWFkeVN0YXRlJiZ0aGlzLmEmJjQhPXRoaXMucmVhZHlTdGF0ZSYmKHRoaXMuYT0hMSxaaCh0aGlzKSk7dGhpcy5yZWFkeVN0YXRlPVhofTtcbmsudWM9ZnVuY3Rpb24oYSl7dGhpcy5hJiYodGhpcy5nPWEsdGhpcy5ifHwodGhpcy5zdGF0dXM9dGhpcy5nLnN0YXR1cyx0aGlzLnN0YXR1c1RleHQ9dGhpcy5nLnN0YXR1c1RleHQsdGhpcy5iPWEuaGVhZGVycyx0aGlzLnJlYWR5U3RhdGU9MixZaCh0aGlzKSksdGhpcy5hJiYodGhpcy5yZWFkeVN0YXRlPTMsWWgodGhpcyksdGhpcy5hJiYoXCJhcnJheWJ1ZmZlclwiPT09dGhpcy5yZXNwb25zZVR5cGU/YS5hcnJheUJ1ZmZlcigpLnRoZW4odGhpcy5zYy5iaW5kKHRoaXMpLHRoaXMuVmEuYmluZCh0aGlzKSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBsLlJlYWRhYmxlU3RyZWFtJiZcImJvZHlcImluIGE/KHRoaXMucmVzcG9uc2U9dGhpcy5yZXNwb25zZVRleHQ9XCJcIix0aGlzLmM9YS5ib2R5LmdldFJlYWRlcigpLHRoaXMubT1uZXcgVGV4dERlY29kZXIsJGgodGhpcykpOmEudGV4dCgpLnRoZW4odGhpcy50Yy5iaW5kKHRoaXMpLHRoaXMuVmEuYmluZCh0aGlzKSkpKSl9O1xuZnVuY3Rpb24gJGgoYSl7YS5jLnJlYWQoKS50aGVuKGEucGMuYmluZChhKSkuY2F0Y2goYS5WYS5iaW5kKGEpKX1rLnBjPWZ1bmN0aW9uKGEpe2lmKHRoaXMuYSl7dmFyIGI9dGhpcy5tLmRlY29kZShhLnZhbHVlP2EudmFsdWU6bmV3IFVpbnQ4QXJyYXkoMCkse3N0cmVhbTohYS5kb25lfSk7YiYmKHRoaXMucmVzcG9uc2U9dGhpcy5yZXNwb25zZVRleHQrPWIpO2EuZG9uZT9aaCh0aGlzKTpZaCh0aGlzKTszPT10aGlzLnJlYWR5U3RhdGUmJiRoKHRoaXMpfX07ay50Yz1mdW5jdGlvbihhKXt0aGlzLmEmJih0aGlzLnJlc3BvbnNlPXRoaXMucmVzcG9uc2VUZXh0PWEsWmgodGhpcykpfTtrLnNjPWZ1bmN0aW9uKGEpe3RoaXMuYSYmKHRoaXMucmVzcG9uc2U9YSxaaCh0aGlzKSl9O2suVmE9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5pO2ImJmIubG9nKE5oLFwiRmFpbGVkIHRvIGZldGNoIHVybCBcIit0aGlzLmYsYSBpbnN0YW5jZW9mIEVycm9yP2E6RXJyb3IoYSkpO3RoaXMuYSYmWmgodGhpcyl9O1xuZnVuY3Rpb24gWmgoYSl7YS5yZWFkeVN0YXRlPTQ7YS5nPW51bGw7YS5jPW51bGw7YS5tPW51bGw7WWgoYSl9ay5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKGEsYil7dGhpcy5sLmFwcGVuZChhLGIpfTtrLmdldFJlc3BvbnNlSGVhZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmI/dGhpcy5iLmdldChhLnRvTG93ZXJDYXNlKCkpfHxcIlwiOigoYT10aGlzLmkpJiZhLmxvZyhOaCxcIkF0dGVtcHRpbmcgdG8gZ2V0IHJlc3BvbnNlIGhlYWRlciBidXQgbm8gaGVhZGVycyBoYXZlIGJlZW4gcmVjZWl2ZWQgZm9yIHVybDogXCIrdGhpcy5mLHZvaWQgMCksXCJcIil9O1xuay5nZXRBbGxSZXNwb25zZUhlYWRlcnM9ZnVuY3Rpb24oKXtpZighdGhpcy5iKXt2YXIgYT10aGlzLmk7YSYmYS5sb2coTmgsXCJBdHRlbXB0aW5nIHRvIGdldCBhbGwgcmVzcG9uc2UgaGVhZGVycyBidXQgbm8gaGVhZGVycyBoYXZlIGJlZW4gcmVjZWl2ZWQgZm9yIHVybDogXCIrdGhpcy5mLHZvaWQgMCk7cmV0dXJuXCJcIn1hPVtdO2Zvcih2YXIgYj10aGlzLmIuZW50cmllcygpLGM9Yi5uZXh0KCk7IWMuZG9uZTspYz1jLnZhbHVlLGEucHVzaChjWzBdK1wiOiBcIitjWzFdKSxjPWIubmV4dCgpO3JldHVybiBhLmpvaW4oXCJcXHJcXG5cIil9O2Z1bmN0aW9uIFloKGEpe2Eub25yZWFkeXN0YXRlY2hhbmdlJiZhLm9ucmVhZHlzdGF0ZWNoYW5nZS5jYWxsKGEpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaC5wcm90b3R5cGUsXCJ3aXRoQ3JlZGVudGlhbHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJpbmNsdWRlXCI9PT10aGlzLmh9LHNldDpmdW5jdGlvbihhKXt0aGlzLmg9YT9cImluY2x1ZGVcIjpcInNhbWUtb3JpZ2luXCJ9fSk7ZnVuY3Rpb24gYWkoYSl7SC5jYWxsKHRoaXMpO3RoaXMuaGVhZGVycz1uZXcgSmQ7dGhpcy5EPWF8fG51bGw7dGhpcy5jPSExO3RoaXMuQz10aGlzLmE9bnVsbDt0aGlzLmg9dGhpcy5QPXRoaXMubD1cIlwiO3RoaXMuZj10aGlzLk49dGhpcy5pPXRoaXMuSj0hMTt0aGlzLmc9MDt0aGlzLnM9bnVsbDt0aGlzLm09Ymk7dGhpcy51PXRoaXMuUz0hMX1yKGFpLEgpO3ZhciBiaT1cIlwiO2FpLnByb3RvdHlwZS5iPVRoKFwiZ29vZy5uZXQuWGhySW9cIik7dmFyIGNpPS9eaHR0cHM/JC9pLGRpPVtcIlBPU1RcIixcIlBVVFwiXTtcbmZ1bmN0aW9uIGVpKGEsYixjLGQsZSl7aWYoYS5hKXRocm93IEVycm9yKFwiW2dvb2cubmV0LlhocklvXSBPYmplY3QgaXMgYWN0aXZlIHdpdGggYW5vdGhlciByZXF1ZXN0PVwiK2EubCtcIjsgbmV3VXJpPVwiK2IpO2M9Yz9jLnRvVXBwZXJDYXNlKCk6XCJHRVRcIjthLmw9YjthLmg9XCJcIjthLlA9YzthLko9ITE7YS5jPSEwO2EuYT1hLkQ/YS5ELmEoKTpDaC5hKCk7YS5DPWEuRD9CaChhLkQpOkJoKENoKTthLmEub25yZWFkeXN0YXRlY2hhbmdlPXEoYS5XYixhKTt0cnl7VWgoYS5iLGZpKGEsXCJPcGVuaW5nIFhoclwiKSksYS5OPSEwLGEuYS5vcGVuKGMsU3RyaW5nKGIpLCEwKSxhLk49ITF9Y2F0Y2goZyl7VWgoYS5iLGZpKGEsXCJFcnJvciBvcGVuaW5nIFhocjogXCIrZy5tZXNzYWdlKSk7Z2koYSxnKTtyZXR1cm59Yj1kfHxcIlwiO3ZhciBmPW5ldyBKZChhLmhlYWRlcnMpO2UmJklkKGUsZnVuY3Rpb24oZyxoKXtmLnNldChoLGcpfSk7ZT1UYShmLlkoKSk7ZD1sLkZvcm1EYXRhJiZiIGluc3RhbmNlb2ZcbmwuRm9ybURhdGE7IVZhKGRpLGMpfHxlfHxkfHxmLnNldChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIik7Zi5mb3JFYWNoKGZ1bmN0aW9uKGcsaCl7dGhpcy5hLnNldFJlcXVlc3RIZWFkZXIoaCxnKX0sYSk7YS5tJiYoYS5hLnJlc3BvbnNlVHlwZT1hLm0pO1wid2l0aENyZWRlbnRpYWxzXCJpbiBhLmEmJmEuYS53aXRoQ3JlZGVudGlhbHMhPT1hLlMmJihhLmEud2l0aENyZWRlbnRpYWxzPWEuUyk7dHJ5e2hpKGEpLDA8YS5nJiYoYS51PWlpKGEuYSksVWgoYS5iLGZpKGEsXCJXaWxsIGFib3J0IGFmdGVyIFwiK2EuZytcIm1zIGlmIGluY29tcGxldGUsIHhocjIgXCIrYS51KSksYS51PyhhLmEudGltZW91dD1hLmcsYS5hLm9udGltZW91dD1xKGEuTWEsYSkpOmEucz1FZChhLk1hLGEuZyxhKSksVWgoYS5iLGZpKGEsXCJTZW5kaW5nIHJlcXVlc3RcIikpLGEuaT0hMCxhLmEuc2VuZChiKSxhLmk9ITF9Y2F0Y2goZyl7VWgoYS5iLFxuZmkoYSxcIlNlbmQgZXJyb3I6IFwiK2cubWVzc2FnZSkpLGdpKGEsZyl9fWZ1bmN0aW9uIGlpKGEpe3JldHVybiBXYiYmZmMoOSkmJlwibnVtYmVyXCI9PT10eXBlb2YgYS50aW1lb3V0JiZ2b2lkIDAhPT1hLm9udGltZW91dH1mdW5jdGlvbiBVYShhKXtyZXR1cm5cImNvbnRlbnQtdHlwZVwiPT1hLnRvTG93ZXJDYXNlKCl9az1haS5wcm90b3R5cGU7ay5NYT1mdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBoYSYmdGhpcy5hJiYodGhpcy5oPVwiVGltZWQgb3V0IGFmdGVyIFwiK3RoaXMuZytcIm1zLCBhYm9ydGluZ1wiLFVoKHRoaXMuYixmaSh0aGlzLHRoaXMuaCkpLHRoaXMuZGlzcGF0Y2hFdmVudChcInRpbWVvdXRcIiksdGhpcy5hYm9ydCg4KSl9O2Z1bmN0aW9uIGdpKGEsYil7YS5jPSExO2EuYSYmKGEuZj0hMCxhLmEuYWJvcnQoKSxhLmY9ITEpO2EuaD1iO2ppKGEpO2tpKGEpfVxuZnVuY3Rpb24gamkoYSl7YS5KfHwoYS5KPSEwLGEuZGlzcGF0Y2hFdmVudChcImNvbXBsZXRlXCIpLGEuZGlzcGF0Y2hFdmVudChcImVycm9yXCIpKX1rLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5hJiZ0aGlzLmMmJihVaCh0aGlzLmIsZmkodGhpcyxcIkFib3J0aW5nXCIpKSx0aGlzLmM9ITEsdGhpcy5mPSEwLHRoaXMuYS5hYm9ydCgpLHRoaXMuZj0hMSx0aGlzLmRpc3BhdGNoRXZlbnQoXCJjb21wbGV0ZVwiKSx0aGlzLmRpc3BhdGNoRXZlbnQoXCJhYm9ydFwiKSxraSh0aGlzKSl9O2suRGE9ZnVuY3Rpb24oKXt0aGlzLmEmJih0aGlzLmMmJih0aGlzLmM9ITEsdGhpcy5mPSEwLHRoaXMuYS5hYm9ydCgpLHRoaXMuZj0hMSksa2kodGhpcywhMCkpO2FpLmJiLkRhLmNhbGwodGhpcyl9O2suV2I9ZnVuY3Rpb24oKXt0aGlzLnlhfHwodGhpcy5OfHx0aGlzLml8fHRoaXMuZj9saSh0aGlzKTp0aGlzLkpjKCkpfTtrLkpjPWZ1bmN0aW9uKCl7bGkodGhpcyl9O1xuZnVuY3Rpb24gbGkoYSl7aWYoYS5jJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaGEpaWYoYS5DWzFdJiY0PT1taShhKSYmMj09bmkoYSkpVWgoYS5iLGZpKGEsXCJMb2NhbCByZXF1ZXN0IGVycm9yIGRldGVjdGVkIGFuZCBpZ25vcmVkXCIpKTtlbHNlIGlmKGEuaSYmND09bWkoYSkpRWQoYS5XYiwwLGEpO2Vsc2UgaWYoYS5kaXNwYXRjaEV2ZW50KFwicmVhZHlzdGF0ZWNoYW5nZVwiKSw0PT1taShhKSl7VWgoYS5iLGZpKGEsXCJSZXF1ZXN0IGNvbXBsZXRlXCIpKTthLmM9ITE7dHJ5e3ZhciBiPW5pKGEpO2E6c3dpdGNoKGIpe2Nhc2UgMjAwOmNhc2UgMjAxOmNhc2UgMjAyOmNhc2UgMjA0OmNhc2UgMjA2OmNhc2UgMzA0OmNhc2UgMTIyMzp2YXIgYz0hMDticmVhayBhO2RlZmF1bHQ6Yz0hMX12YXIgZDtpZighKGQ9Yykpe3ZhciBlO2lmKGU9MD09PWIpe3ZhciBmPVN0cmluZyhhLmwpLm1hdGNoKE1kKVsxXXx8bnVsbDtpZighZiYmbC5zZWxmJiZsLnNlbGYubG9jYXRpb24pe3ZhciBnPWwuc2VsZi5sb2NhdGlvbi5wcm90b2NvbDtcbmY9Zy5zdWJzdHIoMCxnLmxlbmd0aC0xKX1lPSFjaS50ZXN0KGY/Zi50b0xvd2VyQ2FzZSgpOlwiXCIpfWQ9ZX1pZihkKWEuZGlzcGF0Y2hFdmVudChcImNvbXBsZXRlXCIpLGEuZGlzcGF0Y2hFdmVudChcInN1Y2Nlc3NcIik7ZWxzZXt0cnl7dmFyIGg9MjxtaShhKT9hLmEuc3RhdHVzVGV4dDpcIlwifWNhdGNoKG0pe1VoKGEuYixcIkNhbiBub3QgZ2V0IHN0YXR1czogXCIrbS5tZXNzYWdlKSxoPVwiXCJ9YS5oPWgrXCIgW1wiK25pKGEpK1wiXVwiO2ppKGEpfX1maW5hbGx5e2tpKGEpfX19ZnVuY3Rpb24ga2koYSxiKXtpZihhLmEpe2hpKGEpO3ZhciBjPWEuYSxkPWEuQ1swXT9sYTpudWxsO2EuYT1udWxsO2EuQz1udWxsO2J8fGEuZGlzcGF0Y2hFdmVudChcInJlYWR5XCIpO3RyeXtjLm9ucmVhZHlzdGF0ZWNoYW5nZT1kfWNhdGNoKGUpeyhhPWEuYikmJmEubG9nKE1oLFwiUHJvYmxlbSBlbmNvdW50ZXJlZCByZXNldHRpbmcgb25yZWFkeXN0YXRlY2hhbmdlOiBcIitlLm1lc3NhZ2Usdm9pZCAwKX19fVxuZnVuY3Rpb24gaGkoYSl7YS5hJiZhLnUmJihhLmEub250aW1lb3V0PW51bGwpO2EucyYmKGwuY2xlYXJUaW1lb3V0KGEucyksYS5zPW51bGwpfWZ1bmN0aW9uIG1pKGEpe3JldHVybiBhLmE/YS5hLnJlYWR5U3RhdGU6MH1mdW5jdGlvbiBuaShhKXt0cnl7cmV0dXJuIDI8bWkoYSk/YS5hLnN0YXR1czotMX1jYXRjaChiKXtyZXR1cm4tMX19ZnVuY3Rpb24gb2koYSl7dHJ5e3JldHVybiBhLmE/YS5hLnJlc3BvbnNlVGV4dDpcIlwifWNhdGNoKGIpe3JldHVybiBVaChhLmIsXCJDYW4gbm90IGdldCByZXNwb25zZVRleHQ6IFwiK2IubWVzc2FnZSksXCJcIn19XG5rLmdldFJlc3BvbnNlPWZ1bmN0aW9uKCl7dHJ5e2lmKCF0aGlzLmEpcmV0dXJuIG51bGw7aWYoXCJyZXNwb25zZVwiaW4gdGhpcy5hKXJldHVybiB0aGlzLmEucmVzcG9uc2U7c3dpdGNoKHRoaXMubSl7Y2FzZSBiaTpjYXNlIFwidGV4dFwiOnJldHVybiB0aGlzLmEucmVzcG9uc2VUZXh0O2Nhc2UgXCJhcnJheWJ1ZmZlclwiOmlmKFwibW96UmVzcG9uc2VBcnJheUJ1ZmZlclwiaW4gdGhpcy5hKXJldHVybiB0aGlzLmEubW96UmVzcG9uc2VBcnJheUJ1ZmZlcn12YXIgYT10aGlzLmI7YSYmYS5sb2coTWgsXCJSZXNwb25zZSB0eXBlIFwiK3RoaXMubStcIiBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlclwiLHZvaWQgMCk7cmV0dXJuIG51bGx9Y2F0Y2goYil7cmV0dXJuIFVoKHRoaXMuYixcIkNhbiBub3QgZ2V0IHJlc3BvbnNlOiBcIitiLm1lc3NhZ2UpLG51bGx9fTtmdW5jdGlvbiBmaShhLGIpe3JldHVybiBiK1wiIFtcIithLlArXCIgXCIrYS5sK1wiIFwiK25pKGEpK1wiXVwifTsvKlxuIFBvcnRpb25zIG9mIHRoaXMgY29kZSBhcmUgZnJvbSBNb2NoaUtpdCwgcmVjZWl2ZWQgYnlcbiBUaGUgQ2xvc3VyZSBBdXRob3JzIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gQWxsIG90aGVyIGNvZGUgaXMgQ29weXJpZ2h0XG4gMjAwNS0yMDA5IFRoZSBDbG9zdXJlIEF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4qL1xuZnVuY3Rpb24gcGkoYSl7dmFyIGI9cWk7dGhpcy5nPVtdO3RoaXMudT1iO3RoaXMucz1hfHxudWxsO3RoaXMuZj10aGlzLmE9ITE7dGhpcy5jPXZvaWQgMDt0aGlzLnY9dGhpcy5DPXRoaXMuaT0hMTt0aGlzLmg9MDt0aGlzLmI9bnVsbDt0aGlzLmw9MH1waS5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKGEpe2lmKHRoaXMuYSl0aGlzLmMgaW5zdGFuY2VvZiBwaSYmdGhpcy5jLmNhbmNlbCgpO2Vsc2V7aWYodGhpcy5iKXt2YXIgYj10aGlzLmI7ZGVsZXRlIHRoaXMuYjthP2IuY2FuY2VsKGEpOihiLmwtLSwwPj1iLmwmJmIuY2FuY2VsKCkpfXRoaXMudT90aGlzLnUuY2FsbCh0aGlzLnMsdGhpcyk6dGhpcy52PSEwO3RoaXMuYXx8KGE9bmV3IHJpKHRoaXMpLHNpKHRoaXMpLHRpKHRoaXMsITEsYSkpfX07cGkucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiKXt0aGlzLmk9ITE7dGkodGhpcyxhLGIpfTtmdW5jdGlvbiB0aShhLGIsYyl7YS5hPSEwO2EuYz1jO2EuZj0hYjt1aShhKX1cbmZ1bmN0aW9uIHNpKGEpe2lmKGEuYSl7aWYoIWEudil0aHJvdyBuZXcgdmkoYSk7YS52PSExfX1mdW5jdGlvbiB3aShhLGIpe3hpKGEsbnVsbCxiLHZvaWQgMCl9ZnVuY3Rpb24geGkoYSxiLGMsZCl7YS5nLnB1c2goW2IsYyxkXSk7YS5hJiZ1aShhKX1waS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPW5ldyBEKGZ1bmN0aW9uKGcsaCl7ZD1nO2U9aH0pO3hpKHRoaXMsZCxmdW5jdGlvbihnKXtnIGluc3RhbmNlb2Ygcmk/Zi5jYW5jZWwoKTplKGcpfSk7cmV0dXJuIGYudGhlbihhLGIsYyl9O3BpLnByb3RvdHlwZS4kZ29vZ19UaGVuYWJsZT0hMDtmdW5jdGlvbiB5aShhKXtyZXR1cm4gU2EoYS5nLGZ1bmN0aW9uKGIpe3JldHVybiBvYShiWzFdKX0pfVxuZnVuY3Rpb24gdWkoYSl7aWYoYS5oJiZhLmEmJnlpKGEpKXt2YXIgYj1hLmgsYz16aVtiXTtjJiYobC5jbGVhclRpbWVvdXQoYy5hKSxkZWxldGUgemlbYl0pO2EuaD0wfWEuYiYmKGEuYi5sLS0sZGVsZXRlIGEuYik7Yj1hLmM7Zm9yKHZhciBkPWM9ITE7YS5nLmxlbmd0aCYmIWEuaTspe3ZhciBlPWEuZy5zaGlmdCgpLGY9ZVswXSxnPWVbMV07ZT1lWzJdO2lmKGY9YS5mP2c6Zil0cnl7dmFyIGg9Zi5jYWxsKGV8fGEucyxiKTt2b2lkIDAhPT1oJiYoYS5mPWEuZiYmKGg9PWJ8fGggaW5zdGFuY2VvZiBFcnJvciksYS5jPWI9aCk7aWYoRWEoYil8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBsLlByb21pc2UmJmIgaW5zdGFuY2VvZiBsLlByb21pc2UpZD0hMCxhLmk9ITB9Y2F0Y2gobSl7Yj1tLGEuZj0hMCx5aShhKXx8KGM9ITApfX1hLmM9YjtkJiYoaD1xKGEubSxhLCEwKSxkPXEoYS5tLGEsITEpLGIgaW5zdGFuY2VvZiBwaT8oeGkoYixoLGQpLGIuQz0hMCk6Yi50aGVuKGgsZCkpO2MmJihiPVxubmV3IEFpKGIpLHppW2IuYV09YixhLmg9Yi5hKX1mdW5jdGlvbiB2aSgpe3UuY2FsbCh0aGlzKX1yKHZpLHUpO3ZpLnByb3RvdHlwZS5tZXNzYWdlPVwiRGVmZXJyZWQgaGFzIGFscmVhZHkgZmlyZWRcIjt2aS5wcm90b3R5cGUubmFtZT1cIkFscmVhZHlDYWxsZWRFcnJvclwiO2Z1bmN0aW9uIHJpKCl7dS5jYWxsKHRoaXMpfXIocmksdSk7cmkucHJvdG90eXBlLm1lc3NhZ2U9XCJEZWZlcnJlZCB3YXMgY2FuY2VsZWRcIjtyaS5wcm90b3R5cGUubmFtZT1cIkNhbmNlbGVkRXJyb3JcIjtmdW5jdGlvbiBBaShhKXt0aGlzLmE9bC5zZXRUaW1lb3V0KHEodGhpcy5jLHRoaXMpLDApO3RoaXMuYj1hfUFpLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7ZGVsZXRlIHppW3RoaXMuYV07dGhyb3cgdGhpcy5iO307dmFyIHppPXt9O2Z1bmN0aW9uIEJpKGEpe3ZhciBiPXt9LGM9Yi5kb2N1bWVudHx8ZG9jdW1lbnQsZD15YihhKS50b1N0cmluZygpLGU9b2MoZG9jdW1lbnQsXCJTQ1JJUFRcIiksZj17WGI6ZSxNYTp2b2lkIDB9LGc9bmV3IHBpKGYpLGg9bnVsbCxtPW51bGwhPWIudGltZW91dD9iLnRpbWVvdXQ6NUUzOzA8bSYmKGg9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtDaShlLCEwKTt2YXIgcD1uZXcgRGkoRWksXCJUaW1lb3V0IHJlYWNoZWQgZm9yIGxvYWRpbmcgc2NyaXB0IFwiK2QpO3NpKGcpO3RpKGcsITEscCl9LG0pLGYuTWE9aCk7ZS5vbmxvYWQ9ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtlLnJlYWR5U3RhdGUmJlwibG9hZGVkXCIhPWUucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT1lLnJlYWR5U3RhdGV8fChDaShlLGIueGR8fCExLGgpLHNpKGcpLHRpKGcsITAsbnVsbCkpfTtlLm9uZXJyb3I9ZnVuY3Rpb24oKXtDaShlLCEwLGgpO3ZhciBwPW5ldyBEaShGaSxcIkVycm9yIHdoaWxlIGxvYWRpbmcgc2NyaXB0IFwiK1xuZCk7c2koZyk7dGkoZywhMSxwKX07Zj1iLmF0dHJpYnV0ZXN8fHt9O3ooZix7dHlwZTpcInRleHQvamF2YXNjcmlwdFwiLGNoYXJzZXQ6XCJVVEYtOFwifSk7bGMoZSxmKTtPYihlLGEpO0dpKGMpLmFwcGVuZENoaWxkKGUpO3JldHVybiBnfWZ1bmN0aW9uIEdpKGEpe3ZhciBiO3JldHVybihiPShhfHxkb2N1bWVudCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJIRUFEXCIpKSYmMCE9Yi5sZW5ndGg/YlswXTphLmRvY3VtZW50RWxlbWVudH1mdW5jdGlvbiBxaSgpe2lmKHRoaXMmJnRoaXMuWGIpe3ZhciBhPXRoaXMuWGI7YSYmXCJTQ1JJUFRcIj09YS50YWdOYW1lJiZDaShhLCEwLHRoaXMuTWEpfX1cbmZ1bmN0aW9uIENpKGEsYixjKXtudWxsIT1jJiZsLmNsZWFyVGltZW91dChjKTthLm9ubG9hZD1sYTthLm9uZXJyb3I9bGE7YS5vbnJlYWR5c3RhdGVjaGFuZ2U9bGE7YiYmd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthJiZhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX0sMCl9dmFyIEZpPTAsRWk9MTtmdW5jdGlvbiBEaShhLGIpe3ZhciBjPVwiSnNsb2FkZXIgZXJyb3IgKGNvZGUgI1wiK2ErXCIpXCI7YiYmKGMrPVwiOiBcIitiKTt1LmNhbGwodGhpcyxjKTt0aGlzLmNvZGU9YX1yKERpLHUpO2Z1bmN0aW9uIEhpKGEpe3RoaXMuZj1hfXIoSGksQWgpO0hpLnByb3RvdHlwZS5hPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0aGlzLmZ9O0hpLnByb3RvdHlwZS5iPWZ1bmN0aW9uKCl7cmV0dXJue319O1xuZnVuY3Rpb24gSWkoYSxiLGMpe3RoaXMuYz1hO2E9Ynx8e307dGhpcy5sPWEuc2VjdXJlVG9rZW5FbmRwb2ludHx8XCJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZWFwaXMuY29tL3YxL3Rva2VuXCI7dGhpcy5tPWEuc2VjdXJlVG9rZW5UaW1lb3V0fHxKaTt0aGlzLmc9bmIoYS5zZWN1cmVUb2tlbkhlYWRlcnN8fEtpKTt0aGlzLmg9YS5maXJlYmFzZUVuZHBvaW50fHxcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2lkZW50aXR5dG9vbGtpdC92My9yZWx5aW5ncGFydHkvXCI7dGhpcy5pPWEuaWRlbnRpdHlQbGF0Zm9ybUVuZHBvaW50fHxcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YyL1wiO3RoaXMudj1hLmZpcmViYXNlVGltZW91dHx8TGk7dGhpcy5hPW5iKGEuZmlyZWJhc2VIZWFkZXJzfHxNaSk7YyYmKHRoaXMuYVtcIlgtQ2xpZW50LVZlcnNpb25cIl09Yyx0aGlzLmdbXCJYLUNsaWVudC1WZXJzaW9uXCJdPWMpO2M9XCJOb2RlXCI9PUtlKCk7Yz1sLlhNTEh0dHBSZXF1ZXN0fHxcbmMmJmZpcmViYXNlLklOVEVSTkFMLm5vZGUmJmZpcmViYXNlLklOVEVSTkFMLm5vZGUuWE1MSHR0cFJlcXVlc3Q7aWYoIWMmJiFKZSgpKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBYTUxIdHRwUmVxdWVzdCBjb21wYXRpYmlsaXR5IGxpYnJhcnkgd2FzIG5vdCBmb3VuZC5cIik7dGhpcy5mPXZvaWQgMDtKZSgpP3RoaXMuZj1uZXcgVmgoc2VsZik6TGUoKT90aGlzLmY9bmV3IEhpKGMpOnRoaXMuZj1uZXcgRmg7dGhpcy5iPW51bGx9dmFyIE5pLERnPVwiaWRUb2tlblwiLEppPW5ldyBaZSgzRTQsNkU0KSxLaT17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifSxMaT1uZXcgWmUoM0U0LDZFNCksTWk9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9O2Z1bmN0aW9uIE9pKGEsYil7Yj9hLmFbXCJYLUZpcmViYXNlLUxvY2FsZVwiXT1iOmRlbGV0ZSBhLmFbXCJYLUZpcmViYXNlLUxvY2FsZVwiXX1cbmZ1bmN0aW9uIFBpKGEsYil7YiYmKGEubD1RaShcImh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlYXBpcy5jb20vdjEvdG9rZW5cIixiKSxhLmg9UWkoXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9pZGVudGl0eXRvb2xraXQvdjMvcmVseWluZ3BhcnR5L1wiLGIpLGEuaT1RaShcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YyL1wiLGIpKX1mdW5jdGlvbiBRaShhLGIpe2E9SihhKTtiPUooYi51cmwpO2EuZj1hLmErYS5mO1BkKGEsYi5jKTthLmE9Yi5hO1FkKGEsYi5nKTtyZXR1cm4gYS50b1N0cmluZygpfWZ1bmN0aW9uIFJpKGEsYil7Yj8oYS5hW1wiWC1DbGllbnQtVmVyc2lvblwiXT1iLGEuZ1tcIlgtQ2xpZW50LVZlcnNpb25cIl09Yik6KGRlbGV0ZSBhLmFbXCJYLUNsaWVudC1WZXJzaW9uXCJdLGRlbGV0ZSBhLmdbXCJYLUNsaWVudC1WZXJzaW9uXCJdKX1JaS5wcm90b3R5cGUuVD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O1xuZnVuY3Rpb24gU2koYSxiLGMsZCxlLGYsZyl7dWUoKXx8SmUoKT9hPXEoYS51LGEpOihOaXx8KE5pPW5ldyBEKGZ1bmN0aW9uKGgsbSl7VGkoaCxtKX0pKSxhPXEoYS5zLGEpKTthKGIsYyxkLGUsZixnKX1cbklpLnByb3RvdHlwZS51PWZ1bmN0aW9uKGEsYixjLGQsZSxmKXtpZihKZSgpJiYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBsLmZldGNofHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGwuSGVhZGVyc3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBsLlJlcXVlc3QpKXRocm93IG5ldyB0KFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiLFwiZmV0Y2gsIEhlYWRlcnMgYW5kIFJlcXVlc3QgbmF0aXZlIEFQSXMgb3IgZXF1aXZhbGVudCBQb2x5ZmlsbHMgbXVzdCBiZSBhdmFpbGFibGUgdG8gc3VwcG9ydCBIVFRQIHJlcXVlc3RzIGZyb20gYSBXb3JrZXIgZW52aXJvbm1lbnQuXCIpO3ZhciBnPW5ldyBhaSh0aGlzLmYpO2lmKGYpe2cuZz1NYXRoLm1heCgwLGYpO3ZhciBoPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtnLmRpc3BhdGNoRXZlbnQoXCJ0aW1lb3V0XCIpfSxmKX1xZChnLFwiY29tcGxldGVcIixmdW5jdGlvbigpe2gmJmNsZWFyVGltZW91dChoKTt2YXIgbT1udWxsO3RyeXttPVxuSlNPTi5wYXJzZShvaSh0aGlzKSl8fG51bGx9Y2F0Y2gocCl7bT1udWxsfWImJmIobSl9KTt3ZChnLFwicmVhZHlcIixmdW5jdGlvbigpe2gmJmNsZWFyVGltZW91dChoKTtYYyh0aGlzKX0pO3dkKGcsXCJ0aW1lb3V0XCIsZnVuY3Rpb24oKXtoJiZjbGVhclRpbWVvdXQoaCk7WGModGhpcyk7YiYmYihudWxsKX0pO2VpKGcsYSxjLGQsZSl9O3ZhciBVaT1uZXcgcWIocmIsXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9jbGllbnQuanM/b25sb2FkPSV7b25sb2FkfVwiKSxWaT1cIl9fZmNiXCIrTWF0aC5mbG9vcigxRTYqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKTtcbmZ1bmN0aW9uIFRpKGEsYil7aWYoKCh3aW5kb3cuZ2FwaXx8e30pLmNsaWVudHx8e30pLnJlcXVlc3QpYSgpO2Vsc2V7bFtWaV09ZnVuY3Rpb24oKXsoKHdpbmRvdy5nYXBpfHx7fSkuY2xpZW50fHx7fSkucmVxdWVzdD9hKCk6YihFcnJvcihcIkNPUlNfVU5TVVBQT1JURURcIikpfTt2YXIgYz16YihVaSx7b25sb2FkOlZpfSk7d2koQmkoYyksZnVuY3Rpb24oKXtiKEVycm9yKFwiQ09SU19VTlNVUFBPUlRFRFwiKSl9KX19XG5JaS5wcm90b3R5cGUucz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPXRoaXM7TmkudGhlbihmdW5jdGlvbigpe3dpbmRvdy5nYXBpLmNsaWVudC5zZXRBcGlLZXkoZi5jKTt2YXIgZz13aW5kb3cuZ2FwaS5hdXRoLmdldFRva2VuKCk7d2luZG93LmdhcGkuYXV0aC5zZXRUb2tlbihudWxsKTt3aW5kb3cuZ2FwaS5jbGllbnQucmVxdWVzdCh7cGF0aDphLG1ldGhvZDpjLGJvZHk6ZCxoZWFkZXJzOmUsYXV0aFR5cGU6XCJub25lXCIsY2FsbGJhY2s6ZnVuY3Rpb24oaCl7d2luZG93LmdhcGkuYXV0aC5zZXRUb2tlbihnKTtiJiZiKGgpfX0pfSkubyhmdW5jdGlvbihnKXtiJiZiKHtlcnJvcjp7bWVzc2FnZTpnJiZnLm1lc3NhZ2V8fFwiQ09SU19VTlNVUFBPUlRFRFwifX0pfSl9O1xuZnVuY3Rpb24gV2koYSxiKXtyZXR1cm4gbmV3IEQoZnVuY3Rpb24oYyxkKXtcInJlZnJlc2hfdG9rZW5cIj09Yi5ncmFudF90eXBlJiZiLnJlZnJlc2hfdG9rZW58fFwiYXV0aG9yaXphdGlvbl9jb2RlXCI9PWIuZ3JhbnRfdHlwZSYmYi5jb2RlP1NpKGEsYS5sK1wiP2tleT1cIitlbmNvZGVVUklDb21wb25lbnQoYS5jKSxmdW5jdGlvbihlKXtlP2UuZXJyb3I/ZChYaShlKSk6ZS5hY2Nlc3NfdG9rZW4mJmUucmVmcmVzaF90b2tlbj9jKGUpOmQobmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKSk6ZChuZXcgdChcIm5ldHdvcmstcmVxdWVzdC1mYWlsZWRcIikpfSxcIlBPU1RcIixmZShiKS50b1N0cmluZygpLGEuZyxhLm0uZ2V0KCkpOmQobmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKSl9KX1cbmZ1bmN0aW9uIFlpKGEsYixjLGQsZSxmLGcpe3ZhciBoPUooYitjKTtJKGgsXCJrZXlcIixhLmMpO2cmJkkoaCxcImNiXCIsRGF0ZS5ub3coKS50b1N0cmluZygpKTt2YXIgbT1cIkdFVFwiPT1kO2lmKG0pZm9yKHZhciBwIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShwKSYmSShoLHAsZVtwXSk7cmV0dXJuIG5ldyBEKGZ1bmN0aW9uKHYsQil7U2koYSxoLnRvU3RyaW5nKCksZnVuY3Rpb24oQSl7QT9BLmVycm9yP0IoWGkoQSxmfHx7fSkpOnYoQSk6QihuZXcgdChcIm5ldHdvcmstcmVxdWVzdC1mYWlsZWRcIikpfSxkLG0/dm9pZCAwOmtlKFZlKGUpKSxhLmEsYS52LmdldCgpKX0pfWZ1bmN0aW9uIFppKGEpe2E9YS5lbWFpbDtpZihcInN0cmluZ1wiIT09dHlwZW9mIGF8fCFEZS50ZXN0KGEpKXRocm93IG5ldyB0KFwiaW52YWxpZC1lbWFpbFwiKTt9ZnVuY3Rpb24gJGkoYSl7XCJlbWFpbFwiaW4gYSYmWmkoYSl9XG5mdW5jdGlvbiBhaihhLGIpe3JldHVybiBPKGEsYmose2lkZW50aWZpZXI6Yixjb250aW51ZVVyaTpTZSgpP3JlKCk6XCJodHRwOi8vbG9jYWxob3N0XCJ9KS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBjLnNpZ25pbk1ldGhvZHN8fFtdfSl9ZnVuY3Rpb24gY2ooYSl7cmV0dXJuIE8oYSxkaix7fSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYi5hdXRob3JpemVkRG9tYWluc3x8W119KX1mdW5jdGlvbiBQKGEpe2lmKCFhW0RnXSl7aWYoYS5tZmFQZW5kaW5nQ3JlZGVudGlhbCl0aHJvdyBuZXcgdChcIm11bHRpLWZhY3Rvci1hdXRoLXJlcXVpcmVkXCIsbnVsbCxuYihhKSk7dGhyb3cgbmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKTt9fVxuZnVuY3Rpb24gZWooYSl7aWYoYS5waG9uZU51bWJlcnx8YS50ZW1wb3JhcnlQcm9vZil7aWYoIWEucGhvbmVOdW1iZXJ8fCFhLnRlbXBvcmFyeVByb29mKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7fWVsc2V7aWYoIWEuc2Vzc2lvbkluZm8pdGhyb3cgbmV3IHQoXCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1pZFwiKTtpZighYS5jb2RlKXRocm93IG5ldyB0KFwibWlzc2luZy12ZXJpZmljYXRpb24tY29kZVwiKTt9fUlpLnByb3RvdHlwZS5BYj1mdW5jdGlvbigpe3JldHVybiBPKHRoaXMsZmose30pfTtJaS5wcm90b3R5cGUuQ2I9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTyh0aGlzLGdqLHtpZFRva2VuOmEsZW1haWw6Yn0pfTtJaS5wcm90b3R5cGUuRGI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTyh0aGlzLGNoLHtpZFRva2VuOmEscGFzc3dvcmQ6Yn0pfTt2YXIgaGo9e2Rpc3BsYXlOYW1lOlwiRElTUExBWV9OQU1FXCIscGhvdG9Vcmw6XCJQSE9UT19VUkxcIn07az1JaS5wcm90b3R5cGU7XG5rLkViPWZ1bmN0aW9uKGEsYil7dmFyIGM9e2lkVG9rZW46YX0sZD1bXTtsYihoaixmdW5jdGlvbihlLGYpe3ZhciBnPWJbZl07bnVsbD09PWc/ZC5wdXNoKGUpOmYgaW4gYiYmKGNbZl09Zyl9KTtkLmxlbmd0aCYmKGMuZGVsZXRlQXR0cmlidXRlPWQpO3JldHVybiBPKHRoaXMsZ2osYyl9O2sud2I9ZnVuY3Rpb24oYSxiKXthPXtyZXF1ZXN0VHlwZTpcIlBBU1NXT1JEX1JFU0VUXCIsZW1haWw6YX07eihhLGIpO3JldHVybiBPKHRoaXMsaWosYSl9O2sueGI9ZnVuY3Rpb24oYSxiKXthPXtyZXF1ZXN0VHlwZTpcIkVNQUlMX1NJR05JTlwiLGVtYWlsOmF9O3ooYSxiKTtyZXR1cm4gTyh0aGlzLGpqLGEpfTtrLnZiPWZ1bmN0aW9uKGEsYil7YT17cmVxdWVzdFR5cGU6XCJWRVJJRllfRU1BSUxcIixpZFRva2VuOmF9O3ooYSxiKTtyZXR1cm4gTyh0aGlzLGtqLGEpfTtcbmsuRmI9ZnVuY3Rpb24oYSxiLGMpe2E9e3JlcXVlc3RUeXBlOlwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUxcIixpZFRva2VuOmEsbmV3RW1haWw6Yn07eihhLGMpO3JldHVybiBPKHRoaXMsbGosYSl9O2Z1bmN0aW9uIG9oKGEsYil7cmV0dXJuIE8oYSxtaixiKX1rLmdiPWZ1bmN0aW9uKGEpe3JldHVybiBPKHRoaXMsbmosYSl9O2Z1bmN0aW9uIG1oKGEsYil7cmV0dXJuIE8oYSxvaixiKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBjLnBob25lU2Vzc2lvbkluZm8uc2Vzc2lvbkluZm99KX1cbmZ1bmN0aW9uIHBqKGEpe2lmKCFhLnBob25lVmVyaWZpY2F0aW9uSW5mbyl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIpO2lmKCFhLnBob25lVmVyaWZpY2F0aW9uSW5mby5zZXNzaW9uSW5mbyl0aHJvdyBuZXcgdChcIm1pc3NpbmctdmVyaWZpY2F0aW9uLWlkXCIpO2lmKCFhLnBob25lVmVyaWZpY2F0aW9uSW5mby5jb2RlKXRocm93IG5ldyB0KFwibWlzc2luZy12ZXJpZmljYXRpb24tY29kZVwiKTt9ZnVuY3Rpb24gbmgoYSxiKXtyZXR1cm4gTyhhLHFqLGIpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGMucGhvbmVSZXNwb25zZUluZm8uc2Vzc2lvbkluZm99KX1mdW5jdGlvbiByaihhLGIsYyl7cmV0dXJuIE8oYSxzaix7aWRUb2tlbjpiLGRlbGV0ZVByb3ZpZGVyOmN9KX1mdW5jdGlvbiB0aihhKXtpZighYS5yZXF1ZXN0VXJpfHwhYS5zZXNzaW9uSWQmJiFhLnBvc3RCb2R5JiYhYS5wZW5kaW5nVG9rZW4pdGhyb3cgbmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKTt9XG5mdW5jdGlvbiB1aihhLGIpe2Iub2F1dGhJZFRva2VuJiZiLnByb3ZpZGVySWQmJjA9PWIucHJvdmlkZXJJZC5pbmRleE9mKFwib2lkYy5cIikmJiFiLnBlbmRpbmdUb2tlbiYmKGEuc2Vzc2lvbklkP2Iubm9uY2U9YS5zZXNzaW9uSWQ6YS5wb3N0Qm9keSYmKGE9bmV3IFVkKGEucG9zdEJvZHkpLGplKGEsXCJub25jZVwiKSYmKGIubm9uY2U9YS5nZXQoXCJub25jZVwiKSkpKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHZqKGEpe3ZhciBiPW51bGw7YS5uZWVkQ29uZmlybWF0aW9uPyhhLmNvZGU9XCJhY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsXCIsYj16aChhKSk6XCJGRURFUkFURURfVVNFUl9JRF9BTFJFQURZX0xJTktFRFwiPT1hLmVycm9yTWVzc2FnZT8oYS5jb2RlPVwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiLGI9emgoYSkpOlwiRU1BSUxfRVhJU1RTXCI9PWEuZXJyb3JNZXNzYWdlPyhhLmNvZGU9XCJlbWFpbC1hbHJlYWR5LWluLXVzZVwiLGI9emgoYSkpOmEuZXJyb3JNZXNzYWdlJiYoYj13aihhLmVycm9yTWVzc2FnZSkpO2lmKGIpdGhyb3cgYjtQKGEpfWZ1bmN0aW9uIEZnKGEsYil7Yi5yZXR1cm5JZHBDcmVkZW50aWFsPSEwO3JldHVybiBPKGEseGosYil9ZnVuY3Rpb24gSGcoYSxiKXtiLnJldHVybklkcENyZWRlbnRpYWw9ITA7cmV0dXJuIE8oYSx5aixiKX1cbmZ1bmN0aW9uIElnKGEsYil7Yi5yZXR1cm5JZHBDcmVkZW50aWFsPSEwO2IuYXV0b0NyZWF0ZT0hMTtyZXR1cm4gTyhhLHpqLGIpfWZ1bmN0aW9uIEFqKGEpe2lmKCFhLm9vYkNvZGUpdGhyb3cgbmV3IHQoXCJpbnZhbGlkLWFjdGlvbi1jb2RlXCIpO31rLm9iPWZ1bmN0aW9uKGEsYil7cmV0dXJuIE8odGhpcyxCaix7b29iQ29kZTphLG5ld1Bhc3N3b3JkOmJ9KX07ay5TYT1mdW5jdGlvbihhKXtyZXR1cm4gTyh0aGlzLENqLHtvb2JDb2RlOmF9KX07ay5rYj1mdW5jdGlvbihhKXtyZXR1cm4gTyh0aGlzLERqLHtvb2JDb2RlOmF9KX07XG52YXIgRGo9e2VuZHBvaW50Olwic2V0QWNjb3VudEluZm9cIixBOkFqLFo6XCJlbWFpbFwiLEI6ITB9LENqPXtlbmRwb2ludDpcInJlc2V0UGFzc3dvcmRcIixBOkFqLEc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXF1ZXN0VHlwZTtpZighYnx8IWEuZW1haWwmJlwiRU1BSUxfU0lHTklOXCIhPWImJlwiVkVSSUZZX0FORF9DSEFOR0VfRU1BSUxcIiE9Yil0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIpO30sQjohMH0sRWo9e2VuZHBvaW50Olwic2lnbnVwTmV3VXNlclwiLEE6ZnVuY3Rpb24oYSl7WmkoYSk7aWYoIWEucGFzc3dvcmQpdGhyb3cgbmV3IHQoXCJ3ZWFrLXBhc3N3b3JkXCIpO30sRzpQLFY6ITAsQjohMH0sYmo9e2VuZHBvaW50OlwiY3JlYXRlQXV0aFVyaVwiLEI6ITB9LEZqPXtlbmRwb2ludDpcImRlbGV0ZUFjY291bnRcIixPOltcImlkVG9rZW5cIl19LHNqPXtlbmRwb2ludDpcInNldEFjY291bnRJbmZvXCIsTzpbXCJpZFRva2VuXCIsXCJkZWxldGVQcm92aWRlclwiXSxBOmZ1bmN0aW9uKGEpe2lmKCFBcnJheS5pc0FycmF5KGEuZGVsZXRlUHJvdmlkZXIpKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7XG59fSwkZz17ZW5kcG9pbnQ6XCJlbWFpbExpbmtTaWduaW5cIixPOltcImVtYWlsXCIsXCJvb2JDb2RlXCJdLEE6WmksRzpQLFY6ITAsQjohMH0sYmg9e2VuZHBvaW50OlwiZW1haWxMaW5rU2lnbmluXCIsTzpbXCJpZFRva2VuXCIsXCJlbWFpbFwiLFwib29iQ29kZVwiXSxBOlppLEc6UCxWOiEwfSxHaj17ZW5kcG9pbnQ6XCJhY2NvdW50cy9tZmFFbnJvbGxtZW50OmZpbmFsaXplXCIsTzpbXCJpZFRva2VuXCIsXCJwaG9uZVZlcmlmaWNhdGlvbkluZm9cIl0sQTpwaixHOlAsQjohMCxOYTohMH0sSGo9e2VuZHBvaW50OlwiYWNjb3VudHMvbWZhU2lnbkluOmZpbmFsaXplXCIsTzpbXCJtZmFQZW5kaW5nQ3JlZGVudGlhbFwiLFwicGhvbmVWZXJpZmljYXRpb25JbmZvXCJdLEE6cGosRzpQLEI6ITAsTmE6ITB9LElqPXtlbmRwb2ludDpcImdldEFjY291bnRJbmZvXCJ9LGpqPXtlbmRwb2ludDpcImdldE9vYkNvbmZpcm1hdGlvbkNvZGVcIixPOltcInJlcXVlc3RUeXBlXCJdLEE6ZnVuY3Rpb24oYSl7aWYoXCJFTUFJTF9TSUdOSU5cIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIpO1xuWmkoYSl9LFo6XCJlbWFpbFwiLEI6ITB9LGtqPXtlbmRwb2ludDpcImdldE9vYkNvbmZpcm1hdGlvbkNvZGVcIixPOltcImlkVG9rZW5cIixcInJlcXVlc3RUeXBlXCJdLEE6ZnVuY3Rpb24oYSl7aWYoXCJWRVJJRllfRU1BSUxcIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIpO30sWjpcImVtYWlsXCIsQjohMH0sbGo9e2VuZHBvaW50OlwiZ2V0T29iQ29uZmlybWF0aW9uQ29kZVwiLE86W1wiaWRUb2tlblwiLFwibmV3RW1haWxcIixcInJlcXVlc3RUeXBlXCJdLEE6ZnVuY3Rpb24oYSl7aWYoXCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTFwiIT1hLnJlcXVlc3RUeXBlKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7fSxaOlwiZW1haWxcIixCOiEwfSxpaj17ZW5kcG9pbnQ6XCJnZXRPb2JDb25maXJtYXRpb25Db2RlXCIsTzpbXCJyZXF1ZXN0VHlwZVwiXSxBOmZ1bmN0aW9uKGEpe2lmKFwiUEFTU1dPUkRfUkVTRVRcIiE9YS5yZXF1ZXN0VHlwZSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIpO1xuWmkoYSl9LFo6XCJlbWFpbFwiLEI6ITB9LGRqPXttYjohMCxlbmRwb2ludDpcImdldFByb2plY3RDb25maWdcIixWYjpcIkdFVFwifSxKaj17bWI6ITAsZW5kcG9pbnQ6XCJnZXRSZWNhcHRjaGFQYXJhbVwiLFZiOlwiR0VUXCIsRzpmdW5jdGlvbihhKXtpZighYS5yZWNhcHRjaGFTaXRlS2V5KXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7fX0sQmo9e2VuZHBvaW50OlwicmVzZXRQYXNzd29yZFwiLEE6QWosWjpcImVtYWlsXCIsQjohMH0sbWo9e2VuZHBvaW50Olwic2VuZFZlcmlmaWNhdGlvbkNvZGVcIixPOltcInBob25lTnVtYmVyXCIsXCJyZWNhcHRjaGFUb2tlblwiXSxaOlwic2Vzc2lvbkluZm9cIixCOiEwfSxnaj17ZW5kcG9pbnQ6XCJzZXRBY2NvdW50SW5mb1wiLE86W1wiaWRUb2tlblwiXSxBOiRpLFY6ITB9LGNoPXtlbmRwb2ludDpcInNldEFjY291bnRJbmZvXCIsTzpbXCJpZFRva2VuXCJdLEE6ZnVuY3Rpb24oYSl7JGkoYSk7aWYoIWEucGFzc3dvcmQpdGhyb3cgbmV3IHQoXCJ3ZWFrLXBhc3N3b3JkXCIpO30sRzpQLFxuVjohMH0sZmo9e2VuZHBvaW50Olwic2lnbnVwTmV3VXNlclwiLEc6UCxWOiEwLEI6ITB9LG9qPXtlbmRwb2ludDpcImFjY291bnRzL21mYUVucm9sbG1lbnQ6c3RhcnRcIixPOltcImlkVG9rZW5cIixcInBob25lRW5yb2xsbWVudEluZm9cIl0sQTpmdW5jdGlvbihhKXtpZighYS5waG9uZUVucm9sbG1lbnRJbmZvKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7aWYoIWEucGhvbmVFbnJvbGxtZW50SW5mby5waG9uZU51bWJlcil0aHJvdyBuZXcgdChcIm1pc3NpbmctcGhvbmUtbnVtYmVyXCIpO2lmKCFhLnBob25lRW5yb2xsbWVudEluZm8ucmVjYXB0Y2hhVG9rZW4pdGhyb3cgbmV3IHQoXCJtaXNzaW5nLWFwcC1jcmVkZW50aWFsXCIpO30sRzpmdW5jdGlvbihhKXtpZighYS5waG9uZVNlc3Npb25JbmZvfHwhYS5waG9uZVNlc3Npb25JbmZvLnNlc3Npb25JbmZvKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7fSxCOiEwLE5hOiEwfSxxaj17ZW5kcG9pbnQ6XCJhY2NvdW50cy9tZmFTaWduSW46c3RhcnRcIixcbk86W1wibWZhUGVuZGluZ0NyZWRlbnRpYWxcIixcIm1mYUVucm9sbG1lbnRJZFwiLFwicGhvbmVTaWduSW5JbmZvXCJdLEE6ZnVuY3Rpb24oYSl7aWYoIWEucGhvbmVTaWduSW5JbmZvfHwhYS5waG9uZVNpZ25JbkluZm8ucmVjYXB0Y2hhVG9rZW4pdGhyb3cgbmV3IHQoXCJtaXNzaW5nLWFwcC1jcmVkZW50aWFsXCIpO30sRzpmdW5jdGlvbihhKXtpZighYS5waG9uZVJlc3BvbnNlSW5mb3x8IWEucGhvbmVSZXNwb25zZUluZm8uc2Vzc2lvbkluZm8pdGhyb3cgbmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKTt9LEI6ITAsTmE6ITB9LHhqPXtlbmRwb2ludDpcInZlcmlmeUFzc2VydGlvblwiLEE6dGosWmE6dWosRzp2aixWOiEwLEI6ITB9LHpqPXtlbmRwb2ludDpcInZlcmlmeUFzc2VydGlvblwiLEE6dGosWmE6dWosRzpmdW5jdGlvbihhKXtpZihhLmVycm9yTWVzc2FnZSYmXCJVU0VSX05PVF9GT1VORFwiPT1hLmVycm9yTWVzc2FnZSl0aHJvdyBuZXcgdChcInVzZXItbm90LWZvdW5kXCIpO2lmKGEuZXJyb3JNZXNzYWdlKXRocm93IHdqKGEuZXJyb3JNZXNzYWdlKTtcblAoYSl9LFY6ITAsQjohMH0seWo9e2VuZHBvaW50OlwidmVyaWZ5QXNzZXJ0aW9uXCIsQTpmdW5jdGlvbihhKXt0aihhKTtpZighYS5pZFRva2VuKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7fSxaYTp1aixHOnZqLFY6ITB9LEtqPXtlbmRwb2ludDpcInZlcmlmeUN1c3RvbVRva2VuXCIsQTpmdW5jdGlvbihhKXtpZighYS50b2tlbil0aHJvdyBuZXcgdChcImludmFsaWQtY3VzdG9tLXRva2VuXCIpO30sRzpQLFY6ITAsQjohMH0sYWg9e2VuZHBvaW50OlwidmVyaWZ5UGFzc3dvcmRcIixBOmZ1bmN0aW9uKGEpe1ppKGEpO2lmKCFhLnBhc3N3b3JkKXRocm93IG5ldyB0KFwid3JvbmctcGFzc3dvcmRcIik7fSxHOlAsVjohMCxCOiEwfSxuaj17ZW5kcG9pbnQ6XCJ2ZXJpZnlQaG9uZU51bWJlclwiLEE6ZWosRzpQLEI6ITB9LGloPXtlbmRwb2ludDpcInZlcmlmeVBob25lTnVtYmVyXCIsQTpmdW5jdGlvbihhKXtpZighYS5pZFRva2VuKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7ZWooYSl9LFxuRzpmdW5jdGlvbihhKXtpZihhLnRlbXBvcmFyeVByb29mKXRocm93IGEuY29kZT1cImNyZWRlbnRpYWwtYWxyZWFkeS1pbi11c2VcIix6aChhKTtQKGEpfX0samg9e0liOntVU0VSX05PVF9GT1VORDpcInVzZXItbm90LWZvdW5kXCJ9LGVuZHBvaW50OlwidmVyaWZ5UGhvbmVOdW1iZXJcIixBOmVqLEc6UCxCOiEwfSxMaj17ZW5kcG9pbnQ6XCJhY2NvdW50cy9tZmFFbnJvbGxtZW50OndpdGhkcmF3XCIsTzpbXCJpZFRva2VuXCIsXCJtZmFFbnJvbGxtZW50SWRcIl0sRzpmdW5jdGlvbihhKXtpZighIWFbRGddXiEhYS5yZWZyZXNoVG9rZW4pdGhyb3cgbmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKTt9LEI6ITAsTmE6ITB9O1xuZnVuY3Rpb24gTyhhLGIsYyl7aWYoIW1mKGMsYi5PKSlyZXR1cm4gRihuZXcgdChcImludGVybmFsLWVycm9yXCIpKTt2YXIgZD0hIWIuTmEsZT1iLlZifHxcIlBPU1RcIixmO3JldHVybiBFKGMpLnRoZW4oYi5BKS50aGVuKGZ1bmN0aW9uKCl7Yi5WJiYoYy5yZXR1cm5TZWN1cmVUb2tlbj0hMCk7Yi5CJiZhLmImJlwidW5kZWZpbmVkXCI9PT10eXBlb2YgYy50ZW5hbnRJZCYmKGMudGVuYW50SWQ9YS5iKTtyZXR1cm4gZD9ZaShhLGEuaSxiLmVuZHBvaW50LGUsYyxiLkliLGIubWJ8fCExKTpZaShhLGEuaCxiLmVuZHBvaW50LGUsYyxiLkliLGIubWJ8fCExKX0pLnRoZW4oZnVuY3Rpb24oZyl7Zj1nO3JldHVybiBiLlphP2IuWmEoYyxmKTpmfSkudGhlbihiLkcpLnRoZW4oZnVuY3Rpb24oKXtpZighYi5aKXJldHVybiBmO2lmKCEoYi5aIGluIGYpKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7cmV0dXJuIGZbYi5aXX0pfVxuZnVuY3Rpb24gd2ooYSl7cmV0dXJuIFhpKHtlcnJvcjp7ZXJyb3JzOlt7bWVzc2FnZTphfV0sY29kZTo0MDAsbWVzc2FnZTphfX0pfVxuZnVuY3Rpb24gWGkoYSxiKXt2YXIgYz0oYS5lcnJvciYmYS5lcnJvci5lcnJvcnMmJmEuZXJyb3IuZXJyb3JzWzBdfHx7fSkucmVhc29ufHxcIlwiO3ZhciBkPXtrZXlJbnZhbGlkOlwiaW52YWxpZC1hcGkta2V5XCIsaXBSZWZlcmVyQmxvY2tlZDpcImFwcC1ub3QtYXV0aG9yaXplZFwifTtpZihjPWRbY10/bmV3IHQoZFtjXSk6bnVsbClyZXR1cm4gYztjPWEuZXJyb3ImJmEuZXJyb3IubWVzc2FnZXx8XCJcIjtkPXtJTlZBTElEX0NVU1RPTV9UT0tFTjpcImludmFsaWQtY3VzdG9tLXRva2VuXCIsQ1JFREVOVElBTF9NSVNNQVRDSDpcImN1c3RvbS10b2tlbi1taXNtYXRjaFwiLE1JU1NJTkdfQ1VTVE9NX1RPS0VOOlwiaW50ZXJuYWwtZXJyb3JcIixJTlZBTElEX0lERU5USUZJRVI6XCJpbnZhbGlkLWVtYWlsXCIsTUlTU0lOR19DT05USU5VRV9VUkk6XCJpbnRlcm5hbC1lcnJvclwiLElOVkFMSURfRU1BSUw6XCJpbnZhbGlkLWVtYWlsXCIsSU5WQUxJRF9QQVNTV09SRDpcIndyb25nLXBhc3N3b3JkXCIsVVNFUl9ESVNBQkxFRDpcInVzZXItZGlzYWJsZWRcIixcbk1JU1NJTkdfUEFTU1dPUkQ6XCJpbnRlcm5hbC1lcnJvclwiLEVNQUlMX0VYSVNUUzpcImVtYWlsLWFscmVhZHktaW4tdXNlXCIsUEFTU1dPUkRfTE9HSU5fRElTQUJMRUQ6XCJvcGVyYXRpb24tbm90LWFsbG93ZWRcIixJTlZBTElEX0lEUF9SRVNQT05TRTpcImludmFsaWQtY3JlZGVudGlhbFwiLElOVkFMSURfUEVORElOR19UT0tFTjpcImludmFsaWQtY3JlZGVudGlhbFwiLEZFREVSQVRFRF9VU0VSX0lEX0FMUkVBRFlfTElOS0VEOlwiY3JlZGVudGlhbC1hbHJlYWR5LWluLXVzZVwiLE1JU1NJTkdfT1JfSU5WQUxJRF9OT05DRTpcIm1pc3Npbmctb3ItaW52YWxpZC1ub25jZVwiLElOVkFMSURfTUVTU0FHRV9QQVlMT0FEOlwiaW52YWxpZC1tZXNzYWdlLXBheWxvYWRcIixJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTDpcImludmFsaWQtcmVjaXBpZW50LWVtYWlsXCIsSU5WQUxJRF9TRU5ERVI6XCJpbnZhbGlkLXNlbmRlclwiLEVNQUlMX05PVF9GT1VORDpcInVzZXItbm90LWZvdW5kXCIsUkVTRVRfUEFTU1dPUkRfRVhDRUVEX0xJTUlUOlwidG9vLW1hbnktcmVxdWVzdHNcIixcbkVYUElSRURfT09CX0NPREU6XCJleHBpcmVkLWFjdGlvbi1jb2RlXCIsSU5WQUxJRF9PT0JfQ09ERTpcImludmFsaWQtYWN0aW9uLWNvZGVcIixNSVNTSU5HX09PQl9DT0RFOlwiaW50ZXJuYWwtZXJyb3JcIixJTlZBTElEX1BST1ZJREVSX0lEOlwiaW52YWxpZC1wcm92aWRlci1pZFwiLENSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTjpcInJlcXVpcmVzLXJlY2VudC1sb2dpblwiLElOVkFMSURfSURfVE9LRU46XCJpbnZhbGlkLXVzZXItdG9rZW5cIixUT0tFTl9FWFBJUkVEOlwidXNlci10b2tlbi1leHBpcmVkXCIsVVNFUl9OT1RfRk9VTkQ6XCJ1c2VyLXRva2VuLWV4cGlyZWRcIixDT1JTX1VOU1VQUE9SVEVEOlwiY29ycy11bnN1cHBvcnRlZFwiLERZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEOlwiZHluYW1pYy1saW5rLW5vdC1hY3RpdmF0ZWRcIixJTlZBTElEX0FQUF9JRDpcImludmFsaWQtYXBwLWlkXCIsVE9PX01BTllfQVRURU1QVFNfVFJZX0xBVEVSOlwidG9vLW1hbnktcmVxdWVzdHNcIixXRUFLX1BBU1NXT1JEOlwid2Vhay1wYXNzd29yZFwiLFxuT1BFUkFUSU9OX05PVF9BTExPV0VEOlwib3BlcmF0aW9uLW5vdC1hbGxvd2VkXCIsVVNFUl9DQU5DRUxMRUQ6XCJ1c2VyLWNhbmNlbGxlZFwiLENBUFRDSEFfQ0hFQ0tfRkFJTEVEOlwiY2FwdGNoYS1jaGVjay1mYWlsZWRcIixJTlZBTElEX0FQUF9DUkVERU5USUFMOlwiaW52YWxpZC1hcHAtY3JlZGVudGlhbFwiLElOVkFMSURfQ09ERTpcImludmFsaWQtdmVyaWZpY2F0aW9uLWNvZGVcIixJTlZBTElEX1BIT05FX05VTUJFUjpcImludmFsaWQtcGhvbmUtbnVtYmVyXCIsSU5WQUxJRF9TRVNTSU9OX0lORk86XCJpbnZhbGlkLXZlcmlmaWNhdGlvbi1pZFwiLElOVkFMSURfVEVNUE9SQVJZX1BST09GOlwiaW52YWxpZC1jcmVkZW50aWFsXCIsTUlTU0lOR19BUFBfQ1JFREVOVElBTDpcIm1pc3NpbmctYXBwLWNyZWRlbnRpYWxcIixNSVNTSU5HX0NPREU6XCJtaXNzaW5nLXZlcmlmaWNhdGlvbi1jb2RlXCIsTUlTU0lOR19QSE9ORV9OVU1CRVI6XCJtaXNzaW5nLXBob25lLW51bWJlclwiLE1JU1NJTkdfU0VTU0lPTl9JTkZPOlwibWlzc2luZy12ZXJpZmljYXRpb24taWRcIixcblFVT1RBX0VYQ0VFREVEOlwicXVvdGEtZXhjZWVkZWRcIixTRVNTSU9OX0VYUElSRUQ6XCJjb2RlLWV4cGlyZWRcIixSRUpFQ1RFRF9DUkVERU5USUFMOlwicmVqZWN0ZWQtY3JlZGVudGlhbFwiLElOVkFMSURfQ09OVElOVUVfVVJJOlwiaW52YWxpZC1jb250aW51ZS11cmlcIixNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FOlwibWlzc2luZy1hbmRyb2lkLXBrZy1uYW1lXCIsTUlTU0lOR19JT1NfQlVORExFX0lEOlwibWlzc2luZy1pb3MtYnVuZGxlLWlkXCIsVU5BVVRIT1JJWkVEX0RPTUFJTjpcInVuYXV0aG9yaXplZC1jb250aW51ZS11cmlcIixJTlZBTElEX0RZTkFNSUNfTElOS19ET01BSU46XCJpbnZhbGlkLWR5bmFtaWMtbGluay1kb21haW5cIixJTlZBTElEX09BVVRIX0NMSUVOVF9JRDpcImludmFsaWQtb2F1dGgtY2xpZW50LWlkXCIsSU5WQUxJRF9DRVJUX0hBU0g6XCJpbnZhbGlkLWNlcnQtaGFzaFwiLFVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT046XCJ1bnN1cHBvcnRlZC10ZW5hbnQtb3BlcmF0aW9uXCIsXG5JTlZBTElEX1RFTkFOVF9JRDpcImludmFsaWQtdGVuYW50LWlkXCIsVEVOQU5UX0lEX01JU01BVENIOlwidGVuYW50LWlkLW1pc21hdGNoXCIsQURNSU5fT05MWV9PUEVSQVRJT046XCJhZG1pbi1yZXN0cmljdGVkLW9wZXJhdGlvblwiLElOVkFMSURfTUZBX1BFTkRJTkdfQ1JFREVOVElBTDpcImludmFsaWQtbXVsdGktZmFjdG9yLXNlc3Npb25cIixNRkFfRU5ST0xMTUVOVF9OT1RfRk9VTkQ6XCJtdWx0aS1mYWN0b3ItaW5mby1ub3QtZm91bmRcIixNSVNTSU5HX01GQV9QRU5ESU5HX0NSRURFTlRJQUw6XCJtaXNzaW5nLW11bHRpLWZhY3Rvci1zZXNzaW9uXCIsTUlTU0lOR19NRkFfRU5ST0xMTUVOVF9JRDpcIm1pc3NpbmctbXVsdGktZmFjdG9yLWluZm9cIixFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OOlwiZW1haWwtY2hhbmdlLW5lZWRzLXZlcmlmaWNhdGlvblwiLFNFQ09ORF9GQUNUT1JfRVhJU1RTOlwic2Vjb25kLWZhY3Rvci1hbHJlYWR5LWluLXVzZVwiLFNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQ6XCJtYXhpbXVtLXNlY29uZC1mYWN0b3ItY291bnQtZXhjZWVkZWRcIixcblVOU1VQUE9SVEVEX0ZJUlNUX0ZBQ1RPUjpcInVuc3VwcG9ydGVkLWZpcnN0LWZhY3RvclwiLFVOVkVSSUZJRURfRU1BSUw6XCJ1bnZlcmlmaWVkLWVtYWlsXCJ9O3ooZCxifHx7fSk7Yj0oYj1jLm1hdGNoKC9eW15cXHNdK1xccyo6XFxzKihbXFxzXFxTXSopJC8pKSYmMTxiLmxlbmd0aD9iWzFdOnZvaWQgMDtmb3IodmFyIGUgaW4gZClpZigwPT09Yy5pbmRleE9mKGUpKXJldHVybiBuZXcgdChkW2VdLGIpOyFiJiZhJiYoYj1VZShhKSk7cmV0dXJuIG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixiKX07ZnVuY3Rpb24gTWooYSl7dGhpcy5iPWE7dGhpcy5hPW51bGw7dGhpcy5zYj1Oaih0aGlzKX1cbmZ1bmN0aW9uIE5qKGEpe3JldHVybiBPaigpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEQoZnVuY3Rpb24oYixjKXtMKFwiZ2FwaS5pZnJhbWVzLmdldENvbnRleHRcIikoKS5vcGVuKHt3aGVyZTpkb2N1bWVudC5ib2R5LHVybDphLmIsbWVzc2FnZUhhbmRsZXJzRmlsdGVyOkwoXCJnYXBpLmlmcmFtZXMuQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSXCIpLGF0dHJpYnV0ZXM6e3N0eWxlOntwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiLTEwMHB4XCIsd2lkdGg6XCIxcHhcIixoZWlnaHQ6XCIxcHhcIn19LGRvbnRjbGVhcjohMH0sZnVuY3Rpb24oZCl7ZnVuY3Rpb24gZSgpe2NsZWFyVGltZW91dChmKTtiKCl9YS5hPWQ7YS5hLnJlc3R5bGUoe3NldEhpZGVPbkxlYXZlOiExfSk7dmFyIGY9c2V0VGltZW91dChmdW5jdGlvbigpe2MoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKX0sUGouZ2V0KCkpO2QucGluZyhlKS50aGVuKGUsZnVuY3Rpb24oKXtjKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9KX0pfSl9KX1cbmZ1bmN0aW9uIFFqKGEsYil7cmV0dXJuIGEuc2IudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgRChmdW5jdGlvbihjKXthLmEuc2VuZChiLnR5cGUsYixjLEwoXCJnYXBpLmlmcmFtZXMuQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSXCIpKX0pfSl9ZnVuY3Rpb24gUmooYSxiKXthLnNiLnRoZW4oZnVuY3Rpb24oKXthLmEucmVnaXN0ZXIoXCJhdXRoRXZlbnRcIixiLEwoXCJnYXBpLmlmcmFtZXMuQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSXCIpKX0pfXZhciBTaj1uZXcgcWIocmIsXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanM/b25sb2FkPSV7b25sb2FkfVwiKSxUaj1uZXcgWmUoM0U0LDZFNCksUGo9bmV3IFplKDVFMywxNUUzKSxVaj1udWxsO1xuZnVuY3Rpb24gT2ooKXtyZXR1cm4gVWo/VWo6VWo9KG5ldyBEKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe1llKCk7TChcImdhcGkubG9hZFwiKShcImdhcGkuaWZyYW1lc1wiLHtjYWxsYmFjazphLG9udGltZW91dDpmdW5jdGlvbigpe1llKCk7YihFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpfSx0aW1lb3V0OlRqLmdldCgpfSl9aWYoTChcImdhcGkuaWZyYW1lcy5JZnJhbWVcIikpYSgpO2Vsc2UgaWYoTChcImdhcGkubG9hZFwiKSljKCk7ZWxzZXt2YXIgZD1cIl9faWZyYW1lZmNiXCIrTWF0aC5mbG9vcigxRTYqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKTtsW2RdPWZ1bmN0aW9uKCl7TChcImdhcGkubG9hZFwiKT9jKCk6YihFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpfTtkPXpiKFNqLHtvbmxvYWQ6ZH0pO0UoQmkoZCkpLm8oZnVuY3Rpb24oKXtiKEVycm9yKFwiTmV0d29yayBFcnJvclwiKSl9KX19KSkubyhmdW5jdGlvbihhKXtVaj1udWxsO3Rocm93IGE7fSl9O2Z1bmN0aW9uIFZqKGEsYixjLGQpe3RoaXMubD1hO3RoaXMuaD1iO3RoaXMuaT1jO3RoaXMuZz1kO3RoaXMuZj1udWxsO3RoaXMuZz8oYT1KKHRoaXMuZy51cmwpLGE9Y2UoYS5jLGEuYSxhLmcsXCIvZW11bGF0b3IvYXV0aC9pZnJhbWVcIikpOmE9Y2UoXCJodHRwc1wiLHRoaXMubCxudWxsLFwiL19fL2F1dGgvaWZyYW1lXCIpO3RoaXMuYT1hO0kodGhpcy5hLFwiYXBpS2V5XCIsdGhpcy5oKTtJKHRoaXMuYSxcImFwcE5hbWVcIix0aGlzLmkpO3RoaXMuYj1udWxsO3RoaXMuYz1bXX1Wai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt0aGlzLmY/SSh0aGlzLmEsXCJ2XCIsdGhpcy5mKTppZSh0aGlzLmEuYixcInZcIik7dGhpcy5iP0kodGhpcy5hLFwiZWlkXCIsdGhpcy5iKTppZSh0aGlzLmEuYixcImVpZFwiKTt0aGlzLmMubGVuZ3RoP0kodGhpcy5hLFwiZndcIix0aGlzLmMuam9pbihcIixcIikpOmllKHRoaXMuYS5iLFwiZndcIik7cmV0dXJuIHRoaXMuYS50b1N0cmluZygpfTtcbmZ1bmN0aW9uIFdqKGEsYixjLGQsZSxmKXt0aGlzLnU9YTt0aGlzLnM9Yjt0aGlzLmM9Yzt0aGlzLm09ZDt0aGlzLnY9Zjt0aGlzLmk9dGhpcy5nPXRoaXMubD1udWxsO3RoaXMuYT1lO3RoaXMuaD10aGlzLmY9bnVsbH1Xai5wcm90b3R5cGUuemI9ZnVuY3Rpb24oYSl7dGhpcy5oPWE7cmV0dXJuIHRoaXN9O1xuV2oucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7aWYodGhpcy52KXt2YXIgYT1KKHRoaXMudi51cmwpO2E9Y2UoYS5jLGEuYSxhLmcsXCIvZW11bGF0b3IvYXV0aC9oYW5kbGVyXCIpfWVsc2UgYT1jZShcImh0dHBzXCIsdGhpcy51LG51bGwsXCIvX18vYXV0aC9oYW5kbGVyXCIpO0koYSxcImFwaUtleVwiLHRoaXMucyk7SShhLFwiYXBwTmFtZVwiLHRoaXMuYyk7SShhLFwiYXV0aFR5cGVcIix0aGlzLm0pO2lmKHRoaXMuYS5pc09BdXRoUHJvdmlkZXIpe3ZhciBiPXRoaXMuYTt0cnl7dmFyIGM9ZmlyZWJhc2UuYXBwKHRoaXMuYykuYXV0aCgpLmxhKCl9Y2F0Y2goaCl7Yz1udWxsfWIucGI9YztJKGEsXCJwcm92aWRlcklkXCIsdGhpcy5hLnByb3ZpZGVySWQpO2M9dGhpcy5hO2I9VmUoYy5KYik7Zm9yKHZhciBkIGluIGIpYltkXT1iW2RdLnRvU3RyaW5nKCk7ZD1jLlFjO2I9bmIoYik7Zm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKyspe3ZhciBmPWRbZV07ZiBpbiBiJiZkZWxldGUgYltmXX1jLnFiJiZcbmMucGImJiFiW2MucWJdJiYoYltjLnFiXT1jLnBiKTttYihiKXx8SShhLFwiY3VzdG9tUGFyYW1ldGVyc1wiLFVlKGIpKX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgdGhpcy5hLlJiJiYoYz10aGlzLmEuUmIoKSxjLmxlbmd0aCYmSShhLFwic2NvcGVzXCIsYy5qb2luKFwiLFwiKSkpO3RoaXMubD9JKGEsXCJyZWRpcmVjdFVybFwiLHRoaXMubCk6aWUoYS5iLFwicmVkaXJlY3RVcmxcIik7dGhpcy5nP0koYSxcImV2ZW50SWRcIix0aGlzLmcpOmllKGEuYixcImV2ZW50SWRcIik7dGhpcy5pP0koYSxcInZcIix0aGlzLmkpOmllKGEuYixcInZcIik7aWYodGhpcy5iKWZvcih2YXIgZyBpbiB0aGlzLmIpdGhpcy5iLmhhc093blByb3BlcnR5KGcpJiYhYmUoYSxnKSYmSShhLGcsdGhpcy5iW2ddKTt0aGlzLmg/SShhLFwidGlkXCIsdGhpcy5oKTppZShhLmIsXCJ0aWRcIik7dGhpcy5mP0koYSxcImVpZFwiLHRoaXMuZik6aWUoYS5iLFwiZWlkXCIpO2c9WGoodGhpcy5jKTtnLmxlbmd0aCYmSShhLFwiZndcIixnLmpvaW4oXCIsXCIpKTtyZXR1cm4gYS50b1N0cmluZygpfTtcbmZ1bmN0aW9uIFhqKGEpe3RyeXtyZXR1cm4gZmlyZWJhc2UuYXBwKGEpLmF1dGgoKS5HYSgpfWNhdGNoKGIpe3JldHVybltdfX1mdW5jdGlvbiBZaihhLGIsYyxkLGUsZil7dGhpcy5zPWE7dGhpcy5nPWI7dGhpcy5iPWM7dGhpcy5mPWY7dGhpcy5jPWR8fG51bGw7dGhpcy5pPWV8fG51bGw7dGhpcy5sPXRoaXMudT10aGlzLkM9bnVsbDt0aGlzLmg9W107dGhpcy5tPXRoaXMuYT1udWxsfVxuZnVuY3Rpb24gWmooYSl7dmFyIGI9cmUoKTtyZXR1cm4gY2ooYSkudGhlbihmdW5jdGlvbihjKXthOnt2YXIgZD1KKGIpLGU9ZC5jO2Q9ZC5hO2Zvcih2YXIgZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgZz1jW2ZdO3ZhciBoPWQ7dmFyIG09ZTswPT1nLmluZGV4T2YoXCJjaHJvbWUtZXh0ZW5zaW9uOi8vXCIpP2g9SihnKS5hPT1oJiZcImNocm9tZS1leHRlbnNpb25cIj09bTpcImh0dHBcIiE9bSYmXCJodHRwc1wiIT1tP2g9ITE6Q2UudGVzdChnKT9oPWg9PWc6KGc9Zy5zcGxpdChcIi5cIikuam9pbihcIlxcXFwuXCIpLGg9KG5ldyBSZWdFeHAoXCJeKC4rXFxcXC5cIitnK1wifFwiK2crXCIpJFwiLFwiaVwiKSkudGVzdChoKSk7aWYoaCl7Yz0hMDticmVhayBhfX1jPSExfWlmKCFjKXRocm93IG5ldyB4aChyZSgpKTt9KX1cbmZ1bmN0aW9uIGFrKGEpe2lmKGEubSlyZXR1cm4gYS5tO2EubT1FZSgpLnRoZW4oZnVuY3Rpb24oKXtpZighYS51KXt2YXIgYj1hLmMsYz1hLmksZD1YaihhLmIpLGU9bmV3IFZqKGEucyxhLmcsYS5iLGEuZik7ZS5mPWI7ZS5iPWM7ZS5jPVphKGR8fFtdKTthLnU9ZS50b1N0cmluZygpfWEudj1uZXcgTWooYS51KTtiayhhKX0pO3JldHVybiBhLm19az1Zai5wcm90b3R5cGU7ay5QYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9bmV3IHQoXCJwb3B1cC1jbG9zZWQtYnktdXNlclwiKSxlPW5ldyB0KFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIiksZj10aGlzLGc9ITE7cmV0dXJuIHRoaXMubWEoKS50aGVuKGZ1bmN0aW9uKCl7Y2soZikudGhlbihmdW5jdGlvbihoKXtofHwoYSYmeWUoYSksYihlKSxnPSEwKX0pfSkubyhmdW5jdGlvbigpe30pLnRoZW4oZnVuY3Rpb24oKXtpZighZylyZXR1cm4gQmUoYSl9KS50aGVuKGZ1bmN0aW9uKCl7aWYoIWcpcmV0dXJuIEZkKGMpLnRoZW4oZnVuY3Rpb24oKXtiKGQpfSl9KX07XG5rLlliPWZ1bmN0aW9uKCl7dmFyIGE9SygpO3JldHVybiFUZShhKSYmIVhlKGEpfTtrLlViPWZ1bmN0aW9uKCl7cmV0dXJuITF9O1xuay5OYj1mdW5jdGlvbihhLGIsYyxkLGUsZixnLGgpe2lmKCFhKXJldHVybiBGKG5ldyB0KFwicG9wdXAtYmxvY2tlZFwiKSk7aWYoZyYmIVRlKCkpcmV0dXJuIHRoaXMubWEoKS5vKGZ1bmN0aW9uKHApe3llKGEpO2UocCl9KSxkKCksRSgpO3RoaXMuYXx8KHRoaXMuYT1aaihkayh0aGlzKSkpO3ZhciBtPXRoaXM7cmV0dXJuIHRoaXMuYS50aGVuKGZ1bmN0aW9uKCl7dmFyIHA9bS5tYSgpLm8oZnVuY3Rpb24odil7eWUoYSk7ZSh2KTt0aHJvdyB2O30pO2QoKTtyZXR1cm4gcH0pLnRoZW4oZnVuY3Rpb24oKXtyaChjKTtpZighZyl7dmFyIHA9ZWsobS5zLG0uZyxtLmIsYixjLG51bGwsZixtLmMsdm9pZCAwLG0uaSxoLG0uZik7c2UocCxhKX19KS5vKGZ1bmN0aW9uKHApe1wiYXV0aC9uZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCI9PXAuY29kZSYmKG0uYT1udWxsKTt0aHJvdyBwO30pfTtcbmZ1bmN0aW9uIGRrKGEpe2EubHx8KGEuQz1hLmM/T2UoYS5jLFhqKGEuYikpOm51bGwsYS5sPW5ldyBJaShhLmcsQ2EoYS5pKSxhLkMpLGEuZiYmUGkoYS5sLGEuZikpO3JldHVybiBhLmx9ay5PYj1mdW5jdGlvbihhLGIsYyxkKXt0aGlzLmF8fCh0aGlzLmE9WmooZGsodGhpcykpKTt2YXIgZT10aGlzO3JldHVybiB0aGlzLmEudGhlbihmdW5jdGlvbigpe3JoKGIpO3ZhciBmPWVrKGUucyxlLmcsZS5iLGEsYixyZSgpLGMsZS5jLHZvaWQgMCxlLmksZCxlLmYpO3NlKGYpfSkubyhmdW5jdGlvbihmKXtcImF1dGgvbmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiPT1mLmNvZGUmJihlLmE9bnVsbCk7dGhyb3cgZjt9KX07ay5tYT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIGFrKHRoaXMpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS52LnNifSkubyhmdW5jdGlvbigpe2EuYT1udWxsO3Rocm93IG5ldyB0KFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiKTt9KX07ay5hYz1mdW5jdGlvbigpe3JldHVybiEwfTtcbmZ1bmN0aW9uIGVrKGEsYixjLGQsZSxmLGcsaCxtLHAsdixCKXthPW5ldyBXaihhLGIsYyxkLGUsQik7YS5sPWY7YS5nPWc7YS5pPWg7YS5iPW5iKG18fG51bGwpO2EuZj1wO3JldHVybiBhLnpiKHYpLnRvU3RyaW5nKCl9ZnVuY3Rpb24gYmsoYSl7aWYoIWEudil0aHJvdyBFcnJvcihcIklmY0hhbmRsZXIgbXVzdCBiZSBpbml0aWFsaXplZCFcIik7UmooYS52LGZ1bmN0aW9uKGIpe3ZhciBjPXt9O2lmKGImJmIuYXV0aEV2ZW50KXt2YXIgZD0hMTtiPXRoKGIuYXV0aEV2ZW50KTtmb3IoYz0wO2M8YS5oLmxlbmd0aDtjKyspZD1hLmhbY10oYil8fGQ7Yz17fTtjLnN0YXR1cz1kP1wiQUNLXCI6XCJFUlJPUlwiO3JldHVybiBFKGMpfWMuc3RhdHVzPVwiRVJST1JcIjtyZXR1cm4gRShjKX0pfVxuZnVuY3Rpb24gY2soYSl7dmFyIGI9e3R5cGU6XCJ3ZWJTdG9yYWdlU3VwcG9ydFwifTtyZXR1cm4gYWsoYSkudGhlbihmdW5jdGlvbigpe3JldHVybiBRaihhLnYsYil9KS50aGVuKGZ1bmN0aW9uKGMpe2lmKGMmJmMubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNbMF0ud2ViU3RvcmFnZVN1cHBvcnQpcmV0dXJuIGNbMF0ud2ViU3RvcmFnZVN1cHBvcnQ7dGhyb3cgRXJyb3IoKTt9KX1rLkVhPWZ1bmN0aW9uKGEpe3RoaXMuaC5wdXNoKGEpfTtrLlRhPWZ1bmN0aW9uKGEpe1hhKHRoaXMuaCxmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTtmdW5jdGlvbiBmayhhKXt0aGlzLmE9YXx8ZmlyZWJhc2UuSU5URVJOQUwucmVhY3ROYXRpdmUmJmZpcmViYXNlLklOVEVSTkFMLnJlYWN0TmF0aXZlLkFzeW5jU3RvcmFnZTtpZighdGhpcy5hKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIlRoZSBSZWFjdCBOYXRpdmUgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO3RoaXMudHlwZT1cImFzeW5jU3RvcmFnZVwifWs9ZmsucHJvdG90eXBlO2suZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBFKHRoaXMuYS5nZXRJdGVtKGEpKS50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBiJiZXZShiKX0pfTtrLnNldD1mdW5jdGlvbihhLGIpe3JldHVybiBFKHRoaXMuYS5zZXRJdGVtKGEsVWUoYikpKX07ay5VPWZ1bmN0aW9uKGEpe3JldHVybiBFKHRoaXMuYS5yZW1vdmVJdGVtKGEpKX07ay5jYT1mdW5jdGlvbigpe307ay5pYT1mdW5jdGlvbigpe307ZnVuY3Rpb24gZ2soYSl7dGhpcy5iPWE7dGhpcy5hPXt9O3RoaXMuZj1xKHRoaXMuYyx0aGlzKX12YXIgaGs9W107ZnVuY3Rpb24gaWsoKXt2YXIgYT1KZSgpP3NlbGY6bnVsbDt3KGhrLGZ1bmN0aW9uKGMpe2MuYj09YSYmKGI9Yyl9KTtpZighYil7dmFyIGI9bmV3IGdrKGEpO2hrLnB1c2goYil9cmV0dXJuIGJ9XG5nay5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj1hLmRhdGEuZXZlbnRUeXBlLGM9YS5kYXRhLmV2ZW50SWQsZD10aGlzLmFbYl07aWYoZCYmMDxkLmxlbmd0aCl7YS5wb3J0c1swXS5wb3N0TWVzc2FnZSh7c3RhdHVzOlwiYWNrXCIsZXZlbnRJZDpjLGV2ZW50VHlwZTpiLHJlc3BvbnNlOm51bGx9KTt2YXIgZT1bXTt3KGQsZnVuY3Rpb24oZil7ZS5wdXNoKEUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGYoYS5vcmlnaW4sYS5kYXRhLmRhdGEpfSkpfSk7SmMoZSkudGhlbihmdW5jdGlvbihmKXt2YXIgZz1bXTt3KGYsZnVuY3Rpb24oaCl7Zy5wdXNoKHtmdWxmaWxsZWQ6aC5RYix2YWx1ZTpoLnZhbHVlLHJlYXNvbjpoLnJlYXNvbj9oLnJlYXNvbi5tZXNzYWdlOnZvaWQgMH0pfSk7dyhnLGZ1bmN0aW9uKGgpe2Zvcih2YXIgbSBpbiBoKVwidW5kZWZpbmVkXCI9PT10eXBlb2YgaFttXSYmZGVsZXRlIGhbbV19KTthLnBvcnRzWzBdLnBvc3RNZXNzYWdlKHtzdGF0dXM6XCJkb25lXCIsZXZlbnRJZDpjLFxuZXZlbnRUeXBlOmIscmVzcG9uc2U6Z30pfSl9fTtmdW5jdGlvbiBqayhhLGIsYyl7bWIoYS5hKSYmYS5iLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYS5mKTtcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEuYVtiXSYmKGEuYVtiXT1bXSk7YS5hW2JdLnB1c2goYyl9O2Z1bmN0aW9uIGtrKGEpe3RoaXMuYT1hfWtrLnByb3RvdHlwZS5wb3N0TWVzc2FnZT1mdW5jdGlvbihhLGIpe3RoaXMuYS5wb3N0TWVzc2FnZShhLGIpfTtmdW5jdGlvbiBsayhhKXt0aGlzLmM9YTt0aGlzLmI9ITE7dGhpcy5hPVtdfVxuZnVuY3Rpb24gbWsoYSxiLGMsZCl7dmFyIGUsZj1jfHx7fSxnLGgsbSxwPW51bGw7aWYoYS5iKXJldHVybiBGKEVycm9yKFwiY29ubmVjdGlvbl91bmF2YWlsYWJsZVwiKSk7dmFyIHY9ZD84MDA6NTAsQj1cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsP25ldyBNZXNzYWdlQ2hhbm5lbDpudWxsO3JldHVybihuZXcgRChmdW5jdGlvbihBLFEpe0I/KGU9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk1hdGgucG93KDEwLDIwKSkudG9TdHJpbmcoKSxCLnBvcnQxLnN0YXJ0KCksaD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UShFcnJvcihcInVuc3VwcG9ydGVkX2V2ZW50XCIpKX0sdiksZz1mdW5jdGlvbih5YSl7eWEuZGF0YS5ldmVudElkPT09ZSYmKFwiYWNrXCI9PT15YS5kYXRhLnN0YXR1cz8oY2xlYXJUaW1lb3V0KGgpLG09c2V0VGltZW91dChmdW5jdGlvbigpe1EoRXJyb3IoXCJ0aW1lb3V0XCIpKX0sM0UzKSk6XCJkb25lXCI9PT15YS5kYXRhLnN0YXR1cz8oY2xlYXJUaW1lb3V0KG0pLFxuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB5YS5kYXRhLnJlc3BvbnNlP0EoeWEuZGF0YS5yZXNwb25zZSk6UShFcnJvcihcInVua25vd25fZXJyb3JcIikpKTooY2xlYXJUaW1lb3V0KGgpLGNsZWFyVGltZW91dChtKSxRKEVycm9yKFwiaW52YWxpZF9yZXNwb25zZVwiKSkpKX0scD17bWVzc2FnZUNoYW5uZWw6Qixvbk1lc3NhZ2U6Z30sYS5hLnB1c2gocCksQi5wb3J0MS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGcpLGEuYy5wb3N0TWVzc2FnZSh7ZXZlbnRUeXBlOmIsZXZlbnRJZDplLGRhdGE6Zn0sW0IucG9ydDJdKSk6UShFcnJvcihcImNvbm5lY3Rpb25fdW5hdmFpbGFibGVcIikpfSkpLnRoZW4oZnVuY3Rpb24oQSl7bmsoYSxwKTtyZXR1cm4gQX0pLm8oZnVuY3Rpb24oQSl7bmsoYSxwKTt0aHJvdyBBO30pfVxuZnVuY3Rpb24gbmsoYSxiKXtpZihiKXt2YXIgYz1iLm1lc3NhZ2VDaGFubmVsLGQ9Yi5vbk1lc3NhZ2U7YyYmKGMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixkKSxjLnBvcnQxLmNsb3NlKCkpO1hhKGEuYSxmdW5jdGlvbihlKXtyZXR1cm4gZT09Yn0pfX1say5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXtmb3IoOzA8dGhpcy5hLmxlbmd0aDspbmsodGhpcyx0aGlzLmFbMF0pO3RoaXMuYj0hMH07ZnVuY3Rpb24gb2soKXtpZighcGsoKSl0aHJvdyBuZXcgdChcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCIpO3RoaXMuYz17fTt0aGlzLmE9W107dGhpcy5iPTA7dGhpcy5tPWwuaW5kZXhlZERCO3RoaXMudHlwZT1cImluZGV4ZWREQlwiO3RoaXMuZz10aGlzLnY9dGhpcy5mPXRoaXMubD1udWxsO3RoaXMucz0hMTt0aGlzLmg9bnVsbDt2YXIgYT10aGlzO0plKCkmJnNlbGY/KHRoaXMudj1paygpLGprKHRoaXMudixcImtleUNoYW5nZWRcIixmdW5jdGlvbihiLGMpe3JldHVybiBxayhhKS50aGVuKGZ1bmN0aW9uKGQpezA8ZC5sZW5ndGgmJncoYS5hLGZ1bmN0aW9uKGUpe2UoZCl9KTtyZXR1cm57a2V5UHJvY2Vzc2VkOlZhKGQsYy5rZXkpfX0pfSksamsodGhpcy52LFwicGluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIEUoW1wia2V5Q2hhbmdlZFwiXSl9KSk6ZWYoKS50aGVuKGZ1bmN0aW9uKGIpe2lmKGEuaD1iKWEuZz1uZXcgbGsobmV3IGtrKGIpKSxtayhhLmcsXCJwaW5nXCIsbnVsbCwhMCkudGhlbihmdW5jdGlvbihjKXtjWzBdLmZ1bGZpbGxlZCYmXG5WYShjWzBdLnZhbHVlLFwia2V5Q2hhbmdlZFwiKSYmKGEucz0hMCl9KS5vKGZ1bmN0aW9uKCl7fSl9KX12YXIgcms7ZnVuY3Rpb24gc2soYSl7cmV0dXJuIG5ldyBEKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5tLmRlbGV0ZURhdGFiYXNlKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VEYlwiKTtkLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2IoKX07ZC5vbmVycm9yPWZ1bmN0aW9uKGUpe2MoRXJyb3IoZS50YXJnZXQuZXJyb3IpKX19KX1cbmZ1bmN0aW9uIHRrKGEpe3JldHVybiBuZXcgRChmdW5jdGlvbihiLGMpe3ZhciBkPWEubS5vcGVuKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VEYlwiLDEpO2Qub25lcnJvcj1mdW5jdGlvbihlKXt0cnl7ZS5wcmV2ZW50RGVmYXVsdCgpfWNhdGNoKGYpe31jKEVycm9yKGUudGFyZ2V0LmVycm9yKSl9O2Qub251cGdyYWRlbmVlZGVkPWZ1bmN0aW9uKGUpe2U9ZS50YXJnZXQucmVzdWx0O3RyeXtlLmNyZWF0ZU9iamVjdFN0b3JlKFwiZmlyZWJhc2VMb2NhbFN0b3JhZ2VcIix7a2V5UGF0aDpcImZiYXNlX2tleVwifSl9Y2F0Y2goZil7YyhmKX19O2Qub25zdWNjZXNzPWZ1bmN0aW9uKGUpe2U9ZS50YXJnZXQucmVzdWx0O2Uub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcImZpcmViYXNlTG9jYWxTdG9yYWdlXCIpP2IoZSk6c2soYSkudGhlbihmdW5jdGlvbigpe3JldHVybiB0ayhhKX0pLnRoZW4oZnVuY3Rpb24oZil7YihmKX0pLm8oZnVuY3Rpb24oZil7YyhmKX0pfX0pfVxuZnVuY3Rpb24gdWsoYSl7YS5pfHwoYS5pPXRrKGEpKTtyZXR1cm4gYS5pfWZ1bmN0aW9uIHZrKGEsYil7ZnVuY3Rpb24gYyhlLGYpe3VrKGEpLnRoZW4oYikudGhlbihlKS5vKGZ1bmN0aW9uKGcpe2lmKDM8KytkKWYoZyk7ZWxzZSByZXR1cm4gdWsoYSkudGhlbihmdW5jdGlvbihoKXtoLmNsb3NlKCk7YS5pPXZvaWQgMDtyZXR1cm4gYyhlLGYpfSkubyhmdW5jdGlvbihoKXtmKGgpfSl9KX12YXIgZD0wO3JldHVybiBuZXcgRChjKX1mdW5jdGlvbiBwaygpe3RyeXtyZXR1cm4hIWwuaW5kZXhlZERCfWNhdGNoKGEpe3JldHVybiExfX1mdW5jdGlvbiB3ayhhKXtyZXR1cm4gYS5vYmplY3RTdG9yZShcImZpcmViYXNlTG9jYWxTdG9yYWdlXCIpfWZ1bmN0aW9uIHhrKGEsYil7cmV0dXJuIGEudHJhbnNhY3Rpb24oW1wiZmlyZWJhc2VMb2NhbFN0b3JhZ2VcIl0sYj9cInJlYWR3cml0ZVwiOlwicmVhZG9ubHlcIil9XG5mdW5jdGlvbiB5ayhhKXtyZXR1cm4gbmV3IEQoZnVuY3Rpb24oYixjKXthLm9uc3VjY2Vzcz1mdW5jdGlvbihkKXtkJiZkLnRhcmdldD9iKGQudGFyZ2V0LnJlc3VsdCk6YigpfTthLm9uZXJyb3I9ZnVuY3Rpb24oZCl7YyhkLnRhcmdldC5lcnJvcil9fSl9az1vay5wcm90b3R5cGU7ay5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9ITE7cmV0dXJuIHZrKHRoaXMsZnVuY3Rpb24oZSl7ZT13ayh4ayhlLCEwKSk7cmV0dXJuIHlrKGUuZ2V0KGEpKX0pLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIHZrKGMsZnVuY3Rpb24oZil7Zj13ayh4ayhmLCEwKSk7aWYoZSlyZXR1cm4gZS52YWx1ZT1iLHlrKGYucHV0KGUpKTtjLmIrKztkPSEwO3ZhciBnPXt9O2cuZmJhc2Vfa2V5PWE7Zy52YWx1ZT1iO3JldHVybiB5ayhmLmFkZChnKSl9KX0pLnRoZW4oZnVuY3Rpb24oKXtjLmNbYV09YjtyZXR1cm4gemsoYyxhKX0pLm9hKGZ1bmN0aW9uKCl7ZCYmYy5iLS19KX07XG5mdW5jdGlvbiB6ayhhLGIpe3JldHVybiBhLmcmJmEuaCYmZGYoKT09PWEuaD9tayhhLmcsXCJrZXlDaGFuZ2VkXCIse2tleTpifSxhLnMpLnRoZW4oZnVuY3Rpb24oKXt9KS5vKGZ1bmN0aW9uKCl7fSk6RSgpfWsuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB2ayh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiB5ayh3ayh4ayhiLCExKSkuZ2V0KGEpKX0pLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGImJmIudmFsdWV9KX07ay5VPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz0hMTtyZXR1cm4gdmsodGhpcyxmdW5jdGlvbihkKXtjPSEwO2IuYisrO3JldHVybiB5ayh3ayh4ayhkLCEwKSlbXCJkZWxldGVcIl0oYSkpfSkudGhlbihmdW5jdGlvbigpe2RlbGV0ZSBiLmNbYV07cmV0dXJuIHprKGIsYSl9KS5vYShmdW5jdGlvbigpe2MmJmIuYi0tfSl9O1xuZnVuY3Rpb24gcWsoYSl7cmV0dXJuIHVrKGEpLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9d2soeGsoYiwhMSkpO3JldHVybiBjLmdldEFsbD95ayhjLmdldEFsbCgpKTpuZXcgRChmdW5jdGlvbihkLGUpe3ZhciBmPVtdLGc9Yy5vcGVuQ3Vyc29yKCk7Zy5vbnN1Y2Nlc3M9ZnVuY3Rpb24oaCl7KGg9aC50YXJnZXQucmVzdWx0KT8oZi5wdXNoKGgudmFsdWUpLGhbXCJjb250aW51ZVwiXSgpKTpkKGYpfTtnLm9uZXJyb3I9ZnVuY3Rpb24oaCl7ZShoLnRhcmdldC5lcnJvcil9fSl9KS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPXt9LGQ9W107aWYoMD09YS5iKXtmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWNbYltkXS5mYmFzZV9rZXldPWJbZF0udmFsdWU7ZD10ZShhLmMsYyk7YS5jPWN9cmV0dXJuIGR9KX1rLmNhPWZ1bmN0aW9uKGEpezA9PXRoaXMuYS5sZW5ndGgmJkFrKHRoaXMpO3RoaXMuYS5wdXNoKGEpfTtcbmsuaWE9ZnVuY3Rpb24oYSl7WGEodGhpcy5hLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSk7MD09dGhpcy5hLmxlbmd0aCYmQmsodGhpcyl9O2Z1bmN0aW9uIEFrKGEpe2Z1bmN0aW9uIGIoKXthLmY9c2V0VGltZW91dChmdW5jdGlvbigpe2EubD1xayhhKS50aGVuKGZ1bmN0aW9uKGMpezA8Yy5sZW5ndGgmJncoYS5hLGZ1bmN0aW9uKGQpe2QoYyl9KX0pLnRoZW4oZnVuY3Rpb24oKXtiKCl9KS5vKGZ1bmN0aW9uKGMpe1wiU1RPUF9FVkVOVFwiIT1jLm1lc3NhZ2UmJmIoKX0pfSw4MDApfUJrKGEpO2IoKX1mdW5jdGlvbiBCayhhKXthLmwmJmEubC5jYW5jZWwoXCJTVE9QX0VWRU5UXCIpO2EuZiYmKGNsZWFyVGltZW91dChhLmYpLGEuZj1udWxsKX07ZnVuY3Rpb24gQ2soYSl7dmFyIGI9dGhpcyxjPW51bGw7dGhpcy5hPVtdO3RoaXMudHlwZT1cImluZGV4ZWREQlwiO3RoaXMuYz1hO3RoaXMuYj1FKCkudGhlbihmdW5jdGlvbigpe2lmKHBrKCkpe3ZhciBkPVFlKCksZT1cIl9fc2FrXCIrZDtya3x8KHJrPW5ldyBvayk7Yz1yaztyZXR1cm4gYy5zZXQoZSxkKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGMuZ2V0KGUpfSkudGhlbihmdW5jdGlvbihmKXtpZihmIT09ZCl0aHJvdyBFcnJvcihcImluZGV4ZWREQiBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm4gYy5VKGUpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBjfSkubyhmdW5jdGlvbigpe3JldHVybiBiLmN9KX1yZXR1cm4gYi5jfSkudGhlbihmdW5jdGlvbihkKXtiLnR5cGU9ZC50eXBlO2QuY2EoZnVuY3Rpb24oZSl7dyhiLmEsZnVuY3Rpb24oZil7ZihlKX0pfSk7cmV0dXJuIGR9KX1rPUNrLnByb3RvdHlwZTtrLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5iLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGIuZ2V0KGEpfSl9O1xuay5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5iLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGMuc2V0KGEsYil9KX07ay5VPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmIudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYi5VKGEpfSl9O2suY2E9ZnVuY3Rpb24oYSl7dGhpcy5hLnB1c2goYSl9O2suaWE9ZnVuY3Rpb24oYSl7WGEodGhpcy5hLGZ1bmN0aW9uKGIpe3JldHVybiBiPT1hfSl9O2Z1bmN0aW9uIERrKCl7dGhpcy5hPXt9O3RoaXMudHlwZT1cImluTWVtb3J5XCJ9az1Eay5wcm90b3R5cGU7ay5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEUodGhpcy5hW2FdKX07ay5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmFbYV09YjtyZXR1cm4gRSgpfTtrLlU9ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMuYVthXTtyZXR1cm4gRSgpfTtrLmNhPWZ1bmN0aW9uKCl7fTtrLmlhPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBFaygpe2lmKCFGaygpKXtpZihcIk5vZGVcIj09S2UoKSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIsXCJUaGUgTG9jYWxTdG9yYWdlIGNvbXBhdGliaWxpdHkgbGlicmFyeSB3YXMgbm90IGZvdW5kLlwiKTt0aHJvdyBuZXcgdChcIndlYi1zdG9yYWdlLXVuc3VwcG9ydGVkXCIpO310aGlzLmE9R2soKXx8ZmlyZWJhc2UuSU5URVJOQUwubm9kZS5sb2NhbFN0b3JhZ2U7dGhpcy50eXBlPVwibG9jYWxTdG9yYWdlXCJ9ZnVuY3Rpb24gR2soKXt0cnl7dmFyIGE9bC5sb2NhbFN0b3JhZ2UsYj1RZSgpO2EmJihhLnNldEl0ZW0oYixcIjFcIiksYS5yZW1vdmVJdGVtKGIpKTtyZXR1cm4gYX1jYXRjaChjKXtyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBGaygpe3ZhciBhPVwiTm9kZVwiPT1LZSgpO2E9R2soKXx8YSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZSYmZmlyZWJhc2UuSU5URVJOQUwubm9kZS5sb2NhbFN0b3JhZ2U7aWYoIWEpcmV0dXJuITE7dHJ5e3JldHVybiBhLnNldEl0ZW0oXCJfX3Nha1wiLFwiMVwiKSxhLnJlbW92ZUl0ZW0oXCJfX3Nha1wiKSwhMH1jYXRjaChiKXtyZXR1cm4hMX19az1Fay5wcm90b3R5cGU7ay5nZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgYz1iLmEuZ2V0SXRlbShhKTtyZXR1cm4gV2UoYyl9KX07ay5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBFKCkudGhlbihmdW5jdGlvbigpe3ZhciBkPVVlKGIpO251bGw9PT1kP2MuVShhKTpjLmEuc2V0SXRlbShhLGQpfSl9O2suVT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBFKCkudGhlbihmdW5jdGlvbigpe2IuYS5yZW1vdmVJdGVtKGEpfSl9O1xuay5jYT1mdW5jdGlvbihhKXtsLndpbmRvdyYmbmQobC53aW5kb3csXCJzdG9yYWdlXCIsYSl9O2suaWE9ZnVuY3Rpb24oYSl7bC53aW5kb3cmJnhkKGwud2luZG93LFwic3RvcmFnZVwiLGEpfTtmdW5jdGlvbiBIaygpe3RoaXMudHlwZT1cIm51bGxTdG9yYWdlXCJ9az1Iay5wcm90b3R5cGU7ay5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gRShudWxsKX07ay5zZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gRSgpfTtrLlU9ZnVuY3Rpb24oKXtyZXR1cm4gRSgpfTtrLmNhPWZ1bmN0aW9uKCl7fTtrLmlhPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBJaygpe2lmKCFKaygpKXtpZihcIk5vZGVcIj09S2UoKSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIsXCJUaGUgU2Vzc2lvblN0b3JhZ2UgY29tcGF0aWJpbGl0eSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuXCIpO3Rocm93IG5ldyB0KFwid2ViLXN0b3JhZ2UtdW5zdXBwb3J0ZWRcIik7fXRoaXMuYT1LaygpfHxmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLnNlc3Npb25TdG9yYWdlO3RoaXMudHlwZT1cInNlc3Npb25TdG9yYWdlXCJ9ZnVuY3Rpb24gS2soKXt0cnl7dmFyIGE9bC5zZXNzaW9uU3RvcmFnZSxiPVFlKCk7YSYmKGEuc2V0SXRlbShiLFwiMVwiKSxhLnJlbW92ZUl0ZW0oYikpO3JldHVybiBhfWNhdGNoKGMpe3JldHVybiBudWxsfX1cbmZ1bmN0aW9uIEprKCl7dmFyIGE9XCJOb2RlXCI9PUtlKCk7YT1LaygpfHxhJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlJiZmaXJlYmFzZS5JTlRFUk5BTC5ub2RlLnNlc3Npb25TdG9yYWdlO2lmKCFhKXJldHVybiExO3RyeXtyZXR1cm4gYS5zZXRJdGVtKFwiX19zYWtcIixcIjFcIiksYS5yZW1vdmVJdGVtKFwiX19zYWtcIiksITB9Y2F0Y2goYil7cmV0dXJuITF9fWs9SWsucHJvdG90eXBlO2suZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIEUoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGM9Yi5hLmdldEl0ZW0oYSk7cmV0dXJuIFdlKGMpfSl9O2suc2V0PWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gRSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgZD1VZShiKTtudWxsPT09ZD9jLlUoYSk6Yy5hLnNldEl0ZW0oYSxkKX0pfTtrLlU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gRSgpLnRoZW4oZnVuY3Rpb24oKXtiLmEucmVtb3ZlSXRlbShhKX0pfTtrLmNhPWZ1bmN0aW9uKCl7fTtcbmsuaWE9ZnVuY3Rpb24oKXt9O2Z1bmN0aW9uIExrKCl7dmFyIGE9e307YS5Ccm93c2VyPU1rO2EuTm9kZT1OazthLlJlYWN0TmF0aXZlPU9rO2EuV29ya2VyPVBrO3RoaXMuYT1hW0tlKCldfXZhciBRayxNaz17RjpFayxjYjpJa30sTms9e0Y6RWssY2I6SWt9LE9rPXtGOmZrLGNiOkhrfSxQaz17RjpFayxjYjpIa307dmFyIFJrPXtyZDpcImxvY2FsXCIsTk9ORTpcIm5vbmVcIix0ZDpcInNlc3Npb25cIn07ZnVuY3Rpb24gU2soYSl7dmFyIGI9bmV3IHQoXCJpbnZhbGlkLXBlcnNpc3RlbmNlLXR5cGVcIiksYz1uZXcgdChcInVuc3VwcG9ydGVkLXBlcnNpc3RlbmNlLXR5cGVcIik7YTp7Zm9yKGQgaW4gUmspaWYoUmtbZF09PWEpe3ZhciBkPSEwO2JyZWFrIGF9ZD0hMX1pZighZHx8XCJzdHJpbmdcIiE9PXR5cGVvZiBhKXRocm93IGI7c3dpdGNoKEtlKCkpe2Nhc2UgXCJSZWFjdE5hdGl2ZVwiOmlmKFwic2Vzc2lvblwiPT09YSl0aHJvdyBjO2JyZWFrO2Nhc2UgXCJOb2RlXCI6aWYoXCJub25lXCIhPT1hKXRocm93IGM7YnJlYWs7Y2FzZSBcIldvcmtlclwiOmlmKFwic2Vzc2lvblwiPT09YXx8IXBrKCkmJlwibm9uZVwiIT09YSl0aHJvdyBjO2JyZWFrO2RlZmF1bHQ6aWYoIVBlKCkmJlwibm9uZVwiIT09YSl0aHJvdyBjO319XG5mdW5jdGlvbiBUaygpe3ZhciBhPSFYZShLKCkpJiZJZSgpPyEwOiExLGI9VGUoKSxjPVBlKCk7dGhpcy5tPWE7dGhpcy5oPWI7dGhpcy5sPWM7dGhpcy5hPXt9O1FrfHwoUWs9bmV3IExrKTthPVFrO3RyeXt0aGlzLmc9IXFlKCkmJmNmKCl8fCFsLmluZGV4ZWREQj9uZXcgYS5hLkY6bmV3IENrKEplKCk/bmV3IERrOm5ldyBhLmEuRil9Y2F0Y2goZCl7dGhpcy5nPW5ldyBEayx0aGlzLmg9ITB9dHJ5e3RoaXMuaT1uZXcgYS5hLmNifWNhdGNoKGQpe3RoaXMuaT1uZXcgRGt9dGhpcy52PW5ldyBEazt0aGlzLmY9cSh0aGlzLlpiLHRoaXMpO3RoaXMuYj17fX12YXIgVWs7ZnVuY3Rpb24gVmsoKXtVa3x8KFVrPW5ldyBUayk7cmV0dXJuIFVrfWZ1bmN0aW9uIFdrKGEsYil7c3dpdGNoKGIpe2Nhc2UgXCJzZXNzaW9uXCI6cmV0dXJuIGEuaTtjYXNlIFwibm9uZVwiOnJldHVybiBhLnY7ZGVmYXVsdDpyZXR1cm4gYS5nfX1cbmZ1bmN0aW9uIFhrKGEsYil7cmV0dXJuXCJmaXJlYmFzZTpcIithLm5hbWUrKGI/XCI6XCIrYjpcIlwiKX1mdW5jdGlvbiBZayhhLGIsYyl7dmFyIGQ9WGsoYixjKSxlPVdrKGEsYi5GKTtyZXR1cm4gYS5nZXQoYixjKS50aGVuKGZ1bmN0aW9uKGYpe3ZhciBnPW51bGw7dHJ5e2c9V2UobC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShkKSl9Y2F0Y2goaCl7fWlmKGcmJiFmKXJldHVybiBsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGQpLGEuc2V0KGIsZyxjKTtnJiZmJiZcImxvY2FsU3RvcmFnZVwiIT1lLnR5cGUmJmwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZCl9KX1rPVRrLnByb3RvdHlwZTtrLmdldD1mdW5jdGlvbihhLGIpe3JldHVybiBXayh0aGlzLGEuRikuZ2V0KFhrKGEsYikpfTtmdW5jdGlvbiBaayhhLGIsYyl7Yz1YayhiLGMpO1wibG9jYWxcIj09Yi5GJiYoYS5iW2NdPW51bGwpO3JldHVybiBXayhhLGIuRikuVShjKX1cbmsuc2V0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1YayhhLGMpLGU9dGhpcyxmPVdrKHRoaXMsYS5GKTtyZXR1cm4gZi5zZXQoZCxiKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGYuZ2V0KGQpfSkudGhlbihmdW5jdGlvbihnKXtcImxvY2FsXCI9PWEuRiYmKGUuYltkXT1nKX0pfTtrLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXthPVhrKGEsYik7dGhpcy5sJiYodGhpcy5iW2FdPWwubG9jYWxTdG9yYWdlLmdldEl0ZW0oYSkpO21iKHRoaXMuYSkmJihXayh0aGlzLFwibG9jYWxcIikuY2EodGhpcy5mKSx0aGlzLmh8fChxZSgpfHwhY2YoKSkmJmwuaW5kZXhlZERCfHwhdGhpcy5sfHwkayh0aGlzKSk7dGhpcy5hW2FdfHwodGhpcy5hW2FdPVtdKTt0aGlzLmFbYV0ucHVzaChjKX07XG5rLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXthPVhrKGEsYik7dGhpcy5hW2FdJiYoWGEodGhpcy5hW2FdLGZ1bmN0aW9uKGQpe3JldHVybiBkPT1jfSksMD09dGhpcy5hW2FdLmxlbmd0aCYmZGVsZXRlIHRoaXMuYVthXSk7bWIodGhpcy5hKSYmKFdrKHRoaXMsXCJsb2NhbFwiKS5pYSh0aGlzLmYpLGFsKHRoaXMpKX07ZnVuY3Rpb24gJGsoYSl7YWwoYSk7YS5jPXNldEludGVydmFsKGZ1bmN0aW9uKCl7Zm9yKHZhciBiIGluIGEuYSl7dmFyIGM9bC5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShiKSxkPWEuYltiXTtjIT1kJiYoYS5iW2JdPWMsYz1uZXcgYmQoe3R5cGU6XCJzdG9yYWdlXCIsa2V5OmIsdGFyZ2V0OndpbmRvdyxvbGRWYWx1ZTpkLG5ld1ZhbHVlOmMsYTohMH0pLGEuWmIoYykpfX0sMUUzKX1mdW5jdGlvbiBhbChhKXthLmMmJihjbGVhckludGVydmFsKGEuYyksYS5jPW51bGwpfVxuay5aYj1mdW5jdGlvbihhKXtpZihhJiZhLmcpe3ZhciBiPWEuYS5rZXk7aWYobnVsbD09Yilmb3IodmFyIGMgaW4gdGhpcy5hKXt2YXIgZD10aGlzLmJbY107XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBkJiYoZD1udWxsKTt2YXIgZT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGMpO2UhPT1kJiYodGhpcy5iW2NdPWUsdGhpcy5uYihjKSl9ZWxzZSBpZigwPT1iLmluZGV4T2YoXCJmaXJlYmFzZTpcIikmJnRoaXMuYVtiXSl7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhLmEuYT9Xayh0aGlzLFwibG9jYWxcIikuaWEodGhpcy5mKTphbCh0aGlzKTtpZih0aGlzLm0paWYoYz1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpLGQ9YS5hLm5ld1ZhbHVlLGQhPT1jKW51bGwhPT1kP2wubG9jYWxTdG9yYWdlLnNldEl0ZW0oYixkKTpsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGIpO2Vsc2UgaWYodGhpcy5iW2JdPT09ZCYmXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhLmEuYSlyZXR1cm47dmFyIGY9dGhpcztjPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9PVxudHlwZW9mIGEuYS5hfHxmLmJbYl0hPT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpKWYuYltiXT1sLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpLGYubmIoYil9O1diJiZpYyYmMTA9PWljJiZsLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGIpIT09YS5hLm5ld1ZhbHVlJiZhLmEubmV3VmFsdWUhPT1hLmEub2xkVmFsdWU/c2V0VGltZW91dChjLDEwKTpjKCl9fWVsc2UgdyhhLHEodGhpcy5uYix0aGlzKSl9O2submI9ZnVuY3Rpb24oYSl7dGhpcy5hW2FdJiZ3KHRoaXMuYVthXSxmdW5jdGlvbihiKXtiKCl9KX07ZnVuY3Rpb24gYmwoYSl7dGhpcy5hPWE7dGhpcy5iPVZrKCl9dmFyIGNsPXtuYW1lOlwiYXV0aEV2ZW50XCIsRjpcImxvY2FsXCJ9O2Z1bmN0aW9uIGRsKGEpe3JldHVybiBhLmIuZ2V0KGNsLGEuYSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gdGgoYil9KX07ZnVuY3Rpb24gZWwoKXt0aGlzLmE9VmsoKX07ZnVuY3Rpb24gZmwoKXt0aGlzLmI9LTF9O2Z1bmN0aW9uIGdsKGEsYil7dGhpcy5iPWhsO3RoaXMuZj1sLlVpbnQ4QXJyYXk/bmV3IFVpbnQ4QXJyYXkodGhpcy5iKTpBcnJheSh0aGlzLmIpO3RoaXMuZz10aGlzLmM9MDt0aGlzLmE9W107dGhpcy5pPWE7dGhpcy5oPWI7dGhpcy5sPWwuSW50MzJBcnJheT9uZXcgSW50MzJBcnJheSg2NCk6QXJyYXkoNjQpO3ZvaWQgMD09PWlsJiYobC5JbnQzMkFycmF5P2lsPW5ldyBJbnQzMkFycmF5KGpsKTppbD1qbCk7dGhpcy5yZXNldCgpfXZhciBpbDtyKGdsLGZsKTtmb3IodmFyIGhsPTY0LGtsPWhsLTEsbGw9W10sbWw9MDttbDxrbDttbCsrKWxsW21sXT0wO3ZhciBubD1ZYSgxMjgsbGwpO2dsLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuZz10aGlzLmM9MDt0aGlzLmE9bC5JbnQzMkFycmF5P25ldyBJbnQzMkFycmF5KHRoaXMuaCk6WmEodGhpcy5oKX07XG5mdW5jdGlvbiBvbChhKXtmb3IodmFyIGI9YS5mLGM9YS5sLGQ9MCxlPTA7ZTxiLmxlbmd0aDspY1tkKytdPWJbZV08PDI0fGJbZSsxXTw8MTZ8YltlKzJdPDw4fGJbZSszXSxlPTQqZDtmb3IoYj0xNjs2ND5iO2IrKyl7ZT1jW2ItMTVdfDA7ZD1jW2ItMl18MDt2YXIgZj0oY1tiLTE2XXwwKSsoKGU+Pj43fGU8PDI1KV4oZT4+PjE4fGU8PDE0KV5lPj4+Myl8MCxnPShjW2ItN118MCkrKChkPj4+MTd8ZDw8MTUpXihkPj4+MTl8ZDw8MTMpXmQ+Pj4xMCl8MDtjW2JdPWYrZ3wwfWQ9YS5hWzBdfDA7ZT1hLmFbMV18MDt2YXIgaD1hLmFbMl18MCxtPWEuYVszXXwwLHA9YS5hWzRdfDAsdj1hLmFbNV18MCxCPWEuYVs2XXwwO2Y9YS5hWzddfDA7Zm9yKGI9MDs2ND5iO2IrKyl7dmFyIEE9KChkPj4+MnxkPDwzMCleKGQ+Pj4xM3xkPDwxOSleKGQ+Pj4yMnxkPDwxMCkpKyhkJmVeZCZoXmUmaCl8MDtnPXAmdl5+cCZCO2Y9ZisoKHA+Pj42fHA8PDI2KV4ocD4+PjExfHA8PDIxKV4ocD4+PjI1fHA8PFxuNykpfDA7Zz1nKyhpbFtiXXwwKXwwO2c9ZisoZysoY1tiXXwwKXwwKXwwO2Y9QjtCPXY7dj1wO3A9bStnfDA7bT1oO2g9ZTtlPWQ7ZD1nK0F8MH1hLmFbMF09YS5hWzBdK2R8MDthLmFbMV09YS5hWzFdK2V8MDthLmFbMl09YS5hWzJdK2h8MDthLmFbM109YS5hWzNdK218MDthLmFbNF09YS5hWzRdK3B8MDthLmFbNV09YS5hWzVdK3Z8MDthLmFbNl09YS5hWzZdK0J8MDthLmFbN109YS5hWzddK2Z8MH1cbmZ1bmN0aW9uIHBsKGEsYixjKXt2b2lkIDA9PT1jJiYoYz1iLmxlbmd0aCk7dmFyIGQ9MCxlPWEuYztpZihcInN0cmluZ1wiPT09dHlwZW9mIGIpZm9yKDtkPGM7KWEuZltlKytdPWIuY2hhckNvZGVBdChkKyspLGU9PWEuYiYmKG9sKGEpLGU9MCk7ZWxzZSBpZihuYShiKSlmb3IoO2Q8Yzspe3ZhciBmPWJbZCsrXTtpZighKFwibnVtYmVyXCI9PXR5cGVvZiBmJiYwPD1mJiYyNTU+PWYmJmY9PShmfDApKSl0aHJvdyBFcnJvcihcIm1lc3NhZ2UgbXVzdCBiZSBhIGJ5dGUgYXJyYXlcIik7YS5mW2UrK109ZjtlPT1hLmImJihvbChhKSxlPTApfWVsc2UgdGhyb3cgRXJyb3IoXCJtZXNzYWdlIG11c3QgYmUgc3RyaW5nIG9yIGFycmF5XCIpO2EuYz1lO2EuZys9Y31cbnZhciBqbD1bMTExNjM1MjQwOCwxODk5NDQ3NDQxLDMwNDkzMjM0NzEsMzkyMTAwOTU3Myw5NjE5ODcxNjMsMTUwODk3MDk5MywyNDUzNjM1NzQ4LDI4NzA3NjMyMjEsMzYyNDM4MTA4MCwzMTA1OTg0MDEsNjA3MjI1Mjc4LDE0MjY4ODE5ODcsMTkyNTA3ODM4OCwyMTYyMDc4MjA2LDI2MTQ4ODgxMDMsMzI0ODIyMjU4MCwzODM1MzkwNDAxLDQwMjIyMjQ3NzQsMjY0MzQ3MDc4LDYwNDgwNzYyOCw3NzAyNTU5ODMsMTI0OTE1MDEyMiwxNTU1MDgxNjkyLDE5OTYwNjQ5ODYsMjU1NDIyMDg4MiwyODIxODM0MzQ5LDI5NTI5OTY4MDgsMzIxMDMxMzY3MSwzMzM2NTcxODkxLDM1ODQ1Mjg3MTEsMTEzOTI2OTkzLDMzODI0MTg5NSw2NjYzMDcyMDUsNzczNTI5OTEyLDEyOTQ3NTczNzIsMTM5NjE4MjI5MSwxNjk1MTgzNzAwLDE5ODY2NjEwNTEsMjE3NzAyNjM1MCwyNDU2OTU2MDM3LDI3MzA0ODU5MjEsMjgyMDMwMjQxMSwzMjU5NzMwODAwLDMzNDU3NjQ3NzEsMzUxNjA2NTgxNywzNjAwMzUyODA0LFxuNDA5NDU3MTkwOSwyNzU0MjMzNDQsNDMwMjI3NzM0LDUwNjk0ODYxNiw2NTkwNjA1NTYsODgzOTk3ODc3LDk1ODEzOTU3MSwxMzIyODIyMjE4LDE1MzcwMDIwNjMsMTc0Nzg3Mzc3OSwxOTU1NTYyMjIyLDIwMjQxMDQ4MTUsMjIyNzczMDQ1MiwyMzYxODUyNDI0LDI0Mjg0MzY0NzQsMjc1NjczNDE4NywzMjA0MDMxNDc5LDMzMjkzMjUyOThdO2Z1bmN0aW9uIHFsKCl7Z2wuY2FsbCh0aGlzLDgscmwpfXIocWwsZ2wpO3ZhciBybD1bMTc3OTAzMzcwMywzMTQ0MTM0Mjc3LDEwMTM5MDQyNDIsMjc3MzQ4MDc2MiwxMzU5ODkzMTE5LDI2MDA4MjI5MjQsNTI4NzM0NjM1LDE1NDE0NTkyMjVdO2Z1bmN0aW9uIHNsKGEsYixjLGQsZSxmKXt0aGlzLnY9YTt0aGlzLmk9Yjt0aGlzLmw9Yzt0aGlzLm09ZHx8bnVsbDt0aGlzLnU9ZXx8bnVsbDt0aGlzLnM9Zjt0aGlzLmg9YitcIjpcIitjO3RoaXMuQz1uZXcgZWw7dGhpcy5nPW5ldyBibCh0aGlzLmgpO3RoaXMuZj1udWxsO3RoaXMuYj1bXTt0aGlzLmE9dGhpcy5jPW51bGx9ZnVuY3Rpb24gdGwoYSl7cmV0dXJuIG5ldyB0KFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIixhKX1rPXNsLnByb3RvdHlwZTtcbmsubWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5JYT90aGlzLklhOnRoaXMuSWE9RmUoKS50aGVuKGZ1bmN0aW9uKCl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIEwoXCJ1bml2ZXJzYWxMaW5rcy5zdWJzY3JpYmVcIixsKSl0aHJvdyB0bChcImNvcmRvdmEtdW5pdmVyc2FsLWxpbmtzLXBsdWdpbi1maXggaXMgbm90IGluc3RhbGxlZFwiKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIEwoXCJCdWlsZEluZm8ucGFja2FnZU5hbWVcIixsKSl0aHJvdyB0bChcImNvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mbyBpcyBub3QgaW5zdGFsbGVkXCIpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBMKFwiY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybFwiLGwpKXRocm93IHRsKFwiY29yZG92YS1wbHVnaW4tYnJvd3NlcnRhYiBpcyBub3QgaW5zdGFsbGVkXCIpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBMKFwiY29yZG92YS5JbkFwcEJyb3dzZXIub3BlblwiLGwpKXRocm93IHRsKFwiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyIGlzIG5vdCBpbnN0YWxsZWRcIik7XG59LGZ1bmN0aW9uKCl7dGhyb3cgbmV3IHQoXCJjb3Jkb3ZhLW5vdC1yZWFkeVwiKTt9KX07ZnVuY3Rpb24gdWwoKXtmb3IodmFyIGE9MjAsYj1bXTswPGE7KWIucHVzaChcIjEyMzQ1Njc4OTBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIuY2hhckF0KE1hdGguZmxvb3IoNjIqTWF0aC5yYW5kb20oKSkpKSxhLS07cmV0dXJuIGIuam9pbihcIlwiKX1mdW5jdGlvbiB2bChhKXt2YXIgYj1uZXcgcWw7cGwoYixhKTthPVtdO3ZhciBjPTgqYi5nOzU2PmIuYz9wbChiLG5sLDU2LWIuYyk6cGwoYixubCxiLmItKGIuYy01NikpO2Zvcih2YXIgZD02Mzs1Njw9ZDtkLS0pYi5mW2RdPWMmMjU1LGMvPTI1NjtvbChiKTtmb3IoZD1jPTA7ZDxiLmk7ZCsrKWZvcih2YXIgZT0yNDswPD1lO2UtPTgpYVtjKytdPWIuYVtkXT4+ZSYyNTU7cmV0dXJuIGNnKGEpfVxuay5QYj1mdW5jdGlvbihhLGIpe2IobmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTtyZXR1cm4gRSgpfTtrLk5iPWZ1bmN0aW9uKCl7cmV0dXJuIEYobmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKX07ay5hYz1mdW5jdGlvbigpe3JldHVybiExfTtrLlliPWZ1bmN0aW9uKCl7cmV0dXJuITB9O2suVWI9ZnVuY3Rpb24oKXtyZXR1cm4hMH07XG5rLk9iPWZ1bmN0aW9uKGEsYixjLGQpe2lmKHRoaXMuYylyZXR1cm4gRihuZXcgdChcInJlZGlyZWN0LW9wZXJhdGlvbi1wZW5kaW5nXCIpKTt2YXIgZT10aGlzLGY9bC5kb2N1bWVudCxnPW51bGwsaD1udWxsLG09bnVsbCxwPW51bGw7cmV0dXJuIHRoaXMuYz1FKCkudGhlbihmdW5jdGlvbigpe3JoKGIpO3JldHVybiB3bChlKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4geGwoZSxhLGIsYyxkKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4obmV3IEQoZnVuY3Rpb24odixCKXtoPWZ1bmN0aW9uKCl7dmFyIEE9TChcImNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmNsb3NlXCIsbCk7digpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBBJiZBKCk7ZS5hJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5hLmNsb3NlJiYoZS5hLmNsb3NlKCksZS5hPW51bGwpO3JldHVybiExfTtlLkVhKGgpO209ZnVuY3Rpb24oKXtnfHwoZz1GZCgyRTMpLnRoZW4oZnVuY3Rpb24oKXtCKG5ldyB0KFwicmVkaXJlY3QtY2FuY2VsbGVkLWJ5LXVzZXJcIikpfSkpfTtcbnA9ZnVuY3Rpb24oKXskZSgpJiZtKCl9O2YuYWRkRXZlbnRMaXN0ZW5lcihcInJlc3VtZVwiLG0sITEpO0soKS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hbmRyb2lkLyl8fGYuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixwLCExKX0pKS5vKGZ1bmN0aW9uKHYpe3JldHVybiB5bChlKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgdjt9KX0pfSkub2EoZnVuY3Rpb24oKXttJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXN1bWVcIixtLCExKTtwJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIscCwhMSk7ZyYmZy5jYW5jZWwoKTtoJiZlLlRhKGgpO2UuYz1udWxsfSl9O1xuZnVuY3Rpb24geGwoYSxiLGMsZCxlKXt2YXIgZj11bCgpLGc9bmV3IHNoKGIsZCxudWxsLGYsbmV3IHQoXCJuby1hdXRoLWV2ZW50XCIpLG51bGwsZSksaD1MKFwiQnVpbGRJbmZvLnBhY2thZ2VOYW1lXCIsbCk7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBoKXRocm93IG5ldyB0KFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIik7dmFyIG09TChcIkJ1aWxkSW5mby5kaXNwbGF5TmFtZVwiLGwpLHA9e307aWYoSygpLnRvTG93ZXJDYXNlKCkubWF0Y2goL2lwaG9uZXxpcGFkfGlwb2QvKSlwLmliaT1oO2Vsc2UgaWYoSygpLnRvTG93ZXJDYXNlKCkubWF0Y2goL2FuZHJvaWQvKSlwLmFwbj1oO2Vsc2UgcmV0dXJuIEYobmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTttJiYocC5hcHBEaXNwbGF5TmFtZT1tKTtmPXZsKGYpO3Auc2Vzc2lvbklkPWY7dmFyIHY9ZWsoYS52LGEuaSxhLmwsYixjLG51bGwsZCxhLm0scCxhLnUsZSxhLnMpO3JldHVybiBhLm1hKCkudGhlbihmdW5jdGlvbigpe3ZhciBCPVxuYS5oO3JldHVybiBhLkMuYS5zZXQoY2wsZy53KCksQil9KS50aGVuKGZ1bmN0aW9uKCl7dmFyIEI9TChcImNvcmRvdmEucGx1Z2lucy5icm93c2VydGFiLmlzQXZhaWxhYmxlXCIsbCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIEIpdGhyb3cgbmV3IHQoXCJpbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiKTt2YXIgQT1udWxsO0IoZnVuY3Rpb24oUSl7aWYoUSl7QT1MKFwiY29yZG92YS5wbHVnaW5zLmJyb3dzZXJ0YWIub3BlblVybFwiLGwpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBBKXRocm93IG5ldyB0KFwiaW52YWxpZC1jb3Jkb3ZhLWNvbmZpZ3VyYXRpb25cIik7QSh2KX1lbHNle0E9TChcImNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW5cIixsKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgQSl0aHJvdyBuZXcgdChcImludmFsaWQtY29yZG92YS1jb25maWd1cmF0aW9uXCIpO1E9SygpO2EuYT1BKHYsUS5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpLipPUyA3X1xcZC9pKXx8US5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpLipPUyA4X1xcZC9pKT9cblwiX2JsYW5rXCI6XCJfc3lzdGVtXCIsXCJsb2NhdGlvbj15ZXNcIil9fSl9KX1mdW5jdGlvbiB6bChhLGIpe2Zvcih2YXIgYz0wO2M8YS5iLmxlbmd0aDtjKyspdHJ5e2EuYltjXShiKX1jYXRjaChkKXt9fWZ1bmN0aW9uIHdsKGEpe2EuZnx8KGEuZj1hLm1hKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgRChmdW5jdGlvbihiKXtmdW5jdGlvbiBjKGQpe2IoZCk7YS5UYShjKTtyZXR1cm4hMX1hLkVhKGMpO0FsKGEpfSl9KSk7cmV0dXJuIGEuZn1mdW5jdGlvbiB5bChhKXt2YXIgYj1udWxsO3JldHVybiBkbChhLmcpLnRoZW4oZnVuY3Rpb24oYyl7Yj1jO2M9YS5nO3JldHVybiBaayhjLmIsY2wsYy5hKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYn0pfVxuZnVuY3Rpb24gQWwoYSl7ZnVuY3Rpb24gYihnKXtkPSEwO2UmJmUuY2FuY2VsKCk7eWwoYSkudGhlbihmdW5jdGlvbihoKXt2YXIgbT1jO2lmKGgmJmcmJmcudXJsKXt2YXIgcD1udWxsO209eGcoZy51cmwpOy0xIT1tLmluZGV4T2YoXCIvX18vYXV0aC9jYWxsYmFja1wiKSYmKHA9SihtKSxwPVdlKGJlKHAsXCJmaXJlYmFzZUVycm9yXCIpfHxudWxsKSxwPShwPVwib2JqZWN0XCI9PT10eXBlb2YgcD9BYShwKTpudWxsKT9uZXcgc2goaC5jLGguYixudWxsLG51bGwscCxudWxsLGguVCgpKTpuZXcgc2goaC5jLGguYixtLGguZixudWxsLG51bGwsaC5UKCkpKTttPXB8fGN9emwoYSxtKX0pfXZhciBjPW5ldyBzaChcInVua25vd25cIixudWxsLG51bGwsbnVsbCxuZXcgdChcIm5vLWF1dGgtZXZlbnRcIikpLGQ9ITEsZT1GZCg1MDApLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4geWwoYSkudGhlbihmdW5jdGlvbigpe2R8fHpsKGEsYyl9KX0pLGY9bC5oYW5kbGVPcGVuVVJMO2wuaGFuZGxlT3BlblVSTD1mdW5jdGlvbihnKXswPT1cbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKEwoXCJCdWlsZEluZm8ucGFja2FnZU5hbWVcIixsKS50b0xvd2VyQ2FzZSgpK1wiOi8vXCIpJiZiKHt1cmw6Z30pO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKXRyeXtmKGcpfWNhdGNoKGgpe2NvbnNvbGUuZXJyb3IoaCl9fTt2aHx8KHZoPW5ldyB1aCk7d2goYil9ay5FYT1mdW5jdGlvbihhKXt0aGlzLmIucHVzaChhKTt3bCh0aGlzKS5vKGZ1bmN0aW9uKGIpe1wiYXV0aC9pbnZhbGlkLWNvcmRvdmEtY29uZmlndXJhdGlvblwiPT09Yi5jb2RlJiYoYj1uZXcgc2goXCJ1bmtub3duXCIsbnVsbCxudWxsLG51bGwsbmV3IHQoXCJuby1hdXRoLWV2ZW50XCIpKSxhKGIpKX0pfTtrLlRhPWZ1bmN0aW9uKGEpe1hhKHRoaXMuYixmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTtmdW5jdGlvbiBCbChhKXt0aGlzLmE9YTt0aGlzLmI9VmsoKX12YXIgQ2w9e25hbWU6XCJwZW5kaW5nUmVkaXJlY3RcIixGOlwic2Vzc2lvblwifTtmdW5jdGlvbiBEbChhKXtyZXR1cm4gYS5iLnNldChDbCxcInBlbmRpbmdcIixhLmEpfWZ1bmN0aW9uIEVsKGEpe3JldHVybiBaayhhLmIsQ2wsYS5hKX1mdW5jdGlvbiBGbChhKXtyZXR1cm4gYS5iLmdldChDbCxhLmEpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuXCJwZW5kaW5nXCI9PWJ9KX07ZnVuY3Rpb24gR2woYSxiLGMsZCl7dGhpcy5pPXt9O3RoaXMudT0wO3RoaXMuRD1hO3RoaXMudj1iO3RoaXMubT1jO3RoaXMuSj1kO3RoaXMuaD1bXTt0aGlzLmY9ITE7dGhpcy5sPXEodGhpcy5zLHRoaXMpO3RoaXMuYj1uZXcgSGw7dGhpcy5DPW5ldyBJbDt0aGlzLmc9bmV3IEJsKEpsKHRoaXMudix0aGlzLm0pKTt0aGlzLmM9e307dGhpcy5jLnVua25vd249dGhpcy5iO3RoaXMuYy5zaWduSW5WaWFSZWRpcmVjdD10aGlzLmI7dGhpcy5jLmxpbmtWaWFSZWRpcmVjdD10aGlzLmI7dGhpcy5jLnJlYXV0aFZpYVJlZGlyZWN0PXRoaXMuYjt0aGlzLmMuc2lnbkluVmlhUG9wdXA9dGhpcy5DO3RoaXMuYy5saW5rVmlhUG9wdXA9dGhpcy5DO3RoaXMuYy5yZWF1dGhWaWFQb3B1cD10aGlzLkM7dGhpcy5hPUtsKHRoaXMuRCx0aGlzLnYsdGhpcy5tLERhLHRoaXMuSil9XG5mdW5jdGlvbiBLbChhLGIsYyxkLGUpe3ZhciBmPWZpcmViYXNlLlNES19WRVJTSU9OfHxudWxsO3JldHVybiBHZSgpP25ldyBzbChhLGIsYyxmLGQsZSk6bmV3IFlqKGEsYixjLGYsZCxlKX1HbC5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmY9ITE7dGhpcy5hLlRhKHRoaXMubCk7dGhpcy5hPUtsKHRoaXMuRCx0aGlzLnYsdGhpcy5tLG51bGwsdGhpcy5KKTt0aGlzLmk9e319O2Z1bmN0aW9uIExsKGEpe2EuZnx8KGEuZj0hMCxhLmEuRWEoYS5sKSk7dmFyIGI9YS5hO3JldHVybiBhLmEubWEoKS5vKGZ1bmN0aW9uKGMpe2EuYT09YiYmYS5yZXNldCgpO3Rocm93IGM7fSl9XG5mdW5jdGlvbiBNbChhKXthLmEuWWIoKSYmTGwoYSkubyhmdW5jdGlvbihiKXt2YXIgYz1uZXcgc2goXCJ1bmtub3duXCIsbnVsbCxudWxsLG51bGwsbmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTtObChiKSYmYS5zKGMpfSk7YS5hLlViKCl8fE9sKGEuYil9ZnVuY3Rpb24gUGwoYSxiKXtWYShhLmgsYil8fGEuaC5wdXNoKGIpO2EuZnx8RmwoYS5nKS50aGVuKGZ1bmN0aW9uKGMpe2M/RWwoYS5nKS50aGVuKGZ1bmN0aW9uKCl7TGwoYSkubyhmdW5jdGlvbihkKXt2YXIgZT1uZXcgc2goXCJ1bmtub3duXCIsbnVsbCxudWxsLG51bGwsbmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTtObChkKSYmYS5zKGUpfSl9KTpNbChhKX0pLm8oZnVuY3Rpb24oKXtNbChhKX0pfWZ1bmN0aW9uIFFsKGEsYil7WGEoYS5oLGZ1bmN0aW9uKGMpe3JldHVybiBjPT1ifSl9XG5HbC5wcm90b3R5cGUucz1mdW5jdGlvbihhKXtpZighYSl0aHJvdyBuZXcgdChcImludmFsaWQtYXV0aC1ldmVudFwiKTs2RTU8PURhdGUubm93KCktdGhpcy51JiYodGhpcy5pPXt9LHRoaXMudT0wKTtpZihhJiZhLmdldFVpZCgpJiZ0aGlzLmkuaGFzT3duUHJvcGVydHkoYS5nZXRVaWQoKSkpcmV0dXJuITE7Zm9yKHZhciBiPSExLGM9MDtjPHRoaXMuaC5sZW5ndGg7YysrKXt2YXIgZD10aGlzLmhbY107aWYoZC5HYihhLmMsYS5iKSl7aWYoYj10aGlzLmNbYS5jXSliLmgoYSxkKSxhJiYoYS5mfHxhLmIpJiYodGhpcy5pW2EuZ2V0VWlkKCldPSEwLHRoaXMudT1EYXRlLm5vdygpKTtiPSEwO2JyZWFrfX1PbCh0aGlzLmIpO3JldHVybiBifTt2YXIgUmw9bmV3IFplKDJFMywxRTQpLFNsPW5ldyBaZSgzRTQsNkU0KTtHbC5wcm90b3R5cGUucmE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5iLnJhKCl9O1xuZnVuY3Rpb24gVGwoYSxiLGMsZCxlLGYsZyl7cmV0dXJuIGEuYS5OYihiLGMsZCxmdW5jdGlvbigpe2EuZnx8KGEuZj0hMCxhLmEuRWEoYS5sKSl9LGZ1bmN0aW9uKCl7YS5yZXNldCgpfSxlLGYsZyl9ZnVuY3Rpb24gTmwoYSl7cmV0dXJuIGEmJlwiYXV0aC9jb3Jkb3ZhLW5vdC1yZWFkeVwiPT1hLmNvZGU/ITA6ITF9XG5mdW5jdGlvbiBVbChhLGIsYyxkLGUpe3ZhciBmO3JldHVybiBEbChhLmcpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5hLk9iKGIsYyxkLGUpLm8oZnVuY3Rpb24oZyl7aWYoTmwoZykpdGhyb3cgbmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpO2Y9ZztyZXR1cm4gRWwoYS5nKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgZjt9KX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5hLmFjKCk/bmV3IEQoZnVuY3Rpb24oKXt9KTpFbChhLmcpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5yYSgpfSkudGhlbihmdW5jdGlvbigpe30pLm8oZnVuY3Rpb24oKXt9KX0pfSl9ZnVuY3Rpb24gVmwoYSxiLGMsZCxlKXtyZXR1cm4gYS5hLlBiKGQsZnVuY3Rpb24oZil7Yi5uYShjLG51bGwsZixlKX0sUmwuZ2V0KCkpfXZhciBXbD17fTtmdW5jdGlvbiBKbChhLGIsYyl7YT1hK1wiOlwiK2I7YyYmKGE9YStcIjpcIitjLnVybCk7cmV0dXJuIGF9XG5mdW5jdGlvbiBYbChhLGIsYyxkKXt2YXIgZT1KbChiLGMsZCk7V2xbZV18fChXbFtlXT1uZXcgR2woYSxiLGMsZCkpO3JldHVybiBXbFtlXX1mdW5jdGlvbiBIbCgpe3RoaXMuYj1udWxsO3RoaXMuZj1bXTt0aGlzLmM9W107dGhpcy5hPW51bGw7dGhpcy5pPXRoaXMuZz0hMX1IbC5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmI9bnVsbDt0aGlzLmEmJih0aGlzLmEuY2FuY2VsKCksdGhpcy5hPW51bGwpfTtcbkhsLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYil7aWYoYSl7dGhpcy5yZXNldCgpO3RoaXMuZz0hMDt2YXIgYz1hLmMsZD1hLmIsZT1hLmEmJlwiYXV0aC93ZWItc3RvcmFnZS11bnN1cHBvcnRlZFwiPT1hLmEuY29kZSxmPWEuYSYmXCJhdXRoL29wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIj09YS5hLmNvZGU7dGhpcy5pPSEoIWUmJiFmKTtcInVua25vd25cIiE9Y3x8ZXx8Zj9hLmE/KFlsKHRoaXMsITAsbnVsbCxhLmEpLEUoKSk6Yi5GYShjLGQpP1psKHRoaXMsYSxiKTpGKG5ldyB0KFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKTooWWwodGhpcywhMSxudWxsLG51bGwpLEUoKSl9ZWxzZSBGKG5ldyB0KFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKX07ZnVuY3Rpb24gT2woYSl7YS5nfHwoYS5nPSEwLFlsKGEsITEsbnVsbCxudWxsKSl9ZnVuY3Rpb24gJGwoYSl7YS5nJiYhYS5pJiZZbChhLCExLG51bGwsbnVsbCl9XG5mdW5jdGlvbiBabChhLGIsYyl7Yz1jLkZhKGIuYyxiLmIpO3ZhciBkPWIuZyxlPWIuZixmPWIuaSxnPWIuVCgpLGg9ISFiLmMubWF0Y2goL1JlZGlyZWN0JC8pO2MoZCxlLGcsZikudGhlbihmdW5jdGlvbihtKXtZbChhLGgsbSxudWxsKX0pLm8oZnVuY3Rpb24obSl7WWwoYSxoLG51bGwsbSl9KX1mdW5jdGlvbiBhbShhLGIpe2EuYj1mdW5jdGlvbigpe3JldHVybiBGKGIpfTtpZihhLmMubGVuZ3RoKWZvcih2YXIgYz0wO2M8YS5jLmxlbmd0aDtjKyspYS5jW2NdKGIpfWZ1bmN0aW9uIGJtKGEsYil7YS5iPWZ1bmN0aW9uKCl7cmV0dXJuIEUoYil9O2lmKGEuZi5sZW5ndGgpZm9yKHZhciBjPTA7YzxhLmYubGVuZ3RoO2MrKylhLmZbY10oYil9ZnVuY3Rpb24gWWwoYSxiLGMsZCl7Yj9kP2FtKGEsZCk6Ym0oYSxjKTpibShhLHt1c2VyOm51bGx9KTthLmY9W107YS5jPVtdfVxuSGwucHJvdG90eXBlLnJhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gbmV3IEQoZnVuY3Rpb24oYixjKXthLmI/YS5iKCkudGhlbihiLGMpOihhLmYucHVzaChiKSxhLmMucHVzaChjKSxjbShhKSl9KX07ZnVuY3Rpb24gY20oYSl7dmFyIGI9bmV3IHQoXCJ0aW1lb3V0XCIpO2EuYSYmYS5hLmNhbmNlbCgpO2EuYT1GZChTbC5nZXQoKSkudGhlbihmdW5jdGlvbigpe2EuYnx8KGEuZz0hMCxZbChhLCEwLG51bGwsYikpfSl9ZnVuY3Rpb24gSWwoKXt9SWwucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSxiKXtpZihhKXt2YXIgYz1hLmMsZD1hLmI7YS5hPyhiLm5hKGEuYyxudWxsLGEuYSxhLmIpLEUoKSk6Yi5GYShjLGQpP2RtKGEsYik6RihuZXcgdChcImludmFsaWQtYXV0aC1ldmVudFwiKSl9ZWxzZSBGKG5ldyB0KFwiaW52YWxpZC1hdXRoLWV2ZW50XCIpKX07XG5mdW5jdGlvbiBkbShhLGIpe3ZhciBjPWEuYixkPWEuYztiLkZhKGQsYykoYS5nLGEuZixhLlQoKSxhLmkpLnRoZW4oZnVuY3Rpb24oZSl7Yi5uYShkLGUsbnVsbCxjKX0pLm8oZnVuY3Rpb24oZSl7Yi5uYShkLG51bGwsZSxjKX0pfTtmdW5jdGlvbiBlbSgpe3RoaXMuamI9ITE7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qYn0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuamI9YX0sZW51bWVyYWJsZTohMX0pfTtmdW5jdGlvbiBmbShhLGIpe3RoaXMuYT1iO00odGhpcyxcInZlcmlmaWNhdGlvbklkXCIsYSl9Zm0ucHJvdG90eXBlLmNvbmZpcm09ZnVuY3Rpb24oYSl7YT1waCh0aGlzLnZlcmlmaWNhdGlvbklkLGEpO3JldHVybiB0aGlzLmEoYSl9O2Z1bmN0aW9uIGdtKGEsYixjLGQpe3JldHVybihuZXcgbGgoYSkpLmdiKGIsYykudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gbmV3IGZtKGUsZCl9KX07ZnVuY3Rpb24gaG0oYSl7dmFyIGI9aWcoYSk7aWYoIShiJiZiLmV4cCYmYi5hdXRoX3RpbWUmJmIuaWF0KSl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIsXCJBbiBpbnRlcm5hbCBlcnJvciBvY2N1cnJlZC4gVGhlIHRva2VuIG9idGFpbmVkIGJ5IEZpcmViYXNlIGFwcGVhcnMgdG8gYmUgbWFsZm9ybWVkLiBQbGVhc2UgcmV0cnkgdGhlIG9wZXJhdGlvbi5cIik7Tih0aGlzLHt0b2tlbjphLGV4cGlyYXRpb25UaW1lOmJmKDFFMypiLmV4cCksYXV0aFRpbWU6YmYoMUUzKmIuYXV0aF90aW1lKSxpc3N1ZWRBdFRpbWU6YmYoMUUzKmIuaWF0KSxzaWduSW5Qcm92aWRlcjpiLmZpcmViYXNlJiZiLmZpcmViYXNlLnNpZ25faW5fcHJvdmlkZXI/Yi5maXJlYmFzZS5zaWduX2luX3Byb3ZpZGVyOm51bGwsc2lnbkluU2Vjb25kRmFjdG9yOmIuZmlyZWJhc2UmJmIuZmlyZWJhc2Uuc2lnbl9pbl9zZWNvbmRfZmFjdG9yP2IuZmlyZWJhc2Uuc2lnbl9pbl9zZWNvbmRfZmFjdG9yOm51bGwsY2xhaW1zOmJ9KX1cbjtmdW5jdGlvbiBpbShhLGIsYyl7dmFyIGQ9YiYmYltqbV07aWYoIWQpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLFwiSW50ZXJuYWwgYXNzZXJ0OiBJbnZhbGlkIE11bHRpRmFjdG9yUmVzb2x2ZXJcIik7dGhpcy5hPWE7dGhpcy5mPW5iKGIpO3RoaXMuZz1jO3RoaXMuYz1uZXcgeWcobnVsbCxkKTt0aGlzLmI9W107dmFyIGU9dGhpczt3KGJba21dfHxbXSxmdW5jdGlvbihmKXsoZj10ZihmKSkmJmUuYi5wdXNoKGYpfSk7TSh0aGlzLFwiYXV0aFwiLHRoaXMuYSk7TSh0aGlzLFwic2Vzc2lvblwiLHRoaXMuYyk7TSh0aGlzLFwiaGludHNcIix0aGlzLmIpfXZhciBrbT1cIm1mYUluZm9cIixqbT1cIm1mYVBlbmRpbmdDcmVkZW50aWFsXCI7aW0ucHJvdG90eXBlLlJjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIGEudGIodGhpcy5hLmEsdGhpcy5jKS50aGVuKGZ1bmN0aW9uKGMpe3ZhciBkPW5iKGIuZik7ZGVsZXRlIGRba21dO2RlbGV0ZSBkW2ptXTt6KGQsYyk7cmV0dXJuIGIuZyhkKX0pfTtmdW5jdGlvbiBsbShhLGIsYyxkKXt0LmNhbGwodGhpcyxcIm11bHRpLWZhY3Rvci1hdXRoLXJlcXVpcmVkXCIsZCxiKTt0aGlzLmI9bmV3IGltKGEsYixjKTtNKHRoaXMsXCJyZXNvbHZlclwiLHRoaXMuYil9cihsbSx0KTtmdW5jdGlvbiBtbShhLGIsYyl7aWYoYSYmbihhLnNlcnZlclJlc3BvbnNlKSYmXCJhdXRoL211bHRpLWZhY3Rvci1hdXRoLXJlcXVpcmVkXCI9PT1hLmNvZGUpdHJ5e3JldHVybiBuZXcgbG0oYixhLnNlcnZlclJlc3BvbnNlLGMsYS5tZXNzYWdlKX1jYXRjaChkKXt9cmV0dXJuIG51bGx9O2Z1bmN0aW9uIG5tKCl7fW5tLnByb3RvdHlwZS50Yj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIudHlwZT09emc/b20odGhpcyxhLGIsYyk6cG0odGhpcyxhLGIpfTtmdW5jdGlvbiBvbShhLGIsYyxkKXtyZXR1cm4gYy5IYSgpLnRoZW4oZnVuY3Rpb24oZSl7ZT17aWRUb2tlbjplfTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGQmJihlLmRpc3BsYXlOYW1lPWQpO3ooZSx7cGhvbmVWZXJpZmljYXRpb25JbmZvOmhoKGEuYSl9KTtyZXR1cm4gTyhiLEdqLGUpfSl9ZnVuY3Rpb24gcG0oYSxiLGMpe3JldHVybiBjLkhhKCkudGhlbihmdW5jdGlvbihkKXtkPXttZmFQZW5kaW5nQ3JlZGVudGlhbDpkfTt6KGQse3Bob25lVmVyaWZpY2F0aW9uSW5mbzpoaChhLmEpfSk7cmV0dXJuIE8oYixIaixkKX0pfWZ1bmN0aW9uIHFtKGEpe00odGhpcyxcImZhY3RvcklkXCIsYS5mYSk7dGhpcy5hPWF9cihxbSxubSk7XG5mdW5jdGlvbiBybShhKXtxbS5jYWxsKHRoaXMsYSk7aWYodGhpcy5hLmZhIT1saC5QUk9WSURFUl9JRCl0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsXCJmaXJlYmFzZS5hdXRoLlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb24gcmVxdWlyZXMgYSB2YWxpZCBmaXJlYmFzZS5hdXRoLlBob25lQXV0aENyZWRlbnRpYWxcIik7fXIocm0scW0pO2Z1bmN0aW9uIHNtKGEsYil7Ry5jYWxsKHRoaXMsYSk7Zm9yKHZhciBjIGluIGIpdGhpc1tjXT1iW2NdfXIoc20sRyk7ZnVuY3Rpb24gdG0oYSxiKXt0aGlzLmE9YTt0aGlzLmI9W107dGhpcy5jPXEodGhpcy55Yyx0aGlzKTtuZCh0aGlzLmEsXCJ1c2VyUmVsb2FkZWRcIix0aGlzLmMpO3ZhciBjPVtdO2ImJmIubXVsdGlGYWN0b3ImJmIubXVsdGlGYWN0b3IuZW5yb2xsZWRGYWN0b3JzJiZ3KGIubXVsdGlGYWN0b3IuZW5yb2xsZWRGYWN0b3JzLGZ1bmN0aW9uKGQpe3ZhciBlPW51bGwsZj17fTtpZihkKXtkLnVpZCYmKGZbcWZdPWQudWlkKTtkLmRpc3BsYXlOYW1lJiYoZltyZl09ZC5kaXNwbGF5TmFtZSk7ZC5lbnJvbGxtZW50VGltZSYmKGZbc2ZdPShuZXcgRGF0ZShkLmVucm9sbG1lbnRUaW1lKSkudG9JU09TdHJpbmcoKSk7ZC5waG9uZU51bWJlciYmKGZbcGZdPWQucGhvbmVOdW1iZXIpO3RyeXtlPW5ldyB1ZihmKX1jYXRjaChnKXt9ZD1lfWVsc2UgZD1udWxsO2QmJmMucHVzaChkKX0pO3VtKHRoaXMsYyl9XG5mdW5jdGlvbiB2bShhKXt2YXIgYj1bXTt3KGEubWZhSW5mb3x8W10sZnVuY3Rpb24oYyl7KGM9dGYoYykpJiZiLnB1c2goYyl9KTtyZXR1cm4gYn1rPXRtLnByb3RvdHlwZTtrLnljPWZ1bmN0aW9uKGEpe3VtKHRoaXMsdm0oYS5oZCkpfTtmdW5jdGlvbiB1bShhLGIpe2EuYj1iO00oYSxcImVucm9sbGVkRmFjdG9yc1wiLGIpfWsuU2I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hLkkoKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgeWcoYSxudWxsKX0pfTtrLmZjPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPXRoaXMuYS5hO3JldHVybiB0aGlzLlNiKCkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gYS50YihkLGUsYil9KS50aGVuKGZ1bmN0aW9uKGUpe3dtKGMuYSxlKTtyZXR1cm4gYy5hLnJlbG9hZCgpfSl9O1xuay5iZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9XCJzdHJpbmdcIj09PXR5cGVvZiBhP2E6YS51aWQsZD10aGlzLmEuYTtyZXR1cm4gdGhpcy5hLkkoKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBPKGQsTGose2lkVG9rZW46ZSxtZmFFbnJvbGxtZW50SWQ6Y30pfSkudGhlbihmdW5jdGlvbihlKXt2YXIgZj1RYShiLmIsZnVuY3Rpb24oZyl7cmV0dXJuIGcudWlkIT1jfSk7dW0oYixmKTt3bShiLmEsZSk7cmV0dXJuIGIuYS5yZWxvYWQoKS5vKGZ1bmN0aW9uKGcpe2lmKFwiYXV0aC91c2VyLXRva2VuLWV4cGlyZWRcIiE9Zy5jb2RlKXRocm93IGc7fSl9KX07ay53PWZ1bmN0aW9uKCl7cmV0dXJue211bHRpRmFjdG9yOntlbnJvbGxlZEZhY3RvcnM6UmEodGhpcy5iLGZ1bmN0aW9uKGEpe3JldHVybiBhLncoKX0pfX19O2Z1bmN0aW9uIHhtKGEsYixjKXt0aGlzLmg9YTt0aGlzLmk9Yjt0aGlzLmc9Yzt0aGlzLmM9M0U0O3RoaXMuZj05NkU0O3RoaXMuYj1udWxsO3RoaXMuYT10aGlzLmM7aWYodGhpcy5mPHRoaXMuYyl0aHJvdyBFcnJvcihcIlByb2FjdGl2ZSByZWZyZXNoIGxvd2VyIGJvdW5kIGdyZWF0ZXIgdGhhbiB1cHBlciBib3VuZCFcIik7fXhtLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3RoaXMuYT10aGlzLmM7eW0odGhpcywhMCl9O2Z1bmN0aW9uIHptKGEsYil7aWYoYilyZXR1cm4gYS5hPWEuYyxhLmcoKTtiPWEuYTthLmEqPTI7YS5hPmEuZiYmKGEuYT1hLmYpO3JldHVybiBifWZ1bmN0aW9uIHltKGEsYil7YS5zdG9wKCk7YS5iPUZkKHptKGEsYikpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYWYoKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5oKCl9KS50aGVuKGZ1bmN0aW9uKCl7eW0oYSwhMCl9KS5vKGZ1bmN0aW9uKGMpe2EuaShjKSYmeW0oYSwhMSl9KX1cbnhtLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7dGhpcy5iJiYodGhpcy5iLmNhbmNlbCgpLHRoaXMuYj1udWxsKX07ZnVuY3Rpb24gQW0oYSl7dGhpcy5mPWE7dGhpcy5iPXRoaXMuYT1udWxsO3RoaXMuYz1EYXRlLm5vdygpfUFtLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7cmV0dXJue2FwaUtleTp0aGlzLmYuYyxyZWZyZXNoVG9rZW46dGhpcy5hLGFjY2Vzc1Rva2VuOnRoaXMuYiYmdGhpcy5iLnRvU3RyaW5nKCksZXhwaXJhdGlvblRpbWU6dGhpcy5jfX07ZnVuY3Rpb24gQm0oYSxiKXtcInVuZGVmaW5lZFwiPT09dHlwZW9mIGImJihhLmI/KGI9YS5iLGI9Yi5hLWIuZyk6Yj0wKTthLmM9RGF0ZS5ub3coKSsxRTMqYn1mdW5jdGlvbiBDbShhLGIpe2EuYj1qZyhiW0RnXXx8XCJcIik7YS5hPWIucmVmcmVzaFRva2VuO2I9Yi5leHBpcmVzSW47Qm0oYSxcInVuZGVmaW5lZFwiIT09dHlwZW9mIGI/TnVtYmVyKGIpOnZvaWQgMCl9ZnVuY3Rpb24gRG0oYSxiKXthLmI9Yi5iO2EuYT1iLmE7YS5jPWIuY31cbmZ1bmN0aW9uIEVtKGEsYil7cmV0dXJuIFdpKGEuZixiKS50aGVuKGZ1bmN0aW9uKGMpe2EuYj1qZyhjLmFjY2Vzc190b2tlbik7YS5hPWMucmVmcmVzaF90b2tlbjtCbShhLGMuZXhwaXJlc19pbik7cmV0dXJue2FjY2Vzc1Rva2VuOmEuYi50b1N0cmluZygpLHJlZnJlc2hUb2tlbjphLmF9fSkubyhmdW5jdGlvbihjKXtcImF1dGgvdXNlci10b2tlbi1leHBpcmVkXCI9PWMuY29kZSYmKGEuYT1udWxsKTt0aHJvdyBjO30pfUFtLnByb3RvdHlwZS5nZXRUb2tlbj1mdW5jdGlvbihhKXthPSEhYTtyZXR1cm4gdGhpcy5iJiYhdGhpcy5hP0YobmV3IHQoXCJ1c2VyLXRva2VuLWV4cGlyZWRcIikpOmF8fCF0aGlzLmJ8fERhdGUubm93KCk+dGhpcy5jLTNFND90aGlzLmE/RW0odGhpcyx7Z3JhbnRfdHlwZTpcInJlZnJlc2hfdG9rZW5cIixyZWZyZXNoX3Rva2VuOnRoaXMuYX0pOkUobnVsbCk6RSh7YWNjZXNzVG9rZW46dGhpcy5iLnRvU3RyaW5nKCkscmVmcmVzaFRva2VuOnRoaXMuYX0pfTtmdW5jdGlvbiBGbShhLGIpe3RoaXMuYT1hfHxudWxsO3RoaXMuYj1ifHxudWxsO04odGhpcyx7bGFzdFNpZ25JblRpbWU6YmYoYnx8bnVsbCksY3JlYXRpb25UaW1lOmJmKGF8fG51bGwpfSl9ZnVuY3Rpb24gR20oYSl7cmV0dXJuIG5ldyBGbShhLmEsYS5iKX1GbS5wcm90b3R5cGUudz1mdW5jdGlvbigpe3JldHVybntsYXN0TG9naW5BdDp0aGlzLmIsY3JlYXRlZEF0OnRoaXMuYX19O2Z1bmN0aW9uIEhtKGEsYixjLGQsZSxmKXtOKHRoaXMse3VpZDphLGRpc3BsYXlOYW1lOmR8fG51bGwscGhvdG9VUkw6ZXx8bnVsbCxlbWFpbDpjfHxudWxsLHBob25lTnVtYmVyOmZ8fG51bGwscHJvdmlkZXJJZDpifSl9XG5mdW5jdGlvbiBJbShhLGIsYyl7dGhpcy5OPVtdO3RoaXMubD1hLmFwaUtleTt0aGlzLm09YS5hcHBOYW1lO3RoaXMucz1hLmF1dGhEb21haW58fG51bGw7dmFyIGQ9ZmlyZWJhc2UuU0RLX1ZFUlNJT04/T2UoZmlyZWJhc2UuU0RLX1ZFUlNJT04pOm51bGw7dGhpcy5hPW5ldyBJaSh0aGlzLmwsQ2EoRGEpLGQpOyh0aGlzLnU9YS5lbXVsYXRvckNvbmZpZ3x8bnVsbCkmJlBpKHRoaXMuYSx0aGlzLnUpO3RoaXMuaD1uZXcgQW0odGhpcy5hKTtKbSh0aGlzLGJbRGddKTtDbSh0aGlzLmgsYik7TSh0aGlzLFwicmVmcmVzaFRva2VuXCIsdGhpcy5oLmEpO0ttKHRoaXMsY3x8e30pO0guY2FsbCh0aGlzKTt0aGlzLlA9ITE7dGhpcy5zJiZSZSgpJiYodGhpcy5iPVhsKHRoaXMucyx0aGlzLmwsdGhpcy5tLHRoaXMudSkpO3RoaXMuVz1bXTt0aGlzLmk9bnVsbDt0aGlzLkQ9TG0odGhpcyk7dGhpcy5iYT1xKHRoaXMuaWIsdGhpcyk7dmFyIGU9dGhpczt0aGlzLnphPW51bGw7dGhpcy5QYT1mdW5jdGlvbihmKXtlLnhhKGYuaCl9O1xudGhpcy5xYT1udWxsO3RoaXMuQmE9ZnVuY3Rpb24oZil7TW0oZSxmLmMpfTt0aGlzLiQ9bnVsbDt0aGlzLmFhPVtdO3RoaXMuT2E9ZnVuY3Rpb24oZil7Tm0oZSxmLmYpfTt0aGlzLmphPW51bGw7dGhpcy5TPW5ldyB0bSh0aGlzLGMpO00odGhpcyxcIm11bHRpRmFjdG9yXCIsdGhpcy5TKX1yKEltLEgpO0ltLnByb3RvdHlwZS54YT1mdW5jdGlvbihhKXt0aGlzLnphPWE7T2kodGhpcy5hLGEpfTtmdW5jdGlvbiBNbShhLGIpe2EudT1iO1BpKGEuYSxiKTthLmImJihiPWEuYixhLmI9WGwoYS5zLGEubCxhLm0sYS51KSxhLlAmJihRbChiLGEpLFBsKGEuYixhKSkpfUltLnByb3RvdHlwZS5sYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnphfTtmdW5jdGlvbiBPbShhLGIpe2EucWEmJnhkKGEucWEsXCJsYW5ndWFnZUNvZGVDaGFuZ2VkXCIsYS5QYSk7KGEucWE9YikmJm5kKGIsXCJsYW5ndWFnZUNvZGVDaGFuZ2VkXCIsYS5QYSl9XG5mdW5jdGlvbiBQbShhLGIpe2EuJCYmeGQoYS4kLFwiZW11bGF0b3JDb25maWdDaGFuZ2VkXCIsYS5CYSk7KGEuJD1iKSYmbmQoYixcImVtdWxhdG9yQ29uZmlnQ2hhbmdlZFwiLGEuQmEpfWZ1bmN0aW9uIE5tKGEsYil7YS5hYT1iO1JpKGEuYSxmaXJlYmFzZS5TREtfVkVSU0lPTj9PZShmaXJlYmFzZS5TREtfVkVSU0lPTixhLmFhKTpudWxsKX1JbS5wcm90b3R5cGUuR2E9ZnVuY3Rpb24oKXtyZXR1cm4gWmEodGhpcy5hYSl9O2Z1bmN0aW9uIFFtKGEsYil7YS5qYSYmeGQoYS5qYSxcImZyYW1ld29ya0NoYW5nZWRcIixhLk9hKTsoYS5qYT1iKSYmbmQoYixcImZyYW1ld29ya0NoYW5nZWRcIixhLk9hKX1JbS5wcm90b3R5cGUuaWI9ZnVuY3Rpb24oKXt0aGlzLkQuYiYmKHRoaXMuRC5zdG9wKCksdGhpcy5ELnN0YXJ0KCkpfTtcbmZ1bmN0aW9uIFJtKGEpe3RyeXtyZXR1cm4gZmlyZWJhc2UuYXBwKGEubSkuYXV0aCgpfWNhdGNoKGIpe3Rocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIk5vIGZpcmViYXNlLmF1dGguQXV0aCBpbnN0YW5jZSBpcyBhdmFpbGFibGUgZm9yIHRoZSBGaXJlYmFzZSBBcHAgJ1wiK2EubStcIichXCIpO319ZnVuY3Rpb24gTG0oYSl7cmV0dXJuIG5ldyB4bShmdW5jdGlvbigpe3JldHVybiBhLkkoITApfSxmdW5jdGlvbihiKXtyZXR1cm4gYiYmXCJhdXRoL25ldHdvcmstcmVxdWVzdC1mYWlsZWRcIj09Yi5jb2RlPyEwOiExfSxmdW5jdGlvbigpe3ZhciBiPWEuaC5jLURhdGUubm93KCktM0U1O3JldHVybiAwPGI/YjowfSl9ZnVuY3Rpb24gU20oYSl7YS5KfHxhLkQuYnx8KGEuRC5zdGFydCgpLHhkKGEsXCJ0b2tlbkNoYW5nZWRcIixhLmJhKSxuZChhLFwidG9rZW5DaGFuZ2VkXCIsYS5iYSkpfWZ1bmN0aW9uIFRtKGEpe3hkKGEsXCJ0b2tlbkNoYW5nZWRcIixhLmJhKTthLkQuc3RvcCgpfVxuZnVuY3Rpb24gSm0oYSxiKXthLkFhPWI7TShhLFwiX2xhdFwiLGIpfWZ1bmN0aW9uIFVtKGEsYil7WGEoYS5XLGZ1bmN0aW9uKGMpe3JldHVybiBjPT1ifSl9ZnVuY3Rpb24gVm0oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEuVy5sZW5ndGg7YysrKWIucHVzaChhLldbY10oYSkpO3JldHVybiBKYyhiKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KX1mdW5jdGlvbiBXbShhKXthLmImJiFhLlAmJihhLlA9ITAsUGwoYS5iLGEpKX1cbmZ1bmN0aW9uIEttKGEsYil7TihhLHt1aWQ6Yi51aWQsZGlzcGxheU5hbWU6Yi5kaXNwbGF5TmFtZXx8bnVsbCxwaG90b1VSTDpiLnBob3RvVVJMfHxudWxsLGVtYWlsOmIuZW1haWx8fG51bGwsZW1haWxWZXJpZmllZDpiLmVtYWlsVmVyaWZpZWR8fCExLHBob25lTnVtYmVyOmIucGhvbmVOdW1iZXJ8fG51bGwsaXNBbm9ueW1vdXM6Yi5pc0Fub255bW91c3x8ITEsdGVuYW50SWQ6Yi50ZW5hbnRJZHx8bnVsbCxtZXRhZGF0YTpuZXcgRm0oYi5jcmVhdGVkQXQsYi5sYXN0TG9naW5BdCkscHJvdmlkZXJEYXRhOltdfSk7YS5hLmI9YS50ZW5hbnRJZH1NKEltLnByb3RvdHlwZSxcInByb3ZpZGVySWRcIixcImZpcmViYXNlXCIpO2Z1bmN0aW9uIFhtKCl7fWZ1bmN0aW9uIFltKGEpe3JldHVybiBFKCkudGhlbihmdW5jdGlvbigpe2lmKGEuSil0aHJvdyBuZXcgdChcImFwcC1kZWxldGVkXCIpO30pfVxuZnVuY3Rpb24gWm0oYSl7cmV0dXJuIFJhKGEucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGIpe3JldHVybiBiLnByb3ZpZGVySWR9KX1mdW5jdGlvbiAkbShhLGIpe2ImJihhbihhLGIucHJvdmlkZXJJZCksYS5wcm92aWRlckRhdGEucHVzaChiKSl9ZnVuY3Rpb24gYW4oYSxiKXtYYShhLnByb3ZpZGVyRGF0YSxmdW5jdGlvbihjKXtyZXR1cm4gYy5wcm92aWRlcklkPT1ifSl9ZnVuY3Rpb24gYm4oYSxiLGMpeyhcInVpZFwiIT1ifHxjKSYmYS5oYXNPd25Qcm9wZXJ0eShiKSYmTShhLGIsYyl9XG5mdW5jdGlvbiBjbihhLGIpe2EhPWImJihOKGEse3VpZDpiLnVpZCxkaXNwbGF5TmFtZTpiLmRpc3BsYXlOYW1lLHBob3RvVVJMOmIucGhvdG9VUkwsZW1haWw6Yi5lbWFpbCxlbWFpbFZlcmlmaWVkOmIuZW1haWxWZXJpZmllZCxwaG9uZU51bWJlcjpiLnBob25lTnVtYmVyLGlzQW5vbnltb3VzOmIuaXNBbm9ueW1vdXMsdGVuYW50SWQ6Yi50ZW5hbnRJZCxwcm92aWRlckRhdGE6W119KSxiLm1ldGFkYXRhP00oYSxcIm1ldGFkYXRhXCIsR20oYi5tZXRhZGF0YSkpOk0oYSxcIm1ldGFkYXRhXCIsbmV3IEZtKSx3KGIucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGMpeyRtKGEsYyl9KSxEbShhLmgsYi5oKSxNKGEsXCJyZWZyZXNoVG9rZW5cIixhLmguYSksdW0oYS5TLGIuUy5iKSl9az1JbS5wcm90b3R5cGU7ay5yZWxvYWQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBSKHRoaXMsWW0odGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBkbihhKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFZtKGEpfSkudGhlbihYbSl9KSl9O1xuZnVuY3Rpb24gZG4oYSl7cmV0dXJuIGEuSSgpLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9YS5pc0Fub255bW91cztyZXR1cm4gZW4oYSxiKS50aGVuKGZ1bmN0aW9uKCl7Y3x8Ym4oYSxcImlzQW5vbnltb3VzXCIsITEpO3JldHVybiBifSl9KX1rLm9jPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLkkoYSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gbmV3IGhtKGIpfSl9O2suST1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBSKHRoaXMsWW0odGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBiLmguZ2V0VG9rZW4oYSl9KS50aGVuKGZ1bmN0aW9uKGMpe2lmKCFjKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7Yy5hY2Nlc3NUb2tlbiE9Yi5BYSYmKEptKGIsYy5hY2Nlc3NUb2tlbiksYi5kaXNwYXRjaEV2ZW50KG5ldyBzbShcInRva2VuQ2hhbmdlZFwiKSkpO2JuKGIsXCJyZWZyZXNoVG9rZW5cIixjLnJlZnJlc2hUb2tlbik7cmV0dXJuIGMuYWNjZXNzVG9rZW59KSl9O1xuZnVuY3Rpb24gd20oYSxiKXtiW0RnXSYmYS5BYSE9YltEZ10mJihDbShhLmgsYiksYS5kaXNwYXRjaEV2ZW50KG5ldyBzbShcInRva2VuQ2hhbmdlZFwiKSksSm0oYSxiW0RnXSksYm4oYSxcInJlZnJlc2hUb2tlblwiLGEuaC5hKSl9ZnVuY3Rpb24gZW4oYSxiKXtyZXR1cm4gTyhhLmEsSWose2lkVG9rZW46Yn0pLnRoZW4ocShhLktjLGEpKX1cbmsuS2M9ZnVuY3Rpb24oYSl7YT1hLnVzZXJzO2lmKCFhfHwhYS5sZW5ndGgpdGhyb3cgbmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKTthPWFbMF07S20odGhpcyx7dWlkOmEubG9jYWxJZCxkaXNwbGF5TmFtZTphLmRpc3BsYXlOYW1lLHBob3RvVVJMOmEucGhvdG9VcmwsZW1haWw6YS5lbWFpbCxlbWFpbFZlcmlmaWVkOiEhYS5lbWFpbFZlcmlmaWVkLHBob25lTnVtYmVyOmEucGhvbmVOdW1iZXIsbGFzdExvZ2luQXQ6YS5sYXN0TG9naW5BdCxjcmVhdGVkQXQ6YS5jcmVhdGVkQXQsdGVuYW50SWQ6YS50ZW5hbnRJZH0pO2Zvcih2YXIgYj1mbihhKSxjPTA7YzxiLmxlbmd0aDtjKyspJG0odGhpcyxiW2NdKTtibih0aGlzLFwiaXNBbm9ueW1vdXNcIiwhKHRoaXMuZW1haWwmJmEucGFzc3dvcmRIYXNoKSYmISh0aGlzLnByb3ZpZGVyRGF0YSYmdGhpcy5wcm92aWRlckRhdGEubGVuZ3RoKSk7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBzbShcInVzZXJSZWxvYWRlZFwiLHtoZDphfSkpfTtcbmZ1bmN0aW9uIGZuKGEpe3JldHVybihhPWEucHJvdmlkZXJVc2VySW5mbykmJmEubGVuZ3RoP1JhKGEsZnVuY3Rpb24oYil7cmV0dXJuIG5ldyBIbShiLnJhd0lkLGIucHJvdmlkZXJJZCxiLmVtYWlsLGIuZGlzcGxheU5hbWUsYi5waG90b1VybCxiLnBob25lTnVtYmVyKX0pOltdfWsuTGM9ZnVuY3Rpb24oYSl7Z2YoXCJmaXJlYmFzZS5Vc2VyLnByb3RvdHlwZS5yZWF1dGhlbnRpY2F0ZUFuZFJldHJpZXZlRGF0YVdpdGhDcmVkZW50aWFsIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgZmlyZWJhc2UuVXNlci5wcm90b3R5cGUucmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCBpbnN0ZWFkLlwiKTtyZXR1cm4gdGhpcy51YihhKX07XG5rLnViPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1udWxsO3JldHVybiBSKHRoaXMsYS5jKHRoaXMuYSx0aGlzLnVpZCkudGhlbihmdW5jdGlvbihkKXt3bShiLGQpO2M9Z24oYixkLFwicmVhdXRoZW50aWNhdGVcIik7Yi5pPW51bGw7cmV0dXJuIGIucmVsb2FkKCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSwhMCl9O2Z1bmN0aW9uIGhuKGEsYil7cmV0dXJuIGRuKGEpLnRoZW4oZnVuY3Rpb24oKXtpZihWYShabShhKSxiKSlyZXR1cm4gVm0oYSkudGhlbihmdW5jdGlvbigpe3Rocm93IG5ldyB0KFwicHJvdmlkZXItYWxyZWFkeS1saW5rZWRcIik7fSl9KX1rLkNjPWZ1bmN0aW9uKGEpe2dmKFwiZmlyZWJhc2UuVXNlci5wcm90b3R5cGUubGlua0FuZFJldHJpZXZlRGF0YVdpdGhDcmVkZW50aWFsIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgZmlyZWJhc2UuVXNlci5wcm90b3R5cGUubGlua1dpdGhDcmVkZW50aWFsIGluc3RlYWQuXCIpO3JldHVybiB0aGlzLnJiKGEpfTtcbmsucmI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPW51bGw7cmV0dXJuIFIodGhpcyxobih0aGlzLGEucHJvdmlkZXJJZCkudGhlbihmdW5jdGlvbigpe3JldHVybiBiLkkoKX0pLnRoZW4oZnVuY3Rpb24oZCl7cmV0dXJuIGEuYihiLmEsZCl9KS50aGVuKGZ1bmN0aW9uKGQpe2M9Z24oYixkLFwibGlua1wiKTtyZXR1cm4gam4oYixkKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gY30pKX07ay5EYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIFIodGhpcyxobih0aGlzLFwicGhvbmVcIikudGhlbihmdW5jdGlvbigpe3JldHVybiBnbShSbShjKSxhLGIscShjLnJiLGMpKX0pKX07ay5NYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIFIodGhpcyxFKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBnbShSbShjKSxhLGIscShjLnViLGMpKX0pLCEwKX07XG5mdW5jdGlvbiBnbihhLGIsYyl7dmFyIGQ9cWgoYik7Yj1vZyhiKTtyZXR1cm4ga2Yoe3VzZXI6YSxjcmVkZW50aWFsOmQsYWRkaXRpb25hbFVzZXJJbmZvOmIsb3BlcmF0aW9uVHlwZTpjfSl9ZnVuY3Rpb24gam4oYSxiKXt3bShhLGIpO3JldHVybiBhLnJlbG9hZCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYX0pfWsuQ2I9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gUih0aGlzLHRoaXMuSSgpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIuYS5DYihjLGEpfSkudGhlbihmdW5jdGlvbihjKXt3bShiLGMpO3JldHVybiBiLnJlbG9hZCgpfSkpfTtrLmVkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIFIodGhpcyx0aGlzLkkoKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBhLmIoYi5hLGMpfSkudGhlbihmdW5jdGlvbihjKXt3bShiLGMpO3JldHVybiBiLnJlbG9hZCgpfSkpfTtcbmsuRGI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gUih0aGlzLHRoaXMuSSgpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIuYS5EYihjLGEpfSkudGhlbihmdW5jdGlvbihjKXt3bShiLGMpO3JldHVybiBiLnJlbG9hZCgpfSkpfTtcbmsuRWI9ZnVuY3Rpb24oYSl7aWYodm9pZCAwPT09YS5kaXNwbGF5TmFtZSYmdm9pZCAwPT09YS5waG90b1VSTClyZXR1cm4gWW0odGhpcyk7dmFyIGI9dGhpcztyZXR1cm4gUih0aGlzLHRoaXMuSSgpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIuYS5FYihjLHtkaXNwbGF5TmFtZTphLmRpc3BsYXlOYW1lLHBob3RvVXJsOmEucGhvdG9VUkx9KX0pLnRoZW4oZnVuY3Rpb24oYyl7d20oYixjKTtibihiLFwiZGlzcGxheU5hbWVcIixjLmRpc3BsYXlOYW1lfHxudWxsKTtibihiLFwicGhvdG9VUkxcIixjLnBob3RvVXJsfHxudWxsKTt3KGIucHJvdmlkZXJEYXRhLGZ1bmN0aW9uKGQpe1wicGFzc3dvcmRcIj09PWQucHJvdmlkZXJJZCYmKE0oZCxcImRpc3BsYXlOYW1lXCIsYi5kaXNwbGF5TmFtZSksTShkLFwicGhvdG9VUkxcIixiLnBob3RvVVJMKSl9KTtyZXR1cm4gVm0oYil9KS50aGVuKFhtKSl9O1xuay5jZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBSKHRoaXMsZG4odGhpcykudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gVmEoWm0oYiksYSk/cmooYi5hLGMsW2FdKS50aGVuKGZ1bmN0aW9uKGQpe3ZhciBlPXt9O3coZC5wcm92aWRlclVzZXJJbmZvfHxbXSxmdW5jdGlvbihmKXtlW2YucHJvdmlkZXJJZF09ITB9KTt3KFptKGIpLGZ1bmN0aW9uKGYpe2VbZl18fGFuKGIsZil9KTtlW2xoLlBST1ZJREVSX0lEXXx8TShiLFwicGhvbmVOdW1iZXJcIixudWxsKTtyZXR1cm4gVm0oYil9KTpWbShiKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgbmV3IHQoXCJuby1zdWNoLXByb3ZpZGVyXCIpO30pfSkpfTtcbmsuZGVsZXRlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gUih0aGlzLHRoaXMuSSgpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIE8oYS5hLEZqLHtpZFRva2VuOmJ9KX0pLnRoZW4oZnVuY3Rpb24oKXthLmRpc3BhdGNoRXZlbnQobmV3IHNtKFwidXNlckRlbGV0ZWRcIikpfSkpLnRoZW4oZnVuY3Rpb24oKXtmb3IodmFyIGI9MDtiPGEuTi5sZW5ndGg7YisrKWEuTltiXS5jYW5jZWwoXCJhcHAtZGVsZXRlZFwiKTtPbShhLG51bGwpO1BtKGEsbnVsbCk7UW0oYSxudWxsKTthLk49W107YS5KPSEwO1RtKGEpO00oYSxcInJlZnJlc2hUb2tlblwiLG51bGwpO2EuYiYmUWwoYS5iLGEpfSl9O1xuay5HYj1mdW5jdGlvbihhLGIpe3JldHVyblwibGlua1ZpYVBvcHVwXCI9PWEmJih0aGlzLmd8fG51bGwpPT1iJiZ0aGlzLmZ8fFwicmVhdXRoVmlhUG9wdXBcIj09YSYmKHRoaXMuZ3x8bnVsbCk9PWImJnRoaXMuZnx8XCJsaW5rVmlhUmVkaXJlY3RcIj09YSYmKHRoaXMuZ2F8fG51bGwpPT1ifHxcInJlYXV0aFZpYVJlZGlyZWN0XCI9PWEmJih0aGlzLmdhfHxudWxsKT09Yj8hMDohMX07ay5uYT1mdW5jdGlvbihhLGIsYyxkKXtcImxpbmtWaWFQb3B1cFwiIT1hJiZcInJlYXV0aFZpYVBvcHVwXCIhPWF8fGQhPSh0aGlzLmd8fG51bGwpfHwoYyYmdGhpcy5DP3RoaXMuQyhjKTpiJiYhYyYmdGhpcy5mJiZ0aGlzLmYoYiksdGhpcy5jJiYodGhpcy5jLmNhbmNlbCgpLHRoaXMuYz1udWxsKSxkZWxldGUgdGhpcy5mLGRlbGV0ZSB0aGlzLkMpfTtcbmsuRmE9ZnVuY3Rpb24oYSxiKXtyZXR1cm5cImxpbmtWaWFQb3B1cFwiPT1hJiZiPT0odGhpcy5nfHxudWxsKT9xKHRoaXMuTGIsdGhpcyk6XCJyZWF1dGhWaWFQb3B1cFwiPT1hJiZiPT0odGhpcy5nfHxudWxsKT9xKHRoaXMuTWIsdGhpcyk6XCJsaW5rVmlhUmVkaXJlY3RcIj09YSYmKHRoaXMuZ2F8fG51bGwpPT1iP3EodGhpcy5MYix0aGlzKTpcInJlYXV0aFZpYVJlZGlyZWN0XCI9PWEmJih0aGlzLmdhfHxudWxsKT09Yj9xKHRoaXMuTWIsdGhpcyk6bnVsbH07ay5FYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBrbih0aGlzLFwibGlua1ZpYVBvcHVwXCIsYSxmdW5jdGlvbigpe3JldHVybiBobihiLGEucHJvdmlkZXJJZCkudGhlbihmdW5jdGlvbigpe3JldHVybiBWbShiKX0pfSwhMSl9O2suTmM9ZnVuY3Rpb24oYSl7cmV0dXJuIGtuKHRoaXMsXCJyZWF1dGhWaWFQb3B1cFwiLGEsZnVuY3Rpb24oKXtyZXR1cm4gRSgpfSwhMCl9O1xuZnVuY3Rpb24ga24oYSxiLGMsZCxlKXtpZighUmUoKSlyZXR1cm4gRihuZXcgdChcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIikpO2lmKGEuaSYmIWUpcmV0dXJuIEYoYS5pKTt2YXIgZj1uZyhjLnByb3ZpZGVySWQpLGc9UWUoYS51aWQrXCI6OjpcIiksaD1udWxsOyghVGUoKXx8SWUoKSkmJmEucyYmYy5pc09BdXRoUHJvdmlkZXImJihoPWVrKGEucyxhLmwsYS5tLGIsYyxudWxsLGcsZmlyZWJhc2UuU0RLX1ZFUlNJT058fG51bGwsbnVsbCxudWxsLGEudGVuYW50SWQsYS51KSk7dmFyIG09emUoaCxmJiZmLnZhLGYmJmYudWEpO2Q9ZCgpLnRoZW4oZnVuY3Rpb24oKXtsbihhKTtpZighZSlyZXR1cm4gYS5JKCkudGhlbihmdW5jdGlvbigpe30pfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBUbChhLmIsbSxiLGMsZywhIWgsYS50ZW5hbnRJZCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEKGZ1bmN0aW9uKHAsdil7YS5uYShiLG51bGwsbmV3IHQoXCJjYW5jZWxsZWQtcG9wdXAtcmVxdWVzdFwiKSxcbmEuZ3x8bnVsbCk7YS5mPXA7YS5DPXY7YS5nPWc7YS5jPVZsKGEuYixhLGIsbSxnKX0pfSkudGhlbihmdW5jdGlvbihwKXttJiZ5ZShtKTtyZXR1cm4gcD9rZihwKTpudWxsfSkubyhmdW5jdGlvbihwKXttJiZ5ZShtKTt0aHJvdyBwO30pO3JldHVybiBSKGEsZCxlKX1rLkZjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIG1uKHRoaXMsXCJsaW5rVmlhUmVkaXJlY3RcIixhLGZ1bmN0aW9uKCl7cmV0dXJuIGhuKGIsYS5wcm92aWRlcklkKX0sITEpfTtrLk9jPWZ1bmN0aW9uKGEpe3JldHVybiBtbih0aGlzLFwicmVhdXRoVmlhUmVkaXJlY3RcIixhLGZ1bmN0aW9uKCl7cmV0dXJuIEUoKX0sITApfTtcbmZ1bmN0aW9uIG1uKGEsYixjLGQsZSl7aWYoIVJlKCkpcmV0dXJuIEYobmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTtpZihhLmkmJiFlKXJldHVybiBGKGEuaSk7dmFyIGY9bnVsbCxnPVFlKGEudWlkK1wiOjo6XCIpO2Q9ZCgpLnRoZW4oZnVuY3Rpb24oKXtsbihhKTtpZighZSlyZXR1cm4gYS5JKCkudGhlbihmdW5jdGlvbigpe30pfSkudGhlbihmdW5jdGlvbigpe2EuZ2E9ZztyZXR1cm4gVm0oYSl9KS50aGVuKGZ1bmN0aW9uKGgpe2EuaGEmJihoPWEuaGEsaD1oLmIuc2V0KG5uLGEudygpLGguYSkpO3JldHVybiBofSkudGhlbihmdW5jdGlvbigpe3JldHVybiBVbChhLmIsYixjLGcsYS50ZW5hbnRJZCl9KS5vKGZ1bmN0aW9uKGgpe2Y9aDtpZihhLmhhKXJldHVybiBvbihhLmhhKTt0aHJvdyBmO30pLnRoZW4oZnVuY3Rpb24oKXtpZihmKXRocm93IGY7fSk7cmV0dXJuIFIoYSxkLGUpfVxuZnVuY3Rpb24gbG4oYSl7aWYoIWEuYnx8IWEuUCl7aWYoYS5iJiYhYS5QKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIik7dGhyb3cgbmV3IHQoXCJhdXRoLWRvbWFpbi1jb25maWctcmVxdWlyZWRcIik7fX1rLkxiPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXM7dGhpcy5jJiYodGhpcy5jLmNhbmNlbCgpLHRoaXMuYz1udWxsKTt2YXIgZj1udWxsO2M9dGhpcy5JKCkudGhlbihmdW5jdGlvbihnKXtyZXR1cm4gSGcoZS5hLHtyZXF1ZXN0VXJpOmEscG9zdEJvZHk6ZCxzZXNzaW9uSWQ6YixpZFRva2VuOmd9KX0pLnRoZW4oZnVuY3Rpb24oZyl7Zj1nbihlLGcsXCJsaW5rXCIpO3JldHVybiBqbihlLGcpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBmfSk7cmV0dXJuIFIodGhpcyxjKX07XG5rLk1iPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXM7dGhpcy5jJiYodGhpcy5jLmNhbmNlbCgpLHRoaXMuYz1udWxsKTt2YXIgZj1udWxsLGc9RSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gQ2coSWcoZS5hLHtyZXF1ZXN0VXJpOmEsc2Vzc2lvbklkOmIscG9zdEJvZHk6ZCx0ZW5hbnRJZDpjfSksZS51aWQpfSkudGhlbihmdW5jdGlvbihoKXtmPWduKGUsaCxcInJlYXV0aGVudGljYXRlXCIpO3dtKGUsaCk7ZS5pPW51bGw7cmV0dXJuIGUucmVsb2FkKCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KTtyZXR1cm4gUih0aGlzLGcsITApfTtcbmsudmI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPW51bGw7cmV0dXJuIFIodGhpcyx0aGlzLkkoKS50aGVuKGZ1bmN0aW9uKGQpe2M9ZDtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGF8fG1iKGEpP3t9OmJnKG5ldyBTZihhKSl9KS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBiLmEudmIoYyxkKX0pLnRoZW4oZnVuY3Rpb24oZCl7aWYoYi5lbWFpbCE9ZClyZXR1cm4gYi5yZWxvYWQoKX0pLnRoZW4oZnVuY3Rpb24oKXt9KSl9O2suRmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9bnVsbDtyZXR1cm4gUih0aGlzLHRoaXMuSSgpLnRoZW4oZnVuY3Rpb24oZSl7ZD1lO3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8bWIoYik/e306YmcobmV3IFNmKGIpKX0pLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIGMuYS5GYihkLGEsZSl9KS50aGVuKGZ1bmN0aW9uKGUpe2lmKGMuZW1haWwhPWUpcmV0dXJuIGMucmVsb2FkKCl9KS50aGVuKGZ1bmN0aW9uKCl7fSkpfTtcbmZ1bmN0aW9uIFIoYSxiLGMpe3ZhciBkPXBuKGEsYixjKTthLk4ucHVzaChkKTtkLm9hKGZ1bmN0aW9uKCl7V2EoYS5OLGQpfSk7cmV0dXJuIGQubyhmdW5jdGlvbihlKXt2YXIgZj1udWxsO2UmJlwiYXV0aC9tdWx0aS1mYWN0b3ItYXV0aC1yZXF1aXJlZFwiPT09ZS5jb2RlJiYoZj1tbShlLncoKSxSbShhKSxxKGEuamMsYSkpKTt0aHJvdyBmfHxlO30pfWsuamM9ZnVuY3Rpb24oYSl7dmFyIGI9bnVsbCxjPXRoaXM7YT1DZyhFKGEpLGMudWlkKS50aGVuKGZ1bmN0aW9uKGQpe2I9Z24oYyxkLFwicmVhdXRoZW50aWNhdGVcIik7d20oYyxkKTtjLmk9bnVsbDtyZXR1cm4gYy5yZWxvYWQoKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYn0pO3JldHVybiBSKHRoaXMsYSwhMCl9O1xuZnVuY3Rpb24gcG4oYSxiLGMpe3JldHVybiBhLmkmJiFjPyhiLmNhbmNlbCgpLEYoYS5pKSk6Yi5vKGZ1bmN0aW9uKGQpeyFkfHxcImF1dGgvdXNlci1kaXNhYmxlZFwiIT1kLmNvZGUmJlwiYXV0aC91c2VyLXRva2VuLWV4cGlyZWRcIiE9ZC5jb2RlfHwoYS5pfHxhLmRpc3BhdGNoRXZlbnQobmV3IHNtKFwidXNlckludmFsaWRhdGVkXCIpKSxhLmk9ZCk7dGhyb3cgZDt9KX1rLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLncoKX07XG5rLnc9ZnVuY3Rpb24oKXt2YXIgYT17dWlkOnRoaXMudWlkLGRpc3BsYXlOYW1lOnRoaXMuZGlzcGxheU5hbWUscGhvdG9VUkw6dGhpcy5waG90b1VSTCxlbWFpbDp0aGlzLmVtYWlsLGVtYWlsVmVyaWZpZWQ6dGhpcy5lbWFpbFZlcmlmaWVkLHBob25lTnVtYmVyOnRoaXMucGhvbmVOdW1iZXIsaXNBbm9ueW1vdXM6dGhpcy5pc0Fub255bW91cyx0ZW5hbnRJZDp0aGlzLnRlbmFudElkLHByb3ZpZGVyRGF0YTpbXSxhcGlLZXk6dGhpcy5sLGFwcE5hbWU6dGhpcy5tLGF1dGhEb21haW46dGhpcy5zLHN0c1Rva2VuTWFuYWdlcjp0aGlzLmgudygpLHJlZGlyZWN0RXZlbnRJZDp0aGlzLmdhfHxudWxsfTt0aGlzLm1ldGFkYXRhJiZ6KGEsdGhpcy5tZXRhZGF0YS53KCkpO3codGhpcy5wcm92aWRlckRhdGEsZnVuY3Rpb24oYil7YS5wcm92aWRlckRhdGEucHVzaChsZihiKSl9KTt6KGEsdGhpcy5TLncoKSk7cmV0dXJuIGF9O1xuZnVuY3Rpb24gcW4oYSl7aWYoIWEuYXBpS2V5KXJldHVybiBudWxsO3ZhciBiPXthcGlLZXk6YS5hcGlLZXksYXV0aERvbWFpbjphLmF1dGhEb21haW4sYXBwTmFtZTphLmFwcE5hbWUsZW11bGF0b3JDb25maWc6YS5lbXVsYXRvckNvbmZpZ30sYz17fTtpZihhLnN0c1Rva2VuTWFuYWdlciYmYS5zdHNUb2tlbk1hbmFnZXIuYWNjZXNzVG9rZW4pe2NbRGddPWEuc3RzVG9rZW5NYW5hZ2VyLmFjY2Vzc1Rva2VuO2MucmVmcmVzaFRva2VuPWEuc3RzVG9rZW5NYW5hZ2VyLnJlZnJlc2hUb2tlbnx8bnVsbDt2YXIgZD1hLnN0c1Rva2VuTWFuYWdlci5leHBpcmF0aW9uVGltZTtkJiYoYy5leHBpcmVzSW49KGQtRGF0ZS5ub3coKSkvMUUzKX1lbHNlIHJldHVybiBudWxsO3ZhciBlPW5ldyBJbShiLGMsYSk7YS5wcm92aWRlckRhdGEmJncoYS5wcm92aWRlckRhdGEsZnVuY3Rpb24oZil7ZiYmJG0oZSxrZihmKSl9KTthLnJlZGlyZWN0RXZlbnRJZCYmKGUuZ2E9YS5yZWRpcmVjdEV2ZW50SWQpO1xucmV0dXJuIGV9ZnVuY3Rpb24gcm4oYSxiLGMsZCl7dmFyIGU9bmV3IEltKGEsYik7YyYmKGUuaGE9Yyk7ZCYmTm0oZSxkKTtyZXR1cm4gZS5yZWxvYWQoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGV9KX1mdW5jdGlvbiBzbihhLGIsYyxkKXt2YXIgZT1hLmgsZj17fTtmW0RnXT1lLmImJmUuYi50b1N0cmluZygpO2YucmVmcmVzaFRva2VuPWUuYTtiPW5ldyBJbShifHx7YXBpS2V5OmEubCxhdXRoRG9tYWluOmEucyxhcHBOYW1lOmEubX0sZik7YyYmKGIuaGE9Yyk7ZCYmTm0oYixkKTtjbihiLGEpO3JldHVybiBifTtmdW5jdGlvbiB0bihhKXt0aGlzLmE9YTt0aGlzLmI9VmsoKX12YXIgbm49e25hbWU6XCJyZWRpcmVjdFVzZXJcIixGOlwic2Vzc2lvblwifTtmdW5jdGlvbiBvbihhKXtyZXR1cm4gWmsoYS5iLG5uLGEuYSl9ZnVuY3Rpb24gdW4oYSxiKXtyZXR1cm4gYS5iLmdldChubixhLmEpLnRoZW4oZnVuY3Rpb24oYyl7YyYmYiYmKGMuYXV0aERvbWFpbj1iKTtyZXR1cm4gcW4oY3x8e30pfSl9O2Z1bmN0aW9uIHZuKGEpe3RoaXMuYT1hO3RoaXMuYj1WaygpO3RoaXMuYz1udWxsO3RoaXMuZj13bih0aGlzKTt0aGlzLmIuYWRkTGlzdGVuZXIoeG4oXCJsb2NhbFwiKSx0aGlzLmEscSh0aGlzLmcsdGhpcykpfXZuLnByb3RvdHlwZS5nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPXhuKFwibG9jYWxcIik7eW4odGhpcyxmdW5jdGlvbigpe3JldHVybiBFKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBhLmMmJlwibG9jYWxcIiE9YS5jLkY/YS5iLmdldChiLGEuYSk6bnVsbH0pLnRoZW4oZnVuY3Rpb24oYyl7aWYoYylyZXR1cm4gem4oYSxcImxvY2FsXCIpLnRoZW4oZnVuY3Rpb24oKXthLmM9Yn0pfSl9KX07ZnVuY3Rpb24gem4oYSxiKXt2YXIgYz1bXSxkO2ZvcihkIGluIFJrKVJrW2RdIT09YiYmYy5wdXNoKFprKGEuYix4bihSa1tkXSksYS5hKSk7Yy5wdXNoKFprKGEuYixBbixhLmEpKTtyZXR1cm4gSWMoYyl9XG5mdW5jdGlvbiB3bihhKXt2YXIgYj14bihcImxvY2FsXCIpLGM9eG4oXCJzZXNzaW9uXCIpLGQ9eG4oXCJub25lXCIpO3JldHVybiBZayhhLmIsYixhLmEpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5iLmdldChjLGEuYSl9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBlP2M6YS5iLmdldChkLGEuYSkudGhlbihmdW5jdGlvbihmKXtyZXR1cm4gZj9kOmEuYi5nZXQoYixhLmEpLnRoZW4oZnVuY3Rpb24oZyl7cmV0dXJuIGc/YjphLmIuZ2V0KEFuLGEuYSkudGhlbihmdW5jdGlvbihoKXtyZXR1cm4gaD94bihoKTpifSl9KX0pfSkudGhlbihmdW5jdGlvbihlKXthLmM9ZTtyZXR1cm4gem4oYSxlLkYpfSkubyhmdW5jdGlvbigpe2EuY3x8KGEuYz1iKX0pfXZhciBBbj17bmFtZTpcInBlcnNpc3RlbmNlXCIsRjpcInNlc3Npb25cIn07ZnVuY3Rpb24geG4oYSl7cmV0dXJue25hbWU6XCJhdXRoVXNlclwiLEY6YX19XG52bi5wcm90b3R5cGUueWI9ZnVuY3Rpb24oYSl7dmFyIGI9bnVsbCxjPXRoaXM7U2soYSk7cmV0dXJuIHluKHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gYSE9Yy5jLkY/Yy5iLmdldChjLmMsYy5hKS50aGVuKGZ1bmN0aW9uKGQpe2I9ZDtyZXR1cm4gem4oYyxhKX0pLnRoZW4oZnVuY3Rpb24oKXtjLmM9eG4oYSk7aWYoYilyZXR1cm4gYy5iLnNldChjLmMsYixjLmEpfSk6RSgpfSl9O2Z1bmN0aW9uIEJuKGEpe3JldHVybiB5bihhLGZ1bmN0aW9uKCl7cmV0dXJuIGEuYi5zZXQoQW4sYS5jLkYsYS5hKX0pfWZ1bmN0aW9uIENuKGEsYil7cmV0dXJuIHluKGEsZnVuY3Rpb24oKXtyZXR1cm4gYS5iLnNldChhLmMsYi53KCksYS5hKX0pfWZ1bmN0aW9uIERuKGEpe3JldHVybiB5bihhLGZ1bmN0aW9uKCl7cmV0dXJuIFprKGEuYixhLmMsYS5hKX0pfVxuZnVuY3Rpb24gRW4oYSxiLGMpe3JldHVybiB5bihhLGZ1bmN0aW9uKCl7cmV0dXJuIGEuYi5nZXQoYS5jLGEuYSkudGhlbihmdW5jdGlvbihkKXtkJiZiJiYoZC5hdXRoRG9tYWluPWIpO2QmJmMmJihkLmVtdWxhdG9yQ29uZmlnPWMpO3JldHVybiBxbihkfHx7fSl9KX0pfWZ1bmN0aW9uIHluKGEsYil7YS5mPWEuZi50aGVuKGIsYik7cmV0dXJuIGEuZn07ZnVuY3Rpb24gRm4oYSl7dGhpcy5sPSExO00odGhpcyxcInNldHRpbmdzXCIsbmV3IGVtKTtNKHRoaXMsXCJhcHBcIixhKTtpZihTKHRoaXMpLm9wdGlvbnMmJlModGhpcykub3B0aW9ucy5hcGlLZXkpYT1maXJlYmFzZS5TREtfVkVSU0lPTj9PZShmaXJlYmFzZS5TREtfVkVSU0lPTik6bnVsbCx0aGlzLmE9bmV3IElpKFModGhpcykub3B0aW9ucyYmUyh0aGlzKS5vcHRpb25zLmFwaUtleSxDYShEYSksYSk7ZWxzZSB0aHJvdyBuZXcgdChcImludmFsaWQtYXBpLWtleVwiKTt0aGlzLlA9W107dGhpcy5zPVtdO3RoaXMuTj1bXTt0aGlzLlBhPWZpcmViYXNlLklOVEVSTkFMLmNyZWF0ZVN1YnNjcmliZShxKHRoaXMuemMsdGhpcykpO3RoaXMuVz12b2lkIDA7dGhpcy5pYj1maXJlYmFzZS5JTlRFUk5BTC5jcmVhdGVTdWJzY3JpYmUocSh0aGlzLkFjLHRoaXMpKTtHbih0aGlzLG51bGwpO3RoaXMuaT1uZXcgdm4oUyh0aGlzKS5vcHRpb25zLmFwaUtleStcIjpcIitTKHRoaXMpLm5hbWUpO3RoaXMuRD1cbm5ldyB0bihTKHRoaXMpLm9wdGlvbnMuYXBpS2V5K1wiOlwiK1ModGhpcykubmFtZSk7dGhpcy4kPVQodGhpcyxIbih0aGlzKSk7dGhpcy5oPVQodGhpcyxJbih0aGlzKSk7dGhpcy5iYT0hMTt0aGlzLmphPXEodGhpcy5aYyx0aGlzKTt0aGlzLkJhPXEodGhpcy5kYSx0aGlzKTt0aGlzLnFhPXEodGhpcy5tYyx0aGlzKTt0aGlzLnphPXEodGhpcy53Yyx0aGlzKTt0aGlzLkFhPXEodGhpcy54Yyx0aGlzKTt0aGlzLmI9bnVsbDtKbih0aGlzKTt0aGlzLklOVEVSTkFMPXt9O3RoaXMuSU5URVJOQUxbXCJkZWxldGVcIl09cSh0aGlzLmRlbGV0ZSx0aGlzKTt0aGlzLklOVEVSTkFMLmxvZ0ZyYW1ld29yaz1xKHRoaXMuR2MsdGhpcyk7dGhpcy51PTA7SC5jYWxsKHRoaXMpO0tuKHRoaXMpO3RoaXMuSj1bXTt0aGlzLlI9bnVsbH1yKEZuLEgpO2Z1bmN0aW9uIExuKGEpe0cuY2FsbCh0aGlzLFwibGFuZ3VhZ2VDb2RlQ2hhbmdlZFwiKTt0aGlzLmg9YX1yKExuLEcpO1xuZnVuY3Rpb24gTW4oYSl7Ry5jYWxsKHRoaXMsXCJlbXVsYXRvckNvbmZpZ0NoYW5nZWRcIik7dGhpcy5jPWF9cihNbixHKTtmdW5jdGlvbiBObihhKXtHLmNhbGwodGhpcyxcImZyYW1ld29ya0NoYW5nZWRcIik7dGhpcy5mPWF9cihObixHKTtrPUZuLnByb3RvdHlwZTtrLnliPWZ1bmN0aW9uKGEpe2E9dGhpcy5pLnliKGEpO3JldHVybiBUKHRoaXMsYSl9O2sueGE9ZnVuY3Rpb24oYSl7dGhpcy5hYT09PWF8fHRoaXMubHx8KHRoaXMuYWE9YSxPaSh0aGlzLmEsdGhpcy5hYSksdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBMbih0aGlzLmxhKCkpKSl9O2subGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hYX07ay5mZD1mdW5jdGlvbigpe3ZhciBhPWwubmF2aWdhdG9yO3RoaXMueGEoYT9hLmxhbmd1YWdlcyYmYS5sYW5ndWFnZXNbMF18fGEubGFuZ3VhZ2V8fGEudXNlckxhbmd1YWdlfHxudWxsOm51bGwpfTtcbmsuZ2Q9ZnVuY3Rpb24oYSxiKXtpZighdGhpcy5SKXtpZighL15odHRwcz86XFwvXFwvLy50ZXN0KGEpKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixcIkVtdWxhdG9yIFVSTCBtdXN0IHN0YXJ0IHdpdGggYSB2YWxpZCBzY2hlbWUgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pLlwiKTtiPWI/ISFiLmRpc2FibGVXYXJuaW5nczohMTtPbihiKTt0aGlzLlI9e3VybDphLGVjOmJ9O3RoaXMuc2V0dGluZ3MuamI9ITA7UGkodGhpcy5hLHRoaXMuUik7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNbih0aGlzLlIpKX19O1xuZnVuY3Rpb24gT24oYSl7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgY29uc29sZS5pbmZvJiZjb25zb2xlLmluZm8oXCJXQVJOSU5HOiBZb3UgYXJlIHVzaW5nIHRoZSBBdXRoIEVtdWxhdG9yLCB3aGljaCBpcyBpbnRlbmRlZCBmb3IgbG9jYWwgdGVzdGluZyBvbmx5LiAgRG8gbm90IHVzZSB3aXRoIHByb2R1Y3Rpb24gY3JlZGVudGlhbHMuXCIpO2wuZG9jdW1lbnQmJiFhJiZFZSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgYj1sLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5pbm5lclRleHQ9XCJSdW5uaW5nIGluIGVtdWxhdG9yIG1vZGUuIERvIG5vdCB1c2Ugd2l0aCBwcm9kdWN0aW9uIGNyZWRlbnRpYWxzLlwiO2Iuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiO2Iuc3R5bGUud2lkdGg9XCIxMDAlXCI7Yi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjZmZmZmZmXCI7Yi5zdHlsZS5ib3JkZXI9XCIuMWVtIHNvbGlkICMwMDAwMDBcIjtiLnN0eWxlLmNvbG9yPVxuXCIjYjUwMDAwXCI7Yi5zdHlsZS5ib3R0b209XCIwcHhcIjtiLnN0eWxlLmxlZnQ9XCIwcHhcIjtiLnN0eWxlLm1hcmdpbj1cIjBweFwiO2Iuc3R5bGUuekluZGV4PTFFNDtiLnN0eWxlLnRleHRBbGlnbj1cImNlbnRlclwiO2IuY2xhc3NMaXN0LmFkZChcImZpcmViYXNlLWVtdWxhdG9yLXdhcm5pbmdcIik7bC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGIpfSl9ay5HYz1mdW5jdGlvbihhKXt0aGlzLkoucHVzaChhKTtSaSh0aGlzLmEsZmlyZWJhc2UuU0RLX1ZFUlNJT04/T2UoZmlyZWJhc2UuU0RLX1ZFUlNJT04sdGhpcy5KKTpudWxsKTt0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE5uKHRoaXMuSikpfTtrLkdhPWZ1bmN0aW9uKCl7cmV0dXJuIFphKHRoaXMuSil9O2suemI9ZnVuY3Rpb24oYSl7dGhpcy5TPT09YXx8dGhpcy5sfHwodGhpcy5TPWEsdGhpcy5hLmI9dGhpcy5TKX07ay5UPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuU307XG5mdW5jdGlvbiBLbihhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImxjXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxhKCl9LHNldDpmdW5jdGlvbihiKXt0aGlzLnhhKGIpfSxlbnVtZXJhYmxlOiExfSk7YS5hYT1udWxsO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwidGlcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuVCgpfSxzZXQ6ZnVuY3Rpb24oYil7dGhpcy56YihiKX0sZW51bWVyYWJsZTohMX0pO2EuUz1udWxsO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiZW11bGF0b3JDb25maWdcIix7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5SKXt2YXIgYj1KKHRoaXMuUi51cmwpO2I9a2Yoe3Byb3RvY29sOmIuYyxob3N0OmIuYSxwb3J0OmIuZyxvcHRpb25zOmtmKHtkaXNhYmxlV2FybmluZ3M6dGhpcy5SLmVjfSl9KX1lbHNlIGI9bnVsbDtyZXR1cm4gYn0sZW51bWVyYWJsZTohMX0pfVxuay50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm57YXBpS2V5OlModGhpcykub3B0aW9ucy5hcGlLZXksYXV0aERvbWFpbjpTKHRoaXMpLm9wdGlvbnMuYXV0aERvbWFpbixhcHBOYW1lOlModGhpcykubmFtZSxjdXJyZW50VXNlcjpVKHRoaXMpJiZVKHRoaXMpLncoKX19O2Z1bmN0aW9uIFBuKGEpe3JldHVybiBhLk9hfHxGKG5ldyB0KFwiYXV0aC1kb21haW4tY29uZmlnLXJlcXVpcmVkXCIpKX1mdW5jdGlvbiBKbihhKXt2YXIgYj1TKGEpLm9wdGlvbnMuYXV0aERvbWFpbixjPVMoYSkub3B0aW9ucy5hcGlLZXk7YiYmUmUoKSYmKGEuT2E9YS4kLnRoZW4oZnVuY3Rpb24oKXtpZighYS5sKXthLmI9WGwoYixjLFMoYSkubmFtZSxhLlIpO1BsKGEuYixhKTtVKGEpJiZXbShVKGEpKTtpZihhLm0pe1dtKGEubSk7dmFyIGQ9YS5tO2QueGEoYS5sYSgpKTtPbShkLGEpO2Q9YS5tO05tKGQsYS5KKTtRbShkLGEpO2Q9YS5tO01tKGQsYS5SKTtQbShkLGEpO2EubT1udWxsfXJldHVybiBhLmJ9fSkpfVxuay5HYj1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIFwidW5rbm93blwiOmNhc2UgXCJzaWduSW5WaWFSZWRpcmVjdFwiOnJldHVybiEwO2Nhc2UgXCJzaWduSW5WaWFQb3B1cFwiOnJldHVybiB0aGlzLmc9PWImJiEhdGhpcy5mO2RlZmF1bHQ6cmV0dXJuITF9fTtrLm5hPWZ1bmN0aW9uKGEsYixjLGQpe1wic2lnbkluVmlhUG9wdXBcIj09YSYmdGhpcy5nPT1kJiYoYyYmdGhpcy5DP3RoaXMuQyhjKTpiJiYhYyYmdGhpcy5mJiZ0aGlzLmYoYiksdGhpcy5jJiYodGhpcy5jLmNhbmNlbCgpLHRoaXMuYz1udWxsKSxkZWxldGUgdGhpcy5mLGRlbGV0ZSB0aGlzLkMpfTtrLkZhPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJzaWduSW5WaWFSZWRpcmVjdFwiPT1hfHxcInNpZ25JblZpYVBvcHVwXCI9PWEmJnRoaXMuZz09YiYmdGhpcy5mP3EodGhpcy5pYyx0aGlzKTpudWxsfTtcbmsuaWM9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcyxmPXtyZXF1ZXN0VXJpOmEscG9zdEJvZHk6ZCxzZXNzaW9uSWQ6Yix0ZW5hbnRJZDpjfTt0aGlzLmMmJih0aGlzLmMuY2FuY2VsKCksdGhpcy5jPW51bGwpO3JldHVybiBlLiQudGhlbihmdW5jdGlvbigpe3JldHVybiBRbihlLEZnKGUuYSxmKSl9KX07XG5rLlhjPWZ1bmN0aW9uKGEpe2lmKCFSZSgpKXJldHVybiBGKG5ldyB0KFwib3BlcmF0aW9uLW5vdC1zdXBwb3J0ZWQtaW4tdGhpcy1lbnZpcm9ubWVudFwiKSk7dmFyIGI9dGhpcyxjPW5nKGEucHJvdmlkZXJJZCksZD1RZSgpLGU9bnVsbDsoIVRlKCl8fEllKCkpJiZTKHRoaXMpLm9wdGlvbnMuYXV0aERvbWFpbiYmYS5pc09BdXRoUHJvdmlkZXImJihlPWVrKFModGhpcykub3B0aW9ucy5hdXRoRG9tYWluLFModGhpcykub3B0aW9ucy5hcGlLZXksUyh0aGlzKS5uYW1lLFwic2lnbkluVmlhUG9wdXBcIixhLG51bGwsZCxmaXJlYmFzZS5TREtfVkVSU0lPTnx8bnVsbCxudWxsLG51bGwsdGhpcy5UKCksdGhpcy5SKSk7dmFyIGY9emUoZSxjJiZjLnZhLGMmJmMudWEpO2M9UG4odGhpcykudGhlbihmdW5jdGlvbihnKXtyZXR1cm4gVGwoZyxmLFwic2lnbkluVmlhUG9wdXBcIixhLGQsISFlLGIuVCgpKX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEQoZnVuY3Rpb24oZyxoKXtiLm5hKFwic2lnbkluVmlhUG9wdXBcIixcbm51bGwsbmV3IHQoXCJjYW5jZWxsZWQtcG9wdXAtcmVxdWVzdFwiKSxiLmcpO2IuZj1nO2IuQz1oO2IuZz1kO2IuYz1WbChiLmIsYixcInNpZ25JblZpYVBvcHVwXCIsZixkKX0pfSkudGhlbihmdW5jdGlvbihnKXtmJiZ5ZShmKTtyZXR1cm4gZz9rZihnKTpudWxsfSkubyhmdW5jdGlvbihnKXtmJiZ5ZShmKTt0aHJvdyBnO30pO3JldHVybiBUKHRoaXMsYyl9O2suWWM9ZnVuY3Rpb24oYSl7aWYoIVJlKCkpcmV0dXJuIEYobmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTt2YXIgYj10aGlzLGM9UG4odGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBCbihiLmkpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBVbChiLmIsXCJzaWduSW5WaWFSZWRpcmVjdFwiLGEsdm9pZCAwLGIuVCgpKX0pO3JldHVybiBUKHRoaXMsYyl9O1xuZnVuY3Rpb24gUm4oYSl7aWYoIVJlKCkpcmV0dXJuIEYobmV3IHQoXCJvcGVyYXRpb24tbm90LXN1cHBvcnRlZC1pbi10aGlzLWVudmlyb25tZW50XCIpKTt2YXIgYj1QbihhKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEuYi5yYSgpfSkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYz9rZihjKTpudWxsfSk7cmV0dXJuIFQoYSxiKX1rLnJhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gUm4odGhpcykudGhlbihmdW5jdGlvbihiKXthLmImJiRsKGEuYi5iKTtyZXR1cm4gYn0pLm8oZnVuY3Rpb24oYil7YS5iJiYkbChhLmIuYik7dGhyb3cgYjt9KX07XG5rLmRkPWZ1bmN0aW9uKGEpe2lmKCFhKXJldHVybiBGKG5ldyB0KFwibnVsbC11c2VyXCIpKTtpZih0aGlzLlMhPWEudGVuYW50SWQpcmV0dXJuIEYobmV3IHQoXCJ0ZW5hbnQtaWQtbWlzbWF0Y2hcIikpO3ZhciBiPXRoaXMsYz17fTtjLmFwaUtleT1TKHRoaXMpLm9wdGlvbnMuYXBpS2V5O2MuYXV0aERvbWFpbj1TKHRoaXMpLm9wdGlvbnMuYXV0aERvbWFpbjtjLmFwcE5hbWU9Uyh0aGlzKS5uYW1lO3ZhciBkPXNuKGEsYyxiLkQsYi5HYSgpKTtyZXR1cm4gVCh0aGlzLHRoaXMuaC50aGVuKGZ1bmN0aW9uKCl7aWYoUyhiKS5vcHRpb25zLmFwaUtleSE9YS5sKXJldHVybiBkLnJlbG9hZCgpfSkudGhlbihmdW5jdGlvbigpe2lmKFUoYikmJmEudWlkPT1VKGIpLnVpZClyZXR1cm4gY24oVShiKSxhKSxiLmRhKGEpO0duKGIsZCk7V20oZCk7cmV0dXJuIGIuZGEoZCl9KS50aGVuKGZ1bmN0aW9uKCl7U24oYil9KSl9O1xuZnVuY3Rpb24gVG4oYSxiKXt2YXIgYz17fTtjLmFwaUtleT1TKGEpLm9wdGlvbnMuYXBpS2V5O2MuYXV0aERvbWFpbj1TKGEpLm9wdGlvbnMuYXV0aERvbWFpbjtjLmFwcE5hbWU9UyhhKS5uYW1lO2EuUiYmKGMuZW11bGF0b3JDb25maWc9YS5SKTtyZXR1cm4gYS4kLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gcm4oYyxiLGEuRCxhLkdhKCkpfSkudGhlbihmdW5jdGlvbihkKXtpZihVKGEpJiZkLnVpZD09VShhKS51aWQpcmV0dXJuIGNuKFUoYSksZCksYS5kYShkKTtHbihhLGQpO1dtKGQpO3JldHVybiBhLmRhKGQpfSkudGhlbihmdW5jdGlvbigpe1NuKGEpfSl9XG5mdW5jdGlvbiBHbihhLGIpe1UoYSkmJihVbShVKGEpLGEuQmEpLHhkKFUoYSksXCJ0b2tlbkNoYW5nZWRcIixhLnFhKSx4ZChVKGEpLFwidXNlckRlbGV0ZWRcIixhLnphKSx4ZChVKGEpLFwidXNlckludmFsaWRhdGVkXCIsYS5BYSksVG0oVShhKSkpO2ImJihiLlcucHVzaChhLkJhKSxuZChiLFwidG9rZW5DaGFuZ2VkXCIsYS5xYSksbmQoYixcInVzZXJEZWxldGVkXCIsYS56YSksbmQoYixcInVzZXJJbnZhbGlkYXRlZFwiLGEuQWEpLDA8YS51JiZTbShiKSk7TShhLFwiY3VycmVudFVzZXJcIixiKTtiJiYoYi54YShhLmxhKCkpLE9tKGIsYSksTm0oYixhLkopLFFtKGIsYSksTW0oYixhLlIpLFBtKGIsYSkpfWsuQmI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9dGhpcy5oLnRoZW4oZnVuY3Rpb24oKXthLmImJiRsKGEuYi5iKTtpZighVShhKSlyZXR1cm4gRSgpO0duKGEsbnVsbCk7cmV0dXJuIERuKGEuaSkudGhlbihmdW5jdGlvbigpe1NuKGEpfSl9KTtyZXR1cm4gVCh0aGlzLGIpfTtcbmZ1bmN0aW9uIFVuKGEpe3ZhciBiPXVuKGEuRCxTKGEpLm9wdGlvbnMuYXV0aERvbWFpbikudGhlbihmdW5jdGlvbihjKXtpZihhLm09YyljLmhhPWEuRDtyZXR1cm4gb24oYS5EKX0pO3JldHVybiBUKGEsYil9ZnVuY3Rpb24gSG4oYSl7dmFyIGI9UyhhKS5vcHRpb25zLmF1dGhEb21haW4sYz1VbihhKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIEVuKGEuaSxiLGEuUil9KS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBkPyhkLmhhPWEuRCxhLm0mJihhLm0uZ2F8fG51bGwpPT0oZC5nYXx8bnVsbCk/ZDpkLnJlbG9hZCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gQ24oYS5pLGQpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZH0pfSkubyhmdW5jdGlvbihlKXtyZXR1cm5cImF1dGgvbmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiPT1lLmNvZGU/ZDpEbihhLmkpfSkpOm51bGx9KS50aGVuKGZ1bmN0aW9uKGQpe0duKGEsZHx8bnVsbCl9KTtyZXR1cm4gVChhLGMpfVxuZnVuY3Rpb24gSW4oYSl7cmV0dXJuIGEuJC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFJuKGEpfSkubyhmdW5jdGlvbigpe30pLnRoZW4oZnVuY3Rpb24oKXtpZighYS5sKXJldHVybiBhLmphKCl9KS5vKGZ1bmN0aW9uKCl7fSkudGhlbihmdW5jdGlvbigpe2lmKCFhLmwpe2EuYmE9ITA7dmFyIGI9YS5pO2IuYi5hZGRMaXN0ZW5lcih4bihcImxvY2FsXCIpLGIuYSxhLmphKX19KX1cbmsuWmM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBFbih0aGlzLmksUyh0aGlzKS5vcHRpb25zLmF1dGhEb21haW4pLnRoZW4oZnVuY3Rpb24oYil7aWYoIWEubCl7dmFyIGM7aWYoYz1VKGEpJiZiKXtjPVUoYSkudWlkO3ZhciBkPWIudWlkO2M9dm9pZCAwPT09Y3x8bnVsbD09PWN8fFwiXCI9PT1jfHx2b2lkIDA9PT1kfHxudWxsPT09ZHx8XCJcIj09PWQ/ITE6Yz09ZH1pZihjKXJldHVybiBjbihVKGEpLGIpLFUoYSkuSSgpO2lmKFUoYSl8fGIpR24oYSxiKSxiJiYoV20oYiksYi5oYT1hLkQpLGEuYiYmUGwoYS5iLGEpLFNuKGEpfX0pfTtrLmRhPWZ1bmN0aW9uKGEpe3JldHVybiBDbih0aGlzLmksYSl9O2subWM9ZnVuY3Rpb24oKXtTbih0aGlzKTt0aGlzLmRhKFUodGhpcykpfTtrLndjPWZ1bmN0aW9uKCl7dGhpcy5CYigpfTtrLnhjPWZ1bmN0aW9uKCl7dGhpcy5CYigpfTtcbmZ1bmN0aW9uIFFuKGEsYil7dmFyIGM9bnVsbCxkPW51bGw7cmV0dXJuIFQoYSxiLnRoZW4oZnVuY3Rpb24oZSl7Yz1xaChlKTtkPW9nKGUpO3JldHVybiBUbihhLGUpfSxmdW5jdGlvbihlKXt2YXIgZj1udWxsO2UmJlwiYXV0aC9tdWx0aS1mYWN0b3ItYXV0aC1yZXF1aXJlZFwiPT09ZS5jb2RlJiYoZj1tbShlLncoKSxhLHEoYS5rYyxhKSkpO3Rocm93IGZ8fGU7fSkudGhlbihmdW5jdGlvbigpe3JldHVybiBrZih7dXNlcjpVKGEpLGNyZWRlbnRpYWw6YyxhZGRpdGlvbmFsVXNlckluZm86ZCxvcGVyYXRpb25UeXBlOlwic2lnbkluXCJ9KX0pKX1rLmtjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7cmV0dXJuIHRoaXMuaC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFFuKGIsRShhKSl9KX07ay56Yz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuYWRkQXV0aFRva2VuTGlzdGVuZXIoZnVuY3Rpb24oKXthLm5leHQoVShiKSl9KX07XG5rLkFjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7Vm4odGhpcyxmdW5jdGlvbigpe2EubmV4dChVKGIpKX0pfTtrLkljPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzO3RoaXMuYmEmJlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hKFUoZCkpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLm5leHQmJmEubmV4dChVKGQpKX0pO3JldHVybiB0aGlzLlBhKGEsYixjKX07ay5IYz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpczt0aGlzLmJhJiZQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7ZC5XPWQuZ2V0VWlkKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YShVKGQpKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5uZXh0JiZhLm5leHQoVShkKSl9KTtyZXR1cm4gdGhpcy5pYihhLGIsYyl9O1xuay5uYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9dGhpcy5oLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gVShiKT9VKGIpLkkoYSkudGhlbihmdW5jdGlvbihkKXtyZXR1cm57YWNjZXNzVG9rZW46ZH19KTpudWxsfSk7cmV0dXJuIFQodGhpcyxjKX07ay5UYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmgudGhlbihmdW5jdGlvbigpe3JldHVybiBRbihiLE8oYi5hLEtqLHt0b2tlbjphfSkpfSkudGhlbihmdW5jdGlvbihjKXt2YXIgZD1jLnVzZXI7Ym4oZCxcImlzQW5vbnltb3VzXCIsITEpO2IuZGEoZCk7cmV0dXJuIGN9KX07ay5VYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIHRoaXMuaC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIFFuKGMsTyhjLmEsYWgse2VtYWlsOmEscGFzc3dvcmQ6Yn0pKX0pfTtcbmsuZGM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiB0aGlzLmgudGhlbihmdW5jdGlvbigpe3JldHVybiBRbihjLE8oYy5hLEVqLHtlbWFpbDphLHBhc3N3b3JkOmJ9KSl9KX07ay5hYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLmgudGhlbihmdW5jdGlvbigpe3JldHVybiBRbihiLGEua2EoYi5hKSl9KX07ay5TYz1mdW5jdGlvbihhKXtnZihcImZpcmViYXNlLmF1dGguQXV0aC5wcm90b3R5cGUuc2lnbkluQW5kUmV0cmlldmVEYXRhV2l0aENyZWRlbnRpYWwgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBmaXJlYmFzZS5hdXRoLkF1dGgucHJvdG90eXBlLnNpZ25JbldpdGhDcmVkZW50aWFsIGluc3RlYWQuXCIpO3JldHVybiB0aGlzLmFiKGEpfTtcbmsuQWI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiB0aGlzLmgudGhlbihmdW5jdGlvbigpe3ZhciBiPVUoYSk7aWYoYiYmYi5pc0Fub255bW91cyl7dmFyIGM9a2Yoe3Byb3ZpZGVySWQ6bnVsbCxpc05ld1VzZXI6ITF9KTtyZXR1cm4ga2Yoe3VzZXI6YixjcmVkZW50aWFsOm51bGwsYWRkaXRpb25hbFVzZXJJbmZvOmMsb3BlcmF0aW9uVHlwZTpcInNpZ25JblwifSl9cmV0dXJuIFFuKGEsYS5hLkFiKCkpLnRoZW4oZnVuY3Rpb24oZCl7dmFyIGU9ZC51c2VyO2JuKGUsXCJpc0Fub255bW91c1wiLCEwKTthLmRhKGUpO3JldHVybiBkfSl9KX07ZnVuY3Rpb24gUyhhKXtyZXR1cm4gYS5hcHB9ZnVuY3Rpb24gVShhKXtyZXR1cm4gYS5jdXJyZW50VXNlcn1rLmdldFVpZD1mdW5jdGlvbigpe3JldHVybiBVKHRoaXMpJiZVKHRoaXMpLnVpZHx8bnVsbH07ZnVuY3Rpb24gV24oYSl7cmV0dXJuIFUoYSkmJlUoYSkuX2xhdHx8bnVsbH1cbmZ1bmN0aW9uIFNuKGEpe2lmKGEuYmEpe2Zvcih2YXIgYj0wO2I8YS5zLmxlbmd0aDtiKyspaWYoYS5zW2JdKWEuc1tiXShXbihhKSk7aWYoYS5XIT09YS5nZXRVaWQoKSYmYS5OLmxlbmd0aClmb3IoYS5XPWEuZ2V0VWlkKCksYj0wO2I8YS5OLmxlbmd0aDtiKyspaWYoYS5OW2JdKWEuTltiXShXbihhKSl9fWsuY2M9ZnVuY3Rpb24oYSl7dGhpcy5hZGRBdXRoVG9rZW5MaXN0ZW5lcihhKTt0aGlzLnUrKzswPHRoaXMudSYmVSh0aGlzKSYmU20oVSh0aGlzKSl9O2suUGM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt3KHRoaXMucyxmdW5jdGlvbihjKXtjPT1hJiZiLnUtLX0pOzA+dGhpcy51JiYodGhpcy51PTApOzA9PXRoaXMudSYmVSh0aGlzKSYmVG0oVSh0aGlzKSk7dGhpcy5yZW1vdmVBdXRoVG9rZW5MaXN0ZW5lcihhKX07XG5rLmFkZEF1dGhUb2tlbkxpc3RlbmVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5zLnB1c2goYSk7VCh0aGlzLHRoaXMuaC50aGVuKGZ1bmN0aW9uKCl7Yi5sfHxWYShiLnMsYSkmJmEoV24oYikpfSkpfTtrLnJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyPWZ1bmN0aW9uKGEpe1hhKHRoaXMucyxmdW5jdGlvbihiKXtyZXR1cm4gYj09YX0pfTtmdW5jdGlvbiBWbihhLGIpe2EuTi5wdXNoKGIpO1QoYSxhLmgudGhlbihmdW5jdGlvbigpeyFhLmwmJlZhKGEuTixiKSYmYS5XIT09YS5nZXRVaWQoKSYmKGEuVz1hLmdldFVpZCgpLGIoV24oYSkpKX0pKX1cbmsuZGVsZXRlPWZ1bmN0aW9uKCl7dGhpcy5sPSEwO2Zvcih2YXIgYT0wO2E8dGhpcy5QLmxlbmd0aDthKyspdGhpcy5QW2FdLmNhbmNlbChcImFwcC1kZWxldGVkXCIpO3RoaXMuUD1bXTt0aGlzLmkmJihhPXRoaXMuaSxhLmIucmVtb3ZlTGlzdGVuZXIoeG4oXCJsb2NhbFwiKSxhLmEsdGhpcy5qYSkpO3RoaXMuYiYmKFFsKHRoaXMuYix0aGlzKSwkbCh0aGlzLmIuYikpO3JldHVybiBQcm9taXNlLnJlc29sdmUoKX07ZnVuY3Rpb24gVChhLGIpe2EuUC5wdXNoKGIpO2Iub2EoZnVuY3Rpb24oKXtXYShhLlAsYil9KTtyZXR1cm4gYn1rLmhjPWZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsYWoodGhpcy5hLGEpKX07ay5CYz1mdW5jdGlvbihhKXtyZXR1cm4hIWZoKGEpfTtcbmsueGI9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBUKHRoaXMsRSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgZD1uZXcgU2YoYik7aWYoIWQuYyl0aHJvdyBuZXcgdChcImFyZ3VtZW50LWVycm9yXCIsJGYrXCIgbXVzdCBiZSB0cnVlIHdoZW4gc2VuZGluZyBzaWduIGluIGxpbmsgdG8gZW1haWxcIik7cmV0dXJuIGJnKGQpfSkudGhlbihmdW5jdGlvbihkKXtyZXR1cm4gYy5hLnhiKGEsZCl9KS50aGVuKGZ1bmN0aW9uKCl7fSkpfTtrLmpkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlNhKGEpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIGIuZGF0YS5lbWFpbH0pfTtrLm9iPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyx0aGlzLmEub2IoYSxiKS50aGVuKGZ1bmN0aW9uKCl7fSkpfTtrLlNhPWZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsdGhpcy5hLlNhKGEpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIG5ldyB2ZihiKX0pKX07XG5rLmtiPWZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsdGhpcy5hLmtiKGEpLnRoZW4oZnVuY3Rpb24oKXt9KSl9O2sud2I9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBUKHRoaXMsRSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fG1iKGIpP3t9OmJnKG5ldyBTZihiKSl9KS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBjLmEud2IoYSxkKX0pLnRoZW4oZnVuY3Rpb24oKXt9KSl9O2suV2M9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLGdtKHRoaXMsYSxiLHEodGhpcy5hYix0aGlzKSkpfTtcbmsuVmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBUKHRoaXMsRSgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgZD1ifHxyZSgpLGU9ZWgoYSxkKTtkPWZoKGQpO2lmKCFkKXRocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixcIkludmFsaWQgZW1haWwgbGluayFcIik7aWYoZC50ZW5hbnRJZCE9PWMuVCgpKXRocm93IG5ldyB0KFwidGVuYW50LWlkLW1pc21hdGNoXCIpO3JldHVybiBjLmFiKGUpfSkpfTtmdW5jdGlvbiBYbigpe31Ybi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7fTtYbi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt9O1huLnByb3RvdHlwZS5nZXRSZXNwb25zZT1mdW5jdGlvbigpe307WG4ucHJvdG90eXBlLmV4ZWN1dGU9ZnVuY3Rpb24oKXt9O2Z1bmN0aW9uIFluKCl7dGhpcy5hPXt9O3RoaXMuYj0xRTEyfXZhciBabj1udWxsO1luLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSxiKXt0aGlzLmFbdGhpcy5iLnRvU3RyaW5nKCldPW5ldyAkbihhLGIpO3JldHVybiB0aGlzLmIrK307WW4ucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKGEpe3ZhciBiPWFvKHRoaXMsYSk7YT1ibyhhKTtiJiZhJiYoYi5kZWxldGUoKSxkZWxldGUgdGhpcy5hW2FdKX07WW4ucHJvdG90eXBlLmdldFJlc3BvbnNlPWZ1bmN0aW9uKGEpe3JldHVybihhPWFvKHRoaXMsYSkpP2EuZ2V0UmVzcG9uc2UoKTpudWxsfTtZbi5wcm90b3R5cGUuZXhlY3V0ZT1mdW5jdGlvbihhKXsoYT1hbyh0aGlzLGEpKSYmYS5leGVjdXRlKCl9O2Z1bmN0aW9uIGFvKGEsYil7cmV0dXJuKGI9Ym8oYikpP2EuYVtiXXx8bnVsbDpudWxsfWZ1bmN0aW9uIGJvKGEpe3JldHVybihhPVwidW5kZWZpbmVkXCI9PT10eXBlb2YgYT8xRTEyOmEpP2EudG9TdHJpbmcoKTpudWxsfVxuZnVuY3Rpb24gJG4oYSxiKXt0aGlzLmc9ITE7dGhpcy5jPWI7dGhpcy5hPXRoaXMuYj1udWxsO3RoaXMuaD1cImludmlzaWJsZVwiIT09dGhpcy5jLnNpemU7dGhpcy5mPWtjKGEpO3ZhciBjPXRoaXM7dGhpcy5pPWZ1bmN0aW9uKCl7Yy5leGVjdXRlKCl9O3RoaXMuaD90aGlzLmV4ZWN1dGUoKTpuZCh0aGlzLmYsXCJjbGlja1wiLHRoaXMuaSl9JG4ucHJvdG90eXBlLmdldFJlc3BvbnNlPWZ1bmN0aW9uKCl7Y28odGhpcyk7cmV0dXJuIHRoaXMuYn07XG4kbi5wcm90b3R5cGUuZXhlY3V0ZT1mdW5jdGlvbigpe2NvKHRoaXMpO3ZhciBhPXRoaXM7dGhpcy5hfHwodGhpcy5hPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmI9TWUoKTt2YXIgYj1hLmMuY2FsbGJhY2ssYz1hLmNbXCJleHBpcmVkLWNhbGxiYWNrXCJdO2lmKGIpdHJ5e2IoYS5iKX1jYXRjaChkKXt9YS5hPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmE9bnVsbDthLmI9bnVsbDtpZihjKXRyeXtjKCl9Y2F0Y2goZCl7fWEuaCYmYS5leGVjdXRlKCl9LDZFNCl9LDUwMCkpfTskbi5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKCl7Y28odGhpcyk7dGhpcy5nPSEwO2NsZWFyVGltZW91dCh0aGlzLmEpO3RoaXMuYT1udWxsO3hkKHRoaXMuZixcImNsaWNrXCIsdGhpcy5pKX07ZnVuY3Rpb24gY28oYSl7aWYoYS5nKXRocm93IEVycm9yKFwicmVDQVBUQ0hBIG1vY2sgd2FzIGFscmVhZHkgZGVsZXRlZCFcIik7fTtmdW5jdGlvbiBlbygpe31NKGVvLFwiRkFDVE9SX0lEXCIsXCJwaG9uZVwiKTtmdW5jdGlvbiBmbygpe31mby5wcm90b3R5cGUuZz1mdW5jdGlvbigpe1pufHwoWm49bmV3IFluKTtyZXR1cm4gRShabil9O2ZvLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7fTt2YXIgZ289bnVsbDtmdW5jdGlvbiBobygpe3RoaXMuYj1sLmdyZWNhcHRjaGE/SW5maW5pdHk6MDt0aGlzLmY9bnVsbDt0aGlzLmE9XCJfX3JjYlwiK01hdGguZmxvb3IoMUU2Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCl9dmFyIGlvPW5ldyBxYihyYixcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9vbmxvYWQ9JXtvbmxvYWR9JnJlbmRlcj1leHBsaWNpdCZobD0le2hsfVwiKSxqbz1uZXcgWmUoM0U0LDZFNCk7XG5oby5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3JldHVybiBuZXcgRChmdW5jdGlvbihjLGQpe3ZhciBlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtkKG5ldyB0KFwibmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiKSl9LGpvLmdldCgpKTtpZighbC5ncmVjYXB0Y2hhfHxhIT09Yi5mJiYhYi5iKXtsW2IuYV09ZnVuY3Rpb24oKXtpZihsLmdyZWNhcHRjaGEpe2IuZj1hO3ZhciBnPWwuZ3JlY2FwdGNoYS5yZW5kZXI7bC5ncmVjYXB0Y2hhLnJlbmRlcj1mdW5jdGlvbihoLG0pe2g9ZyhoLG0pO2IuYisrO3JldHVybiBofTtjbGVhclRpbWVvdXQoZSk7YyhsLmdyZWNhcHRjaGEpfWVsc2UgY2xlYXJUaW1lb3V0KGUpLGQobmV3IHQoXCJpbnRlcm5hbC1lcnJvclwiKSk7ZGVsZXRlIGxbYi5hXX07dmFyIGY9emIoaW8se29ubG9hZDpiLmEsaGw6YXx8XCJcIn0pO0UoQmkoZikpLm8oZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZSk7ZChuZXcgdChcImludGVybmFsLWVycm9yXCIsXCJVbmFibGUgdG8gbG9hZCBleHRlcm5hbCByZUNBUFRDSEEgZGVwZW5kZW5jaWVzIVwiKSl9KX1lbHNlIGNsZWFyVGltZW91dChlKSxcbmMobC5ncmVjYXB0Y2hhKX0pfTtoby5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3RoaXMuYi0tfTt2YXIga289bnVsbDtmdW5jdGlvbiBsbyhhLGIsYyxkLGUsZixnKXtNKHRoaXMsXCJ0eXBlXCIsXCJyZWNhcHRjaGFcIik7dGhpcy5jPXRoaXMuZj1udWxsO3RoaXMuSj0hMTt0aGlzLnY9Yjt0aGlzLmc9bnVsbDtnPyhnb3x8KGdvPW5ldyBmbyksZz1nbyk6KGtvfHwoa289bmV3IGhvKSxnPWtvKTt0aGlzLm09Zzt0aGlzLmE9Y3x8e3RoZW1lOlwibGlnaHRcIix0eXBlOlwiaW1hZ2VcIn07dGhpcy5oPVtdO2lmKHRoaXMuYVttb10pdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLFwic2l0ZWtleSBzaG91bGQgbm90IGJlIHByb3ZpZGVkIGZvciByZUNBUFRDSEEgYXMgb25lIGlzIGF1dG9tYXRpY2FsbHkgcHJvdmlzaW9uZWQgZm9yIHRoZSBjdXJyZW50IHByb2plY3QuXCIpO3RoaXMuaT1cImludmlzaWJsZVwiPT09dGhpcy5hW25vXTtpZighbC5kb2N1bWVudCl0aHJvdyBuZXcgdChcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIixcIlJlY2FwdGNoYVZlcmlmaWVyIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgYnJvd3NlciBIVFRQL0hUVFBTIGVudmlyb25tZW50IHdpdGggRE9NIHN1cHBvcnQuXCIpO1xuaWYoIWtjKGIpfHwhdGhpcy5pJiZrYyhiKS5oYXNDaGlsZE5vZGVzKCkpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLFwicmVDQVBUQ0hBIGNvbnRhaW5lciBpcyBlaXRoZXIgbm90IGZvdW5kIG9yIGFscmVhZHkgY29udGFpbnMgaW5uZXIgZWxlbWVudHMhXCIpO3RoaXMucz1uZXcgSWkoYSxmfHxudWxsLGV8fG51bGwpO3RoaXMudT1kfHxmdW5jdGlvbigpe3JldHVybiBudWxsfTt2YXIgaD10aGlzO3RoaXMubD1bXTt2YXIgbT10aGlzLmFbb29dO3RoaXMuYVtvb109ZnVuY3Rpb24odil7cG8oaCx2KTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSltKHYpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBtKXt2YXIgQj1MKG0sbCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIEImJkIodil9fTt2YXIgcD10aGlzLmFbcW9dO3RoaXMuYVtxb109ZnVuY3Rpb24oKXtwbyhoLG51bGwpO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBwKXAoKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgcCl7dmFyIHY9XG5MKHAsbCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIHYmJnYoKX19fXZhciBvbz1cImNhbGxiYWNrXCIscW89XCJleHBpcmVkLWNhbGxiYWNrXCIsbW89XCJzaXRla2V5XCIsbm89XCJzaXplXCI7ZnVuY3Rpb24gcG8oYSxiKXtmb3IodmFyIGM9MDtjPGEubC5sZW5ndGg7YysrKXRyeXthLmxbY10oYil9Y2F0Y2goZCl7fX1mdW5jdGlvbiBybyhhLGIpe1hhKGEubCxmdW5jdGlvbihjKXtyZXR1cm4gYz09Yn0pfWZ1bmN0aW9uIHNvKGEsYil7YS5oLnB1c2goYik7Yi5vYShmdW5jdGlvbigpe1dhKGEuaCxiKX0pO3JldHVybiBifWs9bG8ucHJvdG90eXBlO1xuay5JYT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIHRoaXMuZj90aGlzLmY6dGhpcy5mPXNvKHRoaXMsRSgpLnRoZW4oZnVuY3Rpb24oKXtpZihTZSgpJiYhSmUoKSlyZXR1cm4gRWUoKTt0aHJvdyBuZXcgdChcIm9wZXJhdGlvbi1ub3Qtc3VwcG9ydGVkLWluLXRoaXMtZW52aXJvbm1lbnRcIixcIlJlY2FwdGNoYVZlcmlmaWVyIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgYnJvd3NlciBIVFRQL0hUVFBTIGVudmlyb25tZW50LlwiKTt9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEubS5nKGEudSgpKX0pLnRoZW4oZnVuY3Rpb24oYil7YS5nPWI7cmV0dXJuIE8oYS5zLEpqLHt9KX0pLnRoZW4oZnVuY3Rpb24oYil7YS5hW21vXT1iLnJlY2FwdGNoYVNpdGVLZXl9KS5vKGZ1bmN0aW9uKGIpe2EuZj1udWxsO3Rocm93IGI7fSkpfTtcbmsucmVuZGVyPWZ1bmN0aW9uKCl7dG8odGhpcyk7dmFyIGE9dGhpcztyZXR1cm4gc28odGhpcyx0aGlzLklhKCkudGhlbihmdW5jdGlvbigpe2lmKG51bGw9PT1hLmMpe3ZhciBiPWEudjtpZighYS5pKXt2YXIgYz1rYyhiKTtiPW5jKFwiRElWXCIpO2MuYXBwZW5kQ2hpbGQoYil9YS5jPWEuZy5yZW5kZXIoYixhLmEpfXJldHVybiBhLmN9KSl9O2sudmVyaWZ5PWZ1bmN0aW9uKCl7dG8odGhpcyk7dmFyIGE9dGhpcztyZXR1cm4gc28odGhpcyx0aGlzLnJlbmRlcigpLnRoZW4oZnVuY3Rpb24oYil7cmV0dXJuIG5ldyBEKGZ1bmN0aW9uKGMpe3ZhciBkPWEuZy5nZXRSZXNwb25zZShiKTtpZihkKWMoZCk7ZWxzZXt2YXIgZT1mdW5jdGlvbihmKXtmJiYocm8oYSxlKSxjKGYpKX07YS5sLnB1c2goZSk7YS5pJiZhLmcuZXhlY3V0ZShhLmMpfX0pfSkpfTtrLnJlc2V0PWZ1bmN0aW9uKCl7dG8odGhpcyk7bnVsbCE9PXRoaXMuYyYmdGhpcy5nLnJlc2V0KHRoaXMuYyl9O1xuZnVuY3Rpb24gdG8oYSl7aWYoYS5KKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIlJlY2FwdGNoYVZlcmlmaWVyIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZC5cIik7fWsuY2xlYXI9ZnVuY3Rpb24oKXt0byh0aGlzKTt0aGlzLko9ITA7dGhpcy5tLmMoKTtmb3IodmFyIGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKXRoaXMuaFthXS5jYW5jZWwoXCJSZWNhcHRjaGFWZXJpZmllciBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQuXCIpO2lmKCF0aGlzLmkpe2E9a2ModGhpcy52KTtmb3IodmFyIGI7Yj1hLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYil9fTtcbmZ1bmN0aW9uIHVvKGEsYixjKXt2YXIgZD0hMTt0cnl7dGhpcy5iPWN8fGZpcmViYXNlLmFwcCgpfWNhdGNoKGcpe3Rocm93IG5ldyB0KFwiYXJndW1lbnQtZXJyb3JcIixcIk5vIGZpcmViYXNlLmFwcC5BcHAgaW5zdGFuY2UgaXMgY3VycmVudGx5IGluaXRpYWxpemVkLlwiKTt9aWYodGhpcy5iLm9wdGlvbnMmJnRoaXMuYi5vcHRpb25zLmFwaUtleSljPXRoaXMuYi5vcHRpb25zLmFwaUtleTtlbHNlIHRocm93IG5ldyB0KFwiaW52YWxpZC1hcGkta2V5XCIpO3ZhciBlPXRoaXMsZj1udWxsO3RyeXtmPXRoaXMuYi5hdXRoKCkuR2EoKX1jYXRjaChnKXt9dHJ5e2Q9dGhpcy5iLmF1dGgoKS5zZXR0aW5ncy5hcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3Rpbmd9Y2F0Y2goZyl7fWY9ZmlyZWJhc2UuU0RLX1ZFUlNJT04/T2UoZmlyZWJhc2UuU0RLX1ZFUlNJT04sZik6bnVsbDtsby5jYWxsKHRoaXMsYyxhLGIsZnVuY3Rpb24oKXt0cnl7dmFyIGc9ZS5iLmF1dGgoKS5sYSgpfWNhdGNoKGgpe2c9XG5udWxsfXJldHVybiBnfSxmLENhKERhKSxkKX1yKHVvLGxvKTtmdW5jdGlvbiB2byhhLGIsYyxkKXthOntjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMpO3ZhciBlPTA7Zm9yKHZhciBmPSExLGc9MDtnPGIubGVuZ3RoO2crKylpZihiW2ddLm9wdGlvbmFsKWY9ITA7ZWxzZXtpZihmKXRocm93IG5ldyB0KFwiaW50ZXJuYWwtZXJyb3JcIixcIkFyZ3VtZW50IHZhbGlkYXRvciBlbmNvdW50ZXJlZCBhIHJlcXVpcmVkIGFyZ3VtZW50IGFmdGVyIGFuIG9wdGlvbmFsIGFyZ3VtZW50LlwiKTtlKyt9Zj1iLmxlbmd0aDtpZihjLmxlbmd0aDxlfHxmPGMubGVuZ3RoKWQ9XCJFeHBlY3RlZCBcIisoZT09Zj8xPT1lP1wiMSBhcmd1bWVudFwiOmUrXCIgYXJndW1lbnRzXCI6ZStcIi1cIitmK1wiIGFyZ3VtZW50c1wiKStcIiBidXQgZ290IFwiK2MubGVuZ3RoK1wiLlwiO2Vsc2V7Zm9yKGU9MDtlPGMubGVuZ3RoO2UrKylpZihmPWJbZV0ub3B0aW9uYWwmJnZvaWQgMD09PWNbZV0sIWJbZV0uTShjW2VdKSYmIWYpe2I9YltlXTtpZigwPmV8fGU+PXdvLmxlbmd0aCl0aHJvdyBuZXcgdChcImludGVybmFsLWVycm9yXCIsXG5cIkFyZ3VtZW50IHZhbGlkYXRvciByZWNlaXZlZCBhbiB1bnN1cHBvcnRlZCBudW1iZXIgb2YgYXJndW1lbnRzLlwiKTtjPXdvW2VdO2Q9KGQ/XCJcIjpjK1wiIGFyZ3VtZW50IFwiKSsoYi5uYW1lPydcIicrYi5uYW1lKydcIiAnOlwiXCIpK1wibXVzdCBiZSBcIitiLksrXCIuXCI7YnJlYWsgYX1kPW51bGx9fWlmKGQpdGhyb3cgbmV3IHQoXCJhcmd1bWVudC1lcnJvclwiLGErXCIgZmFpbGVkOiBcIitkKTt9dmFyIHdvPVwiRmlyc3QgU2Vjb25kIFRoaXJkIEZvdXJ0aCBGaWZ0aCBTaXh0aCBTZXZlbnRoIEVpZ2h0aCBOaW50aFwiLnNwbGl0KFwiIFwiKTtmdW5jdGlvbiBWKGEsYil7cmV0dXJue25hbWU6YXx8XCJcIixLOlwiYSB2YWxpZCBzdHJpbmdcIixvcHRpb25hbDohIWIsTTpmdW5jdGlvbihjKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGN9fX1cbmZ1bmN0aW9uIHhvKGEsYil7cmV0dXJue25hbWU6YXx8XCJcIixLOlwiYSBib29sZWFuXCIsb3B0aW9uYWw6ISFiLE06ZnVuY3Rpb24oYyl7cmV0dXJuXCJib29sZWFuXCI9PT10eXBlb2YgY319fWZ1bmN0aW9uIFcoYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLEs6XCJhIHZhbGlkIG9iamVjdFwiLG9wdGlvbmFsOiEhYixNOm59fWZ1bmN0aW9uIHlvKGEsYil7cmV0dXJue25hbWU6YXx8XCJcIixLOlwiYSBmdW5jdGlvblwiLG9wdGlvbmFsOiEhYixNOmZ1bmN0aW9uKGMpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBjfX19ZnVuY3Rpb24gem8oYSxiKXtyZXR1cm57bmFtZTphfHxcIlwiLEs6XCJudWxsXCIsb3B0aW9uYWw6ISFiLE06ZnVuY3Rpb24oYyl7cmV0dXJuIG51bGw9PT1jfX19ZnVuY3Rpb24gQW8oKXtyZXR1cm57bmFtZTpcIlwiLEs6XCJhbiBIVE1MIGVsZW1lbnRcIixvcHRpb25hbDohMSxNOmZ1bmN0aW9uKGEpe3JldHVybiEhKGEmJmEgaW5zdGFuY2VvZiBFbGVtZW50KX19fVxuZnVuY3Rpb24gQm8oKXtyZXR1cm57bmFtZTpcImF1dGhcIixLOlwiYW4gaW5zdGFuY2Ugb2YgRmlyZWJhc2UgQXV0aFwiLG9wdGlvbmFsOiEwLE06ZnVuY3Rpb24oYSl7cmV0dXJuISEoYSYmYSBpbnN0YW5jZW9mIEZuKX19fWZ1bmN0aW9uIENvKCl7cmV0dXJue25hbWU6XCJhcHBcIixLOlwiYW4gaW5zdGFuY2Ugb2YgRmlyZWJhc2UgQXBwXCIsb3B0aW9uYWw6ITAsTTpmdW5jdGlvbihhKXtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgZmlyZWJhc2UuYXBwLkFwcCl9fX1mdW5jdGlvbiBEbyhhKXtyZXR1cm57bmFtZTphP2ErXCJDcmVkZW50aWFsXCI6XCJjcmVkZW50aWFsXCIsSzphP1wiYSB2YWxpZCBcIithK1wiIGNyZWRlbnRpYWxcIjpcImEgdmFsaWQgY3JlZGVudGlhbFwiLG9wdGlvbmFsOiExLE06ZnVuY3Rpb24oYil7aWYoIWIpcmV0dXJuITE7dmFyIGM9IWF8fGIucHJvdmlkZXJJZD09PWE7cmV0dXJuISghYi5rYXx8IWMpfX19XG5mdW5jdGlvbiBFbygpe3JldHVybntuYW1lOlwibXVsdGlGYWN0b3JBc3NlcnRpb25cIixLOlwiYSB2YWxpZCBtdWx0aUZhY3RvckFzc2VydGlvblwiLG9wdGlvbmFsOiExLE06ZnVuY3Rpb24oYSl7cmV0dXJuIGE/ISFhLnRiOiExfX19ZnVuY3Rpb24gRm8oKXtyZXR1cm57bmFtZTpcImF1dGhQcm92aWRlclwiLEs6XCJhIHZhbGlkIEF1dGggcHJvdmlkZXJcIixvcHRpb25hbDohMSxNOmZ1bmN0aW9uKGEpe3JldHVybiEhKGEmJmEucHJvdmlkZXJJZCYmYS5oYXNPd25Qcm9wZXJ0eSYmYS5oYXNPd25Qcm9wZXJ0eShcImlzT0F1dGhQcm92aWRlclwiKSl9fX1mdW5jdGlvbiBHbyhhLGIpe3JldHVybiBuKGEpJiZcInN0cmluZ1wiPT09dHlwZW9mIGEudHlwZSYmYS50eXBlPT09YiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuSGF9ZnVuY3Rpb24gSG8oYSl7cmV0dXJuIG4oYSkmJlwic3RyaW5nXCI9PT10eXBlb2YgYS51aWR9XG5mdW5jdGlvbiBJbygpe3JldHVybntuYW1lOlwiYXBwbGljYXRpb25WZXJpZmllclwiLEs6XCJhbiBpbXBsZW1lbnRhdGlvbiBvZiBmaXJlYmFzZS5hdXRoLkFwcGxpY2F0aW9uVmVyaWZpZXJcIixvcHRpb25hbDohMSxNOmZ1bmN0aW9uKGEpe3JldHVybiEoIWF8fFwic3RyaW5nXCIhPT10eXBlb2YgYS50eXBlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgYS52ZXJpZnkpfX19ZnVuY3Rpb24gWChhLGIsYyxkKXtyZXR1cm57bmFtZTpjfHxcIlwiLEs6YS5LK1wiIG9yIFwiK2IuSyxvcHRpb25hbDohIWQsTTpmdW5jdGlvbihlKXtyZXR1cm4gYS5NKGUpfHxiLk0oZSl9fX07ZnVuY3Rpb24gWShhLGIpe2Zvcih2YXIgYyBpbiBiKXt2YXIgZD1iW2NdLm5hbWU7YVtkXT1KbyhkLGFbY10sYltjXS5qKX19ZnVuY3Rpb24gS28oYSxiKXtmb3IodmFyIGMgaW4gYil7dmFyIGQ9YltjXS5uYW1lO2QhPT1jJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxkLHtnZXQ6dWEoZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXNbZV19LGMpLHNldDp1YShmdW5jdGlvbihlLGYsZyxoKXt2byhlLFtnXSxbaF0sITApO3RoaXNbZl09aH0sZCxjLGJbY10ubGIpLGVudW1lcmFibGU6ITB9KX19ZnVuY3Rpb24gWihhLGIsYyxkKXthW2JdPUpvKGIsYyxkKX1cbmZ1bmN0aW9uIEpvKGEsYixjKXtmdW5jdGlvbiBkKCl7dmFyIGc9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt2byhlLGMsZyk7cmV0dXJuIGIuYXBwbHkodGhpcyxnKX1pZighYylyZXR1cm4gYjt2YXIgZT1MbyhhKSxmO2ZvcihmIGluIGIpZFtmXT1iW2ZdO2ZvcihmIGluIGIucHJvdG90eXBlKWQucHJvdG90eXBlW2ZdPWIucHJvdG90eXBlW2ZdO3JldHVybiBkfWZ1bmN0aW9uIExvKGEpe2E9YS5zcGxpdChcIi5cIik7cmV0dXJuIGFbYS5sZW5ndGgtMV19O1koRm4ucHJvdG90eXBlLHtrYjp7bmFtZTpcImFwcGx5QWN0aW9uQ29kZVwiLGo6W1YoXCJjb2RlXCIpXX0sU2E6e25hbWU6XCJjaGVja0FjdGlvbkNvZGVcIixqOltWKFwiY29kZVwiKV19LG9iOntuYW1lOlwiY29uZmlybVBhc3N3b3JkUmVzZXRcIixqOltWKFwiY29kZVwiKSxWKFwibmV3UGFzc3dvcmRcIildfSxkYzp7bmFtZTpcImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZFwiLGo6W1YoXCJlbWFpbFwiKSxWKFwicGFzc3dvcmRcIildfSxoYzp7bmFtZTpcImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsXCIsajpbVihcImVtYWlsXCIpXX0scmE6e25hbWU6XCJnZXRSZWRpcmVjdFJlc3VsdFwiLGo6W119LEJjOntuYW1lOlwiaXNTaWduSW5XaXRoRW1haWxMaW5rXCIsajpbVihcImVtYWlsTGlua1wiKV19LEhjOntuYW1lOlwib25BdXRoU3RhdGVDaGFuZ2VkXCIsajpbWChXKCkseW8oKSxcIm5leHRPck9ic2VydmVyXCIpLHlvKFwib3B0X2Vycm9yXCIsITApLHlvKFwib3B0X2NvbXBsZXRlZFwiLCEwKV19LEljOntuYW1lOlwib25JZFRva2VuQ2hhbmdlZFwiLFxuajpbWChXKCkseW8oKSxcIm5leHRPck9ic2VydmVyXCIpLHlvKFwib3B0X2Vycm9yXCIsITApLHlvKFwib3B0X2NvbXBsZXRlZFwiLCEwKV19LHdiOntuYW1lOlwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbFwiLGo6W1YoXCJlbWFpbFwiKSxYKFcoXCJvcHRfYWN0aW9uQ29kZVNldHRpbmdzXCIsITApLHpvKG51bGwsITApLFwib3B0X2FjdGlvbkNvZGVTZXR0aW5nc1wiLCEwKV19LHhiOntuYW1lOlwic2VuZFNpZ25JbkxpbmtUb0VtYWlsXCIsajpbVihcImVtYWlsXCIpLFcoXCJhY3Rpb25Db2RlU2V0dGluZ3NcIildfSx5Yjp7bmFtZTpcInNldFBlcnNpc3RlbmNlXCIsajpbVihcInBlcnNpc3RlbmNlXCIpXX0sU2M6e25hbWU6XCJzaWduSW5BbmRSZXRyaWV2ZURhdGFXaXRoQ3JlZGVudGlhbFwiLGo6W0RvKCldfSxBYjp7bmFtZTpcInNpZ25JbkFub255bW91c2x5XCIsajpbXX0sYWI6e25hbWU6XCJzaWduSW5XaXRoQ3JlZGVudGlhbFwiLGo6W0RvKCldfSxUYzp7bmFtZTpcInNpZ25JbldpdGhDdXN0b21Ub2tlblwiLGo6W1YoXCJ0b2tlblwiKV19LFxuVWM6e25hbWU6XCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZFwiLGo6W1YoXCJlbWFpbFwiKSxWKFwicGFzc3dvcmRcIildfSxWYzp7bmFtZTpcInNpZ25JbldpdGhFbWFpbExpbmtcIixqOltWKFwiZW1haWxcIiksVihcImVtYWlsTGlua1wiLCEwKV19LFdjOntuYW1lOlwic2lnbkluV2l0aFBob25lTnVtYmVyXCIsajpbVihcInBob25lTnVtYmVyXCIpLElvKCldfSxYYzp7bmFtZTpcInNpZ25JbldpdGhQb3B1cFwiLGo6W0ZvKCldfSxZYzp7bmFtZTpcInNpZ25JbldpdGhSZWRpcmVjdFwiLGo6W0ZvKCldfSxkZDp7bmFtZTpcInVwZGF0ZUN1cnJlbnRVc2VyXCIsajpbWChmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpcInVzZXJcIixLOlwiYW4gaW5zdGFuY2Ugb2YgRmlyZWJhc2UgVXNlclwiLG9wdGlvbmFsOiEhYSxNOmZ1bmN0aW9uKGIpe3JldHVybiEhKGImJmIgaW5zdGFuY2VvZiBJbSl9fX0oKSx6bygpLFwidXNlclwiKV19LEJiOntuYW1lOlwic2lnbk91dFwiLGo6W119LHRvSlNPTjp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCxcbiEwKV19LGZkOntuYW1lOlwidXNlRGV2aWNlTGFuZ3VhZ2VcIixqOltdfSxnZDp7bmFtZTpcInVzZUVtdWxhdG9yXCIsajpbVihcInVybFwiKSxXKFwib3B0aW9uc1wiLCEwKV19LGpkOntuYW1lOlwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGVcIixqOltWKFwiY29kZVwiKV19fSk7S28oRm4ucHJvdG90eXBlLHtsYzp7bmFtZTpcImxhbmd1YWdlQ29kZVwiLGxiOlgoVigpLHpvKCksXCJsYW5ndWFnZUNvZGVcIil9LHRpOntuYW1lOlwidGVuYW50SWRcIixsYjpYKFYoKSx6bygpLFwidGVuYW50SWRcIil9fSk7Rm4uUGVyc2lzdGVuY2U9Ums7Rm4uUGVyc2lzdGVuY2UuTE9DQUw9XCJsb2NhbFwiO0ZuLlBlcnNpc3RlbmNlLlNFU1NJT049XCJzZXNzaW9uXCI7Rm4uUGVyc2lzdGVuY2UuTk9ORT1cIm5vbmVcIjtcblkoSW0ucHJvdG90eXBlLHtcImRlbGV0ZVwiOntuYW1lOlwiZGVsZXRlXCIsajpbXX0sb2M6e25hbWU6XCJnZXRJZFRva2VuUmVzdWx0XCIsajpbeG8oXCJvcHRfZm9yY2VSZWZyZXNoXCIsITApXX0sSTp7bmFtZTpcImdldElkVG9rZW5cIixqOlt4byhcIm9wdF9mb3JjZVJlZnJlc2hcIiwhMCldfSxDYzp7bmFtZTpcImxpbmtBbmRSZXRyaWV2ZURhdGFXaXRoQ3JlZGVudGlhbFwiLGo6W0RvKCldfSxyYjp7bmFtZTpcImxpbmtXaXRoQ3JlZGVudGlhbFwiLGo6W0RvKCldfSxEYzp7bmFtZTpcImxpbmtXaXRoUGhvbmVOdW1iZXJcIixqOltWKFwicGhvbmVOdW1iZXJcIiksSW8oKV19LEVjOntuYW1lOlwibGlua1dpdGhQb3B1cFwiLGo6W0ZvKCldfSxGYzp7bmFtZTpcImxpbmtXaXRoUmVkaXJlY3RcIixqOltGbygpXX0sTGM6e25hbWU6XCJyZWF1dGhlbnRpY2F0ZUFuZFJldHJpZXZlRGF0YVdpdGhDcmVkZW50aWFsXCIsajpbRG8oKV19LHViOntuYW1lOlwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbFwiLGo6W0RvKCldfSxNYzp7bmFtZTpcInJlYXV0aGVudGljYXRlV2l0aFBob25lTnVtYmVyXCIsXG5qOltWKFwicGhvbmVOdW1iZXJcIiksSW8oKV19LE5jOntuYW1lOlwicmVhdXRoZW50aWNhdGVXaXRoUG9wdXBcIixqOltGbygpXX0sT2M6e25hbWU6XCJyZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdFwiLGo6W0ZvKCldfSxyZWxvYWQ6e25hbWU6XCJyZWxvYWRcIixqOltdfSx2Yjp7bmFtZTpcInNlbmRFbWFpbFZlcmlmaWNhdGlvblwiLGo6W1goVyhcIm9wdF9hY3Rpb25Db2RlU2V0dGluZ3NcIiwhMCksem8obnVsbCwhMCksXCJvcHRfYWN0aW9uQ29kZVNldHRpbmdzXCIsITApXX0sdG9KU09OOntuYW1lOlwidG9KU09OXCIsajpbVihudWxsLCEwKV19LGNkOntuYW1lOlwidW5saW5rXCIsajpbVihcInByb3ZpZGVyXCIpXX0sQ2I6e25hbWU6XCJ1cGRhdGVFbWFpbFwiLGo6W1YoXCJlbWFpbFwiKV19LERiOntuYW1lOlwidXBkYXRlUGFzc3dvcmRcIixqOltWKFwicGFzc3dvcmRcIildfSxlZDp7bmFtZTpcInVwZGF0ZVBob25lTnVtYmVyXCIsajpbRG8oXCJwaG9uZVwiKV19LEViOntuYW1lOlwidXBkYXRlUHJvZmlsZVwiLGo6W1coXCJwcm9maWxlXCIpXX0sXG5GYjp7bmFtZTpcInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsXCIsajpbVihcImVtYWlsXCIpLFgoVyhcIm9wdF9hY3Rpb25Db2RlU2V0dGluZ3NcIiwhMCksem8obnVsbCwhMCksXCJvcHRfYWN0aW9uQ29kZVNldHRpbmdzXCIsITApXX19KTtZKFluLnByb3RvdHlwZSx7ZXhlY3V0ZTp7bmFtZTpcImV4ZWN1dGVcIn0scmVuZGVyOntuYW1lOlwicmVuZGVyXCJ9LHJlc2V0OntuYW1lOlwicmVzZXRcIn0sZ2V0UmVzcG9uc2U6e25hbWU6XCJnZXRSZXNwb25zZVwifX0pO1koWG4ucHJvdG90eXBlLHtleGVjdXRlOntuYW1lOlwiZXhlY3V0ZVwifSxyZW5kZXI6e25hbWU6XCJyZW5kZXJcIn0scmVzZXQ6e25hbWU6XCJyZXNldFwifSxnZXRSZXNwb25zZTp7bmFtZTpcImdldFJlc3BvbnNlXCJ9fSk7WShELnByb3RvdHlwZSx7b2E6e25hbWU6XCJmaW5hbGx5XCJ9LG86e25hbWU6XCJjYXRjaFwifSx0aGVuOntuYW1lOlwidGhlblwifX0pO1xuS28oZW0ucHJvdG90eXBlLHthcHBWZXJpZmljYXRpb25EaXNhYmxlZDp7bmFtZTpcImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZ1wiLGxiOnhvKFwiYXBwVmVyaWZpY2F0aW9uRGlzYWJsZWRGb3JUZXN0aW5nXCIpfX0pO1koZm0ucHJvdG90eXBlLHtjb25maXJtOntuYW1lOlwiY29uZmlybVwiLGo6W1YoXCJ2ZXJpZmljYXRpb25Db2RlXCIpXX19KTtaKEJnLFwiZnJvbUpTT05cIixmdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PT10eXBlb2YgYT9KU09OLnBhcnNlKGEpOmE7Zm9yKHZhciBiLGM9W01nLGRoLGtoLEpnXSxkPTA7ZDxjLmxlbmd0aDtkKyspaWYoYj1jW2RdKGEpKXJldHVybiBiO3JldHVybiBudWxsfSxbWChWKCksVygpLFwianNvblwiKV0pO1ooWmcsXCJjcmVkZW50aWFsXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IFlnKGEsYil9LFtWKFwiZW1haWxcIiksVihcInBhc3N3b3JkXCIpXSk7WShZZy5wcm90b3R5cGUse3c6e25hbWU6XCJ0b0pTT05cIixqOltWKG51bGwsITApXX19KTtcblkoUWcucHJvdG90eXBlLHtDYTp7bmFtZTpcImFkZFNjb3BlXCIsajpbVihcInNjb3BlXCIpXX0sS2E6e25hbWU6XCJzZXRDdXN0b21QYXJhbWV0ZXJzXCIsajpbVyhcImN1c3RvbU9BdXRoUGFyYW1ldGVyc1wiKV19fSk7WihRZyxcImNyZWRlbnRpYWxcIixSZyxbWChWKCksVygpLFwidG9rZW5cIildKTtaKFpnLFwiY3JlZGVudGlhbFdpdGhMaW5rXCIsZWgsW1YoXCJlbWFpbFwiKSxWKFwiZW1haWxMaW5rXCIpXSk7WShTZy5wcm90b3R5cGUse0NhOntuYW1lOlwiYWRkU2NvcGVcIixqOltWKFwic2NvcGVcIildfSxLYTp7bmFtZTpcInNldEN1c3RvbVBhcmFtZXRlcnNcIixqOltXKFwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzXCIpXX19KTtaKFNnLFwiY3JlZGVudGlhbFwiLFRnLFtYKFYoKSxXKCksXCJ0b2tlblwiKV0pO1koVWcucHJvdG90eXBlLHtDYTp7bmFtZTpcImFkZFNjb3BlXCIsajpbVihcInNjb3BlXCIpXX0sS2E6e25hbWU6XCJzZXRDdXN0b21QYXJhbWV0ZXJzXCIsajpbVyhcImN1c3RvbU9BdXRoUGFyYW1ldGVyc1wiKV19fSk7XG5aKFVnLFwiY3JlZGVudGlhbFwiLFZnLFtYKFYoKSxYKFcoKSx6bygpKSxcImlkVG9rZW5cIiksWChWKCksem8oKSxcImFjY2Vzc1Rva2VuXCIsITApXSk7WShXZy5wcm90b3R5cGUse0thOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGo6W1coXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1ooV2csXCJjcmVkZW50aWFsXCIsWGcsW1goVigpLFcoKSxcInRva2VuXCIpLFYoXCJzZWNyZXRcIiwhMCldKTtZKFBnLnByb3RvdHlwZSx7Q2E6e25hbWU6XCJhZGRTY29wZVwiLGo6W1YoXCJzY29wZVwiKV19LGNyZWRlbnRpYWw6e25hbWU6XCJjcmVkZW50aWFsXCIsajpbWChWKCksWChXKCksem8oKSksXCJvcHRpb25zT3JJZFRva2VuXCIpLFgoVigpLHpvKCksXCJhY2Nlc3NUb2tlblwiLCEwKV19LEthOntuYW1lOlwic2V0Q3VzdG9tUGFyYW1ldGVyc1wiLGo6W1coXCJjdXN0b21PQXV0aFBhcmFtZXRlcnNcIildfX0pO1koS2cucHJvdG90eXBlLHt3OntuYW1lOlwidG9KU09OXCIsajpbVihudWxsLCEwKV19fSk7XG5ZKEVnLnByb3RvdHlwZSx7dzp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1oobGgsXCJjcmVkZW50aWFsXCIscGgsW1YoXCJ2ZXJpZmljYXRpb25JZFwiKSxWKFwidmVyaWZpY2F0aW9uQ29kZVwiKV0pO1xuWShsaC5wcm90b3R5cGUse2diOntuYW1lOlwidmVyaWZ5UGhvbmVOdW1iZXJcIixqOltYKFYoKSxmdW5jdGlvbihhLGIpe3JldHVybntuYW1lOmF8fFwicGhvbmVJbmZvT3B0aW9uc1wiLEs6XCJ2YWxpZCBwaG9uZSBpbmZvIG9wdGlvbnNcIixvcHRpb25hbDohIWIsTTpmdW5jdGlvbihjKXtyZXR1cm4gYz9jLnNlc3Npb24mJmMucGhvbmVOdW1iZXI/R28oYy5zZXNzaW9uLHpnKSYmXCJzdHJpbmdcIj09PXR5cGVvZiBjLnBob25lTnVtYmVyOmMuc2Vzc2lvbiYmYy5tdWx0aUZhY3RvckhpbnQ/R28oYy5zZXNzaW9uLEFnKSYmSG8oYy5tdWx0aUZhY3RvckhpbnQpOmMuc2Vzc2lvbiYmYy5tdWx0aUZhY3RvclVpZD9HbyhjLnNlc3Npb24sQWcpJiZcInN0cmluZ1wiPT09dHlwZW9mIGMubXVsdGlGYWN0b3JVaWQ6Yy5waG9uZU51bWJlcj9cInN0cmluZ1wiPT09dHlwZW9mIGMucGhvbmVOdW1iZXI6ITE6ITF9fX0oKSxcInBob25lSW5mb09wdGlvbnNcIiksSW8oKV19fSk7XG5ZKGdoLnByb3RvdHlwZSx7dzp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1kodC5wcm90b3R5cGUse3RvSlNPTjp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1koeWgucHJvdG90eXBlLHt0b0pTT046e25hbWU6XCJ0b0pTT05cIixqOltWKG51bGwsITApXX19KTtZKHhoLnByb3RvdHlwZSx7dG9KU09OOntuYW1lOlwidG9KU09OXCIsajpbVihudWxsLCEwKV19fSk7WShsbS5wcm90b3R5cGUse3RvSlNPTjp7bmFtZTpcInRvSlNPTlwiLGo6W1YobnVsbCwhMCldfX0pO1koaW0ucHJvdG90eXBlLHtSYzp7bmFtZTpcInJlc29sdmVTaWduSW5cIixqOltFbygpXX19KTtcblkodG0ucHJvdG90eXBlLHtTYjp7bmFtZTpcImdldFNlc3Npb25cIixqOltdfSxmYzp7bmFtZTpcImVucm9sbFwiLGo6W0VvKCksVihcImRpc3BsYXlOYW1lXCIsITApXX0sYmQ6e25hbWU6XCJ1bmVucm9sbFwiLGo6W1goe25hbWU6XCJtdWx0aUZhY3RvckluZm9cIixLOlwiYSB2YWxpZCBtdWx0aUZhY3RvckluZm9cIixvcHRpb25hbDohMSxNOkhvfSxWKCksXCJtdWx0aUZhY3RvckluZm9JZGVudGlmaWVyXCIpXX19KTtZKHVvLnByb3RvdHlwZSx7Y2xlYXI6e25hbWU6XCJjbGVhclwiLGo6W119LHJlbmRlcjp7bmFtZTpcInJlbmRlclwiLGo6W119LHZlcmlmeTp7bmFtZTpcInZlcmlmeVwiLGo6W119fSk7WihKZixcInBhcnNlTGlua1wiLFJmLFtWKFwibGlua1wiKV0pO1ooZW8sXCJhc3NlcnRpb25cIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IHJtKGEpfSxbRG8oXCJwaG9uZVwiKV0pO1xuKGZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBmaXJlYmFzZSYmZmlyZWJhc2UuSU5URVJOQUwmJmZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyQ29tcG9uZW50KXt2YXIgYT17QWN0aW9uQ29kZUluZm86e09wZXJhdGlvbjp7RU1BSUxfU0lHTklOOkFmLFBBU1NXT1JEX1JFU0VUOlwiUEFTU1dPUkRfUkVTRVRcIixSRUNPVkVSX0VNQUlMOlwiUkVDT1ZFUl9FTUFJTFwiLFJFVkVSVF9TRUNPTkRfRkFDVE9SX0FERElUSU9OOkNmLFZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMOkJmLFZFUklGWV9FTUFJTDpcIlZFUklGWV9FTUFJTFwifX0sQXV0aDpGbixBdXRoQ3JlZGVudGlhbDpCZyxFcnJvcjp0fTtaKGEsXCJFbWFpbEF1dGhQcm92aWRlclwiLFpnLFtdKTtaKGEsXCJGYWNlYm9va0F1dGhQcm92aWRlclwiLFFnLFtdKTtaKGEsXCJHaXRodWJBdXRoUHJvdmlkZXJcIixTZyxbXSk7WihhLFwiR29vZ2xlQXV0aFByb3ZpZGVyXCIsVWcsW10pO1ooYSxcIlR3aXR0ZXJBdXRoUHJvdmlkZXJcIixXZyxbXSk7XG5aKGEsXCJPQXV0aFByb3ZpZGVyXCIsUGcsW1YoXCJwcm92aWRlcklkXCIpXSk7WihhLFwiU0FNTEF1dGhQcm92aWRlclwiLE9nLFtWKFwicHJvdmlkZXJJZFwiKV0pO1ooYSxcIlBob25lQXV0aFByb3ZpZGVyXCIsbGgsW0JvKCldKTtaKGEsXCJSZWNhcHRjaGFWZXJpZmllclwiLHVvLFtYKFYoKSxBbygpLFwicmVjYXB0Y2hhQ29udGFpbmVyXCIpLFcoXCJyZWNhcHRjaGFQYXJhbWV0ZXJzXCIsITApLENvKCldKTtaKGEsXCJBY3Rpb25Db2RlVVJMXCIsSmYsW10pO1ooYSxcIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3JcIixlbyxbXSk7ZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQoe25hbWU6XCJhdXRoXCIsaW5zdGFuY2VGYWN0b3J5OmZ1bmN0aW9uKGIpe2I9Yi5nZXRQcm92aWRlcihcImFwcFwiKS5nZXRJbW1lZGlhdGUoKTtyZXR1cm4gbmV3IEZuKGIpfSxtdWx0aXBsZUluc3RhbmNlczohMSxzZXJ2aWNlUHJvcHM6YSxpbnN0YW50aWF0aW9uTW9kZTpcIkxBWllcIix0eXBlOlwiUFVCTElDXCIsb25JbnN0YW5jZUNyZWF0ZWQ6ZnVuY3Rpb24oYil7Yi5nZXRQcm92aWRlcihcImF1dGgtaW50ZXJuYWxcIikuaW5pdGlhbGl6ZSgpfX0pO1xuZmlyZWJhc2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQoe25hbWU6XCJhdXRoLWludGVybmFsXCIsaW5zdGFuY2VGYWN0b3J5OmZ1bmN0aW9uKGIpe2I9Yi5nZXRQcm92aWRlcihcImF1dGhcIikuZ2V0SW1tZWRpYXRlKCk7cmV0dXJue2dldFVpZDpxKGIuZ2V0VWlkLGIpLGdldFRva2VuOnEoYi5uYyxiKSxhZGRBdXRoVG9rZW5MaXN0ZW5lcjpxKGIuY2MsYikscmVtb3ZlQXV0aFRva2VuTGlzdGVuZXI6cShiLlBjLGIpfX0sbXVsdGlwbGVJbnN0YW5jZXM6ITEsaW5zdGFudGlhdGlvbk1vZGU6XCJMQVpZXCIsdHlwZTpcIlBSSVZBVEVcIn0pO2ZpcmViYXNlLnJlZ2lzdGVyVmVyc2lvbihcIkBmaXJlYmFzZS9hdXRoXCIsXCIwLjE2LjhcIik7ZmlyZWJhc2UuSU5URVJOQUwuZXh0ZW5kTmFtZXNwYWNlKHtVc2VyOkltfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIHRoZSBmaXJlYmFzZSBuYW1lc3BhY2U7IGJlIHN1cmUgdG8gaW5jbHVkZSBmaXJlYmFzZS1hcHAuanMgYmVmb3JlIHRoaXMgbGlicmFyeS5cIik7XG59KSgpO30pLmFwcGx5KHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge30pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IF9fdmFsdWVzLCBfX3JlYWQsIF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fc3ByZWFkQXJyYXkgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIHR5cGUgd2hldGhlciB0aGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgY29tcG9uZW50IGlzIHB1YmxpYyBvciBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudChuYW1lLCBpbnN0YW5jZUZhY3RvcnksIHR5cGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VGYWN0b3J5ID0gaW5zdGFuY2VGYWN0b3J5O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb3BlcnRpZXMgdG8gYmUgYWRkZWQgdG8gdGhlIHNlcnZpY2UgbmFtZXNwYWNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlUHJvcHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Nb2RlID0gXCJMQVpZXCIgLyogTEFaWSAqLztcclxuICAgICAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gbnVsbDtcclxuICAgIH1cclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0SW5zdGFudGlhdGlvbk1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0TXVsdGlwbGVJbnN0YW5jZXMgPSBmdW5jdGlvbiAobXVsdGlwbGVJbnN0YW5jZXMpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTZXJ2aWNlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbXBvbmVudDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERFRkFVTFRfRU5UUllfTkFNRSA9ICdbREVGQVVMVF0nO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUHJvdmlkZXIgZm9yIGluc3RhbmNlIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiAnYXV0aCcsICdhdXRoLWludGVybmFsJ1xyXG4gKiBOYW1lU2VydmljZU1hcHBpbmdbVF0gaXMgYW4gYWxpYXMgZm9yIHRoZSB0eXBlIG9mIHRoZSBpbnN0YW5jZVxyXG4gKi9cclxudmFyIFByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIobmFtZSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWxpdHBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXHJcbiAgICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGlkZW50aWZpZXIpIHtcclxuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxyXG4gICAgICAgIHZhciBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5oYXMobm9ybWFsaXplZElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzZXJ2aWNlIGlmIGl0IGNhbiBiZSBhdXRvLWluaXRpYWxpemVkXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIGdldCgpLCBpdCBzaG91bGQgbm90IGNhdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCByZXR1cm4gdGhlIHVucmVzb2x2ZWQgcHJvbWlzZSBpbiB0aGlzIGNhc2UuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKS5wcm9taXNlO1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxyXG4gICAgICAgIHZhciBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pZGVudGlmaWVyKTtcclxuICAgICAgICB2YXIgb3B0aW9uYWwgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3B0aW9uYWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBhIGNvbXBvbmVudCBpcyBub3QgaW5pdGlhbGl6ZWQgYW5kIHNob3VsZC9jYW4gbm90IGJlIGF1dG8taW5pdGlhbGl6ZWQgYXQgdGhlIG1vbWVudCwgcmV0dXJuIG51bGwgaWYgdGhlIG9wdGlvbmFsIGZsYWcgaXMgc2V0LCBvciB0aHJvd1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJTZXJ2aWNlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzbWF0Y2hpbmcgQ29tcG9uZW50IFwiICsgY29tcG9uZW50Lm5hbWUgKyBcIiBmb3IgUHJvdmlkZXIgXCIgKyB0aGlzLm5hbWUgKyBcIi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBmb3IgXCIgKyB0aGlzLm5hbWUgKyBcIiBoYXMgYWxyZWFkeSBiZWVuIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICAvLyByZXR1cm4gZWFybHkgd2l0aG91dCBhdHRlbXB0aW5nIHRvIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBpZiB0aGUgY29tcG9uZW50IHJlcXVpcmVzIGV4cGxpY2l0IGluaXRpYWxpemF0aW9uIChjYWxsaW5nIGBQcm92aWRlci5pbml0aWFsaXplKClgKVxyXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhlIHNlcnZpY2UgaXMgZWFnZXIsIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgaW5zdGFuY2VcclxuICAgICAgICBpZiAoaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoeyBpbnN0YW5jZUlkZW50aWZpZXI6IERFRkFVTFRfRU5UUllfTkFNRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSBmb3IgYW4gZWFnZXIgQ29tcG9uZW50IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIHRoZSBlYWdlclxyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24sIGl0IHNob3VsZCBub3QgY2F1c2UgYSBmYXRhbCBlcnJvci5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEludmVzdGlnYXRlIGlmIHdlIG5lZWQgdG8gbWFrZSBpdCBjb25maWd1cmFibGUsIGJlY2F1c2Ugc29tZSBjb21wb25lbnQgbWF5IHdhbnQgdG8gY2F1c2VcclxuICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IgaW4gdGhpcyBjYXNlP1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzZXJ2aWNlIGluc3RhbmNlcyBmb3IgdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmUgdGhlbVxyXG4gICAgICAgICAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxyXG4gICAgICAgICAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBpbnN0YW5jZUlkZW50aWZpZXIgPSBfZFswXSwgaW5zdGFuY2VEZWZlcnJlZCA9IF9kWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoKWAgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSB2YWxpZCBpbnN0YW5jZSBzaW5jZSBhIGNvbXBvbmVudCBpcyBndWFyYW50ZWVkLiB1c2UgISB0byBtYWtlIHR5cGVzY3JpcHQgaGFwcHkuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgbGVhdmUgdGhlIHByb21pc2UgdW5yZXNvbHZlZC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNsZWFySW5zdGFuY2UgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZGVsZXRlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgIH07XHJcbiAgICAvLyBhcHAuZGVsZXRlKCkgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIG9uIGV2ZXJ5IHByb3ZpZGVyIHRvIGRlbGV0ZSB0aGUgc2VydmljZXNcclxuICAgIC8vIFRPRE86IHNob3VsZCB3ZSBtYXJrIHRoZSBwcm92aWRlciBhcyBkZWxldGVkP1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgPSBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoc2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXJ2aWNlKSB7IHJldHVybiAnSU5URVJOQUwnIGluIHNlcnZpY2U7IH0pIC8vIGxlZ2FjeSBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gc2VydmljZS5JTlRFUk5BTC5kZWxldGUoKTsgfSkpKSwgX19yZWFkKHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gJ19kZWxldGUnIGluIHNlcnZpY2U7IH0pIC8vIG1vZHVsYXJpemVkIHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXJ2aWNlKSB7IHJldHVybiBzZXJ2aWNlLl9kZWxldGUoKTsgfSkpKSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5pc0NvbXBvbmVudFNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQgIT0gbnVsbDtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaXNJbml0aWFsaXplZCA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT09IHZvaWQgMCkgeyBpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmhhcyhpZGVudGlmaWVyKTtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICAgICAgdmFyIGVfMiwgX2E7XHJcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cclxuICAgICAgICB2YXIgX2IgPSBvcHRzLm9wdGlvbnMsIG9wdGlvbnMgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYjtcclxuICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihvcHRzLmluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZChub3JtYWxpemVkSWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IodGhpcy5uYW1lICsgXCIoXCIgKyBub3JtYWxpemVkSWRlbnRpZmllciArIFwiKSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBcIiArIHRoaXMubmFtZSArIFwiIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHlldFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllcixcclxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHJlc29sdmUgYW55IHBlbmRpbmcgcHJvbWlzZSB3YWl0aW5nIGZvciB0aGUgc2VydmljZSBpbnN0YW5jZVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9lID0gX19yZWFkKF9kLnZhbHVlLCAyKSwgaW5zdGFuY2VJZGVudGlmaWVyID0gX2VbMF0sIGluc3RhbmNlRGVmZXJyZWQgPSBfZVsxXTtcclxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkSWRlbnRpZmllciA9PT0gbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkICBhZnRlciB0aGUgcHJvdmlkZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYnkgY2FsbGluZyBwcm92aWRlci5pbml0aWFsaXplKCkuXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBTWU5DSFJPTk9VU0xZLCBzbyBpdCBzaG91bGQgbm90IGV4ZWN1dGUgYW55IGxvbmdydW5uaW5nIHRhc2tzIGluIG9yZGVyIHRvIG5vdCBibG9jayB0aGUgcHJvZ3JhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBbiBvcHRpb25hbCBpbnN0YW5jZSBpZGVudGlmaWVyXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVucmVnaXN0ZXIgdGhlIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5vbkluaXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGlkZW50aWZpZXIpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nQ2FsbGJhY2tzID0gKF9hID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbmV3IFNldCgpO1xyXG4gICAgICAgIGV4aXN0aW5nQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3Muc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBleGlzdGluZ0NhbGxiYWNrcyk7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV4aXN0aW5nSW5zdGFuY2UsIG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlIG9uSW5pdCBjYWxsYmFja3Mgc3luY2hyb25vdXNseVxyXG4gICAgICogQHBhcmFtIGluc3RhbmNlIHRoZSBzZXJ2aWNlIGluc3RhbmNlYFxyXG4gICAgICovXHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaW52b2tlT25Jbml0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKGluc3RhbmNlLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdmFyIGVfMywgX2E7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNhbGxiYWNrc18xID0gX192YWx1ZXMoY2FsbGJhY2tzKSwgY2FsbGJhY2tzXzFfMSA9IGNhbGxiYWNrc18xLm5leHQoKTsgIWNhbGxiYWNrc18xXzEuZG9uZTsgY2FsbGJhY2tzXzFfMSA9IGNhbGxiYWNrc18xLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soaW5zdGFuY2UsIGlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25Jbml0IGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NfMV8xICYmICFjYWxsYmFja3NfMV8xLmRvbmUgJiYgKF9hID0gY2FsbGJhY2tzXzEucmV0dXJuKSkgX2EuY2FsbChjYWxsYmFja3NfMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0T3JJbml0aWFsaXplU2VydmljZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZUlkZW50aWZpZXIgPSBfYS5pbnN0YW5jZUlkZW50aWZpZXIsIF9iID0gX2Eub3B0aW9ucywgb3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UgJiYgdGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZUZhY3RvcnkodGhpcy5jb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaW5zdGFuY2VJZGVudGlmaWVyKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEludm9rZSBvbkluaXQgbGlzdGVuZXJzLlxyXG4gICAgICAgICAgICAgKiBOb3RlIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkIGlzIGRpZmZlcmVudCwgd2hpY2ggaXMgdXNlZCBieSB0aGUgY29tcG9uZW50IGNyZWF0b3IsXHJcbiAgICAgICAgICAgICAqIHdoaWxlIG9uSW5pdCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQgYnkgY29uc3VtZXJzIG9mIHRoZSBwcm92aWRlci5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuaW52b2tlT25Jbml0Q2FsbGJhY2tzKGluc3RhbmNlLCBpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3JkZXIgaXMgaW1wb3J0YW50XHJcbiAgICAgICAgICAgICAqIG9uSW5zdGFuY2VDcmVhdGVkKCkgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7IHdoaWNoXHJcbiAgICAgICAgICAgICAqIG1ha2VzIGBpc0luaXRpYWxpemVkKClgIHJldHVybiB0cnVlLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKHRoaXMuY29udGFpbmVyLCBpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChfYykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UgfHwgbnVsbDtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyID0gZnVuY3Rpb24gKGlkZW50aWZpZXIpIHtcclxuICAgICAgICBpZiAoaWRlbnRpZmllciA9PT0gdm9pZCAwKSB7IGlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUU7IH1cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzID8gaWRlbnRpZmllciA6IERFRkFVTFRfRU5UUllfTkFNRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyOyAvLyBhc3N1bWUgbXVsdGlwbGUgaW5zdGFuY2VzIGFyZSBzdXBwb3J0ZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcHJvdmlkZWQuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5zaG91bGRBdXRvSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKCEhdGhpcy5jb21wb25lbnQgJiZcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgIT09IFwiRVhQTElDSVRcIiAvKiBFWFBMSUNJVCAqLyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xyXG59KCkpO1xyXG4vLyB1bmRlZmluZWQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc2VydmljZSBmYWN0b3J5IGZvciB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyKSB7XHJcbiAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gREVGQVVMVF9FTlRSWV9OQU1FID8gdW5kZWZpbmVkIDogaWRlbnRpZmllcjtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSA9PT0gXCJFQUdFUlwiIC8qIEVBR0VSICovO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDb21wb25lbnRDb250YWluZXIgdGhhdCBwcm92aWRlcyBQcm92aWRlcnMgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXHJcbiAqL1xyXG52YXIgQ29tcG9uZW50Q29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgYmVpbmcgYWRkZWRcclxuICAgICAqIEBwYXJhbSBvdmVyd3JpdGUgV2hlbiBhIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkLFxyXG4gICAgICogaWYgb3ZlcndyaXRlIGlzIHRydWU6IG92ZXJ3cml0ZSB0aGUgZXhpc3RpbmcgY29tcG9uZW50IHdpdGggdGhlIG5ldyBjb21wb25lbnQgYW5kIGNyZWF0ZSBhIG5ld1xyXG4gICAgICogcHJvdmlkZXIgd2l0aCB0aGUgbmV3IGNvbXBvbmVudC4gSXQgY2FuIGJlIHVzZWZ1bCBpbiB0ZXN0cyB3aGVyZSB5b3Ugd2FudCB0byB1c2UgZGlmZmVyZW50IG1vY2tzXHJcbiAgICAgKiBmb3IgZGlmZmVyZW50IHRlc3RzLlxyXG4gICAgICogaWYgb3ZlcndyaXRlIGlzIGZhbHNlOiB0aHJvdyBhbiBleGNlcHRpb25cclxuICAgICAqL1xyXG4gICAgQ29tcG9uZW50Q29udGFpbmVyLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29tcG9uZW50IFwiICsgY29tcG9uZW50Lm5hbWUgKyBcIiBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBcIiArIHRoaXMubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3ZpZGVyLnNldENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuYWRkT3JPdmVyd3JpdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSBleGlzdGluZyBwcm92aWRlciBmcm9tIHRoZSBjb250YWluZXIsIHNvIHdlIGNhbiByZWdpc3RlciB0aGUgbmV3IGNvbXBvbmVudFxyXG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVycy5kZWxldGUoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0UHJvdmlkZXIgcHJvdmlkZXMgYSB0eXBlIHNhZmUgaW50ZXJmYWNlIHdoZXJlIGl0IGNhbiBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgZmllbGQgbmFtZVxyXG4gICAgICogcHJlc2VudCBpbiBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlLlxyXG4gICAgICpcclxuICAgICAqIEZpcmViYXNlIFNES3MgcHJvdmlkaW5nIHNlcnZpY2VzIHNob3VsZCBleHRlbmQgTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZSB0byByZWdpc3RlclxyXG4gICAgICogdGhlbXNlbHZlcy5cclxuICAgICAqL1xyXG4gICAgQ29tcG9uZW50Q29udGFpbmVyLnByb3RvdHlwZS5nZXRQcm92aWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcnMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjcmVhdGUgYSBQcm92aWRlciBmb3IgYSBzZXJ2aWNlIHRoYXQgaGFzbid0IHJlZ2lzdGVyZWQgd2l0aCBGaXJlYmFzZVxyXG4gICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBQcm92aWRlcihuYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnByb3ZpZGVycy5zZXQobmFtZSwgcHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiBwcm92aWRlcjtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmdldFByb3ZpZGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnByb3ZpZGVycy52YWx1ZXMoKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbXBvbmVudENvbnRhaW5lcjtcclxufSgpKTtcblxuZXhwb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIsIFByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcclxuICovXHJcbnZhciBpbnN0YW5jZXMgPSBbXTtcclxuLyoqXHJcbiAqIFRoZSBKUyBTREsgc3VwcG9ydHMgNSBsb2cgbGV2ZWxzIGFuZCBhbHNvIGFsbG93cyBhIHVzZXIgdGhlIGFiaWxpdHkgdG9cclxuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBUaGUgb3JkZXIgaXMgYSBmb2xsb3dzOlxyXG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCB3aWxsIGJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXHJcbiAqIGBWRVJCT1NFYCBsb2dzIHdpbGwgbm90KVxyXG4gKi9cclxudmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRFQlVHXCJdID0gMF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJTkZPXCJdID0gMl0gPSBcIklORk9cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV0FSTlwiXSA9IDNdID0gXCJXQVJOXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlNJTEVOVFwiXSA9IDVdID0gXCJTSUxFTlRcIjtcclxufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcclxudmFyIGxldmVsU3RyaW5nVG9FbnVtID0ge1xyXG4gICAgJ2RlYnVnJzogTG9nTGV2ZWwuREVCVUcsXHJcbiAgICAndmVyYm9zZSc6IExvZ0xldmVsLlZFUkJPU0UsXHJcbiAgICAnaW5mbyc6IExvZ0xldmVsLklORk8sXHJcbiAgICAnd2Fybic6IExvZ0xldmVsLldBUk4sXHJcbiAgICAnZXJyb3InOiBMb2dMZXZlbC5FUlJPUixcclxuICAgICdzaWxlbnQnOiBMb2dMZXZlbC5TSUxFTlRcclxufTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBsZXZlbFxyXG4gKi9cclxudmFyIGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxyXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXHJcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAqL1xyXG52YXIgQ29uc29sZU1ldGhvZCA9IChfYSA9IHt9LFxyXG4gICAgX2FbTG9nTGV2ZWwuREVCVUddID0gJ2xvZycsXHJcbiAgICBfYVtMb2dMZXZlbC5WRVJCT1NFXSA9ICdsb2cnLFxyXG4gICAgX2FbTG9nTGV2ZWwuSU5GT10gPSAnaW5mbycsXHJcbiAgICBfYVtMb2dMZXZlbC5XQVJOXSA9ICd3YXJuJyxcclxuICAgIF9hW0xvZ0xldmVsLkVSUk9SXSA9ICdlcnJvcicsXHJcbiAgICBfYSk7XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgaGFuZGxlciB3aWxsIGZvcndhcmQgREVCVUcsIFZFUkJPU0UsIElORk8sIFdBUk4sIGFuZCBFUlJPUlxyXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxyXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxyXG4gKi9cclxudmFyIGRlZmF1bHRMb2dIYW5kbGVyID0gZnVuY3Rpb24gKGluc3RhbmNlLCBsb2dUeXBlKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB2YXIgbWV0aG9kID0gQ29uc29sZU1ldGhvZFtsb2dUeXBlXTtcclxuICAgIGlmIChtZXRob2QpIHtcclxuICAgICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgX19zcHJlYWRBcnJheXMoW1wiW1wiICsgbm93ICsgXCJdICBcIiArIGluc3RhbmNlLm5hbWUgKyBcIjpcIl0sIGFyZ3MpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBsb2cgYSBtZXNzYWdlIHdpdGggYW4gaW52YWxpZCBsb2dUeXBlICh2YWx1ZTogXCIgKyBsb2dUeXBlICsgXCIpXCIpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgTG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cclxuICAgICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBMb2dnZXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGxvZyBsZXZlbCBvZiB0aGUgZ2l2ZW4gTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gZGVmYXVsdExvZ0xldmVsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYWluIChpbnRlcm5hbCkgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICogQ2FuIGJlIHNldCB0byBhIG5ldyBmdW5jdGlvbiBpbiBpbnRlcm5hbCBwYWNrYWdlIGNvZGUgYnV0IG5vdCBieSB1c2VyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSBkZWZhdWx0TG9nSGFuZGxlcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3B0aW9uYWwsIGFkZGl0aW9uYWwsIHVzZXItZGVmaW5lZCBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9nZ2VyLnByb3RvdHlwZSwgXCJsb2dMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoISh2YWwgaW4gTG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB2YWx1ZSBcXFwiXCIgKyB2YWwgKyBcIlxcXCIgYXNzaWduZWQgdG8gYGxvZ0xldmVsYFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyBXb3JrYXJvdW5kIGZvciBzZXR0ZXIvZ2V0dGVyIGhhdmluZyB0byBiZSB0aGUgc2FtZSB0eXBlLlxyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gbGV2ZWxTdHJpbmdUb0VudW1bdmFsXSA6IHZhbDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9nZ2VyLnByb3RvdHlwZSwgXCJsb2dIYW5kbGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0hhbmRsZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGFzc2lnbmVkIHRvIGBsb2dIYW5kbGVyYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2dnZXIucHJvdG90eXBlLCBcInVzZXJMb2dIYW5kbGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgYWxsIGJhc2VkIG9uIHRoZSBgY29uc29sZWAgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5ERUJVR10sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5ERUJVR10sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLlZFUkJPU0VdLCBhcmdzKSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuVkVSQk9TRV0sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5JTkZPXSwgYXJncykpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLklORk9dLCBhcmdzKSk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuV0FSTl0sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5XQVJOXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5FUlJPUl0sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5FUlJPUl0sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9nZ2VyO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcclxuICAgICAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBjdXN0b21Mb2dMZXZlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xyXG4gICAgICAgICAgICBjdXN0b21Mb2dMZXZlbCA9IGxldmVsU3RyaW5nVG9FbnVtW29wdGlvbnMubGV2ZWxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBhcmdzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGlnbm9yZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZzsgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCAhPT0gbnVsbCAmJiBjdXN0b21Mb2dMZXZlbCAhPT0gdm9pZCAwID8gY3VzdG9tTG9nTGV2ZWwgOiBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGluc3RhbmNlc18xID0gaW5zdGFuY2VzOyBfaSA8IGluc3RhbmNlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlc18xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGluc3RhbmNlKTtcclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nZ2VyLCBzZXRMb2dMZXZlbCwgc2V0VXNlckxvZ0hhbmRsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tICd0c2xpYic7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEZpcmViYXNlIGNvbnN0YW50cy4gIFNvbWUgb2YgdGhlc2UgKEBkZWZpbmVzKSBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBjb21waWxlLXRpbWUuXHJcbiAqL1xyXG52YXIgQ09OU1RBTlRTID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVmaW5lIHtib29sZWFufSBXaGV0aGVyIHRoaXMgaXMgdGhlIGNsaWVudCBOb2RlLmpzIFNESy5cclxuICAgICAqL1xyXG4gICAgTk9ERV9DTElFTlQ6IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVmaW5lIHtib29sZWFufSBXaGV0aGVyIHRoaXMgaXMgdGhlIEFkbWluIE5vZGUuanMgU0RLLlxyXG4gICAgICovXHJcbiAgICBOT0RFX0FETUlOOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogRmlyZWJhc2UgU0RLIFZlcnNpb25cclxuICAgICAqL1xyXG4gICAgU0RLX1ZFUlNJT046ICcke0pTQ09SRV9WRVJTSU9OfSdcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcHJvdmlkZWQgYXNzZXJ0aW9uIGlzIGZhbHN5XHJcbiAqL1xyXG52YXIgYXNzZXJ0ID0gZnVuY3Rpb24gKGFzc2VydGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKCFhc3NlcnRpb24pIHtcclxuICAgICAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRXJyb3Igb2JqZWN0IHN1aXRhYmxlIGZvciB0aHJvd2luZy5cclxuICovXHJcbnZhciBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IEVycm9yKCdGaXJlYmFzZSBEYXRhYmFzZSAoJyArXHJcbiAgICAgICAgQ09OU1RBTlRTLlNES19WRVJTSU9OICtcclxuICAgICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcclxuICAgICAgICBtZXNzYWdlKTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIHN0cmluZ1RvQnl0ZUFycmF5JDEgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAvLyBUT0RPKHVzZXIpOiBVc2UgbmF0aXZlIGltcGxlbWVudGF0aW9ucyBpZi93aGVuIGF2YWlsYWJsZVxyXG4gICAgdmFyIG91dCA9IFtdO1xyXG4gICAgdmFyIHAgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiZcclxuICAgICAgICAgICAgaSArIDEgPCBzdHIubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgJiAweDAzZmYpIDw8IDEwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgwM2ZmKTtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxyXG4gKiBjaGFyYWN0ZXJzIHRvIHdoaWNoIHRoZSBudW1iZXJzIGNvcnJlc3BvbmQuXHJcbiAqIEBwYXJhbSBieXRlcyBBcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBjaGFyYWN0ZXJzLlxyXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXHJcbiAqL1xyXG52YXIgYnl0ZUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbiAoYnl0ZXMpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgcG9zID0gMCwgYyA9IDA7XHJcbiAgICB3aGlsZSAocG9zIDwgYnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGMxID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgIGlmIChjMSA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDE5MSAmJiBjMSA8IDIyNCkge1xyXG4gICAgICAgICAgICB2YXIgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYzEgPiAyMzkgJiYgYzEgPCAzNjUpIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgdmFyIGMyID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICB2YXIgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIHZhciBjNCA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgdmFyIHUgPSAoKChjMSAmIDcpIDw8IDE4KSB8ICgoYzIgJiA2MykgPDwgMTIpIHwgKChjMyAmIDYzKSA8PCA2KSB8IChjNCAmIDYzKSkgLVxyXG4gICAgICAgICAgICAgICAgMHgxMDAwMDtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCArICh1ID4+IDEwKSk7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDAgKyAodSAmIDEwMjMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgdmFyIGMzID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xyXG59O1xyXG4vLyBXZSBkZWZpbmUgaXQgYXMgYW4gb2JqZWN0IGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNsYXNzIGJlY2F1c2UgYSBjbGFzcyBjb21waWxlZCBkb3duIHRvIGVzNSBjYW4ndFxyXG4vLyBiZSB0cmVlc2hha2VkLiBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTY5MVxyXG4vLyBTdGF0aWMgbG9va3VwIG1hcHMsIGxhemlseSBwb3B1bGF0ZWQgYnkgaW5pdF8oKVxyXG52YXIgYmFzZTY0ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGJ5dGVzIHRvIGNoYXJhY3RlcnMuXHJcbiAgICAgKi9cclxuICAgIGJ5dGVUb0NoYXJNYXBfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGNoYXJhY3RlcnMgdG8gYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIGNoYXJUb0J5dGVNYXBfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIGJ5dGVzIHRvIHdlYnNhZmUgY2hhcmFjdGVycy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGJ5dGVUb0NoYXJNYXBXZWJTYWZlXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyB3ZWJzYWZlIGNoYXJhY3RlcnMgdG8gYnl0ZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjaGFyVG9CeXRlTWFwV2ViU2FmZV86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE91ciBkZWZhdWx0IGFscGhhYmV0LCBzaGFyZWQgYmV0d2VlblxyXG4gICAgICogRU5DT0RFRF9WQUxTIGFuZCBFTkNPREVEX1ZBTFNfV0VCU0FGRVxyXG4gICAgICovXHJcbiAgICBFTkNPREVEX1ZBTFNfQkFTRTogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJyArICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgKyAnMDEyMzQ1Njc4OScsXHJcbiAgICAvKipcclxuICAgICAqIE91ciBkZWZhdWx0IGFscGhhYmV0LiBWYWx1ZSA2NCAoPSkgaXMgc3BlY2lhbDsgaXQgbWVhbnMgXCJub3RoaW5nLlwiXHJcbiAgICAgKi9cclxuICAgIGdldCBFTkNPREVEX1ZBTFMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UgKyAnKy89JztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIE91ciB3ZWJzYWZlIGFscGhhYmV0LlxyXG4gICAgICovXHJcbiAgICBnZXQgRU5DT0RFRF9WQUxTX1dFQlNBRkUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UgKyAnLV8uJztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHRoZSBhdG9iIGFuZCBidG9hIGZ1bmN0aW9ucy4gVGhpcyBleHRlbnNpb25cclxuICAgICAqIHN0YXJ0ZWQgYXQgTW96aWxsYSBidXQgaXMgbm93IGltcGxlbWVudGVkIGJ5IG1hbnkgYnJvd3NlcnMuIFdlIHVzZSB0aGVcclxuICAgICAqIEFTU1VNRV8qIHZhcmlhYmxlcyB0byBhdm9pZCBwdWxsaW5nIGluIHRoZSBmdWxsIHVzZXJhZ2VudCBkZXRlY3Rpb24gbGlicmFyeVxyXG4gICAgICogYnV0IHN0aWxsIGFsbG93aW5nIHRoZSBzdGFuZGFyZCBwZXItYnJvd3NlciBjb21waWxhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBIQVNfTkFUSVZFX1NVUFBPUlQ6IHR5cGVvZiBhdG9iID09PSAnZnVuY3Rpb24nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGFuIGFycmF5IG9mIGJ5dGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBBbiBhcnJheSBvZiBieXRlcyAobnVtYmVycyB3aXRoXHJcbiAgICAgKiAgICAgdmFsdWUgaW4gWzAsIDI1NV0pIHRvIGVuY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIEJvb2xlYW4gaW5kaWNhdGluZyB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVCeXRlQXJyYXk6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2VuY29kZUJ5dGVBcnJheSB0YWtlcyBhbiBhcnJheSBhcyBhIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRfKCk7XHJcbiAgICAgICAgdmFyIGJ5dGVUb0NoYXJNYXAgPSB3ZWJTYWZlXHJcbiAgICAgICAgICAgID8gdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV9cclxuICAgICAgICAgICAgOiB0aGlzLmJ5dGVUb0NoYXJNYXBfO1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlMSA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUyID0gaSArIDEgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XHJcbiAgICAgICAgICAgIHZhciBoYXZlQnl0ZTMgPSBpICsgMiA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUzID0gaGF2ZUJ5dGUzID8gaW5wdXRbaSArIDJdIDogMDtcclxuICAgICAgICAgICAgdmFyIG91dEJ5dGUxID0gYnl0ZTEgPj4gMjtcclxuICAgICAgICAgICAgdmFyIG91dEJ5dGUyID0gKChieXRlMSAmIDB4MDMpIDw8IDQpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTMgPSAoKGJ5dGUyICYgMHgwZikgPDwgMikgfCAoYnl0ZTMgPj4gNik7XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlNCA9IGJ5dGUzICYgMHgzZjtcclxuICAgICAgICAgICAgaWYgKCFoYXZlQnl0ZTMpIHtcclxuICAgICAgICAgICAgICAgIG91dEJ5dGU0ID0gNjQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhdmVCeXRlMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dEJ5dGUzID0gNjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMV0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTJdLCBieXRlVG9DaGFyTWFwW291dEJ5dGUzXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlNF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQSBzdHJpbmcgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgSWYgdHJ1ZSwgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlU3RyaW5nOiBmdW5jdGlvbiAoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ0b2EoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVCeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkkMShpbnB1dCksIHdlYlNhZmUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmc6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XHJcbiAgICAgICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxyXG4gICAgICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXRvYihpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBieXRlQXJyYXlUb1N0cmluZyh0aGlzLmRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEluIGJhc2UtNjQgZGVjb2RpbmcsIGdyb3VwcyBvZiBmb3VyIGNoYXJhY3RlcnMgYXJlIGNvbnZlcnRlZCBpbnRvIHRocmVlXHJcbiAgICAgKiBieXRlcy4gIElmIHRoZSBlbmNvZGVyIGRpZCBub3QgYXBwbHkgcGFkZGluZywgdGhlIGlucHV0IGxlbmd0aCBtYXkgbm90XHJcbiAgICAgKiBiZSBhIG11bHRpcGxlIG9mIDQuXHJcbiAgICAgKlxyXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgbGFzdCBncm91cCB3aWxsIGhhdmUgZmV3ZXIgdGhhbiA0IGNoYXJhY3RlcnMsIGFuZFxyXG4gICAgICogcGFkZGluZyB3aWxsIGJlIGluZmVycmVkLiAgSWYgdGhlIGdyb3VwIGhhcyBvbmUgb3IgdHdvIGNoYXJhY3RlcnMsIGl0IGRlY29kZXNcclxuICAgICAqIHRvIG9uZSBieXRlLiAgSWYgdGhlIGdyb3VwIGhhcyB0aHJlZSBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzIHRvIHR3byBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZSB3ZWItc2FmZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmdUb0J5dGVBcnJheTogZnVuY3Rpb24gKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0XygpO1xyXG4gICAgICAgIHZhciBjaGFyVG9CeXRlTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5jaGFyVG9CeXRlTWFwXztcclxuICAgICAgICB2YXIgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUyID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUzID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUzID0gaGF2ZUJ5dGUzID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMSA9IChieXRlMSA8PCAyKSB8IChieXRlMiA+PiA0KTtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTEpO1xyXG4gICAgICAgICAgICBpZiAoYnl0ZTMgIT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0Qnl0ZTIgPSAoKGJ5dGUyIDw8IDQpICYgMHhmMCkgfCAoYnl0ZTMgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZTQgIT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ieXRlVG9DaGFyTWFwXykge1xyXG4gICAgICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8gPSB7fTtcclxuICAgICAgICAgICAgLy8gV2Ugd2FudCBxdWljayBtYXBwaW5ncyBiYWNrIGFuZCBmb3J0aCwgc28gd2UgcHJlY29tcHV0ZSB0d28gbWFwcy5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkVOQ09ERURfVkFMUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5ieXRlVG9DaGFyTWFwX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV9baV0gPSB0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldXSA9IGk7XHJcbiAgICAgICAgICAgICAgICAvLyBCZSBmb3JnaXZpbmcgd2hlbiBkZWNvZGluZyBhbmQgY29ycmVjdGx5IGRlY29kZSBib3RoIGVuY29kaW5ncy5cclxuICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXHJcbiAqL1xyXG52YXIgYmFzZTY0RW5jb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHV0ZjhCeXRlcyA9IHN0cmluZ1RvQnl0ZUFycmF5JDEoc3RyKTtcclxuICAgIHJldHVybiBiYXNlNjQuZW5jb2RlQnl0ZUFycmF5KHV0ZjhCeXRlcywgdHJ1ZSk7XHJcbn07XHJcbi8qKlxyXG4gKiBVUkwtc2FmZSBiYXNlNjQgZGVjb2RpbmdcclxuICpcclxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXHJcbiAqIGJhc2U2NFVybCB2YXJpYW50IGVuY29kaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcclxuICogQHJldHVybiBEZWNvZGVkIHJlc3VsdCwgaWYgcG9zc2libGVcclxuICovXHJcbnZhciBiYXNlNjREZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBiYXNlNjQuZGVjb2RlU3RyaW5nKHN0ciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Jhc2U2NERlY29kZSBmYWlsZWQ6ICcsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEbyBhIGRlZXAtY29weSBvZiBiYXNpYyBKYXZhU2NyaXB0IE9iamVjdHMgb3IgQXJyYXlzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcENvcHkodmFsdWUpIHtcclxuICAgIHJldHVybiBkZWVwRXh0ZW5kKHVuZGVmaW5lZCwgdmFsdWUpO1xyXG59XHJcbi8qKlxyXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0IChyZWN1cnNpdmVseSBhbGxvd3MgZXh0ZW5zaW9uXHJcbiAqIG9mIE9iamVjdHMgYW5kIEFycmF5cykuICBTY2FsYXIgdmFsdWVzIGluIHRoZSB0YXJnZXQgYXJlIG92ZXItd3JpdHRlbi5cclxuICogSWYgdGFyZ2V0IGlzIHVuZGVmaW5lZCwgYW4gb2JqZWN0IG9mIHRoZSBhcHByb3ByaWF0ZSB0eXBlIHdpbGwgYmUgY3JlYXRlZFxyXG4gKiAoYW5kIHJldHVybmVkKS5cclxuICpcclxuICogV2UgcmVjdXJzaXZlbHkgY29weSBhbGwgY2hpbGQgcHJvcGVydGllcyBvZiBwbGFpbiBPYmplY3RzIGluIHRoZSBzb3VyY2UtIHNvXHJcbiAqIHRoYXQgbmFtZXNwYWNlLSBsaWtlIGRpY3Rpb25hcmllcyBhcmUgbWVyZ2VkLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIHRhcmdldCBjYW4gYmUgYSBmdW5jdGlvbiwgaW4gd2hpY2ggY2FzZSB0aGUgcHJvcGVydGllcyBpblxyXG4gKiB0aGUgc291cmNlIE9iamVjdCBhcmUgY29waWVkIG9udG8gaXQgYXMgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIEZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBOb3RlOiB3ZSBkb24ndCBtZXJnZSBfX3Byb3RvX18gdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoc291cmNlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBEYXRlOlxyXG4gICAgICAgICAgICAvLyBUcmVhdCBEYXRlcyBsaWtlIHNjYWxhcnM7IGlmIHRoZSB0YXJnZXQgZGF0ZSBvYmplY3QgaGFkIGFueSBjaGlsZFxyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIC0gdGhleSB3aWxsIGJlIGxvc3QhXHJcbiAgICAgICAgICAgIHZhciBkYXRlVmFsdWUgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlVmFsdWUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjYXNlIE9iamVjdDpcclxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgICAvLyBBbHdheXMgY29weSB0aGUgYXJyYXkgc291cmNlIGFuZCBvdmVyd3JpdGUgdGhlIHRhcmdldC5cclxuICAgICAgICAgICAgdGFyZ2V0ID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIE5vdCBhIHBsYWluIE9iamVjdCAtIHRyZWF0IGl0IGFzIGEgc2NhbGFyLlxyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcclxuICAgICAgICAvLyB1c2UgaXNWYWxpZEtleSB0byBndWFyZCBhZ2FpbnN0IHByb3RvdHlwZSBwb2xsdXRpb24uIFNlZSBodHRwczovL3NueWsuaW8vdnVsbi9TTllLLUpTLUxPREFTSC00NTAyMDJcclxuICAgICAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSB8fCAhaXNWYWxpZEtleShwcm9wKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRGVmZXJyZWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEZWZlcnJlZCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVqZWN0ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICBfdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXHJcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xyXG4gICAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgRGVmZXJyZWQucHJvdG90eXBlLndyYXBDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvciwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXR0YWNoaW5nIG5vb3AgaGFuZGxlciBqdXN0IGluIGNhc2UgZGV2ZWxvcGVyIHdhc24ndCBleHBlY3RpbmdcclxuICAgICAgICAgICAgICAgIC8vIHByb21pc2VzXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVmZXJyZWQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vY2tVc2VyVG9rZW4odG9rZW4sIHByb2plY3RJZCkge1xyXG4gICAgaWYgKHRva2VuLnVpZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIFwidWlkXCIgZmllbGQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBtb2NrVXNlclRva2VuLiBQbGVhc2UgdXNlIFwic3ViXCIgaW5zdGVhZCBmb3IgRmlyZWJhc2UgQXV0aCBVc2VyIElELicpO1xyXG4gICAgfVxyXG4gICAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIFwibm9uZVwiIGFzIHRoZSBhbGdvcml0aG0uXHJcbiAgICB2YXIgaGVhZGVyID0ge1xyXG4gICAgICAgIGFsZzogJ25vbmUnLFxyXG4gICAgICAgIHR5cGU6ICdKV1QnXHJcbiAgICB9O1xyXG4gICAgdmFyIHByb2plY3QgPSBwcm9qZWN0SWQgfHwgJ2RlbW8tcHJvamVjdCc7XHJcbiAgICB2YXIgaWF0ID0gdG9rZW4uaWF0IHx8IDA7XHJcbiAgICB2YXIgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XHJcbiAgICBpZiAoIXN1Yikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vY2tVc2VyVG9rZW4gbXVzdCBjb250YWluICdzdWInIG9yICd1c2VyX2lkJyBmaWVsZCFcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgcGF5bG9hZCA9IF9fYXNzaWduKHsgXHJcbiAgICAgICAgLy8gU2V0IGFsbCByZXF1aXJlZCBmaWVsZHMgdG8gZGVjZW50IGRlZmF1bHRzXHJcbiAgICAgICAgaXNzOiBcImh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9cIiArIHByb2plY3QsIGF1ZDogcHJvamVjdCwgaWF0OiBpYXQsIGV4cDogaWF0ICsgMzYwMCwgYXV0aF90aW1lOiBpYXQsIHN1Yjogc3ViLCB1c2VyX2lkOiBzdWIsIGZpcmViYXNlOiB7XHJcbiAgICAgICAgICAgIHNpZ25faW5fcHJvdmlkZXI6ICdjdXN0b20nLFxyXG4gICAgICAgICAgICBpZGVudGl0aWVzOiB7fVxyXG4gICAgICAgIH0gfSwgdG9rZW4pO1xyXG4gICAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIHRoZSBlbXB0eSBzdHJpbmcgYXMgYSBzaWduYXR1cmUuXHJcbiAgICB2YXIgc2lnbmF0dXJlID0gJyc7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJhc2U2NC5lbmNvZGVTdHJpbmcoSlNPTi5zdHJpbmdpZnkoaGVhZGVyKSwgLyp3ZWJTYWZlPSovIGZhbHNlKSxcclxuICAgICAgICBiYXNlNjQuZW5jb2RlU3RyaW5nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLCAvKndlYlNhZmU9Ki8gZmFsc2UpLFxyXG4gICAgICAgIHNpZ25hdHVyZVxyXG4gICAgXS5qb2luKCcuJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgbmF2aWdhdG9yLnVzZXJBZ2VudCBzdHJpbmcgb3IgJycgaWYgaXQncyBub3QgZGVmaW5lZC5cclxuICogQHJldHVybiB1c2VyIGFnZW50IHN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VUEoKSB7XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB0eXBlb2YgbmF2aWdhdG9yWyd1c2VyQWdlbnQnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yWyd1c2VyQWdlbnQnXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogRGV0ZWN0IENvcmRvdmEgLyBQaG9uZUdhcCAvIElvbmljIGZyYW1ld29ya3Mgb24gYSBtb2JpbGUgZGV2aWNlLlxyXG4gKlxyXG4gKiBEZWxpYmVyYXRlbHkgZG9lcyBub3QgcmVseSBvbiBjaGVja2luZyBgZmlsZTovL2AgVVJMcyAoYXMgdGhpcyBmYWlscyBQaG9uZUdhcFxyXG4gKiBpbiB0aGUgUmlwcGxlIGVtdWxhdG9yKSBub3IgQ29yZG92YSBgb25EZXZpY2VSZWFkeWAsIHdoaWNoIHdvdWxkIG5vcm1hbGx5XHJcbiAqIHdhaXQgZm9yIGEgY2FsbGJhY2suXHJcbiAqL1xyXG5mdW5jdGlvbiBpc01vYmlsZUNvcmRvdmEoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBTZXR0aW5nIHVwIGFuIGJyb2FkbHkgYXBwbGljYWJsZSBpbmRleCBzaWduYXR1cmUgZm9yIFdpbmRvd1xyXG4gICAgICAgIC8vIGp1c3QgdG8gZGVhbCB3aXRoIHRoaXMgY2FzZSB3b3VsZCBwcm9iYWJseSBiZSBhIGJhZCBpZGVhLlxyXG4gICAgICAgICEhKHdpbmRvd1snY29yZG92YSddIHx8IHdpbmRvd1sncGhvbmVnYXAnXSB8fCB3aW5kb3dbJ1Bob25lR2FwJ10pICYmXHJcbiAgICAgICAgL2lvc3xpcGhvbmV8aXBvZHxpcGFkfGFuZHJvaWR8YmxhY2tiZXJyeXxpZW1vYmlsZS9pLnRlc3QoZ2V0VUEoKSkpO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgTm9kZS5qcy5cclxuICpcclxuICogQHJldHVybiB0cnVlIGlmIE5vZGUuanMgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQuXHJcbiAqL1xyXG4vLyBOb2RlIGRldGVjdGlvbiBsb2dpYyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vaWxpYWthbi9kZXRlY3Qtbm9kZS9cclxuZnVuY3Rpb24gaXNOb2RlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogRGV0ZWN0IEJyb3dzZXIgRW52aXJvbm1lbnRcclxuICovXHJcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmO1xyXG59XHJcbmZ1bmN0aW9uIGlzQnJvd3NlckV4dGVuc2lvbigpIHtcclxuICAgIHZhciBydW50aW1lID0gdHlwZW9mIGNocm9tZSA9PT0gJ29iamVjdCdcclxuICAgICAgICA/IGNocm9tZS5ydW50aW1lXHJcbiAgICAgICAgOiB0eXBlb2YgYnJvd3NlciA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyBicm93c2VyLnJ1bnRpbWVcclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gdHlwZW9mIHJ1bnRpbWUgPT09ICdvYmplY3QnICYmIHJ1bnRpbWUuaWQgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IFJlYWN0IE5hdGl2ZS5cclxuICpcclxuICogQHJldHVybiB0cnVlIGlmIFJlYWN0TmF0aXZlIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZSgpIHtcclxuICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yWydwcm9kdWN0J10gPT09ICdSZWFjdE5hdGl2ZScpO1xyXG59XHJcbi8qKiBEZXRlY3RzIEVsZWN0cm9uIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzRWxlY3Ryb24oKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdFbGVjdHJvbi8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIEludGVybmV0IEV4cGxvcmVyLiAqL1xyXG5mdW5jdGlvbiBpc0lFKCkge1xyXG4gICAgdmFyIHVhID0gZ2V0VUEoKTtcclxuICAgIHJldHVybiB1YS5pbmRleE9mKCdNU0lFICcpID49IDAgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIFVuaXZlcnNhbCBXaW5kb3dzIFBsYXRmb3JtIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzVVdQKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignTVNBcHBIb3N0LycpID49IDA7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCB3aGV0aGVyIHRoZSBjdXJyZW50IFNESyBidWlsZCBpcyB0aGUgTm9kZSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaXQncyB0aGUgTm9kZSBTREsgYnVpbGQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc05vZGVTZGsoKSB7XHJcbiAgICByZXR1cm4gQ09OU1RBTlRTLk5PREVfQ0xJRU5UID09PSB0cnVlIHx8IENPTlNUQU5UUy5OT0RFX0FETUlOID09PSB0cnVlO1xyXG59XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xyXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcclxuICAgIHJldHVybiAoIWlzTm9kZSgpICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnU2FmYXJpJykgJiZcclxuICAgICAgICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnQ2hyb21lJykpO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKi9cclxuZnVuY3Rpb24gaXNJbmRleGVkREJBdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gJ2luZGV4ZWREQicgaW4gc2VsZiAmJiBpbmRleGVkREIgIT0gbnVsbDtcclxufVxyXG4vKipcclxuICogVGhpcyBtZXRob2QgdmFsaWRhdGVzIGJyb3dzZXIvc3cgY29udGV4dCBmb3IgaW5kZXhlZERCIGJ5IG9wZW5pbmcgYSBkdW1teSBpbmRleGVkREIgZGF0YWJhc2UgYW5kIHJlamVjdFxyXG4gKiBpZiBlcnJvcnMgb2NjdXIgZHVyaW5nIHRoZSBkYXRhYmFzZSBvcGVuIG9wZXJhdGlvbi5cclxuICpcclxuICogQHRocm93cyBleGNlcHRpb24gaWYgY3VycmVudCBicm93c2VyL3N3IGNvbnRleHQgY2FuJ3QgcnVuIGlkYi5vcGVuIChleDogU2FmYXJpIGlmcmFtZSwgRmlyZWZveFxyXG4gKiBwcml2YXRlIGJyb3dzaW5nKVxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHByZUV4aXN0XzEgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgREJfQ0hFQ0tfTkFNRV8xID0gJ3ZhbGlkYXRlLWJyb3dzZXItY29udGV4dC1mb3ItaW5kZXhlZGRiLWFuYWx5dGljcy1tb2R1bGUnO1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdF8xID0gc2VsZi5pbmRleGVkREIub3BlbihEQl9DSEVDS19OQU1FXzEpO1xyXG4gICAgICAgICAgICByZXF1ZXN0XzEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdF8xLnJlc3VsdC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGRhdGFiYXNlIG9ubHkgd2hlbiBpdCBkb2Vzbid0IHByZS1leGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVFeGlzdF8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbmRleGVkREIuZGVsZXRlRGF0YWJhc2UoREJfQ0hFQ0tfTkFNRV8xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlcXVlc3RfMS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVFeGlzdF8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlcXVlc3RfMS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCgoX2EgPSByZXF1ZXN0XzEuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB8fCAnJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpIHtcclxuICAgIGlmICghbmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbi8qKlxyXG4gKiBQb2x5ZmlsbCBmb3IgYGdsb2JhbFRoaXNgIG9iamVjdC5cclxuICogQHJldHVybnMgdGhlIGBnbG9iYWxUaGlzYCBvYmplY3QgZm9yIHRoZSBnaXZlbiBlbnZpcm9ubWVudC5cclxuICovXHJcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QuJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIEVSUk9SX05BTUUgPSAnRmlyZWJhc2VFcnJvcic7XHJcbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXHJcbnZhciBGaXJlYmFzZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZpcmViYXNlRXJyb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGaXJlYmFzZUVycm9yKGNvZGUsIG1lc3NhZ2UsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIF90aGlzLmN1c3RvbURhdGEgPSBjdXN0b21EYXRhO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBFUlJPUl9OQU1FO1xyXG4gICAgICAgIC8vIEZpeCBGb3IgRVM1XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIEZpcmViYXNlRXJyb3IucHJvdG90eXBlKTtcclxuICAgICAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93bi5cclxuICAgICAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZpcmViYXNlRXJyb3I7XHJcbn0oRXJyb3IpKTtcclxudmFyIEVycm9yRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVycm9yRmFjdG9yeShzZXJ2aWNlLCBzZXJ2aWNlTmFtZSwgZXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gc2VydmljZU5hbWU7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICBFcnJvckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VzdG9tRGF0YSA9IGRhdGFbMF0gfHwge307XHJcbiAgICAgICAgdmFyIGZ1bGxDb2RlID0gdGhpcy5zZXJ2aWNlICsgXCIvXCIgKyBjb2RlO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuZXJyb3JzW2NvZGVdO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdGVtcGxhdGUgPyByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGN1c3RvbURhdGEpIDogJ0Vycm9yJztcclxuICAgICAgICAvLyBTZXJ2aWNlIE5hbWU6IEVycm9yIG1lc3NhZ2UgKHNlcnZpY2UvY29kZSkuXHJcbiAgICAgICAgdmFyIGZ1bGxNZXNzYWdlID0gdGhpcy5zZXJ2aWNlTmFtZSArIFwiOiBcIiArIG1lc3NhZ2UgKyBcIiAoXCIgKyBmdWxsQ29kZSArIFwiKS5cIjtcclxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRmlyZWJhc2VFcnJvcihmdWxsQ29kZSwgZnVsbE1lc3NhZ2UsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXJyb3JGYWN0b3J5O1xyXG59KCkpO1xyXG5mdW5jdGlvbiByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcclxuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKFBBVFRFUk4sIGZ1bmN0aW9uIChfLCBrZXkpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBTdHJpbmcodmFsdWUpIDogXCI8XCIgKyBrZXkgKyBcIj8+XCI7XHJcbiAgICB9KTtcclxufVxyXG52YXIgUEFUVEVSTiA9IC9cXHtcXCQoW159XSspfS9nO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRXZhbHVhdGVzIGEgSlNPTiBzdHJpbmcgaW50byBhIGphdmFzY3JpcHQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIEEgc3RyaW5nIGNvbnRhaW5pbmcgSlNPTi5cclxuICogQHJldHVybiB7Kn0gVGhlIGphdmFzY3JpcHQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIEpTT04uXHJcbiAqL1xyXG5mdW5jdGlvbiBqc29uRXZhbChzdHIpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgSlNPTiByZXByZXNlbnRpbmcgYSBqYXZhc2NyaXB0IG9iamVjdC5cclxuICogQHBhcmFtIHsqfSBkYXRhIEphdmFzY3JpcHQgb2JqZWN0IHRvIGJlIHN0cmluZ2lmaWVkLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBKU09OIGNvbnRlbnRzIG9mIHRoZSBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpbmdpZnkoZGF0YSkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gaW50byBjb25zdGl0dWVudCBwYXJ0cy5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiB3aXRoIGludmFsaWQgLyBpbmNvbXBsZXRlIGNsYWltcyBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBoZWFkZXIgPSB7fSwgY2xhaW1zID0ge30sIGRhdGEgPSB7fSwgc2lnbmF0dXJlID0gJyc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgaGVhZGVyID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzBdKSB8fCAnJyk7XHJcbiAgICAgICAgY2xhaW1zID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzFdKSB8fCAnJyk7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gcGFydHNbMl07XHJcbiAgICAgICAgZGF0YSA9IGNsYWltc1snZCddIHx8IHt9O1xyXG4gICAgICAgIGRlbGV0ZSBjbGFpbXNbJ2QnXTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7IH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyOiBoZWFkZXIsXHJcbiAgICAgICAgY2xhaW1zOiBjbGFpbXMsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZVxyXG4gICAgfTtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgdGltZS1iYXNlZCBjbGFpbXMuIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlXHJcbiAqIHRva2VuIGlzIHdpdGhpbiB0aGUgdGltZSB3aW5kb3cgYXV0aG9yaXplZCBieSB0aGUgJ25iZicgKG5vdC1iZWZvcmUpIGFuZCAnaWF0JyAoaXNzdWVkLWF0KSBjbGFpbXMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbnZhciBpc1ZhbGlkVGltZXN0YW1wID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICB2YXIgbm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgdmFyIHZhbGlkU2luY2UgPSAwLCB2YWxpZFVudGlsID0gMDtcclxuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ25iZicpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ25iZiddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ2lhdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdleHAnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFVudGlsID0gY2xhaW1zWydleHAnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRva2VuIHdpbGwgZXhwaXJlIGFmdGVyIDI0aCBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgIHZhbGlkVW50aWwgPSB2YWxpZFNpbmNlICsgODY0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICghIW5vdyAmJlxyXG4gICAgICAgICEhdmFsaWRTaW5jZSAmJlxyXG4gICAgICAgICEhdmFsaWRVbnRpbCAmJlxyXG4gICAgICAgIG5vdyA+PSB2YWxpZFNpbmNlICYmXHJcbiAgICAgICAgbm93IDw9IHZhbGlkVW50aWwpO1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCByZXR1cm5zIGl0cyBpc3N1ZWQgYXQgdGltZSBpZiB2YWxpZCwgbnVsbCBvdGhlcndpc2UuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gbnVsbCBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbnZhciBpc3N1ZWRBdFRpbWUgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsYWltc1snaWF0J107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgZm9ybWF0LiBFeHBlY3RzIGEgdmFsaWQgaXNzdWVkLWF0IHRpbWUuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbnZhciBpc1ZhbGlkRm9ybWF0ID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgZGVjb2RlZCA9IGRlY29kZSh0b2tlbiksIGNsYWltcyA9IGRlY29kZWQuY2xhaW1zO1xyXG4gICAgcmV0dXJuICEhY2xhaW1zICYmIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0Jyk7XHJcbn07XHJcbi8qKlxyXG4gKiBBdHRlbXB0cyB0byBwZWVyIGludG8gYW4gYXV0aCB0b2tlbiBhbmQgZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWRtaW4gYXV0aCB0b2tlbiBieSBsb29raW5nIGF0IHRoZSBjbGFpbXMgcG9ydGlvbi5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxudmFyIGlzQWRtaW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIHJldHVybiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXNbJ2FkbWluJ10gPT09IHRydWU7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcclxufVxyXG5mdW5jdGlvbiBzYWZlR2V0KG9iaiwga2V5KSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gbWFwKG9iaiwgZm4sIGNvbnRleHRPYmopIHtcclxuICAgIHZhciByZXMgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICByZXNba2V5XSA9IGZuLmNhbGwoY29udGV4dE9iaiwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbi8qKlxyXG4gKiBEZWVwIGVxdWFsIHR3byBvYmplY3RzLiBTdXBwb3J0IEFycmF5cyBhbmQgT2JqZWN0cy5cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XHJcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgYUtleXNfMSA9IGFLZXlzOyBfaSA8IGFLZXlzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGsgPSBhS2V5c18xW19pXTtcclxuICAgICAgICBpZiAoIWJLZXlzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFQcm9wID0gYVtrXTtcclxuICAgICAgICB2YXIgYlByb3AgPSBiW2tdO1xyXG4gICAgICAgIGlmIChpc09iamVjdChhUHJvcCkgJiYgaXNPYmplY3QoYlByb3ApKSB7XHJcbiAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKGFQcm9wLCBiUHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhUHJvcCAhPT0gYlByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9hID0gMCwgYktleXNfMSA9IGJLZXlzOyBfYSA8IGJLZXlzXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgdmFyIGsgPSBiS2V5c18xW19hXTtcclxuICAgICAgICBpZiAoIWFLZXlzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xyXG4gICAgcmV0dXJuIHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWVyeXN0cmluZy1mb3JtYXR0ZWQgc3RyaW5nIChlLmcuICZhcmc9dmFsJmFyZzI9dmFsMikgZnJvbSBhXHJcbiAqIHBhcmFtcyBvYmplY3QgKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqIE5vdGU6IFlvdSBtdXN0IHByZXBlbmQgaXQgd2l0aCA/IHdoZW4gYWRkaW5nIGl0IHRvIGEgVVJMLlxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnlzdHJpbmdQYXJhbXMpIHtcclxuICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXlWYWwpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFycmF5VmFsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKHF1ZXJ5c3RyaW5nUGFyYW1zKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgIF9sb29wXzEoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA/ICcmJyArIHBhcmFtcy5qb2luKCcmJykgOiAnJztcclxufVxyXG4vKipcclxuICogRGVjb2RlcyBhIHF1ZXJ5c3RyaW5nIChlLmcuID9hcmc9dmFsJmFyZzI9dmFsMikgaW50byBhIHBhcmFtcyBvYmplY3RcclxuICogKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZ0RlY29kZShxdWVyeXN0cmluZykge1xyXG4gICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgdmFyIHRva2VucyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcclxuICAgIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0b2tlbi5zcGxpdCgnPScpLCBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxyXG4gKi9cclxuZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5c3RyaW5nKHVybCkge1xyXG4gICAgdmFyIHF1ZXJ5U3RhcnQgPSB1cmwuaW5kZXhPZignPycpO1xyXG4gICAgaWYgKCFxdWVyeVN0YXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIGZyYWdtZW50U3RhcnQgPSB1cmwuaW5kZXhPZignIycsIHF1ZXJ5U3RhcnQpO1xyXG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydCwgZnJhZ21lbnRTdGFydCA+IDAgPyBmcmFnbWVudFN0YXJ0IDogdW5kZWZpbmVkKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2guXHJcbiAqIFZhcmlhYmxlIG5hbWVzIGZvbGxvdyB0aGUgbm90YXRpb24gaW4gRklQUyBQVUIgMTgwLTM6XHJcbiAqIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtMy9maXBzMTgwLTNfZmluYWwucGRmLlxyXG4gKlxyXG4gKiBVc2FnZTpcclxuICogICB2YXIgc2hhMSA9IG5ldyBzaGExKCk7XHJcbiAqICAgc2hhMS51cGRhdGUoYnl0ZXMpO1xyXG4gKiAgIHZhciBoYXNoID0gc2hhMS5kaWdlc3QoKTtcclxuICpcclxuICogUGVyZm9ybWFuY2U6XHJcbiAqICAgQ2hyb21lIDIzOiAgIH40MDAgTWJpdC9zXHJcbiAqICAgRmlyZWZveCAxNjogIH4yNTAgTWJpdC9zXHJcbiAqXHJcbiAqL1xyXG4vKipcclxuICogU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoIGNvbnN0cnVjdG9yLlxyXG4gKlxyXG4gKiBUaGUgcHJvcGVydGllcyBkZWNsYXJlZCBoZXJlIGFyZSBkaXNjdXNzZWQgaW4gdGhlIGFib3ZlIGFsZ29yaXRobSBkb2N1bWVudC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBmaW5hbFxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgU2hhMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNoYTEoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSG9sZHMgdGhlIHByZXZpb3VzIHZhbHVlcyBvZiBhY2N1bXVsYXRlZCB2YXJpYWJsZXMgYS1lIGluIHRoZSBjb21wcmVzc19cclxuICAgICAgICAgKiBmdW5jdGlvbi5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hhaW5fID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBidWZmZXIgaG9sZGluZyB0aGUgcGFydGlhbGx5IGNvbXB1dGVkIGhhc2ggcmVzdWx0LlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5idWZfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gYXJyYXkgb2YgODAgYnl0ZXMsIGVhY2ggYSBwYXJ0IG9mIHRoZSBtZXNzYWdlIHRvIGJlIGhhc2hlZC4gIFJlZmVycmVkIHRvXHJcbiAgICAgICAgICogYXMgdGhlIG1lc3NhZ2Ugc2NoZWR1bGUgaW4gdGhlIGRvY3MuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLldfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29udGFpbnMgZGF0YSBuZWVkZWQgdG8gcGFkIG1lc3NhZ2VzIGxlc3MgdGhhbiA2NCBieXRlcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucGFkXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gNTEyIC8gODtcclxuICAgICAgICB0aGlzLnBhZF9bMF0gPSAxMjg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmJsb2NrU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFkX1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIFNoYTEucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzBdID0gMHg2NzQ1MjMwMTtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9IDB4ZWZjZGFiODk7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAweDk4YmFkY2ZlO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzNdID0gMHgxMDMyNTQ3NjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9IDB4YzNkMmUxZjA7XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxfID0gMDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIGNvbXByZXNzIGhlbHBlciBmdW5jdGlvbi5cclxuICAgICAqIEBwYXJhbSBidWYgQmxvY2sgdG8gY29tcHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IE9mZnNldCBvZiB0aGUgYmxvY2sgaW4gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIFNoYTEucHJvdG90eXBlLmNvbXByZXNzXyA9IGZ1bmN0aW9uIChidWYsIG9mZnNldCkge1xyXG4gICAgICAgIGlmICghb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBXID0gdGhpcy5XXztcclxuICAgICAgICAvLyBnZXQgMTYgYmlnIGVuZGlhbiB3b3Jkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8odXNlcik6IFtidWcgODE0MDEyMl0gUmVjZW50IHZlcnNpb25zIG9mIFNhZmFyaSBmb3IgTWFjIE9TIGFuZCBpT1NcclxuICAgICAgICAgICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBkdXJpbmcgSklUIGNvbXBpbGF0aW9uLiAgV2UgaGF2ZSBjb2RlIHRoYXQgZGVwZW5kcyBoZWF2aWx5IG9uIFNIQS0xIGZvclxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdG5lc3MgYW5kIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgYnVnLCBzbyBJJ3ZlIHJlbW92ZWQgYWxsIHVzZXNcclxuICAgICAgICAgICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY2hhbmdlIG9uY2UgdGhlIFNhZmFyaSBidWdcclxuICAgICAgICAgICAgICAgIC8vIChodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA5MDM2KSBoYXMgYmVlbiBmaXhlZCBhbmRcclxuICAgICAgICAgICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQpIDw8IDI0KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAxKSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMikgPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWYuY2hhckNvZGVBdChvZmZzZXQgKyAzKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDFdIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0ICsgMl0gPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleHBhbmQgdG8gODAgd29yZHNcclxuICAgICAgICBmb3IgKHZhciBpID0gMTY7IGkgPCA4MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gV1tpIC0gM10gXiBXW2kgLSA4XSBeIFdbaSAtIDE0XSBeIFdbaSAtIDE2XTtcclxuICAgICAgICAgICAgV1tpXSA9ICgodCA8PCAxKSB8ICh0ID4+PiAzMSkpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNoYWluX1swXTtcclxuICAgICAgICB2YXIgYiA9IHRoaXMuY2hhaW5fWzFdO1xyXG4gICAgICAgIHZhciBjID0gdGhpcy5jaGFpbl9bMl07XHJcbiAgICAgICAgdmFyIGQgPSB0aGlzLmNoYWluX1szXTtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuY2hhaW5fWzRdO1xyXG4gICAgICAgIHZhciBmLCBrO1xyXG4gICAgICAgIC8vIFRPRE8odXNlcik6IFRyeSB0byB1bnJvbGwgdGhpcyBsb29wIHRvIHNwZWVkIHVwIHRoZSBjb21wdXRhdGlvbi5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPCA0MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBkIF4gKGIgJiAoYyBeIGQpKTtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg1YTgyNzk5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4NmVkOWViYTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IChiICYgYykgfCAoZCAmIChiIHwgYykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDhmMWJiY2RjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHhjYTYyYzFkNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdCA9ICgoKGEgPDwgNSkgfCAoYSA+Pj4gMjcpKSArIGYgKyBlICsgayArIFdbaV0pICYgMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgZSA9IGQ7XHJcbiAgICAgICAgICAgIGQgPSBjO1xyXG4gICAgICAgICAgICBjID0gKChiIDw8IDMwKSB8IChiID4+PiAyKSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICBiID0gYTtcclxuICAgICAgICAgICAgYSA9IHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhaW5fWzBdID0gKHRoaXMuY2hhaW5fWzBdICsgYSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzFdID0gKHRoaXMuY2hhaW5fWzFdICsgYikgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzJdID0gKHRoaXMuY2hhaW5fWzJdICsgYykgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzNdID0gKHRoaXMuY2hhaW5fWzNdICsgZCkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzRdID0gKHRoaXMuY2hhaW5fWzRdICsgZSkgJiAweGZmZmZmZmZmO1xyXG4gICAgfTtcclxuICAgIFNoYTEucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChieXRlcywgbGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gVE9ETyhqb2hubGVueik6IHRpZ2h0ZW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBhbmQgcmVtb3ZlIHRoaXMgY2hlY2tcclxuICAgICAgICBpZiAoYnl0ZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZW5ndGggPSBieXRlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW5ndGhNaW51c0Jsb2NrID0gbGVuZ3RoIC0gdGhpcy5ibG9ja1NpemU7XHJcbiAgICAgICAgdmFyIG4gPSAwO1xyXG4gICAgICAgIC8vIFVzaW5nIGxvY2FsIGluc3RlYWQgb2YgbWVtYmVyIHZhcmlhYmxlcyBnaXZlcyB+NSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LlxyXG4gICAgICAgIHZhciBidWYgPSB0aGlzLmJ1Zl87XHJcbiAgICAgICAgdmFyIGluYnVmID0gdGhpcy5pbmJ1Zl87XHJcbiAgICAgICAgLy8gVGhlIG91dGVyIHdoaWxlIGxvb3Agc2hvdWxkIGV4ZWN1dGUgYXQgbW9zdCB0d2ljZS5cclxuICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBXaGVuIHdlIGhhdmUgbm8gZGF0YSBpbiB0aGUgYmxvY2sgdG8gdG9wIHVwLCB3ZSBjYW4gZGlyZWN0bHkgcHJvY2VzcyB0aGVcclxuICAgICAgICAgICAgLy8gaW5wdXQgYnVmZmVyIChhc3N1bWluZyBpdCBjb250YWlucyBzdWZmaWNpZW50IGRhdGEpLiBUaGlzIGdpdmVzIH4yNSVcclxuICAgICAgICAgICAgLy8gc3BlZWR1cCBvbiBDaHJvbWUgMjMgYW5kIH4xNSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LCBidXQgcmVxdWlyZXMgdGhhdFxyXG4gICAgICAgICAgICAvLyB0aGUgZGF0YSBpcyBwcm92aWRlZCBpbiBsYXJnZSBjaHVua3MgKG9yIGluIG11bHRpcGxlcyBvZiA2NCBieXRlcykuXHJcbiAgICAgICAgICAgIGlmIChpbmJ1ZiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPD0gbGVuZ3RoTWludXNCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ5dGVzLCBuKTtcclxuICAgICAgICAgICAgICAgICAgICBuICs9IHRoaXMuYmxvY2tTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlcy5jaGFyQ29kZUF0KG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICsraW5idWY7XHJcbiAgICAgICAgICAgICAgICAgICAgKytuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmJ1ZiA9PT0gdGhpcy5ibG9ja1NpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5idWYgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBKdW1wIHRvIHRoZSBvdXRlciBsb29wIHNvIHdlIHVzZSB0aGUgZnVsbC1ibG9jayBvcHRpbWl6YXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmW2luYnVmXSA9IGJ5dGVzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgICsraW5idWY7XHJcbiAgICAgICAgICAgICAgICAgICAgKytuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmJ1ZiA9PT0gdGhpcy5ibG9ja1NpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5idWYgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBKdW1wIHRvIHRoZSBvdXRlciBsb29wIHNvIHdlIHVzZSB0aGUgZnVsbC1ibG9jayBvcHRpbWl6YXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluYnVmXyA9IGluYnVmO1xyXG4gICAgICAgIHRoaXMudG90YWxfICs9IGxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKiogQG92ZXJyaWRlICovXHJcbiAgICBTaGExLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpZ2VzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0b3RhbEJpdHMgPSB0aGlzLnRvdGFsXyAqIDg7XHJcbiAgICAgICAgLy8gQWRkIHBhZCAweDgwIDB4MDAqLlxyXG4gICAgICAgIGlmICh0aGlzLmluYnVmXyA8IDU2KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgNTYgLSB0aGlzLmluYnVmXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIHRoaXMuYmxvY2tTaXplIC0gKHRoaXMuaW5idWZfIC0gNTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkICMgYml0cy5cclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5ibG9ja1NpemUgLSAxOyBpID49IDU2OyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5idWZfW2ldID0gdG90YWxCaXRzICYgMjU1O1xyXG4gICAgICAgICAgICB0b3RhbEJpdHMgLz0gMjU2OyAvLyBEb24ndCB1c2UgYml0LXNoaWZ0aW5nIGhlcmUhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcHJlc3NfKHRoaXMuYnVmXyk7XHJcbiAgICAgICAgdmFyIG4gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAyNDsgaiA+PSAwOyBqIC09IDgpIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdFtuXSA9ICh0aGlzLmNoYWluX1tpXSA+PiBqKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnZXN0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGExO1xyXG59KCkpO1xuXG4vKipcclxuICogSGVscGVyIHRvIG1ha2UgYSBTdWJzY3JpYmUgZnVuY3Rpb24gKGp1c3QgbGlrZSBQcm9taXNlIGhlbHBzIG1ha2UgYVxyXG4gKiBUaGVuYWJsZSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxyXG4gKiAgICAgYXMgYSBwcm94eS5cclxuICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaWJlKGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XHJcbiAgICB2YXIgcHJveHkgPSBuZXcgT2JzZXJ2ZXJQcm94eShleGVjdXRvciwgb25Ob09ic2VydmVycyk7XHJcbiAgICByZXR1cm4gcHJveHkuc3Vic2NyaWJlLmJpbmQocHJveHkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnQgZmFuLW91dCBmb3IgYW55IG51bWJlciBvZiBPYnNlcnZlcnMgYXR0YWNoZWQgdmlhIGEgc3Vic2NyaWJlXHJcbiAqIGZ1bmN0aW9uLlxyXG4gKi9cclxudmFyIE9ic2VydmVyUHJveHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxyXG4gICAgICogICAgIGFzIGEgcHJveHkuXHJcbiAgICAgKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIE9ic2VydmVyUHJveHkoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIE1pY3JvLXRhc2sgc2NoZWR1bGluZyBieSBjYWxsaW5nIHRhc2sudGhlbigpLlxyXG4gICAgICAgIHRoaXMudGFzayA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gb25Ob09ic2VydmVycztcclxuICAgICAgICAvLyBDYWxsIHRoZSBleGVjdXRvciBhc3luY2hyb25vdXNseSBzbyBzdWJzY3JpYmVycyB0aGF0IGFyZSBjYWxsZWRcclxuICAgICAgICAvLyBzeW5jaHJvbm91c2x5IGFmdGVyIHRoZSBjcmVhdGlvbiBvZiB0aGUgc3Vic2NyaWJlIGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gY2FuIHN0aWxsIHJlY2VpdmUgdGhlIHZlcnkgZmlyc3QgdmFsdWUgZ2VuZXJhdGVkIGluIHRoZSBleGVjdXRvci5cclxuICAgICAgICB0aGlzLnRhc2tcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGVjdXRvcihfdGhpcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmVycm9yKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZShlcnJvcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIGFuIE9ic2VydmVyIHRvIHRoZSBmYW4tb3V0IGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogLSBXZSByZXF1aXJlIHRoYXQgbm8gZXZlbnQgaXMgc2VudCB0byBhIHN1YnNjcmliZXIgc3ljaHJvbm91c2x5IHRvIHRoZWlyXHJcbiAgICAgKiAgIGNhbGwgdG8gc3Vic2NyaWJlKCkuXHJcbiAgICAgKi9cclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb2JzZXJ2ZXI7XHJcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgZXJyb3IgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBPYnNlcnZlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXNzZW1ibGUgYW4gT2JzZXJ2ZXIgb2JqZWN0IHdoZW4gcGFzc2VkIGFzIGNhbGxiYWNrIGZ1bmN0aW9ucy5cclxuICAgICAgICBpZiAoaW1wbGVtZW50c0FueU1ldGhvZHMobmV4dE9yT2JzZXJ2ZXIsIFtcclxuICAgICAgICAgICAgJ25leHQnLFxyXG4gICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAnY29tcGxldGUnXHJcbiAgICAgICAgXSkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgICAgICAgbmV4dDogbmV4dE9yT2JzZXJ2ZXIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLm5leHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0ID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1bnN1YiA9IHRoaXMudW5zdWJzY3JpYmVPbmUuYmluZCh0aGlzLCB0aGlzLm9ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gc3Vic2NyaWJlIHRvIGEgdGVybWluYXRlZCBPYnNlcnZhYmxlIC0gd2VcclxuICAgICAgICAvLyBqdXN0IHJlc3BvbmQgdG8gdGhlIE9ic2VydmVyIHdpdGggdGhlIGZpbmFsIGVycm9yIG9yIGNvbXBsZXRlXHJcbiAgICAgICAgLy8gZXZlbnQuXHJcbiAgICAgICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy50YXNrLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZmluYWxFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihfdGhpcy5maW5hbEVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICByZXR1cm4gdW5zdWI7XHJcbiAgICB9O1xyXG4gICAgLy8gVW5zdWJzY3JpYmUgaXMgc3luY2hyb25vdXMgLSB3ZSBndWFyYW50ZWUgdGhhdCBubyBldmVudHMgYXJlIHNlbnQgdG9cclxuICAgIC8vIGFueSB1bnN1YnNjcmliZWQgT2JzZXJ2ZXIuXHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS51bnN1YnNjcmliZU9uZSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzID09PSB1bmRlZmluZWQgfHwgdGhpcy5vYnNlcnZlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tpXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuZm9yRWFjaE9ic2VydmVyID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgIC8vIEFscmVhZHkgY2xvc2VkIGJ5IHByZXZpb3VzIGV2ZW50Li4uLmp1c3QgZWF0IHRoZSBhZGRpdGlvbmFsIHZhbHVlcy5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTaW5jZSBzZW5kT25lIGNhbGxzIGFzeW5jaHJvbm91c2x5IC0gdGhlcmUgaXMgbm8gY2hhbmNlIHRoYXRcclxuICAgICAgICAvLyB0aGlzLm9ic2VydmVycyB3aWxsIGJlY29tZSB1bmRlZmluZWQuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9ic2VydmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRPbmUoaSwgZm4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBDYWxsIHRoZSBPYnNlcnZlciB2aWEgb25lIG9mIGl0J3MgY2FsbGJhY2sgZnVuY3Rpb24uIFdlIGFyZSBjYXJlZnVsIHRvXHJcbiAgICAvLyBjb25maXJtIHRoYXQgdGhlIG9ic2VydmUgaGFzIG5vdCBiZWVuIHVuc3Vic2NyaWJlZCBzaW5jZSB0aGlzIGFzeW5jaHJvbm91c1xyXG4gICAgLy8gZnVuY3Rpb24gaGFkIGJlZW4gcXVldWVkLlxyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuc2VuZE9uZSA9IGZ1bmN0aW9uIChpLCBmbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgY2FsbGJhY2sgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy50YXNrLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQgJiYgX3RoaXMub2JzZXJ2ZXJzW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm4oX3RoaXMub2JzZXJ2ZXJzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGV4Y2VwdGlvbnMgcmFpc2VkIGluIE9ic2VydmVycyBvciBtaXNzaW5nIG1ldGhvZHMgb2YgYW5cclxuICAgICAgICAgICAgICAgICAgICAvLyBPYnNlcnZlci5cclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2cgZXJyb3IgdG8gY29uc29sZS4gYi8zMTQwNDgwNlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChlcnIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmFsRXJyb3IgPSBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFByb3h5IGlzIG5vIGxvbmdlciBuZWVkZWQgLSBnYXJiYWdlIGNvbGxlY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLnRhc2sudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgX3RoaXMub25Ob09ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2JzZXJ2ZXJQcm94eTtcclxufSgpKTtcclxuLyoqIFR1cm4gc3luY2hyb25vdXMgZnVuY3Rpb24gaW50byBvbmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5LiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5mdW5jdGlvbiBhc3luYyhmbiwgb25FcnJvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbXBsZW1lbnRzQW55TWV0aG9kcyhvYmosIG1ldGhvZHMpIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIG1ldGhvZHNfMSA9IG1ldGhvZHM7IF9pIDwgbWV0aG9kc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBtZXRob2RzXzFbX2ldO1xyXG4gICAgICAgIGlmIChtZXRob2QgaW4gb2JqICYmIHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gbm9vcCgpIHtcclxuICAgIC8vIGRvIG5vdGhpbmdcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwcm92aWRlZCBmb3IgYSBwdWJsaWMgZnVuY3Rpb24uXHJcbiAqIFRocm93cyBhbiBlcnJvciBpZiBpdCBmYWlscy5cclxuICpcclxuICogQHBhcmFtIGZuTmFtZSBUaGUgZnVuY3Rpb24gbmFtZVxyXG4gKiBAcGFyYW0gbWluQ291bnQgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhbGxvdyBmb3IgdGhlIGZ1bmN0aW9uIGNhbGxcclxuICogQHBhcmFtIG1heENvdW50IFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudCB0byBhbGxvdyBmb3IgdGhlIGZ1bmN0aW9uIGNhbGxcclxuICogQHBhcmFtIGFyZ0NvdW50IFRoZSBhY3R1YWwgbnVtYmVyIG9mIGFyZ3VtZW50cyBwcm92aWRlZC5cclxuICovXHJcbnZhciB2YWxpZGF0ZUFyZ0NvdW50ID0gZnVuY3Rpb24gKGZuTmFtZSwgbWluQ291bnQsIG1heENvdW50LCBhcmdDb3VudCkge1xyXG4gICAgdmFyIGFyZ0Vycm9yO1xyXG4gICAgaWYgKGFyZ0NvdW50IDwgbWluQ291bnQpIHtcclxuICAgICAgICBhcmdFcnJvciA9ICdhdCBsZWFzdCAnICsgbWluQ291bnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhcmdDb3VudCA+IG1heENvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSBtYXhDb3VudCA9PT0gMCA/ICdub25lJyA6ICdubyBtb3JlIHRoYW4gJyArIG1heENvdW50O1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ0Vycm9yKSB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gZm5OYW1lICtcclxuICAgICAgICAgICAgJyBmYWlsZWQ6IFdhcyBjYWxsZWQgd2l0aCAnICtcclxuICAgICAgICAgICAgYXJnQ291bnQgK1xyXG4gICAgICAgICAgICAoYXJnQ291bnQgPT09IDEgPyAnIGFyZ3VtZW50LicgOiAnIGFyZ3VtZW50cy4nKSArXHJcbiAgICAgICAgICAgICcgRXhwZWN0cyAnICtcclxuICAgICAgICAgICAgYXJnRXJyb3IgK1xyXG4gICAgICAgICAgICAnLic7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxyXG4gKiBAcmV0dXJuIFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBlcnJvciB0aHJvd24gZm9yIHZhbGlkYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWUsIGFyZ05hbWUpIHtcclxuICAgIHJldHVybiBmbk5hbWUgKyBcIiBmYWlsZWQ6IFwiICsgYXJnTmFtZSArIFwiIGFyZ3VtZW50IFwiO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gZm5OYW1lXHJcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSBvcHRpb25hbFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoZm5OYW1lLCBuYW1lc3BhY2UsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIW5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vVE9ETzogSSBzaG91bGQgZG8gbW9yZSB2YWxpZGF0aW9uIGhlcmUuIFdlIG9ubHkgYWxsb3cgY2VydGFpbiBjaGFycyBpbiBuYW1lc3BhY2VzLlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsICduYW1lc3BhY2UnKSArICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLicpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soZm5OYW1lLCBhcmd1bWVudE5hbWUsIFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5jYWxsYmFjaywgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0T2JqZWN0KGZuTmFtZSwgYXJndW1lbnROYW1lLCBjb250ZXh0LCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnb2JqZWN0JyB8fCBjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJyk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLy8gQ29kZSBvcmlnaW5hbGx5IGNhbWUgZnJvbSBnb29nLmNyeXB0LnN0cmluZ1RvVXRmOEJ5dGVBcnJheSwgYnV0IGZvciBzb21lIHJlYXNvbiB0aGV5XHJcbi8vIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgJ1xcclxcbicgd2l0aCAnXFxuJywgYW5kIHRoZXkgZGlkbid0IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMsXHJcbi8vIHNvIGl0J3MgYmVlbiBtb2RpZmllZC5cclxuLy8gTm90ZSB0aGF0IG5vdCBhbGwgVW5pY29kZSBjaGFyYWN0ZXJzIGFwcGVhciBhcyBzaW5nbGUgY2hhcmFjdGVycyBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXHJcbi8vIGZyb21DaGFyQ29kZSByZXR1cm5zIHRoZSBVVEYtMTYgZW5jb2Rpbmcgb2YgYSBjaGFyYWN0ZXIgLSBzbyBzb21lIFVuaWNvZGUgY2hhcmFjdGVyc1xyXG4vLyB1c2UgMiBjaGFyYWN0ZXJzIGluIEphdmFzY3JpcHQuICBBbGwgNC1ieXRlIFVURi04IGNoYXJhY3RlcnMgYmVnaW4gd2l0aCBhIGZpcnN0XHJcbi8vIGNoYXJhY3RlciBpbiB0aGUgcmFuZ2UgMHhEODAwIC0gMHhEQkZGICh0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc28tY2FsbGVkIHN1cnJvZ2F0ZVxyXG4vLyBwYWlyKS5cclxuLy8gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xNS4xLjNcclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xyXG52YXIgc3RyaW5nVG9CeXRlQXJyYXkgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgLy8gSXMgdGhpcyB0aGUgbGVhZCBzdXJyb2dhdGUgaW4gYSBzdXJyb2dhdGUgcGFpcj9cclxuICAgICAgICBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgdmFyIGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGFzc2VydChpIDwgc3RyLmxlbmd0aCwgJ1N1cnJvZ2F0ZSBwYWlyIG1pc3NpbmcgdHJhaWwgc3Vycm9nYXRlLicpO1xyXG4gICAgICAgICAgICB2YXIgbG93ID0gc3RyLmNoYXJDb2RlQXQoaSkgLSAweGRjMDA7IC8vIHRoZSBsb3cgMTAgYml0cy5cclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoaGlnaCA8PCAxMCkgKyBsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDY1NTM2KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgbGVuZ3RoIHdpdGhvdXQgYWN0dWFsbHkgY29udmVydGluZzsgdXNlZnVsIGZvciBkb2luZyBjaGVhcGVyIHZhbGlkYXRpb24uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBwID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIHAgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cclxuICAgICAgICAgICAgcCArPSA0O1xyXG4gICAgICAgICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCArPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gZXhwb25lbnRpYWxseSBpbmNyZWFzZS5cclxuICovXHJcbnZhciBERUZBVUxUX0lOVEVSVkFMX01JTExJUyA9IDEwMDA7XHJcbi8qKlxyXG4gKiBUaGUgZmFjdG9yIHRvIGJhY2tvZmYgYnkuXHJcbiAqIFNob3VsZCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMS5cclxuICovXHJcbnZhciBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SID0gMjtcclxuLyoqXHJcbiAqIFRoZSBtYXhpbXVtIG1pbGxpc2Vjb25kcyB0byBpbmNyZWFzZSB0by5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxudmFyIE1BWF9WQUxVRV9NSUxMSVMgPSA0ICogNjAgKiA2MCAqIDEwMDA7IC8vIEZvdXIgaG91cnMsIGxpa2UgaU9TIGFuZCBBbmRyb2lkLlxyXG4vKipcclxuICogVGhlIHBlcmNlbnRhZ2Ugb2YgYmFja29mZiB0aW1lIHRvIHJhbmRvbWl6ZSBieS5cclxuICogU2VlXHJcbiAqIGh0dHA6Ly9nby9zYWZlLWNsaWVudC1iZWhhdmlvciNzdGVwLTEtZGV0ZXJtaW5lLXRoZS1hcHByb3ByaWF0ZS1yZXRyeS1pbnRlcnZhbC10by1oYW5kbGUtc3Bpa2UtdHJhZmZpY1xyXG4gKiBmb3IgY29udGV4dC5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxudmFyIFJBTkRPTV9GQUNUT1IgPSAwLjU7XHJcbi8qKlxyXG4gKiBCYXNlZCBvbiB0aGUgYmFja29mZiBtZXRob2QgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtbGlicmFyeS9ibG9iL21hc3Rlci9jbG9zdXJlL2dvb2cvbWF0aC9leHBvbmVudGlhbGJhY2tvZmYuanMuXHJcbiAqIEV4dHJhY3RlZCBoZXJlIHNvIHdlIGRvbid0IG5lZWQgdG8gcGFzcyBtZXRhZGF0YSBhbmQgYSBzdGF0ZWZ1bCBFeHBvbmVudGlhbEJhY2tvZmYgb2JqZWN0IGFyb3VuZC5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMoYmFja29mZkNvdW50LCBpbnRlcnZhbE1pbGxpcywgYmFja29mZkZhY3Rvcikge1xyXG4gICAgaWYgKGludGVydmFsTWlsbGlzID09PSB2b2lkIDApIHsgaW50ZXJ2YWxNaWxsaXMgPSBERUZBVUxUX0lOVEVSVkFMX01JTExJUzsgfVxyXG4gICAgaWYgKGJhY2tvZmZGYWN0b3IgPT09IHZvaWQgMCkgeyBiYWNrb2ZmRmFjdG9yID0gREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUjsgfVxyXG4gICAgLy8gQ2FsY3VsYXRlcyBhbiBleHBvbmVudGlhbGx5IGluY3JlYXNpbmcgdmFsdWUuXHJcbiAgICAvLyBEZXZpYXRpb246IGNhbGN1bGF0ZXMgdmFsdWUgZnJvbSBjb3VudCBhbmQgYSBjb25zdGFudCBpbnRlcnZhbCwgc28gd2Ugb25seSBuZWVkIHRvIHNhdmUgdmFsdWVcclxuICAgIC8vIGFuZCBjb3VudCB0byByZXN0b3JlIHN0YXRlLlxyXG4gICAgdmFyIGN1cnJCYXNlVmFsdWUgPSBpbnRlcnZhbE1pbGxpcyAqIE1hdGgucG93KGJhY2tvZmZGYWN0b3IsIGJhY2tvZmZDb3VudCk7XHJcbiAgICAvLyBBIHJhbmRvbSBcImZ1enpcIiB0byBhdm9pZCB3YXZlcyBvZiByZXRyaWVzLlxyXG4gICAgLy8gRGV2aWF0aW9uOiByYW5kb21GYWN0b3IgaXMgcmVxdWlyZWQuXHJcbiAgICB2YXIgcmFuZG9tV2FpdCA9IE1hdGgucm91bmQoXHJcbiAgICAvLyBBIGZyYWN0aW9uIG9mIHRoZSBiYWNrb2ZmIHZhbHVlIHRvIGFkZC9zdWJ0cmFjdC5cclxuICAgIC8vIERldmlhdGlvbjogY2hhbmdlcyBtdWx0aXBsaWNhdGlvbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5LlxyXG4gICAgUkFORE9NX0ZBQ1RPUiAqXHJcbiAgICAgICAgY3VyckJhc2VWYWx1ZSAqXHJcbiAgICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXHJcbiAgICAgICAgLy8gaWYgd2UgYWRkIG9yIHN1YnRyYWN0LlxyXG4gICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqXHJcbiAgICAgICAgMik7XHJcbiAgICAvLyBMaW1pdHMgYmFja29mZiB0byBtYXggdG8gYXZvaWQgZWZmZWN0aXZlbHkgcGVybWFuZW50IGJhY2tvZmYuXHJcbiAgICByZXR1cm4gTWF0aC5taW4oTUFYX1ZBTFVFX01JTExJUywgY3VyckJhc2VWYWx1ZSArIHJhbmRvbVdhaXQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlIEVuZ2xpc2ggb3JkaW5hbCBsZXR0ZXJzIGFmdGVyIGEgbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBvcmRpbmFsKGkpIHtcclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGkgKyBpbmRpY2F0b3IoaSk7XHJcbn1cclxuZnVuY3Rpb24gaW5kaWNhdG9yKGkpIHtcclxuICAgIGkgPSBNYXRoLmFicyhpKTtcclxuICAgIHZhciBjZW50ID0gaSAlIDEwMDtcclxuICAgIGlmIChjZW50ID49IDEwICYmIGNlbnQgPD0gMjApIHtcclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuICAgIHZhciBkZWMgPSBpICUgMTA7XHJcbiAgICBpZiAoZGVjID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdCc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVjID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuICduZCc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVjID09PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ3RoJztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNb2R1bGFySW5zdGFuY2Uoc2VydmljZSkge1xyXG4gICAgaWYgKHNlcnZpY2UgJiYgc2VydmljZS5fZGVsZWdhdGUpIHtcclxuICAgICAgICByZXR1cm4gc2VydmljZS5fZGVsZWdhdGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc2VydmljZTtcclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBDT05TVEFOVFMsIERlZmVycmVkLCBFcnJvckZhY3RvcnksIEZpcmViYXNlRXJyb3IsIE1BWF9WQUxVRV9NSUxMSVMsIFJBTkRPTV9GQUNUT1IsIFNoYTEsIGFyZUNvb2tpZXNFbmFibGVkLCBhc3NlcnQsIGFzc2VydGlvbkVycm9yLCBhc3luYywgYmFzZTY0LCBiYXNlNjREZWNvZGUsIGJhc2U2NEVuY29kZSwgY2FsY3VsYXRlQmFja29mZk1pbGxpcywgY29udGFpbnMsIGNyZWF0ZU1vY2tVc2VyVG9rZW4sIGNyZWF0ZVN1YnNjcmliZSwgZGVjb2RlLCBkZWVwQ29weSwgZGVlcEVxdWFsLCBkZWVwRXh0ZW5kLCBlcnJvclByZWZpeCwgZXh0cmFjdFF1ZXJ5c3RyaW5nLCBnZXRHbG9iYWwsIGdldE1vZHVsYXJJbnN0YW5jZSwgZ2V0VUEsIGlzQWRtaW4sIGlzQnJvd3NlciwgaXNCcm93c2VyRXh0ZW5zaW9uLCBpc0VsZWN0cm9uLCBpc0VtcHR5LCBpc0lFLCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgaXNNb2JpbGVDb3Jkb3ZhLCBpc05vZGUsIGlzTm9kZVNkaywgaXNSZWFjdE5hdGl2ZSwgaXNTYWZhcmksIGlzVVdQLCBpc1ZhbGlkRm9ybWF0LCBpc1ZhbGlkVGltZXN0YW1wLCBpc3N1ZWRBdFRpbWUsIGpzb25FdmFsLCBtYXAsIG9yZGluYWwsIHF1ZXJ5c3RyaW5nLCBxdWVyeXN0cmluZ0RlY29kZSwgc2FmZUdldCwgc3RyaW5nTGVuZ3RoLCBzdHJpbmdUb0J5dGVBcnJheSwgc3RyaW5naWZ5LCB2YWxpZGF0ZUFyZ0NvdW50LCB2YWxpZGF0ZUNhbGxiYWNrLCB2YWxpZGF0ZUNvbnRleHRPYmplY3QsIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUsIHZhbGlkYXRlTmFtZXNwYWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuXHJcbmNvbnN0IFZhbGlkYXRlU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkubWluKDYpLm1heCgxMikucmVxdWlyZWQoKSxcclxuICAgIGNvbmZpcm1QYXNzd29yZDogeXVwXHJcbiAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAub25lT2YoW3l1cC5yZWYoJ3Bhc3N3b3JkJyksIG51bGxdLCAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnKVxyXG4gICAgICAucmVxdWlyZWQoKVxyXG4gIH0pO1xyXG5cclxuICAvL3N1Ym1pdCBoYW5kbGVyXHJcbiAgY29uc3Qgc3VibWl0U2lnbnVwID0gKHZhbHVlcywgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgIHNldEZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UudXNlci5yZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICAgICAgICAvLyAuLi5cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAvLyAuLlxyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJ1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgdG91Y2hlZCwgZXJyb3JzIH0pID0+IChcclxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbl9mb3JtXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luXCI+U2lnbnVwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cImVtYWlsXCIgY29udHJvbElkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgIWVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwicGFzc3dvcmRcIiBjb250cm9sSWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiAhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cImNvbmZpcm1QYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Db25maXJtIFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17dG91Y2hlZC5jb25maXJtUGFzc3dvcmQgJiYgIWVycm9ycy5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQuY29uZmlybVBhc3N3b3JkICYmIGVycm9ycy5jb25maXJtUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZVNpZ251cDtcclxuIiwiaW1wb3J0ICdAZmlyZWJhc2UvYXV0aCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9