import { schemaInspector } from '../database';
import { Field } from '../types/field';
import { Accountability, AbstractServiceOptions, SchemaOverview } from '../types';
import { ItemsService } from '../services/items';
import { types } from '../types';
import Knex, { CreateTableBuilder } from 'knex';
import { PayloadService } from '../services/payload';
declare type RawField = Partial<Field> & {
    field: string;
    type: typeof types[number];
};
export declare class FieldsService {
    knex: Knex;
    accountability: Accountability | null;
    itemsService: ItemsService;
    payloadService: PayloadService;
    schemaInspector: typeof schemaInspector;
    schema: SchemaOverview;
    constructor(options: AbstractServiceOptions);
    readAll(collection?: string): Promise<Field[]>;
    readOne(collection: string, field: string): Promise<{
        collection: string;
        field: string;
        type: string;
        meta: any;
        schema: import("@directus/schema/dist/types/column").Column | null;
    }>;
    createField(collection: string, field: Partial<Field> & {
        field: string;
        type: typeof types[number];
    }, table?: CreateTableBuilder): Promise<void>;
    updateField(collection: string, field: RawField): Promise<string>;
    /** @todo save accountability */
    deleteField(collection: string, field: string): Promise<void>;
    addColumnToTable(table: CreateTableBuilder, field: RawField | Field, alter?: boolean): void;
}
export {};
