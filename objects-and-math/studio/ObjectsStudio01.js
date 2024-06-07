// Code your selectRandomEntry function here:
function selectRandomEntry(array) {
  let index = Math.floor(Math.random() * array.length);
  return array.splice(index, 1)[0];
}

function randomlySelectedIds(array) {
  let idsSelected = [];

  while (idsSelected.length < 3) {
    let randomId = selectRandomEntry(array);
    idsSelected.push(randomId);
  }
  return idsSelected;
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let idsSelected = randomlySelectedIds(idNumbers);
console.log(idsSelected);


// Code your buildCrewArray function here:

function buildCrewArray(idsSelected, animals) {
  let crew = [];
  for (let i = 0; i < idsSelected.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      if (idsSelected[i] === animals[j].astronautID) {
        crew.push(animals[j]);
      }
    }
  }
  return crew;
}





// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};


// Code your template literal and console.log statements:
let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
let crew = buildCrewArray(idsSelected, animals);

console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);
