import { Rule } from '@angular-devkit/schematics';
/**
 * Move the import reflect metadata polyfill from the polyfill file to the dev environment. This is
 * not guaranteed to work, but if it doesn't it will result in no changes made.
 */
export declare function polyfillMetadataRule(): Rule;
