import React from 'react';
import Hero from '../components/Hero';
import SkillsShowcase from '../components/SkillsShowcase';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <Hero />
      <SkillsShowcase />
      <Experience />
      <Projects />
    </>
  );
};

export default Home;

