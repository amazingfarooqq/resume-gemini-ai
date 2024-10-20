import { Dispatch, SetStateAction } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
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
        <Card className="col-span-2 h-full">
            <CardHeader>
                <h2 className="text-2xl font-bold">Resume Builder</h2>
            </CardHeader>
            <CardContent>
                <Tabs value={activeTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="create" onClick={() => onValuesChange("create")}>Create</TabsTrigger>
                        <TabsTrigger value="templates" onClick={() => onValuesChange("templates")}>Templates</TabsTrigger>
                    </TabsList>
                    <TabsContent value="create">
                        <ResumeForm setResumeData={setResumeData} />
                    </TabsContent>
                    <TabsContent value="templates">
                        <RadioGroup 
                            value={selectedTemplate.name} 
                            onValueChange={(value) => setSelectedTemplate(templates.find(t => t.name === value) || templates[0])}
                            className="space-y-4"
                        >
                            {templates.map((template) => (
                                <div key={template.name} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                                    <RadioGroupItem value={template.name} id={template.name} />
                                    <Label htmlFor={template.name} className="flex-grow cursor-pointer">
                                        {template.name}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}