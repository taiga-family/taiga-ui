type Writeable<T> = {-readonly [P in keyof T]?: T[P]};

export function tuiCreateKeyboardEvent(
    key: string,
    eventType = 'keydown',
): KeyboardEvent {
    const event = new KeyboardEvent(eventType, {bubbles: true});

    delete (event as Writeable<Event>).target;
    Object.defineProperty(event, 'type', {value: eventType});

    delete (event as Writeable<KeyboardEvent>).key;
    Object.defineProperty(event, 'key', {value: key});

    return event;
}
