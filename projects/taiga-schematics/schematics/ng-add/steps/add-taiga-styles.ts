import {JsonArray} from '@angular-devkit/core';
import {Rule, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {getProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {Schema} from '../schema';

const TAIGA_GLOBAL_STYLE = ['node_modules/@taiga-ui/styles/taiga-ui-global.less'];
const TAIGA_THEME_STYLE = 'node_modules/@taiga-ui/core/styles/taiga-ui-theme.less';

export function addTaigaStyles(options: Schema): Rule {
    return async (_: Tree) => {
        return addTaigaStylesToAngularJson(options);
    };
}

export function addTaigaStylesToAngularJson(options: Schema): Rule {
    return updateWorkspace(workspace => {
        const project = getProject(options, workspace);
        const targetOptions = getProjectTargetOptions(project, 'build');
        const styles = targetOptions.styles as JsonArray | undefined;
        const taigaStyles = [TAIGA_THEME_STYLE, ...TAIGA_GLOBAL_STYLE];

        targetOptions.styles = styles
            ? Array.from(new Set([...taigaStyles, ...styles]))
            : taigaStyles;
    });
}
