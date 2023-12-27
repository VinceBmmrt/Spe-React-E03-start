# Module

Permet de découper le code en plusieurs fichiers.
On avait l'habitude d'utilise la syntaxe "CommonJS", en React on va utiliser la syntaxe "Module / ESM".

## Export

Permet de rendre accessible des fonctions / données d'un fichier à un autre.

### Export nommé

#### CJS

```ts
const sayHello = () => console.log('Hello');

module.exports = {
  sayHello
}
// Ou
module.exports.sayHello = sayHello;
```

#### Module

```ts
export const sayHello = () => console.log('Hello');
```

### Export par défaut

#### CJS

```ts
const sayHello = () => console.log('Hello');
module.exports = sayHello;
```

#### Module

Il ne peut y avoir qu'un seul export par défaut par fichier.

```ts
const sayHello = () => console.log('Hello');
export default sayHello;
```

## Import

### Import nommé

#### CJS

```ts
const { sayHello } = require('./sayHello');
```

#### Module

Attention, il faut absolument qu'il y ai un export nommé

```ts
import { sayHello } from './sayHello';
```

### Import par défaut

#### CJS

```ts
const sayHello = require('./sayHello');
```

#### Module

Attention, il faut absolument qu'il y ai un export nommé

```ts
import sayHello from './sayHello';
```
