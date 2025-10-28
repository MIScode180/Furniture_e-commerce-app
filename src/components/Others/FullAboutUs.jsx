import React from "react";
import { Link } from "react-router-dom";

export default function FullAboutUs() {
  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="relative">
        <div className="hero min-h-[60vh] bg-base-200 overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1683140425081-14c44089acd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
            alt="Workshop"
            className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 animate-[pulse_6s_ease-in-out_infinite]"
          />
          <div className="hero-overlay bg-neutral/40" />
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fadeIn">
                About Us
              </h1>
              <p className="mt-4 text-lg opacity-90 animate-fadeIn [animation-delay:200ms]">
                Crafting enduring furniture that blends timeless design, honest
                materials, and everyday comfort.
              </p>
              <div className="mt-6 animate-fadeIn [animation-delay:400ms] ">
                <a href="#story" className="btn btn-success btn-wide rounded-4xl">Discover our story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <aside className="hidden lg:block fixed right-6 top-28 z-20">
        <div className="card w-64 shadow-xl bg-base-200 animate-fadeIn">
          <div className="card-body gap-3">
            <h3 className="card-title">Work with us</h3>
            <p className="text-sm opacity-80">
              Trade pricing, custom specs, and dedicated project support.
            </p>
            <Link to="/contactus" className="btn btn-primary btn-sm">Contact team</Link>
          </div>
        </div>
      </aside>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-14">
        {/* Story */}
        <div id="story" className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop"
            alt="Handcrafted"
            className="w-full h-72 md:h-full object-cover rounded-2xl shadow-lg animate-fadeIn"
          />
          <div className="space-y-4 animate-fadeIn [animation-delay:120ms]">
            <h2 className="text-2xl md:text-3xl font-bold">Welcome to <span className="text-blue-500">FurniSpaces</span></h2>
            <p className="leading-relaxed">
              At [Brand Name], furniture is more than function—it’s how homes
              breathe, how offices focus, and how spaces tell stories. Since our
              first workshop, our mission has been simple: build pieces that last,
              with materials and methods that respect both people and place.
            </p>
            <p className="leading-relaxed">
              We started as a small team with a handful of tools and an idea:
              well‑made furniture should be accessible without compromising integrity.
              Today, we operate with a larger footprint but the same small‑batch care—
              listening first, designing second, and building for longevity.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="card bg-base-200 shadow-xl animate-fadeIn">
          <div className="card-body">
            <h3 className="card-title">Design Philosophy</h3>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Timeless over trendy</h4>
                <p className="text-sm opacity-80 mt-2">
                  Quiet silhouettes that anchor rooms beyond seasons.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Human-centered comfort</h4>
                <p className="text-sm opacity-80 mt-2">
                  Ergonomics drive dimensions, angles, and support.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Honest materials</h4>
                <p className="text-sm opacity-80 mt-2">
                  Solid woods, durable textiles, and considered finishes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Versatile by design</h4>
                <p className="text-sm opacity-80 mt-2">
                  Modular layouts and components that evolve with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Materials & Craft */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold">Materials & Craft</h3>
            <p>
              We partner with seasoned artisans and trusted suppliers to ensure
              consistency from raw material to final finish. Solid wood frames,
              kiln‑dried for stability; high‑density cushions with layered support;
              reinforced joints; and finishes that protect while honoring character.
            </p>
            <ul className="list-disc pl-5 opacity-90">
              <li>Mortise‑and‑tenon, dowel, and corner‑block joinery</li>
              <li>Anti‑sag webbing and springs in seating</li>
              <li>Multi‑stage sanding and inspection</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?q=80&w=1200&auto=format&fit=crop"
            alt="Materials"
            className="w-full h-72 md:h-full object-cover rounded-2xl shadow-lg animate-fadeIn [animation-delay:120ms]"
          />
        </div>

        {/* Sustainability */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop"
            alt="Sustainability"
            className="w-full h-72 md:h-full object-cover rounded-2xl shadow-lg animate-fadeIn"
          />
          <div className="space-y-4 animate-fadeIn [animation-delay:120ms]">
            <h3 className="text-2xl font-bold">Sustainability Promise</h3>
            <ul className="list-disc pl-5 opacity-90">
              <li>Responsible sourcing, FSC options and traceable chains</li>
              <li>Built to last with repair support and spare parts</li>
              <li>Low‑VOC finishes and recyclable packaging</li>
            </ul>
          </div>
        </div>

        {/* Collections */}
        <div className="animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4">Collections We Offer</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Living",
                img:
                  "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop",
                desc: "Sofas, sectionals, chairs, coffee tables, media units.",
              },
              {
                title: "Dining",
                img:
                  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
                desc: "Tables, chairs, benches, and smart storage.",
              },
              {
                title: "Bedroom",
                img:
                  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
                desc: "Beds, nightstands, dressers, and wardrobes.",
              },
            ].map((c) => (
              <div key={c.title} className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
                <figure className="h-48 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">{c.title}</h4>
                  <p className="opacity-80">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="card bg-base-200 shadow-xl animate-fadeIn">
          <div className="card-body">
            <h3 className="card-title">Quality You Can Feel</h3>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Frames</h4>
                <p className="text-sm opacity-80 mt-2">
                  Solid hardwoods and engineered components for stability.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Joinery</h4>
                <p className="text-sm opacity-80 mt-2">
                  Reinforced joints for long‑term strength.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Cushions</h4>
                <p className="text-sm opacity-80 mt-2">
                  Multi‑density foams designed to hold shape.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Hardware</h4>
                <p className="text-sm opacity-80 mt-2">
                  Smooth drawers, hinges, and precise movement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold">How We Work</h3>
            <ol className="list-decimal pl-5 opacity-90 space-y-1">
              <li>Listen: understand your space and goals</li>
              <li>Design: share concepts, finishes, and layouts</li>
              <li>Build: craft with precision and test thoroughly</li>
              <li>Deliver: protect, install (where offered), follow up</li>
            </ol>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
            alt="Process"
            className="w-full h-72 md:h-full object-cover rounded-2xl shadow-lg animate-fadeIn [animation-delay:120ms]"
          />
        </div>

        {/* Contact */}
        <div className="card bg-base-200 shadow-xl animate-fadeIn">
          <div className="card-body">
            <h3 className="card-title">Visit & Contact</h3>
            <p className="opacity-90">
              Experience the collection in person or book a virtual consultation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Showroom</h4>
                <p className="text-sm opacity-80 mt-2">[123 Furniture Street, Pune]</p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Support</h4>
                <p className="text-sm opacity-80 mt-2">[FurniSpaces@.com] · [+91 0000000444]</p>
              </div>
              <div className="p-4 rounded-xl bg-base-100 border">
                <h4 className="font-semibold">Trade & Custom</h4>
                <p className="text-sm opacity-80 mt-2">[FurniSpaces@.com]</p>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/contactus" className="btn btn-success">Book a consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-base-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <h4 className="text-xl font-semibold">Ready to shape your space?</h4>
          <div className="flex gap-3">
            <Link to="/collections" className="btn bg-success hover:bg-green-300">Browse collections</Link>
          </div>
        </div>
      </section>
    </main>
  );
}


