const ProgramCard = ({program}) => {
  // program: { id, title, subjects, grades, days, time, price }
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="font-semibold">{program.title}</h3>
      <p className="text-sm text-gray-600">{program.subjects.join(', ')}</p>
      <p className="mt-2 text-sm">Grades: {program.grades}</p>
      <p className="text-sm">When: {program.days} · {program.time}</p>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-lg font-bold">R{program.price}</div>
        <a href={`/register?program=${program.id}`} className="px-3 py-1 bg-indigo-600 text-white rounded">Register</a>
      </div>
    </div>
  )
}

export default ProgramCard;