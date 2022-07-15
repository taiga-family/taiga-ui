import {Rule, Tree} from '@angular-devkit/schematics';
import {Schema} from '../schema';
import {addStylesToAngularJson} from '../../utils/add-styles';
import {
    TAIGA_GLOBAL_STYLE,
    TAIGA_THEME_FONTS,
    TAIGA_THEME_STYLE,
} from '../../constants/taiga-styles';

export function addTaigaStyles(options: Schema): Rule {
    return async (_: Tree) => {
        const taigaStyles = [TAIGA_GLOBAL_STYLE, TAIGA_THEME_STYLE, TAIGA_THEME_FONTS];

        return addStylesToAngularJson(options, taigaStyles);
    };
}
