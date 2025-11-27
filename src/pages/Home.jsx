import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import SkillsShowcase from '../components/SkillsShowcase';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <SkillsShowcase />
      <Experience />
      <Projects />
    </>
  );
};

export default Home;

