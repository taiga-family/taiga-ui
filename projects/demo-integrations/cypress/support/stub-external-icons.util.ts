// not taiga ui icons
export const EXTERNAL_ICONS = ['web-api.svg'];

export const stubExternalIcons = (icons: string[] = EXTERNAL_ICONS): void => {
    icons.forEach(iconName => {
        cy.intercept(
            {
                method: 'GET',
                url: new RegExp(`.*${iconName}`),
            },
            {fixture: `stubs/${iconName}`},
        );
    });
};
