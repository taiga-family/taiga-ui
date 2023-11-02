import {ReplacementIdentifier} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifier[] = [
    {
        from: {name: `TuiCardModule`, moduleSpecifier: `@taiga-ui/addon-commerce`},
        to: {name: `TuiThumbnailCardModule`, moduleSpecifier: `@taiga-ui/addon-commerce`},
    },
    {
        from: {name: `TuiCardComponent`, moduleSpecifier: `@taiga-ui/addon-commerce`},
        to: {
            name: `TuiThumbnailCardComponent`,
            moduleSpecifier: `@taiga-ui/addon-commerce`,
        },
    },
    {
        from: {name: `TuiBadgeModule`, moduleSpecifier: `@taiga-ui/experimental`},
        to: {name: `TuiBadgeModule`, moduleSpecifier: `@taiga-ui/kit`},
    },
    {
        from: {name: `TuiCheckboxModule`, moduleSpecifier: `@taiga-ui/experimental`},
        to: {name: `TuiCheckboxModule`, moduleSpecifier: `@taiga-ui/kit`},
    },
    {
        from: {name: `TuiRadioModule`, moduleSpecifier: `@taiga-ui/experimental`},
        to: {name: `TuiRadioModule`, moduleSpecifier: `@taiga-ui/kit`},
    },
    {
        from: {name: `TuiToggleModule`, moduleSpecifier: `@taiga-ui/experimental`},
        to: {name: `TuiToggleModule`, moduleSpecifier: `@taiga-ui/kit`},
    },
    {
        from: {name: `TuiTextAreaModule`, moduleSpecifier: `@taiga-ui/kit`},
        to: {name: `TuiTextareaModule`, moduleSpecifier: `@taiga-ui/kit`},
    },
    {
        from: {name: `TuiTextAreaDirective`, moduleSpecifier: `@taiga-ui/kit`},
        to: {name: `TuiTextareaDirective`, moduleSpecifier: `@taiga-ui/kit`},
    },
    {
        from: {name: `TuiTextAreaComponent`, moduleSpecifier: `@taiga-ui/kit`},
        to: {name: `TuiTextareaComponent`, moduleSpecifier: `@taiga-ui/kit`},
    },
];
