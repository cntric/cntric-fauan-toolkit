"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Isaac = exports.CallIsaacToss = exports.RslShuffle = exports.CreateIsaacToss = exports.IsaacTossFunctionName = exports.IsaacToss = exports.IsaacMix = exports.IsaacMixL8 = exports.IsaacMixL7 = exports.IsaacMixL6 = exports.IsaacMixL5 = exports.IsaacMixL4 = exports.IsaacMixL3 = exports.IsaacMixL2 = exports.IsaacMixL1 = exports.init = void 0;
const bit_1 = require("../bit");
const faunadb_1 = require("faunadb");
const meta_1 = require("../meta");
const SIZEL = 8;
const SIZE = 1 << SIZEL;
const HALFSIZE = SIZE >> 1;
const MASK = SIZE << 2;
exports.init = Array(8).fill(0x9e3779b9);
const [a, b, c, d, e, f, g, h] = exports.init;
const A = (arr) => faunadb_1.query.Select(0, arr);
const B = (arr) => faunadb_1.query.Select(1, arr);
const C = (arr) => faunadb_1.query.Select(2, arr);
const D = (arr) => faunadb_1.query.Select(3, arr);
const E = (arr) => faunadb_1.query.Select(4, arr);
const F = (arr) => faunadb_1.query.Select(5, arr);
const G = (arr) => faunadb_1.query.Select(6, arr);
const H = (arr) => faunadb_1.query.Select(7, arr);
/**
 * Line 1 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L116
 * @param arr
 * @returns
 */
const IsaacMixL1 = (arr) => {
    return [
        faunadb_1.query.BitXor(faunadb_1.query.Select(0, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(1, arr), 11)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(1, arr),
            faunadb_1.query.Select(2, arr)
        ]),
        faunadb_1.query.Select(2, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(3, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(0, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(1, arr), 11)), // a
        ]),
        faunadb_1.query.Select(4, arr),
        faunadb_1.query.Select(5, arr),
        faunadb_1.query.Select(6, arr),
        faunadb_1.query.Select(7, arr) // h
    ];
};
exports.IsaacMixL1 = IsaacMixL1;
/**
 * Line 2 of Isaac mix:  https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L117
 * @param arr
 * @returns
 */
const IsaacMixL2 = (arr) => {
    return [
        faunadb_1.query.Select(0, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(1, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(2, arr), 2)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(2, arr),
            faunadb_1.query.Select(3, arr)
        ]),
        faunadb_1.query.Select(3, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(4, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(1, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(2, arr), 2)) // b 
        ]),
        faunadb_1.query.Select(5, arr),
        faunadb_1.query.Select(6, arr),
        faunadb_1.query.Select(7, arr) // h
    ];
};
exports.IsaacMixL2 = IsaacMixL2;
/**
 * Line 3 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L118
 * @param arr
 * @returns
 */
const IsaacMixL3 = (arr) => {
    return [
        faunadb_1.query.Select(0, arr),
        faunadb_1.query.Select(1, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(2, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(3, arr), 8)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(3, arr),
            faunadb_1.query.Select(4, arr)
        ]),
        faunadb_1.query.Select(4, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(5, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(1, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(2, arr), 8)) // c
        ]),
        faunadb_1.query.Select(6, arr),
        faunadb_1.query.Select(7, arr) // h
    ];
};
exports.IsaacMixL3 = IsaacMixL3;
/**
 * Line 4 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L119
 * @param arr
 * @returns
 */
const IsaacMixL4 = (arr) => {
    return [
        faunadb_1.query.Select(0, arr),
        faunadb_1.query.Select(1, arr),
        faunadb_1.query.Select(2, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(3, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(4, arr), 16)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(4, arr),
            faunadb_1.query.Select(5, arr)
        ]),
        faunadb_1.query.Select(5, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(6, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(3, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(2, arr), 16)) // c
        ]),
        faunadb_1.query.Select(7, arr) // h
    ];
};
exports.IsaacMixL4 = IsaacMixL4;
/**
 * Line 5 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L120
 * @param arr
 * @returns
 */
const IsaacMixL5 = (arr) => {
    return [
        faunadb_1.query.Select(0, arr),
        faunadb_1.query.Select(1, arr),
        faunadb_1.query.Select(2, arr),
        faunadb_1.query.Select(3, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(4, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(5, arr), 10)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(5, arr),
            faunadb_1.query.Select(6, arr)
        ]),
        faunadb_1.query.Select(6, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(7, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(4, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(5, arr), 10)), // e
        ]), // h
    ];
};
exports.IsaacMixL5 = IsaacMixL5;
/**
 * Line 6 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L121
 * @param arr
 */
