import {Rule, Tree} from '@angular-devkit/schematics';
import {TuiSchema} from '../schema';
import {addStylesToAngularJson} from '../../utils/angular-json-manipulations';
import {
    TAIGA_GLOBAL_NEW_STYLE,
    TAIGA_THEME_FONTS,
    TAIGA_THEME_STYLE,
} from '../../constants/taiga-styles';

export function addTaigaStyles(options: TuiSchema): Rule {
    return async (_: Tree, context) => {
        const taigaLocalStyles = [TAIGA_THEME_STYLE, TAIGA_THEME_FONTS];
        const taigaStyles = options.addGlobalStyles
            ? [...taigaLocalStyles, TAIGA_GLOBAL_NEW_STYLE]
            : taigaLocalStyles;

        return addStylesToAngularJson(options, context, taigaStyles);
    };
}
