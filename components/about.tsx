"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-6">
  <p className="mb-3">
    After earning my <span className="font-bold">BSc IT</span> from Mahendra Pratap Sharada Prasad Singh College, I pursued my <span className="font-bold">MCA</span> at LATE BHAUSAHEB HIRAY S.S. Trust’s Institute of Computer Application to further my passion for programming. I've developed a strong foundation in <span className="font-bold">full-stack web development</span>, with expertise in <span className="font-bold">React, Next.js, Node.js, and MongoDB</span>. <span className="italic">What excites me most</span> about programming is solving complex problems and the fulfillment of finding solutions. I'm proficient in <span className="font-bold">TypeScript and Prisma</span> and always eager to explore new technologies. I'm currently seeking a <span className="font-bold">full-time software developer role</span> where I can grow and contribute.
  </p>

  <p>
    <span className="italic">Outside of coding</span>, I'm driven to grow both <span className="font-bold">personally and professionally</span>. Whether it's staying updated on tech trends or solving creative problems with others, I’m always looking to <span className="font-bold">improve</span>. 
    My motto is simple—<span className="font-bold">always be learning, always be growing</span>.
  </p>
</div>








    </motion.section>
  );
}
