"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domaincomponent_1 = require("domaincomponent");
const react_1 = require("react");
const DomainLoadingExample = () => {
    const [loading] = (0, react_1.useState)(true);
    return (<domaincomponent_1.DomainLoading loading={loading}/>);
};
exports.default = DomainLoadingExample;
