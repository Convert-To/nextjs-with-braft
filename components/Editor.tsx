import { useState, useEffect, StrictMode } from "react";
import BraftEditor, { EditorState } from "braft-editor";
import "braft-editor/dist/index.css";

export default function Editorf() {
  const [state, setState] = useState(BraftEditor.createEditorState(null));

  useEffect(() => {
    setState(BraftEditor.createEditorState("初始化"));
  }, []);

  // 在编辑器内按下Command/Ctrl + s时触发的函数
  const save = () => {
    console.log(state.toHTML());
    console.log(state.toRAW());
    console.log(state.toRAW(true));
  };

  // 编辑器状态(内容、选区等)发生变化时的回调函数
  const changeHandle = (editorState: EditorState) => {
    setState(editorState);
  };

  return (
    <>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: state.toHTML() }}></div>
        <div>{JSON.stringify(state.toRAW(true))}</div>
      </div>
      <BraftEditor
        style={{ background: "white" }}
        value={state}
        onChange={changeHandle}
        onSave={save}
      />
    </>
  );
}
