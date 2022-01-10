import { Bit32ShiftLeft, Bit32ShiftRight } from "../bit";
import { query as q } from "faunadb";
import { getName } from "../meta";
const SIZEL = 8;
const SIZE = 1 << SIZEL;
const HALFSIZE = SIZE >> 1;
const MASK = SIZE << 2;
export const init = Array(8).fill(0x9e3779b9);
const [a, b, c, d, e, f, g, h] = init;
const A = (arr) => q.Select(0, arr);
const B = (arr) => q.Select(1, arr);
const C = (arr) => q.Select(2, arr);
const D = (arr) => q.Select(3, arr);
const E = (arr) => q.Select(4, arr);
const F = (arr) => q.Select(5, arr);
const G = (arr) => q.Select(6, arr);
const H = (arr) => q.Select(7, arr);
/**
 * Line 1 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L116
 * @param arr
 * @returns
 */
export const IsaacMixL1 = (arr) => {
    return [
        q.BitXor(q.Select(0, arr), Bit32ShiftLeft(q.Select(1, arr), 11)),
        q.Sum([
            q.Select(1, arr),
            q.Select(2, arr)
        ]),
        q.Select(2, arr),
        q.Sum([
            q.Select(3, arr),
            q.BitXor(q.Select(0, arr), Bit32ShiftLeft(q.Select(1, arr), 11)), // a
        ]),
        q.Select(4, arr),
        q.Select(5, arr),
        q.Select(6, arr),
        q.Select(7, arr) // h
    ];
};
/**
 * Line 2 of Isaac mix:  https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L117
 * @param arr
 * @returns
 */
export const IsaacMixL2 = (arr) => {
    return [
        q.Select(0, arr),
        q.BitXor(q.Select(1, arr), Bit32ShiftRight(q.Select(2, arr), 2)),
        q.Sum([
            q.Select(2, arr),
            q.Select(3, arr)
        ]),
        q.Select(3, arr),
        q.Sum([
            q.Select(4, arr),
            q.BitXor(q.Select(1, arr), Bit32ShiftRight(q.Select(2, arr), 2)) // b 
        ]),
        q.Select(5, arr),
        q.Select(6, arr),
        q.Select(7, arr) // h
    ];
};
/**
 * Line 3 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L118
 * @param arr
 * @returns
 */
export const IsaacMixL3 = (arr) => {
    return [
        q.Select(0, arr),
        q.Select(1, arr),
        q.BitXor(q.Select(2, arr), Bit32ShiftLeft(q.Select(3, arr), 8)),
        q.Sum([
            q.Select(3, arr),
            q.Select(4, arr)
        ]),
        q.Select(4, arr),
        q.Sum([
            q.Select(5, arr),
            q.BitXor(q.Select(1, arr), Bit32ShiftLeft(q.Select(2, arr), 8)) // c
        ]),
        q.Select(6, arr),
        q.Select(7, arr) // h
    ];
};
/**
 * Line 4 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L119
 * @param arr
 * @returns
 */
export const IsaacMixL4 = (arr) => {
    return [
        q.Select(0, arr),
        q.Select(1, arr),
        q.Select(2, arr),
        q.BitXor(q.Select(3, arr), Bit32ShiftRight(q.Select(4, arr), 16)),
        q.Sum([
            q.Select(4, arr),
            q.Select(5, arr)
        ]),
        q.Select(5, arr),
        q.Sum([
            q.Select(6, arr),
            q.BitXor(q.Select(3, arr), Bit32ShiftRight(q.Select(2, arr), 16)) // c
        ]),
        q.Select(7, arr) // h
    ];
};
/**
 * Line 5 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L120
 * @param arr
 * @returns
 */
export const IsaacMixL5 = (arr) => {
    return [
        q.Select(0, arr),
        q.Select(1, arr),
        q.Select(2, arr),
        q.Select(3, arr),
        q.BitXor(q.Select(4, arr), Bit32ShiftLeft(q.Select(5, arr), 10)),
        q.Sum([
            q.Select(5, arr),
            q.Select(6, arr)
        ]),
        q.Select(6, arr),
        q.Sum([
            q.Select(7, arr),
            q.BitXor(q.Select(4, arr), Bit32ShiftLeft(q.Select(5, arr), 10)), // e
        ]), // h
    ];
};
/**
 * Line 6 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L121
 * @param arr
 */
