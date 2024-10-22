import { useRef } from 'react';
import CustomDiv from './CustomDiv';
import Input from './Input';
import Modal from './Modal';

const ProjectForm = (({handleSubmit, handleCancel}) => {
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()
  const dialogRef = useRef()

  const onCancel = (e) => {
    e.preventDefault()

    handleCancel()
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (
      titleRef.current.value.trim() === '' ||
      descriptionRef.current.value.trim() === '' ||
      dueDateRef.current.value.trim() === ''
    ) {
      dialogRef.current.showModal()
      return
    }

    const formData = new FormData(e.target)
    const projectData = Object.fromEntries(formData.entries()); // Convert FormData to object

    handleSubmit(projectData);
  }

  return (
    <>
      <Modal ref={dialogRef} btnCaption='Okay'>
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid Format
        </h2>
        <p className="text-stone-600 mb-4">
          Please do not leave project details blank.
        </p>
      </Modal>
      <form onSubmit={onSubmit} className="mt-4 text-left">
        <CustomDiv>
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <button
                onClick={onCancel}
                className="text-stone-800 hover:text-stone-950"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              >
                Save
              </button>
            </li>
          </menu>
          <div>
            <Input ref={titleRef} name="title" label="Title" />
            <Input
              ref={descriptionRef}
              name="description"
              label="Description"
              inputType="textarea"
            />
            <Input
              ref={dueDateRef}
              name="dueDate"
              label="Due Date"
              inputType="date"
            />
          </div>
        </CustomDiv>
      </form>
    </>
  );
})

export default ProjectForm;