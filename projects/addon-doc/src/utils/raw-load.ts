import {RawLoaderContent} from '../interfaces/page';

// TODO: delete it when all `!!raw-loader!` will be replaced by webpack `asset/source`.
function trimExportDefault(fileContent: string): string {
    return fileContent.startsWith('export default "')
        ? fileContent
              .replace(/^export\sdefault\s["']/gi, '')
              .replace(/['"];$/gi, '')
              .replaceAll('\\n', '\n')
              .replaceAll('\\"', '"')
        : fileContent;
}

/**
 * @deprecated: use {@link tuiRawLoad} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export async function rawLoad(content: RawLoaderContent): Promise<string> {
    const unpacked = content instanceof Promise ? (await content).default : content;

    return trimExportDefault(unpacked);
}

export const tuiRawLoad = rawLoad;
