# Remote Config Dashboard

Feature toggles are becoming a necessity for organizations that wish to release in a continuous fashion. They allow for the decoupling of technical and product releases, rapid failover recovery and if extended even cool stuff like A/B testing.
There are some great commercial options to respond to this need. However, for a simple implementation a basic service with a list of toggles and their states would suffice.

This project was born out of the necessity for such simple implementation.
It comprises of a web interface to manage feature toggles and other configurable remote properties that one might need in a web or native mobile app. This web app is meant to be plugged to an web service that would return app configuration, allow to post new configuration, etc.

It is meant to be open to be modified in order to suit different needs.
Check out a live demo [here](https://joaoflf.github.io/remote-config-dashboard/).

### App & State Management
This web app is built using Angular 4 with the [angular-cli](https://github.com/angular/angular-cli).
It also uses [ngrx](https://github.com/ngrx) to manage its state, so you can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) to inspect it.
The idea is for the app to manage all its state offline and when the user wishes, he can press a *publish* button to synchronize the config json with the service.
[ngrx/effects](https://github.com/ngrx/effects) are planned to be used to plugin a service for fetching and changing data.


### Development
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Next steps
The imediate next step is develop a separate web API in ExpressJS+MongoDB or similar to manage and serve the configs.
Later will come the introduction of [ngrx/effects](https://github.com/ngrx/effects) to connect the web app to this API.

## Credits
In order to build this dashboard, some amazing open source projects and components were used. These include [ngrx](https://github.com/ngrx), [ClarityUI](https://vmware.github.io/clarity/) and [JSONEditor](https://github.com/josdejong/jsoneditor)
