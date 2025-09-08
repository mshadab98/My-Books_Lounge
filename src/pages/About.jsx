
const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">

      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1470&q=80')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[-1px]"></div>

        {/* Caption */}
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About My Book Store
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Connecting readers with stories, knowledge, and inspiration through every book.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-12">
          At My Book Store, our passion is reading. We carefully curate a variety of books—from bestsellers to hidden gems—to make sure our readers always have something exciting to explore. Our goal is to create a seamless experience for every book lover.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Mission</h3>
            <p className="text-gray-700">
              To make books accessible to everyone and nurture a lifelong love of reading through a clean, user-friendly platform.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Vision</h3>
            <p className="text-gray-700">
              To become a trusted destination for book lovers worldwide, inspiring learning, entertainment, and creativity with every book.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300">
            Explore Books
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-200"></div>
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-200"></div>
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-gray-600">Content Curator</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-200"></div>
              <h3 className="text-xl font-semibold text-gray-900">Mike Johnson</h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
