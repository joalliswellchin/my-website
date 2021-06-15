# my-website

This is the static files for my website.
Run via ReactJS

Start via `npm start`


# What have been used here
1. React material ui (you can refer to the subdirectory src/App/Themes/README.md for this) for the button design
2. react-burger-menu for the burger menu
3. react-socks for the mobile-responsive web design
4. react-router-dom for the easy routing of endpoints

# How to deploy on Google App Engine
1. run the following
```sh
cd react-app
npm run build
```
2. Go to google cloud > cloud storage > bucket
3. upload build folder and if first time, also upload app.yaml
4. Go to GCP shell and set project
5. create directory and run
```
gsutil rsync -r gs://bucketname newdirectory
cd newdirectory
gcloud app deploy
```

# How to deploy to Google Cloud Storage
1. Go to google cloud > open cloud shell
2. run the following
```sh
cd my-website
git pull
cd react-app
npm i
npm run build
gsutil rsync -r gs://www.joalliswellchin.net build
```