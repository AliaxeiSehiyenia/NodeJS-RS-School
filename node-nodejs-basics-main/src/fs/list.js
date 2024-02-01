import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, 'files');

const list = async () => {
    try {
        const fileNames = await fs.readdir(dirPath);
        fileNames.map((fileName) => console.log(fileName))
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();