import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Upload, { UploadFile } from './upload';

const defaultFileList: UploadFile[] = [];

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big');
    return false;
  }
  return true;
};

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type });
  return Promise.resolve(newFile);
};

const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      defaultFileList={defaultFileList}
      // onSuccess={action('onSuccess')}
      // onError={action('onError')}
      // onProgress={action('onProgress')}
      name="fileName"
      data={{ key: 'value' }}
      headers={{ 'x-Powered-By': 'cookie' }}
      onRemove={action('removed')}
      onChange={action('changed')}
      accept=".jpg"
      multiple
      drag
    />
  );
};

storiesOf('Upload Component', module).add('Upload', SimpleUpload);
