# slash-design

/design content that is not hosted by a separate backend app

# Deployment

## staging:

TODO: setup circle ci to push automatically

(accessible via https://wwwpoc.ibm.com/design/)

`cf login -a https://api.ng.bluemix.net -sso -s slashDesign -o IBMDesignOrg`

`cf push -f .circleci/manifest.staging.yml`

Repeat steps for Germany

`cf login -a https://api.eu-de.bluemix.net -sso -s slashDesign -o IBMDesignOrg`

`cf push -f .circleci/manifest.staging.yml`

## production:

Must be deployed manually against both the US and Germany bluemix geos:

1: cf api https://api.ng.bluemix.net for the US instance

2: cf target -s slashDesign -o IBMDesignOrg

5: cf push -f manifest.prod.yml

6: repeat steps 2 thru 4 with the Germany api endpoint (cf api https://api.eu-de.bluemix.net)

## Cache / Akamai

The Akamai cache can be purged via https://control.akamai.com/homeng/view/main
However, in order to purge production urls, https://www.ibm.com/design/abc must be purged as https://default.ak.origins.s81c.com/design/abc

And in order to purge staging urls, https://wwwstage.ibm.com/design/abc must be purged as https://wwwstagedefault.ak.origins.s81c.com/design/abc
