import {DEMO_PATHS} from '../demo-paths';
import {EXAMPLE_ID} from '../shared.entities';
import {excluded} from './exclusions';

// not taiga ui icons
const EXTERNAL_ICONS = ['web-api.svg'];

const stubExternalIcons = (icons: string[]): void => {
    icons.forEach(iconName => {
        cy.intercept(
            {
                method: 'GET',
                url: new RegExp(`.*${iconName}`),
            },
            {fixture: `icons-stubs/${iconName}`},
        );
    });
};

const stubAllDemoAssets = (): void => {
    cy.intercept(
        {
            method: 'GET',
            url: new RegExp(`https://taiga-ui.dev/next/assets.*`),
        },
        req => {
            req.url = req.url.replace(
                'https://taiga-ui.dev/next',
                'http://localhost:3333',
            );

            req.continue();
        },
    );
};

describe('Demo', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    DEMO_PATHS.forEach(path => {
        it(`${path}`, () => {
            stubExternalIcons(EXTERNAL_ICONS);
            stubAllDemoAssets();

            cy.goToDemoPage(path);

            cy.get('[tuidocheader]').invoke(
                'attr',
                'style',
                'position: absolute !important',
            );

            cy.getByAutomationId(EXAMPLE_ID).each((sample, index) => {
                if (excluded(path, index + 1)) {
                    return cy.wrap(sample);
                }

                return cy
                    .wrap(sample)
                    .scrollIntoView({offset: {top: 64, left: 0}})
                    .wait(100)
                    .matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    });
});
