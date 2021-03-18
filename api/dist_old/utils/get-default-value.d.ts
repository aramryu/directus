import { Column } from '@directus/schema/dist/types/column';
import { SchemaOverview } from '../types';
export default function getDefaultValue(column: SchemaOverview['tables'][string]['columns'][string] | Column): any;
