import { Link } from 'react-router-dom';
import staffImage from '../assets/binyane-staff.jpg'; // 🖼️ replace with your actual file name

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden'>
        {/* Text Content */}
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Welcome to Binyane Private Tutoring Program
          </h1>
          <p className='text-lg mb-8'>
            We bring together experienced teachers from different schools to
            provide quality after-school tutoring for learners from primary to
            secondary levels.
          </p>
          <Link
            to='/programs'
            className='bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition'
          >
            View Programs
          </Link>
        </div>

        {/* Hero Image */}
        <div className='md:w-1/2 flex justify-center'>
          <img
            src={staffImage}
            alt='Binyane Staff'
            className='rounded-xl shadow-lg w-full max-w-md object-cover'
          />
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-6 md:px-16 text-center md:text-left bg-white'>
        <h2 className='text-3xl font-semibold mb-4 text-blue-700'>
          About Binyane
        </h2>
        <p className='max-w-3xl mx-auto md:mx-0 text-gray-600 mb-6'>
          Binyane offers personalized after-school tutoring programs designed to
          support learners’ academic growth and confidence. Our team of
          qualified educators work with small groups and individuals to
          strengthen core subjects such as Mathematics, Science, and Languages.
        </p>
        <Link
          to='/about'
          className='inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition'
        >
          Learn More
        </Link>
      </section>

      {/* Programs Preview */}
      <section className='py-16 px-6 md:px-16 bg-gray-100 text-center'>
        <h2 className='text-3xl font-semibold mb-8 text-blue-700'>
          Our Programs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold mb-2 text-blue-700'>
              Primary School Support
            </h3>
            <p className='text-gray-600'>
              Helping young learners build strong foundations in reading,
              writing, and mathematics.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold mb-2 text-blue-700'>
              High School Tutoring
            </h3>
            <p className='text-gray-600'>
              Focused subject tutoring and exam preparation for secondary
              learners.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold mb-2 text-blue-700'>
              Weekend & Holiday Classes
            </h3>
            <p className='text-gray-600'>
              Extra sessions to help learners catch up or get ahead in key
              subjects.
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Link
            to='/programs'
            className='bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition'
          >
            View All Programs
          </Link>
        </div>
      </section>

      {/* Testimonials / Achievements */}
      <section className='py-16 px-6 md:px-16 bg-white text-center'>
        <h2 className='text-3xl font-semibold mb-8 text-blue-700'>
          What Parents Say
        </h2>
        <p className='max-w-2xl mx-auto text-gray-600 italic'>
          “Binyane helped my child gain confidence in Mathematics and English.
          The teachers are patient and professional!”
        </p>
        <p className='mt-4 font-semibold text-blue-700'>– Parent</p>

        <div className='mt-12 flex flex-col md:flex-row justify-center gap-8 text-center'>
          <div>
            <h3 className='text-2xl font-bold text-blue-700'>100+</h3>
            <p className='text-gray-600'>Learners Tutored</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-blue-700'>10+</h3>
            <p className='text-gray-600'>Qualified Tutors</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-blue-700'>5+</h3>
            <p className='text-gray-600'>Subjects Covered</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-16 px-6 md:px-16 bg-blue-700 text-white text-center'>
        <h2 className='text-3xl font-semibold mb-4'>
          Need Help with Your Studies?
        </h2>
        <p className='text-lg mb-8'>
          Join Binyane today and unlock your full learning potential.
        </p>
        <Link
          to='/contact'
          className='bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition'
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
