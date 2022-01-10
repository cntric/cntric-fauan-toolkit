import {query as q} from "faunadb";


export const QSeed = ()=>{
    return q.BitAnd(
        q.Multiply(
            q.Add(
                q.Modulo(
                    q.ToInteger(q.NewId()),
                    13
                ),
                1
            ),
            q.Add(
                q.Modulo(
                    q.ToInteger(q.NewId()),
                    331777
                ),
                1
            )
        ),
        0xffffffff
    )
}