# DW's Ionic 2, Firebase and Angularfire workshop

#### This is a simple example of making a list app that stores the information on Firebase.

There are a few things you have to do in order to get this project up and running on your machine. These instructions are to get this project running. THIS IS NOT A WAY TO SET UP A NEW PROJECT. You must have Node, npm, Ionic and Cordova installed to make this work. 

1. You will need to set up your own firebase account here. https://firebase.google.com/

2. You will need to create a database called devworkshoplist

3. Then you will need to import the devworkshoplist.json file that is included in the src/data directory


4. Once you get that done you will need to click on the Rules tab and change the read and write to true. Make it look like the images below. 

![alt-text](https://lh3.googleusercontent.com/fX7u6SKW82AnUrfCuwN96qPkFgOXij_zzN8rs2OwP1ZdvfJ2wmNpx98szAeN0uEmqA3e_lc3RPR7vb_WQlOnRHW8XM7lZXKB-o9AE6dFf_NjQDzJeYQz3uozi9ZIP9A48i_YOTHz5FtmSFTLW3GHBGqfsnDCjTQDqguQOvEG5VzMdCnPeJVg-dJ5u_qv5gRrq5AWQOm5y4gx9HifFTVQyiRId3vTAlCb-hmTJItzeOHoe3EY94npFwJMVShmtjT_xWuK3Kl_g6ePvLbqkuyBaIm29moER4TYW-xglWszWHBus7nbXV3qANSwYze9LQV5G0NqOqQTFO-Erb4WM3TPVHtKNP-lHEj8Ny-_5rgf7t6u23D6oVyaDCvZEdXtA-u3nfEFktvOqOX65atuDPWyyyrqHopPeIxQxcz_lvl5nTgRpvKh5lOsoluC5tySGub3xZ2k5-KLRxhBxl78o9IJrN6241OFANwb047WcLbYMIi6ulC_nHxUJxp4LO0-zeQUfAcjQVjJ_LuFxs3R8FaYk9Q1jLRZ-VFdPTRL-EYyfz-mIw17TS7JFsbk_Piol7j4Fu3_nxLKHr4q1_nXEKRA7ndugCTFE6ary1zX8nKUhmNK0YWWx6LM9A=w756-h534-no "this is the rules image")


#### Now to get the app set up

There are a few steps when setting up this Ionic 2 app on your machine. Everything you need in in there, but you have to run a few commands first. You have to have Node, npm, Ionic and Cordova installed to make this work. 

1. Clone this repository to your local machine
2. CD into the directory in terminal or open up the project in your favorite IDE that has a terminal window. Whichever you use just make sure you are in the project directory.
3. Once that is done run the command below. This will load all the node_modules needed for this project.


    npm install


4. Next you need to serve your app. Run this code and start the server. 


    ionic serve

5. Once your project starts in your browser you are ready to get the rest of the directories in your project. The way you do this is to restore the state. DO NOT RUN THIS COMMANS IN THE TERMINAL WINDOW THAT IS RUNNING THE SERVER YOU JUST STARTED.  You must either open a new terminal or quit the server.
 
 
     ionic state restore
 
 
 
 6. The last thing you need to do is open your app.module.ts file located in `src/app` and add your Firebase credentials there. I left the everything there for you to see what you need to replace. You can get this information from Firebase. Click the Overview button in the top left corner of your devworkshoplist database and then click on the Add Firebase to your web app round button. This will bring up your configuration information. DO NOT CLICK COPY. Instead copy everything inside the var config brackets. Then replace the code I left with your own. 
  
  That should get this app and running with your own Firebase server. 
  
  
  ### Here are some commands to start a new project and also some helper commands. 
  
  ##### Starting a new project. 
  
  1. Open terminal and CD into the directory you want your project to be created. 
  2. Once there you need to create a blank project. 
  
  
      ionic start name_of_your_project blank --v2
      ionic serve
 3. This will create almost all you need to run your app. Here are the commands to add pages and providers
 
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