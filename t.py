import google.generativeai as genai

genai.configure(api_key="AIzaSyA1sIcx4ilABLGRUhBKZC1aW8HxHLR1FJ8")
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Explain how AI works")
print(response.text)
