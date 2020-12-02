import { Observable } from 'rxjs';
import { RuleFactory, TaskExecutor } from '../src';
import { FileSystemCollectionDesc, FileSystemSchematicDesc } from './description';
import { FileSystemEngineHostBase } from './file-system-engine-host-base';
/**
 * A simple EngineHost that uses a root with one directory per collection inside of it. The
 * collection declaration follows the same rules as the regular FileSystemEngineHostBase.
 */
export declare class FileSystemEngineHost extends FileSystemEngineHostBase {
    protected _root: string;
    constructor(_root: string);
    protected _resolveCollectionPath(name: string): string;
    protected _resolveReferenceString(refString: string, parentPath: string): {
        ref: RuleFactory<{}>;
        path: string;
    } | null;
    protected _transformCollectionDescription(name: string, desc: Partial<FileSystemCollectionDesc>): FileSystemCollectionDesc;
    protected _transformSchematicDescription(name: string, _collection: FileSystemCollectionDesc, desc: Partial<FileSystemSchematicDesc>): FileSystemSchematicDesc;
    hasTaskExecutor(name: string): boolean;
    createTaskExecutor(name: string): Observable<TaskExecutor>;
}
