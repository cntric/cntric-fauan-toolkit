import { Bit32ShiftLeft, Bit32ShiftRight } from "../bit";
import {query as q, values} from "faunadb";
import jsum from "jsum";
import { getName } from "../meta";

const SIZEL = 8;
const SIZE = 1 << SIZEL;
const HALFSIZE = SIZE >> 1;
const MASK = SIZE << 2;

export const init = Array(8).fill(0x9e3779b9);
const [a, b, c, d, e, f, g, h] = init;


const A = (arr : number[]) : number=>q.Select(0, arr) as number;
const B = (arr : number[]) : number=>q.Select(1, arr) as number;
const C = (arr : number[]) : number=>q.Select(2, arr) as number;
const D = (arr : number[]) : number=>q.Select(3, arr) as number;
const E = (arr : number[]) : number=>q.Select(4, arr) as number;
const F = (arr : number[]) : number=>q.Select(5, arr) as number;
const G = (arr : number[]) : number=>q.Select(6, arr) as number;
const H = (arr : number[]) : number=>q.Select(7, arr) as number;

/**
 * Line 1 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L116
 * @param arr 
 * @returns 
 */
export const IsaacMixL1 = (arr : number[]) : number[]=>{
    return [
        q.BitXor(
            q.Select(0, arr),
            Bit32ShiftLeft(
                q.Select(1, arr) as number,
                 11
            )
        ), // a
        q.Sum([
            q.Select(1, arr), 
            q.Select(2, arr)
        ]), // b 
        q.Select(2, arr), // c
        q.Sum([
            q.Select(3, arr),
            q.BitXor(
                q.Select(0, arr),
                Bit32ShiftLeft(
                    q.Select(1, arr) as number,
                     11
                )
            ), // a
        ]), // d
        q.Select(4, arr), // e
        q.Select(5, arr), // f
        q.Select(6, arr), // g 
        q.Select(7, arr) // h
    ] as number[]
}


/**
 * Line 2 of Isaac mix:  https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L117
 * @param arr 
 * @returns 
 */
export const IsaacMixL2 = (arr : number[]) : number[]=>{
    return [
        q.Select(0, arr), // a
        q.BitXor(
            q.Select(1, arr),
            Bit32ShiftRight(
                q.Select(2, arr) as number,
                2
            )
        ), // b 
        q.Sum([
            q.Select(2, arr), 
            q.Select(3, arr)
        ]), // c
        q.Select(3, arr),
        q.Sum([
            q.Select(4, arr),
            q.BitXor(
                q.Select(1, arr),
                Bit32ShiftRight(
                    q.Select(2, arr) as number,
                    2
                )
            ) // b 
        ]), // e
        q.Select(5, arr), // f
        q.Select(6, arr), // g 
        q.Select(7, arr) // h
    ] as number[]
}

/**
 * Line 3 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L118
 * @param arr 
 * @returns 
 */
export const IsaacMixL3 =  (arr : number[]) : number[]=>{
    return [
        q.Select(0, arr), // a
        q.Select(1, arr),
        q.BitXor(
            q.Select(2, arr),
            Bit32ShiftLeft(
                q.Select(3, arr) as number,
                8
            )
        ), // c
        q.Sum([
            q.Select(3, arr), 
            q.Select(4, arr)
        ]), // d
        q.Select(4, arr), // e
        q.Sum([
            q.Select(5, arr),
            q.BitXor(
                q.Select(1, arr),
                Bit32ShiftLeft(
                    q.Select(2, arr) as number,
                    8
                )
            ) // c
        ]), // f
        q.Select(6, arr), // g 
        q.Select(7, arr) // h
    ] as number[]
}

/**
 * Line 4 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L119
 * @param arr 
 * @returns 
 */
export const IsaacMixL4 = (arr : number[]) : number[]=>{
    return [
        q.Select(0, arr), // a
        q.Select(1, arr),
        q.Select(2, arr),
        q.BitXor(
            q.Select(3, arr),
            Bit32ShiftRight(
                q.Select(4, arr) as number,
                16
            )
        ), // c
        q.Sum([
            q.Select(4, arr), 
            q.Select(5, arr)
        ]), // d
        q.Select(5, arr), // e
        q.Sum([
            q.Select(6, arr),
            q.BitXor(
                q.Select(3, arr),
                Bit32ShiftRight(
                    q.Select(2, arr) as number,
                    16
                )
            ) // c
        ]), // f
        q.Select(7, arr) // h
    ] as number[]
}

/**
 * Line 5 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L120
 * @param arr 
 * @returns 
 */
export const IsaacMixL5 = (arr : number[]) : number[]=>{
    return [
        q.Select(0, arr), // a
        q.Select(1, arr),
        q.Select(2, arr),
        q.Select(3, arr),
        q.BitXor(
            q.Select(4, arr),
            Bit32ShiftLeft(
                q.Select(5, arr) as number,
                10
            )
        ), // e
        q.Sum([
            q.Select(5, arr), 
            q.Select(6, arr)
        ]), // f
        q.Select(6, arr), // g
        q.Sum([
            q.Select(7, arr),
            q.BitXor(
                q.Select(4, arr),
                Bit32ShiftLeft(
                    q.Select(5, arr) as number,
                    10
                )
            ), // e
        ]), // h
    ] as number[]
}

