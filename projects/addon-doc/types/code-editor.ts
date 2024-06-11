import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiCodeEditor {
    readonly content?: PolymorpheusContent;
    edit(component: string, id: string, files: Record<string, string>): Promise<void>;
    readonly name: string;
}
