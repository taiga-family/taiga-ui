import { FileHandler } from './FileHandler';
import { FileSystem } from './FileSystem';
import { Module } from './Module';
declare class PluginFileHandler implements FileHandler {
    private fileSystem;
    private buildRoot;
    private modulesDirectories;
    private excludedPackageTest;
    constructor(fileSystem: FileSystem, buildRoot: string, modulesDirectories: string[] | null, excludedPackageTest: ((packageName: string) => boolean));
    static PACKAGE_JSON: string;
    getModule(filename: string): Module | null;
    private findModuleDir(filename);
    private parsePackageJson(dirOfModule);
    private dirContainsValidPackageJson(dirOfModule);
}
export { PluginFileHandler };