/**
 * Line 6 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L121
 * @param arr 
 */
export const IsaacMixL6 = (arr : number[]) : number[]=>{
    return [
        q.Sum([
            q.Select(0, arr),
            q.BitXor(
                q.Select(5, arr),
                Bit32ShiftRight(
                    q.Select(6, arr) as number,
                    4
                )
            ), // e
        ]), // h
        q.Select(1, arr),
        q.Select(2, arr),
        q.Select(3, arr),
        q.Select(4, arr),
        q.BitXor(
            q.Select(5, arr),
            Bit32ShiftRight(
                q.Select(6, arr) as number,
                4
            )
        ), // e
        q.Sum([
            q.Select(5, arr), 
            q.Select(6, arr)
        ]), // f
        q.Select(7, arr), // g
    ] as number[]
}

/**
 * Line 7 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L122
 * @param arr 
 */
export const IsaacMixL7 = (arr : number[]) : number[]=>{
    return [
        q.Select(0, arr),
        q.Sum([
            q.Select(1, arr),
            q.BitXor(
                q.Select(6, arr),
                Bit32ShiftLeft(
                    q.Select(6, arr) as number,
                    8
                )
            ), // e
        ]), // h
        q.Select(2, arr),
        q.Select(3, arr),
        q.Select(4, arr),
        q.Select(5, arr),
        q.BitXor(
            q.Select(6, arr),
            Bit32ShiftLeft(
                q.Select(6, arr) as number,
                8
            )
        ), // e
        q.Sum([
            q.Select(7, arr), 
            q.Select(0, arr)
        ]), // f
    ] as number[]
}


/**
 * Line 8 of Isaac mix: https://github.com/AlphaDelta/ISAACJS/blob/60180f27ffec9b10adc56e07ce7df0f2002365eb/ISAAC.js#L122
 * @param arr 
 */
 export const IsaacMixL8 = (arr : number[]) : number[]=>{
    return [
        q.Sum([
            q.Select(0, arr), 
            q.Select(1, arr)
        ]), // f
        q.Select(1, arr),
        q.Sum([
            q.Select(1, arr),
            q.BitXor(
                q.Select(6, arr),
                Bit32ShiftLeft(
                    q.Select(6, arr) as number,
                    8
                )
            ), // e
        ]), // h
        q.Select(3, arr),
        q.Select(4, arr),
        q.Select(5, arr),
        q.Select(6, arr),
        q.BitXor(
            q.Select(7, arr),
            Bit32ShiftRight(
                q.Select(7, arr) as number,
                9
            )
        ), // e
    ] as number[]
}

/**
 * Performs the Isaac bit mix.
 * @param arr 
 * @returns 
 */
export const IsaacMix = (arr : number[]) : number[]=>{
    return q.Let(
        {
            "L1" : IsaacMixL1(arr),
            "L2" : IsaacMixL2(q.Var("L1") as number[]),
            "L3" : IsaacMixL3(q.Var("L2") as number[]),
            "L4" : IsaacMixL4(q.Var("L3") as number[]),
            "L5" : IsaacMixL5(q.Var("L4") as number[]),
            "L6" : IsaacMixL6(q.Var("L5") as number[]),
            "L7" : IsaacMixL7(q.Var("L6") as number[]),
            "L8" : IsaacMixL8(q.Var("L7") as number[]), 
        },
        q.Var("L8")
    ) as number[]

}

/**
 * Performs the Isaac bit mix a set number of times.
 * @param i 
 * @returns 
 */
export const IsaacToss =  (i : number = 4) : number[]=>{
    return q.Reduce(
        q.Lambda(   
            ["agg", "el"],         
            IsaacMix(q.Var("agg") as number[]) as any
        ),
        init,
        q.ToArray(q.Repeat("z", i))
    )  as number[]
}

export const IsaacTossFunctionName = getName(IsaacToss);

/**
 * Creates the IsaacToss function.
 * @returns 
 */
export const CreateIsaacToss = ()=>{
    return q.If(
        q.Exists(q.Function(IsaacTossFunctionName)),
        q.Update(
            q.Function(IsaacTossFunctionName),
            {
                body : q.Query(
                    q.Lambda(
                        'i',
                        IsaacToss(q.Var('i') as number)
                    )
                )
            }
        ),
        q.CreateFunction({
            name : IsaacTossFunctionName,
            body : q.Query(
                q.Lambda(
                    'i',
                    IsaacToss(q.Var('i') as number)
                )
            )
        })
    )
}

export const RslShuffle = ()=>{
    
}

export const CallIsaacToss = (i : number = 4) : number[]=>{
    return q.Call(
        q.Function(IsaacTossFunctionName),
        i
    ) as number[]
}

export const Isaac = ()=>{
    return q.Let( 
        {
            "toss" : CallIsaacToss()
        },
        q.Var("toss")
    )
}