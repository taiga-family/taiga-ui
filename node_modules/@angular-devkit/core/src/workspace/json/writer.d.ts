import { WorkspaceDefinition } from '../definitions';
import { WorkspaceHost } from '../host';
export declare function writeJsonWorkspace(workspace: WorkspaceDefinition, host: WorkspaceHost, path?: string, options?: {
    schema?: string;
}): Promise<void>;
