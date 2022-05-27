import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Color, THEMES } from '../structs/color';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  public renderer: Renderer2;
  theme : Color;
  defaultTheme = 'Blue';

  constructor(
    private rendererFactory:RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.changeTheme(this.defaultTheme)
  }
  
  changeTheme(name: string){
    if(this.theme !== undefined){
    this.renderer.removeClass(this.document.body, this.theme.class)
    }
    this.theme = THEMES.find(t => t.name == name)
    console.log(this.theme)
    this.renderer.addClass(this.document.body, this.theme.class)
  }
}
