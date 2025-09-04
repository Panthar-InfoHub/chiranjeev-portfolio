"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyChooseUs from "@/components/why-choose-us"
import DepartmentsGrid from "@/components/departments-grid"
import Doctors from "@/components/doctors"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import BlogList from "@/components/blog-list"
import NewsUpdates from "@/components/news-updates"
import AppointmentCard from "@/components/appointment-card"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { Reveal } from "@/components/reveal"
import Preloader from "@/components/preloader"
import MobileBottomNav from "@/components/mobile-bottom-nav"

export default function Page() {
  const [showContent, setShowContent] = useState(true)



  return (
    <main>

      <div
        className={`transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <Header />
      </div>

      {showContent && (
        <>
          <Reveal y={24} delay={0.1}>
            <Hero />
          </Reveal>
          <Reveal delay={0.4}>
            <Doctors />
          </Reveal>
          <Reveal delay={0.3}>
            <DepartmentsGrid />
          </Reveal>
          <Reveal delay={0.5}>
            <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
              <div className="mb-8 text-center">
                <div className="inline-block rounded-full border border-stone-200 bg-amber-100/60 px-3 py-1 text-xs font-medium text-stone-700 mb-4">
                  Patient Stories
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 text-balance">
                  Real Experiences, Real Recoveries
                </h2>
              </div>
              <TestimonialCarousel />
            </section>
          </Reveal>
          <Reveal delay={0.6}>
            <BlogList />
          </Reveal>
          <Reveal delay={0.7}>
            <NewsUpdates />
          </Reveal>
          <Reveal delay={0.2}>
            <WhyChooseUs />
          </Reveal>
          {/* <Reveal delay={0.8} y={20}>
            <AppointmentCard />
          </Reveal> */}
          <Footer />
          <BackToTop />
        </>
      )}

      <MobileBottomNav showContent={showContent} />
    </main>
  )
}
