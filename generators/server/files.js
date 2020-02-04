const chalk = require('chalk');
const _ = require('lodash');
const fileUtils = require('../file-utils');
const serverFiles = require('generator-jhipster/generators/server/files').serverFiles;
const constants = require('generator-jhipster/generators/generator-constants');

const SERVER_MAIN_SRC_DIR = constants.SERVER_MAIN_SRC_DIR;

const serverJavaAuthConfigFiles = [
    'package/config/WebConfigurer.java',
    'package/config/SecurityConfiguration.java',
    'package/config/ReactiveSecurityConfiguration.java',
    'package/config/UaaWebSecurityConfiguration.java',
    'package/web/rest/UserJWTController.java',
    'package/web/rest/vm/LoginVM.java'
];

// 
const serverJavaAppFiles = [
    'package/Application.java',
    'package/ApplicationWebXml.java'
];

const serverJavaConfigFiles = [
    'package/config/WebConfigurer.java'
];

const serverJavaWebErrorFiles = [
    'package/web/rest/errors/package-info.java',
    'package/web/rest/errors/BadRequestAlertException.java',
    'package/web/rest/errors/ErrorConstants.java',
    'package/web/rest/errors/ExceptionTranslator.java',
    'package/web/rest/errors/FieldErrorVM.java',
    'package/web/rest/errors/EmailAlreadyUsedException.java',
    'package/web/rest/errors/EmailNotFoundException.java',
    'package/web/rest/errors/InvalidPasswordException.java',
    'package/web/rest/errors/LoginAlreadyUsedException.java'
];

const serverJavaWebFiles = [
    'package/web/rest/vm/package-info.java',
    'package/web/rest/package-info.java',
    'package/web/rest/ClientForwardController.java',
    'package/web/rest/KafkaResource.java'
];

const serverTestFwFiles = [
    'package/web/rest/TestUtil.java',
    'package/web/rest/errors/ExceptionTranslatorIT.java',
    'package/web/rest/errors/ExceptionTranslatorTestController.java',
    'package/web/rest/ClientForwardControllerTest.java',
    'package/config/WebConfigurerTest.java',
    'package/config/WebConfigurerTestController.java',
    'package/web/rest/LogoutResourceIT.java'
];

const serverJavaUserManagementFiles = [
    'package/web/rest/UserResource.java',
    'package/web/rest/UserResourceIT.java',
    'package/web/rest/vm/ManagedUserVM.java',
    'package/web/rest/AccountResource.java',
    'package/web/rest/AccountResourceIT.java',
    'package/web/rest/AuditResource.java',
    'package/web/rest/AuditResourceIT.java',
    'package/web/rest/vm/KeyAndPasswordVM.java',
    'package/web/rest/UserJWTControllerIT.java',
    'templates/mail/activationEmail.html',
    'templates/mail/creationEmail.html',
    'templates/mail/passwordResetEmail.html'
];
/*

*/
function filterWebFiles() {
    return {
        filterFiles() {
            this.log(chalk.italic('\nFiltering web related Java files from: serverJavaAuthConfig.'));
            serverFiles.serverJavaAuthConfig = fileUtils.filterGroup(serverFiles.serverJavaAuthConfig, serverJavaAuthConfigFiles);;

            this.log(chalk.italic('Filtering web related Java files from: serverJavaApp.'));
            serverFiles.serverJavaApp = fileUtils.filterGroup(serverFiles.serverJavaApp, serverJavaAppFiles);

            this.log(chalk.italic('Filtering web related Java files from: serverJavaConfig.'));
            serverFiles.serverJavaConfig = fileUtils.filterGroup(serverFiles.serverJavaConfig, serverJavaConfigFiles);
            
            this.log(chalk.italic('Filtering web related Java files from: serverJavaWebError.'));
            serverFiles.serverJavaWebError = fileUtils.filterGroup(serverFiles.serverJavaWebError, serverJavaWebErrorFiles);

            this.log(chalk.italic('Filtering web related Java files from: serverJavaWeb.'));
            serverFiles.serverJavaWeb = fileUtils.filterGroup(serverFiles.serverJavaWeb, serverJavaWebFiles);
            
            this.log(chalk.italic('Filtering web related Java files from: serverTestFw.'));
            serverFiles.serverTestFw = fileUtils.filterGroup(serverFiles.serverTestFw, serverTestFwFiles);

            this.log(chalk.italic('Filtering web related Java files from: serverJavaUserManagement.\n'));
            serverFiles.serverJavaUserManagement = fileUtils.filterGroup(serverFiles.serverJavaUserManagement, serverJavaUserManagementFiles);
        }
    };
}

function writeCustomFiles() {
    return {
        writeCustomFiles() {
            const customSkipServerWebServerFiles = {
                skipServerWebModule: [
                {
                    path: SERVER_MAIN_SRC_DIR,
                    templates: [
                        {
                            file: 'package/config/SecurityConfiguration.java',
                            renameTo: generator => `${generator.javaDir}config/SecurityConfiguration.java`
                        }
                    ]
                },
                {
                    path: SERVER_MAIN_SRC_DIR,
                    templates: [
                        { 
                            file: 'package/Application.java', 
                            renameTo: generator => `${generator.javaDir}${generator.mainClass}.java` 
                        }
                    ]
                }
            ]
            };
            this.writeFilesToDisk(customSkipServerWebServerFiles, this, false);
        }
    }
}

module.exports = {
    writeCustomFiles,
    filterWebFiles    
};
