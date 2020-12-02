import { FileSystem } from './FileSystem';
declare class WebpackFileSystem implements FileSystem {
    private fs;
    pathSeparator: string;
    constructor(fs: any);
    isFileInDirectory(filename: string, directory: string): boolean;
    pathExists(filename: string): boolean;
    readFileAsUtf8(filename: string): string;
    join(...paths: string[]): string;
    resolvePath(pathInput: string): string;
    listPaths(dir: string): string[];
    isDirectory(dir: string): boolean;
}
export { WebpackFileSystem };
