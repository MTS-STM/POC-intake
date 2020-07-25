#!/bin/bash
echo "Logging in to Dev K8 Cluster.."
az aks get-credentials --resource-group EsDCDTSRG --name EsDCDTSRG-K8S
echo "Done."

# Since we didn't get these from the createSPN script, we have to fetch them now.
if [ -z "$DOCKER_TAG" ]
then
    export DOCKER_TAG=latest
fi
export BASE_DOMAIN=dts-stn.com
export GITHUB_USER=$(az keyvault secret show --vault-name DTSSecrets --name dts-github-user --query value -otsv)
export GITHUB_TOKEN=$(az keyvault secret show --vault-name DTSSecrets --name dts-github-token --query value -otsv)
export VUE_APP_POC_INTAKE_DB_PASSWORD=$(az keyvault secret show --vault-name DTSSecrets --name dts-poc-intake-vue-db-pass-dev --query value -otsv)
export MONGO_DB_ROOT_PASS=$(az keyvault secret show --vault-name DTSSecrets --name dts-poc-intake-db-root-pass-dev --query value -otsv)