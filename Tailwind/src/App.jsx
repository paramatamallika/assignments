import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center p-6">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold
                       bg-gradient-to-r from-purple-500 to-pink-500
                       text-transparent bg-clip-text mb-4">
          Tailwind with React
        </h2>

        <img
          src="https://via.placeholder.com/400"
          className="mx-auto rounded-lg shadow-lg hover:scale-105 transition"
        />
      </section>

      {/* Button */}
      <div className="text-center my-6">
        <Button />
      </div>

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      {/* Table */}
      <section className="p-6 overflow-x-auto">
        <Table />
      </section>

      {/* Contact Form */}
      <section className="p-6 max-w-md mx-auto">
        <Form />
      </section>
    </div>
  );
};

export default App;
