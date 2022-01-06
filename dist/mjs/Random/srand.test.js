import { FaunaTestDb } from "fauna-test-setup";
// import { SRand } from "./srand";
export const RaiseSuiteA = () => {
    describe("Flora exceptions basic functionality", () => {
        let db;
        beforeAll(async () => {
            db = await FaunaTestDb();
        });
        test("Reraises", async () => {
            const result = await db.client.query([
            //SRand(3),
            //SRand(4),
            // SRand(5)
            ]);
            console.log(result);
        });
    });
};
RaiseSuiteA();
