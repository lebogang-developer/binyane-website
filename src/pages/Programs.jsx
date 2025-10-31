const Programs = () => {
  return (
    <section className='py-10 px-6 bg-blue-50 text-center'>
      <h2 className='text-2xl font-semibold text-blue-700 mb-8'>
        Our Programs
      </h2>
      <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
        {[
          {
            title: 'Mathematics',
            desc: 'Improve problem-solving and exam readiness.',
          },
          {
            title: 'English',
            desc: 'Enhance reading, writing, and comprehension skills.',
          },
          {
            title: 'Science',
            desc: 'Explore concepts through fun and practical learning.',
          },
        ].map((program, index) => (
          <div key={index} className='bg-white shadow-md p-6 rounded-lg'>
            <h3 className='text-xl font-semibold text-blue-600 mb-2'>
              {program.title}
            </h3>
            <p className='text-gray-600'>{program.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
