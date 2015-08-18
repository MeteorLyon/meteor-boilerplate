#Meteor Boilerplate

##Introduction

A simple Boilerplate with all required packages for devlopment

##Installation

If you are on windows or linux : 

    edit package.json and set scripts.start to bin/start.sh or bin\\start.bat
    edit package.json and set scripts.test to bin/test.sh or bin\\test.bat
    
Copy the package.dist.json into package.json

    cp package.dist.json package.json
    edit package.json with your informations
        rooturl: Meteor root_url
        mongourl: Meteor mongo_url
        mailurl: Meteor mail_url
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
    
##Deployment
For demos and beta : meteor deploy aName

For production, passenger phusion, npm mup package or just meteor build command and do it your self.

##Take care

Follow security requirements : 

* http://joshowens.me/the-curious-case-of-the-unknowing-leaky-meteor-security/
* http://joshowens.me/meteor-security-101/ 
* http://joshowens.me/meteor-security-201/
* summary of 3 previous : https://meteorjs.club/MeteorSecurityChecklist.pdf?__s=ysuohrq1qzqkx56usqfm

##TODO

Use METEOR_SETTINGS env var instead of --settings aFile
In production this is the way it works. But the fact is how to do it in an auto way ? for linux it's quite simple
but for windows, in a batch file, it's harder for me. Any help is welcome !

Improve the usage of Handlebars with let and each ... in ... : http://devblog.me/no-data-context.html