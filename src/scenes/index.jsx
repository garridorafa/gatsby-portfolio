import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { SectionHero } from "../components/Hero/styles"

export default () => {
  return (
    <Layout>
      <SectionHero>
        <Hero />
      </SectionHero>
    </Layout>
  )
}
