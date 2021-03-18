import { QueryBuilder } from 'knex';
import { Query, Filter, SchemaOverview } from '../types';
export default function applyQuery(collection: string, dbQuery: QueryBuilder, query: Query, schema: SchemaOverview): void;
export declare function applyFilter(schema: SchemaOverview, rootQuery: QueryBuilder, rootFilter: Filter, collection: string): void;
export declare function applySearch(schema: SchemaOverview, dbQuery: QueryBuilder, searchQuery: string, collection: string): Promise<void>;
