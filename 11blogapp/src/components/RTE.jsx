import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

function RTE({
    name, control, defaultValue, label, error, helperText
}) {
  return (
    <div className="w-full">
        {
            label && <label className="inline-block pl-1 mb-1">{label}</label>
        }
        <Controller
            name={name || 'content'}
            control={control}
            defaultValue={defaultValue}
            render={({ field: {onChange}}) => (
                <Editor 
                    initialValue={defaultValue}
                    init={{
                        branding: false, 
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}

export default RTE