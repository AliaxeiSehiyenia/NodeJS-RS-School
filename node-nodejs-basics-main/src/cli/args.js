const parseArgs = () => {
    const { argv } = process;
    const resultArr = [];

    argv.forEach((arg, index, arr) => {
        if (arg.startsWith("--")) {
            resultArr.push(`${arg.slice(2)} is ${arr[index + 1]}`);
        }
    });

    console.log(resultArr.join(", "));
};

parseArgs();