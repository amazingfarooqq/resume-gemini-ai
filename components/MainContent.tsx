import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Github } from 'lucide-react'
import Link from 'next/link'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface MainContentProps {
  selectedTemplate: any
  resumeData: any
  design: any
  handleDataChange: (field: any, value: any) => void
}

export default function MainContent({ selectedTemplate, resumeData, design, handleDataChange }: MainContentProps) {
  const resumeRef = useRef<HTMLDivElement>(null)

  const downloadAsPDF = () => {
    const input = resumeRef.current
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        const imgWidth = canvas.width
        const imgHeight = canvas.height
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
        const imgX = (pdfWidth - imgWidth * ratio) / 2
        const imgY = 30
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
        pdf.save('resume.pdf')
      })
    }
  }

  const downloadAsPNG = () => {
    const input = resumeRef.current
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.download = 'resume.png'
        link.href = imgData
        link.click()
      })
    }
  }

  return (
    <div className="col-span-4 overflow-auto">
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold">Preview</h2>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={downloadAsPDF}>
                Download as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={downloadAsPNG}>
                Download as PNG
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="https://github.com/amazingfarooqq/resume-gemini-ai" target='_blank'>
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </Link>
        </div>
      </header>
      <main className="p-8">
        <div ref={resumeRef}>
          {selectedTemplate.component({ data: resumeData, design, onDataChange: handleDataChange })}
        </div>
      </main>
    </div>
  )
}