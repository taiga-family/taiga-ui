import {asyncExecMany} from '../shared/async-exec-many';

(async function main(): Promise<void> {
    try {
        await asyncExecMany(
            `npm publish dist/cdk`,
            `npm publish dist/i18n`,
            `npm publish dist/core`,
            `npm publish dist/kit`,
            `npm publish dist/addon-charts`,
            `npm publish dist/addon-commerce`,
            `npm publish dist/addon-doc`,
            `npm publish dist/addon-editor`,
            `npm publish dist/addon-mobile`,
            `npm publish dist/addon-table`,
            `npm publish dist/addon-tablebars`,
            `npm publish dist/icons`,
            `npm publish dist/taiga-schematics`,
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
