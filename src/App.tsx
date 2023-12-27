import './App.css'
import Counter from './Counter'
import Form from './Form'
import List from './List'

// Un composant en React est une fonction qui retourne du JSX
// JSX === HTML survitaminé (on va pouvoir écrire du JS dans du HTML)
function App() {
  const user = {
    firstname: 'Romain',
  }

  // On retourne du JSX
  return (
    // On peut utiliser un fragment qui permet de ne pas avoir de div inutile dans le DOM tout en respectant la contrainte du JSX qui est d'avoir obligatoirement un élément englobant
    <>
      <div>
        {/* Pour injecter du js dans le jsx, on utilise des {} */}
        Hello {user.firstname}
      </div>
      <Form />
      {/* Pour passé des propriétés, on fait comme si on utiliser des attributs HTML */}
      {/* nbTeachers est ma propriété, ça valeur est 15 */}
      {/* J'utilise des {} pour les valeurs de mes propriétés lorsqu'elles sont passé avec des variables ou si elle ne sont pas des chaines de caractère */}
      <Counter nbTeachers={15} />
      <List teachers={['Fabien', 'Quentin', 'Solène', 'Cécile']} />
    </>
  )
}

export default App
