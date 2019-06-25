const timeout = 50000
// typingSpeed value is set for wait time between keystrokes. Simulates realistic typing.
const typingSpeed = 50
const each=require('jest-each');
var i=0;
var p=0;
var x=0;
const fs = require('fs');
const csv = require('csv-parser');

xyz();
var rec={};

function abc(){
  var fs=require('fs');
   var contents = fs.readFileSync("login.json");
  // Define to JSON type
   var rec = JSON.parse(contents);
  return rec;
}


function xyz(){
  var record=abc();
describe(
  'Login test',
  () => {
  //  console.log(record[k].Password);
    let page

    beforeAll(async () => {
      jest.setTimeout(timeout)
    //console.log(record[k].Email);
    }, timeout)
    var r=abc();
    for(let k=0;k<r.length;k++){

    it('Testing....', async () => {
      //console.log(record[k].Email);
      page = await global.__BROWSER__.newPage()
      await page.goto('{your url}')
      var record=abc();
      var email=record[k].Email;
      var pass=record[k].Password;
      //console.log(email);
      await page.waitForSelector('input[formcontrolname="userName"]')
      await page.waitForSelector('input[formcontrolname="password"]')
      await page.type('input[formcontrolname="userName"]', email, {delay: typingSpeed})
      await page.type('input[formcontrolname="password"]', pass, {delay: typingSpeed})
      try{
        await page.click('button[class="ant-btn ant-btn-ghost"]')
      }
      catch(err){
        i=4;
      }

      await page.waitFor(1000);

      //await expect(i).toEqual(0);
      try{
        await page.waitForSelector("img[class='vz-user-img ant-dropdown-trigger']",{timeout:1000}).then(()=>{i=1});
      }
      catch(err){
        try{
          await page.waitForXPath("//*[text()='Choose an account']",{timeout:1000}).then(()=>{i=2});
        }

        catch(err){
           try{
             await page.waitForXPath("//*[text()=' SEND NEW CONFIRMATION LINK ']",{timeout:1000}).then(()=>{i=3});
           }
           catch(err){
            if(i!=0&&i!=4)
              i=5;
           }
        }

      }
      //if(!(page.waitForXPath("//*[text()=' SEND NEW CONFIRMATION LINK ']")))
        //if(!page.waitForXPath("//*[text()='Choose an account']"))
            //await page.waitForSelector("img[class='vz-user-img ant-dropdown-trigger']")


    // await page.waitFor(() =>
    //   document.getElementByXpath("//*[text()=' SEND NEW CONFIRMATION LINK '], //*[text()='Choose an account'], //*[text()='Support']").length
    // );
       //await page.waitFor(1000)
       console.log(i);
       record[k].Out=i;
       var json = JSON.stringify(record);
       fs.writeFile('login.json', json, 'utf8');
//       record[k].Out=i;
      await page.close();
    })
 }
  },timeout

)
}
