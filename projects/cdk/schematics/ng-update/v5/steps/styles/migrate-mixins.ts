const MIXINS_TO_MIGRATE = ['tui-slider-ticks-labels'];

export function migrateMixins(fileContent: string): string {
    if (
        !fileContent.includes('@taiga-ui/styles') &&
        !fileContent.includes('@taiga-ui/core/styles') &&
        !fileContent.includes('@taiga-ui/kit/styles')
    ) {
        return fileContent;
    }

    return MIXINS_TO_MIGRATE.reduce((content, mixinName) => {
        const MIXIN_RE = new RegExp(
            String.raw`(?:@include\s+|\.)(${mixinName})\([^)]*\)(\s*!important)?;`,
            'g',
        );

        return content.replaceAll(MIXIN_RE, (match, name, important = '') => {
            const isScss = match.trimStart().startsWith('@include');
            const prefix = isScss ? '@include ' : '.';

            return `${prefix}${name}()${important};`;
        });
    }, fileContent);
}
