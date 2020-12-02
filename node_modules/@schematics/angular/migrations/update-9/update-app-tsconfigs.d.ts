import { Rule } from '@angular-devkit/schematics';
/**
 * Update the tsconfig files for applications
 * - Removes enableIvy: true
 * - Sets stricter file inclusions
 * - Sets module compiler option to esnext or commonjs
 */
export declare function updateApplicationTsConfigs(): Rule;
