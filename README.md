# Synopsis

Chatty Weather - A handy weather app delivering customizable weather forecasts and helpful recommendations using the MEAN stack

# ![Chatty Weather](/app/client/assets/chatty_weather.png)

## Team

 - __Product Owner__: [Dohun Park](https://github.com/DOH1211)

- __Git Manager__: [Selim Cebecioglu](https://github.com/selimc)

- __Development Team Members__: [Svetlin Mladenov](http://github.com/sveem), [Wen Tran](https://github.com/wentran), [Selim Cebecioglu](https://github.com/selimc), [Dohun Park](https://github.com/DOH1211)

## Tech Stack

!['mean'](/app/client/assests/mean.png)

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    client/             --> all of the files to be used in on the client 
        app.js          --> declare top-level app module
        activities      -->  files for activities components
        assets          --> folder containing styling elements 
          css/              --> css files
        food            --> files for food components
        weather         --> files for weather components
        services        --> factories for components
        lib/            --> angular and 3rd party JavaScript libraries
    ext/                --> all of the files to be used for Google    
                            Chrome extension
    web/
      activities          --> logic for GET and POST activities from API
      food                --> logic for GET and POST food from API
      phrases             --> logic and models for phrases DB 
      weather             --> logic for GET and POST weather from API
      db.js               --> configuring with DB and environment port
      server.js           --> setting up server connection
      router.js           --> event handlers for components from DB and 
                                  data from API
    