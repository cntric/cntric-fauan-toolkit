import { FaunaTestDb, FaunaTestDbI, teardown } from "fauna-test-setup";
import { CallIsaacToss, CreateIsaacToss, init, IsaacMixL8, IsaacMixL4, IsaacMixL1, IsaacMixL2, IsaacMixL3, IsaacToss, IsaacMixL5, IsaacMixL6, IsaacMix } from "./isaac";
import {to} from "await-to-js";

export const IsaacSuiteA = ()=>{


    describe("Isaac", ()=>{

        let db : FaunaTestDbI;

        beforeAll(async()=>{
            db = await FaunaTestDb();
            const [err, result] = await to(db.client.query(CreateIsaacToss()));
        })

        test("Tosses", async ()=>{

           /* const [err, result] = await to(db.client.query<number>(
                IsaacToss()
            ));

            console.log(err);

           expect(result).toStrictEqual([
            403952305410958,
            252003931938348,
            464359557646880,
            71011843473400,
            91540703788191,
            129585883702644,
            212353261838324,
            257756642457537
          ])*/
            

        });

    })


}; IsaacSuiteA();