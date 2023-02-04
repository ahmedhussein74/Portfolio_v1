import '../css/Square.css'

const Square = () => {
  return (
    <div>
      <ul className="circles w-full h-full absolute overflow-hidden top-0 left-0">
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
        <li className="absolute block list-none"></li>
      </ul>
    </div>
  );
};

export default Square;
