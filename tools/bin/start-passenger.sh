#!/usr/bin/env bash

if [ -z "$npm_package_config_mongourl" ]; then echo "No mongourl config found in package.json"; else echo "set mongourl" && export MONGO_URL=$npm_package_config_mongourl; fi
if [ -z "$npm_package_config_mongooplogurl" ]; then echo "No mongooplogurl config found in package.json"; else echo "set mongooplogurl" && export MONGO_OPLOG_URL=$npm_package_config_mongooplogurl; fi
if [ -z "$npm_package_config_mailurl" ]; then echo "No mailurl config found in package.json"; else echo "set mailurl" && export MAIL_URL=$npm_package_config_mailurl; fi
if [ -z "$npm_package_config_rooturl" ]; then echo "No rooturl config found in package.json"; else echo "set rooturl" && export ROOT_URL=$npm_package_config_rooturl; fi
if [ -z "$npm_package_config_port" ]; then echo "No port config found in package.json"; else echo "set port" && export PORT=$npm_package_config_port; fi
if [ -z "$npm_package_config_packagedirs" ]; then echo "No packagedirs config found in package.json"; else echo "set packagedirs" && export PACKAGE_DIRS=$npm_package_config_packagedirs; fi
if [ -z "$npm_package_config_settingsfile" ]; then echo "No settings file found in package.json" && export REBOLON_SETTINGS=""; else echo "set settings" && export METEOR_SETTINGS=$(cat $npm_package_config_settingsfile) && export REBOLON_SETTINGS="--meteor-app-settings $npm_package_config_settingsfile"; fi

passenger start $REBOLON_SETTINGS --port $PORT;