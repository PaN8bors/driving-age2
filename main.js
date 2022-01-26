import input from 'input';

async function main() {
    const drivingAge = 16;
    const myAge = 58;
    const hasLicense = await input.confirm('Do you have your license?');

    if (myAge >= drivingAge && hasLicense) {
        console.log('You can drive!')
    } else {
        console.log('You cannot drive. \:\(')
    }


}

main();