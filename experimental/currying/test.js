const species = [
{name: "Tim", type: "human"},
{name: "Tom", type: "human"},
{name: "OG", type: "alien"}
]

const isTypeOf = (type, species) => type === species.type

const onlyHuman = species.filter(currentSpecies => isTypeOf('human', currentSpecies))

console.log(onlyHuman);
