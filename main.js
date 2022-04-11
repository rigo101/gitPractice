const count = birthDate => {
    const today = new Date();
    const year = today.getFullYear();
    console.log((year- birthDate)*12)
};

const greet = name => console.log(name);

greet('Grumpy Cat');
count(2021);
