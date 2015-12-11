#!/usr/bin/env bash

if [ -z "$npm_package_config_packagedirs" ]; then echo "No packagedirs config found in package.json"; else echo "set packagedirs" && export PACKAGE_DIRS=$npm_package_config_packagedirs; fi

meteor update $*
