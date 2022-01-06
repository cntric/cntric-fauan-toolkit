import { FaunaTestDb, FaunaTestDbI, teardown } from "fauna-test-setup";
import { Bit32ShiftLeft, Bit32ShiftRight } from "./shift";
import {query as q} from "faunadb";
const MAX_SAFE_INTEGER = 9007199254740991;

export const RaiseSuiteA = ()=>{


    describe("Shift basic functionality", ()=>{

        let db : FaunaTestDbI;

        beforeAll(async()=>{
            db = await FaunaTestDb();
        });

        test("Left shifts", async ()=>{

            for(let i = 0; i < 100; ++i){
                const a = Math.floor(Math.random() * 16);
                const b = Math.floor(Math.random() * 16);
                const result = await db.client.query<number>(Bit32ShiftLeft(a, b));
                expect(result).toBe((a << b) >>> 0);
            }

        });

        test("Right shifts", async ()=>{

            for(let i = 0; i < 100; ++i){
                const a = Math.floor(Math.random() * 16);
                const b = Math.floor(Math.random() * 16);
                const result = await db.client.query<number>(Bit32ShiftRight(a, b));
                expect(result).toBe((a >> b) >>> 0);
            }

        });

    })


}; RaiseSuiteA();