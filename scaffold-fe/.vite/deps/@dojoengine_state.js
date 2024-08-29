import {
  E,
  P
} from "./chunk-SWITSI4Y.js";
import "./chunk-OCBYBPSH.js";

// node_modules/@dojoengine/state/dist/index.js
function u(s, i) {
  return Object.keys(s).reduce((e, n) => {
    e || (e = {});
    let a = s[n], t = i[n];
    if (t == null) return e[n] = t, e;
    if (t.type === "enum") return e[n] = t.value.option, e;
    switch (a) {
      case P.StringArray:
        t.type === "array" && t.value[0].type === "enum" ? e[n] = t.value.map((o) => o.value.option) : e[n] = t.value.map((o) => {
          try {
            return BigInt(o.value);
          } catch {
            return console.warn(`Failed to convert ${o.value} to BigInt. Using string value instead.`), o.value;
          }
        });
        break;
      case P.String:
        e[n] = t.value;
        break;
      case P.BigInt:
        try {
          e[n] = BigInt(t.value);
        } catch {
          console.warn(`Failed to convert ${t.value} to BigInt. Using string value instead.`), e[n] = BigInt(`0x${t.value}`);
        }
        break;
      case P.Boolean:
        e[n] = t.value;
        break;
      case P.Number:
        e[n] = Number(t.value);
        break;
      default:
        if (typeof a == "object" && t.type === "struct") if (t.value instanceof Map) {
          let o = Object.fromEntries(t.value);
          e[n] = u(a, o);
        } else e[n] = u(a, t.value);
        else Array.isArray(a) && t.type === "array" ? e[n] = t.value.map((o) => u(a[0], o)) : e[n] = t.value;
        break;
    }
    return e;
  }, {});
}
var j = async (s, i, e, n = 100) => (await y(s, i, n), await g(s, i, e));
var B = async (s, i, e, n, a = 100) => (await p(s, i, a, e), await h(s, i, n));
var y = async (s, i, e = 100) => {
  let n = 0, a = true;
  for (; a; ) {
    let t = await s.getAllEntities(e, n);
    l(t, i), Object.keys(t).length < e ? a = false : n += e;
  }
};
var p = async (s, i, e = 100, n) => {
  let a = 0, t = true;
  for (; t; ) {
    let o = await s.getEventMessages({ limit: e, offset: a, clause: n });
    console.log("entities", o), l(o, i), Object.keys(o).length < e ? t = false : a += e;
  }
};
var F = async (s, i, e, n = "FixedLen", a = 1e3) => {
  let t = 0, o = true;
  for (; o; ) {
    let d = e ? { Keys: { keys: "HashedKeys" in e ? e.HashedKeys : e.Keys.keys, pattern_matching: n, models: [...i.map((m) => {
      var _a;
      return (_a = m.metadata) == null ? void 0 : _a.name;
    })] } } : null, c = await s.getEntities({ limit: a, offset: t, clause: d || void 0 });
    l(c, i), Object.keys(c).length < a ? o = false : t += a;
  }
};
var g = async (s, i, e) => await s.onEntityUpdated(e, (n, a) => {
  l({ [n]: a }, i);
});
var h = async (s, i, e) => await s.onEventMessageUpdated(e, (n, a) => {
  console.log("fetchedEntities", a), l({ [n]: a }, i);
});
var l = async (s, i) => {
  var _a;
  for (let e in s) if (Object.hasOwn(s, e)) for (let n in s[e]) {
    if (!Object.hasOwn(s[e], n)) continue;
    let a = Object.values(i).find((t) => {
      var _a2, _b;
      return ((_a2 = t.metadata) == null ? void 0 : _a2.namespace) + "-" + ((_b = t.metadata) == null ? void 0 : _b.name) === n;
    });
    if (a) try {
      E(a, e, u(a.schema, s[e][n]));
    } catch (t) {
      console.warn(`Failed to set component ${(_a = a.metadata) == null ? void 0 : _a.name} on ${e}`, t);
    }
  }
};
export {
  y as getEntities,
  F as getEntitiesQuery,
  p as getEvents,
  j as getSyncEntities,
  B as getSyncEvents,
  l as setEntities,
  g as syncEntities,
  h as syncEvents
};
//# sourceMappingURL=@dojoengine_state.js.map
