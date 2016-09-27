"use strict";
const core_1 = require('@angular/core');
class KeycloakService {
    static init(config) {
        let keycloakAuth = new Keycloak(config);
        KeycloakService.auth.loggedIn = false;
        return new Promise((resolve, reject) => {
            keycloakAuth.init({ onLoad: 'login-required' })
                .success(() => {
                KeycloakService.auth.loggedIn = true;
                KeycloakService.auth.authz = keycloakAuth;
                KeycloakService.auth.logoutUrl = `${keycloakAuth.authServerUrl}/realms/${keycloakAuth.realm}/protocol/openid-connect/logout?redirect_uri=/`;
                resolve();
            })
                .error(reject);
        });
    }
    logout() {
        console.log('*** LOGOUT');
        KeycloakService.auth.loggedIn = false;
        KeycloakService.auth.authz = null;
        window.location.href = KeycloakService.auth.logoutUrl;
    }
    getToken() {
        return new Promise((resolve, reject) => {
            if (KeycloakService.auth.authz.token) {
                KeycloakService.auth.authz.updateToken(5)
                    .success(() => {
                    resolve(KeycloakService.auth.authz.token);
                })
                    .error(() => {
                    reject('Failed to refresh token');
                });
            }
        });
    }
}
KeycloakService.auth = {};
KeycloakService.decorators = [
    { type: core_1.Injectable },
];
KeycloakService.ctorParameters = [];
exports.KeycloakService = KeycloakService;
