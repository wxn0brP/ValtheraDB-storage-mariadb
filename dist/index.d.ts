import { ValtheraClass } from "@wxn0brp/db-core";
import { Data } from "@wxn0brp/db-core/types/data";
import { MariaDBValthera } from "./adapter.js";
import { MariaDBConnection, MariaDBValtheraOptions } from "./types.js";
export declare function createMariaDBValthera<T extends Record<string, Data> = {}>(mariadbDB: MariaDBConnection, opts?: MariaDBValtheraOptions): import("@wxn0brp/db-core/types/typed").TypedValthera<T, ValtheraClass>;
export declare const DYNAMIC: {
    mariadb(connectionString: string, opts?: MariaDBValtheraOptions): Promise<MariaDBValthera>;
    mysql2(connectionString: string, opts?: MariaDBValtheraOptions): Promise<MariaDBValthera>;
    bun(connectionString: string, opts?: MariaDBValtheraOptions): Promise<MariaDBValthera>;
    def(connectionString: string, opts?: MariaDBValtheraOptions): Promise<MariaDBValthera>;
};
