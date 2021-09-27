import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Irure ex consectetur cillum velit commodo anim Lorem minim exercitation mollit laborum ipsum incididunt. Cillum minim eu id quis ullamco ullamco magna et ipsum irure consequat incididunt anim incididunt. Lorem quis aute excepteur qui esse duis in mollit Lorem adipisicing.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Eiusmod magna excepteur proident labore.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
