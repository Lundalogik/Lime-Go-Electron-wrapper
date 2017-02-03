var os = require('os')
var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var goMac = {
    name: 'Lime Go', // will be inferred if not specified
    targetUrl: 'https://go.lime-go.com/', // required
    out: './build',
    icon: './go.icns',
    counter: true,
    platform: "mac",
};

nativefier(goMac, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});

// possible options, defaults unless specified otherwise
var goWin = {
    name: 'Lime Go', // will be inferred if not specified
    targetUrl: 'https://go.lime-go.com/', // required
    out: './build',
    icon: './go.ico',
    counter: true,
    platform: "win32"
};

nativefier(goWin, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});