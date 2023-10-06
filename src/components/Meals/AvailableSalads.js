import classes from "./AvailableSalads.module.css";
import SaladItem from "./SaladItem/SaladItem";
const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Greek Salad with Edamame",
      description: " Romaine, tomatoes, cucumber, feta and olives,etc (250 Kcal)",
      price: 50,
    },
    {
      id: "m2",
      name: "Paneer Tikka Veggie Delight",
      description: "Paneer Tikka,Roasted Root Veg,Tomato Salsa,etc (300 Kcal)",
      price: 55,
    },
    {
      id: "m3",
      name: "Mini Citrus Macaroni Salad",
      description: "Macaroni,Sweet-Corn,Black-Olives,Lettuce,Tri Bell-Peppers,etc (332 Kcal)",
      price: 50,
    },
    {
      id: "m4",
      name: "Mini Corn Cucumber Bean Salad",
      description: "Sweet Corn,Kidney Beans,Cucumber,Purple Cabbage,Jalapeno,etc (160 Kcal)",
      price: 20,
    },
  ];
const AvailableSalads = () =>{
    const mealsList = DUMMY_MEALS.map((meal) => (
        <SaladItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
         />

    ));
    return(
    <section className={classes.meals}>
        <ul>{mealsList}</ul>
    </section>
    );
    
};
export default AvailableSalads;