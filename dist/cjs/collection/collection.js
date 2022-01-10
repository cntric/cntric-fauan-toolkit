"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCollection = void 0;
const faunadb_1 = require("faunadb");
/**
 * Gets the collection for a given doc.
 * @param doc
 * @returns a ref to the collection.
 */
const GetCollection = (doc) => {
    return faunadb_1.query.If(faunadb_1.query.Not(faunadb_1.query.IsDoc(doc)), faunadb_1.query.Abort("Cannot get the collection of a value that is not a document."), faunadb_1.query.Select(["ref", "collection"], doc));
};
exports.GetCollection = GetCollection;
