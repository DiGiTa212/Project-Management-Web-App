import { forwardRef } from "react";

const Input = forwardRef(({name, label, inputType = 'text'}, ref) => {
  const isTextArea = inputType === 'textarea'
  const InputComp = isTextArea
    ? 'textarea'
    : 'input';

  return <p className="flex flex-col gap-1 my-4">
    <label
      htmlFor={name}
      className="text-sm font-bold uppercase text-stone-500"
    >
      {label}
    </label>
    <InputComp
      ref={ref}
      name={name}
      {...(isTextArea ? {} : {type: inputType})}
      className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 min-h-10"
    />
  </p>;
})

export default Input;