import type {Rule, Tree} from '@angular-devkit/schematics';
import type {Schema} from '../schema';
import {addStylesToAngularJson} from '../../utils/angular-json-manipulations';
import {
    TAIGA_GLOBAL_NEW_STYLE,
    TAIGA_THEME_FONTS,
    TAIGA_THEME_STYLE,
} from '../../constants/taiga-styles';

export function addTaigaStyles(options: Schema): Rule {
    return async (_: Tree, context) => {
        const taigaLocalStyles = [TAIGA_THEME_STYLE, TAIGA_THEME_FONTS];
        const taigaStyles = options.addGlobalStyles
            ? [...taigaLocalStyles, TAIGA_GLOBAL_NEW_STYLE]
            : taigaLocalStyles;

        return addStylesToAngularJson(options, context, taigaStyles);
    };
}
