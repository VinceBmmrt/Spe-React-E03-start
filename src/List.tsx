type ListProps = {
  // la propriété teachers va être un tableau contenant des chaines de caractères
  teachers: string[];
}
function List(props: ListProps) {
  return (
    <ul className="list">
      {/* Pour parcourir un tableau à afficher avec React, on va transformer ce tableau en élément JSX. On va donc utiliser le map */}
      {props.teachers.map((teacher) => (
        // Lorsque l'on map sur nos données pour les afficher
        // IL FAUT !!!! ajouter une propriété key sur notre élément JSX
        // Cette propriété doit être unique pour chaque élément JSX
        <li className="list__item" key={teacher}>
          {teacher}
        </li>
      ))}
    </ul>
  );
}

export default List;
