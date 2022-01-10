import { FaunaTestDb, FaunaTestDbI, teardown } from "fauna-test-setup";
import {
    GetCollection
} from "./collection";
import {to} from "await-to-js";
import {generate} from "shortid";
import {query as q, values} from "faunadb";

export const CollectionSuiteA = ()=>{


    describe("Collection", ()=>{

        let db : FaunaTestDbI;

        beforeAll(async()=>{
            db = await FaunaTestDb();
        })

        test("Gets a the collection name for a given document.", async ()=>{

            const collectionName = generate();
            await db.client.query(
                q.CreateCollection({
                    name : collectionName
                })
            );

            const doc = await db.client.query<values.Document>(
                q.Create(q.Collection(collectionName))
            );
            
            const collection = await db.client.query<values.Document & {
                name : string
            }>(
                q.Get(
                    GetCollection(
                        q.Get(doc.ref) as values.Document
                    )
                )
            );

            expect(collection.name).toBe(collectionName);

            await db.client.query(
                q.Delete(
                    q.Collection(collectionName)
                )
            );
            

        });

    })


}; CollectionSuiteA();