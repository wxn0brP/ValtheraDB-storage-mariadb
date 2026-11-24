import { DataInternal } from "@wxn0brp/db-core/types/data";
import { VQueryT } from "@wxn0brp/db-core/types/query";
import { MariaDBValthera } from "./adapter.js";
export declare function update(mv: MariaDBValthera, query: VQueryT.Update, one: boolean): Promise<DataInternal[]>;
