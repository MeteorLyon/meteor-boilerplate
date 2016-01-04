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

IF [%NPM_PACKAGE_CONFIG_PORT%] NEQ [] (
    echo "set port" && (SET PORT=%NPM_PACKAGE_CONFIG_PORT%)
) ELSE (
    echo "No port config found in package.json"
)

IF [%NPM_PACKAGE_CONFIG_PACKAGEDIRS%] NEQ [] (
    echo "set packagedirs" && (SET PACKAGE_DIRS=%NPM_PACKAGE_CONFIG_PACKAGEDIRS%)
) ELSE (
    echo "No packagedirs config found in package.json"
)

IF [%NPM_PACKAGE_CONFIG_SETTINGSFILE%] NEQ [] (
    echo "set settings" && (SET REBOLON_SETTINGS=--settings %NPM_PACKAGE_CONFIG_SETTINGSFILE%)
) ELSE (
    echo "No settings found in package.json" && (SET REBOLON_SETTINGS="")
)

meteor %REBOLON_SETTINGS% --port %PORT% %*
