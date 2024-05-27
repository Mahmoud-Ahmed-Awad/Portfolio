function Skill(props) {
  return (
    <div className="w-32 h-46 p-3 shadow-2xl duration-500 hover:scale-110">
      <img src={props.logo} alt={`${props.title} Logo`} className="w-28" />
      <h3 className="text-xl text-center font-bold mt-3 text-white">
        {props.title}
      </h3>
    </div>
  );
}

export default Skill;
