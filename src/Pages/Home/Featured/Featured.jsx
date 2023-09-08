import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-section bg-fixed text-white pt-8 my-20">
          <SectionTitle
          subHeading="Check it out"
          heading="Featured Items"
          ></SectionTitle>
          <div className="md:flex  justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
          <p>Aug 30,2032</p>
          <p className="uppercase">Where can I get some? </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem amet fugit quaerat modi, distinctio sunt obcaecati repellat aut. Praesentium possimus esse sit nulla rem harum beatae quos error velit! Doloribus explicabo tempore numquam eum, esse tempora architecto voluptatum eaque sed saepe corrupti deleniti harum dignissimos. Laudantium, rem? Autem, tempore eveniet!</p>
          <button className="btn btn-outline border-0 border-b-4  mt-4">Order Now</button>
          </div>
          </div>
        </div>
    );
};

export default Featured;