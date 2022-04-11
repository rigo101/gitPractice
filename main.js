const greet = (name, location) => console.log(name, location);

const count = birthDate => {
    const today = new Date();
    const year = today.getFullYear();
    console.log((year - birthDate) * 12);
};

function future(param){
    console.log(`Your future looks like ${param}!`);
};

greet('Grumpy Kittens', 'Moon');
count(2021);
future('bright');
