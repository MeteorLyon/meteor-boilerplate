#Meteor Boilerplate

##Introduction

A simple Boilerplate with all required packages for development
Web applications are splitted in app folder. There is one per aim : mobile only, desktop, admin only, service for
server only
All packages are in packages folder
We use sass for MaterializeCss or Fezvrata material and sources files are in tools folder
Usually you should store all pre-processed files in tools and use your prefered workflow to transpile your files into
the correct folder. You might also use meteor package for preprocess : less, fourseven:scss, ... it's up to you to 
choose.

MaterializeCSS:
 * font are copyed into app/project/public/font
 * css are generated from preprocessing tools into app/project/public/css
 * js are copyed into app/project/client/common
 
Fezvrata:
@TODO finish

##Installation

If you are on windows or linux : 

    edit package.json and set scripts.start to bin/start.sh or bin\\start.bat
    edit package.json and set scripts.test to bin/test.sh or bin\\test.bat
    
Copy the package.dist.json into package.json

    cp package.dist.json package.json
    edit package.json with your informations
        rooturl: Meteor root_url
        mongourl: Meteor mongo_url
        mailurl: Meteor mail_url // TAKE CARE TO urlencode the email, ex. on MailGun: smtp://postmaster%40sandbox123123ze&23123.mailgun.org:yourPasswordHere@smtp.mailgun.org:587
        port: Meteor port
        packagedirs: Meteor package_dirs
        settingsfile: Meteor settings file
        testsettingsfile: Meteor settings file for your test
        testpackagename: Name of the package to test when running "npm test"

##Usage

Start your app with

    npm start
    
Edit the settings of your app with settings.dist.json 

    cp settings.dist.json settings.json
    edit required information
    config.collections.prefix is the prefix used for your collection :
        var MyCol = new Meteor.Collection(Meteor.settings.config.collections.prefix + "whatYouWant");

Test a package with :

    edit package.json and set config.testpackagename to "TheNameOfThePackageToTest"
    npm test
    open your browser to the required url (localhost:3000)
    
If you need to load fixtures in your test you can store those fixtures in : tools/tests or in packages/yourPackage/fixtures/
Then you have to add them in the settings.tests.json in the tests.files node.
Then just load them like this in your test :

    var fs = Npm.require('fs'),
        fixtures = fs.readFileSync(Meteor.settings.tests.root + Meteor.settings.tests.files.yourNode).toString();
          
    
##Deployment
For demos and beta : set a deploy name in the package.js and run npm run-script deploy command.

For production, passenger phusion, npm mup package or just meteor build command and do it your self.

##Take care

Follow security requirements : 

* http://joshowens.me/the-curious-case-of-the-unknowing-leaky-meteor-security/
* http://joshowens.me/meteor-security-101/ 
* http://joshowens.me/meteor-security-201/
* summary of 3 previous : https://meteorjs.club/MeteorSecurityChecklist.pdf?__s=ysuohrq1qzqkx56usqfm
* http://blog.east5th.co/2015/08/31/incomplete-argument-checks/

##TODO

Use METEOR_SETTINGS env var instead of --settings aFile
In production this is the way it works. But the fact is how to do it in an auto way ? for linux it's quite simple
but for windows, in a batch file, it's harder for me. Any help is welcome !

Improve the usage of Handlebars with let and each ... in ... : http://devblog.me/no-data-context.html
