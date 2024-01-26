const { test } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPageTalent500.spec");
test("Login test", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.openLoginPage();
  await Login.loginIntoSite("applitoolsautomation@yopmail.com", "Test@123");
  await Login.homePageConetnt("PROFILE");
  await Login.logoutFromSite();
  await Login.homePageConetntAfterLogout("Opportunities favor the bold");
});