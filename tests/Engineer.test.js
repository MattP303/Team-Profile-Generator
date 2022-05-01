const Engineer = require('../lib/engineerClass');
const Employee = require('../lib/employee');


  
  test("Verify we get the correct role", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bob", 419, "engineer@work.domain", "GitLit");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Make sure you can set GitHub Username", () => {
    const testValue = "GitLit";
    const e = new Engineer("Bob", 419, "engineer@work.domain", testValue);
    expect(e.githubUsername).toBe(testValue);
  });

  test("Make sure getGithub returns the correct username", () => {
    const testValue = "GitLit";
    const e = new Engineer("Bob", 419, "engineer@work.domain", testValue);
    expect(e.getGithub()).toBe(testValue);
  });