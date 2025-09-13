package com.resume.backend.resume_ai_backend.service.service;

import com.resume.backend.resume_ai_backend.service.ResumeService;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Service;

@Service
public class ResumeServiceImpl implements ResumeService {

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    private ChatClient chatClient;
    @Override
    public String generateResumeResponse(String userResumeDescription) {
        String promtText = """
                Generate a professional IT job resume in JSON format based on the following description. The JSON output must be 100% valid and parsable.
                
                Input Description :"{userResumeDescription}"
                
                **JSON STRUCTURE RULES:**
                You MUST follow this exact structure and data types. Use "N/A" for any unavailable information. All keys must be lowercase and use camelCase.
                
                {
                  "personalInformation": {
                    "fullName": "string (e.g., John Doe)",
                    "email": "string (e.g., john.doe@email.com)",
                    "phoneNumber": "string (e.g., +1-555-123-4567)",
                    "location": "string (e.g., San Francisco, CA)",
                    "linkedIn": "string (URL, e.g., https://linkedin.com/in/johndoe)",
                    "gitHub": "string (URL, e.g., https://github.com/johndoe)",
                    "portfolio": "string (URL or 'N/A')"
                  },
                  "summary": "string (A concise 3-4 sentence professional summary based on the description.)",
                  "skills": {
                    "programmingLanguages": ["array", "of", "strings", "e.g., Java, Python"],
                    "frameworks": ["array", "of", "strings", "e.g., Spring Boot, React.js"],
                    "databases": ["array", "of", "strings", "e.g., MySQL, PostgreSQL, MongoDB"],
                    "cloud": ["array", "of", "strings", "e.g., AWS EC2, S3, RDS"],
                    "devOpsTools": ["array", "of", "strings", "e.g., Docker, Kubernetes, Jenkins"],
                    "other": ["array", "of", "strings", "e.g., Git, REST APIs, Microservices"]
                  },
                  "experience": [
                    {
                      "jobTitle": "string (e.g., Senior Software Developer)",
                      "company": "string (e.g., XYZ Solutions)",
                      "location": "string (e.g., Austin, TX)",
                      "duration": "string (e.g., Jan 2020 - Present)",
                      "responsibilities": ["array", "of", "bullet-point", "strings"]
                    }
                  ],
                  "education": [
                    {
                      "degree": "string (e.g., Bachelor of Science in Computer Science)",
                      "university": "string (e.g., University of Technology)",
                      "location": "string (e.g., Boston, MA)",
                      "graduationYear": number (e.g., 2018)
                    }
                  ],
                  "certifications": [
                    {
                      "name": "string (e.g., AWS Certified Solutions Architect - Associate)",
                      "issuingOrganization": "string (e.g., Amazon Web Services)",
                      "year": number (e.g., 2022)
                    }
                  ],
                  "projects": [
                    {
                      "title": "string (e.g., Expense Management System)",
                      "description": "string (2-3 sentence description)",
                      "technologiesUsed": ["array", "of", "strings", "e.g., Spring Boot, React.js, MongoDB"],
                      "githubLink": "string (URL or 'N/A')"
                    }
                  ],
                  "achievements": ["array", "of", "strings", "List notable achievements"],
                  "languages": ["array", "of", "strings", "e.g., English (Fluent), Spanish (Intermediate)"],
                  "interests": ["array", "of", "strings", "e.g., Open-Source Contribution, Cloud Architecture, Hiking"]
                }
                
                """;

        Prompt prompt  = new Prompt(userResumeDescription);
        String response = chatClient.prompt().call().content();

        //modify:
        return response;
    }
}
