
import { EditorClient } from '../constructors/editorclient'
import { puffin } from '@mkenzo_8/puffin'

const ImageViewerStyle = puffin.style.div`
    &{
       display:flex;
       justify-content:center;
       align-items:center;
       height:100%;
    }
    & > img{
        width:auto;
        height:auto;
        max-height:87%;
        max-width:87%;
    }
`

const ImageViewerClient = new EditorClient({
    name:'codemirror',
},{
    getValue: (instance) => "",
    getLangFromExt(extension){
        switch(extension){
            /*
            Every case refers to a supported image format.
            */
           case 'ico':
                return { name: 'ico' }
            case 'svg':
                return { name: 'svg' }
            case 'png':
                return { name: 'png' }
            case 'jpg':
                return { name: 'jpg' }
            default:
                return { 
                    name: extension,
                    unknown:true
                 }   
        }
    },
    create({ element, directory }){
        
        const ImageViewerComp = puffin.element(`
            <ImageViewerStyle>
                <img draggable="false" src="${directory}"/>
            </ImageViewerStyle>
        `,{
            components:{
                ImageViewerStyle
            }
        })

        puffin.render(ImageViewerComp,element)

        return {
            instance : {} //Returns empty object because there is no editor instance
        }
    },
    getCursorPosition({instance}){
        return {
            line:0,
            ch:0
        }
    }
})

export default ImageViewerClient