
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([    /* Pass the question in here, A question is an object*/
    {
    message:"Type in your URL: ", // The question to print
    name: "URL",                  //use to storing the answer
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrImg.png")); // make the image with url

    fs.writeFile("Url.txt", url, (err) => {        // make the text file with url inside
        if (err) throw err;  
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
