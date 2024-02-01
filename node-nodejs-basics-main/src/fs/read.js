import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const data = await fs.readFile(filePath, {encoding: 'utf-8'});
        console.log(data)
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();