#!/usr/bin/env bash

if [ -z "$npm_package_config_javakeystore" ]; then (
    echo "No java keystore found config found in package.json (mobile app)"
    exit 1
); fi

if [ -z "$npm_package_config_buildfolder" ]; then (
    echo "No build folder config found in package.json (mobile app)"
    exit 1
); fi

if [ -z "$npm_package_config_javakeystorealiasname" ]; then (
    echo "set an alias name used when you generate your keystore"
    exit 1
); fi

jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore $npm_package_config_javakeystore $npm_package_config_buildfolder/android/release-unsigned.apk $npm_package_config_javakeystorealiasname
