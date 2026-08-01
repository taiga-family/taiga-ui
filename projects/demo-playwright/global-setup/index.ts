import {downloadFonts} from './download-fonts';

export default async function globalSetup(): Promise<void> {
    await downloadFonts(
        'https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap',
    );
}
