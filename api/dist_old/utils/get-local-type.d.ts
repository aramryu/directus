import { FieldMeta, types, SchemaOverview } from '../types';
import { Column } from '@directus/schema/dist/types/column';
export default function getLocalType(column: SchemaOverview['tables'][string]['columns'][string] | Column, field?: FieldMeta): typeof types[number] | 'unknown';
