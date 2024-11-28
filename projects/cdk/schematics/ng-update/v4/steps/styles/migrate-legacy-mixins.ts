const LEGACY_MIXINS = [
    'clearfix',
    'autofill',
    'clearinput',
    'visually-hidden',
    'webkit-auto-fill-button-hidden',
    'customize-scroll',
    'inset-border',
    'dashed-border',
    'opacity-icon',
    'hoverable-with-shadow',
    'text-overflow-with-fade',
    'contrast-background',
    'blurred-background',
    'textfield-host',
    'textfield-content',
    'textfield-input',
    'textfield-wrapper',
    'textfield-label',
    'input-icon',
    'input-icons',
    'icon-button',
    'textfield',
];

export function migrateLegacyMixins(fileContent: string): string {
    if (!fileContent.includes('@taiga-ui/core/styles/taiga-ui-local')) {
        return fileContent;
    }

    return LEGACY_MIXINS.some((x) => fileContent.includes(x))
        ? `@import '@taiga-ui/legacy/styles/taiga-ui-local';\n${fileContent}`
        : fileContent;
}
