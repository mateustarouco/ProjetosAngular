import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menuResponsivo';
  constructor(public matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'cog',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/cog-solid.svg')
    );
    matIconRegistry.addSvgIcon(
      'list-occurrences',
      domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/format-list-bulleted.svg')
    );
    matIconRegistry.addSvgIcon(
      'protective-measure',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/protective-measure.svg')
    );
    matIconRegistry.addSvgIcon(
      'map-monitoring',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/map-monitoring.svg')
    );
    matIconRegistry.addSvgIcon(
      'forum-outline',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/forum-outline.svg')
    );
    matIconRegistry.addSvgIcon(
      'news-feed',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/news-feed.svg')
    );
    matIconRegistry.addSvgIcon(
      'thumbs-up-down',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/thumbs-up-down.svg')
    );
    matIconRegistry.addSvgIcon(
      'mpu',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/mpu.svg')
    );
    matIconRegistry.addSvgIcon(
      'cellphone-message',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/cellphone-message.svg')
    );
    matIconRegistry.addSvgIcon(
      'points',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/points.svg')
    );
    matIconRegistry.addSvgIcon(
      'account-group',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/account-group.svg')
    );
    matIconRegistry.addSvgIcon(
      'office-building',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/office-building.svg')
    );
    matIconRegistry.addSvgIcon(
      'format-list-bulleted',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/format-list-bulleted.svg')
    );
    matIconRegistry.addSvgIcon(
      'debug-step-over',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/debug-step-over.svg')
    );
    matIconRegistry.addSvgIcon(
      'lan',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lan.svg')
    );
  }
}
