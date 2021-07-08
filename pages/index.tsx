import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Head>
        <title>Frontend Mentor | Product feedback app</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
      </Head>

      <HeaderWrapper>
        <TitleWrapper>
          <Title>Frontend Mentor</Title>
          <Subtitle>Feedback Board</Subtitle>
        </TitleWrapper>

        <button onClick={() => setOpen((prev) => !prev)}>
          <Image
            width="20"
            height="17"
            src={
              !open
                ? "/assets/shared/mobile/icon-hamburger.svg"
                : "/assets/shared/mobile/icon-close.svg"
            }
            alt="Menu button"
          />
        </button>
      </HeaderWrapper>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 mt-[72px] overflow-hidden"
          open={open}
          onClose={() => {}}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 mt-[72px] right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-[271px]">
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div
                          className="h-full border-2 border-dashed border-gray-200"
                          aria-hidden="true"
                        >
                          <button>hello</button>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px 15px 24px;
  background: url("/assets/suggestions/mobile/background-header.png");
`;

const TitleWrapper = styled.div`
  color: ${(props) => props.theme.palette.white};
`;

const Title = styled.h1`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.19px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: medium;
  opacity: 0.75;
`;
