const commandLineArgs = process.argv.slice(2);
console.log(commandLineArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(commandLineArgs);