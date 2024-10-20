import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

export default function RightSidebar({ design, updateDesign }: any) {
  return (
    <div className="col-span-1 bg-white border-l">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Design</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="font">Font</Label>
            <Select value={design.fontFamily} onValueChange={(value) => updateDesign('fontFamily', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Arial, sans-serif">Arial</SelectItem>
                <SelectItem value="'Times New Roman', serif">Times New Roman</SelectItem>
                <SelectItem value="'Courier New', monospace">Courier New</SelectItem>
                <SelectItem value="Georgia, serif">Georgia</SelectItem>
                <SelectItem value="Verdana, sans-serif">Verdana</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <div>
            <Label>Size</Label>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => updateDesign('fontSize', `${parseInt(design.fontSize) - 1}px`)}>-</Button>
              <span>{design.fontSize}</span>
              <Button variant="outline" size="sm" onClick={() => updateDesign('fontSize', `${parseInt(design.fontSize) + 1}px`)}>+</Button>
            </div>
          </div> */}
          <div>
            <Label>Style</Label>
            <div className="flex space-x-2">
              <Button
                variant={design.fontWeight === 'bold' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateDesign('fontWeight', design.fontWeight === 'bold' ? 'normal' : 'bold')}
              >
                <Bold size={16} />
              </Button>
              <Button
                variant={design.fontStyle === 'italic' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateDesign('fontStyle', design.fontStyle === 'italic' ? 'normal' : 'italic')}
              >
                <Italic size={16} />
              </Button>
              <Button
                variant={design.textDecoration === 'underline' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateDesign('textDecoration', design.textDecoration === 'underline' ? 'none' : 'underline')}
              >
                <Underline size={16} />
              </Button>
            </div>
          </div>
          <div>
            <Label>Alignment</Label>
            <div className="flex space-x-2">
              <Button
                variant={design.textAlign === 'left' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateDesign('textAlign', 'left')}
              >
                <AlignLeft size={16} />
              </Button>
              <Button
                variant={design.textAlign === 'center' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateDesign('textAlign', 'center')}
              >
                <AlignCenter size={16} />
              </Button>
              <Button
                variant={design.textAlign === 'right' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateDesign('textAlign', 'right')}
              >
                <AlignRight size={16} />
              </Button>
            </div>
          </div>
          <div>
            <Label>List</Label>
            <Select value={design.listStyleType} onValueChange={(value) => updateDesign('listStyleType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select list style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="disc">Bullet</SelectItem>
                <SelectItem value="decimal">Numbered</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}