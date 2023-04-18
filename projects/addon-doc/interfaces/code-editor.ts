import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiCodeEditor {
    readonly name: string;
    readonly content?: PolymorpheusContent;
    edit(component: string, id: string, files: Record<string, string>): Promise<void>;
}
