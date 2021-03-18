import { Column } from '@directus/schema/dist/types/column';
export declare const types: readonly ["bigInteger", "boolean", "date", "dateTime", "decimal", "float", "integer", "json", "string", "text", "time", "timestamp", "binary", "uuid", "hash", "csv"];
export declare type FieldMeta = {
    id: number;
    collection: string;
    field: string;
    special: string[] | null;
    interface: string | null;
    options: Record<string, any> | null;
    locked: boolean;
    readonly: boolean;
    hidden: boolean;
    sort: number | null;
    width: string | null;
    group: number | null;
    note: string | null;
    translations: null;
};
export declare type Field = {
    collection: string;
    field: string;
    type: typeof types[number];
    schema: Column | null;
    meta: FieldMeta | null;
};
