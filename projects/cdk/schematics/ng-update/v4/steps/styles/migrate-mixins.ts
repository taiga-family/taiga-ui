const MAPPING = {
    createStackingContext: ['isolation: isolate'],
    'scroll-behavior': ['scroll-behavior: var(--tui-scroll-behavior)'],
};

export function migrateMixins(fileContent: string): string {
    if (!fileContent.includes('@taiga-ui/core/styles/taiga-ui-local')) {
        return fileContent;
    }

    return Object.keys(MAPPING).reduce((file, outdatedMixin) => {
        const MIXIN_RE = new RegExp(
            String.raw`(?:@include\s|\.)(${outdatedMixin})\(\)(\s?!important)?;`,
            'g',
        );

        return file.replaceAll(
            MIXIN_RE,
            (_, mixinName: keyof typeof MAPPING, important = '') =>
                `${MAPPING[mixinName].map((newValue) => `${newValue}${important};`).join('\n')}`,
        );
    }, fileContent);
}
