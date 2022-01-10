"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionSuiteA = void 0;
const fauna_test_setup_1 = require("fauna-test-setup");
const collection_1 = require("./collection");
const shortid_1 = require("shortid");
const faunadb_1 = require("faunadb");
const CollectionSuiteA = () => {
    describe("Collection", () => {
        let db;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            db = yield (0, fauna_test_setup_1.FaunaTestDb)();
        }));
        test("Gets a the collection name for a given document.", () => __awaiter(void 0, void 0, void 0, function* () {
            const collectionName = (0, shortid_1.generate)();
            yield db.client.query(faunadb_1.query.CreateCollection({
                name: collectionName
            }));
            const doc = yield db.client.query(faunadb_1.query.Create(faunadb_1.query.Collection(collectionName)));
            const collection = yield db.client.query(faunadb_1.query.Get((0, collection_1.GetCollection)(faunadb_1.query.Get(doc.ref))));
            expect(collection.name).toBe(collectionName);
            yield db.client.query(faunadb_1.query.Delete(faunadb_1.query.Collection(collectionName)));
        }));
    });
};
exports.CollectionSuiteA = CollectionSuiteA;
(0, exports.CollectionSuiteA)();
