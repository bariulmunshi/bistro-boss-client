import FoodCart from "../../../components/FoodCart/FoodCart";

const OrderTab = ({ items }) => {
  return (
    <div className="grid p-4 md:grid-cols-3 gap-10">
      {items.map((item) => (
        <FoodCart key={item._id} item={item}></FoodCart>
      ))}
    </div>
  );
};

export default OrderTab;
