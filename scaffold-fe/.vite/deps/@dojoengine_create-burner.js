import {
  require_react
} from "./chunk-UUYGSPRB.js";
import {
  KATANA_ETH_CONTRACT_ADDRESS,
  z
} from "./chunk-NDLG7IOO.js";
import {
  Account,
  CallData,
  HashMD,
  TransactionFinalityStatus,
  bytes,
  bytesToHex,
  concatBytes,
  createBase58check,
  createView,
  ec_exports,
  encode_exports,
  hash_exports,
  hexToBytes,
  hmac,
  mod,
  num_exports,
  rotl,
  secp256k1,
  sha256,
  shortString_exports,
  stark_exports,
  u64_default,
  utf8ToBytes,
  wrapConstructor
} from "./chunk-LGKPTLUX.js";
import {
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateSet,
  __publicField,
  __toESM
} from "./chunk-OCBYBPSH.js";

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React12 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React12.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentNameFromType(init2(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign2 = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign2({}, props, {
                  value: prevLog
                }),
                info: assign2({}, props, {
                  value: prevInfo
                }),
                warn: assign2({}, props, {
                  value: prevWarn
                }),
                error: assign2({}, props, {
                  value: prevError
                }),
                group: assign2({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign2({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign2({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx5 = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx5;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// node_modules/@starknet-react/chains/dist/index.js
var mainnet = {
  id: BigInt("0x534e5f4d41494e"),
  network: "mainnet",
  name: "Starknet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://starknet-mainnet.g.alchemy.com/v2"]
    },
    blast: {
      http: ["https://starknet-mainnet.blastapi.io"]
    },
    infura: {
      http: ["https://starknet-mainnet.infura.io/v3"]
    },
    lava: {
      http: ["https://g.w.lavanet.xyz:443/gateway/strk/rpc-http"]
    },
    nethermind: {
      http: ["https://rpc.nethermind.io/mainnet-juno"]
    },
    reddio: {
      http: ["https://starknet-mainnet.reddio.com"]
    },
    default: {
      http: []
    },
    public: {
      http: [
        "https://starknet-mainnet.public.blastapi.io/rpc/v0.5",
        "https://rpc.starknet.lava.build",
        "https://free-rpc.nethermind.io/mainnet-juno/v0_5"
      ]
    }
  },
  explorers: {
    starkCompass: ["https://www.starkcompass.com"],
    starkscan: ["https://starkscan.co"],
    viewblock: ["https://viewblock.io/starknet"],
    voyager: ["https://voyager.online"]
  }
};
var goerli = {
  id: BigInt("0x534e5f474f45524c49"),
  network: "goerli",
  name: "Starknet Goerli Testnet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true,
  rpcUrls: {
    alchemy: {
      http: ["https://starknet-goerli.g.alchemy.com/v2"]
    },
    blast: {
      http: ["https://starknet-testnet.blastapi.io"]
    },
    infura: {
      http: ["https://starknet-goerli.infura.io/v3"]
    },
    lava: {
      http: ["https://g.w.lavanet.xyz:443/gateway/strkt/rpc-http"]
    },
    nethermind: {
      http: ["https://rpc.nethermind.io/goerli-juno"]
    },
    reddio: {
      http: ["https://starknet-goerli.reddio.com"]
    },
    default: {
      http: []
    },
    public: {
      http: [
        "https://starknet-testnet.public.blastapi.io/rpc/v0.5",
        "https://rpc.starknet-testnet.lava.build",
        "https://free-rpc.nethermind.io/goerli-juno/v0_5"
      ]
    }
  },
  explorers: {
    starkCompass: ["https://www.starkcompass.com/testnet"],
    starkscan: ["https://testnet.starkscan.co"],
    voyager: ["https://goerli.voyager.online"],
    viewblock: ["https://viewblock.io/starknet"]
  }
};
var sepolia = {
  id: BigInt("0x534e5f5345504f4c4941"),
  network: "sepolia",
  name: "Starknet Sepolia Testnet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true,
  rpcUrls: {
    // alchemy: {
    //   http: [],
    // },
    blast: {
      http: ["https://starknet-sepolia.blastapi.io"]
    },
    infura: {
      http: ["https://starknet-sepolia.infura.io/v3"]
    },
    // lava: {
    //   http: [],
    // },
    nethermind: {
      http: ["https://rpc.nethermind.io/sepolia-juno"]
    },
    reddio: {
      http: ["https://starknet-sepolia.reddio.com"]
    },
    default: {
      http: []
    },
    public: {
      http: [
        "https://starknet-sepolia.public.blastapi.io",
        "https://free-rpc.nethermind.io/sepolia-juno"
      ]
    }
  },
  explorers: {
    starkscan: ["https://sepolia.starkscan.co"],
    voyager: ["https://sepolia.voyager.online"]
  }
};
var devnet = {
  id: BigInt("0x534e5f474f45524c49"),
  network: "devnet",
  name: "Starknet Devnet",
  nativeCurrency: {
    address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true,
  rpcUrls: {
    default: {
      http: []
    },
    public: {
      http: ["http://localhost:5050/rpc"]
    }
  }
};

// node_modules/@starknet-react/core/dist/index.js
var import_react = __toESM(require_react());

// node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

// node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
var skipToken = Symbol();

// node_modules/@tanstack/query-core/build/modern/focusManager.js
var _focused, _cleanup, _setup, _a;
var FocusManager = (_a = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _focused);
    __privateAdd(this, _cleanup);
    __privateAdd(this, _setup);
    __privateSet(this, _setup, (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup)) {
      this.setEventListener(__privateGet(this, _setup));
    }
  }
  onUnsubscribe() {
    var _a3;
    if (!this.hasListeners()) {
      (_a3 = __privateGet(this, _cleanup)) == null ? void 0 : _a3.call(this);
      __privateSet(this, _cleanup, void 0);
    }
  }
  setEventListener(setup) {
    var _a3;
    __privateSet(this, _setup, setup);
    (_a3 = __privateGet(this, _cleanup)) == null ? void 0 : _a3.call(this);
    __privateSet(this, _cleanup, setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    }));
  }
  setFocused(focused) {
    const changed = __privateGet(this, _focused) !== focused;
    if (changed) {
      __privateSet(this, _focused, focused);
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    var _a3;
    if (typeof __privateGet(this, _focused) === "boolean") {
      return __privateGet(this, _focused);
    }
    return ((_a3 = globalThis.document) == null ? void 0 : _a3.visibilityState) !== "hidden";
  }
}, _focused = new WeakMap(), _cleanup = new WeakMap(), _setup = new WeakMap(), _a);
var focusManager = new FocusManager();

// node_modules/@tanstack/query-core/build/modern/onlineManager.js
var _online, _cleanup2, _setup2, _a2;
var OnlineManager = (_a2 = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _online, true);
    __privateAdd(this, _cleanup2);
    __privateAdd(this, _setup2);
    __privateSet(this, _setup2, (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup2)) {
      this.setEventListener(__privateGet(this, _setup2));
    }
  }
  onUnsubscribe() {
    var _a3;
    if (!this.hasListeners()) {
      (_a3 = __privateGet(this, _cleanup2)) == null ? void 0 : _a3.call(this);
      __privateSet(this, _cleanup2, void 0);
    }
  }
  setEventListener(setup) {
    var _a3;
    __privateSet(this, _setup2, setup);
    (_a3 = __privateGet(this, _cleanup2)) == null ? void 0 : _a3.call(this);
    __privateSet(this, _cleanup2, setup(this.setOnline.bind(this)));
  }
  setOnline(online) {
    const changed = __privateGet(this, _online) !== online;
    if (changed) {
      __privateSet(this, _online, online);
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return __privateGet(this, _online);
  }
}, _online = new WeakMap(), _cleanup2 = new WeakMap(), _setup2 = new WeakMap(), _a2);
var onlineManager = new OnlineManager();

