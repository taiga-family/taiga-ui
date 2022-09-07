import {readFileSync, writeFileSync} from 'fs';
import {resolve} from 'path';

import {errorLog, processLog} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag} from './shared/argv.utils';

(function main(): void {
    const demoPath = resolve(getValueByFlag(`--path`, `./dist/demo/browser`));

    const location = getValueByFlag(`--location`, `next`)
        .split(`,`)
        .map(val => val.trim());

    const pathToDirectories = location.reduce(
        (result: string[], location: string) => result.concat(`${demoPath}/${location}`),
        [demoPath],
    );

    processLog(`[DEMO_PATH]: ${demoPath}`);
    processLog(`[LOCATION]: ${location}`);
    processLog(`[PATHS]: ${pathToDirectories}`);

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

    processLog(`[SMOKER_BALANCER]: \n ${smokerBalancer}`);

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
            console.info(`\x1B[35m%s\x1B[0m`, err.message);
        }
    }

    for (const subVersion of location) {
        const indexPath = resolve(`${demoPath}/${subVersion}/index.html`);

        try {
            const body = readFileSync(indexPath).toString();
            const processedBody = body.replace(
                /<base[\s\S]*?\/?>/g,
                `<base href="/${subVersion}/">`,
            );

            writeFileSync(indexPath, processedBody);
        } catch (err) {
            errorLog(err.message);
        }
    }
})();
