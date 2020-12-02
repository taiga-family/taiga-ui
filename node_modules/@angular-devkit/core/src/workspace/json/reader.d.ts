import { WorkspaceDefinition } from '../definitions';
import { WorkspaceHost } from '../host';
export declare function readJsonWorkspace(path: string, host: WorkspaceHost): Promise<WorkspaceDefinition>;
