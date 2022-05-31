import {readFileSync, writeFileSync} from 'fs';
import {resolve} from 'path';

import {getValueByFlag} from './shared/argv.utils';

(function main(): void {
    const demoPath = resolve(getValueByFlag('--path', './dist/demo/browser'));

    const location = getValueByFlag('--location', 'next')
        .split(',')
        .map(val => val.trim());

    const pathToDirectories = location.reduce(
        (result: string[], location: string) => result.concat(`${demoPath}/${location}`),
        [demoPath],
    );

    console.info('\x1b[32m%s\x1b[0m', '[DEMO_PATH]:', demoPath);
    console.info('\x1b[32m%s\x1b[0m', '[LOCATION]:', location);
    console.info('\x1b[32m%s\x1b[0m', '[PATHS]:', pathToDirectories);

    /**
     * @example:
     * const baseUrls = [ "next", "v2", "v1" ];
     */
    const smokerBalancer = `
<script>
    const baseUrls = ${JSON.stringify(location)};

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

    console.info('\x1b[35m%s\x1b[0m', `[SMOKER_BALANCER]: \n ${smokerBalancer}`);

    for (const path of pathToDirectories) {
        const indexPath = `${path}/index.html`;

        /**
         * @note:
         * For security reasons, GitHub pages doesn't allow
         * server configuration files, so, no url rewriting.
         * But you can copy index.html and renaming it to 404.html will work.
         */
        const notFoundPath = `${path}/404.html`;

        try {
            const body = readFileSync(indexPath).toString();
            const processedBody = body.replace(`<head>`, `<head>${smokerBalancer}`);

            writeFileSync(notFoundPath, processedBody);
        } catch (err) {
            console.info('\x1b[35m%s\x1b[0m', err.message);
        }
    }
})();
