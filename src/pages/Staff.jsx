import PageHeader from '../components/PageHeader'

function Staff() {
  const staff = [
    { name: 'Mrs. Eunice Dankwah', role: 'Headteacher' },
    { name: 'Mr. Samuel Addai', role: 'Assistant Headteacher' },
    { name: 'Mr. Isaac Mfum', role: 'Teacher' },
    { name: 'Mr. Kofi Adu', role: 'Teacher' },
    { name: 'Mr. Joseph Somuah Kyereh', role: 'Teacher' },
  ]

  return (
    <div>
      <PageHeader title="Administration & Staff" subtitle="The school currently has 5 dedicated teachers" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {staff.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition">
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center text-primary font-bold text-xl">
                {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-secondary text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Staff