import {TUI_VERSION} from '@taiga-ui/cdk';
// eslint-disable-next-line @taiga-ui/no-deep-imports
import CDK_PACKAGE from '@taiga-ui/cdk/package.json';
// eslint-disable-next-line @taiga-ui/no-deep-imports
import KIT_PACKAGE from '@taiga-ui/kit/package.json';

const CDK_DEPS = CDK_PACKAGE.dependencies;
const KIT_DEPS = KIT_PACKAGE.dependencies;

const ANGULAR_VERSION = `14.x.x`;
const TAIGA_VERSION = `${TUI_VERSION.split(`.`)[0]}.x.x`;

export const STACKBLITZ_DEPS: Record<string, string> = {
    '@angular/cdk': ANGULAR_VERSION,
    '@angular/core': ANGULAR_VERSION,
    '@angular/common': ANGULAR_VERSION,
    '@angular/compiler': ANGULAR_VERSION,
    '@angular/forms': ANGULAR_VERSION,
    '@angular/localize': ANGULAR_VERSION,
    '@angular/platform-browser': ANGULAR_VERSION,
    '@angular/platform-browser-dynamic': ANGULAR_VERSION,
    '@angular/animations': ANGULAR_VERSION,
    '@angular/router': ANGULAR_VERSION,
    '@taiga-ui/cdk': TAIGA_VERSION,
    '@taiga-ui/i18n': TAIGA_VERSION,
    '@taiga-ui/core': TAIGA_VERSION,
    '@taiga-ui/kit': TAIGA_VERSION,
    '@taiga-ui/icons': TAIGA_VERSION,
    '@taiga-ui/styles': TAIGA_VERSION,
    '@taiga-ui/addon-charts': TAIGA_VERSION,
    '@taiga-ui/addon-commerce': TAIGA_VERSION,
    // '@taiga-ui/addon-editor': TAIGA_VERSION, TODO: https://github.com/Tinkoff/taiga-ui/issues/3081
    '@taiga-ui/addon-mobile': TAIGA_VERSION,
    '@taiga-ui/addon-preview': TAIGA_VERSION,
    '@taiga-ui/addon-table': TAIGA_VERSION,
    '@taiga-ui/addon-tablebars': TAIGA_VERSION,
    '@tinkoff/ng-dompurify': `*`,
    '@tinkoff/ng-polymorpheus': CDK_DEPS[`@tinkoff/ng-polymorpheus`],
    '@ng-web-apis/common': CDK_DEPS[`@ng-web-apis/common`],
    '@tinkoff/ng-event-plugins': CDK_DEPS[`@tinkoff/ng-event-plugins`],
    '@ng-web-apis/intersection-observer': KIT_DEPS[`@ng-web-apis/intersection-observer`],
    '@ng-web-apis/resize-observer': CDK_DEPS[`@ng-web-apis/resize-observer`],
    '@ng-web-apis/mutation-observer': CDK_DEPS[`@ng-web-apis/mutation-observer`],
    'text-mask-core': KIT_DEPS[`text-mask-core`],
    dompurify: `*`,
    '@types/dompurify': `*`,
    'prosemirror-state': `*`,
};
