import { ieee754 } from "../ieee754.js";
import { test } from "./tape-mini.js";

const EPSILON = 0.00001

test('read & write float', function (t) {
  const val = 42.42
  const buf = new Uint8Array(4);
  
  ieee754.write(buf, val, 0, true, 23, 4);
  const num = ieee754.read(buf, 0, true, 23, 4)

  t.ok(Math.abs(num - val) < EPSILON)
  t.end()
})

test('read & write double', function (t) {
  const value = 12345.123456789
  const buf = new Uint8Array(8);

  ieee754.write(buf, value, 0, true, 52, 8)
  const num = ieee754.read(buf, 0, true, 52, 8)

  t.ok(Math.abs(num - value) < EPSILON)
  t.end()
})
