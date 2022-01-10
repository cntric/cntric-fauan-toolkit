import { values } from "faunadb";
/**
 * Gets the collection for a given doc.
 * @param doc
 * @returns a ref to the collection.
 */
export declare const GetCollection: (doc: values.Document) => values.Ref;
