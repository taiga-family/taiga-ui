import"./chunk-HU6DUUP4.js";var s=`tui-loader {
    min-inline-size: 3.5rem;

    &:nth-child(1) {
        /**
        Don't use \`rem\` units if you support Safari.
        Safari doesn't support \`rem\` units for \`stroke-*\` properties of \`<circle />\`.
        Use \`em\` units => they will be interpreted as \`rem\` ones
        (\`<circle />\` has \`font-size: 1rem\`).
        Or just use simple \`px\` units.
        */
        --tui-thickness: 0.125em;
    }

    &:nth-child(2) {
        --tui-thickness: 0.25rem;
    }

    &:nth-child(3) {
        --tui-thickness: 0.5rem;
    }
}

:host {
    display: flex;
    gap: 2rem;
}
`;export{s as default};
