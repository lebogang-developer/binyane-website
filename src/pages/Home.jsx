import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-blue-50 min-h-screen'>
      {/* Hero Section */}
      <section className='text-center py-16 px-6'>
        <h1 className='text-4xl font-bold text-blue-700'>
          Welcome to Binyane Private Tutoring Program
        </h1>
        <p className='text-gray-700 mt-4 max-w-2xl mx-auto'>
          Offering after-school programs and private tutoring for learners from
          Primary to Secondary school — helping each learner reach their full
          potential.
        </p>
        <Link to='/programs'>
          <button className='bg-blue-600 text-white mt-5 px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition'>
            View Programs
          </button>
        </Link>
      </section>
      {/* About Section */}
      <section className='bg-white py-10 px-6 text-center'>
        <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
          Our Mission
        </h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          At Binyane, we provide quality after-school programs focused on
          academic excellence, confidence building, and personalized learning.
          Our team of dedicated tutors helps learners improve performance in
          subjects like Mathematics, English, Sciences, and more.
        </p>
      </section>
      {/*  */}
    </div>
  );
};

export default Home;
