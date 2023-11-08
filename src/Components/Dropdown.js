import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Down from '../assets/img/arrow_down.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dropdown() {
    
  return (
    <Menu as="div" className="relative hidden text-left xl:inline-block">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[#F7F7F7] px-6 py-3 text-xs font-light text-gray-900 hover:bg-gray-50">
          FR 
          <img 
          src={Down} 
          alt="Down"
           />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-2 w-40 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 EN
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown;