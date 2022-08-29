let datatypeArray = [true, 'string', 23];

// Antall elementer i arrayen
console.log(datatypeArray.length);

datatypeArray.push('legger til denne stringen');

console.log(datatypeArray.pop()); // Fjerner siste element og returnerer fjernet element

// Antall elementer i arrayen
console.log(datatypeArray.length);

const liste = [56, 43, 72, 61];

liste.forEach((element) => {console.log(2 * element);});

const liste2 = [56, 26, 43, 72, 61, 3, 19];
console.log(liste2);
const shift = liste2.slice();
console.log(shift);
const lastValue = liste2[liste2.length - 1];
console.log(lastValue);
console.log(liste2);

const obj = {
    key: 'value',
    anotherKey: 1337,
    nested: {
      keyOne: true,
      keyTwo: false,
    },
};

let btn = document.querySelector('button');

// 'click' er event vi lytter etter
btn.addEventListener('click', () => {
  // Det som skal skje når knappen er trykket
  console.log('Knapp trykket');
  // Henter HTML-element
    let saveBtn = document.querySelector('.btn-save');

    // Endrer bakgrunnsfargen til sort
    saveBtn.style.backgroundColor = '#000';
});



const id = document.getElementById("id")

console.log(id.classList) // ["one", "two", "three"]

id.classList.add("four"); // ["one", "two", "three", "four"]
console.log(id.classList);
id.classList.remove("one", "two"); // ["three", "four"]
console.log(id.classList);

document.getElementById("testP").innerHTML = "lo";