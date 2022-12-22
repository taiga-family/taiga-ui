import {Tree} from '@angular-devkit/schematics';
import {createProject, setActiveProject} from 'ng-morph';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';

import {ALL_FILES} from '../../constants';
import {projectRoot} from '../../utils/project-root';

export function getFileSystem(tree: Tree): DevkitFileSystem {
    const project = createProject(tree, projectRoot(), ALL_FILES);

    setActiveProject(project);

    return project.getFileSystem().fs;
}
