<div
  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
>
  <div class="relative w-auto my-6 mx-auto max-w-3xl">
    <!--content-->
    <div
      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
    >
      <!--header-->
      <slot name="modal-header" />
      <!--body-->
      <div class="relative p-6 flex-auto">
        <slot name="modal-body" />
      </div>
      <!--footer-->
      <div
        class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
      >
        <slot name="modal-footer" />
      </div>
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black" />
