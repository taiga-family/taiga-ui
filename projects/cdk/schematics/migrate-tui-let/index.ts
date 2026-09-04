import {type Rule, type Tree} from '@angular-devkit/schematics';

import {type TuiSchema} from '../ng-add/schema';
import {tuiLetMigration} from '../ng-update/v5/steps/migrate-tui-let';

/**
 * Standalone `*tuiLet` → `@let` migration, runnable on its own via
 * `ng generate @taiga-ui/cdk:migrateTuiLet`. It wraps the same logic used by
 * the v5 update so an Angular 18+ / Taiga UI 4 project can adopt the built-in
 * control flow without upgrading to Taiga UI 5 at the same time.
 */
export default function migrateTuiLet(options: TuiSchema): Rule {
    return (tree: Tree) => {
        tuiLetMigration(tree, options);
    };
}
