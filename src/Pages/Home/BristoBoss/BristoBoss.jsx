import img from "../../../assets/home/chef-service.jpg";
const BristoBoss = () => {
    
  return (
    <div
      className="py-40 px-24 h-full w-full bg-contain bg-no-repeat bg-fixed "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="py-12 px-6 bg-white">
        <h1 className="text-center text-3xl">Bistro Boss</h1>
        <p className="text-center text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BristoBoss;
