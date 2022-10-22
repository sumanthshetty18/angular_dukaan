// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //json server
  // userapi:"http://localhost:3000/users",
  // cartapi:"http://localhost:3000/cart"

  
  postsapi:"https://heroku-json-fakedb-dukaan.herokuapp.com/posts",     //heroku
  //userapi:"https://heroku-json-fakedb-dukaan.herokuapp.com/users",   //heroku
  userapi:"https://localhost:7246/api/Registrations",                   //dot net
  cartapi:"https://heroku-json-fakedb-dukaan.herokuapp.com/cart"        //heroku
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
