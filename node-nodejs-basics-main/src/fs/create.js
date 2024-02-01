import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await fs.appendFile(filePath, 'I am fresh and young', {flag: 'wx'}, (error, data) => {
            console.log('file created')
        });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();