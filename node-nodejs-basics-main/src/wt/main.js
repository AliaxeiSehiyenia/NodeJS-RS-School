import path from 'path';
import os from 'os';
import {fileURLToPath} from 'url';
import {Worker} from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);

const workerPath = path.join(__dirname, 'worker.js');
const cpuCount = os.cpus().length;
const START_NUMBER = 10;

const performCalculations = async () => {
    const createWorker = (workerData) => new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {workerData});
        worker.on('message', resolve);
        worker.on('error', reject);
    });

    const workersArr = Array.from(Array(cpuCount))
        .map((_, i) => createWorker(START_NUMBER + i));
    const resultPromises = await Promise.allSettled(workersArr);

    const resultWorkers = resultPromises.map((res) => {
        if (res.status === 'fulfilled') {
            return {status: 'resolved', value: res.value};
        } else {
            return {status: 'error', value: null};
        }
    });
    console.log(resultWorkers);
};

await performCalculations();