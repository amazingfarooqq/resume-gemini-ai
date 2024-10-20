import { Dispatch, SetStateAction } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ResumeForm from './ResumeForm'
import { templates } from './resumetemplates'

interface LeftSidebarProps {
    activeTab: 'create' | 'templates'
    setActiveTab: Dispatch<SetStateAction<'create' | 'templates'>>
    selectedTemplate: any
    setSelectedTemplate: Dispatch<SetStateAction<any>>
    resumeData: any
    setResumeData: Dispatch<SetStateAction<any>>
}

export default function LeftSidebar({
    activeTab,
    setActiveTab,
    selectedTemplate,
    setSelectedTemplate,
    resumeData,
    setResumeData
}: LeftSidebarProps) {

    const onValuesChange = (value: 'create' | 'templates') => {
        setActiveTab(value)
    }
    return (
        <div className="col-span-2 bg-white border-r">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Resume</h2>
                <Tabs value={activeTab} onValueChange={(val) => onValuesChange("create")} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="create">Create</TabsTrigger>
                        <TabsTrigger value="templates">Templates</TabsTrigger>
                    </TabsList>
                    <TabsContent value="create">
                        <ResumeForm setResumeData={setResumeData} />
                    </TabsContent>
                    <TabsContent value="templates">
                        <div className="mt-4">
                            <RadioGroup value={selectedTemplate.name} onValueChange={(value) => setSelectedTemplate(templates.find(t => t.name === value) || templates[0])}>
                                {templates.map((template) => (
                                    <div key={template.name} className="flex items-center space-x-2 mb-2">
                                        <RadioGroupItem value={template.name} id={template.name} />
                                        <Label htmlFor={template.name}>{template.name}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}