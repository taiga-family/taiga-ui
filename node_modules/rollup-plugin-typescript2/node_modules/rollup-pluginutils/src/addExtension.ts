import { extname } from 'path';

export default function addExtension(filename: string, ext: string = '.js'): string {
	if (!extname(filename)) filename += ext;
	return filename;
}
