#!/usr/bin/env bash

if [ -z "$npm_package_config_mongourl" ]; then echo "No mongourl config found in package.json"; else echo "set mongourl" && export MONGO_URL=$npm_package_config_mongourl; fi
if [ -z "$npm_package_config_mailurl" ]; then echo "No mailurl config found in package.json"; else echo "set mailurl" && export MAIL_URL=$npm_package_config_mailurl; fi
if [ -z "$npm_package_config_rooturl" ]; then echo "No rooturl config found in package.json"; else echo "set rooturl" && export ROOT_URL=$npm_package_config_rooturl; fi
if [ -z "$npm_package_config_port" ]; then echo "No port config found in package.json"; else echo "set port" && export PORT=$npm_package_config_port; fi
if [ -z "$npm_package_config_packagedirs" ]; then echo "No packagedirs config found in package.json"; else echo "set packagedirs" && export PACKAGE_DIRS=$npm_package_config_packagedirs; fi
if [ -z "$npm_package_config_mobileserver" ]; then echo "No mobile server config found in package.json (mobile app offline)" && export REBOLON_MOBILE_SERVER=""; else echo "set mobile server" && export REBOLON_MOBILE_SERVER=" --server $npm_package_config_packagedirs"; fi

if [ -z "$npm_package_config_buildfolder" ]; then (
    echo "set a build folder before running the build system!"
    exit 1
) fi

if [ -z "$npm_package_config_settingsfile" ]; then meteor $npm_package_config_buildfolder $REBOLON_MOBILE_SERVER --port $PORT $*; else meteor $npm_package_config_buildfolder $REBOLON_MOBILE_SERVER --mobile-settings $npm_package_config_settingsfile --port $PORT $*; fi
