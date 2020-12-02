/// <reference types="node" />
import * as child_process from 'child_process';
export declare let spawn: (cmd: string, args: string[], stdio?: any, opts?: child_process.SpawnOptions) => child_process.ChildProcess;
export declare let spawnSync: (cmd: string, args: string[], stdio?: any, opts?: child_process.SpawnSyncOptions) => child_process.SpawnSyncReturns<any>;
export declare function request(method: string, port: string, path: string, timeout?: number, data?: any): Promise<string>;
export declare function adb(sdkPath: string, port: number, command: string, timeout: number, args?: string[]): Promise<string>;
