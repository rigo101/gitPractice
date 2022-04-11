const greet = (name, location) => console.log(name, location);

const count = birthDate => {
    const today = new Date();
    const year = today.getFullYear();
    console.log((year - birthDate) * 12);
};

greet('Grumpy Kittens', 'Moon');
count(2021);

const cheer = param => console.log(`Cheer for the ${param}`);
cheer('Cheese');
