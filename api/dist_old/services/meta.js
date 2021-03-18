"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaService = void 0;
const database_1 = __importDefault(require("../database"));
const apply_query_1 = require("../utils/apply-query");
class MetaService {
    constructor(options) {
        this.knex = options.knex || database_1.default;
        this.accountability = options.accountability || null;
        this.schema = options.schema;
    }
    getMetaForQuery(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!query || !query.meta)
                return;
            const results = yield Promise.all(query.meta.map((metaVal) => {
                if (metaVal === 'total_count')
                    return this.totalCount(collection);
                if (metaVal === 'filter_count')
                    return this.filterCount(collection, query);
            }));
            return results.reduce((metaObject, value, index) => {
                return Object.assign(Object.assign({}, metaObject), { [query.meta[index]]: value });
            }, {});
        });
    }
    totalCount(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            const records = yield this.knex(collection).count('*', { as: 'count' });
            return Number(records[0].count);
        });
    }
    filterCount(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbQuery = this.knex(collection).count('*', { as: 'count' });
            if (query.filter) {
                apply_query_1.applyFilter(this.schema, dbQuery, query.filter, collection);
            }
            if (query.search) {
                apply_query_1.applySearch(this.schema, dbQuery, query.search, collection);
            }
            const records = yield dbQuery;
            return Number(records[0].count);
        });
    }
}
exports.MetaService = MetaService;
