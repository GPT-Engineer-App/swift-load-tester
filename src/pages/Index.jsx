import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fascinating Feline Facts</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Cats have been domesticated for over 4,000 years.</li>
            <li>They can make over 100 different vocal sounds.</li>
            <li>A group of cats is called a "clowder".</li>
            <li>Cats spend 70% of their lives sleeping.</li>
            <li>They have an excellent sense of balance and flexible bodies.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Siamese", "Persian", "Maine Coon", "Bengal", "Sphynx"].map((breed) => (
              <div key={breed} className="bg-gray-100 p-3 rounded">
                {breed}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
