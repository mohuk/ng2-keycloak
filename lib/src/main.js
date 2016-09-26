"use strict";
const core_1 = require('@angular/core');
const keycloak_service_1 = require('./keycloak.service');
class KeycloakModule {
}
KeycloakModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [
                    keycloak_service_1.KeycloakService
                ]
            },] },
];
KeycloakModule.ctorParameters = [];
exports.KeycloakModule = KeycloakModule;
