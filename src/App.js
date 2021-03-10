
import styled from '@emotion/styled'

const ComponentStyled = styled.div`
  background-color: blue;

  &[data-placement*='top'] .nested-element-selector {
    background-color: red;
  }

  --some-variable-here: 12pt;
`;

function App() {
  return (
    <div className="App">
      <ComponentStyled data-placement='top'>
        <div>
          <span class="nested-element-selector">I am some text here</span>
        </div>
      </ComponentStyled>
    </div>
  );
}

export default App;