// node_modules/@tanstack/query-core/build/modern/notifyManager.js
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = (cb) => setTimeout(cb, 0);
  const setScheduler = (fn) => {
    scheduleFn = fn;
  };
  const batch = (callback) => {
    let result;
    transactions++;
    try {
      result = callback();
    } finally {
      transactions--;
      if (!transactions) {
        flush();
      }
    }
    return result;
  };
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const batchCalls = (callback) => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  const setNotifyFunction = (fn) => {
    notifyFn = fn;
  };
  const setBatchNotifyFunction = (fn) => {
    batchNotifyFn = fn;
  };
  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction,
    setScheduler
  };
}
var notifyManager = createNotifyManager();

// node_modules/@tanstack/react-query/build/modern/useQueries.js
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var QueryClientContext = React.createContext(
  void 0
);

// node_modules/@tanstack/react-query/build/modern/isRestoring.js
var React2 = __toESM(require_react(), 1);
var IsRestoringContext = React2.createContext(false);
var IsRestoringProvider = IsRestoringContext.Provider;

// node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React3.createContext(createValue());

// node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
var React4 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
var React6 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var React8 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var React9 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useMutation.js
var React10 = __toESM(require_react(), 1);

// node_modules/@starknet-react/core/dist/index.js
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var Connector = class extends eventemitter3_default {
};
var AccountContext = import_react3.default.createContext(
  void 0
);
var StarknetContext = (0, import_react2.createContext)(void 0);
var uint256Schema = z.object({
  low: z.bigint(),
  high: z.bigint()
});
var balanceSchema = z.object({
  balance: uint256Schema
});
var decimalsSchema = z.object({
  decimals: z.bigint()
});
var symbolSchema = z.object({
  symbol: z.bigint()
});

// node_modules/@dojoengine/create-burner/dist/index.js
var import_react17 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_react18 = __toESM(require_react());

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/@noble/hashes/esm/ripemd160.js
var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = new Uint8Array(new Array(16).fill(0).map((_, i) => i));
var Pi = Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k) => Rho[k]));
var shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
var shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
var Kl = new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function f(group, x, y, z2) {
  if (group === 0)
    return x ^ y ^ z2;
  else if (group === 1)
    return x & y | ~x & z2;
  else if (group === 2)
    return (x | ~y) ^ z2;
  else if (group === 3)
    return x & z2 | y & ~z2;
  else
    return x ^ (y | ~z2);
}
var R_BUF = new Uint32Array(16);
var RIPEMD160 = class extends HashMD {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      R_BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    R_BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = wrapConstructor(() => new RIPEMD160());

// node_modules/@noble/hashes/esm/sha512.js
var [SHA512_Kh, SHA512_Kl] = (() => u64_default.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA512 = class extends HashMD {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
      const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64_default.add3L(T1l, sigma0l, MAJl);
      Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var SHA512_224 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
};
var SHA512_256 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
};
var SHA384 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
};
var sha512 = wrapConstructor(() => new SHA512());
var sha512_224 = wrapConstructor(() => new SHA512_224());
var sha512_256 = wrapConstructor(() => new SHA512_256());
var sha384 = wrapConstructor(() => new SHA384());

