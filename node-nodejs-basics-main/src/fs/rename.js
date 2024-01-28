import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fs.copyFile(sourceFilePath, newFilePath, fs.constants.COPYFILE_EXCL);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();