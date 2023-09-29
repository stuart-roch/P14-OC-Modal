# @stuart.roch/modal-component-library

A Modal React component created as a part of a training project
## Installation

Run the following command:
`npm install @stuart.roch/modal-component-library`

## How to use

In your file, add this line:
`import Modal from '@stuart.roch/modal-component-library'`

You can use it like a standard react component et style it with styled-components or classic CSS

### Options 

| Options | Type | Default Value | Required | Description |
|:---:|:---:|:---:|:---:|:---:|
| className | string | none | yes | ClassName of the Modal Container |
| modalState | list | none | yes | React State that control the render |
| modalContentDivClassName | string | none | no | ClassName of the Modal content container |
| hasCloseButton | boolean | true | no | The component has a close button included |
| closeButtonClassName | string | none | no | Included close button classname |
| closeButtonChild | HTMLElement or React Component | none | no | Included close button child |
| onClose | function | close the modal | no | Function called when you click on the close button |

#### Modal Structure 

The name of class are just examples

```html
<div class="container">
    <div class="content-container">
        "Your Content"
        <button>Close</button>
    </div>
</div>
```
### Example 1 : Default use

```React
import Modal from '@stuart.roch/modal-component-library'
import { useState } from 'react'
...

const [openModal, setOpenModal] = useState(false)

<>
    <Modal 
        className='modal-wrapper'
        modalState={[openModal, setOpenModal]}
    >This is a Modal</Modal>
</>


```
