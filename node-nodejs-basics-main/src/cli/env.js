const parseEnv = () => {
    const args = process.env;
    const resultArr = [];

    for (let key in args) {
        if (key.startsWith('RSS_')) {
            resultArr.push(`${key}=${args[key]}`);
        }
    }

    console.log(resultArr.join('; '));
};

parseEnv();