import { FaunaTestDb } from "fauna-test-setup";
import { CreateIsaacToss } from "./isaac";
import { to } from "await-to-js";
import { QSeed } from "./seed";
export const IsaacSuiteA = () => {
    describe("Isaac", () => {
        let db;
        beforeAll(async () => {
            db = await FaunaTestDb();
            const [err, result] = await to(db.client.query(CreateIsaacToss()));
        });
        test("Tosses", async () => {
            for (let i = 0; i < 100; ++i) {
                const [err, result] = await to(db.client.query(QSeed()));
            }
        });
    });
};
IsaacSuiteA();
