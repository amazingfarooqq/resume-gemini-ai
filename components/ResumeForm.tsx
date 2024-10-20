import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ResumeForm({ setResumeData }: any) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const sampleJSON = `{
        "name": "",
        "title": "",
        "phone": "",
        "email": "",
        "location": "",
        "summary": "",
        "experience": [
          {
            "title": "",
            "company": "",
            "period": "",
            "description": ""
          }
        ],
        "education": [
          {
            "degree": "",
            "school": "",
            "year": ""
          }
        ],
        "skills": [
          ""
        ]
      }`
      const response = await fetch('/api/generate-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, template: "modern", sampleJSON }),
      })
      if (response.ok) {
        const data = await response.json()
        const result = data.result
        const parsedData = JSON.parse(result)
        console.log({ parsedData });

        setResumeData(parsedData)
      } else {
        throw new Error('Failed to generate resume')
      }
    } catch (error) {
      console.error("Error generating resume:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Information</CardTitle>
        <CardDescription>Fill in your details and let AI do the rest</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" placeholder="(123) 456-7890" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" name="title" placeholder="Web developer" value={formData.title} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea id="summary" name="summary" placeholder="Brief overview of your professional background and key strengths" value={formData.summary} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Work Experience</Label>
            <Textarea id="experience" name="experience" placeholder="List your relevant work experiences" value={formData.experience} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Textarea id="education" name="education" placeholder="Your educational background" value={formData.education} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Textarea id="skills" name="skills" placeholder="List your key skills" value={formData.skills} onChange={handleInputChange} required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Resume'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}