/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDqn0ux2BYx7IkJC3ddAhryuZOlYLwMiuY",
    authDomain: "iot-demo-37925.firebaseapp.com",
    databaseURL: "https://iot-demo-37925.firebaseio.com",
    projectId: "iot-demo-37925",
    storageBucket: "iot-demo-37925.appspot.com",
    messagingSenderId: "236833154171",
    appId: "1:236833154171:web:c9fff4c5563f39cd"
  }
};
