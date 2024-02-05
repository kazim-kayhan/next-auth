'use client';

import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Monitor, Search, User } from 'lucide-react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import Logo from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { siteSettings } from '../../../config/site.settings';

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-background/80' />
          </Transition.Child>

          <div className='fixed inset-0 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                    <button
                      type='button'
                      className='-m-2.5 p-2.5'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon className='h-6 w-6 text-foreground' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 pb-4'>
                  <div className='flex h-16 shrink-0 items-center'>
                    <Logo className='h-8 w-auto' />
                  </div>
                  <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                      <li>
                        <ul role='list' className='-mx-2 space-y-1'>
                          {siteSettings.sidebarLinks.admin.navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={cn(
                                  item.current
                                    ? 'bg-muted text-primary'
                                    : 'text-muted-foreground hover:text-primary hover:bg-muted',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className={cn(
                                    item.current
                                      ? 'text-primary'
                                      : 'text-muted-foreground group-hover:text-primary',
                                    'h-6 w-6 shrink-0'
                                  )}
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className='text-xs font-semibold leading-6 text-muted-foreground'>
                          Product Management
                        </div>
                        <ul role='list' className='-mx-2 mt-2 space-y-1'>
                          {siteSettings.sidebarLinks.admin.productsManagement.map((section) => (
                            <li key={section.name}>
                              <a
                                href={section.href}
                                className={cn(
                                  section.current
                                    ? 'bg-muted text-primary'
                                    : 'text-muted-foreground hover:text-primary hover:bg-muted',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <span
                                  className={cn(
                                    section.current
                                      ? 'text-primary border-primary'
                                      : 'text-muted-foreground border-border group-hover:border-primary group-hover:text-primary',
                                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-background'
                                  )}
                                >
                                  {section.initial}
                                </span>
                                <span className='truncate'>{section.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className='mt-auto'>
                        <ul role='list' className='-mx-2 space-y-1'>
                          {siteSettings.sidebarLinks.admin.siteSettings.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={cn(
                                  item.current
                                    ? 'bg-muted text-primary'
                                    : 'text-muted-foreground hover:text-primary hover:bg-muted',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className={cn(
                                    item.current
                                      ? 'text-primary'
                                      : 'text-muted-foreground group-hover:text-primary',
                                    'h-6 w-6 shrink-0'
                                  )}
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-background px-6 pb-4'>
          <div className='flex h-16 shrink-0 items-center'>
            <Logo className='h-8 w-auto' />
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {siteSettings.sidebarLinks.admin.navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          item.current
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={cn(
                            item.current
                              ? 'text-primary'
                              : 'text-muted-foreground group-hover:text-primary',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className='text-xs font-semibold leading-6 text-muted-foreground'>
                  Product Management
                </div>
                <ul role='list' className='-mx-2 mt-2 space-y-1'>
                  {siteSettings.sidebarLinks.admin.productsManagement.map((section) => (
                    <li key={section.name}>
                      <Link
                        href={section.href}
                        className={cn(
                          section.current
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <span
                          className={cn(
                            section.current
                              ? 'text-primary border-primary'
                              : 'text-muted-foreground border-border group-hover:border-primary group-hover:text-primary',
                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-background'
                          )}
                        >
                          {section.initial}
                        </span>
                        <span className='truncate'>{section.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='mt-auto'>
                <ul role='list' className='-mx-2 space-y-1'>
                  {siteSettings.sidebarLinks.admin.siteSettings.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          item.current
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={cn(
                            item.current
                              ? 'text-primary'
                              : 'text-muted-foreground group-hover:text-primary',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='lg:pl-72'>
        <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-muted-foreground lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Separator */}
          <div className='h-6 w-px bg-muted lg:hidden' aria-hidden='true' />

          <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between'>
            <form className='relative flex flex-1 my-auto max-w-sm items-center'>
              <Label htmlFor='search-field' className='sr-only'>
                Search
              </Label>
              <Search
                className='pointer-events-none absolute inset-y-0 left-2 h-8 w-5 text-muted-foreground'
                aria-hidden='true'
              />
              <Input
                id='search-field'
                className='block h-8 w-full rounded-full border-border py-0 pl-8 pr-0 text-foreground placeholder:text-muted-foreground sm:text-sm'
                placeholder='Search...'
                type='search'
                name='search'
              />
            </form>
            <div className='flex items-center gap-x-4 lg:gap-x-6'>
              <Button className='rounded-full hover:text-foreground' size='sm' asChild>
                <Link href='/'>
                  <Monitor className='mr-2 h-4 w-4' /> Visit Site
                </Link>
              </Button>
              <button type='button' className='-m-2.5 p-2.5 text-muted-foreground'>
                <span className='sr-only'>View notifications</span>
                <BellIcon
                  className='h-6 w-6 text-foreground hover:text-primary'
                  aria-hidden='true'
                />
              </button>

              {/* Separator */}
              <Separator className='hidden lg:block lg:h-6 lg:w-px' aria-hidden='true' />

              {/* Profile dropdown */}
              <Menu as='div' className='relative'>
                <Menu.Button className='-m-1.5 flex items-center p-1.5'>
                  <span className='sr-only'>Open user menu</span>
                  <User className='h-6 w-6' />
                  <span className='hidden lg:flex lg:items-center'>
                    <span
                      className='ml-4 text-sm font-semibold leading-6 text-foreground'
                      aria-hidden='true'
                    >
                      Tom Cook
                    </span>
                    <ChevronDownIcon
                      className='ml-2 h-5 w-5 text-muted-foreground'
                      aria-hidden='true'
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-background py-2 shadow-lg ring-1 ring-foreground/5 focus:outline-none'>
                    {siteSettings.authorizedLinks.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            href={item.href}
                            className={cn(
                              active
                                ? 'bg-muted text-primary'
                                : 'text-muted-foreground hover:text-primary hover:bg-muted',
                              'flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className='py-10'>
          <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
        </main>
      </div>
    </div>
  );
}
