const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyA1sIcx4ilABLGRUhBKZC1aW8HxHLR1FJ8"); // Replace with a valid API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getAnswer() {
    console.log("getAnswer function called");

    try {
        console.log("Calling generateContent API...");
        const result = await model.generateContent({ prompt: "what is AI" }); // Pass an object with `prompt`
        console.log("API Response:", result);

        if (result && result.text) {
            console.log("Generated Answer:", result.text);
        } else {
            console.error("Invalid response format from API.");
        }
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// Call the function
getAnswer();
