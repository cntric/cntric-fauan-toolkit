import { FaunaTestDb } from "fauna-test-setup";
import { GetCollection } from "./collection";
import { generate } from "shortid";
import { query as q } from "faunadb";
export const CollectionSuiteA = () => {
    describe("Collection", () => {
        let db;
        beforeAll(async () => {
            db = await FaunaTestDb();
        });
        test("Gets a the collection name for a given document.", async () => {
            const collectionName = generate();
            await db.client.query(q.CreateCollection({
                name: collectionName
            }));
            const doc = await db.client.query(q.Create(q.Collection(collectionName)));
            const collection = await db.client.query(q.Get(GetCollection(q.Get(doc.ref))));
            expect(collection.name).toBe(collectionName);
            await db.client.query(q.Delete(q.Collection(collectionName)));
        });
    });
};
CollectionSuiteA();
