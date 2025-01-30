'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, DevicePhoneMobileIcon, MapPinIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { CVData } from '../data/cv-data';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header({ data }: { data: CVData }) {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative py-12 text-white bg-gradient-to-br from-slate-800 to-slate-900 dark:from-[#0f172a] dark:to-[#1e293b] pl-6 pr-6"
    >
  <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.header.name}</h1>
            <p className="text-2xl text-slate-300 dark:text-slate-400">{data.header.title}</p>
          </div>
          <ThemeToggle />
        </div>
        
        <div className="flex flex-wrap gap-4 items-center text-slate-200 dark:text-slate-300 mt-6">
          <div className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            <a href={`mailto:${data.header.contact.email}`} className="hover:text-slate-100">
              {data.header.contact.email}
            </a>
          </div>
          
          <button 
            onClick={() => {setShowPhone(!showPhone); console.log('showPhone', showPhone)}} 
            className="flex items-center hover:text-slate-100"
          >
            <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />
            {showPhone ? data.header.contact.phone : 'Show Phone'}
          </button>
          
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-2" />
            {data.header.contact.location}
          </div>

          <div className="flex items-center hover:text-slate-100">
            <a 
              href={data.header.contact.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center hover:text-slate-100"
            >
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center hover:text-slate-100">
            <a 
              href={data.header.contact.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center hover:text-slate-100"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}