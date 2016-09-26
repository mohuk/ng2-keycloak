import 'keycloak-js';
export declare class KeycloakService {
    static auth: any;
    static init(): Promise<any>;
    logout(): void;
    getToken(): Promise<string>;
}
