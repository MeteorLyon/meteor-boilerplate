@echo off

IF [%NPM_PACKAGE_CONFIG_MONGOURL%] NEQ [] (
    echo "set mongourl" && (SET MONGO_URL=%NPM_PACKAGE_CONFIG_MONGOURL%)
) ELSE (
    echo "No mongourl config found in package.json"
)

IF [%NPM_PACKAGE_CONFIG_MONGOOPLOGURL%] NEQ [] (
    echo "set mongooplogurl" && (SET MONGO_OPLOG_URL=%NPM_PACKAGE_CONFIG_MONGOOPLOGURL%)
) ELSE (
    echo "No mongooplogurl config found in package.json"
)

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
    echo "set mobile server" && (SET REBOLON_MOBILE_SERVER=" --server=%NPM_PACKAGE_CONFIG_MOBILESERVER%")
) ELSE (
    echo "No mobile server config found in package.json (mobile app offline)" && (SET REBOLON_MOBILE_SERVER="")
)

IF [%NPM_PACKAGE_CONFIG_SETTINGSFILE%] NEQ [] (
    echo "set settings" && (SET REBOLON_SETTINGS="--mobile-settings "%NPM_PACKAGE_CONFIG_SETTINGSFILE%)
) ELSE (
    echo "No settings found in package.json" && (SET REBOLON_SETTINGS="")
)

IF [%NPM_PACKAGE_CONFIG_BUILDFOLDER%] == [] echo "a build folder before running the build system!" && exit /b 1

meteor build %NPM_PACKAGE_CONFIG_BUILDFOLDER% %REBOLON_MOBILE_SERVER% %REBOLON_SETTINGS% %*
