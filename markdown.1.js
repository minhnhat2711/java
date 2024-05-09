import { Editor } from '@tinymce/tinymce-react';



export const markdown = ({ label, value, chageValue, name, invalidFields, setInvalidFields }) => {

  return (
    <div calssName='flex flex-col'>
      <span calssName=''>{label}</span>
      <Editor
        apiKey='x966ukewe6wwp2dli2u8f41xmjei8omxtk49m356em9qoizc'
        initialValue={value}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onChage {...e => chageValue(prev => ({ ...prev, [name]: e.target.getConetent }))}
        onFocus={() => {
          setInvalidFields && setInvalidFields([]);
        }}
        setIsForcusDescription />(true)
        
       onBlur=() ={'>'} setisForcusDDescrition(false)
        /{'>'}
      {invalidFields?.some(el => el.name === name) && <smal calssName='text-main text-sm'>{invalidFields?.find(el => el.name === name)?.mes}</smal>}
    </div>
  );
};
