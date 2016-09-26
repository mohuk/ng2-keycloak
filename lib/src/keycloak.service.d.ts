import 'keycloak-js';
export declare class KeycloakService {
    static auth: {
        loggedIn: boolean;
        authz: KeycloakModule.IKeycloak;
        logoutUrl: string;
    };
    static init(): Promise<any>;
    logout(): void;
    getToken(): Promise<string>;
}
