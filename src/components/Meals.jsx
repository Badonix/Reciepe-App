import { useGlobalContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";
const Meals = () => {
  const { loading, meals } = useGlobalContext();
  if (loading) {
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>We can't find such a meal</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;

        return (
          <article key={idMeal} className="single-meal">
            <img className="img" src={image} />
            <footer className="ftr">
              <h4>{title}</h4>
              <button className="like-btn">
                <AiOutlineHeart />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};
export default Meals;
