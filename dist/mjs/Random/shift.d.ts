export declare const BIT_32_MASK = 255;
export declare const FIRST_OCTET_MASK = 255;
export declare const SECOND_OCTET_MASK = 65280;
export declare const THIRD_OCTET_MASK = 16711680;
export declare const FOURTH_OCTET_MASK = 4278190080;
/**
 * Performs a left bit shift on a given number.
 * @param a
 * @param b
 * @returns
 */
export declare const Bit32ShiftLeft: (a: number, b: number) => import("faunadb").Expr;
/**
 * Performs right bit shift on 32 bits.
 * @param a
 * @param b
 * @returns
 */
export declare const Bit32ShiftRight: (a: number, b: number) => import("faunadb").Expr;
