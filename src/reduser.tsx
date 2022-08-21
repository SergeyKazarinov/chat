export default function reducer(state: any, action: any) {
  switch(action.type) {
    case 'bold':
      return {
        ...state,
        count: action.payload
      };
    case 'italic':
      return {
        ...state,
        count: action.payload
      };
    case 'underline':
      return {
        ...state,
        count: action.payload
      };
    case 'ol':
      return {
        ...state,
        count: <ol>{action.payload.props.children.split('\n').map((i:string) => (<li>{i}</li>))}</ol>
      };
    case 'ul':
      return {
        ...state,
        count: <ul>{action.payload.props.children.split('\n').map((i:string) => (<li>{i}</li>))}</ul>
      };
    case 'reset':
      return {
        count: action.payload};
    default:
      throw new Error();
  }
  
}