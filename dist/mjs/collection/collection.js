import { query as q } from "faunadb";
/**
 * Gets the collection for a given doc.
 * @param doc
 * @returns a ref to the collection.
 */
export const GetCollection = (doc) => {
    return q.If(q.Not(q.IsDoc(doc)), q.Abort("Cannot get the collection of a value that is not a document."), q.Select(["ref", "collection"], doc));
};
