import { Navbar } from "./components/Navbar";
import { VedioConsultationPopup } from "./components/vedioConsultationpopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-100 to-emerald-100 text-gray-800 font-sans pb-0">
      <Navbar />
      <VedioConsultationPopup />

              {/* Header */}
      <header className="pt-28 pb-8 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 tracking-wide drop-shadow">Oshadhi</h1>
        <p className="mt-4 text-xl text-emerald-900">
          Harmony of Ayurveda, Homeopathy, Nutrition, and Unani
        </p>
        <div className="mt-2 text-emerald-500 text-sm">Herbal medicine and natural therapies</div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center px-6">
        <img
          src="/banner.jpg"
          alt="Herbal medicine"
          className="rounded-2xl shadow-lg w-full max-w-4xl object-cover mb-8"
        />
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">Nature’s Healing Wisdom</h2>
        <p className="text-gray-700 max-w-2xl">
          Oshadhi blends traditional wellness systems with modern nutritional science to
          promote natural balance, vitality, and holistic healing.
        </p>
      </section>

      {/* Healing Systems */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10 py-16">
        {/* Ayurveda */}
        <div className="bg-white rounded-xl shadow-md border border-emerald-100 hover:shadow-xl transition p-5 text-center flex flex-col items-center">
          <img
            src="/Ayurveda.jpg"
            alt="Ayurveda"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Ayurveda</h3>
          <ul className="text-emerald-900 text-left text-sm mb-2 space-y-1 list-disc list-inside">
            <li>Balances Vata, Pitta, Kapha</li>
            <li>Focus on digestive & seasonal health</li>
            <li>Herbs, yoga, routines</li>
          </ul>
          <p className="text-gray-600 text-sm">
            Ancient Indian wisdom guiding holistic self-care, prevention, and longevity for body and mind.
          </p>
        </div>
        {/* Homeopathy */}
        <div className="bg-white rounded-xl shadow-md border border-emerald-100 hover:shadow-xl transition p-5 text-center flex flex-col items-center">
          <img
            src="/Homeopathy.jpg"
            alt="Homeopathy"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Homeopathy</h3>
          <ul className="text-emerald-900 text-left text-sm mb-2 space-y-1 list-disc list-inside">
            <li>Uses micro-dosed remedies</li>
            <li>Stimulates body’s healing</li>
            <li>Founded on “like cures like”</li>
          </ul>
          <p className="text-gray-600 text-sm">
            Natural, gentle medicine for chronic symptoms and long-term balance with minimal side effects.
          </p>
        </div>
        {/* Nutrition */}
        <div className="bg-white rounded-xl shadow-md border border-emerald-100 hover:shadow-xl transition p-5 text-center flex flex-col items-center">
          <img
            src="/Nutrition.jpg"
            alt="Nutrition"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Nutrition</h3>
          <ul className="text-emerald-900 text-left text-sm mb-2 space-y-1 list-disc list-inside">
            <li>Whole foods & balanced diet</li>
            <li>Micronutrients & superfoods</li>
            <li>Supports immunity & vitality</li>
          </ul>
          <p className="text-gray-600 text-sm">
            Empowering health through mindful eating, seasonal choices, and personalized nutrition.
          </p>
        </div>
        {/* Unani */}
        <div className="bg-white rounded-xl shadow-md border border-emerald-100 hover:shadow-xl transition p-5 text-center flex flex-col items-center">
          <img
            src="/Unani.jpg"
            alt="Unani"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Unani</h3>
          <ul className="text-emerald-900 text-left text-sm mb-2 space-y-1 list-disc list-inside">
            <li>Greco-Arabic herbal tradition</li>
            <li>Temperament & humoral theory</li>
            <li>Herbs, diet, holistic lifestyle</li>
          </ul>
          <p className="text-gray-600 text-sm">
            Balances temperament and optimizes wellness through centuries-old herbal practices.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-700 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Begin Your Wellness Journey</h2>
        <p className="max-w-2xl mx-auto mb-6 text-emerald-100">
          Explore therapies, curated guides, and stores for natural healing with Oshadhi.
        </p>
        <button className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-emerald-100 transition">
          Learn More
        </button>
      </section>
    </main>
  );
}
