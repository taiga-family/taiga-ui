import {FilterHostTree, HostTree} from '@angular-devkit/schematics';
import {minimatch} from 'minimatch';

import {IGNORE_PATTERNS} from '../constants/file-globs';

export class TuiHostTree extends FilterHostTree {
    constructor(host?: HostTree, ignores = IGNORE_PATTERNS) {
        super(
            host ?? new HostTree(),
            (path) => !ignores.some((pattern) => minimatch(path, pattern)),
        );
    }
}
