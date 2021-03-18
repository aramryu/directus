import knex from 'knex';
export declare type Credentials = {
    filename?: string;
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string;
    ssl?: boolean;
};
export default function createDBConnection(client: 'sqlite3' | 'mysql' | 'pg' | 'oracledb' | 'mssql', credentials: Credentials): knex<any, unknown[]>;
