to start:
	ng serve --open

  ==================================================================

  How to run node.js source code [for to Non-Asp.Net Core Developers]
You can use "Node.js" source code, which can be downloaded from the respective lecture that you want to run.



How to run the source code after download:
Download the source code from the lecture that you are currently learning, using 'Resources' button of the same lecture.

Extract the zip file. You will find two folders "TaskManager" (or TaskManager-Angular) and "nodejs" folders.

Locate the "TaskManager" folder (or 'TaskManager-Angular' folder) in Command Prompt and run "npm install" command and then "ng serve" command.

Username: admin

Password: Admin123#

Prerequisites:

NodeJS

npm install @angular/cli -g

Visual Studio Code



Steps:
1. Find the "nodejs" folder from the source code zip file that you have downloaded from the lecture you are currently learning.

2. Open the command prompt (terminal) window and locate that extracted folder.

3. Run the following commands

npm install
node index.js


- It starts nodejs server at 9090 port.

- You can send requests to this port. So "http://localhost:9090" at all requests in angular.

Eg:  http://localhost:9090/api/projects

Eg:  http://localhost:9090/authenticate



You need to prefix "http://localhost:9090" at all urls of your api requests.

Eg:



It is already CORS enabled; so need of "ng build" command and "copy-paste into folder" as demonstrated in the lectures.

Just run your angular application using "ng serve" command and the nodejs server catches up the requests at 9090 port.

Make sure the "node index.js" command runs in backup while you want to run your angular application.



You need to run the angular application normally, using "ng serve" command.

The url "http://localhost:9090" is only for sending http requests (api requests).



Username: admin

Password: Admin123#





Course Material
You can download the course material at the LAST lecture of the course.



Source Code
You can download the source code by clicking on "Resources" at respective lecture itself. If source code is missing for any lecture, the subsequent lecture's source code includes with the previous lecture's source code, as it is an incremental project.



Error: Cannot find module 'node-sass'
In case if you get above error while "npm install", try the following command:

npm install --save-dev  --unsafe-perm node-sass@4

npm rebuild node-sass --force

