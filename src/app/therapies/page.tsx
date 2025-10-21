import React from "react";
import Image from "next/image";

export default function TherapiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-100 to-emerald-100 text-[#333333] font-sans pb-12">
      {/* Header */}
      <header className="pt-28 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2BA84A] tracking-wide drop-shadow">
          Therapies
        </h1>
        <p className="mt-3 text-lg text-[#1B4332] max-w-2xl mx-auto">
          Traditional and modern therapeutic offerings — Panchakarma,
          Physiotherapy, and a curated set of complementary services for
          complete wellness.
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Panchakarma & Physiotherapy Row */}
        <div className="grid gap-8 grid-cols-1 mb-12">
          {/* Panchakarma */}
          <article className="bg-white rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition p-6 flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/panchakarma.jpg"
                alt="Panchakarma therapy"
                className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-sm"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-[#2BA84A] mb-2">
                  Panchakarma
                </h2>
                <p className="text-[#333333] mb-4 text-sm">
                  Panchakarma is a classical Ayurvedic detoxification and
                  rejuvenation protocol. It aims to cleanse deep-seated toxins,
                  restore doshic balance and strengthen the body&apos;s natural
                  immunity.
                </p>

                <ul className="text-[#2BA84A] text-sm list-disc list-inside space-y-2 mb-4">
                  <li>
                    <strong>Consultation & Assessment:</strong> Personalized
                    evaluation before therapies.
                  </li>
                  <li>
                    <strong>Pre-treatment:</strong> Oil therapies & steam to
                    prepare the tissues.
                  </li>
                  <li>
                    <strong>Detox Procedures:</strong> Vamana, Virechana, Basti,
                    Nasya, and Raktamokshana as required.
                  </li>
                  <li>
                    <strong>Post-treatment Care:</strong> Diet, lifestyle
                    counseling, and rejuvenation therapies.
                  </li>
                </ul>

                <p className="text-[#555] text-sm">
                  Typical duration:{" "}
                  <span className="font-medium">7–21 days</span> depending on
                  condition. Panchakarma should be performed under expert
                  supervision.
                </p>

                <div className="mt-4">
                  <a
                    href="https://docco360.com/alldoctors?navigate=doctors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FF6B3D] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e65d2f] transition"
                  >
                    Book Panchakarma
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Physiotherapy */}
          <article className="bg-white rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition p-6 flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/physio.png"
                alt="Physiotherapy session"
                className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-sm"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-[#2BA84A] mb-2">
                  Physiotherapy
                </h2>
                <p className="text-[#333333] mb-4 text-sm">
                  Physiotherapy helps restore mobility, relieve pain, and
                  enhance overall physical function. Each session is
                  individually designed to promote natural recovery and
                  long-term strength.
                </p>

                <ul className="text-[#2BA84A] text-sm list-disc list-inside space-y-2 mb-4">
                  <li>
                    <strong>Initial Assessment:</strong> Personalized evaluation
                    to understand condition and goals.
                  </li>
                  <li>
                    <strong>Manual & Exercise Therapy:</strong> Hands-on
                    techniques and guided movement correction.
                  </li>
                  <li>
                    <strong>Pain & Posture Care:</strong> Targeted methods for
                    chronic pain and alignment issues.
                  </li>
                  <li>
                    <strong>Home Program:</strong> Easy follow-up exercises for
                    sustained results.
                  </li>
                </ul>

                <p className="text-[#555] text-sm">
                  Typical session:{" "}
                  <span className="font-medium">30–60 minutes</span> Depending
                  on need, regular sessions ensure consistent recovery and
                  improved mobility.Our therapists closely track your progress.
                </p>

                <div className="mt-4">
                  <a
                    href="https://docco360.com/alldoctors?navigate=doctors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FF6B3D] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e65d2f] transition"
                  >
                    Book Physiotherapy
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Other Services */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-[#2BA84A] mb-4">
            Other Services
          </h3>

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
              <div
                key={s.title}
                className="bg-white rounded-xl shadow-md border border-green-100 p-4 flex flex-col hover:shadow-lg transition"
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="text-lg font-semibold text-[#2BA84A] mb-1">
                  {s.title}
                </h4>
                <p className="text-[#333333] text-sm flex-1">{s.desc}</p>
                <div className="mt-3">
                  <a
                    href="https://www.thinkwellness360.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FF6B3D] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#e65d2f] transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / Tips */}
        <section className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#2BA84A] mb-4">
            Tips & FAQs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#333333]">
            <div>
              <h5 className="font-semibold mb-1">Is Panchakarma safe?</h5>
              <p className="text-[#555]">
                When performed by qualified practitioners after proper
                assessment, Panchakarma is considered safe. Always disclose your
                medical history.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-1">
                How many physio sessions will I need?
              </h5>
              <p className="text-[#555]">
                It depends on your condition — acute issues may resolve quickly;
                chronic ones need structured rehab.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-1">
                Do I need a prior appointment?
              </h5>
              <p className="text-[#555]">
                Yes, appointments help us prepare personalized plans and allocate
                the right therapist.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-1">What should I bring?</h5>
              <p className="text-[#555]">
                Comfortable clothing, any medical reports, and a list of current
                medications or supplements.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* CTA */}
      <section className="mt-12 bg-[#FF6B3D] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">Ready to restore balance?</h4>
            <p className="text-[#F7F7F7] text-sm">
              Book a consultation with our therapists and start your
              personalized wellness plan.
            </p>
          </div>
          <div>
            <a
              href="https://docco360.com/alldoctors?navigate=doctors"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FF6B3D] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#F7F7F7] transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
