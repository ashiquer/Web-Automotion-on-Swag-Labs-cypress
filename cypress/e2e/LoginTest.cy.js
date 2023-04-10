import LoginPage from "../pages/LoginPage"

describe("Testing Login Functionality",()=>{
    const loginPage=new LoginPage();
    beforeEach(()=>{
        cy.viewport(1920,1080);
    })

    it("Testing with Invalid creds",()=>{

        loginPage.userLogin("standard_user","secret_suce");
        loginPage.invalidAssertion();
    })

    it("Testing with valid creds",()=>{

        loginPage.userLogin("standard_user","secret_sauce");

    })
})