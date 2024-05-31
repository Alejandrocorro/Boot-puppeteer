const sitioweb = [
    "Sitio Web",
    "Sitio Web",
    "Sitio Web",
  ]
  
  let failWeb = [];
  
  const pupperteer = require("puppeteer")
  const fs = require('fs/promises')
  const { OutgoingMessage } = require("http")
  
  let indexis = 0;
  
  async function start(element) {
    try {
      const browser = await pupperteer.launch()
      const page = await browser.newPage()
  
      //capture del home de la pagina
      await page.goto("https://" + element) 
      await page.screenshot({ path: 'screenshot/'+ element + ".png" , fullPage: true})
      await browser.close()
  
      if(sitioweb.length - 1 > indexis) {
        indexis++
        start(sitioweb[indexis])
      }
      
      //
      if(sitioweb.length - 1 == indexis){
        await fs.writeFile("names.text", failWeb.join("\r\n"))
      }
    } catch(e) {
      failWeb.push(sitioweb[indexis])
      indexis++
      start(sitioweb[indexis])
    }
    
  }
  
  start(sitioweb[indexis])