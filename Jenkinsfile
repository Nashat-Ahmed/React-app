pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-repo') 
        ANSIBLE_PLAYBOOK = 'playbook-reactapp.yml' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                script {
                    sh """
                    ansible-playbook  ${ANSIBLE_PLAYBOOK} --extra-vars vars.yml
                    """
                }
            }
        }
    }

    post {
        always {
            // Clean up unused Docker images to save space
            script {
                sh "docker image prune -f"
            }
        }
    }
}

