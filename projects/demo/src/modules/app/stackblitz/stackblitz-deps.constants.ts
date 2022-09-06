import {TUI_VERSION} from '@taiga-ui/cdk';

const ANGULAR_VERSION = `12.x.x`;
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
    '@taiga-ui/addon-charts': TAIGA_VERSION,
    '@taiga-ui/addon-commerce': TAIGA_VERSION,
    '@taiga-ui/addon-mobile': TAIGA_VERSION,
    '@taiga-ui/addon-table': TAIGA_VERSION,
    '@taiga-ui/addon-tablebars': TAIGA_VERSION,
    '@taiga-ui/addon-editor': TAIGA_VERSION,
    '@tinkoff/ng-dompurify': `*`,
    '@tinkoff/ng-polymorpheus': `3.x.x`,
    '@ng-web-apis/common': `1.x.x`,
    '@tinkoff/ng-event-plugins': `*`,
    '@ng-web-apis/intersection-observer': `*`,
    '@ng-web-apis/mutation-observer': `*`,
    'angular2-text-mask': `*`,
    dompurify: `*`,
    '@types/dompurify': `*`,
    'prosemirror-state': `*`,
};
