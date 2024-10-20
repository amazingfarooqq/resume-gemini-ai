import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server'


export async function POST(req: Request) {
  try {
    const { template, sampleJSON, ...userData } = await req.json()
    const prompt = `Create a professional resume for a ${template} template with the following information:
    Name: ${userData.name}
    Email: ${userData.email}
    Phone: ${userData.phone}
    Summary: ${userData.summary}
    Experience: ${userData.experience}
    Education: ${userData.education}
    Skills: ${userData.skills}
    title: ${userData.title}

    Please format the resume content in a structured JSON format, including sections for contact information, summary, experience (as an array of job objects), education (as an array of education objects), and skills (as an array).
    
    Here is a sample JSON structure for reference: ${sampleJSON}
    
If any fields are unclear or missing, fill them with appropriate placeholder values to ensure all fields are completed. add sample data to the fields if needed.`

    const apiKey: any = process.env.NODE_ENV_GOOGLE_GENERATIVE_AI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);


    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            { text: "Resume\n" },
          ],
        },
        {
          role: "model",
          parts: [
            { text: "Resume\n" },
          ],
        },
      ],
    });


    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return NextResponse.json({ result: result.response.text() });

  } catch (error) {
    console.error('Error generating resume:', error)
    return NextResponse.json({ error: 'Failed to generate resume' }, { status: 500 })
  }
}