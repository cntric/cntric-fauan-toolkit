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
exports.ShiftSuiteA = void 0;
const fauna_test_setup_1 = require("fauna-test-setup");
const shift_1 = require("./shift");
const ShiftSuiteA = () => {
    describe("Shift basic functionality", () => {
        let db;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            db = yield (0, fauna_test_setup_1.FaunaTestDb)();
        }));
        test("Left shifts", () => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < 100; ++i) {
                const a = Math.floor(Math.random() * 16);
                const b = Math.floor(Math.random() * 16);
                const result = yield db.client.query((0, shift_1.Bit32ShiftLeft)(a, b));
                expect(result).toBe((a << b) >>> 0);
            }
        }));
        test("Right shifts", () => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 0; i < 100; ++i) {
                const a = Math.floor(Math.random() * 16);
                const b = Math.floor(Math.random() * 16);
                const result = yield db.client.query((0, shift_1.Bit32ShiftRight)(a, b));
                expect(result).toBe((a >> b) >>> 0);
            }
        }));
    });
};
exports.ShiftSuiteA = ShiftSuiteA;
(0, exports.ShiftSuiteA)();
