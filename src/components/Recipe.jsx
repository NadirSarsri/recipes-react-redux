const Recipe = ({ recipe }) => {
  return (
    <article className="col">
      <div className="card shadow-sm">
        <img
          src={recipe.imageUrl}
          alt={recipe.description}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">{recipe.title}</h4>
          <p className="card-text">{recipe.description}</p>
          <h5 className="card-subtitle text-muted">{`Preparation time: ${recipe.preparationTime} min`}</h5>
          <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ingredient) => (
              <li
                className="list-group-item"
                key={ingredient.id}
              >{`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
