import { Award, Heart, Trophy } from 'lucide-react'
import PageHeader from '../components/PageHeader'

function About() {
  return (
    <div>
      <PageHeader title="About NKYEREPOASO M/A JHS" subtitle="Our story, vision, and mission" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-3">Our History</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nkyerepoaso M/A Junior High School is located at Nkyerepoaso in the Juaben Municipality, Ashanti Region. The school was established in September 1968 as a public school by the chief and elders of the town, with assistance from the Frederick Helbert Foundation, a Non-Governmental Organisation from Germany then residing at Ejisu Kwamo.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The school started with eighteen (18) pupils, made up of 12 boys and 6 girls. The community's main economic activities are peasant farming and petty trading, and Asante-Twi is the main language of communication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The school is situated along the Nkyerepoaso via Ofoase road, one of the small towns after Juaben Hospital, in the Ofoase Circuit of the Juaben Municipality. Digital Address: AE-1520-5508 | EMIS Code: 10606190009 | WAEC Code: 0543015.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h2 className="text-xl font-bold text-primary mb-3">Our Vision</h2>
            <p className="text-gray-700">
              To train the students to be self-disciplined and morally upright, skillful and useful citizens with the requisite skills to help them live independent lives in the future.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
            <h2 className="text-xl font-bold text-primary mb-3">Our Mission</h2>
            <p className="text-gray-700">
              Nkyerepoaso M/A J.H.S. is expected to be one of the best schools in the Juaben Municipality in Academics, Sports, Culture and Moral discipline.
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Objectives</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-cream rounded-lg">
              <Award className="mx-auto mb-3 text-primary" size={36} />
              <h3 className="font-semibold text-gray-800">Honor</h3>
            </div>
            <div className="text-center p-6 bg-cream rounded-lg">
              <Heart className="mx-auto mb-3 text-primary" size={36} />
              <h3 className="font-semibold text-gray-800">Pride</h3>
            </div>
            <div className="text-center p-6 bg-cream rounded-lg">
              <Trophy className="mx-auto mb-3 text-primary" size={36} />
              <h3 className="font-semibold text-gray-800">Success</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About