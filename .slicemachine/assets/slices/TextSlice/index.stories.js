import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"In dolore ut cillum elit. Duis id proident magna in ipsum labore mollit eu sit. Veniam incididunt non cupidatat ut mollit ut cillum.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Consectetur sunt enim reprehenderit. Fugiat minim anim nulla.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
