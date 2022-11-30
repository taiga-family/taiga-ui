import {Rule, Tree} from '@angular-devkit/schematics';

import {
    TAIGA_GLOBAL_NEW_STYLE,
    TAIGA_THEME_FONTS,
    TAIGA_THEME_STYLE,
} from '../../constants/taiga-styles';
import {addStylesToAngularJson} from '../../utils/angular-json-manipulations';
import {TuiSchema} from '../schema';

export function addTaigaStyles(options: TuiSchema): Rule {
    return (_: Tree, context) => {
        const taigaLocalStyles = [TAIGA_THEME_STYLE, TAIGA_THEME_FONTS];
        const taigaStyles = options.addGlobalStyles
            ? [...taigaLocalStyles, TAIGA_GLOBAL_NEW_STYLE]
            : taigaLocalStyles;

        return addStylesToAngularJson(options, context, taigaStyles);
    };
}
