import { NgModule } from '@angular/core';
import { KeycloakService } from './keycloak.service';

@NgModule({
    declarations: [
        KeycloakService
    ],
    exports: [
        KeycloakService
    ]
})
export class KeycloakModule {}