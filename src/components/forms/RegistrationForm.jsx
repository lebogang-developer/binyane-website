import { useState } from 'react'

export default function RegistrationForm({ programs }) {
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', grade:'Grade 4', programId:'', consent:false })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setForm(f => ({...f, [name]: type === 'checkbox' ? checked : value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // basic validation
    if (!form.firstName || !form.lastName || !form.phone || !form.programId) {
      setStatus({ type:'error', message:'Please fill required fields.' })
      return
    }
    setStatus({ type:'loading' })
    try {
      // For now, mock submit: simulate network
      await new Promise(r => setTimeout(r, 1000))
      // TODO: replace with real API call (fetch('/api/register', {method:'POST', body:JSON.stringify(form)}))
      setStatus({ type:'success', message:'Registration received. We will contact you with payment details.' })
      // reset or keep values as needed
    } catch (err) {
      setStatus({ type:'error', message:'Submission failed. Try again.' })
    }
  }

  return (
    <form className="space-y-4 p-4" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-3">
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Learner First name" className="input" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Learner Last name" className="input" />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <select name="grade" value={form.grade} onChange={handleChange} className="input">
          {Array.from({length:9}).map((_,i) => <option key={i}>{`Grade ${4+i}`}</option>)}
        </select>

        <select name="programId" value={form.programId} onChange={handleChange} className="input">
          <option value="">Select Program</option>
          {programs.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Parent / guardian phone" className="input" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="input" />
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
        <span className="text-sm">I agree to be contacted about this registration.</span>
      </label>

      <div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Submit Registration</button>
      </div>

      {status && <div className={`mt-2 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{status.message}</div>}
    </form>
  )
}
