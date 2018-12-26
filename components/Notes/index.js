import { Component } from 'react';

let CodeMirror = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror');
  require('codemirror/mode/markdown/markdown');
}

class Notes extends Component {
  render() {
    const { url } = this.props;
    return (
      CodeMirror && (
        <CodeMirror
          className="Notes"
          value={`# My notes\n\n- [url](${url})\n\n...`}
          options={{ mode: 'markdown' }}
        />
      )
    );
  }
}

export default Notes;
