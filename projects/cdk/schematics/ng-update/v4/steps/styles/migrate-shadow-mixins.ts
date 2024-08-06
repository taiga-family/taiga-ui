const MAPPING = {
    'shadow()': 'var(--tui-shadow)',
    'shadow(1)': 'var(--tui-shadow)',
    'shadow(2)': 'var(--tui-shadow-dropdown)',
    'shadow(3)': 'var(--tui-shadow-modal)',
    'shadow(4)': 'var(--tui-shadow-sidebar)',
    'shadow(5)': 'var(--tui-shadow-hover)',
    'shadow(6)': 'var(--tui-shadow-navigation)',
    'shadow(7)': 'var(--tui-shadow-sheet)',
};

// .shadow(2);
// @include shadow(2);
const MIXIN_RE = /(?:@include\s|\.)(shadow\(\d*\))(\s?!important)?;/g;

export function migrateShadowMixins(fileContent: string): string {
    if (!fileContent.includes('@taiga-ui/core/styles/taiga-ui-local')) {
        return fileContent;
    }

    return fileContent.replaceAll(
        MIXIN_RE,
        (_, mixin: keyof typeof MAPPING, important = '') =>
            `box-shadow: ${MAPPING[mixin]}${important};`,
    );
}
