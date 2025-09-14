package com.resume.backend.resume_ai_backend.service.service;

import com.resume.backend.resume_ai_backend.service.ResumeService;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }
    @Override
    public String generateResumeResponse(String userResumeDescription) {
        try {
            String promptString = this.loadPromptFromFile("resume_prompt.txt");
            String promptContent = this.putValuesToTemplate(promptString, Map.of(
                    "userDescription", userResumeDescription
            ));

            Prompt prompt = new Prompt(promptContent);
            return chatClient.prompt(prompt).call().content();
        } catch (IOException e) {
            // Handle the exception appropriately, e.g., log it and return an error message
            e.printStackTrace();
            return "Error generating resume: prompt file not found.";
        }
    }

    private String loadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }
    private String putValuesToTemplate(String template, Map<String, String> values) {
        String result = template;
        for (Map.Entry<String, String> entry : values.entrySet()) {
            result = result.replace("{" + entry.getKey() + "}", entry.getValue());
        }
        return result;
    }
}
