# Selenium Automation: DemoQA Practice Form

## Project Overview
This project automates the **Practice Form** on [DemoQA](https://demoqa.com/automation-practice-form) using **Selenium WebDriver** with **JavaScript** (Node.js).  

The automation fills the form with personal details, selects gender, date of birth, subjects, hobbies, uploads a picture, selects state and city, and submits the form.

---

## Technologies Used
- **Node.js**  
- **Selenium WebDriver** (`selenium-webdriver` npm package)  
- **Chrome Browser**  

---

## Project Files
- `runner.js` → Main automation script that fills and submits the form.  
- `README.md` → Project documentation.  

---

## How It Works
1. Opens the website: [DemoQA Practice Form](https://demoqa.com/automation-practice-form)  
2. Maximizes the browser window  
3. Fills in personal details:
   - First Name
   - Last Name
   - Email
   - Gender
   - Mobile Number
4. Selects **Date of Birth** (day, month, year)  
5. Selects **Subject** and **Hobbies**  
6. Uploads a picture from local system  
7. Fills **Current Address**  
8. Selects **State** and **City**  
9. Clicks **Submit** button  
10. Waits 5 seconds and closes the browser  

---

## How to Run
1. Clone the repo:

```bash
git clone https://github.com/Lorin-02/Selenium.git
cd Selenium

Install dependencies:
npm install selenium-webdriver
Run the automation:
node runner.js
Notes
Make sure the path for uploadPicture exists on your system:
await driver.findElement(By.id("uploadPicture")).sendKeys("C:\\Users\\Asus\\Downloads\\image (2).png");
Adjust details (name, email, etc.) in runner.js as needed.
