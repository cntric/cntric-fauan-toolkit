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
exports.IsaacSuiteA = void 0;
const fauna_test_setup_1 = require("fauna-test-setup");
const isaac_1 = require("./isaac");
const await_to_js_1 = require("await-to-js");
const IsaacSuiteA = () => {
    describe("Isaac", () => {
        let db;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            db = yield (0, fauna_test_setup_1.FaunaTestDb)();
            const [err, result] = yield (0, await_to_js_1.to)(db.client.query((0, isaac_1.CreateIsaacToss)()));
        }));
        test("Tosses", () => __awaiter(void 0, void 0, void 0, function* () {
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
        }));
    });
};
exports.IsaacSuiteA = IsaacSuiteA;
(0, exports.IsaacSuiteA)();
