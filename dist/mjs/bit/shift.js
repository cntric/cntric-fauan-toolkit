import { query as q } from "faunadb";
export const BIT_32_MASK = 0xffffffff;
/**
 * Performs 32 bit left shift on a single number.
 * @param a
 * @param b
 * @returns
 */
export const Bit32ShiftLeft = (a, b) => {
    return q.BitAnd(q.Multiply(a, q.Pow(2, b)));
};
/**
 * Performs right bit shift on 32 bits.
 * @param a
 * @param b
 * @returns
 */
export const Bit32ShiftRight = (a, b) => {
    return q.Floor(Bit32ShiftLeft(a, -b));
};
