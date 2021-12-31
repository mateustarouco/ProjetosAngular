import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-menudois',
  templateUrl: './menudois.component.html',
  styleUrls: ['./menudois.component.scss']
})
export class MenudoisComponent implements OnInit {

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.menus, event.previousIndex, event.currentIndex);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  setEfect(id: any) {
    document.querySelectorAll('.component').forEach(item => {
      item.classList.remove('active')
    })
    // @ts-ignore
    document.getElementById(id).classList.toggle('active')
  }

  resetEfect() {
    document.querySelectorAll('.component').forEach(item => {
      item.classList.remove('active')
    })
  }

  toggle() {
    // @ts-ignore
    document.getElementById('menu').classList.toggle('open-menu')
    document.querySelectorAll('.component').forEach(item => {
      item.classList.remove('active')
    })
  }

  configure() {
    // @ts-ignore
    document.getElementById('menu').classList.toggle('open-menu-conf')
    // @ts-ignore
    document.getElementById('configuration').classList.toggle('configuration-open')

  }

  menus = [
    {
      name: 'Lista de Ocorrências',
      icon: 'list-occurrences',
      id: 1
    },
    {
      name: 'Monitoramento Maria Da Penha',
      icon: 'protective-measure',
      id: 2
    },
    {
      name: 'Monitorar Ocorrências no Mapa',
      icon: 'map-monitoring',
      id: 3
    },
    {
      name: 'Lista de Ouvidorias',
      icon: 'forum-outline',
      id: 4
    },
    {
      name: 'Postar Noticia',
      icon: 'news-feed',
      id: 5
    },
    {
      name: 'Avaliações',
      icon: 'thumbs-up-down',
      id: 7
    },
    {
      name: 'Medida Protetiva de Urgência',
      icon: 'mpu',
      id: 8
    },
    {
      name: 'Mensagens',
      icon: 'cellphone-message',
      id: 9
    },
    {
      name: 'Pontos Importantes',
      icon: 'points',
      id: 10
    },
    {
      name: 'Configurar Usuários',
      icon: 'account-group',
      id: 11
    },
    {
      name: 'Configurar Secretarias',
      icon: 'office-building',
      id: 12
    },
    {
      name: 'Configurar Tipos de Ocorrência',
      icon: 'format-list-bulleted',
      id: 13
    },
    {
      name: 'Configurar Status da Ocorrência',
      icon: 'debug-step-over',
      id: 14
    },
    {
      name: 'Configurar Integração',
      icon: 'lan',
      id: 15
    }
  ]
}
