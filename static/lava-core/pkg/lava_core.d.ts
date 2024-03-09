/* tslint:disable */
/* eslint-disable */
/**
* @param {string} json
* @returns {string}
*/
export function json_to_mocka(json: string): string;
/**
*/
export class AccountInfo {
  free(): void;
}
/**
*/
export class AccountType {
  free(): void;
}
/**
*/
export class Argument {
  free(): void;
}
/**
*/
export class Field {
  free(): void;
}
/**
*/
export class Instruction {
  free(): void;
}
/**
*/
export class LavaConfig {
  free(): void;
/**
* @param {string | undefined} [lava_Config]
*/
  constructor(lava_Config?: string);
/**
* @returns {string}
*/
  to_mocha(): string;
}
/**
*/
export class Metadata {
  free(): void;
}
/**
*/
export class Token {
  free(): void;
}
/**
*/
export class TokenBalance {
  free(): void;
}
/**
*/
export class Wallet {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_lavaconfig_free: (a: number) => void;
  readonly lavaconfig_new: (a: number, b: number, c: number) => void;
  readonly lavaconfig_to_mocha: (a: number, b: number) => void;
  readonly __wbg_wallet_free: (a: number) => void;
  readonly __wbg_tokenbalance_free: (a: number) => void;
  readonly __wbg_token_free: (a: number) => void;
  readonly __wbg_accountinfo_free: (a: number) => void;
  readonly __wbg_accounttype_free: (a: number) => void;
  readonly __wbg_argument_free: (a: number) => void;
  readonly __wbg_instruction_free: (a: number) => void;
  readonly __wbg_metadata_free: (a: number) => void;
  readonly json_to_mocka: (a: number, b: number, c: number) => void;
  readonly __wbg_field_free: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
