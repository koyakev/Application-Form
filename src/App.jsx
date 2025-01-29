import { useState } from 'react'

function App() {
  return (
    <>
      <div class="flex w-screen h-screen">
        <div class="w-80 h-auto p-3 m-auto flex flex-col items-center justify-center shadow-[0_0_3px_gray] rounded space-y-4">
          <p class="w-full text-2xl">Application Form</p>
          <input
            type="text"
            placeholder="Firstname"
            class="border rounded-full border-gray-500 p-3 w-full"
            />
          <input
            type="text"
            placeholder="Lastname"
            class="border rounded-full border-gray-500 p-3 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            class="border rounded-full border-gray-500 p-3 w-full"
          />
          <input
            type="text"
            placeholder="Contact number"
            class="border rounded-full border-gray-500 p-3 w-full"
          />
        </div>
      </div>
    </>
  )
}

export default App
