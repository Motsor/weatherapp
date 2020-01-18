# Weatherapp

There was a beautiful idea of building an app that would show the upcoming weather. The developers wrote a nice backend and a frontend following the latest principles and - to be honest - bells and whistles. However, the developers did not remember to add any information about the infrastructure or even setup instructions in the source code.

Luckily we now have [docker compose](https://docs.docker.com/compose/) saving us from installing the tools on our computer, and making sure the app looks (and is) the same in development and in production. All we need is someone to add the few missing files!

## Prerequisites

* An [openweathermap](http://openweathermap.org/) API key.
* [Docker](https://docs.docker.com/install/)
* [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)
* The [Kubernetes](https://kubernetes.io/) command-line tool, [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Changes to the base project

### Backend service

* Added a Dockerfile to containerize the API
* Fetched more data from OpenWeatherMap API

```
{
    weather: {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n"
    },
    main: {
        temp: 5.04,
        feels_like: -2.37,
        temp_min: 5,
        temp_max: 5.56,
        pressure: 1008,
        humidity: 93
    },
    location: "Helsinki",
    dt: 1579379340
}
```
* Added [dotenv](https://www.npmjs.com/package/dotenv). The API key for OpenWeatherMap should be added to a *.env* file: `APPID=YOUR_API_KEY`

![Weatherapp REST API](/img/api.PNG)

### Frontend service

* Added a Dockerfile to containerize the API
* Added Webpack hot reloading
```
{
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    }
}
```
* Display the city, date and time, description of the weather and the degree in the UI.
* Added simple inputs to fetch the weather data of the specified city.

![Weatherapp user interface](/img/ui.PNG)

### Other

* Created a compose file to setup both the backend and frontend services with volumes for the local development and hot reloading.

## Deploying to minikube

Firstly, the OpenWeatherMap API key should be added as a environment variable to the *.env* file in the backend services folder.

Then, the docker images need to be built using the following command: `docker-compose build`.

Next start up minikube: `sudo minikube start --vm-driver=none`

* To access dashboard:
    * Run: sudo minikube dashboard
        * Press ctrl+c once you see: http://127.0.0.1:43661/api/v1/...
    * kubectl port-forward -n kubernetes-dashboard service/kubernetes-dashboard --address 0.0.0.0
8080:80

Then, there is a Kubernetes template file in the root of the project named [weatherapp-service.yml](https://github.com/Motsor/weatherapp/blob/master/weatherapp-service.yml) that takes care of the creation of the kubernetes pods, deployment and service. Apply the resources in the Kubernetes template file with the following command: `kubectl apply -f weatherapp-service.yml`

The backend and the frontend services are now simply running at port **9000** and **8000**.

**NOTE!**
If you are developing in a Vagrant virtual machine then it is necessary to expose Kubernetes service outide Vagrant using port-forwarding:

`kubetctl port-forward servie/weatherapp --address 0.0.0.0 9000:9000 8000:8000`
