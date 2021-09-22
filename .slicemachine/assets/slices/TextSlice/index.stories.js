import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Consectetur qui minim ad deserunt aliquip adipisicing ipsum dolor ipsum adipisicing ea. Esse incididunt nostrud non ullamco ea incididunt minim do consectetur reprehenderit id eiusmod laboris cupidatat. Dolore aliquip sunt in consequat quis aliqua sint dolor culpa consectetur aliquip cupidatat aliquip.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Nostrud est laboris qui id labore ea minim mollit duis excepteur sint nisi. Consequat do aliqua qui minim dolore laborum id qui ex excepteur non. Ad elit esse id.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
