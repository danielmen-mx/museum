# get timestamp
now=$(date +"%T")

# build
npm run build

# add dist folder
git add -A
git commit -m "deploy production $now"

# push changes
git push