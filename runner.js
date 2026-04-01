import{ Browser, Builder,By ,Key } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();
const firstName ="Shurfa";
const lastName="Maliha";
const email="shurfamalihalorin@gmail.com";
const gender="Female";
const mobileNumber="01789456234";
const hobbies =["Sports","Music"];
const subject ="Computer";
const month="February";
const day=20;
const year=2000;
const currentAddress = "Dhaka, Bangladesh";
const state = "NCR";
const city = "Delhi";




 async function testRunner(){

    //await driver.get("https://demoqa.com/");
    //await driver.findElement(By.xpath("//h5[text()='Forms']")).click();
    //await driver.findElement(By.xpath("//a[contains(@href,'practice-form')]")).click();
    await driver.get("https://demoqa.com/automation-practice-form");
    await driver.manage().window().maximize();
    await driver.findElement(By.id("firstName")).sendKeys(firstName);
    await driver.sleep(1000);
    await driver.findElement(By.id("lastName")).sendKeys(lastName);
    await driver.findElement(By.id("userEmail")).sendKeys(email);
    await driver.findElement(By.xpath(`//label[text()='${gender}']`)).click();
    await driver.findElement(By.id("userNumber")).sendKeys(mobileNumber);
    await driver.findElement(By.id("dateOfBirthInput")).click();
    await driver.findElement(By.className("react-datepicker__month-select")).click();
    await driver.findElement(By.xpath(`//option[text()='${month}']`)).click();
    await driver.findElement(By.className("react-datepicker__year-select")).click();
    await driver.findElement(By.xpath(`//option[text()='${year}']`)).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//div[contains(@aria-label, '${month}') and text()='${day}']`)).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("subjectsInput")).sendKeys(subject);
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//div[@role='option' and contains(text(),'${subject}')]`)).click();
    for(let i=0;i<hobbies.length;i++){
    await driver.findElement(By.xpath(`//label[text()='${hobbies[i]}']`)).click();
    await driver.sleep(2000);
    }
    await driver.findElement(By.id("uploadPicture")).sendKeys("C:\\Users\\Asus\\Downloads\\image (2).png");
    await driver.findElement(By.id("currentAddress")).sendKeys(currentAddress);
    await driver.findElement(By.id("state")).click();
    await driver.findElement(By.xpath(`//div[text()='${state}']`)).click();
    await driver.findElement(By.id("city")).click();
    await driver.findElement(By.xpath(`//div[text()='${city}']`)).click();
    await driver.findElement(By.id("submit")).click();
    await driver.sleep(5000);
    await driver.quit();
    

};


testRunner();