import {type Rule, type Tree} from '@angular-devkit/schematics';

import {TAIGA_THEME_FONTS, TAIGA_THEME_STYLE} from '../../constants/taiga-styles';
import {addStylesToAngularJson} from '../../utils/angular-json-manipulations';
import {type TuiSchema} from '../schema';

export function addTaigaStyles(options: TuiSchema): Rule {
    return (_: Tree, context) => {
        const taigaLocalStyles = [TAIGA_THEME_STYLE, TAIGA_THEME_FONTS];

        return addStylesToAngularJson(options, context, taigaLocalStyles);
    };
}
