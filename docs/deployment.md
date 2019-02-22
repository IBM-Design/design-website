## Staging:

### Staging urls

https://slash-design-root-staging.eu-de.mybluemix.net/design/
https://slash-design-root-staging.mybluemix.net/design/

TODO: setup circle ci to push automatically

cf login -a https://api.ng.bluemix.net -sso -s slashDesign -o IBMDesignOrg
cf push -f .circleci/manifest.staging.yml

#### Repeat steps for Germany

cf login -a https://api.eu-de.bluemix.net -sso -s slashDesign -o IBMDesignOrg
cf push -f .circleci/manifest.staging.yml

## Production:

https://slash-design-root.mybluemix.net/design/
https://slash-design-root.eu-de.mybluemix.net/design/

cf login -a https://api.ng.bluemix.net -sso -s slashDesign -o IBMDesignOrg
cf push -f .circleci/manifest.prod.yml

#### Repeat steps for Germany

cf login -a https://api.eu-de.bluemix.net -sso -s slashDesign -o IBMDesignOrg
cf push -f .circleci/manifest.prod.yml
