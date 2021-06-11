import {chain, Rule} from '@angular-devkit/schematics';
import {Schema} from './schema';
import {addTaigaIcons} from './steps/icons';
import {addTaigaModules} from './steps/modules';
import {addTaigaStyles} from './steps/styles';

export default function ngAddSetupProject(options: Schema): Rule {
    return chain([
        addTaigaStyles(options),
        addTaigaModules(options),
        addTaigaIcons(options),
    ]);
}
