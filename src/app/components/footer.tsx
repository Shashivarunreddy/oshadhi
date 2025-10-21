"use client";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const data = {
  contact: {
    email: "oshadhi@example.com",
    phone: "+91 9876543210",
    address: "Hyderabad, Telangana, India",
  },
  company: {
    name: "Oshadhi",
    description:
      "Oshadhi empowers your wellness with Ayurveda, Homeopathy, Nutrition, and Unani. Discover holistic therapies, consult expert healers, and start your journey to balance, vitality, and natural health.",
  },
};

const serviceLinks = [
  { text: "Ayurvedic Consultations" },
  { text: "Homeopathy Treatments" },
  { text: "Nutrition Counseling" },
  { text: "Unani Herbal Therapies" },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-50 text-gray-900 border-t border-emerald-200 transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-3 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-emerald-700">
              {data.company.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-emerald-900">
              {data.company.description}
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-1 text-center sm:text-left flex flex-col">
            <h3 className="text-lg font-bold text-emerald-700 pb-2">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map(({ text }) => (
                <li key={text} className="text-emerald-900 font-normal">{text}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h3 className="text-lg font-bold text-emerald-700">Contact Us</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                <li key={text}>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <Icon className="text-emerald-600 size-5 shrink-0" />
                    {isAddress ? (
                      <address className="not-italic text-emerald-900 font-normal">
                        {text}
                      </address>
                    ) : (
                      <span className="text-emerald-900 font-normal">{text}</span>
                    )}
                  </div>

                  {isAddress && (
                    <div className="mt-2 flex gap-4 justify-center sm:justify-start">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <Image
                          src="/instagram.png"
                          alt="Instagram"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain rounded-full hover:opacity-80 transition"
                        />
                      </a>

                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <Image
                          src="/youtube.png"
                          alt="YouTube"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain rounded-full hover:opacity-80 transition"
                        />
                      </a>

                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                      >
                        <Image
                          src="/whatsapp.svg"
                          alt="WhatsApp"
                          width={50}
                          height={50}
                          className="w-8 h-8 object-contain rounded-full hover:opacity-80 transition"
                        />
                      </a>

                      <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <Image
                          src="/facebook.png"
                          alt="Facebook"
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain rounded-full hover:opacity-80 transition"
                        />
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-emerald-200 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-emerald-700">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="text-sm text-emerald-700 mt-4 sm:mt-0 sm:order-first">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
