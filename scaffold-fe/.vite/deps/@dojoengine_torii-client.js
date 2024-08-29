import "./chunk-OCBYBPSH.js";

// node_modules/@dojoengine/torii-wasm/pkg/web/dojo_c.js
import * as wasm2 from "/Users/personal/Documents/dev/Treasury-Island/scaffold-fe/node_modules/@dojoengine/torii-wasm/pkg/web/dojo_c_bg.wasm";

// node_modules/@dojoengine/torii-wasm/pkg/web/dojo_c_bg.js
var wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var WASM_VECTOR_LEN = 0;
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
var lTextEncoder = typeof TextEncoder === "undefined" ? (0, module.require)("util").TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder("utf-8");
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
var cachedFloat64Memory0 = null;
function getFloat64Memory0() {
  if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }
  return cachedFloat64Memory0;
}
var cachedBigInt64Memory0 = null;
function getBigInt64Memory0() {
  if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
    cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
  }
  return cachedBigInt64Memory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
var CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((state) => {
  wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
});
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
        CLOSURE_DTORS.unregister(state);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_52(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h30748262f1b7d27c(arg0, arg1, addHeapObject(arg2));
}
function __wbg_adapter_59(arg0, arg1) {
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb74b4e0cfb480659(arg0, arg1);
}
function __wbg_adapter_62(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcbe5adb8ab3b7d0e(arg0, arg1, addHeapObject(arg2));
}
function __wbg_adapter_65(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0616717051788241(arg0, arg1, addHeapObject(arg2));
}
function typedDataEncode(typed_data, address) {
  let deferred4_0;
  let deferred4_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(typed_data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.typedDataEncode(retptr, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr3 = r0;
    var len3 = r1;
    if (r3) {
      ptr3 = 0;
      len3 = 0;
      throw takeObject(r2);
    }
    deferred4_0 = ptr3;
    deferred4_1 = len3;
    return getStringFromWasm0(ptr3, len3);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
  }
}
function signingKeyNew() {
  let deferred1_0;
  let deferred1_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.signingKeyNew(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    deferred1_0 = r0;
    deferred1_1 = r1;
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function signingKeySign(private_key, hash) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(private_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.signingKeySign(retptr, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return takeObject(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function verifyingKeyNew(signing_key) {
  let deferred3_0;
  let deferred3_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(signing_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.verifyingKeyNew(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr2 = r0;
    var len2 = r1;
    if (r3) {
      ptr2 = 0;
      len2 = 0;
      throw takeObject(r2);
    }
    deferred3_0 = ptr2;
    deferred3_1 = len2;
    return getStringFromWasm0(ptr2, len2);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
  }
}
function verifyingKeyVerify(verifying_key, hash, signature) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(verifying_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.verifyingKeyVerify(retptr, ptr0, len0, ptr1, len1, addHeapObject(signature));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return r0 !== 0;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function createProvider(rpc_url) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(rpc_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.createProvider(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return Provider.__wrap(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
var cachedUint32Memory0 = null;
function getUint32Memory0() {
  if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachedUint32Memory0;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  const mem = getUint32Memory0();
  for (let i = 0; i < array.length; i++) {
    mem[ptr / 4 + i] = addHeapObject(array[i]);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function hashGetContractAddress(class_hash, salt, constructor_calldata, deployer_address) {
  let deferred6_0;
  let deferred6_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(class_hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArrayJsValueToWasm0(constructor_calldata, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passStringToWasm0(deployer_address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len3 = WASM_VECTOR_LEN;
    wasm.hashGetContractAddress(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr5 = r0;
    var len5 = r1;
    if (r3) {
      ptr5 = 0;
      len5 = 0;
      throw takeObject(r2);
    }
    deferred6_0 = ptr5;
    deferred6_1 = len5;
    return getStringFromWasm0(ptr5, len5);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred6_0, deferred6_1, 1);
  }
}
function getSelectorFromTag(tag) {
  let deferred2_0;
  let deferred2_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.getSelectorFromTag(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    deferred2_0 = r0;
    deferred2_1 = r1;
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getUint32Memory0();
  const slice = mem.subarray(ptr / 4, ptr / 4 + len);
  const result = [];
  for (let i = 0; i < slice.length; i++) {
    result.push(takeObject(slice[i]));
  }
  return result;
}
function byteArraySerialize(str) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.byteArraySerialize(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    var v2 = getArrayJsValueFromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 4, 4);
    return v2;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function byteArrayDeserialize(felts) {
  let deferred3_0;
  let deferred3_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArrayJsValueToWasm0(felts, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.byteArrayDeserialize(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr2 = r0;
    var len2 = r1;
    if (r3) {
      ptr2 = 0;
      len2 = 0;
      throw takeObject(r2);
    }
    deferred3_0 = ptr2;
    deferred3_1 = len2;
    return getStringFromWasm0(ptr2, len2);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
  }
}
function poseidonHash(inputs) {
  let deferred3_0;
  let deferred3_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArrayJsValueToWasm0(inputs, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.poseidonHash(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr2 = r0;
    var len2 = r1;
    if (r3) {
      ptr2 = 0;
      len2 = 0;
      throw takeObject(r2);
    }
    deferred3_0 = ptr2;
    deferred3_1 = len2;
    return getStringFromWasm0(ptr2, len2);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
  }
}
function getSelectorFromName(name) {
  let deferred3_0;
  let deferred3_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.getSelectorFromName(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr2 = r0;
    var len2 = r1;
    if (r3) {
      ptr2 = 0;
      len2 = 0;
      throw takeObject(r2);
    }
    deferred3_0 = ptr2;
    deferred3_1 = len2;
    return getStringFromWasm0(ptr2, len2);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
  }
}
function starknetKeccak(inputs) {
  let deferred2_0;
  let deferred2_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.starknetKeccak(retptr, addHeapObject(inputs));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr1 = r0;
    var len1 = r1;
    if (r3) {
      ptr1 = 0;
      len1 = 0;
      throw takeObject(r2);
    }
    deferred2_0 = ptr1;
    deferred2_1 = len1;
    return getStringFromWasm0(ptr1, len1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function cairoShortStringToFelt(str) {
  let deferred3_0;
  let deferred3_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.cairoShortStringToFelt(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr2 = r0;
    var len2 = r1;
    if (r3) {
      ptr2 = 0;
      len2 = 0;
      throw takeObject(r2);
    }
    deferred3_0 = ptr2;
    deferred3_1 = len2;
    return getStringFromWasm0(ptr2, len2);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
  }
}
function parseCairoShortString(str) {
  let deferred3_0;
  let deferred3_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.parseCairoShortString(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    var ptr2 = r0;
    var len2 = r1;
    if (r3) {
      ptr2 = 0;
      len2 = 0;
      throw takeObject(r2);
    }
    deferred3_0 = ptr2;
    deferred3_1 = len2;
    return getStringFromWasm0(ptr2, len2);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
  }
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
function createClient(config) {
  const ret = wasm.createClient(addHeapObject(config));
  return takeObject(ret);
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function __wbg_adapter_326(arg0, arg1, arg2, arg3) {
  wasm.wasm_bindgen__convert__closures__invoke2_mut__h3e82d67bb2b557d3(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
var AccountFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_account_free(ptr >>> 0));
var Account = class _Account {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Account.prototype);
    obj.__wbg_ptr = ptr;
    AccountFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_account_free(ptr);
  }
  /**
  * @returns {string}
  */
  address() {
    let deferred2_0;
    let deferred2_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.account_address(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      var r3 = getInt32Memory0()[retptr / 4 + 3];
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
  * @returns {string}
  */
  chainId() {
    let deferred2_0;
    let deferred2_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.account_chainId(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      var r3 = getInt32Memory0()[retptr / 4 + 3];
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
  * @param {string} block_id
  */
  setBlockId(block_id) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(block_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      wasm.account_setBlockId(retptr, this.__wbg_ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {(Call)[]} calldata
  * @returns {Promise<string>}
  */
  executeRaw(calldata) {
    const ptr0 = passArrayJsValueToWasm0(calldata, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.account_executeRaw(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
  * @param {string} private_key
  * @returns {Promise<Account>}
  */
  deployBurner(private_key) {
    const ptr0 = passStringToWasm0(private_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.account_deployBurner(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
  * @returns {Promise<string>}
  */
  nonce() {
    const ret = wasm.account_nonce(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var IntoUnderlyingByteSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0));
var IntoUnderlyingByteSource = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingByteSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingbytesource_free(ptr);
  }
  /**
  * @returns {string}
  */
  get type() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.intounderlyingbytesource_type(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  * @returns {number}
  */
  get autoAllocateChunkSize() {
    const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {any} controller
  */
  start(controller) {
    wasm.intounderlyingbytesource_start(this.__wbg_ptr, addHeapObject(controller));
  }
  /**
  * @param {any} controller
  * @returns {Promise<any>}
  */
  pull(controller) {
    const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  /**
  */
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingbytesource_cancel(ptr);
  }
};
var IntoUnderlyingSinkFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0));
var IntoUnderlyingSink = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSinkFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsink_free(ptr);
  }
  /**
  * @param {any} chunk
  * @returns {Promise<any>}
  */
  write(chunk) {
    const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, addHeapObject(chunk));
    return takeObject(ret);
  }
  /**
  * @returns {Promise<any>}
  */
  close() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.intounderlyingsink_close(ptr);
    return takeObject(ret);
  }
  /**
  * @param {any} reason
  * @returns {Promise<any>}
  */
  abort(reason) {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.intounderlyingsink_abort(ptr, addHeapObject(reason));
    return takeObject(ret);
  }
};
var IntoUnderlyingSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0));
var IntoUnderlyingSource = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsource_free(ptr);
  }
  /**
  * @param {any} controller
  * @returns {Promise<any>}
  */
  pull(controller) {
    const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  /**
  */
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingsource_cancel(ptr);
  }
};
var PipeOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_pipeoptions_free(ptr >>> 0));
var PipeOptions = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PipeOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_pipeoptions_free(ptr);
  }
  /**
  * @returns {boolean}
  */
  get preventClose() {
    const ret = wasm.pipeoptions_preventClose(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @returns {boolean}
  */
  get preventCancel() {
    const ret = wasm.pipeoptions_preventCancel(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @returns {boolean}
  */
  get preventAbort() {
    const ret = wasm.pipeoptions_preventAbort(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @returns {AbortSignal | undefined}
  */
  get signal() {
    const ret = wasm.pipeoptions_signal(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var ProviderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_provider_free(ptr >>> 0));
var Provider = class _Provider {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Provider.prototype);
    obj.__wbg_ptr = ptr;
    ProviderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ProviderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_provider_free(ptr);
  }
  /**
  * @param {string} private_key
  * @param {string} address
  * @returns {Promise<Account>}
  */
  createAccount(private_key, address) {
    const ptr0 = passStringToWasm0(private_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.provider_createAccount(this.__wbg_ptr, ptr0, len0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {Call} call
  * @param {BlockId} block_id
  * @returns {Promise<Array<any>>}
  */
  call(call, block_id) {
    const ret = wasm.provider_call(this.__wbg_ptr, addHeapObject(call), addHeapObject(block_id));
    return takeObject(ret);
  }
  /**
  * @param {string} txn_hash
  * @returns {Promise<boolean>}
  */
  waitForTransaction(txn_hash) {
    const ptr0 = passStringToWasm0(txn_hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.provider_waitForTransaction(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
};
var QueuingStrategyFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_queuingstrategy_free(ptr >>> 0));
var QueuingStrategy = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    QueuingStrategyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_queuingstrategy_free(ptr);
  }
  /**
  * @returns {number}
  */
  get highWaterMark() {
    const ret = wasm.queuingstrategy_highWaterMark(this.__wbg_ptr);
    return ret;
  }
};
var ReadableStreamGetReaderOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_readablestreamgetreaderoptions_free(ptr >>> 0));
var ReadableStreamGetReaderOptions = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ReadableStreamGetReaderOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_readablestreamgetreaderoptions_free(ptr);
  }
  /**
  * @returns {any}
  */
  get mode() {
    const ret = wasm.readablestreamgetreaderoptions_mode(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var SubscriptionFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_subscription_free(ptr >>> 0));
var Subscription = class _Subscription {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Subscription.prototype);
    obj.__wbg_ptr = ptr;
    SubscriptionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SubscriptionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_subscription_free(ptr);
  }
  /**
  * @returns {bigint}
  */
  get id() {
    const ret = wasm.__wbg_get_subscription_id(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
  * @param {bigint} arg0
  */
  set id(arg0) {
    wasm.__wbg_set_subscription_id(this.__wbg_ptr, arg0);
  }
  /**
  */
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.subscription_cancel(ptr);
  }
};
var ToriiClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_toriiclient_free(ptr >>> 0));
var ToriiClient = class _ToriiClient {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_ToriiClient.prototype);
    obj.__wbg_ptr = ptr;
    ToriiClientFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ToriiClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_toriiclient_free(ptr);
  }
  /**
  * @param {Query} query
  * @returns {Promise<Entities>}
  */
  getEntities(query) {
    const ret = wasm.toriiclient_getEntities(this.__wbg_ptr, addHeapObject(query));
    return takeObject(ret);
  }
  /**
  * @param {number} limit
  * @param {number} offset
  * @returns {Promise<Entities>}
  */
  getAllEntities(limit, offset) {
    const ret = wasm.toriiclient_getAllEntities(this.__wbg_ptr, limit, offset);
    return takeObject(ret);
  }
  /**
  * @param {Query} query
  * @returns {Promise<Entities>}
  */
  getEventMessages(query) {
    const ret = wasm.toriiclient_getEventMessages(this.__wbg_ptr, addHeapObject(query));
    return takeObject(ret);
  }
  /**
  * @param {(EntityKeysClause)[]} clauses
  * @param {Function} callback
  * @returns {Promise<Subscription>}
  */
  onEntityUpdated(clauses, callback) {
    const ptr0 = passArrayJsValueToWasm0(clauses, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.toriiclient_onEntityUpdated(this.__wbg_ptr, ptr0, len0, addHeapObject(callback));
    return takeObject(ret);
  }
  /**
  * @param {Subscription} subscription
  * @param {(EntityKeysClause)[]} clauses
  * @returns {Promise<void>}
  */
  updateEntitySubscription(subscription, clauses) {
    _assertClass(subscription, Subscription);
    const ptr0 = passArrayJsValueToWasm0(clauses, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.toriiclient_updateEntitySubscription(this.__wbg_ptr, subscription.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
  * @param {(EntityKeysClause)[]} clauses
  * @param {Function} callback
  * @returns {Promise<Subscription>}
  */
  onEventMessageUpdated(clauses, callback) {
    const ptr0 = passArrayJsValueToWasm0(clauses, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.toriiclient_onEventMessageUpdated(this.__wbg_ptr, ptr0, len0, addHeapObject(callback));
    return takeObject(ret);
  }
  /**
  * @param {Subscription} subscription
  * @param {(EntityKeysClause)[]} clauses
  * @returns {Promise<void>}
  */
  updateEventMessageSubscription(subscription, clauses) {
    _assertClass(subscription, Subscription);
    const ptr0 = passArrayJsValueToWasm0(clauses, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.toriiclient_updateEventMessageSubscription(this.__wbg_ptr, subscription.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
  * @param {string} message
  * @param {(string)[]} signature
  * @returns {Promise<Uint8Array>}
  */
  publishMessage(message, signature) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayJsValueToWasm0(signature, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.toriiclient_publishMessage(this.__wbg_ptr, ptr0, len0, ptr1, len1);
    return takeObject(ret);
  }
};
function __wbindgen_string_get(arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === "string" ? obj : void 0;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
function __wbindgen_string_new(arg0, arg1) {
  const ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
}
function __wbindgen_object_clone_ref(arg0) {
  const ret = getObject(arg0);
  return addHeapObject(ret);
}
function __wbg_toriiclient_new(arg0) {
  const ret = ToriiClient.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_account_new(arg0) {
  const ret = Account.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbg_subscription_new(arg0) {
  const ret = Subscription.__wrap(arg0);
  return addHeapObject(ret);
}
function __wbindgen_cb_drop(arg0) {
  const obj = takeObject(arg0).original;
  if (obj.cnt-- == 1) {
    obj.a = 0;
    return true;
  }
  const ret = false;
  return ret;
}
function __wbindgen_is_string(arg0) {
  const ret = typeof getObject(arg0) === "string";
  return ret;
}
function __wbindgen_error_new(arg0, arg1) {
  const ret = new Error(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbindgen_as_number(arg0) {
  const ret = +getObject(arg0);
  return ret;
}
function __wbindgen_number_new(arg0) {
  const ret = arg0;
  return addHeapObject(ret);
}
function __wbindgen_is_bigint(arg0) {
  const ret = typeof getObject(arg0) === "bigint";
  return ret;
}
function __wbindgen_bigint_from_i64(arg0) {
  const ret = arg0;
  return addHeapObject(ret);
}
function __wbindgen_jsval_eq(arg0, arg1) {
  const ret = getObject(arg0) === getObject(arg1);
  return ret;
}
function __wbindgen_bigint_from_u64(arg0) {
  const ret = BigInt.asUintN(64, arg0);
  return addHeapObject(ret);
}
function __wbindgen_boolean_get(arg0) {
  const v = getObject(arg0);
  const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
  return ret;
}
function __wbindgen_is_object(arg0) {
  const val = getObject(arg0);
  const ret = typeof val === "object" && val !== null;
  return ret;
}
function __wbindgen_is_undefined(arg0) {
  const ret = getObject(arg0) === void 0;
  return ret;
}
function __wbindgen_in(arg0, arg1) {
  const ret = getObject(arg0) in getObject(arg1);
  return ret;
}
function __wbindgen_jsval_loose_eq(arg0, arg1) {
  const ret = getObject(arg0) == getObject(arg1);
  return ret;
}
function __wbindgen_number_get(arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === "number" ? obj : void 0;
  getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
  getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}
function __wbg_String_b9412f8799faab3e(arg0, arg1) {
  const ret = String(getObject(arg1));
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}
function __wbg_getwithrefkey_edc2c8960f0f1191(arg0, arg1) {
  const ret = getObject(arg0)[getObject(arg1)];
  return addHeapObject(ret);
}
function __wbg_set_f975102236d3c502(arg0, arg1, arg2) {
  getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
}
function __wbg_clearTimeout_76877dbc010e786d(arg0) {
  const ret = clearTimeout(takeObject(arg0));
  return addHeapObject(ret);
}
function __wbg_setTimeout_75cb9b6991a4031d() {
  return handleError(function(arg0, arg1) {
    const ret = setTimeout(getObject(arg0), arg1);
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_fetch_24472c79bb4342d1(arg0, arg1) {
  const ret = fetch(getObject(arg0), getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_close_e9110ca16e2567db(arg0) {
  getObject(arg0).close();
}
function __wbg_enqueue_d71a1a518e21f5c3(arg0, arg1) {
  getObject(arg0).enqueue(getObject(arg1));
}
function __wbg_byobRequest_08c18cee35def1f4(arg0) {
  const ret = getObject(arg0).byobRequest;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_view_231340b0dd8a2484(arg0) {
  const ret = getObject(arg0).view;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_byteLength_5299848ed3264181(arg0) {
  const ret = getObject(arg0).byteLength;
  return ret;
}
function __wbg_close_da7e6fb9d9851e5a(arg0) {
  getObject(arg0).close();
}
function __wbg_respond_8fadc5f5c9d95422(arg0, arg1) {
  getObject(arg0).respond(arg1 >>> 0);
}
function __wbg_buffer_4e79326814bdd393(arg0) {
  const ret = getObject(arg0).buffer;
  return addHeapObject(ret);
}
function __wbg_byteOffset_b69b0a07afccce19(arg0) {
  const ret = getObject(arg0).byteOffset;
  return ret;
}
function __wbg_getReader_8ecba87d8003e950() {
  return handleError(function(arg0) {
    const ret = getObject(arg0).getReader();
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_releaseLock_9ae075576f54bf0b() {
  return handleError(function(arg0) {
    getObject(arg0).releaseLock();
  }, arguments);
}
function __wbg_read_88c96573fc8b3b01(arg0) {
  const ret = getObject(arg0).read();
  return addHeapObject(ret);
}
function __wbg_done_76252d32deca186b(arg0) {
  const ret = getObject(arg0).done;
  return ret;
}
function __wbg_value_ff3741eb46856618(arg0) {
  const ret = getObject(arg0).value;
  return addHeapObject(ret);
}
function __wbg_cancel_7f202496da02cd45(arg0) {
  const ret = getObject(arg0).cancel();
  return addHeapObject(ret);
}
function __wbg_fetch_bc7c8e27076a5c84(arg0) {
  const ret = fetch(getObject(arg0));
  return addHeapObject(ret);
}
function __wbg_queueMicrotask_3cbae2ec6b6cd3d6(arg0) {
  const ret = getObject(arg0).queueMicrotask;
  return addHeapObject(ret);
}
function __wbindgen_is_function(arg0) {
  const ret = typeof getObject(arg0) === "function";
  return ret;
}
function __wbg_queueMicrotask_481971b0d87f3dd4(arg0) {
  queueMicrotask(getObject(arg0));
}
function __wbg_instanceof_Window_f401953a2cf86220(arg0) {
  let result;
  try {
    result = getObject(arg0) instanceof Window;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_document_5100775d18896c16(arg0) {
  const ret = getObject(arg0).document;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_navigator_6c8fa55c5cc8796e(arg0) {
  const ret = getObject(arg0).navigator;
  return addHeapObject(ret);
}
function __wbg_location_1325817a58c77ceb(arg0) {
  const ret = getObject(arg0).location;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_fetch_921fad6ef9e883dd(arg0, arg1) {
  const ret = getObject(arg0).fetch(getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_fetch_bc400efeda8ac0c8(arg0, arg1, arg2) {
  const ret = getObject(arg0).fetch(getObject(arg1), getObject(arg2));
  return addHeapObject(ret);
}
function __wbg_now_4e659b3d15f470d9(arg0) {
  const ret = getObject(arg0).now();
  return ret;
}
function __wbg_instanceof_Response_849eb93e75734b6e(arg0) {
  let result;
  try {
    result = getObject(arg0) instanceof Response;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_url_5f6dc4009ac5f99d(arg0, arg1) {
  const ret = getObject(arg1).url;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}
function __wbg_status_61a01141acd3cf74(arg0) {
  const ret = getObject(arg0).status;
  return ret;
}
function __wbg_headers_9620bfada380764a(arg0) {
  const ret = getObject(arg0).headers;
  return addHeapObject(ret);
}
function __wbg_body_9545a94f397829db(arg0) {
  const ret = getObject(arg0).body;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_text_450a059667fd91fd() {
  return handleError(function(arg0) {
    const ret = getObject(arg0).text();
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_localDescription_fdbb277fe69d4acc(arg0) {
  const ret = getObject(arg0).localDescription;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_setondatachannel_613916740487b8be(arg0, arg1) {
  getObject(arg0).ondatachannel = getObject(arg1);
}
function __wbg_newwithconfiguration_b15024f88c684163() {
  return handleError(function(arg0) {
    const ret = new RTCPeerConnection(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_close_afa09a1e1e0a4628(arg0) {
  getObject(arg0).close();
}
function __wbg_createDataChannel_df256842e04b7684(arg0, arg1, arg2) {
  const ret = getObject(arg0).createDataChannel(getStringFromWasm0(arg1, arg2));
  return addHeapObject(ret);
}
function __wbg_createDataChannel_2cb2147b68f44846(arg0, arg1, arg2, arg3) {
  const ret = getObject(arg0).createDataChannel(getStringFromWasm0(arg1, arg2), getObject(arg3));
  return addHeapObject(ret);
}
function __wbg_createOffer_663eb8b8f3c6f8b9(arg0) {
  const ret = getObject(arg0).createOffer();
  return addHeapObject(ret);
}
function __wbg_generateCertificate_31ec6e1adc163ef8() {
  return handleError(function(arg0) {
    const ret = RTCPeerConnection.generateCertificate(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_setLocalDescription_41e208bc9dc2a799(arg0, arg1) {
  const ret = getObject(arg0).setLocalDescription(getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_setRemoteDescription_38ba80261ed6604d(arg0, arg1) {
  const ret = getObject(arg0).setRemoteDescription(getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_data_3ce7c145ca4fbcdc(arg0) {
  const ret = getObject(arg0).data;
  return addHeapObject(ret);
}
function __wbg_newwithstrandinit_3fd6fba4083ff2d0() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_new_ab6fd82b10560829() {
  return handleError(function() {
    const ret = new Headers();
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_append_7bfcb4937d1d5e29() {
  return handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
  }, arguments);
}
function __wbg_readyState_4cec7804e10e9e8c(arg0) {
  const ret = getObject(arg0).readyState;
  return addHeapObject(ret);
}
function __wbg_bufferedAmount_d96d201d2e665ac8(arg0) {
  const ret = getObject(arg0).bufferedAmount;
  return ret;
}
function __wbg_setbufferedAmountLowThreshold_c720cc0a1e84254f(arg0, arg1) {
  getObject(arg0).bufferedAmountLowThreshold = arg1 >>> 0;
}
function __wbg_setonopen_a8d36a7a7e2a0661(arg0, arg1) {
  getObject(arg0).onopen = getObject(arg1);
}
function __wbg_setonclose_756793f4dc0ff009(arg0, arg1) {
  getObject(arg0).onclose = getObject(arg1);
}
function __wbg_setonmessage_156079b6ed74472e(arg0, arg1) {
  getObject(arg0).onmessage = getObject(arg1);
}
function __wbg_setonbufferedamountlow_b8982bab0245abc8(arg0, arg1) {
  getObject(arg0).onbufferedamountlow = getObject(arg1);
}
function __wbg_setbinaryType_0b2b32db03dea0c0(arg0, arg1) {
  getObject(arg0).binaryType = takeObject(arg1);
}
function __wbg_send_a10ff3ed6e9aee30() {
  return handleError(function(arg0, arg1, arg2) {
    getObject(arg0).send(getArrayU8FromWasm0(arg1, arg2));
  }, arguments);
}
function __wbg_channel_034b1aa3ed21a9d2(arg0) {
  const ret = getObject(arg0).channel;
  return addHeapObject(ret);
}
function __wbg_userAgent_e94c7cbcdac01fea() {
  return handleError(function(arg0, arg1) {
    const ret = getObject(arg1).userAgent;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  }, arguments);
}
function __wbg_signal_a61f78a3478fd9bc(arg0) {
  const ret = getObject(arg0).signal;
  return addHeapObject(ret);
}
function __wbg_new_0d76b0581eca6298() {
  return handleError(function() {
    const ret = new AbortController();
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_abort_2aa7521d5690750e(arg0) {
  getObject(arg0).abort();
}
function __wbg_hostname_3d9f22c60dc5bec6() {
  return handleError(function(arg0, arg1) {
    const ret = getObject(arg1).hostname;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  }, arguments);
}
function __wbg_sdp_ec4467d15d4acf46(arg0, arg1) {
  const ret = getObject(arg1).sdp;
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}
function __wbg_crypto_1d1f22824a6a080c(arg0) {
  const ret = getObject(arg0).crypto;
  return addHeapObject(ret);
}
function __wbg_process_4a72847cc503995b(arg0) {
  const ret = getObject(arg0).process;
  return addHeapObject(ret);
}
function __wbg_versions_f686565e586dd935(arg0) {
  const ret = getObject(arg0).versions;
  return addHeapObject(ret);
}
function __wbg_node_104a2ff8d6ea03a2(arg0) {
  const ret = getObject(arg0).node;
  return addHeapObject(ret);
}
function __wbg_require_cca90b1a94a0255b() {
  return handleError(function() {
    const ret = module.require;
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_msCrypto_eb05e62b530a1508(arg0) {
  const ret = getObject(arg0).msCrypto;
  return addHeapObject(ret);
}
function __wbg_randomFillSync_5c9c955aa56b6049() {
  return handleError(function(arg0, arg1) {
    getObject(arg0).randomFillSync(takeObject(arg1));
  }, arguments);
}
function __wbg_getRandomValues_3aa56aa6edec874c() {
  return handleError(function(arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
  }, arguments);
}
function __wbg_get_bd8e338fbd5f5cc8(arg0, arg1) {
  const ret = getObject(arg0)[arg1 >>> 0];
  return addHeapObject(ret);
}
function __wbg_length_cd7af8117672b8b8(arg0) {
  const ret = getObject(arg0).length;
  return ret;
}
function __wbg_new_16b304a2cfa7ff4a() {
  const ret = new Array();
  return addHeapObject(ret);
}
function __wbg_newnoargs_e258087cd0daa0ea(arg0, arg1) {
  const ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_new_d9bc3a0147634640() {
  const ret = /* @__PURE__ */ new Map();
  return addHeapObject(ret);
}
function __wbg_next_40fc327bfc8770e6(arg0) {
  const ret = getObject(arg0).next;
  return addHeapObject(ret);
}
function __wbg_next_196c84450b364254() {
  return handleError(function(arg0) {
    const ret = getObject(arg0).next();
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_done_298b57d23c0fc80c(arg0) {
  const ret = getObject(arg0).done;
  return ret;
}
function __wbg_value_d93c65011f51a456(arg0) {
  const ret = getObject(arg0).value;
  return addHeapObject(ret);
}
function __wbg_iterator_2cee6dadfd956dfa() {
  const ret = Symbol.iterator;
  return addHeapObject(ret);
}
function __wbg_get_e3c254076557e348() {
  return handleError(function(arg0, arg1) {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_call_27c0f87801dedf93() {
  return handleError(function(arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_new_72fb9a18b5ae2624() {
  const ret = new Object();
  return addHeapObject(ret);
}
function __wbg_self_ce0dbfc45cf2f5be() {
  return handleError(function() {
    const ret = self.self;
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_window_c6fb939a7f436783() {
  return handleError(function() {
    const ret = window.window;
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_globalThis_d1e6af4856ba331b() {
  return handleError(function() {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_global_207b558942527489() {
  return handleError(function() {
    const ret = global.global;
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_set_d4638f722068f043(arg0, arg1, arg2) {
  getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
}
function __wbg_isArray_2ab64d95e09ea0ae(arg0) {
  const ret = Array.isArray(getObject(arg0));
  return ret;
}
function __wbg_push_a5b05aedc7234f9f(arg0, arg1) {
  const ret = getObject(arg0).push(getObject(arg1));
  return ret;
}
function __wbg_instanceof_ArrayBuffer_836825be07d4c9d2(arg0) {
  let result;
  try {
    result = getObject(arg0) instanceof ArrayBuffer;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_instanceof_Error_e20bb56fd5591a93(arg0) {
  let result;
  try {
    result = getObject(arg0) instanceof Error;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_new_28c511d9baebfa89(arg0, arg1) {
  const ret = new Error(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_toString_ffe4c9ea3b3532e9(arg0) {
  const ret = getObject(arg0).toString();
  return addHeapObject(ret);
}
function __wbg_call_b3ca7c6051f9bec1() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_call_8e7cb608789c2528() {
  return handleError(function(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_set_8417257aaedc936b(arg0, arg1, arg2) {
  const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
  return addHeapObject(ret);
}
function __wbg_isSafeInteger_f7b04ef02296c4d2(arg0) {
  const ret = Number.isSafeInteger(getObject(arg0));
  return ret;
}
function __wbg_now_3014639a94423537() {
  const ret = Date.now();
  return ret;
}
function __wbg_entries_95cc2c823b285a09(arg0) {
  const ret = Object.entries(getObject(arg0));
  return addHeapObject(ret);
}
function __wbg_toString_c816a20ab859d0c1(arg0) {
  const ret = getObject(arg0).toString();
  return addHeapObject(ret);
}
function __wbg_new_81740750da40724f(arg0, arg1) {
  try {
    var state0 = { a: arg0, b: arg1 };
    var cb0 = (arg02, arg12) => {
      const a = state0.a;
      state0.a = 0;
      try {
        return __wbg_adapter_326(a, state0.b, arg02, arg12);
      } finally {
        state0.a = a;
      }
    };
    const ret = new Promise(cb0);
    return addHeapObject(ret);
  } finally {
    state0.a = state0.b = 0;
  }
}
function __wbg_resolve_b0083a7967828ec8(arg0) {
  const ret = Promise.resolve(getObject(arg0));
  return addHeapObject(ret);
}
function __wbg_catch_0260e338d10f79ae(arg0, arg1) {
  const ret = getObject(arg0).catch(getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_then_0c86a60e8fcfe9f6(arg0, arg1) {
  const ret = getObject(arg0).then(getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_then_a73caa9a87991566(arg0, arg1, arg2) {
  const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
  return addHeapObject(ret);
}
function __wbg_buffer_12d079cc21e14bdb(arg0) {
  const ret = getObject(arg0).buffer;
  return addHeapObject(ret);
}
function __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb(arg0, arg1, arg2) {
  const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
}
function __wbg_new_63b92bc8671ed464(arg0) {
  const ret = new Uint8Array(getObject(arg0));
  return addHeapObject(ret);
}
function __wbg_set_a47bac70306a19a7(arg0, arg1, arg2) {
  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
function __wbg_length_c20a40f15020d68a(arg0) {
  const ret = getObject(arg0).length;
  return ret;
}
function __wbg_instanceof_Uint8Array_2b3bbecd033d19f6(arg0) {
  let result;
  try {
    result = getObject(arg0) instanceof Uint8Array;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_newwithlength_e9b4878cebadb3d3(arg0) {
  const ret = new Uint8Array(arg0 >>> 0);
  return addHeapObject(ret);
}
function __wbg_subarray_a1f73cd4b5b42fe1(arg0, arg1, arg2) {
  const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
}
function __wbg_has_0af94d20077affa2() {
  return handleError(function(arg0, arg1) {
    const ret = Reflect.has(getObject(arg0), getObject(arg1));
    return ret;
  }, arguments);
}
function __wbg_set_1f9b04f170055d33() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
  }, arguments);
}
function __wbg_stringify_8887fe74e1c50d81() {
  return handleError(function(arg0) {
    const ret = JSON.stringify(getObject(arg0));
    return addHeapObject(ret);
  }, arguments);
}
function __wbindgen_bigint_get_as_i64(arg0, arg1) {
  const v = getObject(arg1);
  const ret = typeof v === "bigint" ? v : void 0;
  getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
  getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}
function __wbindgen_debug_string(arg0, arg1) {
  const ret = debugString(getObject(arg1));
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len1;
  getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbindgen_rethrow(arg0) {
  throw takeObject(arg0);
}
function __wbindgen_memory() {
  const ret = wasm.memory;
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper2387(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 770, __wbg_adapter_52);
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper2388(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 770, __wbg_adapter_52);
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper2389(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 770, __wbg_adapter_52);
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper3963(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 1460, __wbg_adapter_59);
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper4761(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 1719, __wbg_adapter_62);
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper5407(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 2001, __wbg_adapter_65);
  return addHeapObject(ret);
}

// node_modules/@dojoengine/torii-wasm/pkg/web/dojo_c.js
__wbg_set_wasm(wasm2);

// node_modules/@dojoengine/torii-client/dist/index.js
var u = { eq: "Eq", neq: "Neq", gt: "Gt", gte: "Gte", lt: "Lt", lte: "Lte" };
function o(e) {
  if (typeof e == "number") return { Int: e };
  if (typeof e == "string") return { String: e };
  if (typeof e == "boolean") return { VBool: e };
  if (Array.isArray(e) && e.every((r) => typeof r == "number")) return { Bytes: e };
  throw new Error("Unsupported value type");
}
function l(e) {
  if (typeof e == "object") {
    let t = Object.keys(e)[0], n = u[t], p = e[t], i = o(p);
    return { operator: n, value: { primitive_type: { Felt252: "" }, value_type: i } };
  }
  let r = o(e);
  return { operator: "Eq", value: { primitive_type: { Felt252: "" }, value_type: r } };
}
export {
  Account,
  IntoUnderlyingByteSource,
  IntoUnderlyingSink,
  IntoUnderlyingSource,
  PipeOptions,
  Provider,
  QueuingStrategy,
  ReadableStreamGetReaderOptions,
  Subscription,
  ToriiClient,
  __wbg_String_b9412f8799faab3e,
  __wbg_abort_2aa7521d5690750e,
  __wbg_account_new,
  __wbg_append_7bfcb4937d1d5e29,
  __wbg_body_9545a94f397829db,
  __wbg_buffer_12d079cc21e14bdb,
  __wbg_buffer_4e79326814bdd393,
  __wbg_bufferedAmount_d96d201d2e665ac8,
  __wbg_byobRequest_08c18cee35def1f4,
  __wbg_byteLength_5299848ed3264181,
  __wbg_byteOffset_b69b0a07afccce19,
  __wbg_call_27c0f87801dedf93,
  __wbg_call_8e7cb608789c2528,
  __wbg_call_b3ca7c6051f9bec1,
  __wbg_cancel_7f202496da02cd45,
  __wbg_catch_0260e338d10f79ae,
  __wbg_channel_034b1aa3ed21a9d2,
  __wbg_clearTimeout_76877dbc010e786d,
  __wbg_close_afa09a1e1e0a4628,
  __wbg_close_da7e6fb9d9851e5a,
  __wbg_close_e9110ca16e2567db,
  __wbg_createDataChannel_2cb2147b68f44846,
  __wbg_createDataChannel_df256842e04b7684,
  __wbg_createOffer_663eb8b8f3c6f8b9,
  __wbg_crypto_1d1f22824a6a080c,
  __wbg_data_3ce7c145ca4fbcdc,
  __wbg_document_5100775d18896c16,
  __wbg_done_298b57d23c0fc80c,
  __wbg_done_76252d32deca186b,
  __wbg_enqueue_d71a1a518e21f5c3,
  __wbg_entries_95cc2c823b285a09,
  __wbg_fetch_24472c79bb4342d1,
  __wbg_fetch_921fad6ef9e883dd,
  __wbg_fetch_bc400efeda8ac0c8,
  __wbg_fetch_bc7c8e27076a5c84,
  __wbg_generateCertificate_31ec6e1adc163ef8,
  __wbg_getRandomValues_3aa56aa6edec874c,
  __wbg_getReader_8ecba87d8003e950,
  __wbg_get_bd8e338fbd5f5cc8,
  __wbg_get_e3c254076557e348,
  __wbg_getwithrefkey_edc2c8960f0f1191,
  __wbg_globalThis_d1e6af4856ba331b,
  __wbg_global_207b558942527489,
  __wbg_has_0af94d20077affa2,
  __wbg_headers_9620bfada380764a,
  __wbg_hostname_3d9f22c60dc5bec6,
  __wbg_instanceof_ArrayBuffer_836825be07d4c9d2,
  __wbg_instanceof_Error_e20bb56fd5591a93,
  __wbg_instanceof_Response_849eb93e75734b6e,
  __wbg_instanceof_Uint8Array_2b3bbecd033d19f6,
  __wbg_instanceof_Window_f401953a2cf86220,
  __wbg_isArray_2ab64d95e09ea0ae,
  __wbg_isSafeInteger_f7b04ef02296c4d2,
  __wbg_iterator_2cee6dadfd956dfa,
  __wbg_length_c20a40f15020d68a,
  __wbg_length_cd7af8117672b8b8,
  __wbg_localDescription_fdbb277fe69d4acc,
  __wbg_location_1325817a58c77ceb,
  __wbg_msCrypto_eb05e62b530a1508,
  __wbg_navigator_6c8fa55c5cc8796e,
  __wbg_new_0d76b0581eca6298,
  __wbg_new_16b304a2cfa7ff4a,
  __wbg_new_28c511d9baebfa89,
  __wbg_new_63b92bc8671ed464,
  __wbg_new_72fb9a18b5ae2624,
  __wbg_new_81740750da40724f,
  __wbg_new_ab6fd82b10560829,
  __wbg_new_d9bc3a0147634640,
  __wbg_newnoargs_e258087cd0daa0ea,
  __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb,
  __wbg_newwithconfiguration_b15024f88c684163,
  __wbg_newwithlength_e9b4878cebadb3d3,
  __wbg_newwithstrandinit_3fd6fba4083ff2d0,
  __wbg_next_196c84450b364254,
  __wbg_next_40fc327bfc8770e6,
  __wbg_node_104a2ff8d6ea03a2,
  __wbg_now_3014639a94423537,
  __wbg_now_4e659b3d15f470d9,
  __wbg_process_4a72847cc503995b,
  __wbg_push_a5b05aedc7234f9f,
  __wbg_queueMicrotask_3cbae2ec6b6cd3d6,
  __wbg_queueMicrotask_481971b0d87f3dd4,
  __wbg_randomFillSync_5c9c955aa56b6049,
  __wbg_read_88c96573fc8b3b01,
  __wbg_readyState_4cec7804e10e9e8c,
  __wbg_releaseLock_9ae075576f54bf0b,
  __wbg_require_cca90b1a94a0255b,
  __wbg_resolve_b0083a7967828ec8,
  __wbg_respond_8fadc5f5c9d95422,
  __wbg_sdp_ec4467d15d4acf46,
  __wbg_self_ce0dbfc45cf2f5be,
  __wbg_send_a10ff3ed6e9aee30,
  __wbg_setLocalDescription_41e208bc9dc2a799,
  __wbg_setRemoteDescription_38ba80261ed6604d,
  __wbg_setTimeout_75cb9b6991a4031d,
  __wbg_set_1f9b04f170055d33,
  __wbg_set_8417257aaedc936b,
  __wbg_set_a47bac70306a19a7,
  __wbg_set_d4638f722068f043,
  __wbg_set_f975102236d3c502,
  __wbg_set_wasm,
  __wbg_setbinaryType_0b2b32db03dea0c0,
  __wbg_setbufferedAmountLowThreshold_c720cc0a1e84254f,
  __wbg_setonbufferedamountlow_b8982bab0245abc8,
  __wbg_setonclose_756793f4dc0ff009,
  __wbg_setondatachannel_613916740487b8be,
  __wbg_setonmessage_156079b6ed74472e,
  __wbg_setonopen_a8d36a7a7e2a0661,
  __wbg_signal_a61f78a3478fd9bc,
  __wbg_status_61a01141acd3cf74,
  __wbg_stringify_8887fe74e1c50d81,
  __wbg_subarray_a1f73cd4b5b42fe1,
  __wbg_subscription_new,
  __wbg_text_450a059667fd91fd,
  __wbg_then_0c86a60e8fcfe9f6,
  __wbg_then_a73caa9a87991566,
  __wbg_toString_c816a20ab859d0c1,
  __wbg_toString_ffe4c9ea3b3532e9,
  __wbg_toriiclient_new,
  __wbg_url_5f6dc4009ac5f99d,
  __wbg_userAgent_e94c7cbcdac01fea,
  __wbg_value_d93c65011f51a456,
  __wbg_value_ff3741eb46856618,
  __wbg_versions_f686565e586dd935,
  __wbg_view_231340b0dd8a2484,
  __wbg_window_c6fb939a7f436783,
  __wbindgen_as_number,
  __wbindgen_bigint_from_i64,
  __wbindgen_bigint_from_u64,
  __wbindgen_bigint_get_as_i64,
  __wbindgen_boolean_get,
  __wbindgen_cb_drop,
  __wbindgen_closure_wrapper2387,
  __wbindgen_closure_wrapper2388,
  __wbindgen_closure_wrapper2389,
  __wbindgen_closure_wrapper3963,
  __wbindgen_closure_wrapper4761,
  __wbindgen_closure_wrapper5407,
  __wbindgen_debug_string,
  __wbindgen_error_new,
  __wbindgen_in,
  __wbindgen_is_bigint,
  __wbindgen_is_function,
  __wbindgen_is_object,
  __wbindgen_is_string,
  __wbindgen_is_undefined,
  __wbindgen_jsval_eq,
  __wbindgen_jsval_loose_eq,
  __wbindgen_memory,
  __wbindgen_number_get,
  __wbindgen_number_new,
  __wbindgen_object_clone_ref,
  __wbindgen_object_drop_ref,
  __wbindgen_rethrow,
  __wbindgen_string_get,
  __wbindgen_string_new,
  __wbindgen_throw,
  byteArrayDeserialize,
  byteArraySerialize,
  cairoShortStringToFelt,
  createClient,
  createProvider,
  getSelectorFromName,
  getSelectorFromTag,
  hashGetContractAddress,
  parseCairoShortString,
  poseidonHash,
  signingKeyNew,
  signingKeySign,
  starknetKeccak,
  typedDataEncode,
  l as valueToToriiValueAndOperator,
  verifyingKeyNew,
  verifyingKeyVerify
};
//# sourceMappingURL=@dojoengine_torii-client.js.map
