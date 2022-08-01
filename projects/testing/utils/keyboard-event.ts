export function tuiCreateKeyboardEvent(
    key: string,
    eventType: string = `keydown`,
): KeyboardEvent {
    const event = new KeyboardEvent(eventType, {bubbles: true});

    delete (event as any).target;
    Object.defineProperty(event, `type`, {value: eventType});

    delete (event as any).key;
    Object.defineProperty(event, `key`, {value: key});

    return event;
}
