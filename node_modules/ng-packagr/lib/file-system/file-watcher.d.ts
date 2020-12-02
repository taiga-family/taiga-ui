import { Observable } from 'rxjs';
declare type AllFileWatchEvents = 'change' | 'unlink' | 'add' | 'unlinkDir' | 'addDir';
export declare type FileWatchEvent = Exclude<AllFileWatchEvents, 'unlinkDir' | 'addDir'>;
export interface FileChangedEvent {
    filePath: string;
    event: FileWatchEvent;
}
export declare function createFileWatch(projectPath: string, ignoredPaths?: (RegExp | string)[]): Observable<FileChangedEvent>;
export {};
