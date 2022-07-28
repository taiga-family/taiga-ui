export const defaultEditorExtensions = [
    import(`@taiga-ui/addon-editor/extensions/starter-kit`)
        .then(({StarterKit}) => StarterKit)
        .then(extension => extension.configure({heading: {levels: [1, 2]}})),
    import(`@tiptap/extension-text-align`).then(m =>
        m.default.configure({types: [`heading`, `paragraph`]}),
    ),
    import(`@tiptap/extension-text-style`).then(m => m.default),
    import(`@tiptap/extension-underline`).then(m => m.default),
    import(`@tiptap/extension-subscript`).then(m => m.default),
    import(`@tiptap/extension-superscript`).then(m => m.default),
    import(`./font-color`).then(m => m.FontColor),
    import(`@tiptap/extension-image`).then(m => m.default.configure({inline: true})),
    import(`@tiptap/extension-link`).then(m => m.default.configure({openOnClick: false})),
    import(`./background-color`).then(m => m.BackgroundColor),
    import(`@tiptap/extension-table`).then(m =>
        m.default.configure({resizable: true, lastColumnResizable: false}),
    ),
    import(`@tiptap/extension-table-row`).then(m => m.default),
    import(`@tiptap/extension-table-cell`).then(m => m.default),
    import(`@tiptap/extension-table-header`).then(m => m.TableHeader),
    import(`./indent-outdent`).then(m => m.Indent),
    import(`./table-cell-background`).then(m => m.TableCellBackground),
    import(`@taiga-ui/addon-editor/extensions/details`).then(m => m.TuiDetailsContent),
    import(`@taiga-ui/addon-editor/extensions/details`).then(m => m.TuiDetails),
    import(`@taiga-ui/addon-editor/extensions/details`).then(m => m.TuiSummary),
    import(`@taiga-ui/addon-editor/extensions/font-size`).then(
        ({TuiFontSize}) => TuiFontSize,
    ),
];
