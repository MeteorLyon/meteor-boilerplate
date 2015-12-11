#!/usr/bin/env bash

if [ -z "$npm_package_config_mongourl" ]; then echo "No mongourl config found in package.json"; else echo "set mongourl" && export MONGO_URL=$npm_package_config_mongourl; fi
if [ -z "$npm_package_config_mailurl" ]; then echo "No mailurl config found in package.json"; else echo "set mailurl" && export MAIL_URL=$npm_package_config_mailurl; fi
if [ -z "$npm_package_config_rooturl" ]; then echo "No rooturl config found in package.json"; else echo "set rooturl" && export ROOT_URL=$npm_package_config_rooturl; fi
if [ -z "$npm_package_config_port" ]; then echo "No port config found in package.json"; else echo "set port" && export PORT=$npm_package_config_port; fi
if [ -z "$npm_package_config_packagedirs" ]; then echo "No packagedirs config found in package.json"; else echo "set packagedirs" && export PACKAGE_DIRS=$npm_package_config_packagedirs; fi

if [ -z "$npm_package_config_testsettingsfile" ]; then (
    echo "set a settings for test!"
    exit 1
); fi

if [ -z "$npm_package_config_testpackagename" ]; then (
    echo "set a package name to test!"
    exit 1
); fi

export METEOR_SETTINGS=$npm_package_config_testsettingsfile

meteor test-packages $npm_package_config_testpackagename --port $PORT
