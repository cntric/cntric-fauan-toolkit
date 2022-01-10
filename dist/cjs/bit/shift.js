"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bit32ShiftRight = exports.Bit32ShiftLeft = exports.BIT_32_MASK = void 0;
const faunadb_1 = require("faunadb");
exports.BIT_32_MASK = 0xffffffff;
/**
 * Performs 32 bit left shift on a single number.
 * @param a
 * @param b
 * @returns
 */
const Bit32ShiftLeft = (a, b) => {
    return faunadb_1.query.BitAnd(faunadb_1.query.Multiply(a, faunadb_1.query.Pow(2, b)));
};
exports.Bit32ShiftLeft = Bit32ShiftLeft;
/**
 * Performs right bit shift on 32 bits.
 * @param a
 * @param b
 * @returns
 */
const Bit32ShiftRight = (a, b) => {
    return faunadb_1.query.Floor((0, exports.Bit32ShiftLeft)(a, -b));
};
exports.Bit32ShiftRight = Bit32ShiftRight;
