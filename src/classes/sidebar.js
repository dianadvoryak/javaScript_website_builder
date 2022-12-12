import { TitleHTML, TextHTML, ColumnsHTML } from "../utils"
import { TextBlock, TitleBlock, ColumnsBlock } from './blocks';

export class Sidebar{
  constructor(selector, updateCallback){
    this.$el = document.querySelector(selector)
    this.update = updateCallback

    this.init()
  }

  init(){
    this.template.map(form => {
      this.$el.insertAdjacentHTML('beforeend', form)
      this.$el.addEventListener('submit', this.add.bind(this))
    })
  }

  get template(){
    return [
      TitleHTML('title'),
      TextHTML('text'),
      ColumnsHTML('columns'),
    ]
  }

  add(event){
    event.preventDefault()

    const type = event.target.name
    let newBlock = ''

    if(type === 'title'){
      const value = event.target.value.value
      const tag = [...event.target.tag].find(i => i.checked === true).id
      const textAlign = [...event.target['text-align']].find(i => i.checked === true).id
      const fontSize = event.target['font-size'].value == '' ? 16 : event.target['font-size'].value
      const background = event.target.background.value
      const color = event.target.color.value

      const styles = {
        'text-align': textAlign,
        background,
        color,
      }
      const fz = {
        'font-size': fontSize + 'px',
      }

      newBlock = new TitleBlock(value, {tag, styles, fz})
      event.target.value.value = ''

    } else if (type === 'text') {
      const value = event.target.value.value
      const fontSize = event.target['font-size'].value == '' ? 16 : event.target['font-size'].value
      const background = event.target.background.value
      const color = event.target.color.value

      const styles = {
        'font-size': fontSize + 'px',
        background,
        color,
      }

      newBlock = new TextBlock(value, {styles})
      event.target.value.value = ''

    } else if (type === 'columns') {
      const value1 = event.target.value1.value
      const value2 = event.target.value2.value
      const value3 = event.target.value3.value
      const value4 = event.target.value4.value
      const value5 = event.target.value5.value
      const fontSize = event.target['font-size'].value == '' ? 16 : event.target['font-size'].value
      const background = event.target.background.value
      const color = event.target.color.value

      const value = []
      value1 && value.push(value1)
      value2 && value.push(value2)
      value3 && value.push(value3)
      value4 && value.push(value4)
      value5 && value.push(value5)

      const styles = {
        padding: '20px',
        'font-size': fontSize + 'px',
        background,
        color,
      }

      newBlock = new ColumnsBlock(value, {styles})
      event.target.value1.value = ''
      event.target.value2.value = ''
      event.target.value3.value = ''
      event.target.value4.value = ''
      event.target.value5.value = ''

    } else {

    }
      
    this.update(newBlock)

    
    
  }
}

