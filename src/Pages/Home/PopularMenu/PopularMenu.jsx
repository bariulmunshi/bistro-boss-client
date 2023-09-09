import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  /* const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("menu.json")
        .then(res => res.json())
        .then(data => {
          const popularItems = data.filter(item => item.category === 'popular');
          setMenu(popularItems);
        });
    }, []); */
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>
    </section>
  );
};

export default PopularMenu;
