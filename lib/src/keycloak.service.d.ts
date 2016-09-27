export declare class KeycloakService {
    static auth: any;
    static init(config: any): Promise<any>;
    logout(): void;
    getToken(): Promise<string>;
}
