#!/bin/bash -e

# Check sed stuff, basically to support OSX
if [[ $(uname) == 'Linux' ]]
 then
    SED=sed
else
    which gsed > /dev/null
    if [ $? -ne 0 ]; then
        echo 'Install core utils to run this on OSX: brew install coreutils'
        exit 1
    fi

    SED=gsed
fi

folder=~/dev/flutter/flutter/packages/flutter/lib/src

grep -R -n "^ *class [A-Z]" $folder |
$SED -E  's|class\s(\S*)\s.*|\1|g; s|^([^:]*):([^:]*):([^:]*)$|"\3":"\1#L\2",|gm'
