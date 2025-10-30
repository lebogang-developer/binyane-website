import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-white to-indigo-50">
      <div className="container mx-auto p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Quality After-School Support for Primary & Secondary Learners</h2>
          <p className="mt-4 text-gray-700">Tailored classes in Maths, English, Sciences and more — small groups, experienced tutors, and flexible schedules.</p>
          <div className="mt-6 flex gap-4">
            <Link to="/register" className="px-5 py-2 bg-indigo-600 text-white rounded-md">Register</Link>
            <Link to="/programs" className="px-5 py-2 border rounded-md">View Programs</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="Binyane logo" className="h-48 w-48 object-contain" />
        </div>
      </div>
    </section>
  )
}
 export default Hero;