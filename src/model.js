import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
import * as jscolor from '@eastdesire/jscolor'


export const model = [
  new TitleBlock('JavaScript Website Builder', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(90deg, #c9b6bc,#e0e5eb)',
      color: '#475272',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '1rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '300px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'You can enter title, text and columns.',
    'Do not enter text in those columns that you do not want to fill in, the constructor will display only filled ones.',
  ], {
    styles: {
      background: 'linear-gradient(90deg, #a2a49f,#e0d0c4,#f1dac4)',
      padding: '2rem',
      color: '#000',
      'font-weight': 'bold'
    }
  }),
  new TextBlock('In the sidebar, you can adjust the size and color of the text, and the background color.', {
    styles: {
      background: 'linear-gradient(90deg, #475272,#9391ab,#ded8e8)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]