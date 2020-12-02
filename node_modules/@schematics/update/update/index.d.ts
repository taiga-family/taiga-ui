import { Rule } from '@angular-devkit/schematics';
import { Schema as UpdateSchema } from './schema';
export declare function angularMajorCompatGuarantee(range: string): string;
export default function (options: UpdateSchema): Rule;
