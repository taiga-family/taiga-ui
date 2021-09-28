export function getChildrenByParent(parent: HTMLElement | null): HTMLElement[] {
    return Array.from(parent?.children || []) as unknown as HTMLElement[];
}
