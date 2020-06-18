const _ = require('lodash');

function filterGroup(group, listOfTemplatesToFilter) {
    const filteredGroup = [];
    for (let i = 0; i < group.length; i++) {
        const groupEl = group[i];
        const templates = [];
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
