const Card = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src="https://via.placeholder.com/300"
        className="rounded mb-3 hover:scale-105 transition"
      />
      <h3 className="font-bold text-lg mb-2">Card Title</h3>
      <p className="text-gray-600 mb-3">
        Simple Tailwind card component
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
};

export default Card;
