import React from 'react'



export default function TherapiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-100 to-emerald-100 text-gray-800 font-sans pb-12">
      

      <header className="pt-28 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 tracking-wide drop-shadow">Therapies</h1>
        <p className="mt-3 text-lg text-emerald-900 max-w-2xl mx-auto">
          Traditional and modern therapeutic offerings — Panchakarma, Physiotherapy, and a
          curated set of complementary services for complete wellness.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Panchakarma & Physiotherapy Row */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Panchakarma Card */}
          <article className="bg-white rounded-2xl shadow-md border border-emerald-100 hover:shadow-xl transition p-6 flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/panchakarma.jpg"
                alt="Panchakarma therapy"
                className="w-full md:w-1/2 h-52 object-cover rounded-xl shadow-sm"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-emerald-700 mb-2">Panchakarma</h2>
                <p className="text-gray-700 mb-4 text-sm">
                  Panchakarma is a classical Ayurvedic detoxification and rejuvenation protocol.
                  It aims to cleanse deep-seated toxins, restore doshic balance and strengthen the
                  body's natural immunity.
                </p>

                <ul className="text-emerald-900 text-sm list-disc list-inside space-y-2 mb-4">
                  <li><strong>Consultation & Assessment:</strong> Personalized evaluation before therapies.</li>
                  <li><strong>Pre-treatment (Snehana & Swedana):</strong> Oil therapies & steam to prepare the tissues.</li>
                  <li><strong>Detox Procedures:</strong> Vamana (emesis), Virechana (purgation), Basti (medicated enemas), Nasya (nasal therapy), Raktamokshana (bloodletting where indicated).</li>
                  <li><strong>Post-treatment Care:</strong> Diet, lifestyle counseling and rejuvenation therapies.</li>
                </ul>

                <p className="text-gray-600 text-sm">
                  Typical duration: <span className="font-medium">7–21 days</span> depending on the
                  individual's condition. Panchakarma should be performed under the guidance of an
                  experienced practitioner.
                </p>

                <div className="mt-4">
                  <button className="inline-block mt-2 bg-emerald-700 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-emerald-600 transition">
                    Book Panchakarma
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Physiotherapy Card */}
          <article className="bg-white rounded-2xl shadow-md border border-emerald-100 hover:shadow-xl transition p-6 flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/physio.jpg"
                alt="Physiotherapy session"
                className="w-full md:w-1/2 h-52 object-cover rounded-xl shadow-sm"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-emerald-700 mb-2">Physiotherapy</h2>
                <p className="text-gray-700 mb-4 text-sm">
                  Evidence-based physiotherapy for pain relief, mobility restoration, and functional
                  rehabilitation. Our therapists use manual therapy, therapeutic exercises and
                  electrotherapy modalities when required.
                </p>

                <ul className="text-emerald-900 text-sm list-disc list-inside space-y-2 mb-4">
                  <li><strong>Orthopaedic Rehab:</strong> Post-op recovery, joint pain, sports injuries.</li>
                  <li><strong>Neurological Rehab:</strong> Stroke, Parkinson's support, nerve injuries.</li>
                  <li><strong>Pain Management:</strong> Back pain, neck pain, chronic pain syndromes.</li>
                  <li><strong>Functional Training:</strong> Balance, gait training and ergonomic advice.</li>
                </ul>

                <p className="text-gray-600 text-sm">
                  Sessions are tailored — typically <span className="font-medium">30–60 minutes</span>
                  with progressive plans and home exercise programs for best outcomes.
                </p>

                <div className="mt-4">
                  <button className="inline-block mt-2 bg-emerald-700 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-emerald-600 transition">
                    Book Physiotherapy
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* All Other Services */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Other Services</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Herbal Consultations",
                desc: "Personalized herbal plans and formulations based on traditional systems.",
                img: "/herbal.jpg",
              },
              {
                title: "Yoga Therapy",
                desc: "Therapeutic yoga sessions for flexibility, breathwork and mental balance.",
                img: "/yoga.jpg",
              },
              {
                title: "Diet & Nutrition",
                desc: "Personalized nutrition plans aligned with seasonal and constitutional needs.",
                img: "/nutrition2.jpg",
              },
              {
                title: "Homeopathy Consult",
                desc: "Individualized classical homeopathic remedies and long-term care.",
                img: "/homeopathy2.jpg",
              },
              {
                title: "Massage & Bodywork",
                desc: "Therapeutic massages to improve circulation, reduce tension and support healing.",
                img: "/massage.jpg",
              },
              {
                title: "Wellness Workshops",
                desc: "Workshops on seasonal routines, stress management and preventive practices.",
                img: "/workshop.jpg",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow-md border border-emerald-100 p-4 flex flex-col hover:shadow-lg transition">
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                <h4 className="text-lg font-semibold text-emerald-700 mb-1">{s.title}</h4>
                <p className="text-gray-600 text-sm flex-1">{s.desc}</p>
                <div className="mt-3">
                  <button className="bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / Tips Section */}
        <section className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-emerald-700 mb-4">Tips & FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h5 className="font-semibold mb-1">Is Panchakarma safe?</h5>
              <p className="text-gray-600">When performed by qualified practitioners and after proper assessment, Panchakarma is considered safe. Medical conditions should be disclosed during consultation.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-1">How many physio sessions will I need?</h5>
              <p className="text-gray-600">It depends on your condition. Acute issues may resolve in a few sessions; chronic or post-op rehab often requires a longer plan. Your therapist will provide an expected roadmap.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-1">Do I need a prior appointment?</h5>
              <p className="text-gray-600">Yes — appointments help us prepare personalized plans and allocate a dedicated therapist or practitioner.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-1">What should I bring?</h5>
              <p className="text-gray-600">Comfortable clothing, previous medical reports (if any), and a list of current medications or supplements.</p>
            </div>
          </div>
        </section>
      </section>

      {/* CTA */}
      <section className="mt-12 bg-emerald-700 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">Ready to restore balance?</h4>
            <p className="text-emerald-100 text-sm">Book a consultation with our therapists and start a personalized wellness plan.</p>
          </div>

          <div>
            <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-emerald-100 transition">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
