const _ = require('lodash');

function filterGroup(group, listOfTemplatesToFilter) {
    let filteredGroup = [];
    for (let i = 0; i < group.length; i++) {
        groupEl = group[i];
        let templates = []; 
        for (let j = 0; j < groupEl.templates.length; j++) {
            if (!_.includes(listOfTemplatesToFilter, groupEl.templates[j].file)) {
                templates.push(groupEl.templates[j]);
            }
        }
        if (templates.length > 0) {
            groupEl.templates = templates;
            filteredGroup.push(groupEl);        
        }
    }
    return filteredGroup;
}

module.exports = {
    filterGroup
};
