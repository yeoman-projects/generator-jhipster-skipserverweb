const serverFiles = require('generator-jhipster/generators/entity-server/files').serverFiles;
const fileUtils = require('../file-utils');

const filesToFilter = ['package/web/rest/EntityResource.java', 'package/web/rest/EntityResourceIT.java'];

function filterWebFiles() {
    return {
        filterFiles() {
            serverFiles.server = fileUtils.filterGroup(serverFiles.server, filesToFilter);
            serverFiles.test = fileUtils.filterGroup(serverFiles.test, filesToFilter);
        }
    };
}

module.exports = {
    filterWebFiles
};
