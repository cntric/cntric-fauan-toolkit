import { FaunaTestDb, FaunaTestDbI, teardown } from "fauna-test-setup";
import { CallIsaacToss, CreateIsaacToss, init, IsaacMixL8, IsaacMixL4, IsaacMixL1, IsaacMixL2, IsaacMixL3, IsaacToss, IsaacMixL5, IsaacMixL6, IsaacMix } from "./isaac";
import {to} from "await-to-js";
import { QSeed } from "./seed";

export const IsaacSuiteA = ()=>{


    describe("Isaac", ()=>{

        let db : FaunaTestDbI;

        beforeAll(async()=>{
            db = await FaunaTestDb();
            const [err, result] = await to(db.client.query(CreateIsaacToss()));
        })

        test("Tosses", async ()=>{

            for(let i =0; i < 100; ++i){
                const [err, result] = await to(db.client.query<number>(
                    QSeed()
                ));
            }
            

        });

    })


}; IsaacSuiteA();