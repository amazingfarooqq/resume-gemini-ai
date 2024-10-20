'use client'

import { useState } from 'react'
import { templates } from '@/components/resumetemplates'
import LeftSidebar from '@/components/LeftSidebar'
import MainContent from '@/components/MainContent'
import RightSidebar from '@/components/RightSidebar'

interface ResumeData {
  name: string
  title: string
  email: string
  phone: string
  website: string
  summary: string
  education: Array<{
    degree: string
    school: string
    year: string
  }>
  experience: Array<{
    title: string
    company: string
    period: string
    description: string
  }>
  skills: string[]
}

interface Design {
  fontFamily: string
  fontWeight: 'normal' | 'bold'
  fontStyle: 'normal' | 'italic'
  textDecoration: 'none' | 'underline'
  textAlign: 'left' | 'center' | 'right'
  listStyleType: 'disc' | 'decimal' | 'none'
}

const initialResumeData: ResumeData = {
  name: "Farooq dad khan",
  title: "UX Designer",
  email: "farooq@example.com",
  phone: "(123) 456-7890",
  website: "www.farooqdad.me",
  summary: "Passionate UX Designer with 5+ years of experience in creating intuitive and visually appealing digital experiences.",
  education: [
    {
      degree: "Bachelor of Design",
      school: "University of Design",
      year: "2010 - 2014"
    }
  ],
  experience: [
    {
      title: "Senior UX Designer",
      company: "Design Co.",
      period: "2018 - Present",
      description: "Led the redesign of the company's flagship product, resulting in a 30% increase in user engagement."
    },
    {
      title: "UX Designer",
      company: "Tech Solutions Inc.",
      period: "2015 - 2018",
      description: "Collaborated with cross-functional teams to develop user-centered design solutions for web and mobile applications."
    }
  ],
  skills: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Adobe Creative Suite", "Figma"]
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'create' | 'templates'>('create')
  const [selectedTemplate, setSelectedTemplate] = useState<any>(templates[1])
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)
  const [design, setDesign] = useState<Design>({
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    textAlign: 'left',
    listStyleType: 'disc'
  })

  const updateDesign = (property: keyof Design, value: string) => {
    setDesign(prev => ({ ...prev, [property]: value }))
  }

  const handleDataChange = (field: keyof ResumeData, value: any) => {
    setResumeData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="grid grid-cols-7 bg-gray-100">
      <LeftSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <MainContent
        selectedTemplate={selectedTemplate}
        resumeData={resumeData}
        design={design}
        handleDataChange={handleDataChange}
      />
      <RightSidebar design={design} updateDesign={updateDesign} />
    </div>
  )
}