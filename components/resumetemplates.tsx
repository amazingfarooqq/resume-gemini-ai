import { useRef, useState } from "react"

const EditableText = ({ value, onChange, style }: any) => {
    const [isEditing, setIsEditing] = useState(false)
    const inputRef = useRef(null)
  
    const handleClick = () => {
      setIsEditing(true)
    }
  
    const handleBlur = () => {
      setIsEditing(false)
    }
  
    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter') {
        setIsEditing(false)
      }
    }
  
    if (isEditing) {
      return (
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={style}
          className="bg-transparent outline-none border-b border-gray-300 w-full"
        />
      )
    }
  
    return (
      <span onClick={handleClick} style={style} className="cursor-text">
        {value}
      </span>
    )
  }

export const templates = [
    {
      name: "Classic",
      component: ({ data, design, onDataChange }: any) => (
        <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" style={design}>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">
              <EditableText value={data.name} onChange={(value: any) => onDataChange('name', value)} style={design} />
            </h1>
            <p className="text-xl text-gray-600">
              <EditableText value={data.title} onChange={(value: any) => onDataChange('title', value)} style={design} />
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p><EditableText value={data.email} onChange={(value: any) => onDataChange('email', value)} style={design} /></p>
              <p><EditableText value={data.phone} onChange={(value: any) => onDataChange('phone', value)} style={design} /></p>
              <p><EditableText value={data.website} onChange={(value: any) => onDataChange('website', value)} style={design} /></p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Summary</h2>
              <p><EditableText value={data.summary} onChange={(value: any) => onDataChange('summary', value)} style={design} /></p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            {data.experience.map((job:any, index:any) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">
                  <EditableText
                    value={job.title}
                    onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, title: value } : j))}
                    style={design}
                  />
                </h3>
                <p className="text-gray-600">
                  <EditableText
                    value={`${job.company} | ${job.period}`}
                    onChange={(value: any) => {
                      const [company, period] = value.split(' | ')
                      onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, company, period } : j))
                    }}
                    style={design}
                  />
                </p>
                <p>
                  <EditableText
                    value={job.description}
                    onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, description: value } : j))}
                    style={design}
                  />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            {data.education.map((edu:any, index:any) => (
              <div key={index}>
                <p className="font-semibold">
                  <EditableText
                    value={edu.degree}
                    onChange={(value: any) => onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, degree: value } : e))}
                    style={design}
                  />
                </p>
                <p className="text-gray-600">
                  <EditableText
                    value={`${edu.school}, ${edu.year}`}
                    onChange={(value: any) => {
                      const [school, year] = value.split(', ')
                      onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, school, year } : e))
                    }}
                    style={design}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      name: "Modern",
      component: ({ data, design, onDataChange }: any) => (
        <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" style={design}>
          <div className="flex items-center mb-6">
            {/* <div className="w-24 h-24 bg-blue-500 rounded-full mr-6"></div> */}
            <div>
              <h1 className="text-3xl font-bold">
                <EditableText value={data.name} onChange={(value: any) => onDataChange('name', value)} style={design} />
              </h1>
              <p className="text-xl text-gray-600">
                <EditableText value={data.title} onChange={(value: any) => onDataChange('title', value)} style={design} />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p><EditableText value={data.summary} onChange={(value: any) => onDataChange('summary', value)} style={design} /></p>
              <h2 className="text-xl font-semibold mt-6 mb-2">Experience</h2>
              {data.experience.map((job:any, index:any) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">
                    <EditableText
                      value={job.title}
                      onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, title: value } : j))}
                      style={design}
                    />
                  </h3>
                  <p className="text-gray-600">
                    <EditableText
                      value={`${job.company} | ${job.period}`}
                      onChange={(value: any) => {
                        const [company, period] = value.split(' | ')
                        onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, company, period } : j))
                      }}
                      style={design}
                    />
                  </p>
                  <p>
                    <EditableText
                      value={job.description}
                      onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, description: value } : j))}
                      style={design}
                    />
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p><EditableText value={data.email} onChange={(value: any) => onDataChange('email', value)} style={design} /></p>
              <p><EditableText value={data.phone} onChange={(value: any) => onDataChange('phone', value)} style={design} /></p>
              <p><EditableText value={data.website} onChange={(value: any) => onDataChange('website', value)} style={design} /></p>
              <h2 className="text-xl font-semibold mt-6 mb-2">Education</h2>
              {data.education.map((edu:any, index:any) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">
                    <EditableText
                      value={edu.degree}
                      onChange={(value: any) => onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, degree: value } : e))}
                      style={design}
                    />
                  </p>
                  <p className="text-gray-600">
                    <EditableText
                      value={`${edu.school}, ${edu.year}`}
                      onChange={(value: any) => {
                        const [school, year] = value.split(', ')
                        onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, school, year } : e))
                      }}
                      style={design}
                    />
                  </p>
                </div>
              ))}
              <h2 className="text-xl font-semibold mt-6 mb-2">Skills</h2>
              <div className="flex flex-wrap">
                {data.skills.map((skill:any, index:any) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                    <EditableText
                      value={skill}
                      onChange={(value: any) => onDataChange('skills', data.skills.map((s:any, i:any) => i === index ? value : s))}
                      style={design}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Minimalist",
      component: ({ data, design, onDataChange }: any) => (
        <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" style={design}>
          <h1 className="text-4xl font-light mb-2">
            <EditableText value={data.name} onChange={(value: any) => onDataChange('name', value)} style={design} />
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            <EditableText value={data.title} onChange={(value: any) => onDataChange('title', value)} style={design} />
          </p>
          <div className="border-t border-b py-4 mb-6">
            <p>
              <EditableText value={data.email} onChange={(value: any) => onDataChange('email', value)} style={design} /> |
              <EditableText value={data.phone} onChange={(value: any) => onDataChange('phone', value)} style={design} /> |
              <EditableText value={data.website} onChange={(value: any) => onDataChange('website', value)} style={design} />
            </p>
          </div>
          <p className="mb-6">
            <EditableText value={data.summary} onChange={(value: any) => onDataChange('summary', value)} style={design} />
          </p>
          <h2 className="text-2xl font-light mb-4">Experience</h2>
          {data.experience.map((job:any, index:any) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">
                <EditableText
                  value={`${job.title} @ ${job.company}`}
                  onChange={(value: any) => {
                    const [title, company] = value.split(' @ ')
                    onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, title, company } : j))
                  }}
                  style={design}
                />
              </h3>
              <p className="text-gray-600">
                <EditableText
                  value={job.period}
                  onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, period: value } : j))}
                  style={design}
                />
              </p>
              <p>
                <EditableText
                  value={job.description}
                  onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, description: value } : j))}
                  style={design}
                />
              </p>
            </div>
          ))}
          <h2 className="text-2xl font-light mt-6 mb-4">Education</h2>
          {data.education.map((edu:any, index:any) => (
            <div key={index} className="mb-2">
              <p>
                <EditableText
                  value={`${edu.degree}, ${edu.school}, ${edu.year}`}
                  onChange={(value: any) => {
                    const [degree, school, year] = value.split(', ')
                    onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, degree, school, year } : e))
                  }}
                  style={design}
                />
              </p>
            </div>
          ))}
          <h2 className="text-2xl font-light mt-6 mb-4">Skills</h2>
          <p>
            <EditableText
              value={data.skills.join(", ")}
              onChange={(value: any) => onDataChange('skills', value.split(", "))}
              style={design}
            />
          </p>
        </div>
      )
    },
    {
      name: "Creative",
      component: ({ data, design, onDataChange }: any) => (
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 shadow-lg max-w-4xl mx-auto text-white">
          <div className="bg-white bg-opacity-20 p-8 rounded-lg backdrop-filter backdrop-blur-lg" style={design}>
            <h1 className="text-4xl font-bold mb-2">
              <EditableText value={data.name} onChange={(value: any) => onDataChange('name', value)} style={design} />
            </h1>
            <p className="text-2xl mb-6">
              <EditableText value={data.title} onChange={(value: any) => onDataChange('title', value)} style={design} />
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <p>
                  <EditableText value={data.summary} onChange={(value: any) => onDataChange('summary', value)} style={design} />
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
                <p>
                  <EditableText value={data.email} onChange={(value: any) => onDataChange('email', value)} style={design} />
                </p>
                <p>
                  <EditableText value={data.phone} onChange={(value: any) => onDataChange('phone', value)} style={design} />
                </p>
                <p>
                  <EditableText value={data.website} onChange={(value: any) => onDataChange('website', value)} style={design} />
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                {data.experience.map((job:any, index:any) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold">
                      <EditableText
                        value={job.title}
                        onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, title: value } : j))}
                        style={design}
                      />
                    </h3>
  
                    <p>
                      <EditableText
                        value={`${job.company} | ${job.period}`}
                        onChange={(value: any) => {
                          const [company, period] = value.split(' | ')
                          onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, company, period } : j))
                        }}
                        style={design}
                      />
                    </p>
                    <p>
                      <EditableText
                        value={job.description}
                        onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, description: value } : j))}
                        style={design}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              {data.education.map((edu:any, index:any) => (
                <div key={index} className="mb-2">
                  <p>
                    <EditableText
                      value={`${edu.degree}, ${edu.school}, ${edu.year}`}
                      onChange={(value: any) => {
                        const [degree, school, year] = value.split(', ')
                        onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, degree, school, year } : e))
                      }}
                      style={design}
                    />
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <div className="flex flex-wrap">
                {data.skills.map((skill:any, index:any) => (
                  <span key={index} className="bg-white text-purple-800 px-2 py-1 rounded mr-2 mb-2">
                    <EditableText
                      value={skill}
                      onChange={(value: any) => onDataChange('skills', data.skills.map((s:any, i:any) => i === index ? value : s))}
                      style={design}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Professional",
      component: ({ data, design, onDataChange }: any) => (
        <div className="bg-gray-100 shadow-lg max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border-t-4 border-blue-600" style={design}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-blue-600">
                  <EditableText value={data.name} onChange={(value: any) => onDataChange('name', value)} style={design} />
                </h1>
                <p className="text-xl text-gray-600">
                  <EditableText value={data.title} onChange={(value: any) => onDataChange('title', value)} style={design} />
                </p>
              </div>
              <div className="text-right">
                <p>
                  <EditableText value={data.email} onChange={(value: any) => onDataChange('email', value)} style={design} />
                </p>
                <p>
                  <EditableText value={data.phone} onChange={(value: any) => onDataChange('phone', value)} style={design} />
                </p>
                <p>
                  <EditableText value={data.website} onChange={(value: any) => onDataChange('website', value)} style={design} />
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Professional Summary</h2>
              <p>
                <EditableText value={data.summary} onChange={(value: any) => onDataChange('summary', value)} style={design} />
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Experience</h2>
              {data.experience.map((job:any, index:any) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">
                    <EditableText
                      value={job.title}
                      onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, title: value } : j))}
                      style={design}
                    />
                  </h3>
                  <p className="text-gray-600">
                    <EditableText
                      value={`${job.company} | ${job.period}`}
                      onChange={(value: any) => {
                        const [company, period] = value.split(' | ')
                        onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, company, period } : j))
                      }}
                      style={design}
                    />
                  </p>
                  <p>
                    <EditableText
                      value={job.description}
                      onChange={(value: any) => onDataChange('experience', data.experience.map((j:any, i:any) => i === index ? { ...j, description: value } : j))}
                      style={design}
                    />
                  </p>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Education</h2>
              {data.education.map((edu:any, index:any) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">
                    <EditableText
                      value={edu.degree}
                      onChange={(value: any) => onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, degree: value } : e))}
                      style={design}
                    />
                  </p>
                  <p className="text-gray-600">
                    <EditableText
                      value={`${edu.school}, ${edu.year}`}
                      onChange={(value: any) => {
                        const [school, year] = value.split(', ')
                        onDataChange('education', data.education.map((e:any,i:any) => i === index ? { ...e, school, year } : e))
                      }}
                      style={design}
                    />
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Skills</h2>
              <div className="flex flex-wrap">
                {data.skills.map((skill:any, index:any) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                    <EditableText
                      value={skill}
                      onChange={(value: any) => onDataChange('skills', data.skills.map((s:any, i:any) => i === index ? value : s))}
                      style={design}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
        name: "Tech Savvy",
        component: ({ data, design, onDataChange }) => (
          <div className="bg-gray-900 text-white p-8 shadow-lg max-w-4xl mx-auto" style={design}>
            <div className="border-l-4 border-cyan-400 pl-4">
              <h1 className="text-4xl font-bold text-cyan-400">
                <EditableText value={data.name} onChange={(value) => onDataChange('name', value)} style={design} />
              </h1>
              <p className="text-xl text-gray-400">
                <EditableText value={data.title} onChange={(value) => onDataChange('title', value)} style={design} />
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Professional Summary</h2>
                <p className="mb-6">
                  <EditableText value={data.summary} onChange={(value) => onDataChange('summary', value)} style={design} />
                </p>
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Experience</h2>
                {data.experience.map((job, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold text-cyan-200">
                      <EditableText
                        value={job.title}
                        onChange={(value) => onDataChange('experience', data.experience.map((j, i) => i === index ? { ...j, title: value } : j))}
                        style={design}
                      />
                    </h3>
                    <p className="text-gray-400">
                      <EditableText
                        value={`${job.company} | ${job.period}`}
                        onChange={(value) => {
                          const [company, period] = value.split(' | ')
                          onDataChange('experience', data.experience.map((j, i) => i === index ? { ...j, company, period } : j))
                        }}
                        style={design}
                      />
                    </p>
                    <p>
                      <EditableText
                        value={job.description}
                        onChange={(value) => onDataChange('experience', data.experience.map((j, i) => i === index ? { ...j, description: value } : j))}
                        style={design}
                      />
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact</h2>
                <p><EditableText value={data.email} onChange={(value) => onDataChange('email', value)} style={design} /></p>
                <p><EditableText value={data.phone} onChange={(value) => onDataChange('phone', value)} style={design} /></p>
                <p><EditableText value={data.website} onChange={(value) => onDataChange('website', value)} style={design} /></p>
                <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">Education</h2>
                {data.education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold text-cyan-200">
                      <EditableText
                        value={edu.degree}
                        onChange={(value) => onDataChange('education', data.education.map((e,i) => i === index ? { ...e, degree: value } : e))}
                        style={design}
                      />
                    </p>
                    <p className="text-gray-400">
                      <EditableText
                        value={`${edu.school}, ${edu.year}`}
                        onChange={(value) => {
                          const [school, year] = value.split(', ')
                          onDataChange('education', data.education.map((e,i) => i === index ? { ...e, school, year } : e))
                        }}
                        style={design}
                      />
                    </p>
                  </div>
                ))}
                <h2 className="text-2xl font-semibold text-cyan-400 mt-6 mb-4">Skills</h2>
                <div className="flex flex-wrap">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="bg-cyan-800 text-cyan-200 px-2 py-1 rounded mr-2 mb-2">
                      <EditableText
                        value={skill}
                        onChange={(value) => onDataChange('skills', data.skills.map((s, i) => i === index ? value : s))}
                        style={design}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        name: "Elegant Serif",
        component: ({ data, design, onDataChange }) => (
          <div className="bg-cream p-8 shadow-lg max-w-4xl mx-auto font-serif" style={design}>
            <h1 className="text-4xl font-bold text-center mb-2">
              <EditableText value={data.name} onChange={(value) => onDataChange('name', value)} style={design} />
            </h1>
            <p className="text-xl text-gray-600 text-center mb-6">
              <EditableText value={data.title} onChange={(value) => onDataChange('title', value)} style={design} />
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Professional Summary</h2>
                <p className="mb-6">
                  <EditableText value={data.summary} onChange={(value) => onDataChange('summary', value)} style={design} />
                </p>
                <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Experience</h2>
                {data.experience.map((job, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold">
                      <EditableText
                        value={job.title}
                        onChange={(value) => onDataChange('experience', data.experience.map((j, i) => i === index ? { ...j, title: value } : j))}
                        style={design}
                      />
                    </h3>
                    <p className="text-gray-600 italic">
                      <EditableText
                        value={`${job.company} | ${job.period}`}
                        onChange={(value) => {
                          const [company, period] = value.split(' | ')
                          onDataChange('experience', data.experience.map((j, i) => i === index ? { ...j, company, period } : j))
                        }}
                        style={design}
                      />
                    </p>
                    <p>
                      <EditableText
                        value={job.description}
                        onChange={(value) => onDataChange('experience', data.experience.map((j, i) => i === index ? { ...j, description: value } : j))}
                        style={design}
                      />
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">Contact</h2>
                <p><EditableText value={data.email} onChange={(value) => onDataChange('email', value)} style={design} /></p>
                <p><EditableText value={data.phone} onChange={(value) => onDataChange('phone', value)} style={design} /></p>
                <p><EditableText value={data.website} onChange={(value) => onDataChange('website', value)} style={design} /></p>
                <h2 className="text-2xl font-semibold mt-6 mb-4 border-b border-gray-300">Education</h2>
                {data.education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold">
                      <EditableText
                        value={edu.degree}
                        onChange={(value) => onDataChange('education', data.education.map((e,i) => i === index ? { ...e, degree: value } : e))}
                        style={design}
                      />
                    </p>
                    <p className="text-gray-600 italic">
                      <EditableText
                        value={`${edu.school}, ${edu.year}`}
                        onChange={(value) => {
                          const [school, year] = value.split(', ')
                          onDataChange('education', data.education.map((e,i) => i === index ? { ...e, school, year } : e))
                        }}
                        style={design}
                      />
                    </p>
                  </div>
                ))}
                <h2 className="text-2xl font-semibold mt-6 mb-4 border-b border-gray-300">Skills</h2>
                <ul className="list-disc list-inside">
                  {data.skills.map((skill, index) => (
                    <li key={index}>
                      <EditableText
                        value={skill}
                        onChange={(value) => onDataChange('skills', data.skills.map((s, i) => i === index ? value : s))}
                        style={design}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      },
  ]

  export const additionalTemplates = [
    
    // ... (8 more template objects would be added here)
  ];