export const IsaacMixL6 = (arr) => {
    return [
        q.Sum([
            q.Select(0, arr),
            q.BitXor(q.Select(5, arr), Bit32ShiftRight(q.Select(6, arr), 4)), // e
        ]),
        q.Select(1, arr),
        q.Select(2, arr),
        q.Select(3, arr),
        q.Select(4, arr),
        q.BitXor(q.Select(5, arr), Bit32ShiftRight(q.Select(6, arr), 4)),
        q.Sum([
            q.Select(5, arr),
            q.Select(6, arr)
        ]),
        q.Select(7, arr), // g
    ];
};
/**
 * Line 7 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L122
 * @param arr
 */
export const IsaacMixL7 = (arr) => {
    return [
        q.Select(0, arr),
        q.Sum([
            q.Select(1, arr),
            q.BitXor(q.Select(6, arr), Bit32ShiftLeft(q.Select(6, arr), 8)), // e
        ]),
        q.Select(2, arr),
        q.Select(3, arr),
        q.Select(4, arr),
        q.Select(5, arr),
        q.BitXor(q.Select(6, arr), Bit32ShiftLeft(q.Select(6, arr), 8)),
        q.Sum([
            q.Select(7, arr),
            q.Select(0, arr)
        ]), // f
    ];
};
/**
 * Line 8 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L122
 * @param arr
 */
export const IsaacMixL8 = (arr) => {
    return [
        q.Sum([
            q.Select(0, arr),
            q.Select(1, arr)
        ]),
        q.Select(1, arr),
        q.Sum([
            q.Select(1, arr),
            q.BitXor(q.Select(6, arr), Bit32ShiftLeft(q.Select(6, arr), 8)), // e
        ]),
        q.Select(3, arr),
        q.Select(4, arr),
        q.Select(5, arr),
        q.Select(6, arr),
        q.BitXor(q.Select(7, arr), Bit32ShiftRight(q.Select(7, arr), 9)), // e
    ];
};
/**
 * Performs the Isaac bit mix.
 * @param arr
 * @returns
 */
export const IsaacMix = (arr) => {
    return q.Let({
        "L1": IsaacMixL1(arr),
        "L2": IsaacMixL2(q.Var("L1")),
        "L3": IsaacMixL3(q.Var("L2")),
        "L4": IsaacMixL4(q.Var("L3")),
        "L5": IsaacMixL5(q.Var("L4")),
        "L6": IsaacMixL6(q.Var("L5")),
        "L7": IsaacMixL7(q.Var("L6")),
        "L8": IsaacMixL8(q.Var("L7")),
    }, q.Var("L8"));
};
/**
 * Performs the Isaac bit mix a set number of times.
 * @param i
 * @returns
 */
export const IsaacToss = (i = 4) => {
    return q.Reduce(q.Lambda(["agg", "el"], IsaacMix(q.Var("agg"))), init, q.ToArray(q.Repeat("z", i)));
};
export const IsaacTossFunctionName = getName(IsaacToss);
/**
 * Creates the IsaacToss function.
 * @returns
 */
export const CreateIsaacToss = () => {
    return q.If(q.Exists(q.Function(IsaacTossFunctionName)), q.Update(q.Function(IsaacTossFunctionName), {
        body: q.Query(q.Lambda('i', IsaacToss(q.Var('i'))))
    }), q.CreateFunction({
        name: IsaacTossFunctionName,
        body: q.Query(q.Lambda('i', IsaacToss(q.Var('i'))))
    }));
};
export const RslShuffle = () => {
};
export const CallIsaacToss = (i = 4) => {
    return q.Call(q.Function(IsaacTossFunctionName), i);
};
export const Isaac = () => {
    return q.Let({
        "toss": CallIsaacToss()
    }, q.Var("toss"));
};
