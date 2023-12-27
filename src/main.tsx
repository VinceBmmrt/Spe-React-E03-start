import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Avec ReactDom, on va pouvoir injecter notre application React dans le DOM
ReactDOM
  // React va récupérer l'élément avec l'id root
  .createRoot(document.getElementById('root')!)
  // Il injecte dedans notre application React
  // Je lance le rendu du composant App dans le DOM
  .render(<App />)
