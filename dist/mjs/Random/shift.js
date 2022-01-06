import { query as q } from "faunadb";
export const BIT_32_MASK = 0xff;
export const FIRST_OCTET_MASK = 0xff;
export const SECOND_OCTET_MASK = 0xff00;
export const THIRD_OCTET_MASK = 0xff0000;
export const FOURTH_OCTET_MASK = 0xff000000;
/**
 * Performs a left bit shift on a given number.
 * @param a
 * @param b
 * @returns
 */
export const Bit32ShiftLeft = (a, b) => {
    return q.Sum([
        q.BitAnd(FIRST_OCTET_MASK, q.Multiply(a, q.Pow(2, b))),
        q.BitAnd(SECOND_OCTET_MASK, q.Multiply(a, q.Pow(2, b))),
        q.BitAnd(THIRD_OCTET_MASK, q.Multiply(a, q.Pow(2, b))),
        q.BitAnd(FOURTH_OCTET_MASK, q.Multiply(a, q.Pow(2, b)))
    ]);
};
/**
 * Performs right bit shift on 32 bits.
 * @param a
 * @param b
 * @returns
 */
export const Bit32ShiftRight = (a, b) => {
    return q.Sum([
        q.BitAnd(FIRST_OCTET_MASK, q.Multiply(a, q.Pow(2, -b))),
        q.BitAnd(SECOND_OCTET_MASK, q.Multiply(a, q.Pow(2, -b))),
        q.BitAnd(THIRD_OCTET_MASK, q.Multiply(a, q.Pow(2, -b))),
        q.BitAnd(FOURTH_OCTET_MASK, q.Multiply(a, q.Pow(2, -b)))
    ]);
};
