/**
 * @description:
 * This converter help you to painlessly migrate old tags to the tui-editor[new]
 */
export function tuiLegacyEditorConverter(content: string): string {
    const tree = new DOMParser().parseFromString(content, `text/html`);

    migration(tree.body);

    return tree.body.innerHTML;
}

function migration(element: Element): void {
    for (const child of Array.from(element.children)) {
        if (child.children.length) {
            migration(child);
        }

        if (child.tagName === `FONT`) {
            if (child.hasAttribute(`size`)) {
                switch (child.getAttribute(`size`)) {
                    case `6`: {
                        migrateHeading(`h1`, child);
                        break;
                    }
                    case `5`: {
                        migrateHeading(`h2`, child);
                        break;
                    }

                    case `4`: {
                        migrateParagraph(`17px`, child);
                        break;
                    }

                    case `3`: {
                        migrateParagraph(`15px`, child);
                        break;
                    }

                    case `2`: {
                        migrateParagraph(`13px`, child);
                        break;
                    }
                }
            } else if (child.hasAttribute(`color`)) {
                migrateFontHighlight(child);
            }
        }
    }
}

function migrateHeading(selector: string, element: Element): void {
    const heading = document.createElement(selector);

    heading.innerHTML = element.innerHTML;

    if (element.parentElement?.tagName === `P`) {
        const newRef = element.parentElement?.parentElement?.insertBefore(
            heading,
            element.parentElement,
        );

        element.parentElement?.removeChild(element);

        if (newRef?.nextSibling && !newRef?.nextSibling?.textContent?.trim()) {
            newRef.nextSibling?.parentElement?.removeChild(newRef.nextSibling);
        }
    } else {
        element.parentElement?.replaceChild(heading, element);
    }
}

function migrateParagraph(fontSize: string, element: Element): void {
    const p = document.createElement(`p`);
    const span = document.createElement(`span`);

    span.setAttribute(`style`, `font-size: ${fontSize}`);
    span.innerHTML = element.innerHTML;
    p.append(span);

    element.parentElement?.replaceChild(
        element.parentElement.tagName === `P` ? span : p,
        element,
    );
}

function migrateFontHighlight(element: Element): void {
    const span = document.createElement(`span`);

    span.setAttribute(`style`, `color: ${element.getAttribute(`color`)}`);
    span.innerHTML = element.innerHTML;
    element.parentElement?.replaceChild(span, element);
}
