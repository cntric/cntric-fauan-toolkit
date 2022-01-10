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
const seed_1 = require("./seed");
const IsaacSuiteA = () => {
    describe("Isaac", () => {
        let db;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            db = yield (0, fauna_test_setup_1.FaunaTestDb)();
            const [err, result] = yield (0, await_to_js_1.to)(db.client.query((0, isaac_1.CreateIsaacToss)()));
        }));
        test("Tosses", () => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < 100; ++i) {
                const [err, result] = yield (0, await_to_js_1.to)(db.client.query((0, seed_1.QSeed)()));
            }
        }));
    });
};
exports.IsaacSuiteA = IsaacSuiteA;
(0, exports.IsaacSuiteA)();
