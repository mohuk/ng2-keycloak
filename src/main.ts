import { NgModule } from '@angular/core';
import { KeycloakService } from './keycloak.service';

@NgModule({
  providers: [
    KeycloakService
  ]
})
export class KeycloakModule {}
