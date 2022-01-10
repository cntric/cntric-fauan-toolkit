"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSeed = void 0;
const faunadb_1 = require("faunadb");
const QSeed = () => {
    return faunadb_1.query.BitAnd(faunadb_1.query.Multiply(faunadb_1.query.Add(faunadb_1.query.Modulo(faunadb_1.query.ToInteger(faunadb_1.query.NewId()), 13), 1), faunadb_1.query.Add(faunadb_1.query.Modulo(faunadb_1.query.ToInteger(faunadb_1.query.NewId()), 331777), 1)), 0xffffffff);
};
exports.QSeed = QSeed;
