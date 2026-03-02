const GLOBAL_STYLES_COMMENT =
    'Global styles have been removed. Include their source code in your project if you still require them';
const GLOBAL_STYLES_PATH =
    'https://github.com/taiga-family/taiga-ui/blob/v4.x/projects/styles';

export const STYLE_COMMENTS = {
    ...Object.fromEntries(
        [
            'basic/keyframes',
            'basic/main',
            'markup/tui-container',
            'markup/tui-form',
            'markup/tui-island',
            'markup/tui-list',
            'markup/tui-mobile-only',
            'markup/tui-required',
            'markup/tui-row',
            'markup/tui-skeleton',
            'markup/tui-space',
            'markup/tui-table',
            'markup/tui-text',
        ].map((x) => [
            `@taiga-ui/styles/${x}`,
            `${GLOBAL_STYLES_COMMENT}: ${GLOBAL_STYLES_PATH}/${x}.less`,
        ]),
    ),
    '@taiga-ui/styles/taiga-ui-global': `${GLOBAL_STYLES_COMMENT}: ${GLOBAL_STYLES_PATH}/taiga-ui-global.less`,
} as const;