// node_modules/@scure/bip32/lib/esm/index.js
var Point = secp256k1.ProjectivePoint;
var base58check = createBase58check(sha256);
function bytesToNumber(bytes2) {
  return BigInt(`0x${bytesToHex(bytes2)}`);
}
function numberToBytes(num) {
  return hexToBytes(num.toString(16).padStart(64, "0"));
}
var MASTER_SECRET = utf8ToBytes("Bitcoin seed");
var BITCOIN_VERSIONS = { private: 76066276, public: 76067358 };
var HARDENED_OFFSET = 2147483648;
var hash160 = (data) => ripemd160(sha256(data));
var fromU32 = (data) => createView(data).getUint32(0, false);
var toU32 = (n) => {
  if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1) {
    throw new Error(`Invalid number=${n}. Should be from 0 to 2 ** 32 - 1`);
  }
  const buf = new Uint8Array(4);
  createView(buf).setUint32(0, n, false);
  return buf;
};
var HDKey = class _HDKey {
  get fingerprint() {
    if (!this.pubHash) {
      throw new Error("No publicKey set!");
    }
    return fromU32(this.pubHash);
  }
  get identifier() {
    return this.pubHash;
  }
  get pubKeyHash() {
    return this.pubHash;
  }
  get privateKey() {
    return this.privKeyBytes || null;
  }
  get publicKey() {
    return this.pubKey || null;
  }
  get privateExtendedKey() {
    const priv = this.privateKey;
    if (!priv) {
      throw new Error("No private key");
    }
    return base58check.encode(this.serialize(this.versions.private, concatBytes(new Uint8Array([0]), priv)));
  }
  get publicExtendedKey() {
    if (!this.pubKey) {
      throw new Error("No public key");
    }
    return base58check.encode(this.serialize(this.versions.public, this.pubKey));
  }
  static fromMasterSeed(seed, versions = BITCOIN_VERSIONS) {
    bytes(seed);
    if (8 * seed.length < 128 || 8 * seed.length > 512) {
      throw new Error(`HDKey: wrong seed length=${seed.length}. Should be between 128 and 512 bits; 256 bits is advised)`);
    }
    const I = hmac(sha512, MASTER_SECRET, seed);
    return new _HDKey({
      versions,
      chainCode: I.slice(32),
      privateKey: I.slice(0, 32)
    });
  }
  static fromExtendedKey(base58key, versions = BITCOIN_VERSIONS) {
    const keyBuffer = base58check.decode(base58key);
    const keyView = createView(keyBuffer);
    const version = keyView.getUint32(0, false);
    const opt = {
      versions,
      depth: keyBuffer[4],
      parentFingerprint: keyView.getUint32(5, false),
      index: keyView.getUint32(9, false),
      chainCode: keyBuffer.slice(13, 45)
    };
    const key = keyBuffer.slice(45);
    const isPriv = key[0] === 0;
    if (version !== versions[isPriv ? "private" : "public"]) {
      throw new Error("Version mismatch");
    }
    if (isPriv) {
      return new _HDKey({ ...opt, privateKey: key.slice(1) });
    } else {
      return new _HDKey({ ...opt, publicKey: key });
    }
  }
  static fromJSON(json) {
    return _HDKey.fromExtendedKey(json.xpriv);
  }
  constructor(opt) {
    this.depth = 0;
    this.index = 0;
    this.chainCode = null;
    this.parentFingerprint = 0;
    if (!opt || typeof opt !== "object") {
      throw new Error("HDKey.constructor must not be called directly");
    }
    this.versions = opt.versions || BITCOIN_VERSIONS;
    this.depth = opt.depth || 0;
    this.chainCode = opt.chainCode || null;
    this.index = opt.index || 0;
    this.parentFingerprint = opt.parentFingerprint || 0;
    if (!this.depth) {
      if (this.parentFingerprint || this.index) {
        throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");
      }
    }
    if (opt.publicKey && opt.privateKey) {
      throw new Error("HDKey: publicKey and privateKey at same time.");
    }
    if (opt.privateKey) {
      if (!secp256k1.utils.isValidPrivateKey(opt.privateKey)) {
        throw new Error("Invalid private key");
      }
      this.privKey = typeof opt.privateKey === "bigint" ? opt.privateKey : bytesToNumber(opt.privateKey);
      this.privKeyBytes = numberToBytes(this.privKey);
      this.pubKey = secp256k1.getPublicKey(opt.privateKey, true);
    } else if (opt.publicKey) {
      this.pubKey = Point.fromHex(opt.publicKey).toRawBytes(true);
    } else {
      throw new Error("HDKey: no public or private key provided");
    }
    this.pubHash = hash160(this.pubKey);
  }
  derive(path) {
    if (!/^[mM]'?/.test(path)) {
      throw new Error('Path must start with "m" or "M"');
    }
    if (/^[mM]'?$/.test(path)) {
      return this;
    }
    const parts = path.replace(/^[mM]'?\//, "").split("/");
    let child = this;
    for (const c of parts) {
      const m = /^(\d+)('?)$/.exec(c);
      const m1 = m && m[1];
      if (!m || m.length !== 3 || typeof m1 !== "string") {
        throw new Error(`Invalid child index: ${c}`);
      }
      let idx = +m1;
      if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET) {
        throw new Error("Invalid index");
      }
      if (m[2] === "'") {
        idx += HARDENED_OFFSET;
      }
      child = child.deriveChild(idx);
    }
    return child;
  }
  deriveChild(index) {
    if (!this.pubKey || !this.chainCode) {
      throw new Error("No publicKey or chainCode set");
    }
    let data = toU32(index);
    if (index >= HARDENED_OFFSET) {
      const priv = this.privateKey;
      if (!priv) {
        throw new Error("Could not derive hardened child key");
      }
      data = concatBytes(new Uint8Array([0]), priv, data);
    } else {
      data = concatBytes(this.pubKey, data);
    }
    const I = hmac(sha512, this.chainCode, data);
    const childTweak = bytesToNumber(I.slice(0, 32));
    const chainCode = I.slice(32);
    if (!secp256k1.utils.isValidPrivateKey(childTweak)) {
      throw new Error("Tweak bigger than curve order");
    }
    const opt = {
      versions: this.versions,
      chainCode,
      depth: this.depth + 1,
      parentFingerprint: this.fingerprint,
      index
    };
    try {
      if (this.privateKey) {
        const added = mod(this.privKey + childTweak, secp256k1.CURVE.n);
        if (!secp256k1.utils.isValidPrivateKey(added)) {
          throw new Error("The tweak was out of range or the resulted private key is invalid");
        }
        opt.privateKey = added;
      } else {
        const added = Point.fromHex(this.pubKey).add(Point.fromPrivateKey(childTweak));
        if (added.equals(Point.ZERO)) {
          throw new Error("The tweak was equal to negative P, which made the result key invalid");
        }
        opt.publicKey = added.toRawBytes(true);
      }
      return new _HDKey(opt);
    } catch (err) {
      return this.deriveChild(index + 1);
    }
  }
  sign(hash) {
    if (!this.privateKey) {
      throw new Error("No privateKey set!");
    }
    bytes(hash, 32);
    return secp256k1.sign(hash, this.privKey).toCompactRawBytes();
  }
  verify(hash, signature) {
    bytes(hash, 32);
    bytes(signature, 64);
    if (!this.publicKey) {
      throw new Error("No publicKey set!");
    }
    let sig;
    try {
      sig = secp256k1.Signature.fromCompact(signature);
    } catch (error) {
      return false;
    }
    return secp256k1.verify(sig, hash, this.publicKey);
  }
  wipePrivateData() {
    this.privKey = void 0;
    if (this.privKeyBytes) {
      this.privKeyBytes.fill(0);
      this.privKeyBytes = void 0;
    }
    return this;
  }
  toJSON() {
    return {
      xpriv: this.privateExtendedKey,
      xpub: this.publicExtendedKey
    };
  }
  serialize(version, key) {
    if (!this.chainCode) {
      throw new Error("No chainCode set");
    }
    bytes(key, 33);
    return concatBytes(toU32(version), new Uint8Array([this.depth]), toU32(this.parentFingerprint), toU32(this.index), this.chainCode, key);
  }
};

// node_modules/@dojoengine/create-burner/dist/index.js
var import_react19 = __toESM(require_react());
var import_react20 = __toESM(require_react());
var import_react21 = __toESM(require_react());
var katanaIcon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOC4yNzk4IDEzLjU4NzNDMTkuNjE5OCAxMy41ODczIDIwLjcwNjEgMTIuNTAwOCAyMC43MDYxIDExLjE2MDVDMjAuNzA2MSA5LjgyMDE3IDE5LjYxOTggOC43MzM2NCAxOC4yNzk4IDguNzMzNjRDMTYuOTM5OCA4LjczMzY0IDE1Ljg1MzUgOS44MjAxNyAxNS44NTM1IDExLjE2MDVDMTUuODUzNSAxMi41MDA4IDE2LjkzOTggMTMuNTg3MyAxOC4yNzk4IDEzLjU4NzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNS40MTAxNiAyLjc5NDhIMzEuMTUzOVYzLjg4NTEyQzMxLjE1MzkgNC4wODA0NiAzMS4wNzE4IDQuMjY0MjMgMzAuOTMxMiA0LjM5MzEyTDI4LjYyNiA2LjQ2NDRDMjguMzI1MSA2LjgwMDQxIDI3LjkxMSA2Ljk5MTk0IDI3LjQ4MTIgNi45OTE5NEgyNS42NTI3QzI1LjY1MjcgNi45OTE5NCAyNS42NDg4IDguNTA3NTUgMjUuNjQ4OCA5LjM5MjY1QzI1LjY0ODggMTAuMjc3NiAyNS4yODY1IDExLjIzMzIgMjUuMjg2NSAxMS4yMzMyTDI1LjUzMzQgMTEuNDgwMkMyNS43OTc5IDExLjExNyAyNi45NjY4IDkuNjc2NjQgMjcuNzQzIDkuNjc2NjRMMzAuNjc3MiA5LjY2MTA0VjEzLjQwNDhMMjUuNjQ4OCAxMy40NjM1VjIwLjc5NDhMMjQuNzY5NyAxOS45MTk0QzIzLjc2NzggMTguOTIzMyAyMi43NjQyIDE3LjkyODkgMjEuNzY1MiAxNi45Mjk5VjkuOTE1MDlDMjEuNzY1MiA4Ljg3MDU2IDIxLjk5NjkgOC4wMjA4MiAyMi4yMTAxIDcuMDg3NTlMMjIuMjEwNSA3LjA4NTY4TDIyLjIxMTkgNy4wNzk3NEwyMi4yMTM0IDcuMDczOUMyMi4yMTU0IDcuMDY2NjggMjIuMjE3MSA3LjA2MDMxIDIyLjIxNjcgNy4wNTM0MUMyMi4yMTY0IDcuMDQ3NzggMjIuMjE0NyA3LjA0MTgzIDIyLjIxMDUgNy4wMzQ5M0MyMi4xODQgNi45OTUwMiAyMi4wNzQ3IDYuOTU1MiAyMS45NzA2IDYuOTM1MjRDMjEuODkxIDYuOTIwMDYgMjEuODE0NyA2LjkxNjQ1IDIxLjc4MDggNi45MzMzM0MyMS4yMjMxIDcuMjA1MiAyMC42MzA4IDcuMzA2NjcgMjAuMDE2NiA3LjMxNzEyQzE4Ljg2MDcgNy4zMzY2MyAxNy43MDIgNy4zMzY0NSAxNi41NDYgNy4zMTcxMkMxNS45MzIzIDcuMzA2NjQgMTUuMzQwNCA3LjIwNDk2IDE0Ljc4MzIgNi45MzMzM0MxNC43MDUxIDYuODk0MjYgMTQuNDAwMyA2Ljk2NDU1IDE0LjM1MzUgNy4wMzQ5M0MxNC4zNDE3IDcuMDU0NDcgMTQuMzQ5NSA3LjA2NjE1IDE0LjM1MzUgNy4wODU2OEwxNC4zNTM5IDcuMDg3NTlDMTQuNTY3IDguMDIwNDIgMTQuNzk4OCA4Ljg3OTY5IDE0Ljc5ODggOS45MTUwOVYxNi45Mjk5QzEzLjUwNzQgMTguMjIxMyAxMi4yMDkzIDE5LjUwNiAxMC45MTUyIDIwLjc5NDhWMTMuNDYzNUw1Ljg4Njg0IDEzLjQwNDhWOS42NjEwNEw4LjgyMTAzIDkuNjc2NjRDOS41OTcyMSA5LjY3NjY0IDEwLjc2NjEgMTEuMTE3IDExLjAzMDYgMTEuNDgwMkwxMS4yNzc1IDExLjIzMzJDMTEuMjc3NSAxMS4yMzMyIDEwLjkxNTIgMTAuMjc3NiAxMC45MTUyIDkuMzkyNjVDMTAuOTE1MiA4LjUwNzU1IDEwLjkxMTMgNi45OTE5NCAxMC45MTEzIDYuOTkxOTRIOS4wODI3OEM4LjY1MzAzIDYuOTkxOTQgOC4yMzg4OCA2LjgwMDQxIDcuOTM4MDYgNi40NjQ0TDUuNjMyODQgNC4zOTMxMkM1LjQ5MjIyIDQuMjY0MjMgNS40MTAxNiA0LjA4MDQ2IDUuNDEwMTYgMy44ODUxMlYyLjc5NDhaIiBmaWxsPSIjRkYyRjQyIi8+Cjwvc3ZnPgo=";
var BurnerConnector = class extends Connector {
  constructor(options, account) {
    super();
    __publicField(this, "_options");
    __publicField(this, "_account");
    this._options = options;
    this._account = account;
  }
  available() {
    return true;
  }
  async ready() {
    return Promise.resolve(true);
  }
  async connect() {
    if (!this._account) {
      throw new Error("account not found");
    }
    const chainId = await this.chainId();
    return Promise.resolve({
      account: this._account.address,
      chainId
    });
  }
  async disconnect() {
    Promise.resolve(this._account == null);
  }
  async account() {
    return Promise.resolve(this._account);
  }
  async chainId() {
    const chainId = await this._account.getChainId();
    return Promise.resolve(BigInt(shortString_exports.encodeShortString(chainId)));
  }
  get id() {
    return this._options.id;
  }
  get name() {
    return this._options.name || "Dojo Burner";
  }
  get icon() {
    return this._options.icon || {
      light: katanaIcon,
      dark: katanaIcon
    };
  }
};
var ID = "dojoburner";
var NAME = "Dojo Burner";
var VERSION = "0.0.1";
var DojoBurnerStarknetWindowObject = class {
  constructor(burnerManager) {
    __publicField(this, "id", ID);
    __publicField(this, "name", NAME);
    __publicField(this, "icon", katanaIcon);
    __publicField(this, "account");
    __publicField(this, "provider");
    __publicField(this, "selectedAddress");
    __publicField(this, "chainId");
    __publicField(this, "isConnected", false);
    __publicField(this, "version", VERSION);
    //
    __publicField(this, "burnerManager");
    ///@ts-ignore
    __publicField(this, "on", (event, handleEvent) => {
    });
    ///@ts-ignore
    __publicField(this, "off", (event, handleEvent) => {
    });
    var _a3;
    if (!burnerManager.isInitialized) {
      throw new Error("burnerManager should be initialized");
    }
    this.burnerManager = burnerManager;
    this.chainId = this.burnerManager.chainId;
    this.provider = this.burnerManager.provider;
    const activeAccount = this.burnerManager.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    this.selectedAddress = (_a3 = this.account) == null ? void 0 : _a3.address;
  }
  ///@ts-ignore
  async request(call) {
  }
  ///@ts-ignore
  async enable({ starknetVersion = "v5" } = {}) {
    var _a3, _b;
    if (!this.burnerManager) {
      await new Promise((r) => setTimeout(r, 1500));
    }
    const activeAccount = (_a3 = this.burnerManager) == null ? void 0 : _a3.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    if (!this.account) {
      this.account = await ((_b = this.burnerManager) == null ? void 0 : _b.create());
    }
    if (!this.account) {
      this.isConnected = false;
      return [];
    }
    this.isConnected = true;
    return [this.account.address];
  }
  async isPreauthorized() {
    return true;
  }
  /** @returns {string} the connector id */
  static getId() {
    return ID;
  }
  /** @returns {string} the connector name */
  static getName() {
    return NAME;
  }
};
var ID2 = "dojopredeployed";
var NAME2 = "Dojo Predeployed";
var VERSION2 = "0.0.1";
var DojoPredeployedStarknetWindowObject = class {
  constructor(predeployedManager) {
    __publicField(this, "id", ID2);
    __publicField(this, "name", NAME2);
    __publicField(this, "icon", katanaIcon);
    __publicField(this, "account");
    __publicField(this, "provider");
    __publicField(this, "selectedAddress");
    __publicField(this, "chainId");
    __publicField(this, "isConnected", false);
    __publicField(this, "version", VERSION2);
    //
    __publicField(this, "predeployedManager");
    ///@ts-ignore
    __publicField(this, "on", (event, handleEvent) => {
    });
    ///@ts-ignore
    __publicField(this, "off", (event, handleEvent) => {
    });
    var _a3;
    this.predeployedManager = predeployedManager;
    this.chainId = this.predeployedManager.chainId;
    this.provider = this.predeployedManager.provider;
    const activeAccount = this.predeployedManager.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    this.selectedAddress = (_a3 = this.account) == null ? void 0 : _a3.address;
  }
  ///@ts-ignore
  async request(call) {
  }
  ///@ts-ignore
  async enable({ starknetVersion = "v5" } = {}) {
    var _a3, _b, _c, _d;
    if (!this.predeployedManager) {
      await new Promise((r) => setTimeout(r, 1500));
    }
    const activeAccount = (_a3 = this.predeployedManager) == null ? void 0 : _a3.getActiveAccount();
    this.account = activeAccount ? activeAccount : void 0;
    if (!this.account) {
      const predeployed = (_b = this.predeployedManager) == null ? void 0 : _b.list();
      if (predeployed && (predeployed == null ? void 0 : predeployed.length) > 0) {
        (_c = this.predeployedManager) == null ? void 0 : _c.select(predeployed[0].address);
        const activeAccount2 = (_d = this.predeployedManager) == null ? void 0 : _d.getActiveAccount();
        this.account = activeAccount2 ? activeAccount2 : void 0;
      }
    }
    if (!this.account) {
      this.isConnected = false;
      return [];
    }
    this.isConnected = true;
    return [this.account.address];
  }
  async isPreauthorized() {
    return true;
  }
  /** @returns {string} the connector id */
  static getId() {
    return ID2;
  }
  /** @returns {string} the connector name */
  static getName() {
    return NAME2;
  }
};
var BurnerContext = (0, import_react17.createContext)(null);
var BurnerProvider = ({
  children,
  initOptions
}) => {
  return (0, import_jsx_runtime6.jsx)(BurnerContext.Provider, { value: initOptions, children });
};
var hasLocalStorageSupport = () => {
  try {
    const testKey = "__test__";
    if (typeof window !== "undefined") {
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
var isLocalStorage = hasLocalStorageSupport();
var safeParse = (data) => {
  try {
    if (data === "") return null;
    return JSON.parse(data);
  } catch (e) {
    console.error("Error parsing JSON data:", e, "Data:", data);
    return null;
  }
};
var Storage = {
  keys: () => {
    if (isLocalStorage) {
      return Object.keys(window.localStorage);
    }
    return Object.keys(api.get());
  },
  get: (key) => {
    if (isLocalStorage) {
      return safeParse(window.localStorage.getItem(key) || "");
    }
    return safeParse(api.get(key) || "");
  },
  set: (key, value) => {
    const data = JSON.stringify(value);
    if (isLocalStorage) {
      window.localStorage.setItem(key, data);
    } else {
      api.set(key, data, {
        secure: true,
        sameSite: "strict"
      });
    }
  },
  remove: (key) => {
    if (isLocalStorage) {
      window.localStorage.removeItem(key);
    } else {
      api.remove(key);
    }
  },
  clear: () => {
    if (isLocalStorage) {
      window.localStorage.clear();
    } else {
      const cookies = api.get();
      Object.keys(cookies).forEach((key) => api.remove(key));
    }
  }
};
var storage_default = Storage;
function getPathForIndex(index) {
  return `m/44'/9004'/0'/0/${index}`;
}
function derivePrivateKeyFromSeed(secret, index) {
  if (!secret) {
    throw "seed is undefined";
  }
  const masterNode = HDKey.fromMasterSeed(num_exports.hexToBytes(secret));
  const childNode = masterNode.derive(getPathForIndex(index));
  if (!childNode.privateKey) {
    throw "childNode.privateKey is undefined";
  }
  const groundKey = ec_exports.starkCurve.grindKey(childNode.privateKey);
  return encode_exports.addHexPrefix(groundKey);
}
var prefundAccount = async (address, account, feeTokenAddress, prefundAmount, maxFee) => {
  try {
    const transferOptions = {
      contractAddress: feeTokenAddress,
      entrypoint: "transfer",
      calldata: CallData.compile([address, prefundAmount, "0x0"])
    };
    const nonce = await account.getNonce();
    const { transaction_hash } = await account.execute(
      [transferOptions],
      void 0,
      {
        nonce,
        maxFee
      }
    );
    const result = await account.waitForTransaction(transaction_hash, {
      retryInterval: 1e3,
      successStates: [TransactionFinalityStatus.ACCEPTED_ON_L2]
    });
    if (!result) {
      throw new Error("Transaction did not complete successfully.");
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
var PREFUND_AMOUNT = "10000000000000000";
var BurnerManager = class {
  constructor({
    masterAccount,
    accountClassHash,
    feeTokenAddress = KATANA_ETH_CONTRACT_ADDRESS,
    rpcProvider
  }) {
    __publicField(this, "masterAccount");
    __publicField(this, "accountClassHash");
    __publicField(this, "feeTokenAddress");
    __publicField(this, "provider");
    __publicField(this, "chainId", "");
    __publicField(this, "account", null);
    __publicField(this, "isDeploying", false);
    __publicField(this, "isInitialized", false);
    __publicField(this, "setIsDeploying");
    __publicField(this, "afterDeploying");
    this.masterAccount = masterAccount;
    this.accountClassHash = accountClassHash;
    this.feeTokenAddress = feeTokenAddress;
    this.provider = rpcProvider;
  }
  setIsDeployingCallback(callback) {
    this.setIsDeploying = callback;
  }
  setAfterDeployingCallback(callback) {
    this.afterDeploying = callback;
  }
  updateIsDeploying(status) {
    this.isDeploying = status;
    if (this.setIsDeploying) {
      this.setIsDeploying(status);
    }
  }
  getBurnerKey() {
    return `burners_${this.chainId}`;
  }
  getBurnerStorage() {
    return storage_default.get(this.getBurnerKey()) || {};
  }
  setActiveBurnerAccount(storage) {
    for (let address in storage) {
      if (storage[address].active) {
        this.account = new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
        return;
      }
    }
  }
  async isBurnerDeployed(address, deployTx) {
    if (deployTx) {
      try {
        const receipt = await this.masterAccount.getTransactionReceipt(deployTx);
        return receipt !== null;
      } catch {
      }
    }
    try {
      const nonce = await this.masterAccount.getNonceForAddress(address);
      return BigInt(nonce) > 0n;
    } catch {
    }
    return false;
  }
  async init(keepNonDeployed = false) {
    if (this.isInitialized) {
      throw new Error("BurnerManager is already initialized");
    }
    this.chainId = shortString_exports.decodeShortString(
      await this.provider.getChainId()
    );
    const storage = this.getBurnerStorage();
    const addresses = Object.keys(storage);
    const checks = addresses.map(async (address) => {
      const isDeployed = await this.isBurnerDeployed(
        address,
        storage[address].deployTx
      );
      return isDeployed ? null : address;
    });
    const toRemove = (await Promise.all(checks)).filter(
      (address) => address !== null
    );
    toRemove.forEach((address) => {
      if (!keepNonDeployed) {
        console.log(
          `Removing non-deployed burner at address ${address}.`
        );
        delete storage[address];
      }
    });
    if (Object.keys(storage).length) {
      storage_default.set(this.getBurnerKey(), storage);
      this.setActiveBurnerAccount(storage);
    } else {
      this.clear();
    }
    this.isInitialized = true;
  }
  list() {
    const storage = this.getBurnerStorage();
    return Object.keys(storage).map((address) => {
      return {
        address,
        active: storage[address].active,
        masterAccount: storage[address].masterAccount,
        accountIndex: storage[address].accountIndex
      };
    });
  }
  select(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage[address].active = true;
    storage_default.set(this.getBurnerKey(), storage);
    this.account = new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  deselect() {
    const storage = this.getBurnerStorage();
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage_default.set(this.getBurnerKey(), storage);
    this.account = null;
  }
  get(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    return new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  delete(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    delete storage[address];
    storage_default.set(this.getBurnerKey(), storage);
  }
  clear() {
    storage_default.remove(this.getBurnerKey());
  }
  getActiveAccount() {
    const storage = this.getBurnerStorage();
    for (let address in storage) {
      if (storage[address].active) {
        return new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
      }
    }
    return null;
  }
  generateKeysAndAddress(options) {
    const privateKey = (options == null ? void 0 : options.secret) ? derivePrivateKeyFromSeed(options.secret, options.index || 0) : stark_exports.randomAddress();
    const publicKey = ec_exports.starkCurve.getStarkKey(privateKey);
    return {
      privateKey,
      publicKey,
      address: hash_exports.calculateContractAddressFromHash(
        publicKey,
        this.accountClassHash,
        CallData.compile({ publicKey }),
        0
      )
    };
  }
  async create(options) {
    if (!this.isInitialized) {
      throw new Error("BurnerManager is not initialized");
    }
    if (!this.masterAccount) {
      throw new Error("master wallet account not found");
    }
    this.updateIsDeploying(true);
    const { privateKey, publicKey, address } = this.generateKeysAndAddress(options);
    const burner = new Account(this.provider, address, privateKey, "1");
    let deployTx = "";
    const isDeployed = await this.isBurnerDeployed(address);
    if (!isDeployed) {
      const payload = {
        classHash: this.accountClassHash,
        constructorCalldata: CallData.compile({ publicKey }),
        addressSalt: publicKey
      };
      let prefundAmount = BigInt(
        (options == null ? void 0 : options.prefundedAmount) || PREFUND_AMOUNT
      );
      if (prefundAmount > 0n) {
        try {
          await prefundAccount(
            address,
            this.masterAccount,
            this.feeTokenAddress,
            prefundAmount.toString(),
            (options == null ? void 0 : options.maxFee) || 0
          );
        } catch (e) {
          console.error(`burner manager create() error:`, e);
          this.updateIsDeploying(false);
        }
      }
      try {
        const { transaction_hash } = await burner.deployAccount(payload);
        deployTx = transaction_hash;
      } catch (error) {
        this.updateIsDeploying(false);
        throw error;
      }
      const receipt = await this.masterAccount.waitForTransaction(
        deployTx,
        {
          retryInterval: 100
        }
      );
      if (!receipt) {
        throw new Error("Transaction did not complete successfully.");
      }
    }
    const storage = this.getBurnerStorage();
    for (let address2 in storage) {
      storage[address2].active = false;
    }
    storage[address] = {
      chainId: this.chainId,
      privateKey,
      publicKey,
      deployTx,
      masterAccount: this.masterAccount.address,
      active: true
    };
    if (options == null ? void 0 : options.secret) {
      storage[address].accountIndex = options.index;
    }
    if (options == null ? void 0 : options.metadata) {
      storage[address].metadata = options.metadata;
    }
    this.account = burner;
    this.updateIsDeploying(false);
    storage_default.set(this.getBurnerKey(), storage);
    if (this.afterDeploying) {
      try {
        await this.afterDeploying({ account: this.account, deployTx });
      } catch (e) {
        console.log("error on afterDeploying", e);
      }
    }
    return burner;
  }
  async copyBurnersToClipboard() {
    const burners = this.getBurnerStorage();
    try {
      await navigator.clipboard.writeText(JSON.stringify(burners));
    } catch (error) {
      throw error;
    }
  }
  async setBurnersFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      const burners = JSON.parse(text);
      let activeAddress = null;
      for (const [address, burner] of Object.entries(burners)) {
        if (burner.active) {
          activeAddress = address;
          break;
        }
      }
      storage_default.set(this.getBurnerKey(), burners);
      if (activeAddress) {
        this.select(activeAddress);
      }
    } catch (error) {
      throw error;
    }
  }
};
var useBurner = () => {
  const initParams = (0, import_react18.useContext)(BurnerContext);
  if (!initParams) {
    throw new Error("useBurner must be used within a BurnerProvider");
  }
  const burnerManager = (0, import_react18.useMemo)(
    () => new BurnerManager(initParams),
    [initParams]
  );
  const [account, setAccount] = (0, import_react18.useState)(null);
  const [count, setCount] = (0, import_react18.useState)(0);
  const [isDeploying, setIsDeploying] = (0, import_react18.useState)(false);
  (0, import_react18.useEffect)(() => {
    (async () => {
      await burnerManager.init();
      setAccount(burnerManager.getActiveAccount());
      setCount(burnerManager.list().length);
    })();
  }, []);
  const list = (0, import_react18.useCallback)(() => {
    return burnerManager.list();
  }, [count]);
  const select = (0, import_react18.useCallback)(
    (address) => {
      burnerManager.select(address);
      setAccount(burnerManager.getActiveAccount());
    },
    [burnerManager]
  );
  const get = (0, import_react18.useCallback)(
    (address) => {
      return burnerManager.get(address);
    },
    [burnerManager]
  );
  const clear = (0, import_react18.useCallback)(() => {
    burnerManager.clear();
    setCount(0);
  }, [burnerManager]);
  const create = (0, import_react18.useCallback)(
    async (options) => {
      burnerManager.setIsDeployingCallback(setIsDeploying);
      const newAccount = await burnerManager.create(options);
      setAccount(newAccount);
      setCount((prev) => prev + 1);
      return newAccount;
    },
    [burnerManager]
  );
  const listConnectors = (0, import_react18.useCallback)(() => {
    const burners = list();
    return burners.map((burner) => {
      return new BurnerConnector(
        {
          id: burner.address,
          name: "Dojo Burner"
        },
        get(burner.address)
      );
    });
  }, [burnerManager.isDeploying]);
  const copyToClipboard = (0, import_react18.useCallback)(async () => {
    await burnerManager.copyBurnersToClipboard();
  }, [burnerManager]);
  const applyFromClipboard = (0, import_react18.useCallback)(async () => {
    await burnerManager.setBurnersFromClipboard();
    setAccount(burnerManager.getActiveAccount());
    setCount(burnerManager.list().length);
  }, [burnerManager]);
  const generateAddressFromSeed = (0, import_react18.useCallback)(
    (options) => {
      const { address } = burnerManager.generateKeysAndAddress(options);
      return address;
    },
    [burnerManager]
  );
  return {
    get,
    list,
    select,
    create,
    listConnectors,
    clear,
    account,
    isDeploying,
    count,
    copyToClipboard,
    applyFromClipboard,
    generateAddressFromSeed
  };
};
var useBurnerManager = ({
  burnerManager
}) => {
  const [isError, setIsError] = (0, import_react19.useState)(false);
  const [account, setAccount] = (0, import_react19.useState)(null);
  const [count, setCount] = (0, import_react19.useState)(0);
  const [isDeploying, setIsDeploying] = (0, import_react19.useState)(false);
  (0, import_react19.useEffect)(() => {
    if (!burnerManager) {
      setIsError(true);
      console.error("BurnerManager object must be provided");
      return;
    }
    if (!burnerManager.isInitialized) {
      throw new Error("BurnerManager must be intialized");
    }
    if (!burnerManager.masterAccount) {
      throw new Error("BurnerManager Master Account must be provided");
    }
    setIsError(false);
    (async () => {
      setAccount(burnerManager.getActiveAccount());
      setCount(burnerManager.list().length);
    })();
  }, [burnerManager]);
  const list = (0, import_react19.useCallback)(() => {
    return (burnerManager == null ? void 0 : burnerManager.list()) ?? [];
  }, [count]);
  const select = (0, import_react19.useCallback)(
    (address) => {
      burnerManager.select(address);
      setAccount(burnerManager.getActiveAccount());
    },
    [burnerManager]
  );
  const deselect = (0, import_react19.useCallback)(() => {
    burnerManager.deselect();
    setAccount(null);
  }, [burnerManager]);
  const get = (0, import_react19.useCallback)(
    (address) => {
      return burnerManager.get(address);
    },
    [burnerManager]
  );
  const remove = (0, import_react19.useCallback)(
    (address) => {
      burnerManager.delete(address);
      setCount((prev) => Math.max(prev - 1, 0));
    },
    [burnerManager]
  );
  const clear = (0, import_react19.useCallback)(() => {
    burnerManager.clear();
    setCount(0);
  }, [burnerManager]);
  const checkIsDeployed = (0, import_react19.useCallback)(
    async (address, deployTx) => {
      return burnerManager.isBurnerDeployed(address, deployTx);
    },
    [burnerManager]
  );
  const create = (0, import_react19.useCallback)(
    async (options) => {
      burnerManager.setIsDeployingCallback(setIsDeploying);
      const newAccount = await burnerManager.create(options);
      setAccount(newAccount);
      setCount((prev) => prev + 1);
      return newAccount;
    },
    [burnerManager]
  );
  const listConnectors = (0, import_react19.useCallback)(() => {
    const burners = list();
    return burners.map((burner) => {
      return new BurnerConnector(
        {
          id: burner.address,
          name: "Dojo Burner"
        },
        get(burner.address)
      );
    });
  }, [burnerManager == null ? void 0 : burnerManager.isDeploying]);
  const copyToClipboard = (0, import_react19.useCallback)(async () => {
    await burnerManager.copyBurnersToClipboard();
  }, [burnerManager]);
  const applyFromClipboard = (0, import_react19.useCallback)(async () => {
    await burnerManager.setBurnersFromClipboard();
    setAccount(burnerManager.getActiveAccount());
    setCount(burnerManager.list().length);
  }, [burnerManager]);
  const generateAddressFromSeed = (0, import_react19.useCallback)(
    (options) => {
      const { address } = burnerManager.generateKeysAndAddress(options);
      return address;
    },
    [burnerManager]
  );
  return {
    isError,
    get,
    list,
    select,
    deselect,
    remove,
    checkIsDeployed,
    create,
    listConnectors,
    clear,
    account,
    isDeploying,
    count,
    copyToClipboard,
    applyFromClipboard,
    generateAddressFromSeed
  };
};
var useBurnerWindowObject = (burnerManager) => {
  const [isInitialized, setIsInitialized] = (0, import_react20.useState)(false);
  const [isError, setIsError] = (0, import_react20.useState)(false);
  const [error, setError] = (0, import_react20.useState)();
  (0, import_react20.useEffect)(() => {
    const initAsync = async () => {
      if (!burnerManager) {
        setIsInitialized(true);
        return;
      }
      try {
        if (!burnerManager.isInitialized) {
          await burnerManager.init();
        }
        const starknetWindowObject = new DojoBurnerStarknetWindowObject(
          burnerManager
        );
        const key = `starknet_${starknetWindowObject.id}`;
        window[key] = starknetWindowObject;
        setIsInitialized(true);
      } catch (e) {
        console.log(e);
        setIsError(true);
        setError("failed to initialize burnerManager");
      }
    };
    initAsync();
  }, [burnerManager]);
  return { isInitialized, isError, error };
};
var usePredeployedWindowObject = (predeployedManager) => {
  const [isInitialized, setIsInitialized] = (0, import_react21.useState)(false);
  const [isError, setIsError] = (0, import_react21.useState)(false);
  const [error, setError] = (0, import_react21.useState)();
  (0, import_react21.useEffect)(() => {
    const initAsync = async () => {
      if (!predeployedManager) {
        setIsInitialized(true);
        return;
      }
      try {
        if (!predeployedManager.isInitialized) {
          await predeployedManager.init();
        }
        const starknetWindowObject = new DojoPredeployedStarknetWindowObject(predeployedManager);
        const key = `starknet_${starknetWindowObject.id}`;
        window[key] = starknetWindowObject;
        setIsInitialized(true);
      } catch (e) {
        console.log(e);
        setIsError(true);
        setError("failed to initialize predeployedManager");
      }
    };
    initAsync();
  }, [predeployedManager]);
  return { isInitialized, isError, error };
};
var PredeployedManager2 = class {
  constructor({
    rpcProvider,
    predeployedAccounts
  }) {
    __publicField(this, "provider");
    __publicField(this, "chainId", "");
    __publicField(this, "account", null);
    __publicField(this, "predeployedAccounts", []);
    __publicField(this, "isInitialized", false);
    this.provider = rpcProvider;
    this.predeployedAccounts = predeployedAccounts;
  }
  getStorageKey() {
    return `predeployed_${this.chainId}`;
  }
  getStorage() {
    return storage_default.get(this.getStorageKey()) || {};
  }
  setActiveAccount(storage) {
    for (let address in storage) {
      if (storage[address].active) {
        this.account = new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
        return;
      }
    }
  }
  async init() {
    this.chainId = shortString_exports.decodeShortString(
      await this.provider.getChainId()
    );
    const storage = this.getStorage();
    const addresses = Object.keys(storage);
    if (addresses.length) {
      storage_default.set(this.getStorageKey(), storage);
      this.setActiveAccount(storage);
    } else {
      const storage2 = this.getStorage();
      for (let predeployed of this.predeployedAccounts) {
        storage2[predeployed.address] = predeployed;
      }
      storage_default.set(this.getStorageKey(), storage2);
    }
    this.isInitialized = true;
  }
  list() {
    const storage = this.getStorage();
    return Object.keys(storage).map((address) => {
      return {
        address,
        name: storage[address].name,
        active: storage[address].active
      };
    });
  }
  select(address) {
    const storage = this.getStorage();
    if (!storage[address]) {
      throw new Error("predeployed not found");
    }
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage[address].active = true;
    storage_default.set(this.getStorageKey(), storage);
    this.account = new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  get(address) {
    const storage = this.getStorage();
    if (!storage[address]) {
      throw new Error("predeployed not found");
    }
    return new Account(
      this.provider,
      address,
      storage[address].privateKey,
      "1"
    );
  }
  delete(address) {
    const storage = this.getStorage();
    if (!storage[address]) {
      throw new Error("predeployed not found");
    }
    delete storage[address];
    storage_default.set(this.getStorageKey(), storage);
  }
  clear() {
    storage_default.remove(this.getStorageKey());
  }
  getActiveAccount() {
    const storage = this.getStorage();
    for (let address in storage) {
      if (storage[address].active) {
        return new Account(
          this.provider,
          address,
          storage[address].privateKey,
          "1"
        );
      }
    }
    return null;
  }
};
export {
  BurnerConnector,
  BurnerContext,
  BurnerManager,
  BurnerProvider,
  DojoBurnerStarknetWindowObject,
  DojoPredeployedStarknetWindowObject,
  PredeployedManager2 as PredeployedManager,
  katanaIcon,
  prefundAccount,
  useBurner,
  useBurnerManager,
  useBurnerWindowObject,
  usePredeployedWindowObject
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)

@scure/bip32/lib/esm/index.js:
  (*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=@dojoengine_create-burner.js.map
