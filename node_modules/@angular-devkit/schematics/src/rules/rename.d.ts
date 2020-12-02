import { Rule } from '../engine/interface';
import { FilePredicate } from '../tree/interface';
export declare function rename(match: FilePredicate<boolean>, to: FilePredicate<string>): Rule;
