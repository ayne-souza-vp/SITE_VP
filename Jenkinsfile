node ('gcp-worker') {

	sh "echo ${env.BRANCH_NAME} > branch.txt"

		buildWithComposeGCP {
			composeFileName = "docker-build.yml"
			composeService = "site"
			composeProjectName = "site-web"
		}

		buildDockerContainerGCP {
			dockerRepositoryName = "site-web"
			dockerFileLocation = "."
		}

		deployK8sServiceGCP {
			dockerRepositoryName = "site-web"
			dockerService = "site-web"
			dockerk8sGroup = "sbnk-commons"
		}

  tagRelease {
    // gitRepo = "dev.azure.com/socialbank/Backoffice/_git/SB_BACKOFFICE_V2"
  }


}
