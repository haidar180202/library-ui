import React, { useState } from 'react';
import Modal from '../components/modal/Modal';
import Button from '../components/Button';


const ModalDocumentation: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isNestedModalOpen, setNestedModal] = useState(false)
    const [isNestedModalOpen2, setNestedModal2] = useState(false)
  return (
    <div className="container mt-4">
      <h1>Modal Component Documentation</h1>
      <p>The <code>Modal</code> component is a reusable button element that supports various configurations through props.</p>

      <h1>Usage</h1>

      <h2>Default Modal</h2>
      <div className="mb-12">
        <pre>
            <code>
            {` const [isModalOpen, setIsModalOpen] = useState(false)

            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                width='600px'
                >
                <h2>
                    THIS IS MODAL
                </h2>
                <div>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Sed doloremque cum nostrum, dolorem a 
                    asperiores velit et ipsa accusantium est 
                    quod amet quis alias quia nulla fuga reprehenderit 
                    qui quidem placeat quo! Laboriosam ex architecto 
                    dignissimos provident quidem, officiis soluta veritatis 
                    tempore itaque, facere labore et nobis ratione eius 
                    blanditiis adipisci id modi rerum maiores vel. 
                    Illum, ex ipsam? Corporis placeat accusantium amet, 
                    repudiandae dolore totam? Ex, dolore animi est non 
                    dicta minus porro omnis rerum labore placeat maiores 
                    eligendi tempore dignissimos repellendus atque maxime 
                    corporis et quas? Ipsum rerum, at alias non voluptates 
                    optio temporibus eveniet, dolore asperiores delectus 
                    harum nisi illo soluta expedita quas. Dolor aliquam 
                    culpa nobis sunt accusamus, corporis aperiam? Impedit, 
                    autem optio! Aut, saepe odio!
                </div>
            </Modal>`}
            </code>
        </pre>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            width='600px'
            >
                <h2>
                    THIS IS MODAL
                </h2>
                <div>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Sed doloremque cum nostrum, dolorem a 
                    asperiores velit et ipsa accusantium est 
                    quod amet quis alias quia nulla fuga reprehenderit 
                    qui quidem placeat quo! Laboriosam ex architecto 
                    dignissimos provident quidem,
                </div>
        </Modal>
      </div>
      <h2>Dialog Modal</h2>
      <div className="mb-12">
        <pre>
            <code>
            {`const [isDialogOpen, setIsDialogOpen] = useState(false)

            <Modal 
            isOpen={isDialogOpen} 
            onClose={() => setIsDialogOpen(false)} 
            width='600px'
            isDialog={true}
            >
            <h2>
                THIS IS MODAL
            </h2>
            <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Sed doloremque cum nostrum, dolorem a 
                asperiores velit et ipsa accusantium est 
                quod amet quis alias quia nulla fuga reprehenderit 
                qui quidem placeat quo! Laboriosam ex architecto 
                dignissimos provident quidem, officiis soluta veritatis 
                tempore itaque, facere labore et nobis ratione eius 
                blanditiis adipisci id modi rerum maiores vel. 
                Illum, ex ipsam? Corporis placeat accusantium amet, 
                repudiandae dolore totam? Ex, dolore animi est non 
                dicta minus porro omnis rerum labore placeat maiores 
                eligendi tempore dignissimos repellendus atque maxime 
                corporis et quas? Ipsum rerum, at alias non voluptates 
                optio temporibus eveniet, dolore asperiores delectus 
                harum nisi illo soluta expedita quas. Dolor aliquam 
                culpa nobis sunt accusamus, corporis aperiam? Impedit, 
                autem optio! Aut, saepe odio!
            </div>
            <div className='text-end my-2'>
                <Button onClick={()=>setIsDialogOpen(false)}>
                    close
                </Button>
            </div>
        </Modal>`}
            </code>
        </pre>
        <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
        <Modal 
            isOpen={isDialogOpen} 
            onClose={() => setIsDialogOpen(false)} 
            width='600px'
            isDialog={true}
            >
            <h2>
                THIS IS MODAL
            </h2>
            <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Sed doloremque cum nostrum, dolorem a 
                asperiores velit et ipsa accusantium est 
                quod amet quis alias quia nulla fuga reprehenderit 
                qui quidem placeat quo! Laboriosam ex architecto 
                dignissimos provident quidem, officiis soluta veritatis 
                tempore itaque, facere labore et nobis ratione eius 
                blanditiis adipisci id modi rerum maiores vel. 
                Illum, ex ipsam? Corporis placeat accusantium amet, 
                repudiandae dolore totam? Ex, dolore animi est non 
                dicta minus porro omnis rerum labore placeat maiores 
                eligendi tempore dignissimos repellendus atque maxime 
                corporis et quas? Ipsum rerum, at alias non voluptates 
                optio temporibus eveniet, dolore asperiores delectus 
                harum nisi illo soluta expedita quas. Dolor aliquam 
                culpa nobis sunt accusamus, corporis aperiam? Impedit, 
                autem optio! Aut, saepe odio!
            </div>
            <div className='text-end my-2'>
                <Button onClick={()=>setIsDialogOpen(false)}>
                    close
                </Button>
            </div>
        </Modal>
      </div>
      <h2>Nested Modal</h2>
      <div className="mb-12">
        <pre>
            <code>
            {`
            <Modal 
            isOpen={isNestedModalOpen} 
            onClose={() => setNestedModal(false)} 
            width='600px'
            >
            <h2>
                THIS IS MODAL
            </h2>
            <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Sed doloremque cum nostrum, dolorem a 
                asperiores velit et ipsa accusantium est 
                quod amet quis alias quia nulla fuga reprehenderit 
                qui quidem placeat quo!
            </div>
            <div className='text-end my-2'>
                <Button onClick={()=>setNestedModal2(true)}>
                    Nested Modal
                </Button>
            </div>
            <Modal 
            isOpen={isNestedModalOpen2} 
            onClose={() => setNestedModal2(false)} 
            width='600px'
            isDialog={true}
            >
            <h2>
                THIS IS MODAL 2 (DIALOG)
            </h2>
            <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisic
            </div>
            <div className='text-end my-2'>
                <Button onClick={()=>setNestedModal2(false)}>
                    close
                </Button>
            </div>
            </Modal>
        </Modal>
            `}
            </code>
        </pre>
        <Button onClick={() => setNestedModal(true)}>Open Nested Modal</Button>
        <Modal 
            isOpen={isNestedModalOpen} 
            onClose={() => setNestedModal(false)} 
            width='600px'
            >
            <h2>
                THIS IS MODAL
            </h2>
            <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Sed doloremque cum nostrum, dolorem a 
                asperiores velit et ipsa accusantium est 
                quod amet quis alias quia nulla fuga reprehenderit 
                qui quidem placeat quo!
            </div>
            <div className='text-end my-2'>
                <Button onClick={()=>setNestedModal2(true)}>
                    Nested Modal
                </Button>
            </div>
            <Modal 
            isOpen={isNestedModalOpen2} 
            onClose={() => setNestedModal2(false)} 
            width='600px'
            isDialog={true}
            >
            <h2>
                THIS IS MODAL 2 (DIALOG)
            </h2>
            <div>
                Lorem ipsum dolor sit amet 
                consectetur adipisic
            </div>
            <div className='text-end my-2'>
                <Button onClick={()=>setNestedModal2(false)}>
                    close
                </Button>
            </div>
            </Modal>
        </Modal>
      </div>

    </div>
  );
};

export default ModalDocumentation;
