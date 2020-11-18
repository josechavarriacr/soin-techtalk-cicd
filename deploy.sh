cd /srv/node/soin-techtalk-cicd/ && 
git checkout master &&
git reset --hard origin/master &&
git pull origin master -f && 
yarn install &&
yarn build && 
yarn start:prod