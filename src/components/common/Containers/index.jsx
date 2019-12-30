import { Screen } from "./screen"

export const WithContainer =({WrappedComponent,style})=>{
  // type,height,
   
return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
       this.state = {
         data:style
      };
    }

    // componentDidMount() {
    //   // ... that takes care of the subscription...
    //   DataSource.addChangeListener(this.handleChange);
    // }

    // componentWillUnmount() {
    //   DataSource.removeChangeListener(this.handleChange);
    // }

    // handleChange() {
    //   this.setState({
    //     data: selectData(DataSource, this.props)
    //   });
    // }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      const { extraProp, ...passThroughProps } = this.props;
      const injectedProp = this.state.data;
      return <Screen><WrappedComponent injectedProp={injectedProp}
       {...passThroughProps}></WrappedComponent></Screen>;
    }
}
//  Screen =({type,height,style, component})=>{<WrappedComponent injectedProp={injectedProp}
// {...passThroughProps}></WrappedComponent>
// }
}