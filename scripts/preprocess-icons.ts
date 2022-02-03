import glob from 'glob';

import {processIcons} from '../projects/icons/scripts';

(async function main(): Promise<void> {
    const pattern = process.argv[2] || './projects/icons/**/*.svg';

    console.info('\x1b[35m%s\x1b[0m', '[cwd]:', process.cwd());
    console.info('\x1b[35m%s\x1b[0m', '[match]:', pattern);

    glob(pattern, {}, (_err: Error | null, files: string[]) => processIcons(files));
})();
