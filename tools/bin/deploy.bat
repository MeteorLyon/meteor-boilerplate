@echo off

IF [%NPM_PACKAGE_CONFIG_MAILURL%] NEQ [] (
    echo "set mailurl" && (SET MAIL_URL=%NPM_PACKAGE_CONFIG_MAILURL%)
) ELSE (
    echo "No mailurl config found in package.json"
)

IF [%NPM_PACKAGE_CONFIG_ROOTURL%] NEQ [] (
    echo "set rooturl" && (SET ROOT_URL=%NPM_PACKAGE_CONFIG_ROOTURL%)
) ELSE (
    echo "No rooturl config found in package.json"
)

IF [%NPM_PACKAGE_CONFIG_PACKAGEDIRS%] NEQ [] (
    echo "set packagedirs" && (SET PACKAGE_DIRS=%NPM_PACKAGE_CONFIG_PACKAGEDIRS%)
) ELSE (
    echo "No packagedirs config found in package.json"
)

IF [%NPM_PACKAGE_CONFIG_MOBILESERVER%] NEQ [] (
    echo "set mobile server (REMOVE PORT FROM URI BECAUSE IT'S NOT USED ON METEOR.COM)" && (SET REBOLON_MOBILE_SERVER=--mobile-server %NPM_PACKAGE_CONFIG_MOBILESERVER%)
) ELSE (
    echo "No mobile server config found in package.json (mobile app offline)" && (SET REBOLON_MOBILE_SERVER= )
)

IF [%NPM_PACKAGE_CONFIG_SETTINGSFILE%] NEQ [] (
    echo "set settings" && (SET REBOLON_SETTINGS=--settings %NPM_PACKAGE_CONFIG_SETTINGSFILE%)
) ELSE (
    echo "No settings found in package.json" && (SET REBOLON_SETTINGS= )
)

IF [%NPM_PACKAGE_CONFIG_DEPLOYSITENAME%] == [] echo "set a deploy sitename before deploy!" && exit /b 1

printf "deploy %NPM_PACKAGE_CONFIG_DEPLOYSITENAME% %REBOLON_SETTINGS% %REBOLON_MOBILE_SERVER%";
meteor deploy %NPM_PACKAGE_CONFIG_DEPLOYSITENAME% %REBOLON_SETTINGS% %REBOLON_MOBILE_SERVER%
