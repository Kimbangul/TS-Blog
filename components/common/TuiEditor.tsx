import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const TuiEditor = (props: TuiEditorProps) => {
  return (
    <Editor
      placeholder={props.placeholder || '내용을 입력해주세요.'}
      height={props.height || '48rem'}
      initialEditType='wysiwyg'
      initialValue={props.value || ''}
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
    />
  );
};

type TuiEditorProps = {
  placeholder?: string;
  height?: string;
  value?: string;
};

export default TuiEditor;
