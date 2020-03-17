title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

//Bez formatowania
console.log(title + " " + name + " " + surname + "\n" + "ul. " + street + "\n" + zip + " " + city + "\n" + country.toUpperCase());

//Z formatowaniem
console.log(`${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country.toUpperCase()} `);


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/