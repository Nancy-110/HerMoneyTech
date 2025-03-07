document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide icons
    const lucide = window.lucide;
    lucide.createIcons();
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            const isExpanded = navLinks.classList.contains("show");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });
    }
  
    // Loan calculator
    const loanAmount = document.getElementById("loanAmount");
    const loanTerm = document.getElementById("loanTerm");
    const interestRate = document.getElementById("interestRate");
    const monthlyPayment = document.getElementById("monthlyPayment");
  
    function calculateLoan() {
        const principal = Number.parseFloat(loanAmount.value);
        const calculatedInterest = Number.parseFloat(interestRate.value) / 100 / 12;
        const calculatedPayments = Number.parseFloat(loanTerm.value);
  
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);
  
        if (isFinite(monthly)) {
            monthlyPayment.textContent = "$" + monthly.toFixed(2);
        } else {
            monthlyPayment.textContent = "Error in calculation";
        }
    }
  
    if (loanAmount && loanTerm && interestRate) {
        loanAmount.addEventListener("input", calculateLoan);
        loanTerm.addEventListener("input", calculateLoan);
        interestRate.addEventListener("input", calculateLoan);
  
        calculateLoan();
    }
  
    // Testimonial slider
    const testimonials = document.querySelectorAll(".testimonial-card");
    const indicators = document.querySelectorAll(".indicator");
    const prevButton = document.querySelector(".testimonial-prev");
    const nextButton = document.querySelector(".testimonial-next");
  
    let currentTestimonial = 0;
  
    function showTestimonial(index) {
        testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
        indicators.forEach((indicator) => indicator.classList.remove("active"));
  
        testimonials[index].classList.add("active");
        indicators[index].classList.add("active");
        currentTestimonial = index;
    }
  
    if (prevButton && nextButton && testimonials.length > 0) {
        prevButton.addEventListener("click", () => {
            let index = currentTestimonial - 1;
            if (index < 0) index = testimonials.length - 1;
            showTestimonial(index);
        });
  
        nextButton.addEventListener("click", () => {
            let index = currentTestimonial + 1;
            if (index >= testimonials.length) index = 0;
            showTestimonial(index);
        });
  
        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                showTestimonial(index);
            });
        });
    }
  
    // Load job listings dynamically
    const jobsList = document.getElementById("jobsList");
  
    if (jobsList) {
        const jobs = [
            { title: "Financial Analyst", company: "Global Finance Inc.", link: "Financial Analyst.html" },
            { title: "Marketing Manager", company: "Brand Solutions", link: "Marketing Manager.html" },
            { title: "Web Developer", company: "Tech Innovations", link: "Web Developer.html" },
            { title: "Project Coordinator", company: "Creative Studios", link: "Project Coordinator.html" },
        ];
  
        jobs.forEach((job) => {
            const jobCard = document.createElement("div");
            jobCard.className = "job-card";
  
            jobCard.innerHTML = `
                <div class="job-info">
                    <h3 class="job-title">${job.title}</h3>
                    <p class="job-company">${job.company}</p>
                </div>
                <div class="job-actions">
                    <button class="btn btn-outline btn-sm save-job">
                        <i data-lucide="bookmark"></i> Save
                    </button>
                    <a href="${job.link}" class="btn btn-primary btn-sm apply-button">Apply Now</a>
                </div>
            `;
  
            jobsList.appendChild(jobCard);
        });
  
        lucide.createIcons();
  
        const saveButtons = document.querySelectorAll(".save-job");
        saveButtons.forEach((button) => {
            button.addEventListener("click", function () {
                this.classList.toggle("saved");
                if (this.classList.contains("saved")) {
                    this.innerHTML = '<i data-lucide="bookmark-check"></i> Saved';
                } else {
                    this.innerHTML = '<i data-lucide="bookmark"></i> Save';
                }
                lucide.createIcons();
            });
        });
    }
  
    // Finance Management Functionality
    const financeManagementSection = document.getElementById("finance-management");
  
    if (financeManagementSection) {
        const budgetPlannerButton = financeManagementSection.querySelector(".budget-planner-button");
        if (budgetPlannerButton) {
            budgetPlannerButton.addEventListener("click", () => {
                alert("Budget Planner will open here. You can add a modal or redirect to a new page.");
            });
        }
  
        const savingsTrackerButton = financeManagementSection.querySelector(".savings-tracker-button");
        if (savingsTrackerButton) {
            savingsTrackerButton.addEventListener("click", () => {
                alert("Savings Goal Tracker will open here. You can add a modal or redirect to a new page.");
            });
        }
  
        const debtManagementButton = financeManagementSection.querySelector(".debt-management-button");
        if (debtManagementButton) {
            debtManagementButton.addEventListener("click", () => {
                alert("Debt Management Tools will open here. You can add a modal or redirect to a new page.");
            });
        }
    }
  
    // Scroll event for active navigation links
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
  
        document.querySelectorAll("section").forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
  
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll(".nav-links a").forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
  
    // Chatbot Toggle and Luna Chatbot Logic
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotModal = document.getElementById("chatbot-modal");
    const chatbotClose = document.getElementById("chatbot-close");
  
    if (chatbotToggle && chatbotModal && chatbotClose) {
        chatbotToggle.addEventListener("click", () => {
            chatbotModal.style.display = "block";
        });
  
        chatbotClose.addEventListener("click", () => {
            chatbotModal.style.display = "none";
        });
  
        window.addEventListener("click", (e) => {
            if (e.target === chatbotModal) {
                chatbotModal.style.display = "none";
            }
        });
    }
  
    // Luna Chatbot Functionality
    const apiKey = "AIzaSyAupBZqKdH5PopmVq3Bm1cLmsMiQ7g_3MY"; // Replace with your actual Gemini API key
    let userName = null;
    let conversationStarted = false;
  
    async function sendMessage() {
        const userInput = document.getElementById("userInput").value.trim();
        if (!userInput) return;
  
        appendMessage("user", userInput);
        document.getElementById("userInput").value = "";
  
        if (!userName && !conversationStarted) {
            userName = userInput;
            conversationStarted = true;
            appendMessage("luna", `Namaste, ${userName}! I’m Luna, here to help you with your money. What’s on your mind today—daily expenses or a savings goal?`);
            return;
        }
  
        const systemInstruction = `
            You are Luna, an AI financial companion designed to empower women in India to manage their money with confidence, simplicity, and care. Your mission is to assist users in tracking their monthly expenses, offering personalized financial tips, and providing supportive guidance tailored to their financial needs and goals. You specialize in simplifying money matters, addressing challenges like household expenses, saving for family or personal goals, or handling financial pressures, all while keeping the Indian context in mind—think rupees, local costs, and everyday life.
  
            **Tone**: Speak in a warm, comforting, and encouraging tone, like a trusted friend or sister who understands the ups and downs of life in India. Avoid complex jargon unless you explain it simply (e.g., “Interest is just extra money you earn on savings!”), and always uplift the user.
  
            **Guidelines**:
            - Use the user's name, "${userName}", naturally in responses (e.g., “Let’s sort this out, ${userName}!”).
            - Ask relatable questions (e.g., “What’s your biggest expense, ${userName}? Rent, groceries, or maybe travel to work?”).
            - Offer practical tips for India (e.g., “Try bargaining at the market, ${userName}—it can save a few rupees!”).
            - Provide examples like kirana bills, mobile recharges, auto fares, or electricity bills.
            - Avoid advanced investment advice (e.g., no stock tips), but mention safe options like FDs or SIPs lightly (e.g., “A small SIP can grow your money over time, ${userName}—worth thinking about later!”).
            - If they’re stuck, suggest a tiny step (e.g., “How about saving ₹10 a day, ${userName}? It’s easy and adds up!”).
  
            **Capabilities**:
            1. **Expense Management**: Ask about monthly income and typical Indian expenses (e.g., rent, groceries from kirana stores). Suggest tweaks (e.g., “Hey ${userName}, if groceries are ₹5,000, maybe try buying staples in bulk?”).
            2. **Financial Tips**: Offer India-relevant advice (e.g., “If you’re spending ₹500 on chai, ${userName}, cutting back could save ₹100 a week!”).
            3. **Goal Setting**: Help set goals (e.g., “What do you want to save for, ${userName}? A saree for Diwali?”). Break it down (e.g., “For ₹6,000, saving ₹500 a month works, ${userName}!”).
            4. **Emotional Support**: Acknowledge stress (e.g., “I know it’s tough, ${userName}. Rising prices can feel overwhelming—let’s tackle it together?”).
            5. **Calculations**: Use rupees (e.g., “If you earn ₹30,000 and spend ₹25,000, you’ve got ₹5,000 left, ${userName}!”).
        `;
  
        const requestBody = {
            contents: [
                {
                    parts: [
                        { text: systemInstruction },
                        { text: userInput }
                    ]
                }
            ],
            generationConfig: {
                temperature: 1,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 8192,
                responseMimeType: "text/plain"
            }
        };
  
        try {
            console.log("Sending request to Gemini API...");
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
  
            console.log("Response status:", response.status);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API request failed: ${response.status} - ${errorText}`);
            }
  
            const data = await response.json();
            const lunaResponse = data.candidates[0].content.parts[0].text;
            appendMessage("luna", lunaResponse);
        } catch (error) {
            console.error("Error:", error);
            appendMessage("luna", `Sorry, ${userName}, something went wrong—maybe my connection’s off. Let’s try again—what’s on your mind?`);
        }
    }
  
    function appendMessage(sender, text) {
        const chatBox = document.getElementById("chatBox");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
  
    const userInput = document.getElementById("userInput");
    if (userInput) {
        userInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendMessage();
        });
    }
  
    // Ensure sendMessage is globally accessible for the onclick in HTML
    window.sendMessage = sendMessage;
  
    // Course details and modal functionality
    const coursesDetails = {
        1: {
            title: "Budgeting Basics",
            description: "GPT-generated description: Learn the fundamentals of budgeting and expense tracking to manage your finances effectively."
        },
        2: {
            title: "Investment Strategies",
            description: "GPT-generated description: Explore various investment strategies and understand market trends to build a secure future."
        },
        3: {
            title: "Business Planning",
            description: "GPT-generated description: Master the essentials of business planning—from ideation to execution—for long-term success."
        }
    };
  
    // Function to open modal with course details
    function openCourseModal(courseId) {
        const courseData = coursesDetails[courseId];
        if (courseData) {
            document.getElementById("modalTitle").innerText = courseData.title;
            document.getElementById("modalDescription").innerText = courseData.description;
            document.getElementById("courseModal").style.display = "block";
        }
    }
  
    // Attach click event to each course card in the Financial Education section
    document.querySelectorAll("#education .course-card").forEach((card) => {
        card.addEventListener("click", function () {
            const courseId = this.getAttribute("data-course-id");
            openCourseModal(courseId);
        });
    });
  
    // Modal close functionality
    document.querySelector(".modal .close").addEventListener("click", function () {
        document.getElementById("courseModal").style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
        const modal = document.getElementById("courseModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
  });