import React from 'react'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import Workflow from './components/Workflow'
import FeatureGrid from './components/FeatureGrid'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <div className="bg-[#F7F7F5]">
      <Hero />
      <WhySection />
      <Workflow />
      <FeatureGrid />
      <CTASection />
    </div>
  )
}
