import type {Rule} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';

import type {TuiSchema} from './schema';
import {addTaigaIcons} from './steps/add-taiga-icons';
import {addTaigaModules} from './steps/add-taiga-modules';
import {addTaigaStyles} from './steps/add-taiga-styles';
import {wrapWithTuiRootComponent} from './steps/wrap-with-tui-root';

export default function ngAddSetupProject(options: TuiSchema): Rule {
    return chain([
        addTaigaStyles(options),
        addTaigaModules(options),
        addTaigaIcons(options),
        wrapWithTuiRootComponent(options),
    ]);
}
