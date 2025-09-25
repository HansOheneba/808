import React from "react";

const Contact = () => {
  return (
    <main className="w-full max-w-6xl mx-auto p-6">
      <div className="min-h-[90vh] flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-black mb-12">
          Let&apos;s <span className="text-gray-500">Link</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-bold text-black">Mobile:</span>{" "}
                <a
                  href="tel:+233555301122"
                  className="hover:text-lime-600 transition"
                >
                  +233 555 30 11 22
                </a>
              </p>
              <p>
                <span className="font-bold text-black">Email:</span>{" "}
                <a
                  href="mailto:customerservice@808dtp.com"
                  className="hover:text-lime-600 transition"
                >
                  customerservice@808dtp.com
                </a>
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Follow Us
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-black">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/808dtp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-600 transition"
                >
                  @808DTP
                </a>
              </li>
              <li>
                <span className="font-bold text-black">Twitter/X:</span>{" "}
                <a
                  href="https://x.com/808dtp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-600 transition"
                >
                  @808DTP
                </a>
              </li>
              <li>
                <span className="font-bold text-black">TikTok:</span>{" "}
                <a
                  href="https://tiktok.com/@808dtp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-600 transition"
                >
                  @808DTP
                </a>
              </li>
            </ul>
          </div>
        </div>

  
      </div>
    </main>
  );
};

export default Contact;
