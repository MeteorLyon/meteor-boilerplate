#!/usr/bin/env bash

if [ -z "$npm_package_config_mailurl" ]; then echo "No mailurl config found in package.json"; else echo "set mailurl" && export MAIL_URL=$npm_package_config_mailurl; fi
if [ -z "$npm_package_config_rooturl" ]; then echo "No rooturl config found in package.json"; else echo "set rooturl" && export ROOT_URL=$npm_package_config_rooturl; fi
if [ -z "$npm_package_config_packagedirs" ]; then echo "No packagedirs config found in package.json"; else echo "set packagedirs" && export PACKAGE_DIRS=$npm_package_config_packagedirs; fi
if [ -z "$npm_package_config_settingsfile" ]; then echo "No settings file found in package.json" && export REBOLON_SETTINGS=""; else echo "set settings" && export REBOLON_SETTINGS="--settings $npm_package_config_settingsfile"; fi

if [ -z "$npm_package_config_deploysitename" ]; then (
    echo "set a deploy sitename before deploy!"
    exit 1
); fi

meteor deploy $npm_package_config_deploysitename $REBOLON_SETTINGS;
