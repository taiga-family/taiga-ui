export const DEPRECATED_BREAKPOINTS = [
    // all previously actual breakpoints
    {from: '@media-retina', to: '@tui-media-retina'},
    {from: '@media-retina-mobile', to: '@tui-media-retina-mobile'},
    {from: '@media-retina-tablet', to: '@tui-media-retina-tablet'},
    {from: '@media-retina-desktop', to: '@tui-media-retina-desktop'},
    {from: '@mobile-m', to: '@tui-mobile'},
    {from: '@mobile-m-min', to: '@tui-mobile-min'},
    {from: '@mobile-m-interval', to: '@tui-mobile-interval'},
    {from: '@tablet-lg', to: '@tui-tablet'},
    {from: '@tablet-lg-min', to: '@tui-tablet-min'},
    {from: '@tablet-lg-interval', to: '@tui-tablet-interval'},
    {from: '@desktop-s', to: '@tui-desktop'},
    {from: '@desktop-s-min', to: '@tui-desktop-min'},
    {from: '@desktop-s-interval', to: '@tui-desktop-interval'},
    {from: '@desktop-m-min', to: '@tui-desktop-lg-min'},

    // legacy breakpoints
    {from: '@mobile', to: '@tui-mobile'},
    {from: '@mobile-min', to: '@tui-mobile-min'},
    {from: '@mobile-interval', to: '@tui-mobile-interval'},
    {from: '@tablet-s', to: '@tui-mobile'},
    {from: '@tablet-s-min', to: '@tui-mobile-min'},
    {from: '@tablet-s-interval', to: '@tui-mobile-interval'},
    {from: '@tablet', to: '@tui-tablet'},
    {from: '@tablet-min', to: '@tui-tablet-min'},
    {from: '@tablet-interval', to: '@tui-tablet-interval'},
    {from: '@desktop', to: '@tui-desktop'},
    {from: '@desktop-min', to: '@tui-desktop-min'},
    {from: '@desktop-interval', to: '@tui-desktop-interval'},
    {from: '@desktop-lg-min', to: '@tui-desktop-lg-min'},
] as const;
