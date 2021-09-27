import MyComponent from '../../../../slices/Quote';

export default {
  title: 'slices/Quote'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Laborum Lorem irure magna minim sunt laborum eu nostrud ex mollit nostrud duis elit. Exercitation non laborum fugiat mollit cupidatat aliqua deserunt enim exercitation.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Qui fugiat aliqua fugiat nisi. Incididunt laboris eiusmod eu id cillum eu officia dolor pariatur proident et amet cupidatat duis.","spans":[]}],"reference":[{"type":"paragraph","text":"Laboris irure ipsum ipsum. Voluptate laborum occaecat sit aute sunt ad fugiat commodo nisi nulla velit ullamco aliqua. Ipsum esse labore do enim duis.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
