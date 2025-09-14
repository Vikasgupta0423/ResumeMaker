package com.resume.backend.resume_ai_backend;

import com.resume.backend.resume_ai_backend.service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ResumeAiBackendApplicationTests {

    @Autowired
    private ResumeService resumeService;
	@Test
	void contextLoads() {

        // Corrected code
//        String s = "I am Vikas Gupta with 2 years of experience.";
        resumeService.generateResumeResponse("I am Vikas Gupta with 2 years of experience.");
	}

}
