import { PackageManager } from '../lib/config/schema';
export declare function supportsYarn(): boolean;
export declare function supportsNpm(): boolean;
export declare function getPackageManager(root: string): Promise<PackageManager>;
