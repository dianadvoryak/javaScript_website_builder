import { row, col, css } from './../utils'

class Block{
  constructor(value, options){
    this.value = value
    this.options = options
  }

  toHTML(){
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block{
  constructor(value, options){
    super(value, options)
  }

  toHTML(){
    const {tag = 'h1', styles, fz} = this.options
    // console.log(styles)
    return row(col(`<${tag} style="${css(fz)}">${this.value}</${tag}>`), css(styles))
  }
}

export class TextBlock extends Block{
  constructor(value, options){
    super(value, options)
  }

  toHTML(){
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class ColumnsBlock extends Block{
  constructor(value, options){
    super(value, options)
  }
  
  toHTML(){
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

export class ImageBlock extends Block{
  constructor(value, options){
    super(value, options)
  }

  toHTML(){
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
  }
}


