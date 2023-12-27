// Pour paramétrer nos composants en React, on va définir des propriétés
// Un composant en React n'a QU'UN SEUL paramétre : props
// Ce paramètre EST un objet
// En TypeScript on DOIT typer les paramètres des fonctions
// Je vais définir un type (un contrat à respecter)
type CounterProps = {
  // dans mes props, j'ai une propriété nbTeachers qui est un nombre
  nbTeachers: number;
}

// mon paramètre props doit respecter le contrat CounterProps
function Counter(props: CounterProps) {
  return (<div>Counter {props.nbTeachers}</div>)
}

export default Counter;
