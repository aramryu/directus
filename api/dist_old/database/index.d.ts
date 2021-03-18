import knex from 'knex';
declare const database: knex<any, unknown[]>;
export declare function hasDatabaseConnection(): Promise<boolean>;
export declare function validateDBConnection(): Promise<void>;
export declare const schemaInspector: import("@directus/schema/dist/types/schema").Schema;
export declare function isInstalled(): Promise<boolean>;
export default database;
