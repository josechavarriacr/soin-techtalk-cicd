cd /srv/node/soin-techtalk-cicd/ && 
git pull origin master -f && 
yarn install &&
yarn build && 
yarn start:prod