const IsaacMixL6 = (arr) => {
    return [
        faunadb_1.query.Sum([
            faunadb_1.query.Select(0, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(5, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(6, arr), 4)), // e
        ]),
        faunadb_1.query.Select(1, arr),
        faunadb_1.query.Select(2, arr),
        faunadb_1.query.Select(3, arr),
        faunadb_1.query.Select(4, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(5, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(6, arr), 4)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(5, arr),
            faunadb_1.query.Select(6, arr)
        ]),
        faunadb_1.query.Select(7, arr), // g
    ];
};
exports.IsaacMixL6 = IsaacMixL6;
/**
 * Line 7 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L122
 * @param arr
 */
const IsaacMixL7 = (arr) => {
    return [
        faunadb_1.query.Select(0, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(1, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(6, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(6, arr), 8)), // e
        ]),
        faunadb_1.query.Select(2, arr),
        faunadb_1.query.Select(3, arr),
        faunadb_1.query.Select(4, arr),
        faunadb_1.query.Select(5, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(6, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(6, arr), 8)),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(7, arr),
            faunadb_1.query.Select(0, arr)
        ]), // f
    ];
};
exports.IsaacMixL7 = IsaacMixL7;
/**
 * Line 8 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L122
 * @param arr
 */
const IsaacMixL8 = (arr) => {
    return [
        faunadb_1.query.Sum([
            faunadb_1.query.Select(0, arr),
            faunadb_1.query.Select(1, arr)
        ]),
        faunadb_1.query.Select(1, arr),
        faunadb_1.query.Sum([
            faunadb_1.query.Select(1, arr),
            faunadb_1.query.BitXor(faunadb_1.query.Select(6, arr), (0, bit_1.Bit32ShiftLeft)(faunadb_1.query.Select(6, arr), 8)), // e
        ]),
        faunadb_1.query.Select(3, arr),
        faunadb_1.query.Select(4, arr),
        faunadb_1.query.Select(5, arr),
        faunadb_1.query.Select(6, arr),
        faunadb_1.query.BitXor(faunadb_1.query.Select(7, arr), (0, bit_1.Bit32ShiftRight)(faunadb_1.query.Select(7, arr), 9)), // e
    ];
};
exports.IsaacMixL8 = IsaacMixL8;
/**
 * Performs the Isaac bit mix.
 * @param arr
 * @returns
 */
const IsaacMix = (arr) => {
    return faunadb_1.query.Let({
        "L1": (0, exports.IsaacMixL1)(arr),
        "L2": (0, exports.IsaacMixL2)(faunadb_1.query.Var("L1")),
        "L3": (0, exports.IsaacMixL3)(faunadb_1.query.Var("L2")),
        "L4": (0, exports.IsaacMixL4)(faunadb_1.query.Var("L3")),
        "L5": (0, exports.IsaacMixL5)(faunadb_1.query.Var("L4")),
        "L6": (0, exports.IsaacMixL6)(faunadb_1.query.Var("L5")),
        "L7": (0, exports.IsaacMixL7)(faunadb_1.query.Var("L6")),
        "L8": (0, exports.IsaacMixL8)(faunadb_1.query.Var("L7")),
    }, faunadb_1.query.Var("L8"));
};
exports.IsaacMix = IsaacMix;
/**
 * Performs the Isaac bit mix a set number of times.
 * @param i
 * @returns
 */
const IsaacToss = (i = 4) => {
    return faunadb_1.query.Reduce(faunadb_1.query.Lambda(["agg", "el"], (0, exports.IsaacMix)(faunadb_1.query.Var("agg"))), exports.init, faunadb_1.query.ToArray(faunadb_1.query.Repeat("z", i)));
};
exports.IsaacToss = IsaacToss;
exports.IsaacTossFunctionName = (0, meta_1.getName)(exports.IsaacToss);
/**
 * Creates the IsaacToss function.
 * @returns
 */
const CreateIsaacToss = () => {
    return faunadb_1.query.If(faunadb_1.query.Exists(faunadb_1.query.Function(exports.IsaacTossFunctionName)), faunadb_1.query.Update(faunadb_1.query.Function(exports.IsaacTossFunctionName), {
        body: faunadb_1.query.Query(faunadb_1.query.Lambda('i', (0, exports.IsaacToss)(faunadb_1.query.Var('i'))))
    }), faunadb_1.query.CreateFunction({
        name: exports.IsaacTossFunctionName,
        body: faunadb_1.query.Query(faunadb_1.query.Lambda('i', (0, exports.IsaacToss)(faunadb_1.query.Var('i'))))
    }));
};
exports.CreateIsaacToss = CreateIsaacToss;
const RslShuffle = () => {
};
exports.RslShuffle = RslShuffle;
const CallIsaacToss = (i = 4) => {
    return faunadb_1.query.Call(faunadb_1.query.Function(exports.IsaacTossFunctionName), i);
};
exports.CallIsaacToss = CallIsaacToss;
const Isaac = () => {
    return faunadb_1.query.Let({
        "toss": (0, exports.CallIsaacToss)()
    }, faunadb_1.query.Var("toss"));
};
exports.Isaac = Isaac;
