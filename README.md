# Cortex Logic chatbot

## Chatbot backend built to function with a google dialogflow agent

Instructions:

* All commands and instructions are to be executed in the command line
* 'conda activate sysa'
* ':z'
* 'cd Git'
* 'cd Wellness_Chatbot'
* (If code has been changed recently and aws code needs to be updated)
  * git pull
  * provide valid cortex github username and password
* (If this is the first time running code after cloning/downloading)
  * 'npm install'
  * Authorise ngrok - https://ngrok.com/docs#getting-started-authtoken
  * 'npm install nodemon -g'
  * ensure credentials.json is in the folder 
* Connect to ngrok account:
  ngrok authtoken 1Y1SnL3y0rLFfmWCTNQsptukZQG_7MvYL2i4y8y9VcLhbZm8w
* ngrok http -subdomain=cortex_chatbot 8080
* open seperate command line window, cd to the /src directory
* nodemon server

Dependancies:

* Node.js (no version dependancy)
* NPM (usually bundled with Node.js installation)
* nodemon - install through NPM ("npm install nodemon -g")
* List of modules used by codebase can be found in the node_modules in the root directory - these will all be installed when 'npm install' is run
* Ngrok.exe has been downloaded (where the file is stored is not important, it is in the root directory for ease of use)



