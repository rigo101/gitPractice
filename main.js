const greet = name => console.log(name);

const count = birthDate => {
    const today = new Date();
    const year = today.getFullYear();
    console.log((year - birthDate) * 12);
};


greet('Grumpy Cats');
count(2021);
