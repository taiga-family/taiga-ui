import {readFileSync, writeFileSync} from 'fs';
import {resolve} from 'path';

import {getValueByFlag} from './shared/argv.utils';

(function main(): void {
    const DEMO_PATH = resolve(getValueByFlag('--path', './dist/demo/browser'));

    const LOCATION = getValueByFlag('--location', 'next')
        .split(',')
        .map(val => val.trim());

    const PATHS = LOCATION.reduce(
        (result: string[], location: string) => result.concat(`${DEMO_PATH}/${location}`),
        [DEMO_PATH],
    );

    console.info('\x1b[32m%s\x1b[0m', '[DEMO_PATH]:', DEMO_PATH);
    console.info('\x1b[32m%s\x1b[0m', '[LOCATION]:', LOCATION);
    console.info('\x1b[32m%s\x1b[0m', '[PATHS]:', PATHS);

    /**
     * @example:
     * const baseUrls = [ "next", "v2", "v1" ];
     */
    const SMOKER_BALANCER = `
<script>
    const baseUrls = ${JSON.stringify(LOCATION)};

    if (!localStorage.getItem('env')) {
        for (const url of baseUrls) {
            if (location.pathname.includes(url)) {
                 localStorage.setItem('env', location.pathname + location.search + location.hash);
                 location.replace('/' + url);
                 break;
            }
        }
    } else {
        localStorage.removeItem('env');
    }
</script>`;

    console.info('\x1b[35m%s\x1b[0m', `[SMOKER_BALANCER]: \n ${SMOKER_BALANCER}`);

    for (const path of PATHS) {
        const INDEX_PATH = `${path}/index.html`;

        /**
         * @note:
         * For security reasons, GitHub pages doesn't allow
         * server configuration files, so, no url rewriting.
         * But you can copy index.html and renaming it to 404.html will work.
         */
        const NOT_FOUND_PATH = `${path}/404.html`;

        try {
            const body = readFileSync(INDEX_PATH).toString();
            const processedBody = body.replace(`<head>`, `<head>${SMOKER_BALANCER}`);

            writeFileSync(NOT_FOUND_PATH, processedBody);
        } catch (err) {
            console.info('\x1b[35m%s\x1b[0m', err.message);
        }
    }
})();
