import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';



export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full bg-slate-800 rounded-xl'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='r1ylw5q66rbgmbdlaudr67tm2iv04ae9uh0w3l2dej4h7cbp'
          
        initialValue={defaultValue}
        init={{
          plugins:
            "anchor code advlist help preview autolink  fullscreen insertdatetime charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
          toolbar:
            "undo redo | blocks fontfamily fontsize |  image | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
        }}
        onEditorChange={onChange}
      />
    )}
  />
</div>
);
}
