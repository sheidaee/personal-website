import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';

function useEditor() {
  const [editor, setEditor] = useState(false);
  useEffect(() => {
    if (editor === false) {
      setEditor(true);
    }
  }, [editor]);

  return editor;
}

function initialValueHandler(initialValue) {
  if (!initialValue) {
    return EditorState.createEmpty();
  }

  const contentBlock = htmlToDraft(initialValue);
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );

    return EditorState.createWithContent(contentState);
  }

  return EditorState.createEmpty();
}

function useDescription(initialValue, editor) {
  const [description, setDescription] = useState();

  useEffect(() => {
    setDescription(initialValueHandler(initialValue));
  }, [initialValue, editor]);

  const [descriptionHtml, setDescriptionHtml] = useState('');

  function editorStateHandler(editorContent, onChange) {
    if (!editorContent) {
      return;
    }

    const descriptionToRaw = convertToRaw(editorContent.getCurrentContent());
    const htmlDescription = draftToHtml(descriptionToRaw);

    setDescription(editorContent);
    setDescriptionHtml(htmlDescription);

    /* set value in form state */
    onChange(htmlDescription);
  }

  return { description, editorStateHandler };
}

const EditorField = ({ onChange, title, html = '' }) => {
  const editor = useEditor();

  const { description, editorStateHandler } = useDescription(html, editor);

  return (
    editor && (
      <label htmlFor="description">
        <div className="label-title">{title}</div>
        <Editor
          editorState={description}
          onEditorStateChange={editorValue =>
            editorStateHandler(editorValue, onChange)
          }
        />
        <span className="input-focus-effect theme-bg" />
      </label>
    )
  );
};

EditorField.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditorField;
