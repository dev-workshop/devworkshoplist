# DW's Ionic 2, Firebase and Angularfire workshop

#### This is a simple example of making a list app that stores the information on Firebase.

There are a few things you have to do in order to get this project up and running on your machine. These instructions are to get this project running. THIS IS NOT A WAY TO SET UP A NEW PROJECT. You must have Node, npm, Ionic and Cordova installed to make this work. 

1. You will need to set up your own firebase account here. https://firebase.google.com/

2. You will need to create a database called devworkshoplist

3. Then you will need to import the devworkshoplist.json file that is included in the src/data directory

4. Once you get that done you will need to click on the Rules tab and change the read and write to true. Make it look like the images below. 

![alt text][rules]
[rules]: https://dl.dropboxusercontent.com/u/7726015/firebase_rules.png "Logo Title Text 2"



#### Now to get the app set up

There are a few steps when setting up this Ionic 2 app on your machine. Everything you need in in there, but you have to run a few commands first. You have to have Node, npm, Ionic and Cordova installed to make this work. 

2. Clone this repository to your local machine

2. CD into the directory in terminal or open up the project in your favorite IDE that has a terminal window. Whichever you use just make sure you are in the project directory.

2. Once that is done run the command below. This will load all the node_modules needed for this project.


    ``` 
    npm install 
    ```


2. Next you need to serve your app. Run this code and start the server. 


    ```
    ionic serve
    ```


2. Once your project starts in your browser you are ready to get the rest of the directories in your project. The way you do this is to restore the state. DO NOT RUN THIS COMMANS IN THE TERMINAL WINDOW THAT IS RUNNING THE SERVER YOU JUST STARTED.  You must either open a new terminal or quit the server.

 
     ```
     ionic state restore
     ```
 
 
2. The last thing you need to do is open your app.module.ts file located in `src/app` and add your Firebase credentials there. I left the everything there for you to see what you need to replace. You can get this information from Firebase. Click the Overview button in the top left corner of your devworkshoplist database and then click on the Add Firebase to your web app round button. This will bring up your configuration information. DO NOT CLICK COPY. Instead copy everything inside the var config brackets. Then replace the code I left with your own. 
  
That should get this app up and running with your own Firebase server. 
  

### Here are some commands to start a new project and also some helper commands. 
##### Starting a new project. 
  
1. Open terminal and CD into the directory you want your project to be created. 
1. Once there you need to create a blank project. 
  
      ```
      ionic start name_of_your_project blank --v2
      ionic serve
     ```
      
1. This will create almost all you need to run your app. Here are the commands to add pages and providers
 
     ```
      //Creating pages
     ionic g page Intro
     ionic g page Checklist 
     
     //Creating Providers
     ionic g provider Data
     
     //To add Firebase to your project.
     npm install @ionic/app-scripts@latest --save-dev
     
     npm install @types/request@0.0.30 --save-dev --save-exact
     
     npm install firebase angularfire2 --save
 
 
     //Here are some helper functions
     //adding a platform
     ionic platform add ios
     ionic platform add android
     
     //adding plugins. These are installed when the project is created. So this is just an example. 
     ionic plugin add cordova-sqlite-storage
     ionic plugin add cordova-plugin-statusbar
     ionic plugin add cordova-plugin-splashscreen
     ionic plugin add ionic-plugin-keyboard
     ionic plugin add cordova-plugin-crosswalk-webview
     
     ionic plugin add https://github plugin address
    ```

That is all you need to get a new project running with Firebase installed. 

Hope this helps. 
