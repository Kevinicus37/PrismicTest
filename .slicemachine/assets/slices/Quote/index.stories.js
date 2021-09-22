import MyComponent from '../../../../slices/Quote';

export default {
  title: 'slices/Quote'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Cillum labore sint ad. Officia eiusmod aute ex tempor id minim anim. In eu ad ut esse non quis quis dolor fugiat tempor quis qui.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Tempor laborum mollit Lorem velit fugiat pariatur consectetur dolore laborum. Ullamco tempor exercitation deserunt ullamco sit sit sit laborum. Amet in excepteur culpa sit nulla quis in dolor adipisicing deserunt quis irure reprehenderit.","spans":[]}],"reference":[{"type":"paragraph","text":"Mollit occaecat irure est voluptate qui id dolor officia veniam dolore laboris do ut irure. Pariatur commodo enim mollit aliquip nulla consequat esse laboris et. Lorem et elit exercitation sint ut fugiat pariatur.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
