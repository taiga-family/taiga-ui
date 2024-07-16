import type {DevkitFileSystem} from 'ng-morph';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';

import {ALL_FILES} from '../../constants';
import {projectRoot} from '../../utils/project-root';

/**
 * We should update virtual file tree after template manipulations
 * otherwise all following ng-morph commands will overwrite all previous template manipulations
 * */
export function saveTemplates(fileSystem: DevkitFileSystem): void {
    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}
