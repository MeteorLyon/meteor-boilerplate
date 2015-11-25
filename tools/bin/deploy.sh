#!/usr/bin/env bash

if [ -z "$npm_package_config_mongourl" ]; then echo "No mongourl config found in package.json"; else echo "set mongourl" && export MONGO_URL=$npm_package_config_mongourl; fi
if [ -z "$npm_package_config_mailurl" ]; then echo "No mailurl config found in package.json"; else echo "set mailurl" && export MAIL_URL=$npm_package_config_mailurl; fi
if [ -z "$npm_package_config_rooturl" ]; then echo "No rooturl config found in package.json"; else echo "set rooturl" && export ROOT_URL=$npm_package_config_rooturl; fi
if [ -z "$npm_package_config_packagedirs" ]; then echo "No packagedirs config found in package.json"; else echo "set packagedirs" && export PACKAGE_DIRS=$npm_package_config_packagedirs; fi

if [ -z "$npm_package_config_deploysitename" ]; then (
    echo "set a deploy sitename before deploy!"
    exit 1
) fi

if [ -z "$npm_package_config_settingsfile" ]; then meteor deploy $npm_package_config_deploysitename; else meteor deploy $npm_package_config_deploysitename --settings $npm_package_config_settingsfile; fi
