import MyComponent from '../../../../slices/Quote';

export default {
  title: 'slices/Quote'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Adipisicing laboris nisi minim nostrud in exercitation ullamco sunt dolor magna proident aliquip consequat nisi.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Laborum id Lorem consectetur et magna incididunt tempor. Id sint magna incididunt dolore aliquip reprehenderit ad. Excepteur minim amet irure sunt elit qui dolore velit cupidatat veniam aliquip elit amet irure.","spans":[]}],"reference":[{"type":"paragraph","text":"Minim aliquip laboris pariatur ipsum aliqua ex sunt. Mollit commodo aute consequat.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
